# Документація проекту

## Опис проекту

Цей проект є веб-застосунком, створеним за допомогою React і TypeScript, та використовує Vite для збірки проекту. Він включає в себе кілька основних модулів та компонентів, які забезпечують його функціональність.

## Бібліотеки

- **react-query** - для роботи з запитами;
- **react-hook-form** - для роботи з формами;
- **pdf-viewer-reactjs** - для перегляду PDF файлів;

## UI

Для UI проекту використовується [shadcn/ui](https://ui.shadcn.com/). UI компоненти генеруються за допомогою запитів.
Приклад запиту:

```
npx shadcn-ui@latest add badge
```

## Структура проекту

Проект має наступну структуру директорій:

```
📦src
 ┣ 📂assets - тут
 ┃ ┣ ... (ресурси, такі як зображення, шрифти і т.д.)
 ┣ 📂components
 ┃ ┣ 📂modules
 ┃ ┃ ┣ ... (компоненти з бізнес логікою)
 ┃ ┗ 📂ui
 ┃ ┃ ┣ ... (ui компоненти, які автоматично генеруються за допомогою shadcn)
 ┣ 📂hooks
 ┃ ┣ ... (кастомні хуки)
 ┣ 📂lib
 ┃ ┣ ... (допоміжні функції та утиліти, які використовуються в різних частинах проекту для виконання загальних завдань)
 ┣ 📜App.tsx - ... (головний компонент React-застосунку. Відповідає за організацію основної структури застосунку)
 ┣ 📜main.tsx - ... (є точкою входу для всього застосунку)
 ┣ 📜index.css - ... (є точкою входу для загальних стилів)
```

## Основні модулі

### Компоненти

- TextForm.tsx - компонент якій містить у собі форму для генерації PDF файлу;
- FilePreview.tsx - компонент якій містить у собі переглядач згенерованого PDF файлу;
- FileBrowsing.tsx - компонент якій містить у собі форму історію згенерованих PDF файлів, з можливістю обирати певний файл для перегляду;

### Утиліти

- axios.ts - Файл є модулем для налаштування бібліотеки Axios, яка використовується для виконання HTTP-запитів. Він налаштовує базовий URL для API та встановлює загальні налаштування для всіх запитів;
- utils.ts - Містить допоміжні функції та утиліти, які використовуються в різних частинах проекту;

### Хуки

- useGeneratePDF - Хук для генерації PDF файлу;
- useFilesHistory - Хук для керування історією згенерованих файлів;
