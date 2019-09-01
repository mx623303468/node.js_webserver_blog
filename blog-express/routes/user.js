const express = require('express')
const router = express.Router()

router.post('/login', (req, res, next) => {
  const { username, userpwd } = req.body

  res.json({
    error: 0,
    data: {
      username,
      userpwd
    }
  })
})


module.exports = router