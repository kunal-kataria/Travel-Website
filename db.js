const express = require("express")
const mongoose = require("mongoose");


const uri = "mongodb+srv://kunal0935:kunalk0935@cluster0.rmvf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


module.exports;