const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const brandsRouter = require("./routes/brandsRouter.js");
app.use("/brands", brandsRouter);

const loginRouter = require("./routes/loginRouter.js");
app.use("/login", loginRouter);
const sequelize = require("./db/connection");

app.get("/", function (request, response) {
  response.send("<h1>Главная страница</h1>");
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

    sequelize.sync().then(result=>{
    })
    .catch(err=> console.log(err));
});

app.listen(3001);
