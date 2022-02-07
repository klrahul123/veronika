const express = require("express");
const path = require("path");
const app=express();
const fs = require('fs');
//const hbs = require("hbs");

//const staticPath = path.join(__dirname, "../public");
//const templatePath = path.join(__dirname, "../templates/views");
//const partialsPath = path.join(__dirname, "../templates/partials");
//app.use(express.static(staticPath));
app.use(express.static(path.join(__dirname, 'build')));

//app.set("view engine", "hbs");
//app.set("views", templatePath);
//hbs.registerPartials(partialsPath);


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.get("/me", (req , res) => {
    res.render('index');
});

app.get("/about", (req , res) => {
    res.render('about');
});

app.get("/" , (req , res) => {
    res.send("hello kalua here <h1>Love you the most </h1>");
});
app.get("/about", (req, res) => {
    res.send("thank you dost");
});

app.get( "*" , (req , res) => {
    res.render("404" , {
        error: "nikal laude ye page nhi h idhar" ,
    });
});

app.listen(8000, () => {
    console.log("listening to the port 8000");
});