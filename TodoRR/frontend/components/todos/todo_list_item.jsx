import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     todo: this.props.todo
        // }
        this.updateStatus = this.updateStatus.bind(this);
    }

    deleteTodo(todo) {
        return (e) => {
            this.props.removeTodo(todo)
        }
    }

    updateStatus(e) {
        const done = this.props.todo.done ? false : true;

        console.log(done)
        const todo = Object.assign({}, this.props.todo, { done });

        this.props.receiveTodo(todo);
    }

    render() {
        return (
            <div className="todo-item">
                {this.props.todo.title}
                <button onClick={this.deleteTodo(this.props.todo)}>BE GONE!</button>
                <input type="checkbox" onClick={this.updateStatus} />
            </div>
        )
    }
};

export default TodoListItem;