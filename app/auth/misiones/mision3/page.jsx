import Map from "@/components/Map/Map.jsx";
let lat="-36.753029590670465" 
let lng="-73.18544740801048"

export default function misionUno(){
    return(
        <div>
            <h1>MISION 3</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique eveniet mollitia amet architecto quos esse et unde voluptates porro? Optio earum corporis ad quos dolorem impedit libero ipsa asperiores?</p>
            <Map 
                lat={lat}
                lng={lng}
            />
        </div>
    );
}