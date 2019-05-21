const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456789',
  port: '3306',
  database: 'myblog'
})

connection.connect()

const sql = `select * from blog;`

connection.query(sql, (err, result) => {
  if (err) {
    console.error(err)
  }
  console.log(result)
})

connection.end()
