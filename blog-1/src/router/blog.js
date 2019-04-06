const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
	const method = req.method

	// 获取博客列表
	if (method === 'GET' && req.path === '/api/blog/list') {
		// 获取 query 参数
		const author = req.query.author || ''
		const keyword = req.query.keyword || ''

		// 调用 controller 获取数据
		const listData = getList(author, keyword)

		// 返回数据
		return new SuccessModel(listData)
	}

	// 获取博客详情
	if (method === 'GET' && req.path === '/api/blog/detail') {
		const id = req.query.id
		const detailData = getDetail(id)

		return new SuccessModel(detailData)
	}

	// 新建博客
	if (method === 'POST' && req.path === '/api/blog/new') {
		return {
			msg: '这是新建一篇博客的接口'
		}
	}

	// 更新博客
	if (method === 'POST' && req.path === '/api/blog/update') {
		return {
			msg: '这是更新博客的接口'
		}
	}

	// 删除博客
	if (method === 'POST' && req.path === '/api/blog/del') {
		return {
			msg: '这是删除博客的接口'
		}
	}
}

module.exports = handleBlogRouter
