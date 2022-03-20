const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const userRouter = require("../routes/user-router");
const accountRouter = require("../routes/account-router");
const productsRouter = require("../routes/products-router");
const ordersRouter = require("../routes/orders-router");
const businessProductsRouter = require("../routes/businessProducts-router");
const cartsRouter = require("../routes/carts-router");

const app = express();
const apiPort = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouter);
app.use("/api", accountRouter);
app.use("/api", productsRouter);
app.use("/api", ordersRouter);
app.use("/api", businessProductsRouter);
app.use("/api", cartsRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
