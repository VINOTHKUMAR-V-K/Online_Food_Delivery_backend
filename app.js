const express= require("express");
const app= express();
const mongoose= require("mongoose")
const port=5000;
const CORS= require("cors");
app.use(CORS())

mongoose.connect("mongodb+srv://vinoth:vinoth12345@cluster0.9yg5ymb.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
 .then(()=>{
    console.log(`connected to database`);
 })
 .catch(()=>{
    console.log(`error to connection...`);
 })
 
app.use(express.json());
const router= require("./router/router")
app.use("/zomoto",router);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
