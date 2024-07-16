const mongoose = require('mongoose');

const SlipPaymentSchema = new mongoose.Schema({
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
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed'],
    default: 'pending'
  },
  imgUrl: String,

 
});

module.exports = mongoose.model('SlipPayment', SlipPaymentSchema);
