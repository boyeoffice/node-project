const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  return res.send('It works, Products');
});

app.listen(7001, () => {
  console.log("Gateway is Listening to Port 7001");
});