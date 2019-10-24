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
            <div>Create a TODO
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Title: &nbsp;
                        <input type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}/>
                    </label>
                    <br />
                    <label>Body: &nbsp;
                        <input type="text"
                        value={this.state.body}
                        onChange={this.updateBody}/>
                    </label>
                    <br />
                    <input type="submit" value="let's get life together!"/>
                </form>
            </div>
        )
    }
};

export default TodoForm;