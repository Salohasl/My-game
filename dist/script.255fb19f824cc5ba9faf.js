/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles1.scss":
/*!**************************!*\
  !*** ./src/styles1.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles1_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles1.scss */ "./src/styles1.scss");

var block = document.querySelector('.block');
var line = document.querySelector('.line');
var btn = document.querySelector('.gameBtn');
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('.start');
var num = document.querySelector('p');
var game = document.querySelector('.game');
btnStart === null || btnStart === void 0 ? void 0 : btnStart.addEventListener('click', function () {
    setTimeout(function () {
        game.style.display = 'block';
    }, 1000);
    startBlock.style.display = 'none';
});
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        if (num) {
            num.textContent = (Number(num.textContent) + 1).toString();
        }
        if (block && !block.classList.contains('jump')) {
            block.classList.add('jump');
        }
        setTimeout(function () {
            if (block) {
                block.classList.remove('jump');
            }
        }, 800);
        if (num && Number(num.textContent) >= 5 && Number(num.textContent) <= 10) {
            document.body.style.backgroundColor = 'darkBlue';
            line.style.animationDuration = '2s';
        }
        else if (num && Number(num.textContent) > 10) {
            document.body.style.backgroundColor = 'yellow';
            line.style.animationDuration = '1s';
        }
    }
});
var isAlive = setInterval(function () {
    if (block && line) {
        var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        var lineLeft = parseInt(window.getComputedStyle(line).getPropertyValue("left"));
        if (lineLeft < 40 && lineLeft > 0 && blockTop >= 10) {
            alert("\u0412\u0430\u0448 \u0441\u0447\u0435\u0442 ".concat(num === null || num === void 0 ? void 0 : num.textContent));
            num.textContent = '0';
            document.body.style.backgroundColor = 'black';
            line.style.animationDuration = '3s';
            game.style.display = 'none';
            startBlock.style.display = 'flex';
        }
    }
}, 10);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUM7QUFNSCxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFLENBQUM7WUFDbEQsS0FBSyxDQUFDLHNEQUFZLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxXQUFXLENBQUUsQ0FBQyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc3R5bGVzMS5zY3NzPzZkYzkiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlczEuc2Nzcyc7XHJcblxyXG5cclxudHlwZSBIVE1MRWxlbWVudFdpdGhDbGFzcyA9IEhUTUxFbGVtZW50ICYgeyBjbGFzc0xpc3Q6IERPTVRva2VuTGlzdCB9O1xyXG5jb25zdCBibG9jazogSFRNTEVsZW1lbnRXaXRoQ2xhc3MgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrJyk7XHJcbmNvbnN0IGxpbmU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XHJcbmNvbnN0IGJ0bjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVCdG4nKTtcclxuY29uc3Qgc3RhcnRCbG9jazogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJsb2NrJyk7XHJcbmNvbnN0IGJ0blN0YXJ0OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuY29uc3QgbnVtOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcbmNvbnN0IGdhbWU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XHJcblxyXG5cclxuYnRuU3RhcnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZ2FtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgc3RhcnRCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJykge1xyXG5cclxuICAgICAgICBpZiAobnVtKSB7XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IChOdW1iZXIobnVtLnRleHRDb250ZW50KSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9jayAmJiAhYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdqdW1wJykpIHtcclxuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnanVtcCcpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2p1bXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICBcclxuICAgICAgICBpZiAobnVtICYmIE51bWJlcihudW0udGV4dENvbnRlbnQpID49IDUgJiYgTnVtYmVyKG51bS50ZXh0Q29udGVudCkgPD0gMTApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya0JsdWUnO1xyXG4gICAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJzJzJztcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSAmJiBOdW1iZXIobnVtLnRleHRDb250ZW50KSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcbiAgICAgICAgICAgIGxpbmUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnMXMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgIFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBpc0FsaXZlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgaWYgKGJsb2NrICYmIGxpbmUpIHtcclxuICAgICAgICBjb25zdCBibG9ja1RvcCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJsb2NrKS5nZXRQcm9wZXJ0eVZhbHVlKFwidG9wXCIpKTtcclxuICAgICAgICBjb25zdCBsaW5lTGVmdCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLmdldFByb3BlcnR5VmFsdWUoXCJsZWZ0XCIpKTtcclxuICAgICAgICBpZiAobGluZUxlZnQgPCA0MCAmJiBsaW5lTGVmdCA+IDAgJiYgYmxvY2tUb3AgPj0gMTApIHtcclxuICAgICAgICAgICAgYWxlcnQoYNCS0LDRiCDRgdGH0LXRgiAke251bT8udGV4dENvbnRlbnR9YCk7XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJzNzJztcclxuICAgICAgICAgICAgZ2FtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzdGFydEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59LCAxMCk7XHJcbiAgICAgICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9