# Учебный проект по автоматизации тестирования

Учебный проект по автоматизации тестирования веб-приложений с использованием Selenium WebDriver и JavaScript. Проект состоит из трех частей, каждая из которых содержит задания по созданию CSS-локаторов для различных сценариев на веб-страницах. Нужно потренироваться оформлять локаторы с помощью новых стратегий поиска, а также настраивать явные и неявные ожидания элементов в тесте.

## Задания

### Задание 1: Составьте такой локатор, по которому находились бы все элементы, отмеченные записью (module_6_task1).js):

Создайте локаторы для нахождения элементов на веб-страницах:

- В разделе A: элементы с определенными атрибутами.
- В разделе B: теги <p> с определенными классами.
- В разделе C: элементы вложенных блоков.

### Задание 2: Для сайта заказа такси составьте локаторы, в которых: (module6_taxiOrder.js)

- Найдите <input> без атрибута id.
- Найдите <p> с классами, начинающимися на "form", но не заканчивающимися на "error".
- Найдите первый <p class="form-row"> внутри <div class="form-inner">.

### Задание 3: Для сайта онлайн-ежедневника составьте один тест, в котором (plannerApp.js)

- Перейдите на страницу.
- Кликните на заметку.
- Дождитесь появления заголовка в разделе «Все записи».
- Проверьте, что заголовок и текст совпадают.
- Удалите запись и проверьте её исчезновение.


## Инструкции по запуску

1. Установите Node.js, если он ещё не установлен, с [официального сайта](https://nodejs.org/).
2. Установите необходимые зависимости с помощью команды `npm install`.
3. Запустите тесты с помощью команды `npm test`.

Этот проект предоставляет отличную возможность для практики и обучения автоматизации тестирования веб-приложений с использованием Selenium WebDriver и JavaScript. Он также демонстрирует создание эффективных CSS-локаторов для взаимодействия с элементами веб-страниц где нужно ожидать появление отдельных элементов на веб странице.