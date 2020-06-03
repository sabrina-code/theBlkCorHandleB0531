const assert = require("assert");
const Landing = require("../backend/landingModel");

describe("deleting a landing info", () => {

    let landing;
    beforeEach(done => {
        landing = new Landing({ name: "home-about" });
        landing.save()
            .then(() => done());
    });

    it("model instance -deleteOne", done => {
        landing.deleteOne()
            .then(() => Landing.findOne({ name: "home-about" }))
            .then(landing => {
                assert(landing === null);
                done();
            });
    });

    it("class method - deleteOne", done => {
        Landing.deleteOne({ name: "home-about" }) //remove() is deprecated
            .then(() => Landing.findOne({ name: "home-about" }))
            .then(landing => {
                assert(landing === null);
                done();
            });
    });

    //first one that matches will be removed
    it("class method  - fineOneAndRemove", done => {
        Landing.findOneAndRemove({ name: "home-about" })
            .then(() => Landing.findOne({ name: "home-about" }))
            .then(landing => {
                assert(landing === null);
                done();
            });
    });

    it("class method  - fineIdAndRemove", done => {
        Landing.findByIdAndRemove(landing._id)
            .then(() => Landing.findOne({ name: "home-about" }))
            .then(landing => {
                assert(landing === null);
                done();
            });
    });
});