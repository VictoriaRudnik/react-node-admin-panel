const Sequelize = require("sequelize");
const sequelize = new Sequelize("admindb", "root", "Joik5ofxa6", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});

module.exports = sequelize