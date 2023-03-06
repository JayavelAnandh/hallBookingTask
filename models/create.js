import mongoose from "mongoose";
    
const createSchema = new mongoose.Schema({
    
        roomName:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        seatsAvail:{
            type:Number,
            required:true,
        },
        amenities:{
            type:Array,
            required:true,
        },
        pricePerHour:{
            type:Number,
            required:true
        },
        bookedStatus:{
            type:Boolean
        }

    
})

const CreateSchema =  mongoose.model("create",createSchema)
export {CreateSchema}

