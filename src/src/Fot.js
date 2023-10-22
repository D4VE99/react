import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {AiFillLinkedin, AiFillInstagram,AiFillYoutube,AiFillPhone,AiFillMail } from "react-icons/ai";
export default function Footer() {
  return (
    
        <MDBFooter >
         
    
          <section className=''style={{textAlign:"center",color:"#ffffff",background:"#355326",paddingTop:"20px", marginTop:"0"}}>
            <MDBContainer >
              <MDBRow style={{color:"#ffffff",background:"#355326",}}>
                <MDBCol  style={{color:"#ffffff",background:"#355326",minWidth:"250px"}}>
                  <h6 style={{fontWeight:"bold"}}>
                    
                    INFO UTILI
                  </h6>
                  <p style={{paddingRight:"20px"}}>
                   Prodotto multimediale per la tesi della laurea triennale in Informatica Umanistica all'Università di Pisa sviluppato in React.js da Davide Cogliati matr.620083
                  </p>
                </MDBCol>
    
                <MDBCol style={{color:"#ffffff",background:"#355326",minWidth:"250px"}}>
                  <h6 style={{fontWeight:"bold"}}>PODUCTS USED</h6>
                  <p>
                    <a  >
                      React.js
                    </a>
                  </p>
                  <p>
                    <a  >
                      Bootsrap
                    </a>
                  </p>
                  <p>
                    <a  >
                      Node.js
                    </a>
                  </p>
                  
                </MDBCol>
    
                <MDBCol  style={{color:"#ffffff",background:"#355326",minWidth:"250px"}}>
                  <h6 style={{fontWeight:"bold"}}>SOCIAL</h6>
                  <p>
                    <a href='https://www.linkedin.com/' style={{color:"#ffffff",fontSize:"22px"}}>
                      <AiFillLinkedin/>
                    </a>
                  </p>
                  <p>
                    <a href='https://www.instagram.com/' style={{color:"#ffffff",fontSize:"22px"}}>
                      <AiFillInstagram/>
                    </a>
                  </p>
                  <p>
                    <a href='https://www.youtube.com/' style={{color:"#ffffff",fontSize:"22px"}}>
                      <AiFillYoutube/>
                    </a>
                  </p>
                  
                </MDBCol>
    
                <MDBCol style={{color:"#ffffff",background:"#355326",minWidth:"250px"}}>
                  <h6 style={{fontWeight:"bold"}}>CONTACT</h6>
                  <p>
                    <AiFillMail style={{paddingRight:"5px",fontSize:"25px"}}/>
                    d.cogliati@studenti.unipi.it
                  </p>
                  <p>
                    <AiFillPhone style={{fontSize:"25px"}}/> + 331 340 2791
                  </p>
                  
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div  style={{color:"#ffffff",background:"#355326",textAlign:"center"}}>
            © 2023 
             Università di Pisa
            
          </div>
        </MDBFooter>
      );
    }