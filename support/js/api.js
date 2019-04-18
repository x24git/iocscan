// THE ACTUAL FUNCTION HAS BEEN REMOVED AND A BASIC FILE HAS BEEN USED IN ITS PLACE
// Please use the actual public release for a usable source.

const express = require('express')
var router = express.Router()
var feed = require('./feed')

router.post('/ip', function (req, res) {
  console.time('scan')
  var terms = req.body
  var ipv4check = RegExp('^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)$')
  var privateip = RegExp('(^127\\.)|(^10\\.)|(^172\\.1[6-9]\\.)|(^172\\.2[0-9]\\.)|(^172\\.3[0-1]\\.)|(^192\\.168\\.)')
  if (terms.ip && ipv4check.test(terms.ip) && !privateip.test(terms.ip)) {
    // [REMOVED]
  } else {
    if (!terms.ip) {
      var error = new Error('No IP Provided')
      error.status = 404
      error.code = 'Not Found'
      throw error
    } else if (privateip.test(terms.ip)) {
      error = new Error('IPv4 Private Address Space')
      error.status = 421
      error.code = 'Misdirected Request'
      throw error
    } else if (!ipv4check.test(terms.ip)) {
      error = new Error('IPv4 Bad Format')
      error.status = 400
      error.code = 'Bad Request'
      throw error
    } else {
      error = new Error('Unknown Error')
      error.status = 503
      error.code = 'Service Unavaliable'
      throw error
    }
  }
  Results().catch(err => {
    console.error('API FUNCTION: ', err.message)
    res.status(503)
    return res.render('error')
  })

  async function Results () {
    // [REMOVED]
    var intel = feed.resultAnalysis({ type: 'ip' })
    return res.json(intel)
  }
})

router.post('/domain', function (req, res) {
  var terms = req.body
  var domaincheckLevel2 = /(?:([^:/]*)\.)*(([^.:/]+)(?:\.)((?:[^.:/]+)(?:\.[^.:/]{2})))(?:\/.*)*$/
  var domaincheckLevel1 = /(?:([^:/]*)\.)*((?:[^.:/]+)+(?:\.[^.:/]+){1})(?:\/.*)*$/
  if (domaincheckLevel2.test(terms.domain)) { var domaincheck = domaincheckLevel2 } else { domaincheck = domaincheckLevel1 }
  var subdomain; var domain; var check; var recover = ''
  if (terms.domain && domaincheck.test(terms.domain)) {
    [, subdomain, domain, check, recover] = domaincheck.exec(terms.domain)
    var checker = /www|m/i
    if (check && checker.test(check)) {
      domain = recover
      subdomain = check
    }
    // [REMOVED]
  } else {
    if (!terms.domain) {
      var error = new Error('No Domain Provided')
      error.status = 404
      error.code = 'Not Found'
      throw error
    } else if (!domaincheck.test(terms.domain)) {
      error = new Error('Domain Bad Format')
      error.status = 400
      error.code = 'Bad Request'
      throw error
    } else {
      error = new Error('Unknown Error')
      error.status = 503
      error.code = 'Service Unavaliable'
      throw error
    }
  }
  DomainResults().catch(err => {
    console.error('API FUNCTION: ', err.message)
    res.status(503)
    return res.render('error')
  })

  async function DomainResults () {
    // [REMOVED]
    var intel = feed.resultAnalysis({ domain: domain, subdomain: subdomain, type: 'domain' })
    return res.json(intel)
  }
})

module.exports = router
