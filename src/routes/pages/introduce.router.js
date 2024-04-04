const controller = require('../../controller/introduceController')

const router = require('express').Router();

router.get('/', controller.getIntroducePage);

module.exports = router;