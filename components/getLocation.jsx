'use client';
import { useState,useEffect } from "react";


export default function GetUserGPS(){

    const[location,setLocation] = useState(null);
    const [error, setError] = useState(null);
    const getLocationGPS = () => {
        if (navigator.geolocation) {
          const watchId = navigator.geolocation.watchPosition(
            (position) => {
              const { lat, lng } = position.coords;
              setLocation({ lat, lng });
              console.log(lat, lng);
            },
            (error) => {
              setError(error.message);
            });
          return watchId;
        } else {
          setError('Geolocalización no soportada');
        }
      };
    useEffect(() => {
        getLocationGPS();
      }, []);

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