const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const userRouter = require("../routes/user-router");
const accountRouter = require("../routes/account-router");
const productsRouter = require("../routes/products-router");

const app = express();
const apiPort = 27017;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouter);
app.use("/api", accountRouter);
app.use("/api", productsRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
