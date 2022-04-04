const Homepage = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

getHomeProducts = async (req, res) => {
    try {
        var randomNumber;
        var posted = new Array();
        while (posted.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * products.length());
        };
        const homepage = await Homepage.find( { $arrayElemAt: "products", randomNumber });
        posted.push(randomNumber);
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
