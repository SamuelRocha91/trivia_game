# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /># Project Trivia <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![Application Preview](./public/trivia.gif)

This project was developed as part of the Front-End module of the [Trybe](https://www.betrybe.com/) Web Development course. It is a question-and-answer game based on the **Trivia** game, built using **React** and **Redux**. The application consumes an external API to get the questions and includes a timer and score system based on the difficulty of the questions.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Running with Docker](#running-with-docker)
- [Agile Methodologies](#agile-methodologies)

## Description

The goal of this project is to provide an interactive and fun experience for users by answering questions of varying difficulty levels. The application uses:

- **React** for component and page development.
- **Redux** for global state management.
- **React Router** for navigation between the game's pages, such as login, game, ranking, and feedback screens.

The system includes:

- A game interface with random questions.
- A timer to answer questions.
- A score system based on the remaining time and the question difficulty.
- Integration with the [Open Trivia Database](https://opentdb.com/) API.

## Technologies Used

- **JavaScript** (ES6+)
- **React**
- **Redux**
- **React Router**
- **CSS**
- **HTML**
- **Docker** (for application containerization)

## Features

1. **Random Questions**: The application fetches questions from the external [Open Trivia Database](https://opentdb.com/), showing one question at a time.
2. **Timer System**: Users have 30 seconds to answer each question. The answer button is disabled when the time runs out.
3. **Scoring**: The score is calculated based on the remaining time and question difficulty.
4. **Feedback System**: After answering all the questions, the player is redirected to the feedback page.
5. **Ranking**: Players can view a ranking of the highest scores.
6. **Access Token**: To play, users need a token generated when starting the game.

## Installation

### Requirements

- **Node.js** (version 14 or higher)
- **Docker** (optional, if you wish to run the application in a container)

### Local Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/trivia.git
   ```
2. Navigate to the project directory:
   ```bash
   cd trivia
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000`.

## How to Use

1. Upon starting the application, log in or generate an access token.
2. Choose a question category and start the game.
3. Answer the questions within the time limit.
4. After completing the game, you'll be redirected to the feedback page where you can see your score.
5. Check the ranking of top players.

## Running with Docker

To run the application using Docker, follow the steps below:

1. Ensure Docker is installed on your system.
2. In the root directory of the project, run the following command to build the Docker image:
   ```bash
   docker build -t trivia-game .
   ```
3. After building the image, start the container with the following command:
   ```bash
   docker run -p 3000:3000 trivia-game
   ```

The application will be available at `http://localhost:3000`.

## Agile Methodologies

During the project development, we used agile methodologies to ensure efficient organization of the team and workflow. The main tools and practices used were:

- **Trello**: For task management and progress tracking.
- **Scrum**: With weekly sprints and daily meetings to align deliverables and improve team communication.

## Other Projects

- ⚽ [Typescript Football API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
- 🪧 [Blogs API](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md)