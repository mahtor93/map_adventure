'use client';
//la funcion debe llamarse "Mapa" porque así está importada
import React, { useContext } from 'react';
import "@/public/leaflet/leaflet.css";
import Script from 'next/script';
import { misionContext } from '@/app/auth/misiones/mision1/page';

//centro del mapa
let a = -36.78137289642085;
let b = -73.19290645917967;
let widthIcon;
let heightIcon;


export default function Map(props){
    const {lat,lng,zone,misionIcon} = props

    const coordenadas = useContext(misionContext);

    console.log(coordenadas);

    if(misionIcon){
        //configura el tamaño del ícono a un cuadrado nxn
        widthIcon = 35
        heightIcon = 35
    }else{
        widthIcon = 25
        heightIcon = 41
    }


    return(
        <div>
            <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""
            
            onReady={()=>{
                let map = L.map("map").setView([a,b], 13);
                L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
                
                let icon = L.icon({
                    iconUrl: `https://github.com/mahtor93/map_adventure/blob/dev_mario/public/leaflet/images/${misionIcon?misionIcon:"marker-icon.png"}?raw=true`, //marker-icon.png por defecto ${icon?"mision-icon":"marker-icon.png"}
                    shadowUrl: "https://github.com/mahtor93/map_adventure/blob/dev_mario/public/leaflet/images/marker-shadow.png?raw=true",
                    iconSize:[widthIcon,heightIcon],
                    iconAnchor:[12,41],
                    popupAnchor:[1,-34],
                    tooltipAnchor:[16,-28]
                });

                if(lat!=null&&lng!=null&&zone==null){
                    let marker = L.marker([lat,lng],{icon:icon}).addTo(map);
                }

                if(zone){
                    //si el mapa tiene una zona, se genera un marcador en el centro de la zona con su respectivo ícono
                    let sumX=0;
                    let sumY=0;
                    for(let i =0; i<zone.length;i++){
                        sumX += zone[i][0]
                        sumY += zone[i][1]
                    }
                    const medX = sumX/zone.length
                    const medY = sumY/zone.length
            
                    let marker = L.marker([medX,medY],{icon:icon}).addTo(map);

                    let polygon = L.polygon(
                    zone
                    ).addTo(map);
                }
                

                    if(coordenadas){
                        console.log("Coordenadas en el Mapa:")
                        console.log(coordenadas);
                        let map = mapRef.current.leafletElement;
                        let newLatLng = new L.latLng(coordenadas.lat, coordenadas.lng);
                        map.setView(newLatLng, map.getZoom());
            
                        let userIcon = L.icon({
                            iconUrl: `https://github.com/mahtor93/map_adventure/blob/dev_mario/public/leaflet/images/battle.png?raw=true`, //marker-icon.png por defecto ${icon?"mision-icon":"marker-icon.png"}
                            shadowUrl: "https://github.com/mahtor93/map_adventure/blob/dev_mario/public/leaflet/images/marker-shadow.png?raw=true",
                            iconSize:[widthIcon,heightIcon],
                            iconAnchor:[12,41],
                            popupAnchor:[1,-34],
                            tooltipAnchor:[16,-28]
                        });
            
                        let userMarker = L.marker([coordenadas.lat,coordenadas.lng],{icon:userIcon}).addTo(map);
                    }
                

            }}

            />
            <div  id="map">
                <style jsx>{`
                    #map{
                        height:800px;
                        width:80%;
                        border-radius:30px;
                    }
                `}</style>
            </div>
        </div>
    )
}