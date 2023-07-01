const express = require('express')
const router = express.Router()
const { protect } = require('../middlewares/authMiddleware')
const authController=require('../controllers/AuthController')

router.post('/register', authController.RegisterUser)
router.post('/login', authController.LoginUser)
router.get('/getMe',protect,authController.getMe)
router.get('/users', authController.getAll)


module.exports = router