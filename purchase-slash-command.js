const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// allow us to easily process post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/purchase", async (req, res) => {
  console.log(req.body);
  res.send('Ok')
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Slack App Purchase listening on port ${port}`);
});
