import { Link } from "react-router-dom";
import PantallaEnConstruccion from "../components/PantallaEnConstruccion";

export default function DashboardPage() {
  return (
    <PantallaEnConstruccion titulo="Panel" sprint={2} descripcion="Aquí se verán las salas del estudiante.">
      {/* Enlace temporal para revisar la navegación del Sprint 0 */}
      <Link to="/salas/ejemplo" className="self-start min-h-[44px] inline-flex items-center px-4 rounded-lg bg-primary-container text-on-primary font-label text-sm font-semibold hover:bg-primary">
        Ver Sala de ejemplo
      </Link>
    </PantallaEnConstruccion>
  );
}
