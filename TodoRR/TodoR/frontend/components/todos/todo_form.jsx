import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        // debugger;
        this.setState({ title: e.currentTarget.value })
    }

    updateBody(e) {
        this.setState({ body: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);

        this.setState({
            id: uniqueId(),
            title: '',
            body: ''
        });
    }

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create a To Do Item:</legend>
                        Title: &nbsp;
                        <br />
                            <input type="text"
                            value={this.state.title}
                            onChange={this.updateTitle}/>
                        
                        <br />
                        Body: &nbsp;
                        <br />
                            <input type="text"
                            value={this.state.body}
                            onChange={this.updateBody}/>
                        
                        <br />
                        <input type="submit" value="let's get life together!"/>
                    </fieldset>
                </form>
            </div>
        )
    }
};

export default TodoForm;