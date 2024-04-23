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

// Query the DOM elements
var block = document.querySelector('.block');
var line = document.querySelector('.line');
var btn = document.querySelector('.gameBtn');
var btnStart = document.querySelector('.start');
var num = document.querySelector('p');
var game = document.querySelector('.game');
// Event listener for the start button
btnStart === null || btnStart === void 0 ? void 0 : btnStart.addEventListener('click', function () {
    setTimeout(function () {
        game.style.display = 'block';
    }, 1000);
    btnStart.style.display = 'none';
});
// Event listener for the game button
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
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
});
// Game loop
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
            btnStart.style.display = 'block';
        }
    }
}, 10);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUN4QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksUUFBUSxHQUFHLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNsRCxLQUFLLENBQUMsc0RBQVksR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFdBQVcsQ0FBRSxDQUFDLENBQUM7WUFDdEMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDNUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9zdHlsZXMxLnNjc3M/NmRjOSIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzMS5zY3NzJztcclxuXHJcblxyXG50eXBlIEhUTUxFbGVtZW50V2l0aENsYXNzID0gSFRNTEVsZW1lbnQgJiB7IGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0IH07XHJcbi8vIFF1ZXJ5IHRoZSBET00gZWxlbWVudHNcclxuY29uc3QgYmxvY2s6IEhUTUxFbGVtZW50V2l0aENsYXNzIHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jaycpO1xyXG5jb25zdCBsaW5lOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZScpO1xyXG5jb25zdCBidG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lQnRuJyk7XHJcbmNvbnN0IGJ0blN0YXJ0OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuY29uc3QgbnVtOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcbmNvbnN0IGdhbWU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgdGhlIHN0YXJ0IGJ1dHRvblxyXG5idG5TdGFydD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBnYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBidG5TdGFydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZ2FtZSBidXR0b25cclxuYnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChudW0pIHtcclxuICAgICAgICBudW0udGV4dENvbnRlbnQgPSAoTnVtYmVyKG51bS50ZXh0Q29udGVudCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrICYmICFibG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2p1bXAnKSkge1xyXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2p1bXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnanVtcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDgwMCk7XHJcblxyXG4gICAgaWYgKG51bSAmJiBOdW1iZXIobnVtLnRleHRDb250ZW50KSA+PSA1ICYmIE51bWJlcihudW0udGV4dENvbnRlbnQpIDw9IDEwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya0JsdWUnO1xyXG4gICAgICAgIGxpbmUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnMnMnO1xyXG4gICAgfSBlbHNlIGlmIChudW0gJiYgTnVtYmVyKG51bS50ZXh0Q29udGVudCkgPiAxMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcbiAgICAgICAgbGluZS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9ICcxcyc7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gR2FtZSBsb29wXHJcbmNvbnN0IGlzQWxpdmUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoYmxvY2sgJiYgbGluZSkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrVG9wID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYmxvY2spLmdldFByb3BlcnR5VmFsdWUoXCJ0b3BcIikpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVMZWZ0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGluZSkuZ2V0UHJvcGVydHlWYWx1ZShcImxlZnRcIikpO1xyXG4gICAgICAgIGlmIChsaW5lTGVmdCA8IDQwICYmIGxpbmVMZWZ0ID4gMCAmJiBibG9ja1RvcCA+PSAxMCkge1xyXG4gICAgICAgICAgICBhbGVydChg0JLQsNGIINGB0YfQtdGCICR7bnVtPy50ZXh0Q29udGVudH1gKTtcclxuICAgICAgICAgICAgbnVtLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgIGxpbmUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnM3MnO1xyXG4gICAgICAgICAgICBnYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGJ0blN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSwgMTApO1xyXG4gICAgICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==