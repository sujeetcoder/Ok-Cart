const express=require("express")
const User=require("../models/user.model")


const app=express.Router()



app.post("/signup", async (req, res) => {
    const {email,password} = req.body
    
    try {
        let existing = await User.findOne({email})
        if(existing){
            res.status(404).send("User Existed")
        } else {
            let user = await User.create({
                email,password
            })
            res.send({token: `${user._id}:${email}:okcart:${Date.now()}`})
        }
    } catch (e) {
        res.send(e.message)
    }
})


app.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
try {
    if(user){
        if(user.email===email && user.password===password){
           let newUser = await User.findOneAndUpdate({email},{logStatus:true},{new:true})
           res.cookie("_id", `${user?._id}` ,{httpOnly: true ,maxAge: 86400000,secure:true,sameSite:"none"})
           res.send(newUser)
        } else {
            res.status(404).send("user email or password mismatch")
        }

    } else {
        res.status(404).send(`User with ${email} not found`)
    }
} catch (e) {
    res.send(e.message)
}
})


app.post("/logout/:email", async (req, res) => {
    try {
        const email = req.params.email
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{logStatus:false},{new:true})
            res.cookie("_id", `${existing?._id}` ,{httpOnly: true ,maxAge: 1,secure:true,sameSite:"none"})
            res.send("logout successful")
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})



module.exports=app
