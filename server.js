const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const config = require("./backend/config.js");
const db = require("./backend/landingModel");

const mongodbUri = config.MONGODB_URI;
mongoose.connect(mongodbUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: '.hbs'
}));
app.set("view engine", "hbs");

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get('/', (req, res) => {
  db.landing.find({})
    .then(landing => {
      res.json(landing);
    }).catch(err => {
      res.json(err);
    })
});









let PORT = 5000;

app.listen(PORT, () => {
  console.log("App listening on " + PORT);
});
