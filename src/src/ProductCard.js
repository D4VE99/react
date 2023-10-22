import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
const ProductCard= props =>{
    let {id,imgSrc, title, desc}= props.data;
    
    return(

  <Card className="cardper p-0 overflow-hidden h-100 shadow">
    <div>
<Card.Img className=" overflow-hidden p-0"variant="top" src={imgSrc} style={{minHeight:"400px"}}/>
    </div>
<Card.Body className="text-center">
    
    <Card.Title>{title}</Card.Title>
    <p  id={id} style={{display:"none"}}>{desc}</p>
</Card.Body>
<input type={"button"} style={{border:"none", background:"#355326",color:"#ffffff",height:"35px"}} onClick={function mos(e){
  if(e.target.value==="Vedi"){e.target.value="Nascondi"}else{e.target.value="Vedi"} 
      var b= document.getElementById(id);
      if(b.style.display==="none"){ b.style.display="block";
      b.style.margin="5px";}else{b.style.display="none";
      }
      
    }} variant="success" value={"Vedi"}></input>
    
  </Card>
 
    );
}
export default ProductCard;