const express = require("express");
const crypto = require("crypto");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { id, password, name, picture, birth, phone, signup_type } = req.body;
  let result = {};

  const pw_hash = crypto.createHash("sha256").update(password).digest("base64");

  console.log("HTTP POST: signup");

  return res.json(result);
});

router.post("/signin", (req, res, next) => {
  const { id, password } = req.body;
  let result = {};

  const pw_hash = crypto.createHash("sha256").update(password).digest("base64");

  console.log("HTTP POST: signin");

  return res.json(result);
});

router.get("/signout", (req, res, next) => {
  console.log("HTTP GET: signout");
});

router.post("/findId", (req, res, next) => {
  const { name, phone } = req.body;
  let result = {};

  console.log("HTTP POST: findId");

  return res.json(result);
});

router.post("/findPw", (req, res, next) => {
  const { name, id, phone, new_pw } = req.body;

  const pw_hash = crypto.createHash("sha256").update(new_pw).digest("base64");

  console.log("HTTP POST: findPw");

  return res.json(result);
});

router.post("/setPw", (req, res, next) => {
  console.log("HTTP POST: setPw");

  return res.json({});
});

router.module.exports = router;
