// DEPENDENCIES
const mongoose = require("mongoose");

// ENV VARIABLE
const { DATABASE_URL, PORT } = process.env;

// CONNECTION
mongoose.connect(DATABASE_URL);

mongoose.connection
.on("error", (error) => {
    console.log(error);
})
.on("open", () => {
    console.log("connected to mongo")
})
.on("close", () => {
    console.log("Disconnected from mongo")
})

// EXPORTS
module.exports = mongoose;