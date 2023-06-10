const Sleep = require('../models/sleep');

const addSleep = async (req,res) => {
try {
    const {date, sleeping_time, waking_time, total_sleep} = req.body;
    Sleep.create({
        date : date,
        sleeping_time : sleeping_time,
        waking_time : waking_time,
        total_sleep : total_sleep
    });

    return res.stauts(200).json({success : true, msg : "Record Added"});
} catch (error) {
    res.status(502).json(error);
}
}

const getSleep = async (req,res) => {
    try {
        const { date } = req.body;
        const sleepExists = Sleep.findOne({date : date});
        if(!sleepExists){
            return res.status(502).json({success : false, msg : "no record found"})
        }

        return res.stauts(200).json(sleepExists);
    } catch (error) {
        res.status(502).json(error);
    }
}

const getAllSleep = async (req,res) => {
    try {
        const sleepExists = Sleep.find({});
        if(!sleepExists) {
            return res.status(502).json({success : true, msg : "no record found"});
        }

        return res.stauts(200).json(sleepExists);
    } catch (error) {
        res.status(502).json(error);
    }
}


const updateSleep = async (req,res) => {
    try {
        const {date, sleeping_time, waking_time, total_sleep} = req.body;
        const entryExists = Sleep.findOne({date : date});

        if(!entryExists) {
            return res.status(502).json({success : false, msg : "no record found"});
        }

        const answer = Sleep.findOneAndUpdate({
            sleeping_time : sleeping_time,
            waking_time : waking_time,
            total_sleep : total_sleep,
        })

        answer.save();

    } catch (error) {
        res.status(502).json(error);
    }
}



module.exports = {
    addSleep,
    getSleep,
    getAllSleep,
    updateSleep
}