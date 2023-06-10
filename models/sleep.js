const mongoose = require('mongoose');

const sleepSchema = mongoose.Schema({
    date : {
        type : String,
        required : true,
        unique : true,
    },
    sleeping_time : {
        type : String,
        required : true
    },
    waking_time : {
        type : String,
        required : true,
    },
    total_sleep : {
        type : String,
        required : true,
    }
})

const Sleep = mongoose.model("Sleep", sleepSchema);

module.exports = Sleep;