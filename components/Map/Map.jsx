'use client';
//la funcion debe llamarse "Mapa" porque así está importada
import React from 'react';
import "@/public/leaflet/leaflet.css";
import Script from 'next/script';

let a = -36.78137289642085;
let b = -73.19290645917967;


export default function Map(props){
    const {lat,lng,zone} = props
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
                    iconUrl: "@/public/leaflet/images/marker-icon.png", //marker-icon.png por defecto ${icon?"mision-icon":"marker-icon.png"}
                    shadowUrl: "@/public/leaflet/images/marker-shadow.png",
                    iconSize:[25,41],
                    iconAnchor:[12,41],
                    popupAnchor:[1,-34],
                    tooltipAnchor:[16,-28],
                });

                if(lat!=null&&lng!=null){
                    let marker = L.marker([lat,lng],{icon:icon}).addTo(map);
                }

                if(zone){
                    let polygon = L.polygon(
                    zone
                    ).addTo(map);
                }
                



            }}

            />
            <div id="map">
                <style jsx>{`
                    #map{
                        height:800px;
                        width:100%;
                    }
                `}</style>
            </div>
        </div>
    )
}