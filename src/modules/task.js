class DoTask {
  constructor(description, storageType = 'local') {
    this.storage = storageType === 'session' ? sessionStorage : localStorage;
    this.tasks = JSON.parse(this.storage.getItem('toDoList')) || [];
    this.index = null;
    this.completed = false;
    this.description = description;
  }

  addData(description) {
    const newIndex = this.tasks.length + 1;
  this.tasks.push({
    index: newIndex,
      description,
      completed: false,
    });
    this.updateStorage();
  }

  updateComplete(updateArray) {
    this.storage.setItem('toDoList', JSON.stringify(updateArray));
    this.updateStorage();
  }

  removeData(indexRem) {
    for (let i = this.tasks.length - 1; i >= 0; i -= 1) {
      const currentObject = this.tasks[i];
      if (indexRem.includes(currentObject.index)) {
        this.tasks.splice(i, 1);
      }
    }
    for (let s = 0; s < this.tasks.length; s += 1) {
      this.tasks[s].index = s + 1;
    }
    this.updateStorage();
  }

  updateStorage() {
    this.storage.setItem('toDoList', JSON.stringify(this.tasks));
  }

  editStorage(index, description) {
    const objects = this.tasks;
    const objectToUpdate = objects.find((obj) => obj.index === index);
    objectToUpdate.description = description;
    this.updateComplete(objects);
  }
}

export default DoTask;