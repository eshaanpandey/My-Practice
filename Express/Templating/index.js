const express = require("express");
const path = require("path")
// const app = express();

// app.listen(3000, () => {
//     console.log("Listening on port 3000")
// })

// import express from "express";
// import path from "path";

const app = express();

app.set('view engine', 'ejs');
// the default working directory is process.cwd
app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res) => {
    // yha home.ejs ya /views/home.ejs ni krna padega
    // kyuki by default app.set ki wajah se vo views me hi dekhega
    res.render('home');
    // res.send("Response")
})

app.get('/rand', (req, res) =>{
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random', {num})
    // is read as res.render('random', {num: num})
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
