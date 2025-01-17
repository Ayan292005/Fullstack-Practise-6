import { Schema,model } from "mongoose";


let Model1=new Schema({
    desc:String,
    image:String,
    name:String,
    job:String
})

export const furnitureModel=model("furniture",Model1)