import img1 from './img/prem.jpg';
import img2 from './img/sanit.jpg';
import img3 from './img/img1.jpg';
function Premessa(){
    

    return(
        
            <div className="prem" id="prem" style={{ paddingTop:"3%"}}>
                <h2 style={{ paddingLeft:"8%",paddingRight:"8%"}}id="intro">Introduzione</h2>
                <p style={{paddingLeft:"8%",paddingRight:"8%", fontFamily:"Arial", fontSize:"18px"}}>Per leggere i vari capitoli dell'introduzione clicca
                su uno dei bottoni. A seconda del titolo riportato sul tasto cliccato verrà mostrato un testo differente. <br/>
                Ogni testo introduce un tema collegato alla peste e che è utile a comprendere meglio il tema descritto nella web app.  </p>
                <div style={{ paddingLeft:"2%",paddingRight:"2%"}}>
                <span className="cas"><button className="prima" style={{fontWeight:"bolder",  backgroundImage:`url(${img1})` , backgroundRepeat:"no-repeat",backgroundAttachment:"initial", backgroundSize:"100% 100%"}} onClick={function c(){
                    var t= document.getElementById("ca1"); t.style.display="flex";
                }}>Premessa storica</button></span>
                <span div className="cas"><button className="seconda" style={{fontWeight:"bolder", backgroundImage:`url(${img2})`,backgroundRepeat:"no-repeat", backgroundAttachment:"initial", backgroundSize:"100% 100%" }}onClick={function c(){
                    var t= document.getElementById("ca2"); t.style.display="flex";
                }}>Sanità nel 1600</button></span>
                <span className="cas"><button className="terza" style={{fontWeight:"bolder", backgroundImage:`url(${img3})` ,backgroundRepeat:"no-repeat", backgroundAttachment:"initial", backgroundSize:"100% 100%"}} onClick={function c(){
                    var t= document.getElementById("ca3"); t.style.display="flex";
                }}>Contagio</button></span>
                </div>
                <div className="ca"id="ca1">
            <p>L’Italia nel 1600 è una penisola nel pieno del suo declino economico: non è ancora uno stato unificato, bensì è composta da tanti piccoli stati, molti dei quali sotto l’influenza della Corona Spagnola che imponeva pesantissime tasse alla popolazione. In pochi anni si trova a dover far fronte a numerosi accadimenti, alcuni dei quali disastrosi, che contribuiranno a farla diventare ancora più debole:

<br/>1.Crollo dell’attività commerciale e dell’economia: nei porti di Genova e di Venezia, a causa dello spostamento dell’asse commerciale verso i paesi protestanti e l’America del nord, cala drasticamente il numero delle navi mercantili in attività. Anche il commercio delle spezie il quale, notoriamente, arricchiva i mercanti veneziani, nel 1500 ebbe un notevole ridimensionamento a causa della scoperta della via per le Indie da parte dei Portoghesi, i quali portavano le spezie direttamente a Lisbona senza l’intermediazione degli Ottomani.

<br/>2.Guerra dei Trent’anni: anche se indirettamente, la Guerra dei Trent’anni rese l’Italia teatro di scontri tra le potenze europee; infatti, la Guerra di successione di Mantova e del Monferrato negli anni 1628-31, Portò Francia, Germania e Spagna a scendere nella penisola con i propri eserciti. Sembra sia stata proprio l’armata dell’impero a portare poi la peste tra la popolazione italiana.

<br/>3.Fuga dalle campagne verso la città: la produzione agricola italiana, essendo molto arretrata e ancora basata su latifondo e mezzadria, si trovò a competere nel mercato con prezzi molto più bassi. La vita da agricoltore, quindi, non riusciva più a sfamare chi lavorava la terra e molte persone si trasferirono nelle grandi città in cerca di un lavoro più redditizio.</p>
<button style={{height:"30px", background:"#c45850", color:"#ffffff",borderRadius:"5px"}}onClick={function c(){
                    var t= document.getElementById("ca1"); t.style.display="none";
                }}>X</button></div>

<div className="ca"id="ca2"> 
            <p style={{transition:"width 2s"}}>In Italia le prime Magistrature per la Salute nascono nel Quadrilatero (Milano-Venezia-Firenze-Genova) prima come istituzioni temporanee, poi stabili; a Venezia, ad esempio, fu costituita stabilmente nel 1486 la Magistratura di Sanità, con l’intento di prevenire il diffondersi di malattie ed epidemie sul suolo della Serenissima. In Europa bisogna aspettare il 1500 per la Francia e il 1600 per l’Inghilterra.
Nel 1452 a Milano c’erano già le liste dei morti e poco più tardi vengono istituiti anche i passaporti sanitari.
Consistente era, in Italia, la collaborazione tra le varie Magistrature della Sanità nella penisola. Esse soprintendevano inoltre le attività di medici e chirurghi, dirigevano i Lazzaretti, si occupavano dell’igiene pubblica e possedevano anche giurisdizione penale per far rispettare le regole. La professione medica del 1600 non è ancora come la consideriamo noi al momento, infatti, è proprio in quegli anni che si gettano le basi del sapere medico odierno.
Le cure che i medici proponevano per le varie malattie erano spesso dei tentativi privi di una spiegazione scientifica, che a volte funzionavano e altre no, a ciò si aggiungeva il fatto che il mestiere del chirurgo era considerato meno importante rispetto a quello del medico e quindi durante la peste divenne molto difficile capire la causa del morbo. Questa infatti venne scoperta solo nel XIX secolo e al tempo erano chiamate peste numerosissime altre malattie come, ad esempio, il tifo.
Il 600 è il secolo che vede la creazione di numerose Accademie per la divulgazione del sapere scientifico e l’inizio dell’osservazione anatomica diretta da parte degli scienziati.
Non deve stupire perciò il fatto che la peste dilagò così velocemente mietendo un assai considerevole numero di vittime, perché non si sapeva né come curarsi né da dove arrivasse o con cosa fosse trasmessa, scoperta che arriverà poi solo nell’800.
</p><button style={{height:"30px", background:"#c45850", color:"#ffffff",borderRadius:"5px"}} onClick={function c(){
                    var t= document.getElementById("ca2"); t.style.display="none";
                }}>X</button></div>

<div className="ca"id="ca3">
            <p>La peste del 1630 fu un’epidemia diffusasi tra il 1629 e il 1633 in Italia. Fu particolarmente importante per le aree settentrionali della penisola: le zone più colpite furono il ducato di Milano, la repubblica di Venezia e il granducato di Toscana. Si stima che il numero di morti a causa del flagello in quegli anni sia stato di circa 1.100.000 persone solo nel nord Italia.
Importante fu il numero delle perdite nella città di Milano (circa 240.000) e Genova che perse due quinti della sua popolazione (55.000). Le cause della propagazione del morbo in quegli anni sono facilmente riconducibili alla carestia del 1628-29 e alla Guerra di Successione del ducato di Mantova e Monferrato che spianarono la strada al contagio.
La scarsità di raccolto e l’arrivo delle milizie francesi e tedesche che saccheggiarono quel poco che rimase portò tutte le persone che vivevano al di fuori delle città a rifugiarsi in città per chiedere riparo, per l’elemosina o per cercare di guadagnare denaro in altro modo. In Francia la peste contagiò la popolazione nel 1628, si pensa che i portatori del morbo siano stati i militi francesi delle zone piemontesi, mentre nelle zone di Milano e Venezia siano stati i Lanzichenecchi radunati dal Sacro Romano Impero, come scrisse Manzoni (Promessi sposi, cap.31, p.1): “La peste che il tribunale della sanità aveva temuto che potesse entrar con le bande alemanne nel milanese, c’era entrata davvero, come è noto; ed è noto parimente che non si fermò qui, ma invase e spopolò una buona parte d’Italia.” Grazie all’aiuto dei cittadini la peste fece molte più vittime; infatti, quando essi venivano contagiati in pochi poi avvisavano le autorità per paura di essere mandati al Lazzaretto, luogo da cui difficilmente si tornava vivi. Nelle grandi città le condizioni sociali peggiorarono ulteriormente a causa dell’aumento del brigantaggio e della scarsa sicurezza al loro interno.
Infatti molte persone approfittarono delle case lasciate vuote da chi veniva portato al Lazzaretto per impossessarsi dei loro averi; per contro ci furono casi in cui la paura di essere derubati era talmente forte che gli abitanti preferivano lasciare in casa dei cadaveri nei letti in modo da scoraggiare i banditi o soldati che volevano saccheggiare l’abitazione.
L’epidemia fu particolarmente virulenta anche nella repubblica di Venezia la quale, solo nella città, contò 14.000 morti nel mese di novembre 1630. Al tempo il territorio della Serenissima si estendeva ad ovest fino alla città di Bergamo che fu uno dei luoghi più colpiti dal flagello.
</p><button style={{height:"30px", background:"#c45850", color:"#ffffff",borderRadius:"5px"}}onClick={function c(){
                    var t= document.getElementById("ca3"); t.style.display="none";
                }}>X</button></div>


            </div>
          
        
    );
}

export default Premessa;