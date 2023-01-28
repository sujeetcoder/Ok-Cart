const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);


const connectDb=async()=>{
    return  mongoose.connect( process.env.DB_URL, {dbName: 'OkCart'}, {useNewUrlParser: true, useUnifiedTopology: true}, async(req,res) =>{
          try {
              console.log("success")
          } catch (err) {
              console.log(err)
          }
    })
  }


  module.exports = connectDb