# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" /> Trivia项目 <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![葡萄牙语](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![西班牙语](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![英语](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![俄语](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![阿拉伯语](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![应用程序预览](./public/trivia.gif)

这个项目是基于[Trybe](https://www.betrybe.com/)的网页开发课程的前端模块开发的。它是一个基于**Trivia**的问答游戏，使用**React**和**Redux**开发。该应用程序使用外部API获取问题，并提供计时器和基于问题难度的得分系统。

<details>
  <summary><h2>📑 目录</h2></summary>

  - [描述](#描述)
  - [使用的技术](#使用的技术)
  - [功能](#功能)
  - [安装](#安装)
  - [如何使用](#如何使用)
  - [使用Docker启动](#使用docker启动)
  - [灵活的方法论](#灵活的方法论)

</details>

<details>
  <summary><h2>📝 描述</h2></summary>

  项目的目标是为用户提供一个互动和有趣的体验，通过回答不同难度的问题。该应用程序使用：

  - **React** 开发组件和页面。
  - **Redux** 管理全局状态。
  - **React Router** 在游戏页面之间进行导航，如登录屏幕、游戏、排行榜和评论。

  系统包括：

  - 具有随机问题的游戏界面。
  - 用于回答问题的计时器。
  - 基于剩余时间和问题难度的得分系统。
  - 与API [Open Trivia Database](https://opentdb.com/)的集成。

</details>

<details>
  <summary><h2>🛠️ 使用的技术</h2></summary>

  - **JavaScript**（ES6+）
  - **React**
  - **Redux**
  - **React Router**
  - **CSS**
  - **HTML**
  - **Docker**（用于应用程序容器化）

</details>

<details>
  <summary><h2>⚙️ 功能</h2></summary>

  1. **随机问题**：应用程序从外部API [Open Trivia Database](https://opentdb.com/)获取问题，一次显示一个问题。
  2. **计时器系统**：用户在每个问题上有30秒的回答时间。时间到时，回答按钮会被禁用。
  3. **得分系统**：根据剩余时间和问题难度计算得分。
  4. **评论系统**：回答完所有问题后，玩家将被重定向到评论页面。
  5. **排行榜**：玩家可以查看得分最高的排行榜。
  6. **访问令牌**：用户在游戏中需要一个令牌，该令牌在游戏启动时生成。

</details>

<details>
  <summary><h2>📦 安装</h2></summary>

  ### 要求

  - **Node.js**（版本14或更高）
  - **Docker**（可选，如果您想在容器中运行应用程序）

  ### 本地安装步骤

  1. 克隆仓库：
     ```bash
     git clone https://github.com/SamuelRocha91/trivia.git
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

  应用程序将在 `http://localhost:3000` 运行。

</details>

<details>
  <summary><h2>🚀 如何使用</h2></summary>

  1. 启动应用程序后，登录或生成访问令牌。
  2. 选择问题类别并开始游戏。
  3. 在规定时间内回答问题。
  4. 游戏结束后，您将被重定向到评论页面，您可以查看自己的得分。
  5. 查看高分玩家排行榜。

</details>

<details>
  <summary><h2>🐳 使用Docker启动</h2></summary>

  要使用Docker运行应用程序，请执行以下步骤：

  1. 确保您的计算机上已安装Docker。
  2. 在项目根目录中，运行以下命令以创建Docker镜像：
     ```bash
     docker build -t trivia-game .
     ```
  3. 创建镜像后，使用以下命令启动容器：
     ```bash
     docker run -p 3000:3000 trivia-game
     ```

  应用程序将在 `http://localhost:3000` 可用。

</details>

<details>
  <summary><h2>📊 灵活的方法论</h2></summary>

  在项目开发过程中，我们使用灵活的方法论以确保团队和工作流程的有效组织。使用的主要工具和实践包括：

  - **Trello**：用于任务管理和进度跟踪。
  - **Scrum**：通过每周冲刺和每日会议来同步任务，提高团队沟通。

</details>

<details>
  <summary><h2>🔗 其他项目</h2></summary>

  - 🌶️ [食谱应用](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
  - 🐣 [口袋妖怪图鉴](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
  - 🏪 [前端在线商店](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
  - 👛 [费用管理器](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)

</details>
