
import React, { useEffect, useState } from 'react';
import ReactFlow, { Controls, Background,useNodesState } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './App.css';


let Nodes = []
let Edges = []




function Mindmap() {

  const [nodes,setnodes] = useState([])
  const [edges,setedges] = useState([])
  
  useEffect(()=>{
    async function getnodes(){
      await fetch("/nodes").then(res=>res.json()).then(res=>{
      
        res.map((item)=>{
         if(item.data.value){
           const it = {
             id:item.id,
             position:item.position,
             type:item.type,
             data:{label:(
               <table>
                  <tr className="title">
                  <th >
                  {item.data.label}
              </th>
                  </tr>
             <tr className="name">
             <td >
             {item.data.value}
              </td>
             </tr>      
              
            </table>
             
          )},
           }
           Nodes.push(it)
         }else{
           const it = {
             id:item.id,
             position:item.position,
             type:item.type,
             data:{label:item.data.label
              }
         }
         Nodes.push(it)
         }
       })
       setnodes(Nodes)
     })
    }
    getnodes()
    async function getedges(){
      await fetch("/edges").then(res=>res.json()).then(res=>{
        console.log(res);
        res.map(item=>{
          if(item.label){
            const it = {      
              id:item.id,
              source:item.source,
              target:item.target,
              type:item.type,
              label:item.label,
              animated:item.animated,
          }
          Edges.push(it)
          }else{
            const it = {      
              id:item.id,
              source:item.source,
              target:item.target,
              type:item.type
          }
          Edges.push(it)
          }
          
          
        })
        setedges(Edges)
        console.log(Edges);
      })
    }
    getedges()
    
    
  },[])
  return (
  <div id='container' >
    <ReactFlow nodes={nodes}  
     edges={edges}
    //  fitView
    >
      <Background color="#aaa" gap={16} />
      <Controls />
    </ReactFlow>
  </div>
  );
}

export default Mindmap;
