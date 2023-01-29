require("dotenv").config()
const { config } = require("dotenv");
const express=require("express")
const cors=require("cors");
const connectDb = require("./config/db")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express()
const userRouter= require("./routes/user.route")



app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "https://okcart.netlify.app"],
    credentials: true
}))
app.set("trust proxy", 1)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.use("/users", userRouter)



app.get("/",async(req,res)=>{
    try{
        res.send("Server started successfully")
    }catch(e){
        res.send("Something went wrong")
    }
})

app.listen(process.env.PORT, async () => {
    await connectDb()
    console.log("listening to http://localhost:8080");
})