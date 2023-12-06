import Map from "@/components/Map/Map.jsx";

let zone = [[-36.77355390537333, -73.16858289080089],[-36.775152350568014, -73.16040751808067],[-36.7768023235514, -73.166351292998],[-36.77652733052047, -73.16965577435998]]

export default function misionUno(){
    return(
        <div>
            <h1>MISION 4</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique eveniet mollitia amet architecto quos esse et unde voluptates porro? Optio earum corporis ad quos dolorem impedit libero ipsa asperiores?</p>
            <Map zone={zone} />
        </div>
    );
}