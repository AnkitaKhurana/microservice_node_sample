const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
  });
  

module.exports = app;