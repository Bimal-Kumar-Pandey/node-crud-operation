const mongoose= require("mongoose");
 mongoose.connect("mongodb://localhost/appnacode").then(()=>{console.log("db connected")})

 const userShema =  mongoose.Schema ({
    name : String,
    email : String,
    age : Number
 });

  module.exports =  mongoose.model("user" , userShema);