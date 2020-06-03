const Landing = require("../../models/landingModel");
module.exports = {
    getLandingInfo(req, res) {
        res.send({ hi: "there" });
    },
    createLanding(req, res) {
        console.log(req.body);
        const landingProps = req.body;
        Landing.create(landingProps)
            .then(landing => res.send(landing))
    }
};