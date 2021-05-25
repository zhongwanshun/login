/**
 * 路由模块
 */
const express = require('express');
const router = express.Router();
const service = require('./service.js');




/*
路由处理
*/


// 渲染主页
router.get('/', service.showLogin);

//获取用户信息并且进行匹配(并且进入主页面)
router.post('/index', service.getUserinfo);

//进入注册页面
router.get('/register', service.toRegister);

router.post('/register', service.insertInfoUser);


module.exports = router;