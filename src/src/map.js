import React from "react";
import {AiFillEnvironment} from "react-icons/ai";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker, Annotation } from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map= () => {
  return (
    <div style={{paddingBottom:"5%",paddingLeft:"7%",paddingRight:"7%",paddingTop:"2%"}}>
      <ComposableMap height={"400"}projection="geoAzimuthalEqualArea"
  projectionConfig={{
    rotate: [-11.0, -45.5, 0],
    scale: 6500,
  }}>
     <ZoomableGroup
  onMoveStart={({ coordinates, zoom }) => {
    console.log(coordinates, zoom)
  }}
  onMoveEnd={({ coordinates, zoom }) => {
    console.log(coordinates, zoom)
  }}
>
     
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} 
              fill="#DDD"
              stroke="#FFF" />
            ))
          }
        </Geographies>
       
       
      <Annotation id="annot2" style={{display:"none"}}
        subject={[10.711551,45.259579]}
        dx={90}
        dy={30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="start" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
        {"Battaglia tra truppe veneziane e soldati imperiali"}
        </text>
      </Annotation >
      <Annotation id="annot1" style={{display:"none"}}
        subject={[ 9.436621,45.796356 ]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="end" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Primo paese contagiato del territorio bergamasco"}
        </text>
      </Annotation>
      <Annotation id="annot3" style={{display:"none"}}
        subject={[9.662808, 46.696026]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="end" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Luogo da dove scesero in italia le truppe imperiali"}
        </text>
      </Annotation>
      <Annotation id="annot4" style={{display:"none"}}
        subject={[ 8.920356, 44.420480]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="end" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Capitale della Repubblica di Genova"}
        </text>
      </Annotation>
      <Annotation id="annot5" style={{display:"none"}}
        subject={[ 11.246730, 43.787516]}
        dx={90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="start" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Capitale del Granducato di Toscana"}
        </text>
      </Annotation>
      <Annotation id="annot6" style={{display:"none"}}
        subject={[ 12.258212,45.462986]}
        dx={90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="start" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Capitale della Repubblica di Venezia"}
        </text>
      </Annotation>
      <Annotation id="annot7" style={{display:"none"}}
        subject={[ 9.172237,45.470899]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#708090",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text  textAnchor="end" alignmentBaseline="middle" fill="#000" fontSize={10} fontWeight={"bold"}>
          {"Capitale del ducato di Milano"}
        </text>
      </Annotation>



      <Marker coordinates={[ 6.747715, 44.696266 ]} >
        
        <text textAnchor="end" fill="#ffffff" fontSize={10} >
         FRANCIA
        </text>
        
      </Marker>
      <Marker coordinates={[ 10.977451,44.282502 ]} >
        
        <text textAnchor="end" fill="#ffffff" fontSize={10} >
         ITALIA
        </text>
        
      </Marker>
      <Marker coordinates={[ 9.010898,46.390450 ]} >
       
        <text textAnchor="end" fill="#ffffff" fontSize={10} >
         SVIZZERA
        </text>
        
      </Marker>

      <Marker coordinates={[ 8.920356, 44.420480 ]} >
        <circle r={2} fill="#A0CE00" />
        <text textAnchor="end" fill="#000" fontSize={10} >
         Genova
        </text>
        
      </Marker>
      <Marker coordinates={[ 11.246730, 43.787516]} >
        <circle r={2} fill="#A0CE00" />
        <text textAnchor="end" fill="#000" fontSize={10} >
         Firenze
        </text>
        
      </Marker>

        <Marker coordinates={[ 9.662400,45.696564 ]} >
        <circle r={2} fill="#F53" />
        <text textAnchor="end" fill="#000" fontSize={10} >
         Bergamo
        </text>
        
      </Marker>
      
      <Marker coordinates={[ 9.172237,45.470899 ]} >
        <circle r={2} fill="#87CEFA" />
        <text textAnchor="end" fill="#000" fontSize={10} >
          Milano
        </text>
        
      </Marker>
      <Marker coordinates={[ 10.711551,45.259579]} >
        <circle r={1} fill="#A0CE00" />
        <text textAnchor="end" fill="#000" fontSize={8} >
          Villabona
        </text>
      </Marker>
      <Marker coordinates={[  9.436621,45.796356 ]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="" fill="#000" fontSize={8} >
          Foppenico
        </text>
      </Marker>
      <Marker coordinates={[ 9.662808, 46.696026 ]} >
       
        <text textAnchor="middle" fill="#000" fontSize={9} >
         Cantone dei Grigioni
        </text>
      </Marker>
      <Marker coordinates={[12.258212,45.462986 ]} >
        <circle r={2} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={10} >
          Venezia
        </text>
      </Marker>
      <Marker coordinates={[10.214750, 45.533245]} >
        <circle r={2} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={10} >
          Brescia
        </text>
      </Marker>
      <Marker coordinates={[ 9.512511,45.524728  ]} >
        <circle r={1} fill="#87CEFA" />
        <text textAnchor="end" fill="#000" fontSize={8} >
          Cassano
        </text>
      </Marker>
      <Marker coordinates={[  9.730989,45.710822]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={8} >
          Scanzo
        </text>
      </Marker>
      <Marker coordinates={[ 10.776683,45.149682]} >
        <circle r={2} fill="#A0CE00" />
        <text textAnchor="end" fill="#000" fontSize={10} >
          Mantova
        </text>
        
      </Marker>
      <Marker coordinates={[ 9.519159 ,45.607835]} >
        <circle r={1} fill="#87CEFA" />
        <text textAnchor="end" fill="#000" fontSize={8} >
          Trezzo
        </text>
        
      </Marker>
      <Marker coordinates={[9.590852,45.520237]} >
        <circle r={1} fill="#87CEFA" />
        <text textAnchor="start" fill="#000" fontSize={8} >
          Treviglio
        </text>
        
      </Marker>
      <Marker coordinates={[ 9.682255,45.361162]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={8} >
          Crema
        </text>
        
      </Marker>
      <Marker coordinates={[10.094190, 45.997915]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="end" fill="#000" fontSize={8} >
          Vilminore
        </text>
        
      </Marker>
      <Marker coordinates={[10.180445,46.013265]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={8} >
          Val di Scalve
        </text>
        
      </Marker>
      <Marker coordinates={[10.070632,45.812956]} >
        <circle r={1} fill="#F53" />
        <text textAnchor="start" fill="#000" fontSize={8} >
          Lovere
        </text>
        
      </Marker>
     </ZoomableGroup>
      </ComposableMap>

      <button style={{borderRadius:"10px",marginTop:"10px",color:"white", backgroundColor:"rgb(53, 83, 38)",border:"none"}}onClick={function v(){
for(var a=1;a<10;a++){ if(document.getElementById("annot"+a).style.display===""){document.getElementById("annot"+a).style.display="none";}
 else{document.getElementById("annot"+a).style.display="";} }
      }}>annotazioni</button>&nbsp;&nbsp;
      
      <AiFillEnvironment  color="#F53"/><a>Terre di Venezia &nbsp;&nbsp;</a>
      <AiFillEnvironment   color="#87CEFA"/><a>Terre di Milano &nbsp;&nbsp;</a>
      <AiFillEnvironment   color="#A0CE00"/><a>Altri</a>
    </div>
  );
};


export default Map