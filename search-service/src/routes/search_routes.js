const fetch = require("node-fetch");
const { Router } = require('express')
const router = Router()

router.get("/products/", async (req, res) => {
    
    const productResponse = await fetch("http://localhost:3000/products/");
    try{
        const productJson = await productResponse.json();
        res.send(productJson);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

router.get("/test", async (req, res) => {

    try {
        res.send("Testing the service");
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;