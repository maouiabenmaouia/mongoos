const mongoose = require("mongoose");
const personShema = new mongoose.Schema({
name : String,
age : {type : Number , required : true}

})

const person = mongoose.model("person" , personShema)
module.exports = person