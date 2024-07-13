const express = require('express');
const router = express.Router();
const billingController = require('../Controller/billing.controller');


router.post('/', billingController.saveBillingDetails);
router.get('/count', billingController.getBillingCount);
router.get('/sum', billingController.getBillingSum);
router.get('/', billingController.getBillings);
module.exports = router;