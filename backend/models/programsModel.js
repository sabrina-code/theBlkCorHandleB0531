const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProgramsSchema = new Schema(
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

const Programs = mongoose.model("programs", ProgramsSchema);
module.exports = Programs;
