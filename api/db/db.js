const mysql = require('mysql');

const conn = mysql.createConnection({
   host:'localhost',    //数据库地址
   user:'root', //用户名
   password:'', //密码
   database:'td' //数据库名
});
conn.connect();
module.exports = conn;