const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Carts = new Schema(
  {
    cartID: { type: Number , required: true },
    productsByIsbn: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carts", Carts, "Carts");
