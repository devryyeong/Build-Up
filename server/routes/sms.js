const express = require("express");
const CryptoJS = require("crypto-js");

const router = express.Router();

router.post("/request", (req, res, next) => {
  const { phone } = req.body;
  let result = {};

  const code = Math.floor(Math.random() * (999999 - 100000) + 100000);

  console.log("HTTP POST: SMS request");

  return res.json();
});

router.post("/verify", (req, res, next) => {
  const { phone, code } = req.body;
  let result = {};

  console.log("HTTP POST: SMS verify");

  return res.json();
});
