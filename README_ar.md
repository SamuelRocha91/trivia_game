# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /># مشروع Trivia <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/trivia_game/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)

![صورة المعاينة](./public/trivia.gif)

تم تطوير هذا المشروع كجزء من وحدة الواجهة الأمامية لدورة تطوير الويب الخاصة بـ [Trybe](https://www.betrybe.com/). وهو عبارة عن لعبة أسئلة وأجوبة مستوحاة من لعبة **Trivia**، تم تطويرها باستخدام **React** و **Redux**. تقوم اللعبة بجلب الأسئلة من API خارجي وتحتوي على نظام مؤقت ونظام تسجيل يعتمد على صعوبة الأسئلة.

## المحتويات

- [مقدمة عن المشروع](#مقدمة-عن-المشروع)
- [التقنيات المستخدمة](#التقنيات-المستخدمة)
- [الميزات](#الميزات)
- [التثبيت](#التثبيت)
- [كيفية الاستخدام](#كيفية-الاستخدام)
- [تشغيل باستخدام Docker](#تشغيل-باستخدام-Docker)
- [المنهجية الرشيقة](#المنهجية-الرشيقة)

## مقدمة عن المشروع

يهدف هذا المشروع إلى تقديم تجربة تفاعلية وممتعة للمستخدمين، حيث يتعين عليهم الإجابة على أسئلة ذات مستويات صعوبة مختلفة. التطبيق يستخدم:

- **React** لبناء المكونات والصفحات.
- **Redux** لإدارة الحالة العامة.
- **React Router** للتنقل بين صفحات تسجيل الدخول واللعبة والترتيب والتغذية الراجعة.

يتضمن النظام:

- واجهة لعبة بأسئلة عشوائية.
- مؤقت للإجابة على الأسئلة.
- نظام تسجيل يعتمد على الوقت المتبقي وصعوبة الأسئلة.
- تكامل مع API [Open Trivia Database](https://opentdb.com/).

## التقنيات المستخدمة

- **JavaScript** (ES6+)
- **React**
- **Redux**
- **React Router**
- **CSS**
- **HTML**
- **Docker** (لإحتواء التطبيق)

## الميزات

1. **الأسئلة العشوائية**: يجلب التطبيق الأسئلة من API خارجي [Open Trivia Database](https://opentdb.com/) ويعرضها واحدة تلو الأخرى.
2. **نظام المؤقت**: يتيح لكل مستخدم 30 ثانية للإجابة على كل سؤال. عند انتهاء الوقت، يتم تعطيل أزرار الإجابة.
3. **نظام التسجيل**: يتم حساب النقاط بناءً على الوقت المتبقي وصعوبة السؤال.
4. **نظام التغذية الراجعة**: بعد الانتهاء من جميع الأسئلة، يتم توجيه اللاعب إلى صفحة التغذية الراجعة.
5. **الترتيب**: يمكن للاعبين رؤية قائمة بأعلى النتائج.
6. **رمز الوصول**: لبدء اللعبة، يجب على المستخدم الحصول على رمز وصول يتم إنشاؤه عند بدء اللعبة.

## التثبيت

### متطلبات النظام

- **Node.js** (الإصدار 14 أو أعلى)
- **Docker** (اختياري إذا كنت ترغب في تشغيل التطبيق داخل حاوية)

### خطوات التثبيت المحلي

1. استنساخ هذا المستودع:
   ```bash
   git clone https://github.com/your-username/trivia.git
   ```
2. الدخول إلى مجلد المشروع:
   ```bash
   cd trivia
   ```
3. تثبيت التبعيات:
   ```bash
   npm install
   ```

4. تشغيل التطبيق:
   ```bash
   npm start
   ```

سيتم تشغيل التطبيق على `http://localhost:3000`.

## كيفية الاستخدام

1. بعد تشغيل التطبيق، قم بتسجيل الدخول أو إنشاء رمز الوصول.
2. اختر فئة الأسئلة وابدأ اللعبة.
3. أجب عن الأسئلة في الوقت المحدد.
4. بعد انتهاء اللعبة، سيتم نقلك إلى صفحة التغذية الراجعة لعرض درجاتك.
5. عرض قائمة الترتيب لمعرفة أفضل اللاعبين.

## تشغيل باستخدام Docker

لتشغيل التطبيق باستخدام Docker، اتبع الخطوات التالية:

1. تأكد من تثبيت Docker على جهازك.
2. في الدليل الجذر للمشروع، قم بتشغيل الأمر التالي لبناء صورة Docker:
   ```bash
   docker build -t trivia-game .
   ```
3. بعد الانتهاء من بناء الصورة، قم بتشغيل الحاوية باستخدام الأمر:
   ```bash
   docker run -p 3000:3000 trivia-game
   ```

سيتم تشغيل التطبيق على `http://localhost:3000`.

## المنهجية الرشيقة

أثناء عملية التطوير، تم استخدام المنهجية الرشيقة لتنظيم عمل الفريق والعمليات بفعالية. وتشمل الأدوات والممارسات الرئيسية المستخدمة:

- **Trello** لإدارة المهام وتتبع التقدم.
- **Scrum** من خلال تنفيذ سباقات قصيرة أسبوعية واجتماعات يومية لتحسين التواصل داخل الفريق.

## مشاريع أخرى

- ⚽ [API كرة القدم باستخدام TypeScript](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
- 🌶️ [تطبيق وصفات الطعام](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
- 🏪 [متجر على الإنترنت للواجهة الأمامية](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)
- 👛 [منظم النفقات](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)

