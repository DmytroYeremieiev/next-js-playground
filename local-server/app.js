const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.get("/cards", (req, res) => {
  console.log("req", new Date(parseInt(req.query.timestamp)).toString());
  res.sendFile(path.join(__dirname, "cards.json"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
