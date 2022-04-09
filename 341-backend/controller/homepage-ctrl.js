const Products = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

// get products in random order to appear on homepage
getHomeProducts = async (req, res) => {  
    try {
        const homeAmount = req.params.homeAmount;
        const homepage = await Products.find({}); // list of products from database
        var homeProducts = new Array();
        function randomNum() { // function gets random index from list of products
            var rnb = Math.floor(Math.random() * homepage.length); 
            return rnb;
        };
		var index = randomNum();
        for (var i = 0; i < homeAmount; i++) {
			while (homeProducts.includes(homepage[index])) { // while loop to get unique product
                index = randomNum(); // if product is already listed for homepage, find another product
            };
            homeProducts[i] = homepage[index]; // add product to homepage
        }
        return res.status(200).json({ success: true, data: homeProducts });
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
