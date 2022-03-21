const Homepage = require("../schemas/homepage-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

getHomeProducts = async (req, res) => {
    try {
        var limit = 4;
        var i;
        var randomNumber;
        var posted = new Array();
        for (i < 0; i < limit; i++) {
            while (posted.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * homepage.length());
            };
            const homepage = await Homepage.find( { $arrayElemAt: "homepage", randomNumber });
            posted.push(randomNumber);
            return res.status(200).json({ success: true, data: homepage });
        }
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
