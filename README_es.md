# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Logotipo de Trybe" width="52" height="30" /># Proyecto Trivia <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Logotipo de Trybe" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/trivia.gif)

Este proyecto fue desarrollado como parte del módulo de Front-End del curso de Desarrollo Web de [Trybe](https://www.betrybe.com/). Es un juego de preguntas y respuestas basado en el juego **Trivia**, desarrollado utilizando **React** y **Redux**. La aplicación consume una API externa para obtener las preguntas y presenta un sistema de temporizador y puntuación basado en el nivel de dificultad de las preguntas.

## Índice

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalación](#instalación)
- [Cómo Usar](#cómo-usar)
- [Ejecutando con Docker](#ejecutando-con-docker)
- [Metodologías Ágiles](#metodologías-ágiles)

## Descripción

El objetivo del proyecto es proporcionar una experiencia interactiva y divertida para los usuarios al responder preguntas de diferentes niveles de dificultad. La aplicación utiliza:

- **React** para el desarrollo de los componentes y páginas.
- **Redux** para la gestión del estado global.
- **React Router** para la navegación entre las páginas del juego, como la pantalla de inicio de sesión, juego, ranking y retroalimentación.

El sistema incluye:

- Una interfaz de juego con preguntas aleatorias.
- Temporizador para responder las preguntas.
- Sistema de puntuación basado en el tiempo restante y la dificultad de la pregunta.
- Integración con la API [Open Trivia Database](https://opentdb.com/).

## Tecnologías Utilizadas

- **JavaScript** (ES6+)
- **React**
- **Redux**
- **React Router**
- **CSS**
- **HTML**
- **Docker** (para la contenedorización de la aplicación)

## Funcionalidades

1. **Preguntas Aleatorias**: La aplicación obtiene preguntas de la API externa [Open Trivia Database](https://opentdb.com/), mostrando una pregunta a la vez.
2. **Sistema de Temporizador**: El usuario tiene 30 segundos para responder cada pregunta. El botón de respuesta se desactiva cuando el tiempo se agota.
3. **Puntuación**: La puntuación se calcula en función del tiempo restante y la dificultad de la pregunta.
4. **Sistema de Retroalimentación**: Después de responder todas las preguntas, el jugador es redirigido a la página de retroalimentación.
5. **Ranking**: El jugador puede ver un ranking con las puntuaciones más altas.
6. **Token de Acceso**: Para jugar, el usuario necesita un token, que se genera al iniciar el juego.

## Instalación

### Requisitos

- **Node.js** (versión 14 o superior)
- **Docker** (opcional, si deseas ejecutar la aplicación en un contenedor)

### Pasos para Instalación Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/seu-usuario/trivia.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd trivia
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

La aplicación se ejecutará en `http://localhost:3000`.

## Cómo Usar

1. Al iniciar la aplicación, inicia sesión o genera un token de acceso.
2. Elige una categoría de preguntas y comienza el juego.
3. Responde las preguntas dentro del límite de tiempo.
4. Al final del juego, serás redirigido a la página de retroalimentación donde podrás ver tu puntuación.
5. Verifica el ranking de los mejores jugadores.

## Ejecutando con Docker

Para ejecutar la aplicación usando Docker, sigue los siguientes pasos:

1. Asegúrate de que Docker esté instalado en tu sistema.
2. En el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen de Docker:
   ```bash
   docker build -t trivia-game .
   ```
3. Después de construir la imagen, inicia el contenedor con el siguiente comando:
   ```bash
   docker run -p 3000:3000 trivia-game
   ```

La aplicación estará disponible en `http://localhost:3000`.

## Metodologías Ágiles

Durante el desarrollo del proyecto, utilizamos metodologías ágiles para garantizar una organización eficiente del equipo y el flujo de trabajo. Las principales herramientas y prácticas utilizadas fueron:

- **Trello**: Para la gestión de tareas y el seguimiento del progreso.
- **Scrum**: Con sprints semanales y reuniones diarias para alinear las entregas y mejorar la comunicación dentro del equipo.

## Otros proyectos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)

