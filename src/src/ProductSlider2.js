import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import img1 from './img/lazz.jpg';
import img2 from './img/Lorenzo.jpg';
import img3 from './img/fara.jpg';
import img4 from './img/portaorenzo.jpg';
import img5 from './img/rocca.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLuoghi from "./ProductLuoghi";

const ProductSlider2 = () =>{
    return(
<div className="container">
<Swiper
freeMode={true}
grabCursor={true}
modules={[FreeMode]}
className="mySwiper"
breakpoints={{
    0:{
        slidesPerView:1,
        spaceBetween:20,
    },
    540:{
        slidesPerView:2,
        spaceBetween:20,
    },
    990:{
        slidesPerView:3,
        spaceBetween:20,
    },
    1200:{
        slidesPerView:4,
        spaceBetween:20,
    },
}}

>
    <SwiperSlide>
   <ProductLuoghi data={{id: "pp",imgSrc: img1, title: 'Lazzaretto', desc: 'Fu costruito tra il 1504 e il 1581, Ospitò un gran numero di appestati durante la Peste del 1630. è ancora intatto e visibile nella città bassa di Bergamo, in quartiere Monterosso. Oggi viene utilizzato per eventi e concerti. '}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductLuoghi data={{id: "ppp",imgSrc: img2, title: 'Chiesa S.Lorenzo', desc: 'Chiesa del 1500, situata nella città alta di Bergamo che presenta al suo esterno un affresco dipinto da Emilio Nembrini a ricordo della peste del 1630, al suo interno è presente anche una cappella dedicata ai morti del contagio'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductLuoghi data={{id: "pppp",imgSrc: img3, title: 'Fara', desc: 'A causa dei numerosi morti di peste, si decise di non seppellire più i cadaveri nelle chiese, ma gli abitanti cominciarono a gettarli nei "fopponi", vallate che separavano la città alta da quella bassa. uno di questi fopponi si trovava dove oggi sorge la fara'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductLuoghi data={{id: "ppppp",imgSrc: img4, title: 'Porta S.Lorenzo', desc: 'Una delle quattro porte di Bergamo, si trova vicino alla Fara e al suo interno si trova l`iscrizione a ringraziamento da parte della città e dei suoi abitanti del capitano Zen'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductLuoghi data={{id: "pppppp",imgSrc: img5, title: 'Rocca', desc: 'Costruita nel XIV secolo e situata all`interno di città alta, la rocca era il luogo dove venivano portate le chiavi delle porte di Bergamo durante la Peste, quando era in vigore il coprifuoco'}}/>
    </SwiperSlide>

</Swiper>

</div>
    );
}
export default ProductSlider2;