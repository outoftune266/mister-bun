const initHtmlRoutes = require("./routes/routeshtml")
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 4001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initHtmlRoutes(app);




app.listen(PORT,  () =>{
    console.log(`The server is listening on ${PORT}`);
});