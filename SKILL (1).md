---
name: remotion-production
description: Forma de trabajar con Remotion y React en este repositorio. Usar al crear o editar composiciones, escenas, datos de guion o timing, al instalar dependencias y al previsualizar o renderizar cualquier vídeo.
---

# Producción con Remotion

## Estado del repositorio
Comprobarlo siempre antes de trabajar: `package.json`, `src/`, `docs/ESTADO_Y_PENDIENTES.md` y `docs/VERIFICACION_TECNICA.md`. A fecha del 13/11/2026 la composición `Video01` (1080 × 1920, 60 fps, 1938 fotogramas) es una prueba técnica de bloques, no el montaje aprobado.

## Criterios
- Una escena, un componente. Separar guion, timing, voz, subtítulos, música y composición en archivos distintos, con parámetros configurables.
- No sustituir la locución de `docs/GUION_RECUPERADO.md` por paráfrasis.
- No dar por buenas versiones de dependencias ni comandos sin comprobarlos en `package.json`.
- Comandos existentes: `npm ci`, `npm run studio`, `npm run compositions`, `npm run render:draft` (solo prueba técnica).
- Si falla la descarga de Chrome, usar un Chromium ya instalado con `--browser-executable`.
- Antes de un render completo, generar fotogramas sueltos (`npx remotion still`) en los momentos con más elementos y revisarlos.
- No generar ni publicar el vídeo definitivo sin aprobación explícita.

## Trabajo en paralelo
Cada agente trabaja en su rama y anota en `docs/REGISTRO_DE_CAMBIOS.md` qué cambió, por qué y qué queda pendiente. No se versionan `node_modules`, renders ni fuentes sin licencia comprobada.
