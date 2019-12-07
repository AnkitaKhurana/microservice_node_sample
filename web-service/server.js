require('dotenv').config()
const app = require("./src/app");

app.listen(3002, () => {
    console.log('Web Services running ...');
});


