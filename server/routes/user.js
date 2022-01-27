const express = require("express");

const router = express.Router();

router.get("/getUser", (req, res, next) => {
  console.log("HTTP GET: getUser");
});

router.post("/setInfo", (req, res, next) => {
  const { info } = req.body;
  let result = {};

  console.log("HTTP POST: ");

  return res.json(result);
});

module.exports = router;
