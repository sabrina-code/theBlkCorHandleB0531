const assert = require("assert");
const Landing = require("../backend/landingModel");

describe("Creating MongoDB data.", () => {
    it("save data", (done) => {
        const landing = new Landing({ name: "home-about" });

        landing.save()
            .then(() => {
                assert(!landing.isNew);
                done();
            });
    });
});