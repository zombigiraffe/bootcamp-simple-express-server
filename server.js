//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: arronmixell@yahoo.com");
});

app.get("/about", function (req, res) {
    res.send("Ayo I'm just some guy learning how to web dev and am a vocalist in a band lolokololooolol");
});

app.listen(3000, function () {
    console.log("Server started on port 3000")
});