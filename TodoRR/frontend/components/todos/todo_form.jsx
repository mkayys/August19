import React from 'react';
import { doesNotReject } from 'assert';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done: false
        }
    }

    render() {
        return (
            <div>Create a TODO
                <form>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
};

export default TodoForm;