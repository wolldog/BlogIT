const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//Allow Heroku to use process.env.JAWSDB_URL when deployed
//Else use local environmental variables
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}
module.exports = sequelize;