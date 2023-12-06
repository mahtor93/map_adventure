import Map from "@/components/Map";
import GetUserGPS from "@/components/GetLocation";

export default function misionUno(){
    return(
        <div>
            <h1>MISION 1</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique eveniet mollitia amet architecto quos esse et unde voluptates porro? Optio earum corporis ad quos dolorem impedit libero ipsa asperiores?</p>
            
            <GetUserGPS />
            
            <Map 
                lat="-36.78137289642085" 
                lng="-73.19290645917967" 
                misionIcon={"health.png"}
            />
        </div>
    );
}