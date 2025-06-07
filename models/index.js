const sequelize = require('../config/databaseConfig');
const File = require('./file.js');

console.log(File)
module.exports = { sequelize, File};