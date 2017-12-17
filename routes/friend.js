var express = require('express');
var router = express.Router();
var util = require("../util");

/* POST new friend. */
router.post('/', util.checkUserKey, function(req, res, next) {
	const user_key = req.body.user_key;
	console.log(`${user_key}님이 채팅방에 참가했습니다.`);
  
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({success: true}));
});

/* DELETE friend. */
router.delete('/:user_key', util.checkUserKey,function(req, res, next) {
	const user_key = req.body.user_key;
	console.log(`${user_key}님이 채팅방을 차단했습니다.`);
  
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({success: true}));
});

module.exports = router;
