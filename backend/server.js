const express = require("express");

const dbConnect = require("./database/index");

const { PORT } = require("./config/index");

const app = express();

dbConnect();

app.get("/", (req, res) => res.json({ msg: "Hello Earth!" }));

app.listen(PORT, console.log(`Backend is runnnig on PORT : ${PORT}`));
