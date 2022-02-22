const express = require("express");
const router = express.Router();
const SSHPool = require("../config/database");

const sql_create = "INSERT INTO diary (title, ))";

//create read
router.post("/create", async (req, res, next) => {
  const content = req.body.content;
  const stars = req.body.stars;
  const date = req.body.date;

  const params = [content, stars, date];
  const sql = "INSERT INTO diary(content, stars, date) VALUES (?,?,?)";
  const pool = await SSHPool();
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    await connection.beginTransaction();
    await connection.query(sql, params);
    await connection.commit();

    console.log("query success");
    Object.assign(result, {
      status: 200,
      message: "다이어리 작성 성공",
    });
  } catch (error) {
    await connection.rollback();
    console.log(error);
    Object.assign(result, {
      status: 400,
      message: "다이어리 작성 실패",
    });
  } finally {
    connection.release();
  }

  return res.json(result);
});

router.get("/get", (req, res, next) => {
  const result = {};

  console.log("HTTP GET: Dairy get");

  return res.json(result);
});

router.post("/update", (req, res, next) => {
  console.log("HTTP POST: Dairy update");
});

router.post("/delete", (req, res, next) => {
  console.log("HTTP POST: Dairy delete");
});

module.exports = router;
