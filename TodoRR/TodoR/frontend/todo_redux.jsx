import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import App from './components/app';
import Root from './components/root';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const store = configureStore();

    window.store = store;

    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;

    window.allTodos = allTodos;

    ReactDOM.render(<Root store={store} />, content);
})