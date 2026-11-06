import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const contenedor = "max-w-[1200px] mx-auto px-margin-mobile md:px-margin";

type Participante = {
  iniciales: string;
  nombre: string;
  avatar: string;
  icono: string;
  pantalla?: string;
};

const PARTICIPANTES: Participante[] = [
  { iniciales: "CR", nombre: "Camila R.", avatar: "bg-primary-container text-on-primary", icono: "text-primary" },
  { iniciales: "DM", nombre: "David M.", avatar: "bg-secondary text-on-secondary", icono: "text-secondary" },
  { iniciales: "ST", nombre: "Sofía T.", avatar: "bg-tertiary-container text-on-tertiary", icono: "text-primary", pantalla: "Taller_Derivadas.pdf" },
  { iniciales: "AV", nombre: "Alejandro V.", avatar: "bg-inverse-surface text-inverse-on-surface", icono: "text-on-surface" },
];

function Cuadro({ p }: { p: Participante }) {
  return (
    <li
      className={`relative rounded-xl overflow-hidden aspect-[4/3] flex flex-col justify-between p-3 ${
        p.pantalla ? "bg-surface-variant" : "bg-surface-container-high"
      }`}
    >
      <div className="flex items-center justify-between w-full z-10">
        <span aria-hidden="true" className={`w-7 h-7 rounded-full font-label text-xs font-bold flex items-center justify-center shadow-xs ${p.avatar}`}>
          {p.iniciales}
        </span>
        <div className="flex items-center gap-1">
          {p.pantalla && (
            <span className="px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-body text-[11px] font-semibold">Pantalla</span>
          )}
          <span className="w-7 h-7 rounded-full bg-surface-container-lowest/90 flex items-center justify-center text-error">
            <Icon name="mic_off" className="text-[16px]" />
            <span className="sr-only">Micrófono silenciado</span>
          </span>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none">
        {p.pantalla ? (
          <>
            <Icon name="integration_instructions" className="text-[32px] text-primary mb-1" />
            <span className="font-mono text-xs text-on-surface-variant font-medium">{p.pantalla}</span>
          </>
        ) : (
          <Icon name="person" className={`text-[80px] opacity-10 ${p.icono}`} />
        )}
      </div>

      <div className="z-10 bg-surface-container-lowest/90 px-2.5 py-1 rounded-md self-start flex items-center gap-1.5 shadow-xs">
        <span className="font-label text-xs text-on-surface font-medium">{p.nombre}</span>
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary" />
      </div>
    </li>
  );
}

function SalaDemostracion() {
  const [micSilenciado, setMicSilenciado] = useState(true);
  const [camActiva, setCamActiva] = useState(true);
  const [compartiendo, setCompartiendo] = useState(true);
  const [mensajesSinLeer, setMensajesSinLeer] = useState(3);
  const [verMensaje, setVerMensaje] = useState(false);

  return (
    <section
      aria-label="Demostración de una sala de estudio"
      className="relative w-full rounded-2xl bg-surface-container-lowest shadow-md p-4 md:p-6 border border-surface-container"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-surface-container">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
          <div>
            <p className="font-headline font-semibold text-base md:text-lg text-on-background">Sala de Cálculo Multivariable</p>
            <p className="font-body text-xs text-on-surface-variant">
              ID de la sala: <span className="font-mono text-on-surface font-bold">CALC-402</span>
            </p>
          </div>
        </div>
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label text-xs font-medium">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          4 participantes
        </p>
      </div>

      <ul aria-label="Participantes de la sala de ejemplo" className="grid grid-cols-2 gap-3 mb-4">
        {PARTICIPANTES.map((p) => (
          <Cuadro key={p.iniciales} p={p} />
        ))}
      </ul>

      <div role="toolbar" aria-label="Controles de la sala de ejemplo" className="bg-surface-container-low rounded-xl px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-pressed={!micSilenciado}
            aria-label={micSilenciado ? "Micrófono silenciado. Activar micrófono" : "Micrófono activo. Silenciar micrófono"}
            onClick={() => setMicSilenciado(!micSilenciado)}
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
              micSilenciado ? "bg-surface-container-lowest text-error hover:bg-error-container hover:text-on-error-container" : "bg-secondary text-on-secondary"
            }`}
          >
            <Icon name={micSilenciado ? "mic_off" : "mic"} className="text-[20px]" />
          </button>
          <button
            type="button"
            aria-pressed={camActiva}
            aria-label={camActiva ? "Cámara encendida. Apagar cámara" : "Cámara apagada. Encender cámara"}
            onClick={() => setCamActiva(!camActiva)}
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
              camActiva ? "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high" : "bg-surface-container-highest text-on-surface-variant"
            }`}
          >
            <Icon name={camActiva ? "videocam" : "videocam_off"} className="text-[20px]" />
          </button>
          <button
            type="button"
            aria-pressed={compartiendo}
            aria-label={compartiendo ? "Compartiendo pantalla. Dejar de compartir" : "Compartir pantalla"}
            onClick={() => setCompartiendo(!compartiendo)}
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
              compartiendo ? "bg-secondary text-on-secondary shadow-xs" : "bg-surface-container-lowest text-on-surface"
            }`}
          >
            <Icon name="screen_share" className="text-[20px]" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setVerMensaje(true);
            setMensajesSinLeer(0);
          }}
          className="min-h-[44px] min-w-[44px] px-3 rounded-lg bg-surface-container-lowest text-on-surface flex items-center gap-2 font-label text-sm hover:bg-surface-container-high transition-colors"
        >
          <Icon name="chat" className="text-[20px] text-primary" />
          <span className="font-medium">Chat</span>
          {mensajesSinLeer > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-primary-fixed-dim text-on-primary-fixed font-bold text-[11px]">
              {mensajesSinLeer}
              <span className="sr-only"> mensajes sin leer</span>
            </span>
          )}
        </button>
      </div>

      <div role="status">
        {verMensaje && (
          <div className="mt-3 p-3 bg-primary-fixed/50 rounded-lg text-xs text-on-primary-fixed flex items-center justify-between">
            <span>Último mensaje de Camila R.: «He compartido la solución del ejercicio 4».</span>
            <button type="button" aria-label="Cerrar mensaje" onClick={() => setVerMensaje(false)} className="min-w-[44px] min-h-[44px] -my-3 font-bold">
              <span aria-hidden="true">×</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const FUNCIONES = [
  {
    icono: "chat_bubble_outline",
    fondo: "bg-surface-variant text-primary",
    titulo: "Chat de la sala",
    texto: "Escribe y recupera el historial de la conversación. Comparte enlaces, aclaraciones y fórmulas sin perder el hilo del debate.",
    etiqueta: "Historial sincronizado",
    etiquetaIcono: "check_circle",
    etiquetaColor: "text-primary",
  },
  {
    icono: "videocam",
    fondo: "bg-secondary-container text-on-secondary-container",
    titulo: "Video y audio",
    texto: "Mira y escucha a tu grupo en tiempo real, directamente desde el navegador y sin instalar nada.",
    etiqueta: "Audio y video en vivo",
    etiquetaIcono: "graphic_eq",
    etiquetaColor: "text-secondary",
  },
  {
    icono: "present_to_all",
    fondo: "bg-surface-variant text-primary",
    titulo: "Compartir pantalla",
    texto: "Muestra tus documentos al equipo. Presenta diapositivas, guías de laboratorio o código fuente sin salir de la sala.",
    etiqueta: "Una persona presenta a la vez",
    etiquetaIcono: "devices",
    etiquetaColor: "text-primary",
  },
];

export default function BienvenidaDesktop() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-titulo" className="w-full py-8 md:py-16">
        <div className={`${contenedor} grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}>
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-semibold mb-6">
              <Icon name="school" className="text-[18px]" />
              Entorno universitario colaborativo
            </p>

            <h1 id="hero-titulo" className="font-headline text-3xl sm:text-4xl md:text-5xl text-on-background font-bold tracking-tight mb-4">
              Estudia con tu grupo, como en un salón real
            </h1>

            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
              Crea una sala, chatea, habla por video y comparte tu pantalla en tiempo real, con accesibilidad para todas las personas.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                to="/registro"
                className="min-h-[48px] px-6 py-3 bg-primary-container text-on-primary font-label text-sm font-semibold rounded-lg shadow-sm hover:bg-primary transition-colors inline-flex items-center justify-center gap-2"
              >
                Registrarse
                <Icon name="arrow_forward" className="text-[20px]" />
              </Link>
              <Link
                to="/iniciar-sesion"
                className="min-h-[48px] px-6 py-3 bg-surface-container-lowest text-on-surface font-label text-sm font-semibold rounded-lg shadow-sm hover:bg-surface-container-low border border-outline-variant transition-colors inline-flex items-center justify-center"
              >
                Iniciar sesión
              </Link>
            </div>

            <ul className="mt-8 pt-6 flex flex-wrap items-center gap-4 md:gap-6 border-t border-surface-container w-full">
              <li className="flex items-center gap-2">
                <Icon name="verified_user" className="text-secondary text-[22px]" />
                <span className="font-body text-xs md:text-sm text-on-surface-variant font-medium">Accesibilidad WCAG 2.2 AA</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="speed" className="text-secondary text-[22px]" />
                <span className="font-body text-xs md:text-sm text-on-surface-variant font-medium">Comunicación en tiempo real</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 w-full">
            <SalaDemostracion />
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section aria-labelledby="funciones-titulo" className="w-full py-16 bg-surface-container-low">
        <div className={contenedor}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-label text-xs md:text-sm text-primary font-semibold tracking-wide mb-2">Herramientas esenciales</p>
            <h2 id="funciones-titulo" className="font-headline text-2xl md:text-3xl text-on-background font-bold tracking-tight mb-4">
              ¿Qué puedes hacer?
            </h2>
            <p className="font-body text-sm md:text-base text-on-surface-variant">
              Diseñado para concentrarte en el aprendizaje, sin interfaces saturadas ni desconexiones inesperadas.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FUNCIONES.map((f) => (
              <li key={f.titulo}>
                <article className="h-full bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div aria-hidden="true" className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${f.fondo}`}>
                      <Icon name={f.icono} className="text-[28px]" />
                    </div>
                    <h3 className="font-headline font-semibold text-lg text-on-background mb-3">{f.titulo}</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{f.texto}</p>
                  </div>
                  <p className={`mt-6 pt-4 flex items-center gap-2 font-label text-sm font-semibold border-t border-surface-container-low ${f.etiquetaColor}`}>
                    {f.etiqueta}
                    <Icon name={f.etiquetaIcono} className="text-[18px]" />
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Datos clave */}
      <section aria-label="Datos clave de la plataforma" className="w-full py-12">
        <div className={contenedor}>
          <ul className="bg-surface-container rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <li className="p-4">
              <p className="font-headline text-3xl md:text-4xl text-primary font-bold mb-1">WCAG 2.2 AA</p>
              <p className="font-body font-semibold text-sm text-on-surface">Pensado para lectores de pantalla</p>
              <p className="font-body text-xs text-on-surface-variant mt-1">También operable solo con teclado</p>
            </li>
            <li className="p-4">
              <p className="font-headline text-3xl md:text-4xl text-secondary font-bold mb-1">Tiempo real</p>
              <p className="font-body font-semibold text-sm text-on-surface">Chat, video y pantalla compartida</p>
              <p className="font-body text-xs text-on-surface-variant mt-1">Sincronizados para toda la sala</p>
            </li>
            <li className="p-4">
              <p className="font-headline text-3xl md:text-4xl text-on-background font-bold mb-1">0 descargas</p>
              <p className="font-body font-semibold text-sm text-on-surface">Directo en tu navegador web</p>
              <p className="font-body text-xs text-on-surface-variant mt-1">Ingreso inmediato sin instalaciones</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section aria-labelledby="cierre-titulo" className="w-full py-12">
        <div className={contenedor}>
          <div className="text-center bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container p-8 md:p-14">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <div aria-hidden="true" className="w-14 h-14 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-6">
                <Icon name="groups" className="text-[32px]" />
              </div>
              <h2 id="cierre-titulo" className="font-headline text-2xl md:text-3xl text-on-background font-bold tracking-tight mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
                Únete a tu grupo de estudio o crea una sala en pocos segundos, sin configuraciones complicadas.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/registro"
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3 bg-primary-container text-on-primary font-label text-sm font-semibold rounded-lg shadow-sm hover:bg-primary transition-colors inline-flex items-center justify-center"
                >
                  Registrarse
                </Link>
                <Link
                  to="/iniciar-sesion"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-surface-container-low text-on-surface font-label text-sm font-semibold rounded-lg hover:bg-surface-container-high transition-colors inline-flex items-center justify-center"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
