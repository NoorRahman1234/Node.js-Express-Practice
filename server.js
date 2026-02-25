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

// Output 
// first it will run on the server and then it will  run on the browser on port 3000.
// on 3000 it will show basic route and /about it will show about page and /contact it will show contact page.