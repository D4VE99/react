import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import img1 from './img/ghirardelli.jpeg';
import img2 from './img/zeno.jpg';
import img3 from './img/morosini.jpg';
import img4 from './img/Benglio.jpg';
import img5 from './img/Piatti.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "./ProductCard";

const ProductSlider = () =>{
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
   <ProductCard data={{id: "u",imgSrc: img1, title: 'Cancelliere Ghirardelli', desc: 'Fu la persona incaricata dal comune di Bergamo, dopo la peste di scrivere un libro che raccontasse cosa è successo. Nacque nel 1600, figlio di un notaio, studiò legge all’università di Padova dove cominciò anche ad accostarsi alla poesia e alla letteratura, al suo ritorno ottenne il posto di cancelliere al comune di Bergamo. Scrisse numerose opere, ma da cancelliere dovette subito far fronte alla carestia e poi come ufficiale di sanità alla pestilenza, cose che lo tennero lontano dal mestiere di scrittore. Morì a Bergamo il 13 febbraio 1641, le fonti sono discordanti su questa data, alcune dicono sia morto di peste durante il contagio, altre proprio nel 1641. Il suo libro verrà pubblicato postumo solo nel 1681, a quarant’anni dalla sua morte.'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductCard data={{id: "uu",imgSrc: img2, title: 'Capitano Zeno', desc: 'Capitano di origine veneziana che si adoperò con tutte le sue forze per il bene della città di Bergamo e dei suoi cittadini. Nel momento in cui molti dei nobili bergamaschi scappavano per paura del contagio lui fu uno dei pochi a rimanere e coprì per tutta l’emergenza la carica di vice podestà rimanendo l’unico rappresentante del potere civile nella città. Per aiutare i suoi cittadini, durante quella crisi senza eguali, Zen arrivò a dare mille scudi dei suoi e a impegnare l’intera argenteria di famiglia. A testimoniare quanto fece per Bergamo rimane ancora oggi una lapide in porta San Lorenzo che recita: «G[iovanni] A[ntonio] Zeno vigilantissimo nell’anno 1630 ciové l’anno della peste finita. L’anno 1631, lodato sia Dio».'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductCard data={{id: "uuu",imgSrc: img4, title: 'Conte Benaglio', desc: 'Guido Benaglio fu il primo a creare un tentativo di difesa della città contro la peste: alla notizia che il morbo si era manifestato il giorno 20 ottobre 1629 a Chiuso, aumentò la custodia e i controlli su tutti gli sbocchi principali del confine del territorio bergamasco in modo che né persone, né cose, né animali potenzialmente pericolosi fossero ammessi nella provincia di Bergamo. Purtroppo, questi provvedimenti furono inutili dal momento che il morbo si era già diffuso in tutto il territorio milanese e su tutta la frontiera bergamasca, dalla Valle Brembana a Treviglio e Caravaggio. '}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductCard data={{id: "uuuu",imgSrc: img3, title: 'Provveditore Morosini', desc: 'Eletto a ottobre 1628 Capitano della città di Bergamo, ricoprì questo ruolo fino a fine marzo 1630. In questi anni si adoperò molto per difendere la città dalla carestia prima e dalla peste poi. Nel 1630 venne nominato Provveditore straordinario nella città e nel territorio e lasciò il posto di capitano a Zen. La peste arrivò nella sua casa, come scritto da lui stesso, il 23 luglio, prima uccise la servitù e poi anche morosini venne contagiato il giorno 28; nonostante le premure dimostrate dal capitano Zen che per curarlo lo fece addirittura far sistemare in casa propria, morì il primo di agosto.'}}/>
    </SwiperSlide>
    <SwiperSlide>
   <ProductCard data={{id: "uuuuu",imgSrc: img5, title: 'Mercante Piatti', desc: 'Mercante di origini bergamasche che assieme al fratello Venanzio si trasferì a Venezia fondando una grande azienda commerciale con cui intratteneva numerosi traffici con l`Oriente. Durante la carestia del 1628-29 con il consenso del senato fece arrivare a Bergamo trecentocinquanta staia ( una staia a Venezia era circa 83 litri ) di frumento comprate in Turchia, contribuendo a sfamare la popolazione e a far abbassare il prezzo dello stesso per alcune settimane. Nell`immagine la villa che era della famiglia piatti a Gorlago'}}/>
    </SwiperSlide>
   

</Swiper>

</div>
    );
}
export default ProductSlider;