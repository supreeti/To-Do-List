import { getTodo } from './storeTodo.js';

const taskCompleted = (index) => {
  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');
  const todos = getTodo();

  todos[index].completed = completed;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default taskCompleted;