const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
    required: true,
  },
  booked_services:{
    type:String,
    ref:'Appointment',
    required:true,
  },
  services: [
    {
      name: String,
      price: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Billing', BillingSchema);