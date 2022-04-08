const Users = require("../schemas/user-model");
const bcrypt = require('bcryptjs');

securePassword = async (req, res) => {
    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a username and password",
      });
    }
  
	const hashPassword = await bcrypt.hash(req.body.password, 10);
	const user = { username: req.body.username, password: hashPassword };
	user
    save()
    .then(() => {
        return res.status(201).json({
            success: true,
            username: user.username,
            password: user.password,
            message: "password secured",
        });
    })
    .catch((error) => {
        return res.status(400).json({
        error,
        message: "password not secured",
        });
    });
}

authentificatePassword = async (req, res) => {
    try {
        const user = await Users.find({ username: req.body.username });
         if (await bcrypt.compare(req.body.password, user.password)) {
             return res.status(201).json({ success: true, msg: "password is authenticated"})
         }
         else {
             return res.status(400).json({ success: false, error: err });
         }
    } catch(error) {
        console.log(error);
        return res.status(500).json( { success: false, msg: "username or password is incorrect"} )
    }
}


module.exports = {
    securePassword,
    authentificatePassword,
};
  