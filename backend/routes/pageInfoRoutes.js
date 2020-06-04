const express = require("express");
const Landing = require("../models/landingModel");

const router = express.Router();

router.get("/", async (req, res) => {
    const landing = await Landing.find({});
    res.send(landing);
});

module.exports = router;
