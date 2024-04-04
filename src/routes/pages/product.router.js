const controller = require('../../controller/productController')

const router = require('express').Router();

router.get('/', controller.getProductPage);

module.exports = router;