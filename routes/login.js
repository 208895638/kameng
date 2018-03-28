var express = require('express');
var router = express.Router();
var data = require("../data/data");
/* GET home page. */
router.get('/login', function(req, res, next) {
    console.log(req.query.username, req.query.password)
    var userData = {
        username: req.query.username,
        password: req.query.password
    };
    data.find(userData, function(err, doc) {
        console.log("我是获取的数据" + doc)
        if (err) {
            console.log(err);
            res.json({
                code: '1',
                msg: '出现未知错误'
            });
            return;
        } else if (doc == "") {
            res.json({
                code: '2',
                msg: '登录失败  用户名或密码错误'
            });
            return;
        } else {
            res.json({
                code: '0',
                msg: '登录成功'
            });
            return;
        }
    })
});

module.exports = router;