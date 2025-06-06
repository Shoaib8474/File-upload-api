require('dotenv').config();

const { development } = require('./config')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(development.database, development.username, development.password, {
  host: development.host,
  dialect: development.dialect ,
  port: 3306, 
  logging: false,
});

async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testConnection();