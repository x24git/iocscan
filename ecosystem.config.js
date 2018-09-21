module.exports = {
  apps : [{
    name: 'iocscanner',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key  : 'C:/ProgramData/manager/manager.pem',
      user : 'bitnami',
      host : ' 52.15.219.18',
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/master',
      repo : 'git@github.com:x24git/x24scan.git',
      path : '~/iocscan/x24scan',
      'post-deploy' : 'npm install && npm run prod && pm2 reload ecosystem.config.js --env production && sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000 && sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 4433'
    },
    development : {
      key  : 'C:/ProgramData/manager/manager.pem',
      user : 'bitnami',
      host : ' 52.15.219.18',
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/master',
      repo : 'git@github.com:x24git/x24scan.git',
      path : '~/iocscan/x24scan',
      'post-deploy' : 'npm install && npm run dev && pm2 reload ecosystem.config.js --env development  && sudo iptables -t nat -A PREROUTING -p tcp --dport 9000 -j REDIRECT --to-ports 8000 && sudo iptables -t nat -A PREROUTING -p tcp --dport 9443 -j REDIRECT --to-ports 4433'
    }
  }
};
