const mysql = require('mysql'); //cnpm install mysql --save
const connection = mysql.createConnection({
    host: 'localhost', //域名或者ip地址
    user: 'root', //mysql数据库的用户名
    password: '', //mysql数据库的密码
    database: 'users' //要连接数据库的名字
});


// console.log(connection);

// const userSql = "SELECT * FROM hg_users"

// connection.query(userSql, (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// })


// 封装查询方法，给不同的sql查询对应的数据
function requestQuery(sql, sqlArr) {
    return new Promise((resolve, reject) => {
        connection.query(sql, sqlArr, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


//暴露
module.exports = {
    connection,
    requestQuery // requestQuery: requestQuery
}