const express = require('express');
const router = express.Router();
const confirmedPaymentController = require('../Controller/ConfirmedPayment.controller');

router.get('/', confirmedPaymentController.getConfirmedPayments);

module.exports = router;
