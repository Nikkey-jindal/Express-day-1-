const express = require('express');
const app=express();
app.use((req,res)=>{
  console.log("first node program here i am representing...");
   res.send("Hello from Express!");
})
app.listen(2020,()=>{
  console.log("server started");
})