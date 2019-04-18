module.exports = {
  defaultRegex: {
    'domainName': 'Domain Name: *([^\\s]+)',
    'registrar': 'Registrar *(?:Name)*: *(.+)',
    'updated': 'Updated Date: *(.+)',
    'created': '(?:Creation|Registration)\\s(?:Date|Time):\\s*(.+)',
    'expired': 'Expir\\w+ (?:Date|Time): *(.+)',
    'org': 'Registrant *(?:Organization)*: *(.+)',
    'name': 'Registrant *(?:Contact)* *Name: *(.+)',
    'phone': 'Registrant *(?:Contact)* *Phone: *(.+)',
    'email': 'Registrant *(?:Contact)* *Email: *([^\\s]+)',
    'ucountry': 'Registrant Country: *(.+)',
    'rcountry': 'Registrar Country: *(.+)',
    'error': '101',
    'notFound': '(?:incorrect)|(?:no match)|(?:no data)|(?:no entries)|(?:not been registered)|(?:domain is available)|(?:nothing found)|(?:not found)|(?:no information)|(?:status: *(?:avaliable|free|open))',
    'status': 'status: *(.+) *\\({0,1}'
  },
  ruRegex: {
    'domainName': 'domain: *([^\\s]+)',
    'org': 'org: *(.+)',
    'registrar': 'registrar: *(.+)',
    'created': 'created: *(.+)',
    'expired': 'paid-till: *(.+)',
    'notFound': 'No entries found'
  },
  ukRegex: {
    'name': 'Registrant:\\s*\\n *(.+)',
    'org': 'Registrant type:\\s*\\n *(.+)',
    'created': 'Registered on: *(?:before)* *(.+)',
    'expired': 'Expiry date: *(.+)',
    'updated': 'Last updated: *(.+)',
    'registrar': 'Registrar:\\s*\\n *(.+)',
    'dateFormat': 'DD-MMM-YYYY',
    'notFound': 'No such'
  },
  hkRegex: {
    'domainName': 'Domain Name: *([^\\s]+)',
    'registrar': 'Registrar *(?:Name)*: *(.+)',
    'created': 'Commencement Date: *(.+)',
    'expired': 'Expir\\w+ Date: *(.+)',
    'org': 'Company English Name.*: *(.+)',
    'name': 'Given name: *(.+)',
    'email': 'Email: *([^\\s]+)',
    'phone': 'Hotline: *(.+)',
    'ucountry': 'Country: *(.+)',
    'dateFormat': 'DD-MM-YYYY',
    'notFound': '(?:not been registered)|(?:Incorrect input)'
  },
  jpRegex: {
    'domainName': 'Domain Name: *([^\\s]+)',
    'created': '\\[Registered Date\\] *(.+)',
    'updated': '\\[Last Update\\] *([^\\s]+)',
    'expired': '\\[State\\] *Connected *\\((.+)\\)',
    'org': '\\[Organization\\] *(.+)',
    'name': '\\[Administrative Contact\\] *(.+)',
    'dateFormat': 'YYYY/MM/DD',
    'notFound': 'no match'
  },
  frRegex: {
    'domainName': 'domain: *([^\\s]+)',
    'registrar': 'registrar:\\s*(.+)',
    'created': 'created:\\s*(.+)',
    'updated': 'last-update:\\s*(.+)',
    'expired': 'Expiry Date: (.+)',
    'name': 'contact:\\s*(.+)',
    'notFound': 'no match',
    'status': 'status: *(.+) *\\({0,1}'
  }
}
