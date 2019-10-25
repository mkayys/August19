export const allTodos = function(state) {
    let todoArr = Object.values(state.todos);
    return todoArr;
};