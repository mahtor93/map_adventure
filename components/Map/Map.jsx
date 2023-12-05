'use client';
//la funcion debe llamarse "Mapa" porque así está importada
import React from 'react';
import "../../public/leaflet/leaflet.css";
import Script from 'next/script';

let a = -36.78137289642085;
let b = -73.19290645917967;
export default function Map(){
    return(
        <div>
            <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""
            onReady={()=>{
                let map = L.map("map").setView([a,b], 16);
                L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
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