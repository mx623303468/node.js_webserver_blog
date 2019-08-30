const {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
} = require('../controller/blog')

const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    // 获取 query 参数
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''

    // 调用 controller 获取数据
    const result = getList(author, keyword)

    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    if (id) {
      const result = getDetail(id)

      return result.then(detailData => {
        return new SuccessModel(detailData)
      })
    }
    return
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'yin' // 假数据，待开发登录时，再改成正式数据
    console.log('req.body: ', req.body)
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updataBlog(id, req.body)
    return result.then(val => {
      return val ? new SuccessModel('更新成功') : new ErrorModel('更新博客失败')
    })
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'yin'
    const result = delBlog(id, author)
    return result.then(val => {
      return val ? new SuccessModel('删除成功') : new ErrorModel('删除失败')
    })
  }
}

module.exports = handleBlogRouter
