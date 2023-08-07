const express = require("express")
const bodyPhaser = require("body-parser")
const cors = require("cors")

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

//for checking API end point
app.get("/test",(req,res)=>{
    res.send("Test OK from Server!"); 
})

app.listen(PORT,()=>{
    console.log("Server running on port " + PORT)
})