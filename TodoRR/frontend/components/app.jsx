import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const App = () => {
    return (
        <div className="main-page">
            <div className='app-name'>Carpe Diem</div>
            <TodoListContainer />
        </div>
    )
}


export default App;