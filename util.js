var util ={};



util.checkUserKey = function(req, res, next){
  if(req.body.user_key !== undefined){
    next();
  }else{
    res.status(500).send({ error: 'user_key is undefined' });
  }
};


module.exports =util;
