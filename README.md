# Salón Colaborativo — Front End

Front end de una aplicación web de un salón colaborativo, construida con React, TypeScript y Vite. Incluye pantallas públicas de bienvenida, registro y ayuda; vistas de dashboard y perfil; una vista de sala; y un diagnóstico de conexión con la API.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Ejecutar en desarrollo

Desde la carpeta raíz:

```bash
npm install
npm run dev (Para probar de manera local la visualizacion de la página)
```

(Crea un archivo `.env` local a partir de la plantilla)

```powershell
Copy-Item .env.example .env
```

En macOS/Linux:

```bash
cp .env.example .env
```

Completa en `.env` las variables que necesite tu entorno. Luego inicia Vite:

```bash
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`). El servidor de desarrollo recarga la aplicación cuando guardas cambios.

## Comandos

```bash
npm run dev      # Servidor local de desarrollo
npm run build    # Verificación de TypeScript y build de producción
npm run preview  # Previsualiza localmente el build de producción
npm run lint     # Ejecuta ESLint
```

El build de producción se genera en `dist/`.

## Rutas principales

- `/` — bienvenida
- `/iniciar-sesion` — inicio de sesión
- `/registro` y `/registro/manual` — registro
- `/ayuda` y `/accesibilidad` — información y accesibilidad
- `/diagnostico-sistema` — estado de conexión con la API
- `/dashboard` y `/perfil` — vistas privadas
- `/salas/:id` — sala