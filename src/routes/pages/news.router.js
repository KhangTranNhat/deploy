const controller = require('../../controller/newsController')

const router = require('express').Router();

router.get('/', controller.getNewsPage);

module.exports = router;