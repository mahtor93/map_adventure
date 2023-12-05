import Link from "next/link"; //sólo carga la parte del componente necesaria. No toda la página
export default function NavBar() {
  return (
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
  );
}
