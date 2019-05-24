const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = async (req, res) => {
  const method = req.method

  if (method === 'POST' && req.path === '/api/user/login') {
    const username = req.body.username
    const userpwd = req.body.userpwd

    const data = await login(username, userpwd)
    return data.username
      ? new SuccessModel('登录成功')
      : new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter
