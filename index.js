const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')
const server = express()
server.use(cors({
    origin:"http://localhost:3000"
}))
// to understand json and convert it into js
server.use(express.json())

server.listen(8000,()=>{
    console.log("Used Mobiles server started at port number 8000");
})

// get all mobiles api call
server.get('/get-all-mobiles',(req,res)=>{
    logic.allMobiles().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// get a particular mobile api call
server.get('/get-a-mobiles/:id',(req,res)=>{
    logic.getAMobile(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add mob api call
server.post('/add-mobiles',(req,res)=>{
    logic.addMobile(req.body.id,req.body.mobName,req.body.mobimage,req.body.mobprice,req.body.mobwaranty,req.body.mobcharger,req.body.mobmemory,req.body.mobram)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete a mob api call
server.delete('/delete-mobiles/:id',(req,res)=>{
    logic.deleteMobile(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// update mob details
server.post('/update-mobile',(req,res)=>{
    logic.editMobile(req.body.id,req.body.mobName,req.body.mobimage,req.body.mobprice,req.body.mobwaranty,req.body.mobcharger,req.body.mobmemory,req.body.mobram)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})