const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/photo', require('./photo'))
router.use('/albums', require('./albums'))
router.use('/profileviewer',require('./profileviewer'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
