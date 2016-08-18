var mongoose = require('mongoose');

var expenseItemSchema = new mongoose.Schema({
  amount: String,
  category: String,
  descriptor: String
});

var monthSchema = new mongoose.Schema({
  user_id: String,
  nickname: String,
  date: String,
  income: String,
  categories: Array,
  expenseItems: [expenseItemSchema],
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

var Month = mongoose.model('Month', monthSchema);

module.exports = Month;
