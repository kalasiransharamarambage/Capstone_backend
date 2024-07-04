const Billing = require('../Models/billing.model');

const saveBillingDetails = async (req, res) => {
  try {
    const { appointmentId,booked_services, services, total, discount, paymentStatus } = req.body;
    const billingDetails = new Billing({
      appointmentId,
      booked_services,
      services,
      total,
      discount,
      paymentStatus,
    });
    await billingDetails.save();
    res.status(201).json({ message: 'Billing details saved successfully' });
  } catch (error) {
    console.error('Error saving billing details:', error);
    res.status(500).json({ message: 'Error saving billing details', error });
  }
};

module.exports = {
  saveBillingDetails,
};