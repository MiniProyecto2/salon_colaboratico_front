import PantallaEnConstruccion from "../components/PantallaEnConstruccion";

export default function RegistroPage() {
  return <PantallaEnConstruccion titulo="Elegir método de registro" sprint={1} volverA={{ to: "/", texto: "Volver a Bienvenida" }} />;
}
