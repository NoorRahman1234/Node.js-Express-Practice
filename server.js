
// Express 
const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Noor!! Express is working.");
});
app.listen(3000, ()=>{
    console.log(" Hello Noor! Server is running or port 3000");
});


// Output
// To run this code wirte (node server.js) in terminal it will show "Hello Noor! Server is working on port 3000"
// then open browser on port 3000 it will show "Hello Noor!! Express is working."