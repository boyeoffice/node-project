const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  return res.send('It works');
});

app.listen(7000, () => {
  console.log("Gateway is Listening to Port 7000");
});