require('dotenv').config()
const app = require("./src/app");
const mongoose = require("mongoose");
const  DB_URI  =(process.env.MONGO_DB_URI || "mongodb://localhost:27017/microservices");


mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    return ;
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

mongoose.connect(DB_URI, { useNewUrlParser: true });
app.listen(3001, () => {
    console.log('Search Services running ...');
});


