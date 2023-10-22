
import { useRef } from "react";
import {AiFillHome,AiFillPieChart, AiFillDatabase,AiFillIdcard,AiFillBook, AiFillPicture, AiTwotoneEnvironment } from "react-icons/ai";
function Navbar(){
    const navRef=useRef();
    

    return(
        <header>
            <nav id="r"ref={navRef}>
            <a href="/#"><AiFillHome/> Home</a>
                <a href="/#prem"><AiFillBook/> Introduzione</a>
                <a href="/#linte"><AiFillDatabase/> Timeline</a>
                <a href="/#persl"><AiFillIdcard/> Personaggi</a>
                <a href="/#persl1"><AiFillPicture/> Luoghi</a>
                <a href="/#mapper"><AiTwotoneEnvironment/>Mappa</a>
                <a href="/#grafo"><AiFillPieChart/>Grafici</a>
              
            </nav>
            <nav id="f"ref={navRef}>
            <a href="/#"><AiFillHome/> </a>
            <a href="/#mapper"><AiTwotoneEnvironment/></a>
                <a href="/#grafo"><AiFillPieChart/></a>
            <a href="/#persl"><AiFillPicture/></a>
                <a href="/#persl1"><AiFillIdcard/></a>
                <a href="/#linte"><AiFillDatabase/></a>
                <a href="/#prem"><AiFillBook/></a>
               
            </nav>
            
        </header>
    );
}

export default Navbar;