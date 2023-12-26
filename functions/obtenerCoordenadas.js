"use client";

export default function obtenerGPS() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const coordenadas = {
            lat: latitude,
            lng: longitude,
          };
          resolve(coordenadas);
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject("Geolocalización no soportada");
    }
  });
}