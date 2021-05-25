/*
    封装操作数据库的通用api
*/
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host: 'localhost', // 数据库所在的服务器的域名或者IP地址
        user: 'root', // 登录数据库的账号
        password: '1234', // 登录数据库的密码
        // debug: true,
        database: 'nodedb' // 数据库名称
    });
    // 执行连接操作
    connection.connect();

    // let sql = `select * from users`;

    // 操作数据库(数据库操作也是异步的)
    connection.query(sql, function(error, results, fields) {
        if (error) throw error;
        // console.log(results);
        callback(results);
    });
    // 关闭数据库
    connection.end();
}