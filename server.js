const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars')
const mongoose = require("mongoose");
const config = require("./backend/config");
const Landing = require("./backend/models/landingModel");
const router = express.Router();
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const app = express();
app.use(express.json());
app.use(express.static("public"));

//database
const mongodbUri = config.MONGODB_URI;
mongoose.connect(mongodbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

mongoose.Promise = global.Promise;

//fetch data
app.use("/", router);

router.get("/", async (req, res) => {
    try {
        const data = await Landing.find({});
        res.render("index", { data })
    } catch (err) {
        console.error(err);
    }
});

let data;
router.get("/api", async (req, res) => {
    try {
        const data = await Landing.find({});
        res.send(data[0].name);;
    } catch (err) {
        console.log(err);
    }
});

//Handelbars
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set("view engine", "hbs");


let PORT = config.PORT;
app.listen(PORT, () => {
    console.log("App listening on " + PORT);
});
