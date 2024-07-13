const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const appointmentSchema = new Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  b_name: {
    type: String,
  },
  cus_name: {
    type: String,
  },
  services: {
    type: String,
    
  },
  Total_price: {
    type:Number,
    
  },
  paymentStatus: {
    type: String,
    default: 'Pending',
  },
  count:{
    type:Number,
  }
});


module.exports = mongoose.model('Appointment', appointmentSchema);
