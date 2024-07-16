const ConfirmedPayment = require('../Models/ConfirmedPayment.model');

const getConfirmedPayments = async (req, res) => {
  try {
    const confirmedPayments = await ConfirmedPayment.find();
    res.status(200).json(confirmedPayments);
  } catch (error) {
    console.error('Error fetching confirmed payments:', error);
    res.status(500).json({ message: 'Error fetching confirmed payments', error });
  }
};

module.exports = {
  getConfirmedPayments,
};
