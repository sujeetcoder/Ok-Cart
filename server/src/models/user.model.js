const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin","CEO"],default:"user"},
    status:{type:String,enum:["active","ban"],default:"active"},
    logStatus: {type:Boolean, default:false},
},
{
    versionKey: false,
    timestamps: true
})

const User=mongoose.model("user",userSchema)

module.exports=User

