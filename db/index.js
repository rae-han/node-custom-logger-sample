// const mysql = require('mysql2');
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1111',
  database: 'nodejs'
});

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1111',
  database: 'nodejs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  connection,
  pool,
}

