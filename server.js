const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars')
const mongoose = require("mongoose");
const config = require("./backend/config");
const Landing = require("./backend/models/landingModel");
const Page = require("./backend/models/sectionModel");
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

//Handelbars
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set("view engine", "hbs");

//Routes
app.use("/", router);

router.get("/index", async (req, res) => {
    try {
        const data = await Landing.find({});
        res.render("index", { data, active: { navhome: true } })
    } catch (err) {
        console.error(err);
    }
});

router.get("/programs", async (req, res) => {
    try {
        const data = await Page.find({});
        res.render("programs", { data })
    } catch (err) {
        console.error(err);
    }
});

//API
router.get("/api", async (req, res) => {
    try {
        const data = await Landing.find({});
        res.send(data[0].name);;
    } catch (err) {
        console.log(err);
    }
});


let PORT = config.PORT;
app.listen(PORT, () => {
    console.log("App listening on " + PORT);
});
