const express = require('express');
const router = express.Router();
const reportController = require('../Controller/report.controller');

router.get('/payments/monthly', reportController.getMonthlyReport);

module.exports = router;
