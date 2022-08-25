const mongoose = require('mongoose')

const TakeSchema = new mongoose.Schema({
    name : {
        type : String,
        required:[true, "must provide a name"],
        trim : true,
        maxlength:[20,'name cant be more 10'],
        minlength:[2,"name can't short than 2"]

    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("tasks",TakeSchema)