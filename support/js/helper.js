var WHOREGEX = require('./whois_regex')
var moment = require('moment')

module.exports = {
  beautify: function (data, alphabetize = false, prune = false) {
    return enumerate({}, data, alphabetize, prune)

    function enumerate (construct, data, sort, prune) {
      var ordered = construct
      if (sort) {
        Object.keys(data).sort().forEach(function (key) {
          if (!pruneCheck(prune, data[key])) {
            ordered[key] = data[key]
            if (ordered[key] instanceof Object && !(ordered[key] instanceof Array || ordered[key] instanceof Function)) { ordered[key] = enumerate({}, ordered[key], true, prune) } else if (ordered[key] instanceof Array) { ordered[key] = enumerate([], ordered[key], false, prune) }
          }
        })
      } else {
        Object.keys(data).forEach(function (key) {
          if (!pruneCheck(prune, data[key])) {
            ordered[key] = data[key]
            if (ordered[key] instanceof Object && !(ordered[key] instanceof Array || ordered[key] instanceof Function)) { ordered[key] = enumerate({}, ordered[key], alphabetize, prune) } else if (ordered[key] instanceof Array) { ordered[key] = enumerate([], ordered[key], false, prune) }
          }
        })
      }
      return ordered
    }

    function pruneCheck (prune, value) {
      if (!prune) { return false }
      for (var item in prune) {
        if (value === prune[item]) { return true }
      }
      return false
    }
  },
  arraySearch: function (data, compare) {
    var flat = [].concat.apply([], data)
    var col = flat.indexOf(compare)
    var row = -1
    if (col !== -1) {
      while (data[++row].length <= col) {
        col -= data[row].length
      }
    }
    return row
  },
  arrayToObject: function (key, values) {
    if (key.length !== values.length) return -1
    var res = {}
    for (var i = 0; i < values.length; i++) res[key[i]] = values[i]
    return res
  },
  dateSince: function (start, end = 0) {
    if (end) end = new Date(end)
    else end = new Date()
    return Math.floor((end.getTime()) / (86400000)) - Math.floor((new Date(start).getTime()) / (86400000))
  },
  errorSuppress: function (caller, error) {
    if (error.message === 'No Match Found') return true
    console.error(caller, ': ', error.message)
  },
  whoisExtract: function (whois, domain) {
    var result = {}
    if (typeof whois === 'object') {
      result = whois.map(function (data) {
        data.data = parseWHOIS(data.data, domain)
        return data
      })
    } else {
      result = { ...result, ...parseWHOIS(whois, domain) }
    }
    return result
  },
  promiseTimeout: function (ms, promise) {
    return new Promise(function (resolve, reject) {
      // create a timeout to reject promise if not resolved
      var timer = setTimeout(function () {
        reject(new Error('Timeout after ' + ms + ' milliseconds'))
      }, ms)

      promise
        .then(function (res) {
          clearTimeout(timer)
          resolve(res)
        })
        .catch(function (err) {
          clearTimeout(timer)
          reject(err)
        })
    })
  }

}

function parseWHOIS (whois, domain) {
  if (whois == null) {
    console.log('No Whois data received')
    return
  } else if (whois.length <= 10) {
    console.log('Bad WHOIS Data: "' + whois + '"')
    return
  }

  var result = { domainName: domain }
  domain = domain.toLowerCase()
  var domainRegex = ''
  var defaultRegex = WHOREGEX.defaultRegex
  if (domain.endsWith('.ru') || domain.endsWith('.рф') || domain.endsWith('.su')) { domainRegex = WHOREGEX.ruRegex } else if (domain.endsWith('.uk')) { domainRegex = WHOREGEX.ukRegex } else if (domain.endsWith('.hk')) { domainRegex = WHOREGEX.hkRegex } else if (domain.endsWith('.jp')) { domainRegex = WHOREGEX.jpRegex } else if (domain.endsWith('.fr')) { domainRegex = WHOREGEX.frRegex }
  Object.keys(domainRegex).forEach(function (key) {
    var regex = new RegExp(domainRegex[key])
    if (whois.match(regex) && key !== 'dateFormat') {
      if (key === 'notFound') {
        if (!result.hasOwnProperty('isAvailable')) {
          result['isAvailable'] = true
        }
      }
      if (key === 'error') {
        if (!result.hasOwnProperty('error')) {
          result['error'] = true
        }
      } else {
        var value = whois.match(regex)[whois.match(regex).length - 1]

        if (key === 'expired') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (key === 'created') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (key === 'updated') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (!value.match('^ +$')) {
          result[key] = value
        }
      }
    }
  })
  Object.keys(defaultRegex).forEach(function (key) {
    var regex = new RegExp(defaultRegex[key], 'i')
    if (whois.match(regex) && key !== 'dateFormat') {
      if (key === 'notFound') {
        if (!result.hasOwnProperty('isAvailable')) {
          result['isAvailable'] = true
        }
      } else {
        var value = whois.match(regex)[whois.match(regex).length - 1]

        if (key === 'expired') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (key === 'created') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (key === 'updated') {
          if (domainRegex.hasOwnProperty('dateFormat')) {
            result[key] = moment(value, domainRegex.dateFormat).toJSON()
          } else {
            result[key] = moment(value).toJSON()
          }
        } else if (!value.match('^ +$')) {
          result[key] = value
        }
      }
    }
  })
  if (result.rcountry) {
    result.country = result.rcountry
    delete result.rcountry
  }
  if (result.ucountry) {
    result.country = result.ucountry
    delete result.ucountry
  }
  if (!result.hasOwnProperty('isAvailable') || result.hasOwnProperty('error')) {
    result.isAvailable = false
  }
  return result
}

moment.fn.toJSON = function () { return this.format('YYYY-MM-DD') }
