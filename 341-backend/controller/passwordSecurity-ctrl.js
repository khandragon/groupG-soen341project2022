const Users = require("../schemas/user-model");
const bcrypt = require('bcryptjs');

// salt and hash password for security purposes
securePassword = async (req, res) => {
    const body = req.body;
    if (!body) { // if username or password missing tell user
      return res.status(400).json({
        success: false,
        error: "You must provide a username and password.",
      });
    }

    const hashPassword = await bcrypt.hash(body.password, 10); // salt and hash password

    Users.findOne({ username: body.username }, (err, user) => { // if user with username provided does not exist, password is not secured
        if (user == null) {
            return res.status(201).json({
              success: false,
              err,
              message: "Username does not exist, password cannot be secured.",
            });
        }
        
        user.password = hashPassword; // if user exists change password to hashed password
        user.save() // save user with hashed password
        .then(() => {
            return res.status(201).json({
                success: true,
                username: user.username,
                password: user.password,
                msg: "Password secured!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
            error,
            msg: "Password cannot be secured.", 
            });
        });
    });
}

// authenticate password
authenticatePassword = async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.body.username });  // find user with username given
         if (await bcrypt.compare(req.body.password, user.password)) { // if password given matches password of user, password is authenticated
             return res.status(201).json({ 
                 success: true, 
                 username: user.username, 
                 password: req.body.password, 
                 msg: "Password is authenticated."
                })
         }
         else {
             return res.status(400).json({ success: false, error: err });
         }
    } catch(error) {
        console.log(error);
        return res.status(500).json({ 
            success: false, 
            msg: "Username or password is incorrect. Try again."
        }) // if user or password incorrect, authentication failed
    }
}


module.exports = {
    securePassword,
    authenticatePassword,
};
  