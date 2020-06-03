const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const Landing = mongoose.model("landing");

describe("landingInfoController", () => {
    it("Post to /api/landing - create a new data", done => {
        Landing.count().then(count => {
            request(app)
                .post("/api/landing")
                .send({ name: "campus-about" }) //to the server
                .end(() => {
                    Landing.count()
                        .then(newCount => {
                            assert(count + 1 === newCount);
                            done();
                        });
                });
        });
    });
});

