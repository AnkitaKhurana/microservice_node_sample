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
    const product = req.body;
    const newProduct = new Product({ name: product.name });
    const savedProduct = await newProduct.save();
    console.log(savedProduct)
    res.json(savedProduct);
});
module.exports = router;