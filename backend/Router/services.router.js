const express = require('express');
const router = express.Router();
const servicesController = require('../Controller/services.controller');

router.get('/', servicesController.getServices);

module.exports = router;
