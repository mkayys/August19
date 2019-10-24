import React from 'react';
import TodoListItem from './todo_list_item';

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
            </div>
        )
    }
};

export default TodoList;