const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.json({ status: "OK" });
});
app.get("/test", async (req, res) => {
      res.json({ status: "testing" });
    });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});