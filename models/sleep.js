const mongoose = require('mongoose');

const sleepSchema = mongoose.Schema({
    date : {
        type : Number,
        required : true,
        unique : true,
    },
    sleeping_time : {
        type : Number,
        required : true
    },
    waking_time : {
        type : Number,
        required : true,
    },
    total_sleep : {
        type : String,
        required : true,
    }
})

const Sleep = mongoose.model("Sleep", sleepSchema);

module.exports = Sleep;