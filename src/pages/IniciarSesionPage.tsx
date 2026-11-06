import PantallaEnConstruccion from "../components/PantallaEnConstruccion";

export default function IniciarSesionPage() {
  return <PantallaEnConstruccion titulo="Iniciar sesión" sprint={1} volverA={{ to: "/", texto: "Volver a Bienvenida" }} />;
}
