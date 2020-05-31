var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: '.hbs'
}));
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
