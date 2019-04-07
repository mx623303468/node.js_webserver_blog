const { checkLogin } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
	const method = req.method

	if (method === 'POST' && req.path === '/api/user/login') {
		const username = req.body.username
		const pwd = req.body.pwd

		return checkLogin(username, pwd) ? new SuccessModel('登录成功') : new ErrorModel('登录失败')
	}
}

module.exports = handleUserRouter
