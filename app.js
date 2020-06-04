const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./backend/routes/routes");

const app = express();

//if not testing, connect to the true database-production or development
//use helper_test to connect to another database for testing
//so that mongoose may not skip if and execute the wrong connection(asynch)
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== "test") {
    mongoose.connect("mongodb://localhost/cornerstone");
}

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