const todos = [];

const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

const addTodo = function(e) {
    e.preventDefault();
    // debugger
    const inputVal = document.querySelector('input[type=text]').value;
    let todo = {
        text: inputVal,
        done: false
    }

    todos.push(todo);

    populateList(todos);
    document.querySelector('input[type=text]').value = "";
};

const populateList = function(todos) {
    todos.map((todo) => {
        let li = document.createElement('li');
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";
        label.innerHTML = todo.text;
        label.appendChild(input);
        li.appendChild(label);
        // return `<li>
        //     <label>${todo.text}
        //         <input type="checkbox" />
        //     </label>
        // </li>`
        ul.appendChild(li);
    });
    // debugger
    // todosArr.forEach(todo => ul.appendChild(todo));
};

form.addEventListener('submit', addTodo);