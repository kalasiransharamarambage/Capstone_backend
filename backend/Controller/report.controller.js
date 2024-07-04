const Billing = require('../Models/billing.model');
const moment = require('moment');

const getMonthlyReport = async (req, res) => {
  try {
    const startOfMonth = moment().startOf('month').toDate();
    const endOfMonth = moment().endOf('month').toDate();
    
    const payments = await Billing.find({
      createdAt: { $gte: startOfMonth, $lte: endOfMonth },
    });

    let totalPayments = payments.length;
    let totalRevenue = payments.reduce((sum, payment) => sum + payment.total, 0);
    let paymentsCompleted = payments.filter(payment => payment.paymentStatus === 'Payment Completed').length;
    let paymentsPending = totalPayments - paymentsCompleted;

    res.json({
      totalPayments,
      totalRevenue,
      paymentsCompleted,
      paymentsPending,
      payments,
    });
  } catch (error) {
    console.error("Error fetching monthly payment report:", error);
    res.status(500).json({ message: "Error fetching monthly payment report" });
  }
};


module.exports = {
  generateMonthlyPaymentReport,
};
