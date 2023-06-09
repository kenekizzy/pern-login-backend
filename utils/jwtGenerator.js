const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (user_id) => {
    const payload ={
        id: user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn:  "1h"})
}

module.exports = jwtGenerator