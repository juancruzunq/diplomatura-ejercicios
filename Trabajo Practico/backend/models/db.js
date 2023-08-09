var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USE,
    password: process.env.MYSQL_PASSWORD,
})

pool.query = util.promisify(pool.query);

module.exports = pool;