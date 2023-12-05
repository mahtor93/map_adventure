import NavBar from "../components/navbar";

export const metadata = {
  title: 'Mapa Aventuras',
  description: 'Aventuras Tralkaweñu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}