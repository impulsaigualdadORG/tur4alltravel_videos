# Registro de cambios

Cada agente (Claude, Codex, ChatGPT) añade aquí una entrada por sesión de trabajo: fecha, agente, rama, qué cambió, por qué y qué queda pendiente. Las entradas más recientes van arriba.

## 13/11/2026 — Claude (Cowork) — rama `claude/skills-produccion-video`

Qué cambió
- Añadidas nueve skills en `.claude/skills/`. Ocho proceden del paquete `skills_TUR4all_Travel_para_Claude.zip` aportado por Jesús, revisadas; la novena, `impulsa-igualdad-brand`, es nueva.
- Añadido `CLAUDE.md` para que Claude Code lea las mismas reglas que Codex.
- Añadida en `AGENTS.md` una sección que remite a las skills y a este registro. El resto de `AGENTS.md` no se ha tocado.
- Creado este registro.

Por qué
- Que Claude Code, Claude (Cowork) y Codex trabajen con los mismos criterios desde el repositorio.

Cambios respecto al ZIP original
- No se ha sustituido `AGENTS.md` por el del ZIP, que era más breve.
- Descripciones de las skills reescritas para indicar cuándo usarlas.
- Eliminado el bloque de método repetido en las ocho; ahora está en `CLAUDE.md`.
- La skill de marca remite a los colores ya documentados en `docs/RECURSOS_DE_MARCA.md`.

Conflictos detectados, sin resolver
- Música al 30 %: el ZIP la da como «mezcla aprobada»; `AGENTS.md` como «sujeta a validación auditiva». Se mantiene como PENDIENTE.
- Beige de IMPULSA IGUALDAD: #D6D4AE en `docs/RECURSOS_DE_MARCA.md` y #D6D4A5 en las instrucciones de la organización en Claude.
- Portada 4:5 para el grid: aparece solo en el ZIP. Recogida como criterio por confirmar.
- Voz aprobada: sigue sin determinarse entre las dos referencias documentadas.

Pendiente
- Todo lo listado en `docs/ESTADO_Y_PENDIENTES.md` sigue vigente.
- Integrar esta rama cuando la responsable lo apruebe.
