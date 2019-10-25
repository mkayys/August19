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
                <TodoListItem key={todo.id} todo={todo}
                receiveTodo={this.props.receiveTodo}
                removeTodo={this.props.removeTodo} />
            )
        })
        return (
            <div className='todos-and-form'>
                <div className="todo-list">You can do it! 💫
                    <ul>
                        {todos}
                    </ul>
                </div>
                
                <TodoForm receiveTodo={this.props.receiveTodo}/>
            </div>
        )
    }
};

export default TodoList;