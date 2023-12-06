'use client';
import { useState,useEffect } from "react";


export default function GetUserGPS(){

    const[location,setLocation] = useState(null);
    const [error, setError] = useState(null);
    const getLocationGPS = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position);
                const coordenadas ={
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(coordenadas)
                const{lat,lng} = position.coords;
                setLocation({lat,lng});
                
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
                <p>Latitud: {location.lat}, Longitud: {location.lng}</p>
            ):(
                <p>Cargando ubicación...</p>
            )
            }
        </div>
    );

}