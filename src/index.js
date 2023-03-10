import './style.css';
import DoTask from './modules/task.js';
import './delete.png';
import './action.png';
import './refresh.png';

const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');

const task = new DoTask();
const updateData = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  const tasks = storedTasks || task.tasks;
  let html = '';
  for (let i = 0; i < task.tasks.length; i += 1) {
    if (tasks[i].completed === false) {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${tasks[i].index}">
              <h5 class="descr">${i + 1}.${tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="">
          <input type="text" class="item-input-edit" value="${tasks[i].description}" id="${tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${tasks[i].index}">
      </div>
  </div>`;
    } else {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${tasks[i].index}" checked>
              <h5 class="descr strike-through">${i + 1}.${tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="">
          <input type="text" class="item-input-edit" value="${tasks[i].description}" id="${tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${tasks[i].index}">
      </div>
  </div>`;
    }
  }
  listContainer.innerHTML = html;
  listContainer.classList.add('text-gray');
  const allAction = document.querySelectorAll('.dot');
  const mainEdit = document.querySelectorAll('.main-edit');
  const mainItem = document.querySelectorAll('.main-item');
    allAction.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      mainEdit[index].classList.add('active');
      mainItem[index].classList.add('no-active');
    });
  });   
};
const addData = (data) => {
  task.addData(data);
  updateData();
};

inputDo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addData(event.target.value);
    event.target.value = '';
  }
});
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const myNewArray = task.tasks;
  const newIndexToRemove = [];
  for (let k = 0; k < myNewArray.length; k += 1) {
    if (myNewArray[k].completed === true) {
      const indexRem = parseInt(myNewArray[k].index, 10);
      newIndexToRemove.push(indexRem);
    }
  }
  task.removeData(newIndexToRemove);
  updateData();
});

window.onload = () => updateData();