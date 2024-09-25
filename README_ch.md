# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /># Trivia 项目 <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![应用预览](./public/trivia.gif)

此项目是作为 [Trybe](https://www.betrybe.com/) 的 Web 开发课程的前端模块的一部分开发的。这是一个基于 **Trivia** 游戏的问答游戏，使用 **React** 和 **Redux** 开发。应用程序通过外部 API 获取问题，并基于问题的难度设置了计时器和计分系统。

## 目录

- [项目介绍](#项目介绍)
- [使用的技术](#使用的技术)
- [功能](#功能)
- [安装](#安装)
- [如何使用](#如何使用)
- [使用 Docker 启动](#使用-Docker-启动)
- [敏捷开发方法](#敏捷开发方法)

## 项目介绍

该项目旨在为用户提供一个互动且有趣的体验，用户需要回答不同难度级别的问题。该应用使用了：

- **React** 用于构建组件和页面。
- **Redux** 用于全局状态管理。
- **React Router** 用于在登录、游戏、排名和反馈页面之间进行导航。

系统包括：

- 随机问题的游戏界面。
- 回答问题的计时器。
- 基于剩余时间和问题难度的计分系统。
- 与 [Open Trivia Database](https://opentdb.com/) API 的集成。

## 使用的技术

- **JavaScript** (ES6+)
- **React**
- **Redux**
- **React Router**
- **CSS**
- **HTML**
- **Docker**（用于应用程序容器化）

## 功能

1. **随机问题**：应用程序从外部 API [Open Trivia Database](https://opentdb.com/) 获取问题，并逐个显示。
2. **计时器系统**：用户每个问题有 30 秒时间作答。计时结束后，答题按钮将被禁用。
3. **计分系统**：分数根据剩余时间和问题的难度进行计算。
4. **反馈系统**：所有问题答完后，玩家将被引导到反馈页面。
5. **排行榜**：玩家可以查看得分最高的排行榜。
6. **访问令牌**：要开始游戏，用户需要获取令牌，令牌在游戏开始时创建。

## 安装

### 系统要求

- **Node.js** (版本 14 或更高)
- **Docker**（可选，如果你希望在容器中运行应用程序）

### 本地安装步骤

1. 克隆此仓库：
   ```bash
   git clone https://github.com/your-username/trivia.git
   ```
2. 进入项目目录：
   ```bash
   cd trivia
   ```
3. 安装依赖：
   ```bash
   npm install
   ```

4. 启动应用程序：
   ```bash
   npm start
   ```

应用程序将运行在 `http://localhost:3000`。

## 如何使用

1. 启动应用程序后，登录或创建一个访问令牌。
2. 选择问题类别并开始游戏。
3. 在规定时间内回答问题。
4. 游戏结束后，您将跳转到反馈页面，查看您的得分。
5. 查看排行榜，了解最高分的玩家。

## 使用 Docker 启动

要使用 Docker 运行应用程序，请执行以下步骤：

1. 确保您的计算机上已安装 Docker。
2. 在项目根目录运行以下命令来构建 Docker 镜像：
   ```bash
   docker build -t trivia-game .
   ```
3. 镜像构建完成后，使用以下命令启动容器：
   ```bash
   docker run -p 3000:3000 trivia-game
   ```

应用程序将运行在 `http://localhost:3000`。

## 敏捷开发方法

在开发过程中，我们使用了敏捷开发方法来有效地组织团队工作和流程。主要使用的工具和实践包括：

- **Trello**：用于任务管理和进度跟踪。
- **Scrum**：通过每周冲刺和每日会议来同步和提升团队内部的沟通。

## 其他项目

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
