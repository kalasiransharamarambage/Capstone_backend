const express = require('express');
const router = express.Router();
const slipPaymentController = require('../Controller/slipPayment.controller');

router.get('/', slipPaymentController.getSlipPayments);
router.get('/:id', slipPaymentController.getById);
router.put('/:id', slipPaymentController.updateSlipPayment);

module.exports = router;
