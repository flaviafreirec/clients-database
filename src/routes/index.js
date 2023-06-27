const { Router } = require("express");
const routes = Router();

// Client rout 
const userRouter = require("./users.routes");
routes.use("/users", userRouter);


module.exports = routes;