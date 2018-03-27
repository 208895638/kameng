var express = require('express');
var router = express.Router();
var data = require("../data/data");
/* GET home page. */
router.get('/register', function(req, res, next) {

    var userData = {
        username: req.query.username,
        password: req.query.password
    }
    data.findOne({ username: userData.username }, function(err, doc) {
        if (err) {
            console.log(err);
            return;
        } else if (doc) {
            res.send('用户名已经存在' + doc);
            return;
        } else {
            data.create(userData, function(err, doc) {
                if (err) {
                    console.log("出现错误" + err);
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