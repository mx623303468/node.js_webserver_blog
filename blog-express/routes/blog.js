const express = require('express')
const router = express.Router()

// 博客列表
router.get('/list', (req, res, next) => {
  res.json({
    error: 0,
    data: [1, 2, 3]
  })
})

// 博客详情
router.get('/detail', (req, res, next) => {
  res.json({
    error: 0,
    data: 'detail OK'
  })
})

module.exports = router