const express = require("express")

const app = express()

app.get("/einfo",(req,res)=>{
    res.send("Hello, World!")
})

app.listen(3333, ()=>{
    console.log("servidor rodando na porta 3333")
})