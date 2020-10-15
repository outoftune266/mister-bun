const { appendFile } = require("fs");
var path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});