import Link from 'next/link';
import "../../../public/leaflet/leaflet.css";
export const metadata={
    title:"Mapa Aventuras | Misiones",
    decription: "listado de misiones"
}
export default function misionesLayout({children}){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link rel="preload" href="/auth/misiones/mision1" as="script">Mision 1</Link>
                </li>

                <li>
                    <Link rel="preload" href="/auth/misiones/mision2" as="script">Mision 2</Link>
                </li>
                
                <li>
                    <Link rel="preload" href="/auth/misiones/mision3" as="script">Mision 3</Link>
                </li>

                <li>
                    <Link rel="preload" href="/auth/misiones/mision4" as="script">Mision 4</Link>
                </li>
            </ul>
        </nav>
            {children}
        </>
    );
}