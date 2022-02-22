const express = require("express");

const router = express.Router();

router.post("/create", (req, res, next) => {
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

router.get("/read", (req, res, next) => {
  console.log("HTTP GET: Portfolio read");
});

router.post("/update", (req, res, next) => {
  const fields = req.body;

  console.log("HTTP POST: Portfolio update");
});

router.post("/delete", (req, res, next) => {
  // const
});
module.exports = router;
