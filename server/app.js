const express = require("express");
const http = require("http");
const morgan = require("morgan");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const app = express();

const port = 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

http.createServer(app).listen(port, () => {
  console.log(`Backend listening on port ${port}.`);
});
