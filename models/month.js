var mongoose = require('mongoose');

var monthSchema = new mongoose.Schema({
  user_id: String,
  nickname: String,
  date: String,
  income: String,
  categories: Array,
  expenseItems: Array,
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

var Month = mongoose.model('Month', monthSchema);

module.exports = Month;
