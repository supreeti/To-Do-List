(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/action.png":
/*!************************!*\
  !*** ./src/action.png ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_delete_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.png */ "./src/action.png");
/* harmony import */ var _action_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_action_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _refresh_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh.png */ "./src/refresh.png");
/* harmony import */ var _refresh_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_refresh_png__WEBPACK_IMPORTED_MODULE_4__);






const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');

const task = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  updateCompleted(index, completed) {
    const objects = this.tasks;
    const objectToUpdate = objects.find((obj) => obj.index === index);
    objectToUpdate.completed = completed;
    this.updateComplete(objects);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoTask);

/***/ }),

/***/ "./src/refresh.png":
/*!*************************!*\
  !*** ./src/refresh.png ***!
  \*************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUI7QUFDa0I7QUFDakI7QUFDQTtBQUNDOztBQUV2QjtBQUNBOztBQUVBLGlCQUFpQix3REFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZUFBZTtBQUM3RSxrQ0FBa0MsTUFBTSxHQUFHLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHFCQUFxQixRQUFRLGVBQWU7QUFDMUcsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZUFBZTtBQUM3RSxpREFBaUQsTUFBTSxHQUFHLHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHFCQUFxQixRQUFRLGVBQWU7QUFDMUcsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERvVGFzayBmcm9tICcuL21vZHVsZXMvdGFzay5qcyc7XG5pbXBvcnQgJy4vZGVsZXRlLnBuZyc7XG5pbXBvcnQgJy4vYWN0aW9uLnBuZyc7XG5pbXBvcnQgJy4vcmVmcmVzaC5wbmcnO1xuXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBpbnB1dERvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taW5wdXQnKTtcblxuY29uc3QgdGFzayA9IG5ldyBEb1Rhc2soKTtcbmNvbnN0IHVwZGF0ZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGNvbnN0IHRhc2tzID0gc3RvcmVkVGFza3MgfHwgdGFzay50YXNrcztcbiAgbGV0IGh0bWwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLnRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRhc2tzW2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGV0YWlsXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIml0ZW0tY2hlY2tcIiBpZD1cIiR7dGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyXCI+JHtpICsgMX0uJHt0YXNrc1tpXS5kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hY3Rpb24ucG5nXCIgIGFsdD1cIlwiIGNsYXNzPVwiZG90XCIgZGlzYWJsZWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWVkaXRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveC1lZGl0XCIgaWQ9XCJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIml0ZW0taW5wdXQtZWRpdFwiIHZhbHVlPVwiJHt0YXNrc1tpXS5kZXNjcmlwdGlvbn1cIiBpZD1cIiR7dGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2RlbGV0ZS5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImRlbGV0ZS1pdGVtXCIgaWQ9XCIke3Rhc2tzW2ldLmluZGV4fVwiPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGV0YWlsXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIml0ZW0tY2hlY2tcIiBpZD1cIiR7dGFza3NbaV0uaW5kZXh9XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3Igc3RyaWtlLXRocm91Z2hcIj4ke2kgKyAxfS4ke3Rhc2tzW2ldLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2FjdGlvbi5wbmdcIiAgYWx0PVwiXCIgY2xhc3M9XCJkb3RcIiBkaXNhYmxlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZWRpdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94LWVkaXRcIiBpZD1cIlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXRlbS1pbnB1dC1lZGl0XCIgdmFsdWU9XCIke3Rhc2tzW2ldLmRlc2NyaXB0aW9ufVwiIGlkPVwiJHt0YXNrc1tpXS5pbmRleH1cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vZGVsZXRlLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwiZGVsZXRlLWl0ZW1cIiBpZD1cIiR7dGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICB9XG4gIH1cbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JheScpO1xuICBjb25zdCBhbGxBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG4gIGNvbnN0IG1haW5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tZWRpdCcpO1xuICBjb25zdCBtYWluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWl0ZW0nKTtcbiAgYWxsQWN0aW9uLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWluRWRpdFtpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBtYWluSXRlbVtpbmRleF0uY2xhc3NMaXN0LmFkZCgnbm8tYWN0aXZlJyk7XG4gICAgfSk7XG59KTtcbn07XG5jb25zdCBhZGREYXRhID0gKGRhdGEpID0+IHtcbiAgdGFzay5hZGREYXRhKGRhdGEpO1xuICB1cGRhdGVEYXRhKCk7XG59O1xuXG5pbnB1dERvLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZERhdGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcicpO1xuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG15TmV3QXJyYXkgPSB0YXNrLnRhc2tzO1xuICBjb25zdCBuZXdJbmRleFRvUmVtb3ZlID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbXlOZXdBcnJheS5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGlmIChteU5ld0FycmF5W2tdLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgaW5kZXhSZW0gPSBwYXJzZUludChteU5ld0FycmF5W2tdLmluZGV4LCAxMCk7XG4gICAgICBuZXdJbmRleFRvUmVtb3ZlLnB1c2goaW5kZXhSZW0pO1xuICAgIH1cbiAgfVxuICB0YXNrLnJlbW92ZURhdGEobmV3SW5kZXhUb1JlbW92ZSk7XG4gIHVwZGF0ZURhdGEoKTtcbn0pO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4gdXBkYXRlRGF0YSgpOyIsImNsYXNzIERvVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBzdG9yYWdlVHlwZSA9ICdsb2NhbCcpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlVHlwZSA9PT0gJ3Nlc3Npb24nID8gc2Vzc2lvblN0b3JhZ2UgOiBsb2NhbFN0b3JhZ2U7XG4gICAgdGhpcy50YXNrcyA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpIHx8IFtdO1xuICAgIHRoaXMuaW5kZXggPSBudWxsO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWRkRGF0YShkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy50YXNrcy5sZW5ndGggKyAxO1xuICAgIHRoaXMudGFza3MucHVzaCh7XG4gICAgICBpbmRleDogbmV3SW5kZXgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gIH1cblxuICByZW1vdmVEYXRhKGluZGV4UmVtKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMudGFza3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSB0aGlzLnRhc2tzW2ldO1xuICAgICAgaWYgKGluZGV4UmVtLmluY2x1ZGVzKGN1cnJlbnRPYmplY3QuaW5kZXgpKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHRoaXMudGFza3MubGVuZ3RoOyBzICs9IDEpIHtcbiAgICAgIHRoaXMudGFza3Nbc10uaW5kZXggPSBzICsgMTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gIH1cblxuICB1cGRhdGVTdG9yYWdlKCkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgfVxuXG4gIGVkaXRTdG9yYWdlKGluZGV4LCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLnRhc2tzO1xuICAgIGNvbnN0IG9iamVjdFRvVXBkYXRlID0gb2JqZWN0cy5maW5kKChvYmopID0+IG9iai5pbmRleCA9PT0gaW5kZXgpO1xuICAgIG9iamVjdFRvVXBkYXRlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZShvYmplY3RzKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbXBsZXRlZChpbmRleCwgY29tcGxldGVkKSB7XG4gICAgY29uc3Qgb2JqZWN0cyA9IHRoaXMudGFza3M7XG4gICAgY29uc3Qgb2JqZWN0VG9VcGRhdGUgPSBvYmplY3RzLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBpbmRleCk7XG4gICAgb2JqZWN0VG9VcGRhdGUuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUob2JqZWN0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9UYXNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==