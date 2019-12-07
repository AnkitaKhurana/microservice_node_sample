const Product = require("../models/product_model");
const { Router } = require('express')
const router = Router()

router.get("/", async (req, res) => {

    const products = await Product.find({});
    try {
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    const newProduct = new Product({ name: req.body.name });
    const savedProduct = await newProduct.save();
    try {
        res.send(savedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;