const express = require("express");
const router = express.Router();

// const sql_create = "INSERT INTO diary (title, ))";

router.post("/create", (req, res, next) => {
  let result = {};

  console.log("HTTP POST: goals create");

  return res.json(result);
});

router.get("/get", (req, res, next) => {
  const result = {};

  console.log("HTTP GET: goals get");

  return res.json(result);
});

router.post("/update", (req, res, next) => {
  console.log("HTTP POST: Dairy update");
});

router.post("/delete", (req, res, next) => {
  console.log("HTTP POST: Dairy delete");
});

module.exports = router;
