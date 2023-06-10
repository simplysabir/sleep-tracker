const express = require('express');
const app = express();
const PORT = 3000;
const connectToDB = require('./database');
const sleepRoute = require('./routes/sleep');
app.use(express.json());

connectToDB()
    .then(()=>{
    console.log("Database Connected");
    })
    .catch((error)=>{
        console.log(error);
    })

app.use("/sleep", sleepRoute);

app.listen(PORT, ()=>{
    console.log(`Started Listening on Port : ${PORT}`);
})