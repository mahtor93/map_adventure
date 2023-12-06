'use client';
import { useState } from "react";


export default function GetUserGPS(){

    const[location,setLocation] = useState(null);
    const getLocationGPS = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const{lat,lng} = position.coords;
                setLocation({lat,lng});
            }, (error)=>{
                console.error('No se pudo obtener la ubicación', error);
            })
        }else{
            console.error('Geolocalización no soportada');
        };
    }

    return(
        <div>
            <button onClick={getLocationGPS}>
            Mostrar ubicación
            </button>
            {location && (
                <p>Latitud: {location.lat}, Longitud: {location.lng}</p>
            )
            }
        </div>
    );

}