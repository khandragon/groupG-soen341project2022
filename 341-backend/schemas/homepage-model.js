const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Homepage = new Schema(
  {
    title: { type: String, required: true },
    sellerName: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imgUrl: { type: String, required: true },
    Price: { type: Number, required: true },
    ShippingCost: { type: Number, required: true },
    Sale: { type: Number },
    isbn: { type: String, required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model()


