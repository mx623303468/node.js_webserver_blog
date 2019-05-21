const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = 'select * from blog where 1=1 '

  if (author) {
    sql += `and blogauthor='${author}' `
  }

  if (keyword) {
    sql += `and blogtitle like '%${keyword}%' or blogcontent like '%${keyword}%' `
  }

  sql += `order by blogcreatetime desc;`

  return exec(sql)
}

// 获取博客详情
const getDetail = async id => {
  let sql = `SELECT * FROM blog WHERE blogid=${id};`

  const rows = await exec(sql)
  console.log(rows)
  return rows[0]
}

// 新建博客
const newBlog = async (blogData = {}) => {
  // blogData 是一个对象，包含 title content 等内容
  const blogtitle = blogData.blogtitle
  const blogcontent = blogData.blogcontent
  const blogauthor = blogData.blogauthor
  const blogcreatetime = Date.now()

  let sql = `INSERT INTO blog(blogtitle, blogcontent, blogauthor, blogcreatetime) VALUES('${blogtitle}', '${blogcontent}', '${blogauthor}', ${blogcreatetime});`

  const insertData = await exec(sql)
  console.log('inertData: ', insertData)
  return { id: insertData.insertId }
}

// 更新博客
const updataBlog = async (id, blogData = {}) => {
  const blogtitle = blogData.blogtitle
  const blogcontent = blogData.blogcontent

  const sql = `update blog set blogtitle='${blogtitle}', blogcontent='${blogcontent}' where blogid=${id}`

  const updateData = await exec(sql)
  console.log('updateData: ', updateData)
  if (updateData.affectedRows > 0) {
    return true
  }
  return false
}

// 删除博客
const delBlog = async (id, author) => {
  const sql = `delete from blog where blogid=${id} and blogauthor='${author}';`

  const delData = await exec(sql)

  if (delData.affectedRows > 0) {
    return true
  }
  return fasle
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}
