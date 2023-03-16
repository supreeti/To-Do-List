const getlist = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

const addlist = (todo) => {
  const todos = getlist();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removelist = (index) => {
  const todos = getlist();
  const deletedTodos = todos.filter((todo) => todo.index !== index);
  deletedTodos.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(deletedTodos));
  window.location.reload();
};

const updatelist = (index, description) => {
  const todos = getlist();
  const todo = todos.find((todoTask) => todoTask.index === index);
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  getlist, addlist, removelist, updatelist,
};