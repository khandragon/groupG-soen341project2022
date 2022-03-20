const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = new Schema(
  {
    username: { type: String, required: true },
    productISBN: { type: String, required: true},
    payed: { type: Number, required: true},
    orderedDate: { type: String, required: true },
    arrivalDate: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", Orders, "Orders");
