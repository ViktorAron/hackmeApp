var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
  res.send(obj[req.query["user"]]["pass"]);
});

router.get('/register', function(req, res, next) {
  //var obj = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
  var data = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
  console.log(data);

  var i = 0;
  var pass = "";
  while (i < 4) {
    var dec = Math.floor((Math.random() * 2) + 1);
    if (dec == 1) {
      char = String(Math.floor((Math.random() * 9) + 0));
    }
    else {
      char = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
    }
    pass += char;
    i++;
  }
  data[req.query["username"]] = {"pass":pass}
  console.log(data);
  //console.log(data)
  fs.writeFile('./users.json', JSON.stringify(data), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
  res.send("Your password is: "+pass);
});

module.exports = router;
