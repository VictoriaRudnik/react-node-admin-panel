const Sequelize = require("sequelize");
const db = require("../db/connection.js");


const BrandList = db.define("brandlist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = BrandList