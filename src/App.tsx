import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import RoomLayout from "./layouts/RoomLayout";
import AccesibilidadPage from "./pages/AccesibilidadPage";
import AyudaPage from "./pages/AyudaPage";
import BienvenidaPage from "./pages/BienvenidaPage";
import DashboardPage from "./pages/DashboardPage";
import DiagnosticoPage from "./pages/DiagnosticoPage";
import IniciarSesionPage from "./pages/IniciarSesionPage";
import NoEncontradaPage from "./pages/NoEncontradaPage";
import NombreDeUsuarioPage from "./pages/NombreDeUsuarioPage";
import PerfilPage from "./pages/PerfilPage";
import RegistroManualPage from "./pages/RegistroManualPage";
import RegistroPage from "./pages/RegistroPage";
import SalaPage from "./pages/SalaPage";

export default function App() {
  return (
    <Routes>
      {/* Pantallas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<BienvenidaPage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/registro/manual" element={<RegistroManualPage />} />
        <Route path="/registro/nombre-de-usuario" element={<NombreDeUsuarioPage />} />
        <Route path="/ayuda" element={<AyudaPage />} />
        <Route path="/accesibilidad" element={<AccesibilidadPage />} />
        <Route path="/diagnostico-sistema" element={<DiagnosticoPage />} />
        <Route path="*" element={<NoEncontradaPage />} />
      </Route>

      {/* Pantallas privadas (la protección real llega en el Sprint 1) */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Route>

      {/* Sala: encabezado propio, sin navegación general */}
      <Route element={<RoomLayout />}>
        <Route path="/salas/:id" element={<SalaPage />} />
      </Route>
    </Routes>
  );
}
