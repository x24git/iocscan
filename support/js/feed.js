	//THE ACTUAL FUNCTION HAS BEEN REMOVED AND A BASIC FILE HAS BEEN USED IN ITS PLACE
	//Please use the actual public release for a usable source.

const TIMEOUT = 10000;
const ipv4check = RegExp('^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$');
var webrequest = require('request');
var parse = require('csv-parse');
var helper = require('./helper');
var analyze = require('./score');
var whois = require('whois');
var util = require('util');
var dns = require('dns');

module.exports = {
    scan: function(url,compare,key,callback){
           return webrequest.get(url, findMatch)

            function findMatch(error, response, body, delim = ',') {
                if (!error && response.statusCode == 200) {
                    var csv = body;
                    return parse(csv, {comment: '#', escape: '\\', delimiter: delim, relax_column_count: true },resolveRow);}
                else return callback(null, new Error("Unable to call API"))
            }

            function resolveRow(err, output){
                if (err){console.error(err); callback(null,err)};
                var index = helper.arraySearch(output,compare);
                if(index == -1){
                    return callback(null,new Error("No Match Found"))
                }
                var result = helper.arrayToObject(key,output[index]);
                if (result == -1){
                    return callback(null,new Error("Key does not match input data"))
                }
                return callback(result,null);
                    }
    },
    request: function(url,callback,options="", timeout=TIMEOUT){
        webrequest.get({uri:url, headers:options, timeout:timeout},function(error,response,body){
            if (!error && response.statusCode == 200) {
                try{
                    var result = JSON.parse(body)
                } catch(e) {return callback(null,new Error (e))}
                if(result.response_code)
                    if(result.response_code == 0)
                        return callback(null,new Error ("No Match Found"))
                return callback(result,null);}
            else if(!error && response.statusCode == 404) {
                return callback(null,new Error ("No Match Found"))
            }
            else{
                return callback(null,new Error ("Unable to Call API" + (typeof response ==='undefined') ? url : response.statusCode));
            }
        })
    },

    post: function(url,data = {},callback,options=""){
        webrequest.post({uri:url, headers:options, form:data, timeout:TIMEOUT},function(error,response,body){
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body)
                if(result.response_code)
                    if(result.response_code == 0)
                        return callback(null,new Error ("No Match Found"))
                return callback(result,null);}
            else if(!error && response.statusCode == 404) {
                return callback(null,new Error ("No Match Found"))
            }
            else{
                return callback(null,new Error ("Unable to Call API " + (typeof response ==='undefined') ?  url : response.statusCode));
            }
        })
    },
    resultAnalysis: function(data){
		//[REMOVED]
		var analysis = analyze.score(data);
        var report = analyze.languageConstrunct(data,analysis);
        data.score = analysis;
        data.report = report;
        data = helper.beautify(data,true,["No Entries"])
        return data;
    }
}


