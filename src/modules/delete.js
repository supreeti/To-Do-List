const deleted = (index) => {
  const todoIndex = document.getElementById(`todo${index}`);
  if (todoIndex !== null) {
    todoIndex.remove();
  }
};

export default deleted;