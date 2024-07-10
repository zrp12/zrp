// 封装一个函数用来连接数据库
const mysql = require('mysql2/promise');
const config = require('../config/index.js');

// 线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
});

const allServers = {
    async query(sql, values) {
        const conn = await pool.getConnection();
    }
}