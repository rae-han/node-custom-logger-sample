const Sequelize = require('sequelize');
const session = require('express-session');

const User = require('./user');

const logger = require('../log');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

// const configs = {
//   ...config,
//   logging: false,
// }

const logging = (log1, log2) => {
  console.log(1, log1)
  console.log(2, session.identifier)
  console.log(3, log2);
  logger();
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config, logging
});

db.sequelize = sequelize;

db.User = User;

User.init(sequelize);

User.associate(db);

module.exports = db;


/*
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

*/