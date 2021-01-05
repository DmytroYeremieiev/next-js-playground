const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.get("/cards", (req, res) => {
  console.log("/cards", new Date(parseInt(req.query.timestamp)).toString());
  res.sendFile(path.join(__dirname, "cards.json"));
});

app.get("/card/:cardId", (req, res) => {
  console.log(
    `/card/${req.params.cardId}`,
    new Date(parseInt(req.query.timestamp)).toString()
  );
  res.sendFile(path.join(__dirname, "card1.json"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
