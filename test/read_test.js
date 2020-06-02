const assert = require("assert");
const Landing = require("../backend/landingModel");

describe("Readgin landing info out of the database", () => {
    let home;
    beforeEach((done) => {
        home = new Landing({ name: "home-about" });
        home.save()
            .then(() => done());
    });

    it("Find all homes with a name home-about", done => {
        Landing.find({ name: "home-about" })
            .then(landings => {
                assert(landings[0]._id.toString() === home._id.toString());
                done();
            });
    });

    it("Find s home with a particular id", done => {
        Landing.findOne({ _id: home._id })
            .then(landing => {
                assert(landing.name === "home-about");
                done();
            });
    });
});