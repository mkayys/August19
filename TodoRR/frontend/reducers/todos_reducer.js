import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODO:
            return nextState[action.todo.id] = action.todo;
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default:
            return state;
    }
};

export default todosReducer;