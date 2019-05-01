const env = process.env.NODE_ENV

let MYSQL_CONFIG = {}

if (env === 'dev') {
  MYSQL_CONFIG = {
    host: '127.0.0.1',
    user: 'root',
    password: 'Daohaosb125,',
    port: '3306',
    database: 'myblog'
  }
}

if (env === 'production') {
  MYSQL_CONFIG = {
    host: '127.0.0.1',
    user: 'root',
    password: 'Daohaosb125,',
    prot: '3306',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONFIG
}
