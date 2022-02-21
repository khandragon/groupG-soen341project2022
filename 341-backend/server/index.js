const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 27017;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
