import React from "react";
import "./App.css";
import {Pie, PieChart, Line, LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Legend} from "recharts"; 
const data=[
    {name:"morti", value:9533, fill:"#7eba60" },
    {name:"sopravvissuti", value:15467, fill:"#355326"},
    
  
]
const data01=[
    { name:"morti", value:50000, fill:"#7eba60",label:"morti" },
    {name:"sopravvissuti", value:100000, fill:"#355326"},
  
]
const data02=[
    { name:"morti", value:16368, fill:"#7eba60",label:"morti" },
    {name:"sopravvissuti", value:1086302, fill:"#355326"},
  
]
const data03=[
    { name:"set 1628",  miglio:60,frumento:80 },
    {name:"ott 1628",  miglio:67,frumento:100},
    {name:"nov 1628", miglio:67, frumento:110},
    {name:"gen 1629",  miglio:70, frumento:100},
    {name:"mar 1629", miglio:70, frumento: 130},
    {name:"giu 1629", miglio:100, frumento:145}
  
]


const Graph=()=>{
    
    return(
        <div className="grafici" id="grafo" style={{paddingTop:"3%"}}>
            <h2  style={{paddingLeft:"8%", paddingRight:"8%"}}>Epidemia in numeri</h2>
            <p style={{width:"100%",  fontFamily:"Arial", fontSize:"18px", textAlign:"left",paddingLeft:"8%",paddingRight:"8%"}}>In questa sezione sono inseriti i dati più interessanti che si possono trovare riguardo gli anni della peste a Bergamo, I primi tre grafici mostrano che percentuale di abitanti è deceduta durante il contagio, facendo anche un confronto con il covid. L'ultimo grafico è inserito per rendere l'idea di quanto fosse stata dura la carestia degli anni 1628-29.</p>
            <span>
            <h3>Peste città di Bergamo</h3>
       <PieChart className="pie" width={400} height={310}>
            <Pie data={data} dataKey="value" fill={data.fill} stroke="lightgrey" label></Pie>
            <Tooltip/>
           <Legend/>
            </PieChart>
            </span>
           <span> <h3>Peste provincia di Bergamo</h3>
            <PieChart className="pie" width={400} height={310}>
            <Pie data={data01} dataKey="value" stroke="lightgrey" label></Pie>
            <Tooltip/>
           <Legend/>
            </PieChart></span> 
          <span> <h3>Covid provincia di Bergamo</h3>
            <PieChart className="pie" data={data} width={400} height={310}>
            <Pie data={data02} dataKey="value" stroke="lightgrey" label></Pie>
            <Tooltip/>
           <Legend/>
            </PieChart></span> 
            <p style={{paddingLeft:"8%", paddingRight:"8%", fontFamily:"Arial", fontSize:"18px",textAlign:"left"}}>L'anno della peste a Bergamo, come racconta B. Belotti nel suo libro, fece  9533 morti, che su una popolazione di 25.000 abitanti si tratta del 38% delle persone.
                Nel territorio in percentuale le morti furono meno, nonostante siano ancora numeri elevatissimi, infatti si contano circa 50000 morti su una provincia di 150000 abitanti, quindi 1/3 delle persone morì.
                Ho voluto mettere nell'ultimo grafico il numero di decessi dell'anno 2020: il momento peggiore della pandemia di Covid-19 nella provincia di Bergamo per quanto riguarda le morti, per mostrare in prospettiva quanto fu effettivamente disastrosa la Peste. 
                Nella provincia di Bergamo i morti totali nell'anno 2020 furono circa lo 1,4% della popolazione. </p>
           
            
            
          <br/><a id="linegra"style={{display:"none", color:"red"}}>allarga la pagina per vedere il grafico</a> <h3>Andamento del prezzo per 1 soma di frumento e miglio settembre 1628-giugno 1629</h3>
      <span id="linegr" style={{padding:"0 0%"}}>
      <LineChart width={1000} height={300} data={data03} >
       <Line  type="monotone" dataKey="frumento" stroke="orange" strokeWidth={4} ></Line>
       <Line  type="monotone" dataKey="miglio" stroke="red" strokeWidth={4} ></Line>
            <CartesianGrid strokeDasharray={"3 3"}/>
           <XAxis dataKey="name"/>
           <YAxis dataKey=""/>
           <Tooltip/>
           <Legend/>
            </LineChart></span> 
            <p style={{paddingLeft:"8%", paddingRight:"8%", fontFamily:"Arial", fontSize:"18px",paddingBottom:"30px", marginBottom:"0", textAlign:"left"}}>In questo grafico lineare ho invece inserito i prezzi del miglio e del frumento
            lungo il tempo per rendere l'idea di quanto fu impegnativa la crisi del 1628-29. Si può notare che entrambi raddoppiarono quasi il proprio prezzo, raggiungendo un aumento in percentuale il miglio del 67% e il frumento dell'81%.
            In marzo per il troppo costo dei viveri, le guardie della città abbandonarono Bergamo, perchè la paga non gli permetteva di sopravvivere.
             Dopo giugno 1629 la carestia andò scemando, per lasciare poi luogo alla peste. </p>
        
            
            </div>
            
            
    );
}

export default Graph;