import express from "express"
import { BookingSchema } from "../models/booking.js"
import { CreateSchema } from "../models/create.js"

const router = express.Router()

router.post("/create",async(req,res)=>{
    try {
        const createRoom = await new CreateSchema({
            roomName:req.body.roomName,
            seatsAvail:req.body.seatsAvail,
            amenities:req.body.amenities,
            pricePerHour:req.body.pricePerHour,
            bookedStatus:false
        }).save()
        res.send("Room created successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})

    }
})

router.get("/rooms",async(req,res)=>{
    try {
        const rooms = await CreateSchema.find({})
        res.send(rooms)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})

    }
})

router.post("/book",async(req,res)=>{

    

    try {
        const roomDetails = await CreateSchema.find({_id:req.body.roomId})

        const booking = await new BookingSchema({
            customerName:req.body.customerName,
            Date:req.body.Date,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
            roomId:req.body.roomId,
            roomName:roomDetails[0].roomName,
            bookedStatus:true
        }).save()
        
        const statusEdit = await CreateSchema.updateOne({_id:req.body.roomId},{$set:{bookedStatus:true}})
        res.status(201).send(booking)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})

    }
})

router.get("/booked",async(req,res)=>{
    try {
        const bookedhalls = await BookingSchema.find({})
        res.send(bookedhalls)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})

    }
   
})
const allRoutes = router
export default allRoutes