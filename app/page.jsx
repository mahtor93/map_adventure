import Link from 'next/link';

export default function homePage(){
    return( 
    <div>
        <h1>Iniciar Sesión</h1>
        <h2>o <Link href="/publico/registro">Registrate</Link></h2>
    </div>
    
    );
};