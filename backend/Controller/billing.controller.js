const Billing = require('../Models/billing.model');

const getBillings = async (req, res) => {
  try {
    const billings = await Billing.find();
    res.json(billings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
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

const getBillingCount = async (req, res) => {
  try {
    const count = await Billing.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error getting billing count:', error);
    res.status(500).json({ message: 'Error getting billing count', error });
  }
};

const getBillingSum = async (req, res) => {
  try {
    const result = await Billing.aggregate([
      {
        $group: {
          _id: null,
          totalSum: { $sum: "$total" } // Replace "$total" with the actual field name if it's different
        }
      }
    ]);

    const totalSum = result.length > 0 ? result[0].totalSum : 0;
    res.status(200).json({ totalSum });
  } catch (error) {
    console.error('Error getting billing sum:', error);
    res.status(500).json({ message: 'Error getting billing sum', error });
  }
};



module.exports = {
  getBillings,
  saveBillingDetails,
  getBillingCount,
  getBillingSum,
  
};