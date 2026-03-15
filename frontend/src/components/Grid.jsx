import { useState,useEffect } from "react";
import GridCell from "./GridCell.jsx";

const terrain=[
 ["R",".",".","X","."],
 [".","X",".",".","."],
 [".",".","S",".","."],
 [".",".",".",".","."],
 [".",".",".",".","."]
];

function Grid({path,visited,speed}){

 const [step,setStep]=useState(0);
 const [visitStep,setVisitStep]=useState(0);

 useEffect(()=>{

  if(visited.length===0) return;

  setVisitStep(0);

  const explore=setInterval(()=>{

   setVisitStep(prev=>{

    if(prev>=visited.length){
     clearInterval(explore);
     return prev;
    }

    return prev+1;

   });

  },150);

  return ()=>clearInterval(explore);

 },[visited]);

 useEffect(()=>{

  if(path.length===0) return;

  setStep(0);

  const move=setInterval(()=>{

   setStep(prev=>{

    if(prev>=path.length-1){
     clearInterval(move);
     return prev;
    }

    return prev+1;

   });

  },speed);

  return ()=>clearInterval(move);

 },[path,speed]);

 const roverPosition=path[step];

 return(

  <div className="grid">

   {terrain.map((row,i)=>

    row.map((cell,j)=>{

     let type=cell;

     if(roverPosition && roverPosition[0]===i && roverPosition[1]===j){
      type="R";
     }

     const isVisited=visited.slice(0,visitStep)
       .some(v=>v[0]===i && v[1]===j);

     const isPath=path.some(p=>p[0]===i && p[1]===j);

     return(

      <GridCell
       key={`${i}-${j}`}
       type={type}
       isVisited={isVisited}
       isPath={isPath}
      />

     );

    })

   )}

  </div>

 );

}

export default Grid;