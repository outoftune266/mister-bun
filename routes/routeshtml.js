var path = require("path");


function initHtmlRoutes(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../home.html"));
    });

    app.get("/table", (req, res) => {
        res.sendFile(path.join(__dirname, "../table.html"));
    });

    app.get("/reservation", (req, res) => {
        res.sendFile(path.join(__dirname, "../reservation.html"));
    });
}

module.exports = initHtmlRoutes;