# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Проект Trivia <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![Предварительный просмотр приложения](./public/trivia.gif)

Этот проект был разработан в рамках модуля Front-End курса веб-разработки [Trybe](https://www.betrybe.com/). Это игра с вопросами и ответами на основе игры **Trivia**, разработанная с использованием **React** и **Redux**. Приложение использует внешний API для получения вопросов и предоставляет систему таймера и подсчета очков на основе уровня сложности вопросов.


<details>
  <summary><h2>📝 Описание</h2></summary>

  Цель проекта - предоставить пользователям интерактивный и увлекательный опыт, отвечая на вопросы разной степени сложности. Приложение использует:

  - **React** для разработки компонентов и страниц.
  - **Redux** для управления глобальным состоянием.
  - **React Router** для навигации между страницами игры, такими как экран входа, игра, рейтинг и комментарии.

  Система включает:

  - Интерфейс игры с случайными вопросами.
  - Таймер для ответа на вопросы.
  - Система подсчета очков на основе оставшегося времени и сложности вопроса.
  - Интеграцию с API [Open Trivia Database](https://opentdb.com/).

</details>

<details>
  <summary><h2>🛠️ Используемые технологии</h2></summary>

  - **JavaScript** (ES6+)
  - **React**
  - **Redux**
  - **React Router**
  - **CSS**
  - **HTML**
  - **Docker** (для контейнеризации приложения)

</details>

<details>
  <summary><h2>⚙️ Функциональность</h2></summary>

  1. **Случайные вопросы**: Приложение получает вопросы из внешнего API [Open Trivia Database](https://opentdb.com/), показывая по одному вопросу за раз.
  2. **Система таймера**: У пользователя есть 30 секунд на ответ на каждый вопрос. Кнопка ответа деактивируется по истечении времени.
  3. **Подсчет очков**: Очки рассчитываются в зависимости от оставшегося времени и сложности вопроса.
  4. **Система комментариев**: После того как все вопросы будут отвечены, игрок перенаправляется на страницу комментариев.
  5. **Рейтинг**: Игрок может просмотреть рейтинг с наивысшими баллами.
  6. **Токен доступа**: Для игры пользователю нужен токен, который генерируется при запуске игры.

</details>

<details>
  <summary><h2>📦 Установка</h2></summary>

  ### Требования

  - **Node.js** (версии 14 или выше)
  - **Docker** (по желанию, если вы хотите запустить приложение в контейнере)

  ### Шаги для локальной установки

  1. Клонируйте репозиторий:
     ```bash
     git clone https://github.com/SamuelRocha91/trivia.git
     ```
  2. Перейдите в каталог проекта:
     ```bash
     cd trivia
     ```
  3. Установите зависимости:
     ```bash
     npm install
     ```
  4. Запустите приложение:
     ```bash
     npm start
     ```

  Приложение будет работать по адресу `http://localhost:3000`.

</details>

<details>
  <summary><h2>🚀 Как использовать</h2></summary>

  1. При запуске приложения войдите в систему или сгенерируйте токен доступа.
  2. Выберите категорию вопросов и начните игру.
  3. Ответьте на вопросы в пределах времени.
  4. В конце игры вы будете перенаправлены на страницу комментариев, где сможете увидеть свой счет.
  5. Просмотрите рейтинг лучших игроков.

</details>

<details>
  <summary><h2>🐳 Запуск с помощью Docker</h2></summary>

  Чтобы запустить приложение с помощью Docker, выполните следующие шаги:

  1. Убедитесь, что Docker установлен на вашем компьютере.
  2. В корневом каталоге проекта выполните следующую команду, чтобы создать образ Docker:
     ```bash
     docker build -t trivia-game .
     ```
  3. После создания образа запустите контейнер с помощью следующей команды:
     ```bash
     docker run -p 3000:3000 trivia-game
     ```

  Приложение будет доступно по адресу `http://localhost:3000`.

</details>

<details>
  <summary><h2>📊 Гибкие методологии</h2></summary>

  В процессе разработки проекта мы использовали гибкие методологии для обеспечения эффективной организации команды и рабочего процесса. Основные инструменты и практики, которые были использованы:

  - **Trello**: Для управления задачами и отслеживания прогресса.
  - **Scrum**: С недельными спринтами и ежедневными встречами для синхронизации задач и улучшения коммуникации в команде.

</details>

<details>
  <summary><h2>🔗 Другие проекты</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
  - 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)

</details>
