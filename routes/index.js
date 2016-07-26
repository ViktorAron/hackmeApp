var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HikackMe' });
});

router.get('/user', function(req, res, next) {
  var user = require('./user.json');
  //console.log(user)
  res.send(200)
  //res.render('index', { title: 'HikackMe' });
});

module.exports = router;
