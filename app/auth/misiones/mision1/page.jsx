'use client'
import Map from "@/components/Map";
import GetUserGPS from "@/components/getLocation";
import obtenerGPS from "@/functions/obtenerCoordenadas";
import React, { useState }  from 'react';

export const misionContext = React.createContext();

export default function MisionUno(){
    
  const [coordenadas, setUbicacion] = useState(null);
  
    const handleObtenerGPS = () => {
        obtenerGPS()
          .then((coordenadas) => {
            setUbicacion(coordenadas);
            console.log(coordenadas)
          })
          .catch((error) => {
            console.error("Error al obtener la ubicación:", error);
          });
      };
      
    return(
        <misionContext.Provider value={coordenadas}>
          <div>
              <h1>MISION 1</h1>
              <button onClick={handleObtenerGPS}>Print Coords</button>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique eveniet mollitia amet architecto quos esse et unde voluptates porro? Optio earum corporis ad quos dolorem impedit libero ipsa asperiores?</p>
              <GetUserGPS />
              <Map 
                  lat="-36.78137289642085" 
                  lng="-73.19290645917967" 
                  misionIcon={"health.png"}
              />
          </div>
        </misionContext.Provider>
    );
}