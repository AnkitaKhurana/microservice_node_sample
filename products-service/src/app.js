const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("../src/routes/product_routes");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/", (req,res)=>{res.send("Product Service");});
app.use("/products/", routes);

module.exports = app;