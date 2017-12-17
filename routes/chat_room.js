var express = require('express');
var router = express.Router();
var util = require("../util");
 
/* DELETE chat room. */
router.delete('/:user_key', util.checkUserKey, function(req, res, next) {
	const user_key = req.params.user_key;
	console.log(`${user_key}님이 채팅방에서 나갔습니다!`);
  
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({success: true}));
});

module.exports = router;
