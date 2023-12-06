import Map from "@/components/Map/Map.jsx";

export default function misionUno(){
    return(
        <div>
            <h1>MISION 2</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique eveniet mollitia amet architecto quos esse et unde voluptates porro? Optio earum corporis ad quos dolorem impedit libero ipsa asperiores?</p>
            <Map 
                lat="-36.797327968736376" 
                lng="-73.17802865284287" 
                misionIcon={"floppy-disk.png"}
            />
        </div>
    );
}