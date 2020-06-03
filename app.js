const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cornerstone");

const app = express();

app.use(bodyParser.json());//before routes
routes(app);

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get('/', (req, res) => {
//   Landing.find({})
//     .then(landings => {
//       res.json(landings);
//     }).catch(err => {
//       res.json(err);
//     })
// });

module.exports = app;