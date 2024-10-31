require("dotenv").config();
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const router = require("./router.js");

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Welcome to the Snack Kura. スナック倉");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
