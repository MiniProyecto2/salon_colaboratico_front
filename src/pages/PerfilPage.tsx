import PantallaEnConstruccion from "../components/PantallaEnConstruccion";

export default function PerfilPage() {
  return <PantallaEnConstruccion titulo="Mi perfil" sprint={2} volverA={{ to: "/dashboard", texto: "Volver al Panel" }} />;
}
