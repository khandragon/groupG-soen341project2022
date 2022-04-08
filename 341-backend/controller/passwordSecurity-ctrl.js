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

    const hashPassword = await bcrypt.hash(body.password, 10);

    Users.findOne({ username: body.username }, (err, user) => {
        if (err) {
            return res.status(404).json({
              err,
              message: "password not secured",
            });
        }
        user.password = hashPassword;
        user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                username: user.username,
                password: user.password,
                msg: "password secured",
            });
        })
        .catch((error) => {
            return res.status(400).json({
            error,
            msg: "password not secured",
            });
        });
    });
}

authenticatePassword = async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.body.username });  
         if (await bcrypt.compare(req.body.password, user.password)) {
             return res.status(201).json({ success: true, username: user.username, password: req.body.password, msg: "password is authenticated"})
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
    authenticatePassword,
};
  