const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: Math.random(),
});

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
