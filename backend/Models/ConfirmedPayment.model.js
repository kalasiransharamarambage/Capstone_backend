const mongoose = require('mongoose');

const ConfirmedPaymentSchema = new mongoose.Schema({
orderId:{
  type:String,
  required:true,
},
  cus_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
 
});

module.exports = mongoose.model('ConfirmedPayment', ConfirmedPaymentSchema);
