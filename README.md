# CAA English C1–C2

Sitio web de práctica autónoma de inglés, niveles C1 y C2, del CAA Virtual (BUAP).
45 unidades en un solo sitio: **25 de C1** (usuario competente: *dominio operativo eficaz*) y **20 de C2** (usuario competente: *maestría*), organizadas en 9 módulos de 5 unidades según los descriptores del Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR).
Todo el contenido para alumnos está en inglés. Usa el mismo motor que *CAA English A1*, *A2*, *B1* y *B2*.

## Temario

### C1 · Advanced (unidades 1–25)

| Módulo | Descriptor MCER C1 | Unidades |
| --- | --- | --- |
| 1 · Mind and Behaviour | Ideas complejas sobre la mente; grados de certeza y postura | 1 First Impressions · 2 Decision Fatigue · 3 The Comfort Zone · 4 Mind Games · 5 The Science of Happiness |
| 2 · Language and Communication | Registro, formación de palabras, tacto, colocaciones y correo formal | 6 Mind Your Language · 7 Lost for Words · 8 Tact and Diplomacy · 9 Bitterly Disappointed · 10 The Formal Email |
| 3 · Work, Money and Ethics | Negocios, frases nominales, comparaciones, reuniones y verbos de reporte | 11 The Startup Mindset · 12 Corporate Responsibility · 13 Money Talks · 14 Chairing a Meeting · 15 Whistleblowers |
| 4 · Science, Health and Technology | Futuro con matices, participios, concesión, causa y efecto, el artículo | 16 Artificial Minds · 17 Living Longer · 18 Designer Babies? · 19 Cause and Effect · 20 The Article |
| 5 · Culture and Society | Frases preposicionales formales, distanciamiento, subjuntivo, anécdotas y repaso | 21 Cultural Heritage · 22 Urban Legends · 23 The Power of Protest · 24 Telling Tales · 25 My C1 Milestone |

### C2 · Proficiency (unidades 26–45)

| Módulo | Descriptor MCER C2 | Unidades |
| --- | --- | --- |
| 6 · Nuance and Precision | Connotación, significado implícito, modalidad fina, titulares, reseña crítica | 26 Shades of Meaning · 27 Reading the Room · 28 Fine Distinctions · 29 Headline News · 30 The Critical Review |
| 7 · Power, Truth and Ethics | Cláusulas nominales, evaluar afirmaciones, lenguaje legal, hipótesis, columna de opinión | 31 Who Holds the Power? · 32 Post-Truth · 33 The Letter of the Law · 34 Moral Dilemmas · 35 The Opinion Column |
| 8 · Arts, Ideas and Identity | Estilo literario, préstamos léxicos, phrasal verbs de tres partes, generalizar y matizar, conferencias | 36 A Life in Pages · 37 Untranslatable · 38 The Creative Process · 39 What Is Beauty? · 40 The Lecture |
| 9 · Mastery | Resumir, mediar, hablar sin preparación, ironía y humor, proyecto final | 41 In a Nutshell · 42 The Go-Between · 43 Off the Cuff · 44 Wit and Humour · 45 My C2 Journey |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.
La página principal muestra un encabezado por nivel (C1 en dorado, C2 en morado) y deja filtrar por nivel o por módulo.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal: niveles C1 y C2, 9 módulos, buscador, filtros y barra de progreso. |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Ajustes del sitio: dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad (45) | Cada unidad completa: `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## 1. Publicar en GitHub Pages (en dos partes)

GitHub solo deja subir 100 archivos a la vez desde el navegador, por eso el sitio viene en dos partes:
**parte 1** = todo el sitio con las 25 unidades de C1; **parte 2** = las 20 unidades de C2.

1. Crea un repositorio público en github.com, por ejemplo `caa-english-c1-c2`.
2. Descomprime **parte 1** y sube todo su contenido (no la carpeta en sí): **Add file → Upload files → Commit changes**.
3. Descomprime **parte 2** y sube su contenido al mismo repositorio, de la misma forma.
4. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
5. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/caa-english-c1-c2/`.
6. En Google Sites: **Insertar → Insertar → Por URL**, y pega esa dirección.

## 2. Recibir los textos de writing

Sin configurar nada, el alumno descarga su texto y lo entrega al asesor.
Para recibirlos automáticamente en una hoja de Google, sigue los pasos al inicio de `tools/writing-collector.gs` y pega la URL en `assets/config.js`.
Los textos de C1 piden 220–300 palabras y los de C2 250–340.

## 3. Speaking

Cada unidad tiene dos actividades de speaking:

1. **Listen and repeat (pronunciación):** 6 frases de la unidad. El alumno escucha la frase (normal o lenta), la dice y la página le da un porcentaje con reconocimiento de voz. Necesita 70 % para aprobar cada frase. Funciona en **Chrome, Edge y Safari** (también en celular); en Firefox el alumno escucha, repite y se graba.
2. **Grabación individual (evidencia):** el alumno graba en la página (unos 3½ minutos en C1 y 4–5½ en C2) y descarga su audio para subirlo a la plataforma del curso.

En `assets/config.js` escribe el nombre y el enlace de la plataforma (`speakingPlatformName`, `speakingPlatformUrl`).

## 4. Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon su `number`, `level: "C1"` o `"C2"` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` con su módulo (`mod`). Los módulos 1–5 son C1 y los 6–9 son C2.

## Notas

- El progreso se guarda en el navegador con la clave `c1c2:` (distinta de `a1:`, `a2:`, `b1:` y `b2:`), así que no se mezcla aunque los sitios estén en la misma cuenta de GitHub.
- Los audios usan las voces del navegador. Cada personaje tiene voz de mujer u hombre en `speakers` dentro de su `data.js`.
- La grabación de voz necesita `https://` (GitHub Pages lo tiene) y que el alumno permita el micrófono.
