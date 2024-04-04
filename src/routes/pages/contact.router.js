const controller = require('../../controller/contactController')

const router = require('express').Router();

router.get('/', controller.getContactPage);

module.exports = router;