
// Express 
const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Noor!! Express is working.");
});
app.listen(3000, ()=>{
    console.log(" Hello Noor! Server is running or port 3000");
});