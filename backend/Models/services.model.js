const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Services', ServicesSchema);
