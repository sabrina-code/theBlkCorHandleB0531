const assert = require("assert");
const Landing = require("../backend/landingModel");

describe("update records", () => {
    let landing;

    beforeEach(done => {
        landing = new Landing({ name: "home-about" });
        landing.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => Landing.find({}))
            .then(landings => {
                assert(landings.length === 1);
                assert(landings[0].name === "campus-about");
                done();
            });
    }

    it("model instance - using set and save", done => {
        landing.set("name", "campus-about");
        assertName(landing.save(), done);
    });

    it("model instance - update", done => {
        assertName(landing.update({ name: "campus-about" }), done);
    });

    it("model class - update one record", done => {
        assertName(
            Landing.update({ name: "home-about" }, { name: "campus-about" }), done
        );
    });

    it("model class - update 1 record - findOneAndUpdate", done => {
        assertName(
            Landing.findOneAndUpdate({ name: "home-about" }, { name: "campus-about" }), done
        );
    });

    it("model class - update 1 record - findByIdAndUpdate", done => {
        assertName(
            Landing.findByIdAndUpdate(landing._id, { name: "campus-about" }), done
        );
    });
});
