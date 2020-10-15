const { appendFile } = require("fs");
var path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname))
})