const mongoose = require("mongoose");

mongoose.set("strictQuery", true)
const connectToDB = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/sleep-tracker")
}

module.exports = connectToDB;