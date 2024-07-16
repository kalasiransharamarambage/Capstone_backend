const SlipPayment = require('../Models/slipPayment.model');
const mongoose = require('mongoose');

const getSlipPayments = async (req, res) => {
  try {
    const slipPayments = await SlipPayment.find();
    res.status(200).json(slipPayments);
  } catch (error) {
    console.error('Error fetching slip payments:', error);
    res.status(500).json({ message: 'Error fetching slip payments', error });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let slipPayment;
  try {
    slipPayment = await SlipPayment.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!slipPayment) {
    return res.status(404).json({ message: "SlipPayment not found" });
  }
  return res.status(200).json({ slipPayment });
};


const updateSlipPayment = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const slipPayment = await SlipPayment.findById(id);
    if (!slipPayment) {
      return res.status(404).json({ message: 'SlipPayment not found' });
    }

    console.log('SlipPayment before update:', slipPayment); // Log the document

    // Update the status only
    slipPayment.status = status;

    // Save the updated document
    await slipPayment.save();
    return res.status(200).json({ message: 'SlipPayment status updated', slipPayment });
  } catch (error) {
    console.error('Error updating slip payment:', error);
    return res.status(500).json({ message: 'Error updating slip payment', error: error.message });
  }
};


module.exports = {
  getSlipPayments,
  getById,
  updateSlipPayment,
};
