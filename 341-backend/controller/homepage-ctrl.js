
const Products = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

getHomeProducts = async (req, res) => {
    var randomNumber = Math.floor(Math.random() * (products.length() - 1));
    var posted = new Array();
    try {
        while (posted.length() <= products.length()) {
            if (posted.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * (products.length() - 1));
            }
            else {
            const products = await Products.find( { $arrayElemAt: "products", randomNumber });
            posted.push(randomNumber);
            }
        };
        
        return res.status(200).json({ success: true, data: products });
    } catch (e) {
        console.log(e);
        return res
          .status(500)
          .json({ success: false, msg: "something went wrong" });
      }
};

module.exports = {
    getHomeProducts,
};
