const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ParentSchema = new Schema(
    {
        title: String,
        titlecls: String,
        intro: String,
        subtitle: String,
        subtitlcls: String,
        infop1: String,
        imgsrc: String,
        bordercls: String
    }
);

const Parent = mongoose.model("parent", ParentSchema);
module.exports = Parent;
