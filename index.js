const apiRoutes = require("./api-routes");
const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
const db = mongoose.connection;

if(!db){
    console.log("Error connecting to the database.");
}
else{
    console.log("DB connected Successfully");
}

// Send message for default URL
app.get("/",(req,res)=>{
    res.send("Welcome to the express World")
})

app.use("/api",apiRoutes);













// Launch app to listen to specified port
const port = process.env.PORT || 8080;
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});