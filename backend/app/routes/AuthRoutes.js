const express = require('express');
const router = express.Router();
const { register, login } = require("../controllers/AuthController");
const cors = require('cors');

router.use(cors());

router.post('/register', register);
router.post('/login', login);

module.exports = router;
