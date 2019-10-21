const todos = [];

const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

const addTodo = function(e) {
    const inputVal = document.querySelector('input[type=tex]').value;
    let todo = {
        text: inputVal,
        done: false
    }

    todos.push(todo);

    document.querySelector('input[type=tex]').value = "";
};

const populateList = function(todos) {
    const todosArr = todos.map((todo) => {
        return `<li>
            <label>${todo.text}
                <input type="checkbox" />
            </label>
        </li>`
    });
    todosArr.forEach(todo => ul.appendChild(todo));
};