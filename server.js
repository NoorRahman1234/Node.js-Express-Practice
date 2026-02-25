// Modern way to define express.
import express from 'express'
const app1 = express();

const PORT = 3000;

// // Basic route
app1.get("/", (req, res) => {
    res.send("Welcome Noor Express server is running!");
});

//About page
app1.get("/about", (req, res)=>{
    res.send("This is the about page.");
});
// Contact page
app1.get("/contact", (req, res)=>{
    res.send('Contact us at contact@example.com.');
});


app1.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
////////////////////////////////////////////////////////////////////

// Basic routing 
// import express from 'express';
// const app = express();
// const PORT = 5000;

// //About page
// app.get("/about", (req, res)=>{
//     res.send("This is the about page.");
// });
// // Contact page
// app.get("/contact", (req, res)=>{
//     res.send('Contact us at contact@example.com.');
// });
