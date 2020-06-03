const LandingInfoController = require("../controllers/landingInfoController");

module.exports = (app) => {
    app.get('/api', LandingInfoController.getLandingInfo);
    app.post('/api/landing', LandingInfoController.createLanding);
};