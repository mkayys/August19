export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
});

const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});

