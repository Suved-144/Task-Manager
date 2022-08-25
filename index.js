
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const {connectDB}= require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        //console.log("Connected to DB...!")
        app.listen(process.env.PORT,()=>{
            console.log(`App is running in port ${process.env.PORT}....`)
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

start()