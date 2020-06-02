const assert = require("assert");
const Landing = require("../backend/landingModel");

describe("Creating MongoDB data.", () => {
    it("save data", (done) => {
        const home = new Landing({ name: "home-about" });

        home.save()
            .then(() => {
                assert(!home.isNew);
                done();
            });
    });
});