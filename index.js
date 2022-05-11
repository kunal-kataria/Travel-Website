const express = require("express")
const path = require("path")
const app = express(); //to initialise

app.use(express.json());
require("./db")

var exphbs  = require('express-handlebars');

const User = require("./Schema");

app.set('view engine', '.hbs');

app.use(express.static("public"))


app.get("/", (req,res)=>{
    res.sendFile('/index.html')
})

app.get("/about", (req,res)=> {
    res.sendFile(path.join(__dirname+"/public/aboutus.html"))
})

app.get("/destination", (req,res)=>{
    res.sendFile(path.join(__dirname+"/public/tours.html"))
})

app.get("/login", (req,res)=>{
    res.render('login.hbs')
})

app.post("/register", async(req,res)=>{
    const {name,username,password,mobileNo} = req.body;
    try {
        const user = {
            name,
            username,
            password,
            mobileNo
        }
        await User.save();
        console.log("USER REGISTERED")
        res.redirect("/");

    } catch (error) {
        res.redirect("/login")
    }
})


const port = 5000;

app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})

