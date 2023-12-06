'use client';
import { useState,useEffect } from "react";


export default function GetUserGPS(){

    const[location,setLocation] = useState(null);
    const [error, setError] = useState(null);
    const getLocationGPS = () => {
        
        if(navigator.geolocation){
            let coordenadas = {}
            navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
                coordenadas = {
                    lat: latitude,
                    lng: longitude
                };
                console.log(coordenadas)
                //const{lat,lng} = position.coords;
                //setLocation({lat,lng});
                
            }, (error)=>{
                setError(error.message);
            })
        }else{
            setError('Geolocalización no soportada');
        };
    }
/*
    useEffect(() => {
        getLocationGPS();
      }, []);
*/
    return(
        <div>
            <button onClick={getLocationGPS}>
            Mostrar ubicación
            </button>
            {error?(
                <p>Error al obtener la ubicación:{error}</p>
            ):location? (
                <p>Latitud: {lat}, Longitud: {lng}</p>
            ):(
                <p>Cargando ubicación...</p>
            )
            }
        </div>
    );

}