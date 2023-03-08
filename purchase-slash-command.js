const express = require("express");
const bodyParser = require("body-parser");
const { sendDM } = require("./modules/slack");
const config = require("./config");
const { ceo } = require("./config");
const app = express();
const port = 3000;

// allow us to easily process post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/purchase", async (req, res) => {
  console.log(req.body);
  res.json({ text: `Thanks for your purchase request of ${req.body.text}` });
  sendDM(config.ceo, `hey douchebag, <@${req.body.user_id}> placed a purchase request of ${req.body.text}. Yay or Neigh?`);
});

app.listen(port, () => {
  console.log(`Slack App Purchase listening on port ${port}`);
});
