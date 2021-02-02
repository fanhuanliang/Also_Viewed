const mongoose = require('mongoose');

const BoughtSchema = mongoose.Schema({
  productName: String,
  identifier: Number,
  related: Array,
});

module.exports = mongoose.model('Bought', BoughtSchema);
