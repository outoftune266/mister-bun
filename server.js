const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT,  () =>{
    console.log(`The server is listening on ${PORT}`);
});