const express = require('express');
const { addSleep, getAllSleep, getSleep, updateSleep } = require('../controllers/sleep')
const router = express.Router();

router.post("/add", addSleep);
router.get("/", getSleep);
router.get("/all", getAllSleep);
router.patch("/update", updateSleep);



module.exports = router;