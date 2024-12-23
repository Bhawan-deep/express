const express = require('express')
const app = express()
const port = 3000;
app.listen(port,()=>{
  console.log("page is listened");
  
})
app.get("/bhawan", (req,res)=>{
  console.log("we are on page bhawan");
  res.send("we are on page bhawan")
})
app.get("/Falguni", (req,res)=>{
  console.log("we are on page falguni");
  res.send("we are on page falguni")
})
app.get("*", (req,res)=>{
 
  res.send("this page donot exist")
})
app.get("*=", (req,res)=>{
 
  res.send("this page donot exist")
})
app.get("/milan", (req,res)=>{
 
  res.send("this page milan exist")
})