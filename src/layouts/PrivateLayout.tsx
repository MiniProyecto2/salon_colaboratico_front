import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import PrivateHeader from "../components/PrivateHeader";
import SkipLink from "../components/SkipLink";

// Sprint 1: aquí se protege el acceso (sin sesión → /iniciar-sesion conservando la ruta).
export default function PrivateLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <SkipLink />
      <PrivateHeader />
      <main id="contenido-principal" tabIndex={-1} className="w-full flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
