# Users Viewer

Демо-приложение на **Next.js** для просмотра списка пользователей и их детальных карточек. Данные загружаются из публичного API [JSONPlaceholder](https://jsonplaceholder.typicode.com). 
Интерфейс построен на React, Tailwind CSS и библиотеке компонентов shadcn/ui.

Готовая версия сайта доступна по адресу:
<a href="https://users-viewer-uvw2.vercel.app/" target="_blank" rel="noopener noreferrer">
  https://users-viewer-uvw2.vercel.app/
</a>

## ✨ Функционал

| Экран | Возможности |
|-------|-------------|
| **Главная** `/` | * Серверный рендер (ISR = 60 сек).<br>* Живой поиск по имени.<br>* Карточки с hover-тенью и ссылкой «Подробнее →». |
| **Детальная** `/user/[id]` | * Серверный SSR‑рендер одной карточки.<br>* Анимация появления (Framer Motion).<br>* Кнопка «← Назад». |
| **Loading‑состояния** | Скелетоны shimmer до прихода данных. |
| **Error Boundaries** | Глобальный и локальный `<error.tsx>` — сообщение + кнопка «Подробнее». |
| **404** | Кастомный `not-found.tsx`. |
| **Theme Toggle** | Переключение темы (light/dark) через класс Tailwind `dark`. |

## 🛠 Стек

| Технология | Зачем |
|------------|-------|
| **Next.js** | SSR / ISR, Server Components, удобная маршрутизация. |
| **TypeScript** | Строгая типизация API-ответов. |
| **Tailwind CSS** | Утилитарная стилизация и тёмная тема. |
| **Shadcn UI** | Готовые UI‑примитивы (Card, Button, Input, Skeleton). |
| **Framer Motion** | Плавные анимации списков и страниц. |

## Требования

- **Node.js** 18 или новее
- **npm** (с Node.js)

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск режима разработки
npm run dev
```

Доступные npm-скрипты:

- `npm run build` – production-сборка
- `npm run start` – запуск собранного приложения
- `npm run lint` – проверка ESLint

## Структура проекта

```
src/
├─ app/          # маршруты и страницы приложения
├─ components/   # переиспользуемые React-компоненты
├─ services/     # API-запросы (получение пользователей)
├─ lib/          # общие утилиты
├─ styles/       # глобальные стили
└─ types/        # типы TypeScript
```
---

**Приятной разработки!**