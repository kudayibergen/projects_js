(function (){
    let listArray = [];
        listName = ``;

    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement(`h2`); // создаем элемент Н2 для заголовка
        appTitle.innerHTML = title; //здесь будет текст заголовка
        return appTitle; 
    }

    // создаем и возвращаем форму для создания тела
    function createToDoItemForm() {
        let form = document.createElement(`form`); //создаем элемент формы
        let input = document.createElement(`input`); //создаем элемент ввода
        let buttonWrapper = document.createElement(`div`); //создаем обертку для кнопки
        let button = document.createElement(`button`);//создаем элемент кнопки

        //добавляем классы
        form.classList.add(`input-group`, `mb-3`);
        input.classList.add(`form-control`);
        input.placeholder = `Введите название нового дела`;
        buttonWrapper.classList.add(`input-group-append`);
        button.classList.add(`btn`, `btn-primary`);
        button.textContent = `Добавить дело`;
        button.disabled = true;

        buttonWrapper.append(button); //помещаем кнопку в обертку
        form.append(input);//помещаем ввод в форму
        form.append(buttonWrapper);//помещаем обертку с кнопкой в форму

        input.addEventListener(`input`, function() {
            if(input !== "") {
                button.disabled = false
            } else {
                button.disabled = true
            }
        })

        return {
            form,
            input, 
            button
        };
    }

    // создаем и возвращаем список элементов
    function createToDoList() {
        let list = document.createElement(`ul`);// Создаем элемент списка (unordered list)
        list.classList.add('list-group');// Добавляем класс 'list-group' для стилизации
        return list;
    }

    function createtodoItems(obj) {
        let item = document.createElement(`li`);// Создаем элемент списка (list item)
        // кнопки помещаем в один элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement(`div`);// Создаем контейнер для кнопок
        let doneButton = document.createElement(`button`);// Создаем кнопку "Готово"
        let deleteButton = document.createElement(`button`);// Создаем кнопку "Удалить"
    
        // устанавливаем стили для элемента списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add(`list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`);
        item.textContent = obj.name;
    
        buttonGroup.classList.add(`btn-group`, `btn-group-sm`);
        doneButton.classList.add(`btn`, `btn-success`);
        doneButton.textContent = `Готово`;
        deleteButton.classList.add(`btn`, `btn-danger`);
        deleteButton.textContent = `Удалить`;

        // добавляем обработчики кнопки
        doneButton.addEventListener(`click`, function() {
            item.classList.toggle(`list-group-item-success`);
            for (const listItem of listArray) {
                if(listItem.id == obj.id) listItem.done = !listItem.done;
            }

            saveList(listArray, listName);

        });
    
        deleteButton.addEventListener(`click`, function() {
            if (confirm(`вы уверены?`)) {
            item.remove();
            for (let i = 0; i < listArray.length; i++) {
                if(listArray [i].id == obj.id) listArray.splice(i,1)
            }

            saveList(listArray, listName);

            }
        });
    
        // вкладываем кнопки в один элемент чтобы они объеденились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);// Помещаем контейнер с кнопками в элемент списка
    
        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item, 
            doneButton, 
            deleteButton
        };
    };

    function getNewId(arr){
        let max = 0;
        for (const item of arr) {
            if (item.id > max) max = item.id
        }
        return max + 1;
    }

    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr));
    }

    function createtodoApp(container, title = `Список дел`, keyName, defArray = []) {
        // Создаем заголовок приложения, форму и список
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createToDoItemForm();
        let todoList = createToDoList();

        listName = keyName;
        listArray = defArray;

        // Размещаем элементы на странице
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        let localData = localStorage.getItem(listName);

        if(localData !== null && localData !== ``) listArray = JSON.parse(localData);
        
        for (const itemList of listArray) {
            let todoItems = createtodoItems(itemList);
            todoList.append(todoItems.item);
        }

        //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener(`submit`, function(e) {
        // эта строчка необходима, чтобы предотвратить стандартное действие браузера
        // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
        e.preventDefault();

        // игнорируем создание элемента, если пользователь ничего не ввел в поле
        if (!todoItemForm.input.value) {
            return;
        };

        let newItem = {
            id: getNewId(listArray),
            name: todoItemForm.input.value,
            done: false
        }
       
        // Создаем новое дело с текстом, введенным пользователем
        let todoItems = createtodoItems(newItem);

        listArray.push(newItem)

        saveList(listArray, listName)
        // создаем и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItems.item);

        todoItemForm.button.disabled = true;

        // обнуляем значение в поле, чтобы не пришлось стирать его вручную
        todoItemForm.input.value = ``;

        let addButton = todoItemForm.button;
        addButton.disabled = true;

        // Добавляем обработчик события ввода текста в поле ввода
        todoItemForm.input.addEventListener('input', function() {
        // Если поле ввода пустое, устанавливаем disabled, иначе снимаем disabled
        addButton.disabled = todoItemForm.input.value.trim() === '';
        });
        });
    }
    window.createtodoApp = createtodoApp;
}) ();