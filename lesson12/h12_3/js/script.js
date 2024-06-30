window.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add");
    let deleteButton = document.querySelector(".delete");
    const input = document.getElementById("new-todo");
    const listOfTodos = document.getElementById('todo-list');

    addButton.addEventListener('click', function (event) {
        console.log(input.value);
        event.preventDefault();
        addToDo(input.value, listOfTodos);
    });
});

function addToDo(task, parent) {
    task = task.trim();
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const todoP = document.createElement('p');
    todoP.textContent = task;
    delButton.textContent = '❌';
    delButton.classList.add('delete');
    delButton.addEventListener('click', function (event) {
        this.parentElement.remove();
    });

    li.appendChild(todoP);
    li.appendChild(delButton);
    parent.appendChild(li);
}