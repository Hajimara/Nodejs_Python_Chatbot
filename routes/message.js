var express = require('express');
var router = express.Router();
var util = require("../util");
var PythonShell = require('python-shell');
var a = 'Highend';
var a1 = 'hypebeastFashion';
var a2 = 'vogueRunway';
var a3 = 'hypebeastFootage';

var b = 'Street';
var b1 = 'malemodelScene';
var b2 = 'THEFASHIONISTO';
var b3 = 'KERA';

var c = 'Webzine';
var c1= 'korea';
var c2= 'foreign country';

var argtemp = [''];
 
var options ={
	mode:'text',
	pythonPath:'/usr/bin/python3',
	pythonOptions:['-u'],
	scriptPath:'./routes',
	args:[argtemp]

};

/* POST auto-reply messages. */
router.post('/', util.checkUserKey,function(req, res, next) {

    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };

    console.log(_obj.content)


    //메뉴1 버튼 누르면
    if(_obj.content == a)
    {
      var massage = {
          "message": {
              "text": "Highend"
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  a1,
                  a2,
		  a3,
		  "이전으로"
              ]
          }
      };
	

      //      카톡으로 전송
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    //메뉴2이라고 입력되었다면
    else if(_obj.content == b)
    {

      var massage = {
          "message": {
              "text" : 'Street'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  b1,
                  b2,
		  b3,
		  "이전으로"
              ]
          }
      };
	
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    else if(_obj.content == c)
    {
      var massage = {
          "message": {
              "text": 'Webzine'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  c1,
                  c2,
		  "이전으로"
              ]
          }
      };

      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    else if(_obj.content == a1)
            {
                argtemp[0] = a1;
                console.log('be'+argtemp);		
		PythonShell.run('node3py.py', options, function (err, results) {
		  if (err) throw err;

		  console.log('py '+results);
		temp = String(results);	
		});

              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         b,
                         c,
                         "이전으로"
              ]
          }
      };

      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == a2)
            {
		argtemp[0] = a2;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

		  if (err) throw err;

		  console.log(results);
	        temp = String(results);
		});

              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         b,
                         c,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	 else if(_obj.content == a3)
            {
		argtemp[0] = a3;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });

              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         b,
                         c,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }


        else if(_obj.content == b1)
            {
		argtemp[0] = b1;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });


              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         a,
                         c,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == b2)
            {
		argtemp[0] = b2;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });


              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         a,
                         c,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }

	 else if(_obj.content == b3)
            {
		argtemp[0] = b3;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });


              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         b,
                         c,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }

	else if(_obj.content == c1)
            {
		argtemp[0] = c1;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });


              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         a,
                         b,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == c2)
            {
		argtemp[0] = c2;
                console.log(argtemp);
		PythonShell.run('node3py.py', options, function (err, results) {

                  if (err) throw err;

                  console.log(results);
                temp = String(results);
                });


              var massage = {
                  "message": {
                      "text": temp
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         a,
                         b,
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }

       else if(_obj.content == '이전으로')
            {
              var massage = {
                  "message": {
                      "text": '메인화면으로 돌아왔습니다.'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         a,
                         b,
                         c
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }


    //예외 처리...
    //하지만 현재는 버튼 방식이기에 이 루틴을 탈 수가 없다.
    else {
        var massage = {
            "message": {
                "text": '다시 버튼을 선택해주세요'
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    a,
                    b,
                    c
                ]
            }
        };
        res.set({
            'content-type': 'application/json'
        }).send(JSON.stringify(massage));
    }
});


module.exports = router;
