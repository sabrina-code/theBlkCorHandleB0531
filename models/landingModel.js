const mongoose = require("mongoose");
const Schema = mongoose.Schema

const LandingSchema = new Schema(
    {
        name: String,
        headercls: String,
        title: String,
        subtitlecls: String,
        subtitle: String,
        intro: String,
        linkcls: String,
        linkpage: String,
        imgcls: String,
        imgsrc: String
    }
);

const Landing = mongoose.model("landing", LandingSchema);
module.exports = Landing;
