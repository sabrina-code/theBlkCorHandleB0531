const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars')
const mongoose = require("mongoose");
const config = require("./backend/config");
const Landing = require("./backend/models/landingModel");
const About = require("./backend/models/aboutModel");
const Campus = require("./backend/models/campusModel");
const Programs = require("./backend/models/programsModel");
const Enrichment = require("./backend/models/enrichmentModel");
const Parent = require("./backend/models/parentModel");
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
        res.render("index", { data, index: "active disabled", isActive: true })
    } catch (err) {
        console.error(err);
    }
});

router.get("/about", async (req, res) => {
    try {
        const data = await About.find({});
        res.render("about", { data, about: "active disabled", isActive: true })
    } catch (err) {
        console.error(err);
    }
});

router.get("/campus", async (req, res) => {
    try {
        const data = await Campus.find({});
        res.render("campus", { data, campus: "active disabled", isActive: true })
    } catch (err) {
        console.error(err);
    }
});

router.get("/programs", async (req, res) => {
    try {
        const data = await Programs.find({});
        res.render("programs", { data, programs: "active disabled", isActive: true })
    } catch (err) {
        console.error(err);
    }
});

router.get("/enrichment", async (req, res) => {
    try {
        const data = await Enrichment.find({});
        res.render("enrichment", { data, enrichment: "active disabled", isActive: true })
    } catch (err) {
        console.error(err);
    }
});

router.get("/parent", async (req, res) => {
    try {
        const data = await Parent.find({});
        res.render("parent", { data, parent: "active disabled", isActive: true })
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
