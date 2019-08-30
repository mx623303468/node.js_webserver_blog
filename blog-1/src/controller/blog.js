const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = 'select blogid, blogtitle, blogcontent, blogcreatetime, blogauthor from blog where 1=1 '
  
  if (author) {
    sql += `and blogauthor='${author}' `
  }

  if (keyword) {
    sql += `and blogtitle like '${keyword}' or blogcontent like '${keyword}' `
  }

  sql += `order by blogcreatetime desc;`

  return exec(sql)
}

// 获取博客详情
const getDetail = (id) => {
  // return {
  //   id: 1,
  //     title: '标题A',
  //     content: '内容A',
  //     createTime: '1554565557813',
  //     author: 'yinxiaobo'
  // }
  let sql = `select * from blog where blogid=${id}`

  return exec(sql).then(rows => {
    return rows[0]
  })
}

// 新建博客
const newBlog = (blogData = {}) => {
  // blogData 是一个对象，包含 title content 等内容
  // return {
  //   id: 3
  // }
  let title = blogData.title
  let content = blogData.content
  let author = blogData.author
  let createTime = Date.now()

  const sql = `insert into blog(blogtitle, blogcreatetime, blogcontent, blogauthor) values('${title}', ${createTime}, '${content}', '${author}');`

  return exec(sql).then(rows => {
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 2,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0 
    // }
    return {
      id: rows.insertId
    }
  })
}

// 更新博客
const updataBlog = (id, blogData = {}) => {
  // return true
  let title = blogData.title
  let content = blogData.content

  const sql = `
    update blog set blogtitle='${title}', blogcontent='${content}' where blogid=${id}
  `

  return exec(sql).then(rows => {
    if (rows.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除博客
const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}