import './style.css';
import addItem from './modules/addItem.js';
import deleted from './modules/delete.js';
import taskfinish from './modules/task.js';
import {
  addlist, getlist, removelist, updatelist,
} from './modules/store.js';

const display = () => {
  const todos = getlist() || [];
  if (todos) {
    todos.map((todo) => addTodoItem(todo));
  }
};

display();
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getlist();
  const todoInput = document.getElementById('task').value;
  const todoTask = {
    index: todos.length,
    description: todoInput,
    completed: false,
  };

  if (todoInput !== '') {
    addItem(todoTask);
    addlist(todoTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((todo, index) => {
  todo.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const todos = getlist();
    todos[index].description = updateInput;
    updatelist(index, todos[index].description);
    window.location.reload();
  });
});
inputField.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const todos = getlist();
      todos[index].desciption = updateInput;
      updatelist(index, todos[index].description);
      window.location.reload();
    }
  });
});

window.remove = (index) => {
  deleted(index);
  removelist(index);
};

window.completedTodo = (index) => {
  taskfinish(index);
};

document.getElementById('allCom').addEventListener('click', () => {
  const todos = getTodo();
  const allCom = todos.filter((todo) => !todo.completed);
  allCom.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(allCom));
  window.location.reload();
});
