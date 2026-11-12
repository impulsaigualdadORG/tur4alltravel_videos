# TUR4all Travel · Remotion + Codex

Entorno de trabajo preparado para abrir en Codex o VS Code. No incluye render definitivo ni los activos originales.

## Inicio
1. Descomprimir la carpeta en el equipo.
2. Abrir esa carpeta desde Codex.
3. Instalar Node.js LTS si no está instalado.
4. Ejecutar `npm install` y `npm run studio`.
5. Indicar a Codex: «Lee AGENTS.md y docs/ESTADO_Y_PENDIENTES.md. Recupera los activos faltantes antes de recrear el montaje. No exportes el vídeo definitivo».

## Estructura
- `AGENTS.md`: instrucciones operativas de Codex.
- `docs/`: guion recuperado, contexto y pendientes.
- `src/`: composición Remotion y datos de escaleta.
- `public/brand/`: logos y fuentes autorizadas pendientes.
- `public/audio/`: voz y música pendientes.
- `output/`: exportaciones futuras.

La composición actual es una **prueba técnica de escenas**, no una reconstrucción visual aprobada. Las dependencias, TypeScript y el registro de la composición se han comprobado; no se ha generado ningún render. Consulta [la verificación técnica](docs/VERIFICACION_TECNICA.md).

## Contexto y recursos pendientes

Este repositorio parte del ZIP recuperado, no del proyecto original completo. No contiene skills propias ni recursos de marca o audio. Consulta [el estado y pendientes](docs/ESTADO_Y_PENDIENTES.md) y [la guía para incorporar el material de ChatGPT](docs/INCORPORACION_CHATGPT.md).

Se incluye `package-lock.json` para instalar las versiones verificadas con `npm ci`. No se versionan `node_modules` ni renders.
