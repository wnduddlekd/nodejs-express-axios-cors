// server.js

const express = require("express");
const cors = require("cors");
const app = express();

let data = { message: "여러분 화이팅!" };

// CORS 설정을 위한 헤더
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(express.text());

app.options("/", (req, res) => {
  res.sendStatus(204);
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.post("/", (req, res) => {
  data.message = req.body;
  res.status(200).send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  res.status(200).send(`업데이트 된 데이터: ${req.body}`);
});

app.patch("/", (req, res) => {
  data.message = req.body;
  res.status(200).send(req.body);
});

app.delete("/", (req, res) => {
  data = {};
  res.status(200).send("데이터가 삭제되었습니다.");
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
