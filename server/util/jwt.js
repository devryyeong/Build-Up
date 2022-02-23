const jwt = require("jsonwebtoken");
const secretKey = require("../config/secretkey").secretKey;
const options = require("../config/secretkey").options;

module.exports = {
  sign: async (user) => {
    console.log(`userid: ${user.user_id}, id: ${user.id}`);
    const payload = {
      user_id: user.user_id,
      id: user.id,
    };

    return {
      accessToken: jwt.sign(payload, secretKey, options),
    };
  },
  verify: async (token) => {
    let decoded;

    try {
      decoded = jwt.verify(token, secretKey);
      console.log(decoded);
    } catch (err) {
      if (err.message === "jwt expired") {
        console.log("expried token");
        return "TOKEN_EXPIRED";
      } else if (err.message === "invalid token") {
        console.log("invalid token");
        return "TOKEN_INVALID";
      }

      console.log(err);
      return err.message;
    }

    return decoded;
  },
};
