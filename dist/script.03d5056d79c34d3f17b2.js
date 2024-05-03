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
//const btn: HTMLElement | null = document.querySelector('.gameBtn');
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('.start');
var num = document.querySelector('.check');
var game = document.querySelector('.game');
var gamerText = document.querySelector('.gamer-text');
var gamerInput = document.querySelector('.gamer');
function gameLogic() {
    function playersRecord() {
        gamerInput.addEventListener('change', function () {
            gamerText.textContent = gamerInput.value;
        });
    }
    playersRecord();
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
                document.body.classList.add('levelThree');
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
                document.body.classList.remove('levelThree');
                line.style.animationDuration = '3s';
                game.style.display = 'none';
                startBlock.style.display = 'flex';
            }
        }
    }, 10);
}
gameLogic();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LjAzZDUwNTZkNzljMzRkM2YxN2IyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053QjtBQUl4QixJQUFNLEtBQUssR0FBZ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RSxJQUFNLElBQUksR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRSxxRUFBcUU7QUFDckUsSUFBTSxVQUFVLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUUsSUFBTSxRQUFRLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEUsSUFBTSxHQUFHLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakUsSUFBTSxJQUFJLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkUsSUFBTSxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckUsSUFBTSxVQUFVLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFJdEUsU0FBUyxTQUFTO0lBRWQsU0FBUyxhQUFhO1FBQ2xCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDbEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzdDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxhQUFhLEVBQUU7SUFHZixRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2hDLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFHSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVMsS0FBb0I7UUFFOUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBRXpCLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVELFVBQVUsQ0FBQztnQkFDUCxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRVIsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDeEMsQ0FBQztpQkFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLENBQUM7UUFFTCxDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7SUFNSCxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7WUFDaEIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ2xELEtBQUssQ0FBQyxzREFBWSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUMsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDNUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRVgsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9zdHlsZXMxLnNjc3M/NmRjOSIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzMS5zY3NzJztcclxuXHJcblxyXG50eXBlIEhUTUxFbGVtZW50V2l0aENsYXNzID0gSFRNTEVsZW1lbnQgJiB7IGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0IH07XHJcbmNvbnN0IGJsb2NrOiBIVE1MRWxlbWVudFdpdGhDbGFzcyB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2snKTtcclxuY29uc3QgbGluZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUnKTtcclxuLy9jb25zdCBidG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lQnRuJyk7XHJcbmNvbnN0IHN0YXJ0QmxvY2s6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1ibG9jaycpO1xyXG5jb25zdCBidG5TdGFydDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbmNvbnN0IG51bTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XHJcbmNvbnN0IGdhbWU6IEhUTUxFbGVtZW50V2l0aENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcclxuY29uc3QgZ2FtZXJUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lci10ZXh0Jyk7XHJcbmNvbnN0IGdhbWVySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZXInKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvZ2ljKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheWVyc1JlY29yZCgpeyBcclxuICAgICAgICBnYW1lcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XHJcbiAgICAgICAgICAgIGdhbWVyVGV4dC50ZXh0Q29udGVudCA9IGdhbWVySW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHBsYXllcnNSZWNvcmQoKVxyXG5cclxuXHJcbiAgICBidG5TdGFydD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgc3RhcnRCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJykge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChudW0pIHtcclxuICAgICAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IChOdW1iZXIobnVtLnRleHRDb250ZW50KSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJsb2NrICYmICFibG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2p1bXAnKSkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnanVtcCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnanVtcCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobnVtICYmIE51bWJlcihudW0udGV4dENvbnRlbnQpID49IDUgJiYgTnVtYmVyKG51bS50ZXh0Q29udGVudCkgPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RhcmtCbHVlJztcclxuICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnMnMnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bSAmJiBOdW1iZXIobnVtLnRleHRDb250ZW50KSA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xldmVsVGhyZWUnKTtcclxuICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnMXMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGlzQWxpdmUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJsb2NrICYmIGxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2tUb3AgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShibG9jaykuZ2V0UHJvcGVydHlWYWx1ZShcInRvcFwiKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVMZWZ0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGluZSkuZ2V0UHJvcGVydHlWYWx1ZShcImxlZnRcIikpO1xyXG4gICAgICAgICAgICBpZiAobGluZUxlZnQgPCA0MCAmJiBsaW5lTGVmdCA+IDAgJiYgYmxvY2tUb3AgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGDQktCw0Ygg0YHRh9C10YIgJHtudW0/LnRleHRDb250ZW50fWApO1xyXG4gICAgICAgICAgICAgICAgbnVtLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsZXZlbFRocmVlJyk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJzNzJztcclxuICAgICAgICAgICAgICAgIGdhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHN0YXJ0QmxvY2suc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgXHJcbn1cclxuXHJcbmdhbWVMb2dpYygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=