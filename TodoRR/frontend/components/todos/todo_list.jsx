import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// export default () => (<h1>Todo</h1>)

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todos.map(todo => {
            return (
                <TodoListItem key={todo.id} todo={todo} />
            )
        })
        return (
            <div>
                <div>Todo List</div>
                <ul>
                    {todos}
                </ul>
                <div><TodoForm /></div>
            </div>
        )
    }
};

export default TodoList;