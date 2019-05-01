const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = 'select blogId, blogTitle, blogContent, blogCreateTime, blogAuthor from blog where 1=1 '
  
  if (author) {
    sql += `and blogAuthor='${author}' `
  }

  if (keyword) {
    sql += `and blogTitle like '${keyword}' or blogContent like '${keyword}' `
  }

  sql += `order by blogCreateTime desc;`

  return exec(sql)
}

// 获取博客详情
const getDetail = (id) => {
  return {
    id: 1,
      title: '标题A',
      content: '内容A',
      createTime: '1554565557813',
      author: 'yinxiaobo'
  }
}

// 新建博客
const newBlog = (blogData = {}) => {
  // blogData 是一个对象，包含 title content 等内容
  return {
    id: 3
  }
}

// 更新博客
const updataBlog = (id, blogData = {}) => {
  return true
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