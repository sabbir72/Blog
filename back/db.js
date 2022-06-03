const mongoose=require('mongoose')

const connectDatabase = async () =>{
 await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then( console.log("mongodb is connected with server"))
  .catch((err)=>console.log(err))

}

module.exports = connectDatabase