require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

//connect db
const { GET_DB, CONNECT_DB } = require("./src/configs/init.mongodb");

//configs view engine
const configViewEngine = require("./src/configs/viewEngine");
configViewEngine(app);
app.use(express.static("public"));

//required routes
const initWebRouters = require("./src/routes");
const { error } = require("console");
initWebRouters(app);

//configs port, host
const port = process.env.PORT || 8080;
const host = process.env.HOST_NAME || "localhost";


const START_SERVER = () => {
  app.listen(port)
};

CONNECT_DB()
  .then(() => console.log("Connected Database"))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });

