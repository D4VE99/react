
import React from "react";
import "./App.css";
import timelineElements from "./timelineElements";
import { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";

import "react-vertical-timeline-component/style.min.css";

import ProductSlider from "./ProductSlider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Premessa from "./Premessa";
import Graph from "./Graph";
import Footer from "./Fot";
import Map from "./map";
import ProductSlider2 from "./ProductSlider2";

function App(){
  useEffect(()=>{
    var k=3;while(k<30){var v=document.getElementById("elin"+k); v.style.display="none";k++;}
    }, [])
  return<body >
<Navbar/>
<div>
<h1 style={{ paddingLeft:"8%",paddingTop:"150px"}}>La grande epidemia di peste del 1630</h1>
<h3 className="sottot" style={{textAlign:"left", paddingTop:"10px", fontStyle:"italic",fontWeight:"400",paddingLeft:"8%",paddingRight:"8%"}}>Storie ed eventi del territorio bergamasco narrati attraverso un prodotto multimediale</h3>
<p id="q01"style={{background:" #f9f2ea"}}></p>
<Premessa/>
</div>


  <div id="linte"style={{marginBottom:"0",paddingTop:"3%"}}>
  
   

    

    <h2  style={{ paddingLeft:"8%",paddingRight:"8%"}} >Linea del tempo</h2>
    <p style={{width:"100%",  fontFamily:"Arial", fontSize:"18px", textAlign:"left",paddingLeft:"8%",paddingRight:"8%"}}>Linea del tempo che racconta degli eventi principali nel territorio bergamasco dall'inizio della carestia alla fine dell'epidemia di peste. 
                 clicca sul tasto "espandi" per visualizzare tutti i vari punti della linea e utilizza il tasto "leggi di più" per leggere tutto il testo riguardante un particolare evento.</p>
  <VerticalTimeline  >
    {
timelineElements.map(element =>{
 
return(
 
  <VerticalTimelineElement
  id={"elin"+element.id}
  key={element.key}
  date={element.date}
  dateClassName="date"
  className="vertical-timeline-element--work"
  >
  
  <p className="vertical-timeline-element-description" id={element.id+"k"} style={{display:"block"}}>
    {element.description}
  </p>
  <p  className="vertical-timeline-element-description1" id={element.id} style={{display:"none"}}>
  {element.description1}
  </p>
  
  <input type="button" className="vertical-timeline-element-button" value={"leggi di più"} style={{color:"#ffffff",background:"#355326", borderRadius:"5px", border:"0px", padding:"3px",paddingLeft:"13px",paddingRight:"13px", marginTop:"10px"}}onClick={function cli(e){
   if(e.target.value==="leggi di più"){e.target.value="chiudi"}else{e.target.value="leggi di più"}
   var a=element.id;
    var t=element.id+"k";
    var elemento1=document.getElementById(a);
    var elemento2=document.getElementById(t);

    if(elemento2.style.display==="block"){elemento2.style.display="none";elemento1.style.display="block";}
    else{elemento2.style.display="block";elemento1.style.display="none";}
  
 
  
  }}/>
  </VerticalTimelineElement>
  
)
})

    }
  </VerticalTimeline>
  
  <div style={{width:"100%",textAlign:"center"}}><input id="mut" type="button"value="espandi" style={{color:"#ffffff",background:"#355326", borderRadius:"5px", border:"0px", padding:"7px",paddingLeft:"23px",paddingRight:"23px", marginTop:"10px", fontSize:"20px"}} onClick={
    function ff(){
var n=document.getElementById("mut");
if(n.value==="chiudi"){n.value="espandi";for(var a=3;a<25;a++){var b=document.getElementById("elin"+a); b.style.display="none";}}
else{n.value="chiudi";for(a=3;a<25;a++){b=document.getElementById("elin"+a); b.style.display="block";}}
  

    }
  }/></div>
 
  </div >
  
  <div id="persl" className="persl" style={{marginTop:"0",paddingTop:"3%"}}>
 
    <h2 id="perlu" style={{ paddingLeft:"8%",paddingRight:"8%"}}>Personaggi</h2>
    <p style={{width:"100%",  fontFamily:"Arial", fontSize:"18px", textAlign:"left",paddingLeft:"8%",paddingRight:"8%"}}>Sezione riguardante i personaggi importanti della peste a Bergamo, in particolare vengono presentati il capitano della città Zen, colui che scrisse la storia della peste a bergamo Ghirardelli, un nobile bergamasco che si adoperò per difendere i confini dal contagio, il capitano della città precedente a Zen e un mercante Bergamasco che aiutò la città nel momento del bisogno. <br/>
    Per osservare tutti i personaggi scorri verso sinistra le immagini</p>
  <ProductSlider />
  </div >
  
  <div id="persl1"  style={{paddingTop:"3%"}}>

    <h2 id="perlu" style={{ marginTop:"0px",paddingLeft:"8%",paddingRight:"8%"}}>Luoghi</h2>
  <p style={{width:"100%", fontFamily:"Arial", fontSize:"18px", textAlign:"left",paddingLeft:"8%",paddingRight:"8%"}}>Sezione i luoghi della peste a Bergamo di cui si parla in questo prodotto multimediale, sono tutti luoghi esistenti ancora oggi e quindi visitabili, in totale sono cinque e si trovano all'interno della città. Stiamo parlando della Fara, del Lazzaretto, della Rocca, della chiesa di S.Lorenzo e della porta S.Lorenzo.<br/> Per osservare tutti i luoghi scorri verso sinistra le immagini </p>
  <ProductSlider2/></div>
 
  <div id="mapper" style={{paddingTop:"3%"}}>
  
    <h2 style={{ marginTop:"0px",paddingLeft:"8%",paddingRight:"8%"}}>Mappa</h2>
    <p style={{width:"100%", fontFamily:"Arial", fontSize:"18px", textAlign:"left",paddingLeft:"8%",paddingRight:"8%"}}>Mappa in cui ci sono segnati i vari posti di cui ho parlato nell'introduzione o nella Timeline; inserita assieme ad alcune note, visibili cliccando sul tasto "annotazioni", per rendere meglio l'idea dei luoghi dei quali si parla nell'elaborato. La legenda situata in basso a sinistra spiega come devono essere interpretati i colori che si trovano nella cartina. </p>
  <Map/>
  </div>
  
  <div >
 
  <Graph/>
  </div>
  
  
  
  <Footer/>
  </body>;
}

export default App;
