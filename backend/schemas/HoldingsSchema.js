 const {Schema} = require("mongoose");


 const HoldingsSchema= new Schema ({
    name: String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
 })

 module.exports={HoldingsSchema};

 //Because using { HoldingSchema } exports it as an object with a property named HoldingSchema,