const express = require("express");

const router = express.Router();

router.post("/set", (req, res, next) => {
  let result = {};

  console.log("HTTP POST: Diary set");

  return res.json(result);
});

router.get("/get", (req, res, next) => {
  console.log("HTTP GET: Dairy get");
});

module.exports = router;
