var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var Month = require('../models/month');

/* GET user profile. */

// Getting Specific Past Month
// router.get('/:id', ensureLoggedIn, function(req, res, next){
//   var id = req.params.id;
//   Month.findOne({_id: id }, function(err, month){
//     if (err) console.log(err);
//     res.render('show', {month: month})
//   })
// });


// Creating and saving new month
router.post('/', ensureLoggedIn, function(req, res, next) {
  var monthData = req.body;
  monthData.user_id = req.user.id;
  monthData.nickname = req.user.nickname;
  var month = new Month(monthData);
  month.save(function(err, month) {
    if (err) console.log(err);
    res.json(month);
  });
});

module.exports = router;
