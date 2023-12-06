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
                    <Link href="/auth/misiones/mision1">Mision 1</Link>
                </li>

                <li>
                    <Link href="/auth/misiones/mision2">Mision 2</Link>
                </li>
                
                <li>
                    <Link href="/auth/misiones/mision3">Mision 3</Link>
                </li>

                <li>
                    <Link href="/auth/misiones/mision4">Mision 4</Link>
                </li>
            </ul>
        </nav>
            {children}
        </>
    );
}