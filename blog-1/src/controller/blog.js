const getList = (author, keyword) => {
  // 暂时返回假数据，格式是真实格式
  return [
    {
      id: 1,
      title: '博客1',
      content: '博客1内容',
      createTime: '1554565557813',
      author: 'yinxiaobo'
    },
    {
      id: 2,
      title: '博客2',
      content: '博客2内容',
      createTime: '1554565594752',
      author: 'yinxiaobo'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
      title: '博客1',
      content: '博客1内容',
      createTime: '1554565557813',
      author: 'yinxiaobo'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个对象，包含 title content 等内容
  return {
    id: 3
  }
}

const updataBlog = (id, blogData = {}) => {
  return true
}

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