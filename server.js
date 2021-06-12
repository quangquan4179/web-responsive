const express = require('express');
const PORT=process.env.PORT||7000;
const app=express();

app.listen(()=>{
  console.log(`server runningon port:${PORT}`);
})