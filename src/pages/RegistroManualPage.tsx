import PantallaEnConstruccion from "../components/PantallaEnConstruccion";

export default function RegistroManualPage() {
  return <PantallaEnConstruccion titulo="Registro manual" sprint={1} volverA={{ to: "/registro", texto: "Volver" }} />;
}
