const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/search_routes");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/", (req,res)=>{res.send("Search Service");});
app.use("/search/", routes);

module.exports = app;