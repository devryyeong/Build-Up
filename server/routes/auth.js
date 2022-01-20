const express = require("express");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log("HTTP POST: signup");
});

router.post("/login", (req, res, next) => {
  console.log("HTTP POST: login");
});

module.exports = router;
