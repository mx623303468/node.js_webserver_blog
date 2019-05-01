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
		const listResult = getList(author, keyword)
		console.log('listResult: ', listResult)

		return listResult.then(listData => {
			return new SuccessModel(listData)
		})

		// console.log(listData)
		// // 返回数据
		// return new SuccessModel(listData)
	}

	// 获取博客详情
	if (method === 'GET' && req.path === '/api/blog/detail') {
		const detailData = getDetail(id)

		return new SuccessModel(detailData)
	}

	// 新建博客
	if (method === 'POST' && req.path === '/api/blog/new') {
		const data = newBlog(req.body)
		return new SuccessModel(data)
	}

	// 更新博客
	if (method === 'POST' && req.path === '/api/blog/update') {
		const result = updataBlog(id, req.body)
		return result ? new SuccessModel('更新成功') : new ErrorModel('更新博客失败')
	}

	// 删除博客
	if (method === 'POST' && req.path === '/api/blog/del') {
		const result = delBlog(id)
		return result ? new SuccessModel('删除成功') : new ErrorModel('删除失败')
	}
}

module.exports = handleBlogRouter
