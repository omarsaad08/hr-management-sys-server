const { Router } = require('express');
const router = Router();
const controller = require('../controllers/authController');
router.post('/signup', controller.signup_post);
module.exports = router;
