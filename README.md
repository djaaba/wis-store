# [Phone store](https://wis-software.netlify.app/) – каталог электроники в онлайн-магазине

**Задание:**

Необходимо реализовать интернет магазин по покупке телефонов. Серверная часть в
данном случае не требуется, все тестовые данные должны быть реализованы при помощи
in-memory-web-api (https://github.com/angular/in-memory-web-api). Тестовые данные
могут быть любыми, но соответствовать цели задачи.

Основные возможности, которые необходимо реализовать:
1. Просмотр списка товаров
2. Список желаний
- Выпадающее меню с последними пятью добавленными товарами (как
пример – сайт AliExpress)
- Страница просмотра всего списка желаний
3. Корзина товаров
- Добавление товара в корзину с помощью диалогового окна
- Страница корзины
- Сводная информация о корзине в правом верхнем углу всех страниц сайта

- Просмотр списка товаров
В данном пункте требуется реализовать простой листинг товаров, где каждая
единица товара содержит картинку товара, наименование, цену, кнопку добавления в
корзину и список желаний.

- Список желаний
Как пример списка желаний можно взять wish list с сайта AliExpress, но его
несколько упрощенную версию.
Иконка списка желаний должна находиться рядом с иконкой корзины в правом
верхнем углу. При нажатии на иконку должно выпадать pop-up окно, где будут
перечислены последние 5 добавленных товаров, отсортированные по дате. Каждый
элемент списка должен содержать preview картинку и наименование товара, время
добавления, а так же ссылку на страницу просмотра всего списка желаний.
На странице просмотра списка желаний отображается список желаемых товаров,
каждый элемент содержит картинку, наименование, цену, возможность удалить из списка,
а так же добавить в корзину, с таким же всплывающим окном, как при добавлении из
списка товаров. После добавления в корзину, товар удаляется из списка желаний.

- Корзина товаров
Страница корзины товаров должна содержать список добавленных товаров с
возможностью удаления, изменения количества, а так же кнопку добавления товара в
список желаний с последующим его автоматическим удалением из корзины.
Кроме этого корзина должна содержать краткую форму информации о покупателе: 
- ФИО 
- Телефон (плюсом будет использование маски)
- E-Mail
- Адрес доставки
- Комментарий

Форма должна иметь валидацию и кнопку оформления заказа, по нажатию на которую
если форма валидна внизу странице должна выводиться информация о заказе в формате
JSON (представим что это все должно было уйти на backend).

Инструментарий для разработки:
- Angular 6+;
- Допускается использование Angular Material.
Критерии оценки:
- общий стиль кодирования (использование линтеров и дополнительных правил, в виде
rxjs-tslint-rules и других);
- архитектура приложения, например, использование подхода "умных" и "тупых"
компонентов;
- использование библиотеки для управления состоянием (state management).

## Быстрый старт

#### `npm i express` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:4200/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:4200/

#### `npm run build` – production сборка проекта

