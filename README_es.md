# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Proyecto Trivia <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/trivia.gif)

Este proyecto fue desarrollado como parte del módulo de Front-End del curso de Desarrollo Web de [Trybe](https://www.betrybe.com/). Se trata de un juego de preguntas y respuestas basado en el juego **Trivia**, desarrollado utilizando **React** y **Redux**. La aplicación consume una API externa para obtener las preguntas y presenta un sistema de temporizador y puntuación basado en el nivel de dificultad de las preguntas.

<details>
  <summary><h2>📑 Tabla de Contenidos</h2></summary>

  - [Descripción](#descripción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Instalación](#instalación)
  - [Cómo Usar](#cómo-usar)
  - [Ejecutando con Docker](#ejecutando-con-docker)
  - [Metodologías Ágiles](#metodologías-ágeis)

</details>

<details>
  <summary><h2>📝 Descripción</h2></summary>

  El objetivo del proyecto es proporcionar una experiencia interactiva y divertida para los usuarios al responder preguntas de diferentes niveles de dificultad. La aplicación utiliza:

  - **React** para el desarrollo de los componentes y páginas.
  - **Redux** para la gestión del estado global.
  - **React Router** para la navegación entre las páginas del juego, como la pantalla de inicio de sesión, el juego, el ranking y los comentarios.

  El sistema incluye:

  - Una interfaz de juego con preguntas aleatorias.
  - Temporizador para responder a las preguntas.
  - Sistema de puntuación basado en el tiempo restante y la dificultad de la pregunta.
  - Integración con la API [Open Trivia Database](https://opentdb.com/).

</details>

<details>
  <summary><h2>🛠️ Tecnologías Utilizadas</h2></summary>

  - **JavaScript** (ES6+)
  - **React**
  - **Redux**
  - **React Router**
  - **CSS**
  - **HTML**
  - **Docker** (para la contenedorización de la aplicación)

</details>

<details>
  <summary><h2>⚙️ Funcionalidades</h2></summary>

  1. **Preguntas Aleatorias**: La aplicación obtiene preguntas de la API externa [Open Trivia Database](https://opentdb.com/), mostrando una pregunta a la vez.
  2. **Sistema de Temporizador**: El usuario tiene 30 segundos para responder a cada pregunta. El botón de respuesta se desactiva al finalizar el tiempo.
  3. **Puntuación**: La puntuación se calcula en función del tiempo restante y la dificultad de la pregunta.
  4. **Sistema de Comentarios**: Después de responder todas las preguntas, el jugador es dirigido a la página de comentarios.
  5. **Ranking**: El jugador puede ver un ranking con las puntuaciones más altas.
  6. **Token de Acceso**: Para jugar, el usuario necesita un token, generado al iniciar el juego.

</details>

<details>
  <summary><h2>📦 Instalación</h2></summary>

  ### Requisitos

  - **Node.js** (versión 14 o superior)
  - **Docker** (opcional, si desea ejecutar la aplicación en un contenedor)

  ### Pasos para la Instalación Local

  1. Clone el repositorio:
     ```bash
     git clone https://github.com/SamuelRocha91/trivia.git
     ```
  2. Ingrese al directorio del proyecto:
     ```bash
     cd trivia
     ```
  3. Instale las dependencias:
     ```bash
     npm install
     ```
  4. Inicie la aplicación:
     ```bash
     npm start
     ```

  La aplicación se ejecutará en `http://localhost:3000`.

</details>

<details>
  <summary><h2>🚀 Cómo Usar</h2></summary>

  1. Al iniciar la aplicación, inicie sesión o genere un token de acceso.
  2. Elija una categoría de preguntas y comience el juego.
  3. Responda a las preguntas dentro del límite de tiempo.
  4. Al final del juego, será redirigido a la página de comentarios y podrá ver su puntuación.
  5. Verifique el ranking de los mejores jugadores.

</details>

<details>
  <summary><h2>🐳 Ejecutando con Docker</h2></summary>

  Para ejecutar la aplicación utilizando Docker, siga los pasos a continuación:

  1. Asegúrese de que Docker esté instalado en su sistema.
  2. En el directorio raíz del proyecto, ejecute el siguiente comando para construir la imagen Docker:
     ```bash
     docker build -t trivia-game .
     ```
  3. Después de construir la imagen, inicie el contenedor con el siguiente comando:
     ```bash
     docker run -p 3000:3000 trivia-game
     ```

  La aplicación estará disponible en `http://localhost:3000`.

</details>

<details>
  <summary><h2>📊 Metodologías Ágiles</h2></summary>

  Durante el desarrollo del proyecto, utilizamos metodologías ágiles para garantizar una organización eficiente del equipo y del flujo de trabajo. Las principales herramientas y prácticas utilizadas fueron:

  - **Trello**: Para la gestión de tareas y seguimiento del progreso.
  - **Scrum**: Con sprints semanales y reuniones diarias para alinear las entregas y mejorar la comunicación entre el equipo.

</details>

<details>
  <summary><h2>🔗 Otros proyectos</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)

</details>
