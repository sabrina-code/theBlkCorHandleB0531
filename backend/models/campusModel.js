const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Campuschema = new Schema(
    {
        title: String,
        titlecls: String,
        infop1: String,
        imgsrc: String,
        bordercls: String
    }
);

const Campus = mongoose.model("campus", Campuschema);
module.exports = Campus;

