import Link from 'next/link'; //sólo carga la parte del componente necesaria. No toda la página

export const metadata = {
  title: 'Mapa Aventuras',
  description: 'Aventuras Tralkaweñu',
}

export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>
        
        <nav>
          <h1>MapAventuras</h1>
          <ul>
            <li>
              <Link href="/auth">Mi espacio</Link>
            </li>
            <li>
              <Link href="/auth/misiones">Misiones</Link>
            </li>
            <li>
            <Link href="/">Salir</Link>
            </li>
          </ul>
        </nav>


        {children}
        
        </body>
    </html>
  )
}
