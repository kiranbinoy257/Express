const express=require("express");
const PORT=3000
// const bodyparser=require("body-parser")
const app=express()


app.use(express.urlencoded());
app.post('/',(req,res)=>{
    console.log(req.body);

    res.send("helloworld")
})





app.listen(PORT,()=>{
    console.log("server started");
})