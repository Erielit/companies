const express = require("express");
const cors = require("cors");
const { getConnection } = require("../controllers/MysqlConnection");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.SERVERPORT;
    this.usersPath = "/api/company";
    //Middleware
    this.middlewares();
    //routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/companies"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App running in port ", this.port);
    });
  }
}

module.exports = Server;
