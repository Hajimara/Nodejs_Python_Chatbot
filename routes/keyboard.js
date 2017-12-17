var express = require('express');
var router = express.Router();

var response = {
      "type": "buttons",
      "buttons" : ["메뉴1","메뉴2","메뉴3"]
  };

/* GET initial keyboard settings. */
router.get('/', function(req, res, next) {
  res.json(response);
});

module.exports = router;
