const express = require("express");
const SSHPool = require("../config/database");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

// const sql_create = "INSERT INTO diary (title, ))";

//create read
router.post("/create", isLoggedIn, async (req, res, next) => {
  const content = req.body.content;
  const stars = req.body.stars;
  const date = req.body.date;

  let result = {};

  const params = [req.user_id, content, stars, date];
  const sql =
    "INSERT INTO diary(user_id, content, stars, date) VALUES (?,?,?,?)";
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

router.get("/get", isLoggedIn, async (req, res, next) => {
  let result = {};

  const params = [req.user_id];
  const sql = "SELECT diary_id, date FROM diary WHERE user_id=?";

  const pool = await SSHPool();
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    let diary = await connection.query(sql, params);
    if (!diary) {
      throw new Error("Null");
    }

    diary = diary[0];
    if (diary.length == 0) {
      throw new Error("User not found.");
    }

    console.log(diary);

    Object.assign(result, {
      status: 200,
      message: "다이어리 조회 성공",
      data: diary,
    });
  } catch (error) {
    console.log(error);
    Object.assign(result, {
      status: 400,
      message: "다이어리 조회 실패",
    });
  }

  return res.json(result);
});

router.post("/update", (req, res, next) => {
  console.log("HTTP POST: Dairy update");
});

router.post("/delete", (req, res, next) => {
  console.log("HTTP POST: Dairy delete");
});

module.exports = router;
