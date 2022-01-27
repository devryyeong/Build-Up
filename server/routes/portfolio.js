const express = require("express");

const router = express.Router();

router.post("/set", (req, res, next) => {
  const {
    name,
    address,
    birth,
    phone,
    email,
    education,
    achivement,
    certification,
    experience,
    link,
    career,
    picture_url, // 이미지 URL
  } = req.body;
  let result = {};

  console.log("HTTP POST: Portfolio set");

  return res.json(result);
});

router.get("/get", (req, res, next) => {
  console.log("HTTP GET: Portfolio get");
});

module.exports = router;
