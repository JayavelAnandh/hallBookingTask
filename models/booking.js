import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerName:{
        type:String,
        require:true,
        maxlength:32,
        trim:true
    },
    Date:{
        type:String,
        require:true,
    },
    startTime:{
        type:String,
        require:true
    },
    endTime:{
        type:String,
        require:true
    },
    roomId:{
        type:String,
        require:true
    },
    roomName:{
        type:String,
    },
    bookedStatus:{
        type:Boolean
    }
})

export const BookingSchema = mongoose.model("book",bookingSchema)