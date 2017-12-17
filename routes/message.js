var express = require('express');
var router = express.Router();
var util = require("../util");
var PythonShell = require('python-shell');
var temp = null;
var options ={
	mode:'text',
	pythonPath:'',
	pythonOptions:['-u'],
	scriptPath:'./routes',
	args:['1','1','2','4']

};

PythonShell.run('node2py.py', options, function (err, results) {

  if (err) throw err;


  console.log(results);
	temp = String(results);	
	console.log(typeof(results));
	console.log(typeof(temp));
	console.log(temp);
/* POST auto-reply messages. */
router.post('/', util.checkUserKey,function(req, res, next) {

    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };

    console.log(_obj.content)


    //메뉴1 버튼 누르면
    if(_obj.content == '메뉴1')
    {
      var massage = {
          "message": {
              "text": temp
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "메뉴1-1",
                  "메뉴1-2",
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
    else if(_obj.content == '메뉴2')
    {

      var massage = {
          "message": {
              "text": '메뉴 2번 석택.'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "메뉴2-1",
                  "메뉴2-2",
		  "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    else if(_obj.content == '메뉴3')
    {
      var massage = {
          "message": {
              "text": '메뉴 3번 선택'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "메뉴3-1",
                  "메뉴3-2",
		  "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
    }
    else if(_obj.content == '메뉴1-1')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 1-1번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴2",
                         "메뉴3",
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == '메뉴1-2')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 1-2번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴2",
                         "메뉴3",
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }

        else if(_obj.content == '메뉴2-1')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 2-1번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴1",
                         "메뉴3",
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == '메뉴2-2')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 2-2번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴1",
                         "메뉴3",
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }


	else if(_obj.content == '메뉴3-1')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 3-1번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴1",
                         "메뉴2",
                         "이전으로"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));

    }
	else if(_obj.content == '메뉴3-2')
            {
              var massage = {
                  "message": {
                      "text": '메뉴 3-2번 선택'
                  },
                 "keyboard": {
                      "type": "buttons",
                    "buttons": [
                         "메뉴1",
                         "메뉴2",
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
                         "메뉴1",
                         "메뉴2",
                         "메뉴3"
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
                    "메뉴1",
                    "메뉴2",
                    "메뉴3"
                ]
            }
        };
        res.set({
            'content-type': 'application/json'
        }).send(JSON.stringify(massage));
    }
});

});
module.exports = router;
