const jwt = require("../util/jwt");

exports.isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(`Token: ${token}`);
  if (token === undefined) {
    console.log("token null");
    return res.json({
      status: 403,
      message: "Authorization Error",
    });
  }

  const user = await jwt.verify(token);
  if (typeof user === "string") {
    return res.json({
      status: 401,
      message: user,
    });
  }
  if (user === undefined) {
    return res.json({
      status: 401,
      message: "Unknown Error",
    });
  }

  req.user_id = user.user_id;
  next();
};
