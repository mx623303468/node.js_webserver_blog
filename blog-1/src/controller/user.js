const { exec } = require('../db/mysql')

const login = async (username, pwd) => {
  const sql = `select username, realname from user where username='${username}' and userpwd='${pwd}';`

  const rows = await exec(sql)
  return rows[0] || {}
}

module.exports = { login }
