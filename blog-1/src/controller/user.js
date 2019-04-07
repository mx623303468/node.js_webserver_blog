const checkLogin = (username, pwd) => {
  if (username === 'yinxiaobo' && pwd === '123') {
    return true
  }
  return false
}

module.exports = {
  checkLogin
}