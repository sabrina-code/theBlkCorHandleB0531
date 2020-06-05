const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PageSchema = new Schema(
    {
        title: String,
        titlecls: String,
        intro: String,
        subtitle: String,
        subtitlcls: String,
        infop1: String,
        infop2: String,
        infop3: String,
        infop4: String,
        infop5: String,
        infop6: String,
        infop7: String,
        imgsrc: String,
        bordercls: String
    }
);

const Page = mongoose.model("page", PageSchema);
module.exports = Page;
