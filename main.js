/*Доробити TODO лист, в якому буде можливість:

1. Додати завдання
2. Видалити завдання
3. Відзначити як виконану
4. Усі дані повинні зберегтися після перезавантаження сторінки.
*/

//form
const form = document.querySelector('.js--form');

//input area
const userInputTask = document.querySelector('.js--form__input');

//buttons const
const buttonTask = document.querySelector('.form__btn');

//list area
const ul = document.querySelector('.js--todos-wrapper');
const li = document.querySelector('.todo-item');

//span
const todoitemdescription = document.querySelectorAll('.todo-item__description');

//last li area 
const todoitemchecked = document.querySelector('todo-item--checked');




buttonTask.addEventListener('click', function () {
    if (userInputTask.value.trim() === "") {
        alert('sorry you have empty task fild');
        return;
    } 
    const userTaskText = userInputTask.value;

    const newLi = document.createElement('li');
        newLi.classList.add('todo-item');
    const newDoneInput = document.createElement('input');
        newDoneInput.type = "checkbox";
    const newSpan = document.createElement('span');
        newSpan.classList.add('todo-item__description');
        newSpan.textContent = userTaskText;
    const newButton = document.createElement('button');
        newButton.classList.add('todo-item__delete');
        newButton.textContent = "Видалити";
        
        
        newLi.appendChild(newDoneInput);
        newLi.appendChild(newSpan);
        newLi.appendChild(newButton);

        newButton.addEventListener('click', () => {
            newLi.remove();
        });

        document.querySelector('ul').appendChild(newLi);
});


document.querySelectorAll('.todo-item__delete').forEach(button => {
    button.addEventListener('click', function(event) {
        const taskDelete = event.target.closest('.todo-item');
        if (taskDelete) {
            taskDelete.remove();
        }
    })
}) 