import express from 'express'
import Node from './Data/node.js'
import Edges from './Data/edge.js'

const app = express();

app.get('/nodes',(req,res)=>{
    res.send(Node)
})
app.get('/edges',(req,res)=>{
    res.send(Edges)
})

app.listen(3001,()=>{
    console.log("server is listening");
})