var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var Month = require('../models/month');

/* GET user profile. */

// Getting list of past months
router.get('/pastmonths', ensureLoggedIn, function(req, res, next) {
    // You don't need the next two lines; you actually don't have req.params at all
    //  var monthId = req.params.id;
    //  var monthDate = req.params.date;

    // The second argument in the callback is the list of all Months for the current user, as long as `user_id` is saving correctly
     // Month.find({user_id: req.user.id}, function(err, months) {
     //   if (err) console.log(err);
     //   // Returning JSON
     //   console.log(months);
     //   res.json(months);
     // });
     res.render('past-months');
   });

router.get('/pastmonths/dates', ensureLoggedIn, function(req, res, next) {
    Month.find({user_id: req.user.id}, function(err, months) {
     if (err) console.log(err);
     // Returning JSON
     res.json(months);
   });
});

// Getting Specific Past Month
  router.get('/pastmonths/:id', ensureLoggedIn, function(req, res, next){
    Month.findOne({_id: req.params.id, user_id: req.user.id}, function(err, month){
      if (err) console.log(err);
      console.log(month);
      console.log(month.date)
      res.render('past-month', {month: month})
    })
  });


// Creating and saving new month
router.post('/', ensureLoggedIn, function(req, res, next) {
  var monthData = req.body;
  var expenseItems = JSON.parse(monthData.expenseItems);
  monthData.user_id = req.user.id;
  monthData.nickname = req.user.nickname;
  monthData.expenseItems = expenseItems;
  var month = new Month(monthData);
  month.save(function(err, month) {
    if (err) console.log(err);
    res.json(month);
  });
});

module.exports = router;
