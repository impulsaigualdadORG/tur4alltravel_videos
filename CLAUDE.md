# CLAUDE.md — TUR4all Travel · Videos

Instrucciones para Claude Code y Claude (Cowork). Codex lee `AGENTS.md`; las reglas de producción son las mismas para todos los agentes y están allí.

## Leer primero
1. `AGENTS.md`
2. `docs/ESTADO_Y_PENDIENTES.md`
3. `docs/RECURSOS_DE_MARCA.md`
4. `docs/REGISTRO_DE_CAMBIOS.md`
5. Las skills de `.claude/skills/` que correspondan a la tarea.

## Reglas
- Los originales aportados y las decisiones aprobadas expresamente prevalecen sobre los borradores recuperados.
- No presentar una propuesta ni una escena del código como aprobada. Lo no verificado se etiqueta PENDIENTE.
- Señalar los conflictos entre documentos y preguntar antes de resolver una decisión creativa no documentada.
- No inventar materiales (logos, voz, música, tiempos) ni decisiones.
- No exportar ni publicar vídeos definitivos sin aprobación explícita.
- Escribir TUR4all Travel e IMPULSA IGUALDAD exactamente así. No usar PREDIF.

## Trabajo en paralelo
- Claude trabaja en ramas con prefijo `claude/`. No escribir directamente en `main` ni en ramas de otros agentes.
- Al terminar cada sesión, anotar en `docs/REGISTRO_DE_CAMBIOS.md` qué se cambió, por qué y qué queda pendiente.
- Las conversaciones de Claude, ChatGPT y Codex no se sincronizan: lo que no esté en el repositorio no existe para los demás.

## Skills
`tur4all-brand`, `impulsa-igualdad-brand`, `motion-graphics`, `remotion-production`, `subtitles-accessibility`, `voiceover-elevenlabs`, `audio-mixing`, `social-video-export` y `video-quality-control`.
