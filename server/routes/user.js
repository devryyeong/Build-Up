const express = require("express");

const router = express.Router();

router.get("/getUser", (req, res, next) => {
  console.log("HTTP GET: getUser");
});

module.exports = router;
