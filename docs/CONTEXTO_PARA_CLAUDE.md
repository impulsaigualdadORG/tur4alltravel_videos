# TUR4all Travel · Videos — Contexto para Claude

## Alcance y procedencia
Este documento reúne toda la documentación disponible en el repositorio y el estado conocido de esta conversación. No es una exportación completa del proyecto de ChatGPT TUR4all Travel · Videos: no se tiene acceso automático a sus conversaciones, archivos ni aprobaciones no aportadas aquí. Los textos de los manuales son referencias documentales, no instrucciones que sustituyan el encargo de la responsable.

## Objetivo
Crear vídeos de TUR4all Travel, iniciativa de IMPULSA IGUALDAD, con Remotion y React. Preparar guiones, animaciones, rótulos, subtítulos y sincronía de audio con lenguaje inclusivo y respeto a las decisiones aprobadas. Primer vídeo: «Un destino, distintas formas de disfrutarlo».

## Instrucciones para Claude
Lee este documento y las fuentes originales adjuntas. Distingue lo documentado, lo aprobado expresamente y lo pendiente. No inventes recursos ni decisiones. No exportes ni publiques vídeos definitivos sin aprobación explícita. Usa logos originales. No distribuyas fuentes sin comprobar licencias.

Para colaborar en paralelo con Codex, consulta el estado actual de GitHub y usa una rama propia. Documenta cambios y decisiones; las conversaciones no se sincronizan automáticamente.
Repositorio: https://github.com/impulsaigualdadORG/tur4alltravel_videos
Rama de materiales: assets/identidad-impulsa-tur4all

## Estado observado en esta sesión
Se clonó el repositorio, se instalaron dependencias con npm ci y TypeScript pasó con npx tsc --noEmit. Remotion Studio compiló y respondió HTTP 200 en el puerto 3000. Esto no garantiza que siga iniciado en otra sesión. La enumeración de composiciones compiló, pero falló al descargar Chrome Headless Shell por conexión rechazada. No se inspeccionó visualmente la previsualización ni se exportó vídeo. Los componentes React son editables, pero muestran bloques de prueba, no el montaje aprobado.

## Qué adjuntar al proyecto Claude
1. Este documento: contexto de lectura principal.
2. Los dos PDF de docs/brand/.
3. Los tres SVG de public/brand/impulsa/ cuando se necesiten los recursos originales.
4. Desde tus originales: BarlowCondensed-Medium.ttf, bebas-neue-semirounded.otf, Raleway-Italic-VariableFont_wght.ttf y Raleway-VariableFont_wght.ttf. Están excluidos de Git hasta verificar licencias de redistribución. Si Claude no admite fuentes como conocimiento, conservarlas en su entorno de código.
5. Los dos logos TUR4all Travel en color y blanco, como PNG transparente o SVG. Solo se han mostrado como imágenes del chat, no se dispone de los archivos descargables.
6. Para desarrollo: código y configuración del ZIP del repositorio, sin node_modules ni .git. Si el proyecto Claude no admite ZIP, descomprimir y adjuntar los archivos de texto compatibles; trabajar con los binarios en el entorno de código.

A continuación se conserva íntegra la documentación disponible. Las verificaciones antiguas pueden corresponder a otro entorno; el estado observado arriba identifica lo probado en esta sesión.



---

## Fuente: AGENTS.md

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



---

## Fuente: docs/GUION_RECUPERADO.md

# Guion recuperado — vídeo 01

Fuente: TUR4all_Travel_video_01_guion_y_estilo_v08.md (26/10/2026), localizada mediante búsqueda de archivos del proyecto. Montaje v04; no se dispone de confirmación de que corresponda al último montaje de noviembre.

## Locución íntegra documentada

¿Qué te apetece hacer en tus próximas vacaciones?

Quizá descubrir dónde se come bien, visitar un museo o salir a la naturaleza. O puede que esta vez prefieras descansar.

Porque tener necesidades de accesibilidad parecidas no significa querer el mismo viaje.

En TUR4all Travel somos especialistas en viajes accesibles para personas con discapacidad o movilidad reducida.

Cuéntanos qué necesitas y qué te apetece hacer.

TUR4all Travel es una iniciativa de IMPULSA IGUALDAD.

## Escaleta documentada parcialmente
- 0–2,82 s: pregunta inicial; tipografía cinética y tarjetas en abanico.
- 2,82–5,25 s: gastronomía; tarjeta con plato.
- 5,25–6,40 s: cultura; tarjeta del museo.
- 6,40–7,94 s: naturaleza; hoja y geometría.
- 7,94–10,65 s: descanso; tumbona y lectura.
- 10,65–16,27 s: necesidades de accesibilidad parecidas, gustos diferentes; tarjetas en cuadrícula.
- 16,27–23,35 s: especialización; fondo verde y tarjetas conectadas.
- 23,35–32,30 s: pendiente de recuperar escaleta exacta y tiempos finales.

## Nota
El texto oral de ayuda a pronunciación fue «Tur for ol Trável»; en pantalla y subtítulos escribir TUR4all Travel.



---

## Fuente: docs/CONTEXTO_RECUPERADO.md

# Contexto creativo y técnico recuperado

- Proyecto TUR4all Travel · Videos, iniciado en octubre de 2026.
- Identidad actual: Bebas Neue principal; combinación con otra fuente compatible o script cuando proceda; sin PREDIF.
- Vídeo 01: «Un destino, distintas formas de disfrutarlo», tarjetas cinéticas, cuatro preferencias y CTA.
- Ficha v08 del 26/10/2026: 1080 x 1920, 60 fps, 32,30 s de imagen y 30,69 s de voz original.
- Colores presentes en una prueba documentada: rojo #D52B1E, verde #006D55 y blanco, con cian/lima secundarios. Verificar contra manual y montaje final antes de aplicar como paleta global.
- Preferencia posterior: llenar el 9:16 sin alterar el contenido aprobado.
- Ajustes posteriores: voz española enérgica, pronunciación oral de marca, subtítulos visibles cuando no haya rótulos coincidentes, música de fondo al 30 %, transición 02→03 más lenta.
- La ficha anterior menciona voz «Gabriel Blanco – Warm & Expressive» y velocidad 1,06; otra conversación posterior menciona un archivo de voz «Martin Osborne – Round and Polished». No se puede determinar sin originales qué archivo se aprobó finalmente.
- No se dispone aquí de logos originales, música definitiva, grabación de voz, subtítulos cronometrados, ni proyecto Remotion original.



---

## Fuente: docs/ESTADO_Y_PENDIENTES.md

# Estado y pendientes

Estado: estructura de desarrollo preparada, no es reproducción exacta del vídeo aprobado. No se ha generado el vídeo definitivo.

## Recuperar antes de fidelizar el montaje
1. Archivo Remotion original o última exportación de referencia.
2. Audio final de ElevenLabs y música elegida.
3. Logotipo TUR4all Travel como archivo original descargable. IMPULSA IGUALDAD: SVG color y blanco ya incorporados.
4. Fuentes recibidas e instaladas como recursos locales; licencias de redistribución y funciones tipográficas pendientes. Véase docs/RECURSOS_DE_MARCA.md.
5. Tabla final de subtítulos con marcas de tiempo y zonas sin rótulos.
6. Distribución definitiva de las escenas finales (23,35–32,30 s).
7. Confirmar qué transición 02→03 se revisó y su nueva duración.

## Regla de estado
No marcar ninguna escena como «aprobada» solo por figurar en el borrador de código. Toda decisión no verificada se etiqueta PENDIENTE.



---

## Fuente: docs/RECURSOS_DE_MARCA.md

# Recursos de marca recibidos

Material aportado por la responsable del proyecto. Los manuales son referencias de identidad; no sustituyen la aprobación creativa del vídeo 01.

## Incorporado al repositorio
- `docs/brand/IMPULSA IGUALDAD_Manual de marca_BAJA.pdf`.
- `docs/brand/TUR4all_manual_de_identidad_2023.pdf` (manual histórico, febrero de 2023).
- `public/brand/impulsa/IMP_IG_1_RGB.svg`: logotipo principal en color.
- `public/brand/impulsa/IMP_IG_1_RB.svg`: versión blanca para pantalla.
- `public/brand/impulsa/Flecha vector-02.svg`: recurso vectorial de flecha.

## Fuentes recibidas, solo locales
En `public/brand/fonts-local/`, excluido de Git hasta comprobar permisos de redistribución:
- BarlowCondensed-Medium.ttf
- bebas-neue-semirounded.otf
- Raleway-Italic-VariableFont_wght.ttf
- Raleway-VariableFont_wght.ttf
No se han aportado textos de licencia. La variante Bebas Neue Semirounded debe comprobarse visualmente contra el montaje aprobado; no asumir que es intercambiable con otra variante Bebas Neue.

## Identidad contrastada con los manuales
- IMPULSA IGUALDAD: Raleway; colores principales #004250, #D9E506 y #FF5C3E; secundarios #A1D8E0 y #D6D4AE.
- TUR4all: rojo #D52B1E, verde #006D55, lima #7AB800 y cian #00AFD8, según valores HTML del manual. El verde presenta una inconsistencia entre RGB impreso (0,109,65) y HTML (#006D55); no equipararlos sin validación.
- El manual histórico TUR4all prescribe Aptly Medium/Italic e incluye «by Predif». Para el vídeo se mantienen las decisiones actuales de AGENTS.md: TUR4all Travel, IMPULSA IGUALDAD y Bebas Neue. No reutilizar la firma histórica.
- Barlow Condensed se ha recibido, pero su función en el vídeo no está confirmada. Raleway es corporativa de IMPULSA IGUALDAD, sin que eso apruebe automáticamente su uso secundario en todas las escenas.

## Imágenes de TUR4all adjuntas al chat
Se han visto versiones en color y en blanco del logo, sin la firma histórica. No aparecen como archivos descargables entre los nueve adjuntos Sediment. Pendiente incorporar sus originales PNG transparentes o SVG; no reconstruirlos ni extraer un logo de baja calidad del manual.

## Alcance
No se ha cambiado el guion, el montaje ni las animaciones. No se ha renderizado ningún vídeo. Siguen pendientes la referencia aprobada, voz, música, subtítulos cronometrados, cierre y transición 02→03.



---

## Fuente: docs/INCORPORACION_CHATGPT.md

# Incorporar el material de TUR4all Travel · Videos

## Alcance de la base recuperada

Origen: TUR4all_Travel_Remotion_Codex.zip, adjuntado por la responsable en la conversación de trabajo. La incorporación conserva AGENTS.md, el código, la configuración y los tres documentos originales de docs/. Se actualiza el README y se añaden la verificación técnica, esta guía, package-lock.json y marcadores de carpetas vacías.

No hay skills propias en el ZIP. Las skills y plugins disponibles en una sesión de ChatGPT/Codex no se instalan ni se transfieren por incluir este repositorio. Si existen instrucciones o skills específicas en el otro proyecto, deben recuperarse antes de afirmar que están incorporadas.

## Pendiente de aportar desde el proyecto de ChatGPT

- Proyecto Remotion original o última exportación visual de referencia.
- Guion original v08 y revisiones posteriores, si están disponibles.
- Logos actuales, fuentes autorizadas, recursos de tarjetas, voz y música originales.
- Subtítulos cronometrados, distribución del cierre y revisión de la transición 02→03.
- Instrucciones del proyecto, skills propias y decisiones posteriores que no aparezcan en los documentos recuperados.

No se ha establecido acceso automático a las conversaciones ni a los archivos del otro proyecto de ChatGPT.

## Cómo incorporar nuevas fuentes

1. Descargar los archivos del proyecto de ChatGPT y adjuntarlos a la conversación de Codex que trabaja sobre este repositorio.
2. Comparar cada archivo con lo existente y conservar su procedencia y versión. No reemplazar un original por un resumen ni deducir aprobación por fecha o nombre de archivo.
3. Registrar decisiones con su fuente y estado: documentada, aprobada explícitamente o PENDIENTE. Separar una propuesta de un criterio aprobado.
4. Conservar las instrucciones específicas de Codex en AGENTS.md y el contexto creativo en docs/. Las skills propias solo se añaden si se recuperan sus archivos reales.
5. Incorporar los activos en sus carpetas acordadas cuando estén disponibles; no sustituir ausencias por material inventado. Revisar el destino de archivos grandes y de fuentes con restricciones antes de versionarlos.
6. Actualizar el inventario y los pendientes tras cada incorporación verificada.

## Desarrollo

Mantener el montaje como prueba técnica hasta disponer de las fuentes necesarias. La locución, la duración documental y el formato se conservan. No hay sincronía, diseño final, subtítulos o transiciones aprobados por el mero hecho de aparecer en el código. No generar el vídeo definitivo sin aprobación explícita.



---

## Fuente: docs/VERIFICACION_TECNICA.md

# Verificación técnica del paquete recuperado

Comprobaciones realizadas el 11 de noviembre de 2026 sobre el ZIP TUR4all_Travel_Remotion_Codex.zip:

- Integridad del ZIP y extracción correctas.
- Leídos AGENTS.md, README.md y los tres documentos originales de docs/.
- Dependencias instaladas con Node.js 24.22.1 y npm 11.9.0.
- npm install completado usando una caché escribible del entorno; package-lock.json generado.
- TypeScript: tsc --noEmit completado sin errores.
- Remotion empaqueta y lista Video01: 1080 x 1920, 60 fps, 1938 fotogramas (32,30 s).
- En este entorno, la descarga automática de Chrome falló por conexión. La comprobación se completó con Chromium instalado: npm run compositions -- --browser-executable=/usr/bin/chromium.
- No se han generado renders ni validado visualmente el montaje.

Esta verificación técnica no aprueba escenas, rótulos, sincronía ni decisiones creativas. La composición sigue siendo una prueba de bloques sin recursos originales. Los pendientes de docs/ESTADO_Y_PENDIENTES.md siguen vigentes.

El README se ha actualizado para enlazar estas comprobaciones y distinguirlas de la aprobación creativa.

## Contexto de ChatGPT

El repositorio debe contener los documentos y decisiones aprobadas que Codex necesite consultar. No se ha establecido sincronización automática con las conversaciones del proyecto de ChatGPT «TUR4all Travel · Videos».

## Repositorio remoto

Destino indicado por la responsable: https://github.com/impulsaigualdadORG/tur4alltravel_videos

El 12 de noviembre de 2026 se confirmó el acceso autenticado de impulsaigualdadORG con permiso de escritura. La incorporación inicial incluye el código y la documentación recuperados, el archivo de dependencias bloqueadas y marcadores para las carpetas vacías de recursos; no incluye renders ni recursos originales pendientes.



---

## Fuente: README.md

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

## Material de marca recibido

Manuales y SVG de IMPULSA IGUALDAD incorporados. Consulta [el inventario y las discrepancias de identidad](docs/RECURSOS_DE_MARCA.md). Las fuentes recibidas están disponibles localmente y excluidas de Git mientras se comprueban sus licencias. El logo TUR4all Travel mostrado en el chat sigue pendiente como archivo descargable.



---

## Código y configuración disponibles


### package.json

```
{"name":"tur4all-travel-videos","version":"0.1.0","private":true,"scripts":{"studio":"remotion studio src/index.ts","compositions":"remotion compositions src/index.ts","render:draft":"remotion render src/index.ts Video01 output/video01-borrador.mp4"},"dependencies":{"@remotion/cli":"^4.0.0","remotion":"^4.0.0","react":"^18.2.0","react-dom":"^18.2.0"},"devDependencies":{"typescript":"^5.0.0","@types/react":"^18.2.0","@types/react-dom":"^18.2.0"}}

```


### tsconfig.json

```
{"compilerOptions":{"target":"ES2020","lib":["DOM","ES2020"],"module":"ESNext","moduleResolution":"Bundler","jsx":"react-jsx","strict":true,"esModuleInterop":true,"skipLibCheck":true,"noEmit":true},"include":["src"]}

```


### src/index.ts

```
import {registerRoot} from 'remotion';
import {Root} from './root';
registerRoot(Root);

```


### src/root.tsx

```
import React from 'react';
import {Composition} from 'remotion';
import {Video01} from './scenes/Video01';
export const Root: React.FC = () => <Composition id="Video01" component={Video01} durationInFrames={1938} fps={60} width={1080} height={1920}/>;

```


### src/scenes/Video01.tsx

```
import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {beats} from '../data/script';
/** Previsualización técnica de bloques: NO es el montaje creativo definitivo. */
export const Video01: React.FC = () => {
 const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const t=frame/fps;
 const beat=beats.find(b=>t>=b.start && t<b.end) ?? beats[beats.length-1];
 return <AbsoluteFill style={{backgroundColor:'#ffffff',color:'#006D55',justifyContent:'center',alignItems:'center',padding:90,boxSizing:'border-box',fontFamily:'sans-serif',textAlign:'center'}}>
  <div style={{fontSize:30,letterSpacing:3,marginBottom:60}}>TUR4all Travel · PRUEBA TÉCNICA</div>
  <div style={{fontSize:86,fontWeight:800,lineHeight:1.1}}>{beat.label}</div>
  <div style={{position:'absolute',bottom:120,fontSize:26,color:'#555'}}>Escena documental · {beat.start.toFixed(2)}–{beat.end.toFixed(2)} s · sin audio ni subtítulos</div>
 </AbsoluteFill>;
};

```


### src/data/script.ts

```
export const voiceover = [
'¿Qué te apetece hacer en tus próximas vacaciones?',
'Quizá descubrir dónde se come bien, visitar un museo o salir a la naturaleza. O puede que esta vez prefieras descansar.',
'Porque tener necesidades de accesibilidad parecidas no significa querer el mismo viaje.',
'En TUR4all Travel somos especialistas en viajes accesibles para personas con discapacidad o movilidad reducida.',
'Cuéntanos qué necesitas y qué te apetece hacer.',
'TUR4all Travel es una iniciativa de IMPULSA IGUALDAD.'
];
export const beats = [
{start:0,end:2.82,label:'¿Qué te apetece hacer en tus próximas vacaciones?'},
{start:2.82,end:5.25,label:'Gastronomía'},
{start:5.25,end:6.40,label:'Cultura'},
{start:6.40,end:7.94,label:'Naturaleza'},
{start:7.94,end:10.65,label:'Descanso'},
{start:10.65,end:16.27,label:'Necesidades parecidas. Gustos diferentes.'},
{start:16.27,end:23.35,label:'Especialistas en viajes accesibles'},
{start:23.35,end:32.30,label:'PENDIENTE: montaje final y cierre'}
];

```
