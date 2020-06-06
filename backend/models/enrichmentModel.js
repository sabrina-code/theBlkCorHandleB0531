const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EnrichmentSchema = new Schema(
    {
        title: String,
        titlecls: String,
        infop1: String,
        imgsrc: String,
        bordercls: String
    }
);

const Enrichment = mongoose.model("enrichment", EnrichmentSchema);
module.exports = Enrichment;

