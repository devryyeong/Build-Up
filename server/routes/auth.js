const express = require("express");
const crypto = require("crypto");
// const mysql = require("mysql2/promise");
// const { dbconfig, sshConfig } = require("../config/database");
// const pool = mysql.createPool(dbconfig);
const SSHPool = require("../config/database");
const jwt = require("../util/jwt");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { id, password, name, info, phone, birth, signup_type } = req.body;
  let result = {};

  console.log("HTTP POST: signup");

  const pw_hash = crypto.createHash("sha256").update(password).digest("base64");

  const sql =
    "INSERT INTO user(id, password, name, info, phone, birth, signup_type) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const params = [id, pw_hash, name, info, phone, birth, signup_type];

  const pool = await SSHPool();
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    await connection.beginTransaction();
    await connection.query(sql, params);
    await connection.commit();

    console.log("query success");
    Object.assign(result, {
      status: 200,
      message: "회원가입 성공",
    });
  } catch (error) {
    await connection.rollback();

    console.log(error);
    Object.assign(result, {
      status: 400,
      message: "회원가입 실패",
    });
  } finally {
    connection.release();
  }

  return res.json(result);
});

router.post("/signin", async (req, res, next) => {
  const { id, password } = req.body;
  let result = {};

  console.log("HTTP POST: signin");

  const pw_hash = crypto.createHash("sha256").update(password).digest("base64");

  const sql = "SELECT * FROM user WHERE id=? AND password=?";
  const params = [id, pw_hash];

  const pool = await SSHPool();
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    let user = await connection.query(sql, params);
    if (!user) {
      throw new Error("Null");
    }

    user = user[0];
    if (user.length == 0) {
      throw new Error("User not found.");
    }

    user = user[0];

    console.log(user);
    const token = await jwt.sign(user);
    const accessToken = token.accessToken;

    Object.assign(result, {
      status: 200,
      message: "로그인 성공",
      data: {
        id: user.id,
        name: user.name,
        picture: user.picture,
        info: user.info,
        phone: user.phone,
        birth: user.birth,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    Object.assign(result, {
      status: 400,
      message: "로그인 실패",
    });
  }

  return res.json(result);
});

router.get("/signout", (req, res, next) => {
  console.log("HTTP GET: signout");
});

router.post("/findId", async (req, res, next) => {
  const { name, phone } = req.body;
  let result = {};

  console.log("HTTP POST: findId");

  const sql = "SELECT id FROM user WHERE name=? AND phone=?";
  const params = [name, phone];
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    let id = await connection.query(sql, params);
    if (!id) {
      throw new Error("Null");
    }

    id = id[0];
    if (id.length == 0) {
      throw new Error("Id not found.");
    }

    console.log(id);
    Object.assign(result, {
      status: 200,
      message: "아이디 찾기 성공",
      data: id[0],
    });
  } catch (error) {
    console.log(error);
    Object.assign(result, {
      status: 400,
      message: "아이디 찾기 실패",
    });
  }

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

module.exports = router;
