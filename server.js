const express = require("express");
require ('dotenv').config();
const connectDB = require("./src/connectDB")
const Person = require("./menu/person")

const app = express();
connectDB();

const person = new Person({
    name: "Charlie",
    age:40,
    Foods: ['Pizza', 'Burger']
    
})

person.save().then(()=>console.log(person)).catch((err)=>console.log(err))
const PORT = process.env.PORT

app.listen(PORT,(err)=> {
    err? console.log(err) : console.log(`server is running on port ${PORT}`)
    
})
const findperson = async()=> {
    try {
        const  result = await  person.find({age:{$gte:30}})
        console.log(result)
    }
    catch (error){
        console.log(error)
    }
}
findperson;
const findByName =async()=>{
    try {
        let personName = "Charlie"
        const result = await person.findOne({name:personName})
        console.log("result")
    }catch(error) {
    console.log(error)
}
}
findByName()
