const mongoose = require('mongoose');

const BoughtSchema = mongoose.Schema({
  productName: String,
  _id: Number,
  related: Array,
});

module.exports = mongoose.model('Bought', BoughtSchema);
