const { exec } = require('../db/mysql')

const checkLogin = async (username, pwd) => {
  const sql = `select username, realname from user where username='${username}' and userpwd='${pwd}';`

  const rows = await exec(sql)
  console.log(rows)
  return rows[0] || {}
}

module.exports = { checkLogin }
