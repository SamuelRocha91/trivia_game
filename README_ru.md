# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Логотип Trybe" width="52" height="30" /># Проект Trivia <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Логотип Trybe" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![Предварительный просмотр приложения](./public/trivia.gif)

Этот проект был разработан в рамках Front-End модуля курса веб-разработки от [Trybe](https://www.betrybe.com/). Это игра с вопросами и ответами, основанная на игре **Trivia**, разработанная с использованием **React** и **Redux**. Приложение использует внешнее API для получения вопросов и имеет систему таймера и подсчета очков, основанную на уровне сложности вопросов.

## Содержание

- [Описание](#описание)
- [Используемые технологии](#используемые-технологии)
- [Функциональность](#функциональность)
- [Установка](#установка)
- [Как использовать](#как-использовать)
- [Запуск с Docker](#запуск-с-docker)
- [Гибкие методологии](#гибкие-методологии)

## Описание

Цель проекта — предоставить пользователям интерактивный и увлекательный опыт, отвечая на вопросы разных уровней сложности. Приложение использует:

- **React** для разработки компонентов и страниц.
- **Redux** для управления глобальным состоянием.
- **React Router** для навигации между страницами игры, такими как вход, игра, рейтинг и обратная связь.

Система включает:

- Интерфейс игры с случайными вопросами.
- Таймер для ответа на вопросы.
- Система подсчета очков, основанная на оставшемся времени и сложности вопросов.
- Интеграцию с API [Open Trivia Database](https://opentdb.com/).

## Используемые технологии

- **JavaScript** (ES6+)
- **React**
- **Redux**
- **React Router**
- **CSS**
- **HTML**
- **Docker** (для контейнеризации приложения)

## Функциональность

1. **Случайные вопросы**: Приложение получает вопросы из внешнего API [Open Trivia Database](https://opentdb.com/) и отображает их по одному за раз.
2. **Система таймера**: Пользователю предоставляется 30 секунд для ответа на каждый вопрос. Кнопка ответа отключается, когда время истекает.
3. **Подсчет очков**: Очки рассчитываются в зависимости от оставшегося времени и сложности вопроса.
4. **Система обратной связи**: После ответа на все вопросы игрок перенаправляется на страницу с обратной связью.
5. **Рейтинг**: Игрок может просматривать рейтинг с наивысшими баллами.
6. **Токен доступа**: Для игры пользователь должен получить токен, который создается при начале игры.

## Установка

### Требования

- **Node.js** (версия 14 или выше)
- **Docker** (опционально, если хотите запустить приложение в контейнере)

### Шаги для локальной установки

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-пользователь/trivia.git
   ```
2. Перейдите в директорию проекта:
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

Приложение будет доступно по адресу `http://localhost:3000`.

## Как использовать

1. При запуске приложения войдите в систему или создайте токен доступа.
2. Выберите категорию вопросов и начните игру.
3. Отвечайте на вопросы в течение отведенного времени.
4. После завершения игры вы будете перенаправлены на страницу обратной связи, где сможете увидеть свои очки.
5. Просмотрите рейтинг лучших игроков.

## Запуск с Docker

Чтобы запустить приложение с использованием Docker, выполните следующие шаги:

1. Убедитесь, что Docker установлен на вашем компьютере.
2. В корневой директории проекта выполните команду для сборки Docker-образа:
   ```bash
   docker build -t trivia-game .
   ```
3. После сборки образа запустите контейнер с помощью следующей команды:
   ```bash
   docker run -p 3000:3000 trivia-game
   ```

Приложение будет доступно по адресу `http://localhost:3000`.

## Гибкие методологии

В процессе разработки проекта использовались гибкие методологии для эффективной организации работы команды и рабочего процесса. Основные инструменты и практики, которые мы использовали:

- **Trello**: для управления задачами и отслеживания прогресса.
- **Scrum**: с недельными спринтами и ежедневными встречами для синхронизации и улучшения коммуникации внутри команды.

## Другие проекты

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
