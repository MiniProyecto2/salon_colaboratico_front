import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";

const enlaceNav = ({ isActive }: { isActive: boolean }) =>
  `min-h-[44px] px-3 inline-flex items-center font-label text-sm rounded-lg transition-colors ${
    isActive ? "text-primary font-semibold" : "text-on-surface-variant hover:text-on-surface"
  }`;

const itemMenu =
  "w-full min-h-[44px] px-4 flex items-center gap-3 text-left font-body text-sm text-on-surface hover:bg-surface-container";

/** Encabezado de las pantallas privadas (Panel, Mi perfil). Sprint 0: datos de usuario de ejemplo. */
export default function PrivateHeader() {
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAbierto(false);
        botonRef.current?.focus();
      }
    };
    const alHacerClic = (e: MouseEvent) => {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("keydown", alPulsar);
    document.addEventListener("mousedown", alHacerClic);
    return () => {
      document.removeEventListener("keydown", alPulsar);
      document.removeEventListener("mousedown", alHacerClic);
    };
  }, [abierto]);

  return (
    <header className="sticky top-0 z-40 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 md:h-20 max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <Logo to="/dashboard" />

        <nav aria-label="Navegación principal" className="flex items-center gap-space-xs">
          <NavLink to="/dashboard" className={enlaceNav}>Panel</NavLink>
          <NavLink to="/ayuda" className={enlaceNav}>Ayuda</NavLink>

          <div ref={contenedorRef} className="relative">
            <button
              ref={botonRef}
              type="button"
              aria-expanded={abierto}
              aria-haspopup="menu"
              aria-label="Menú de usuario"
              onClick={() => setAbierto((v) => !v)}
              className="min-h-[44px] pl-1 pr-3 inline-flex items-center gap-2 rounded-full hover:bg-surface-container"
            >
              <span aria-hidden="true" className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                <Icon name="person" className="text-[18px]" />
              </span>
              <span className="hidden sm:inline font-label text-sm text-on-surface">nombre_de_usuario</span>
            </button>

            {abierto && (
              <div
                role="menu"
                aria-label="Opciones de usuario"
                className="absolute right-0 mt-2 w-52 py-2 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container"
              >
                <Link role="menuitem" to="/perfil" className={itemMenu} onClick={() => setAbierto(false)}>
                  <Icon name="account_circle" className="text-[20px] text-primary" />
                  Mi perfil
                </Link>
                {/* Sprint 1: aquí se cierra la sesión de Firebase */}
                <Link role="menuitem" to="/iniciar-sesion" className={itemMenu} onClick={() => setAbierto(false)}>
                  <Icon name="logout" className="text-[20px] text-on-surface-variant" />
                  Cerrar sesión
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
