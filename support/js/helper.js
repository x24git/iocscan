module.exports = {
    beautify: function(data, alphabetize = false, prune = false) {
        return enumerate({},data,alphabetize,prune);

        function enumerate(construct,data, sort, prune) {
            var ordered = construct
            if (sort)
                Object.keys(data).sort().forEach(function(key) {
                    if (!pruneCheck(prune,data[key])){
                        ordered[key] = data[key];
                        if (ordered[key] instanceof Object && !(ordered[key] instanceof Array || ordered[key] instanceof Function))
                            ordered[key] = enumerate({},ordered[key], true, prune)
                        else if (ordered[key] instanceof Array)
                            ordered[key] = enumerate([],ordered[key], false, prune)
                    }
                })
            else
                Object.keys(data).forEach(function(key) {
                    if (!pruneCheck(prune,data[key])){
                        ordered[key] = data[key];
                        if (ordered[key] instanceof Object && !(ordered[key] instanceof Array || ordered[key] instanceof Function))
                            ordered[key] = enumerate({},ordered[key], alphabetize, prune)
                        else if (ordered[key] instanceof Array)
                            ordered[key] = enumerate([],ordered[key], false, prune)
                    }
                })
            return ordered
        }
        function pruneCheck(prune,value){
            if (!prune)
                return false;
            for (var item in prune){
                if (value == prune[item])
                    return true;
            }
            return false;
        }
    },
    arraySearch: function(data, compare) {
        var flat = [].concat.apply([], data);
        var col = flat.indexOf(compare);
        var row = -1;
        if (col != -1) // found, now need to extract the row
            while (data[++row].length <= col) // not this row
                col -= data[row].length; // so adjust and try again
        return row;
    },
    arrayToObject: function(key, values) {
        if (key.length != values.length) return -1;
        var res = {};
        for (var i = 0; i < values.length; i++) res[key[i]] = values[i];
        return res;
    },
    dateSince: function(start, end = 0) {
        if (end) end = new Date(end);
        else end = new Date();
        return Math.floor((end.getTime()) / (86400000)) - Math.floor((new Date(start).getTime()) / (86400000));
    },
    errorSuppress: function(caller, error) {
        if (error.message == "No Match Found") return true;
        console.error(caller, ": ", error.message);
    }
};

function check(element) {
    return String(element).localeCompare('C2');
}
