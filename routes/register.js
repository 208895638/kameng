var express = require('express');
var router = express.Router();
var data = require("../data/data");
/* GET home page. */
router.get('/register', function(req, res, next) {
    var yzm = Math.ceil(Math.random() * 1000 + 1);
    console.log("验证码时" + yzm);
    var userData = {
        username: req.query.username,
        password: req.query.password
    }
    data.findOne({ username: userData.username }, function(err, doc) {
        if (err) {
            console.log(err);
            res.json({
                code: '1',
                msg: '出现未知错误'
            });
            return;
        } else if (doc) {
            console.log(1);
            res.json({
                code: '2',
                msg: '用户名已经存在'
            });
            return;
        } else {
            console.log(2);
            data.create(userData, function(err, doc) {
                if (err) {
                    res.json({
                        code: '4',
                        msg: '注册失败'
                    });
                    return;
                } else {
                    console.log('创建用户成功', doc);
                    res.json({
                        code: '0',
                        msg: '注册成功'
                    });
                }
            })
        }
    })
});

module.exports = router;