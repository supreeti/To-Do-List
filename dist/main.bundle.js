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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_delete_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.png */ "./src/action.png");
/* harmony import */ var _action_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_action_png__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './refresh.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');

const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNVO0FBQ1Q7QUFDQTtBQUNDOztBQUV2QjtBQUNBOztBQUVBLGlCQUFpQixnREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZUFBZTtBQUM3RSxrQ0FBa0MsTUFBTSxHQUFHLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHFCQUFxQixRQUFRLGVBQWU7QUFDMUcsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZUFBZTtBQUM3RSxpREFBaUQsTUFBTSxHQUFHLHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHFCQUFxQixRQUFRLGVBQWU7QUFDMUcsbUVBQW1FLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBEb1Rhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCAnLi9kZWxldGUucG5nJztcbmltcG9ydCAnLi9hY3Rpb24ucG5nJztcbmltcG9ydCAnLi9yZWZyZXNoLnBuZyc7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbmNvbnN0IGlucHV0RG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1pbnB1dCcpO1xuXG5jb25zdCB0YXNrID0gbmV3IERvVGFzaygpO1xuY29uc3QgdXBkYXRlRGF0YSA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgY29uc3QgdGFza3MgPSBzdG9yZWRUYXNrcyB8fCB0YXNrLnRhc2tzO1xuICBsZXQgaHRtbCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGFza3NbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVja1wiIGlkPVwiJHt0YXNrc1tpXS5pbmRleH1cIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZGVzY3JcIj4ke2kgKyAxfS4ke3Rhc2tzW2ldLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2FjdGlvbi5wbmdcIiAgYWx0PVwiXCIgY2xhc3M9XCJkb3RcIiBkaXNhYmxlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZWRpdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94LWVkaXRcIiBpZD1cIlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXRlbS1pbnB1dC1lZGl0XCIgdmFsdWU9XCIke3Rhc2tzW2ldLmRlc2NyaXB0aW9ufVwiIGlkPVwiJHt0YXNrc1tpXS5pbmRleH1cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vZGVsZXRlLnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwiZGVsZXRlLWl0ZW1cIiBpZD1cIiR7dGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVja1wiIGlkPVwiJHt0YXNrc1tpXS5pbmRleH1cIiBjaGVja2VkPlxuICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJkZXNjciBzdHJpa2UtdGhyb3VnaFwiPiR7aSArIDF9LiR7dGFza3NbaV0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYWN0aW9uLnBuZ1wiICBhbHQ9XCJcIiBjbGFzcz1cImRvdFwiIGRpc2FibGVkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1lZGl0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3gtZWRpdFwiIGlkPVwiXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpdGVtLWlucHV0LWVkaXRcIiB2YWx1ZT1cIiR7dGFza3NbaV0uZGVzY3JpcHRpb259XCIgaWQ9XCIke3Rhc2tzW2ldLmluZGV4fVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9kZWxldGUucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJkZWxldGUtaXRlbVwiIGlkPVwiJHt0YXNrc1tpXS5pbmRleH1cIj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuICAgIH1cbiAgfVxuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1ncmF5Jyk7XG4gIGNvbnN0IGFsbEFjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcbiAgY29uc3QgbWFpbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1lZGl0Jyk7XG4gIGNvbnN0IG1haW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4taXRlbScpO1xuICBhbGxBY3Rpb24uZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1haW5FZGl0W2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIG1haW5JdGVtW2luZGV4XS5jbGFzc0xpc3QuYWRkKCduby1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgYWRkRGF0YSA9IChkYXRhKSA9PiB7XG4gIHRhc2suYWRkRGF0YShkYXRhKTtcbiAgdXBkYXRlRGF0YSgpO1xufTtcblxuaW5wdXREby5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGREYXRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBteU5ld0FycmF5ID0gdGFzay50YXNrcztcbiAgY29uc3QgbmV3SW5kZXhUb1JlbW92ZSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IG15TmV3QXJyYXkubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBpZiAobXlOZXdBcnJheVtrXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGluZGV4UmVtID0gcGFyc2VJbnQobXlOZXdBcnJheVtrXS5pbmRleCwgMTApO1xuICAgICAgbmV3SW5kZXhUb1JlbW92ZS5wdXNoKGluZGV4UmVtKTtcbiAgICB9XG4gIH1cbiAgdGFzay5yZW1vdmVEYXRhKG5ld0luZGV4VG9SZW1vdmUpO1xuICB1cGRhdGVEYXRhKCk7XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHVwZGF0ZURhdGEoKTsiLCJjbGFzcyBEb1Rhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgc3RvcmFnZVR5cGUgPSAnbG9jYWwnKSB7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZVR5cGUgPT09ICdzZXNzaW9uJyA/IHNlc3Npb25TdG9yYWdlIDogbG9jYWxTdG9yYWdlO1xuICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKSB8fCBbXTtcbiAgICB0aGlzLmluZGV4ID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGFkZERhdGEoZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMudGFza3MubGVuZ3RoICsgMTtcbiAgICB0aGlzLnRhc2tzLnB1c2goe1xuICAgICAgaW5kZXg6IG5ld0luZGV4LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgcmVtb3ZlRGF0YShpbmRleFJlbSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnRhc2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50T2JqZWN0ID0gdGhpcy50YXNrc1tpXTtcbiAgICAgIGlmIChpbmRleFJlbS5pbmNsdWRlcyhjdXJyZW50T2JqZWN0LmluZGV4KSkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcyA9IDA7IHMgPCB0aGlzLnRhc2tzLmxlbmd0aDsgcyArPSAxKSB7XG4gICAgICB0aGlzLnRhc2tzW3NdLmluZGV4ID0gcyArIDE7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgdXBkYXRlU3RvcmFnZSgpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gIH1cblxuICBlZGl0U3RvcmFnZShpbmRleCwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBvYmplY3RzID0gdGhpcy50YXNrcztcbiAgICBjb25zdCBvYmplY3RUb1VwZGF0ZSA9IG9iamVjdHMuZmluZCgob2JqKSA9PiBvYmouaW5kZXggPT09IGluZGV4KTtcbiAgICBvYmplY3RUb1VwZGF0ZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudXBkYXRlQ29tcGxldGUob2JqZWN0cyk7XG4gIH1cblxuICB1cGRhdGVDb21wbGV0ZWQoaW5kZXgsIGNvbXBsZXRlZCkge1xuICAgIGNvbnN0IG9iamVjdHMgPSB0aGlzLnRhc2tzO1xuICAgIGNvbnN0IG9iamVjdFRvVXBkYXRlID0gb2JqZWN0cy5maW5kKChvYmopID0+IG9iai5pbmRleCA9PT0gaW5kZXgpO1xuICAgIG9iamVjdFRvVXBkYXRlLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlKG9iamVjdHMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=