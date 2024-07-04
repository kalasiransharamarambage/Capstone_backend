const express = require('express');
const router = express.Router();
const billingController = require('../Controller/billing.controller');

router.post('/', billingController.saveBillingDetails);

module.exports = router;