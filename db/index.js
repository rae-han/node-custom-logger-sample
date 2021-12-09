// const mysql = require('mysql2');
const mysql2 = require('mysql2');

const { writeLog } = require('../log')

const connection = mysql2.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1111',
  database: 'nodejs'
});

const pool = mysql2.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1111',
  database: 'nodejs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const mysql = {
  pool: {
    query(query, req, callback) {
      writeLog(req, query);
      pool.query(query, callback);
    }
  }
}

module.exports = {
  connection,
  pool,
  mysql
}

