const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AboutSchema = new Schema(
    {
        title: String,
        titlecls: String,
        infop1: String,
        imgsrc: String,
        bordercls: String
    }
);

const About = mongoose.model("about", AboutSchema);
module.exports = About;

