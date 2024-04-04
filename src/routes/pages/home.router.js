const controller = require('../../controller/homeController')

const router = require('express').Router();

router.get('/', controller.getHomePage);

module.exports = router;