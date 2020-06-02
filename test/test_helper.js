const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before((done) => { //runs once, make sure connection is done before the test
    mongoose.connect("mongodb://localhost/users_test");
    mongoose.connection
        .once("open", () => { done(); }) //connection is successful
        .on("error", error => {
            console.warn("error", error);
        });
});

beforeEach(() => {
    mongoose.connection.collections.landings.drop();
});