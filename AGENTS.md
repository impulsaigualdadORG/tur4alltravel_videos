# AGENTS.md — TUR4all Travel · Videos

## Objetivo
Repositorio de producción audiovisual editable con Remotion y Codex. No renderizar ni publicar vídeos definitivos sin aprobación explícita.

## Fuentes de verdad
1. Archivos originales de marca, audio y guion incorporados al repositorio.
2. docs/CONTEXTO_RECUPERADO.md y docs/GUION_RECUPERADO.md.
3. Decisiones nuevas aprobadas por la responsable del proyecto.
No inferir que un borrador anterior representa el último montaje aprobado.

## Identidad y editorial
- Escribir TUR4all Travel e IMPULSA IGUALDAD exactamente así; no utilizar PREDIF.
- Tipografía principal Bebas Neue. No distribuir fuentes sin licencia. Tipografía secundaria pendiente de confirmar con archivos originales.
- Usar logos originales, nunca recrearlos por texto.
- Lenguaje inclusivo, accesibilidad contrastada, sin prometer accesibilidad universal de recursos concretos.
- Evitar imágenes estereotipadas de personas con discapacidad.

## Producción
- Vertical 1080 x 1920, 60 fps; duración documental del guion v08: 32,30 s (1938 frames).
- Componer para ocupar todo el lienzo vertical; respetar márgenes de seguridad para interfaces sociales.
- Rótulos cinéticos y tarjetas para gastronomía, cultura, naturaleza y descanso.
- Subtítulos obligatorios en zonas libres de rótulos, sin duplicaciones visuales.
- Locución española; pronunciación oral de TUR4all Travel aproximada «tur for ol trá-vel»; marca escrita sin alteraciones.
- Música de fondo: referencia de mezcla 30 %, sujeta a validación auditiva y normalización; no inventar pista.
- Revisar especialmente la transición escena 02 a 03 y ralentizarla respecto al montaje problemático.
- No modificar duración, contenido o animaciones aprobadas sin documentar el cambio.

## Flujo de trabajo Codex
1. Leer este archivo y docs/ESTADO_Y_PENDIENTES.md.
2. Comprobar si existen logos, fuentes, voz y música originales.
3. Consultar docs/GUION_RECUPERADO.md; no sustituir texto por paráfrasis.
4. Implementar escenas, subtítulos y sincronía en componentes separados.
5. Previsualizar y comprobar contraste, legibilidad, ortografía, sincronía y márgenes.
6. Solicitar aprobación antes de exportar el vídeo definitivo.

## Comandos
- npm install
- npm run studio
- npm run compositions
- npm run render:draft (solo prueba técnica; no entrega definitiva)

## Skills y registro compartido
- Criterios detallados por área en `.claude/skills/*/SKILL.md` (marca TUR4all Travel, marca IMPULSA IGUALDAD, motion graphics, Remotion, subtítulos, locución, mezcla, exportación y control de calidad). Son archivos de texto: cualquier agente puede leerlos.
- Claude Code lee además `CLAUDE.md`, que remite a este archivo.
- Cada agente trabaja en su rama y anota sus cambios en `docs/REGISTRO_DE_CAMBIOS.md`.
