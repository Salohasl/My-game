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
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('.start');
var num = document.querySelector('.check');
var game = document.querySelector('.game');
var gamerText = document.querySelector('.gamer-text');
var gamerInput = document.querySelector('.gamer');
var optionBlock = document.querySelector('.option-block');
var btnPlayer = document.querySelectorAll('.btn-player');
var btnGame = document.querySelector('.game-start');
function gameLogic() {
    gamerInput.addEventListener('change', function () {
        gamerText.textContent = gamerInput.value;
    });
    gamerInput.addEventListener('blur', function () {
        if (gamerInput.value.length > 1) {
            btnGame.removeAttribute('disabled');
            btnGame.classList.add('active');
        }
    });
    btnGame === null || btnGame === void 0 ? void 0 : btnGame.addEventListener('click', function () {
        var countdown = document.createElement('h1');
        countdown.classList.add('countdown');
        document.body.prepend(countdown);
        countdown.textContent = '5';
        startBlock.style.display = 'none';
        // Функция для уменьшения значения countdown
        var decreaseCountdown = function () {
            if (parseInt(countdown.textContent || "0") > 0) {
                countdown.textContent = (parseInt(countdown.textContent || "0") - 1).toString();
                // Вызываем decreaseCountdown снова через 500ms
                setTimeout(decreaseCountdown, 500);
            }
            else {
                // После завершения countdown, показываем игру
                game.style.display = 'block';
                countdown.style.display = 'none';
            }
        };
        // Начинаем уменьшение countdown
        decreaseCountdown();
    });
    btnPlayer.forEach(function (btnPlayer) {
        btnPlayer.addEventListener('click', function () {
            if (btnPlayer.textContent === '1') {
                document.getElementById('one-gamer').style.display = 'block';
            }
            else {
                document.getElementById('one-gamer').style.display = 'none';
                alert('Функция пока дорабатывается');
            }
        });
    });
    btnStart === null || btnStart === void 0 ? void 0 : btnStart.addEventListener('click', function () {
        optionBlock.style.display = 'flex';
        btnStart.style.display = 'none';
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
                btnStart.style.display = 'block';
                optionBlock.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ2xELEtBQUssQ0FBQyxzREFBWSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUMsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDakMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVYLENBQUM7QUFFRCxTQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc3R5bGVzMS5zY3NzPzZkYzkiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlczEuc2Nzcyc7XHJcblxyXG50eXBlIEhUTUxFbGVtZW50V2l0aENsYXNzID0gSFRNTEVsZW1lbnQgJiB7IGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0IH07XHJcblxyXG5jb25zdCBibG9jazogSFRNTEVsZW1lbnRXaXRoQ2xhc3MgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrJyk7XHJcbmNvbnN0IGxpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lJyk7XHJcbmNvbnN0IHN0YXJ0QmxvY2s6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1ibG9jaycpO1xyXG5jb25zdCBidG5TdGFydDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbmNvbnN0IG51bTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XHJcbmNvbnN0IGdhbWU6IEhUTUxFbGVtZW50V2l0aENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcclxuY29uc3QgZ2FtZXJUZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lci10ZXh0Jyk7XHJcbmNvbnN0IGdhbWVySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZXInKTtcclxuY29uc3Qgb3B0aW9uQmxvY2s6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tYmxvY2snKTtcclxuY29uc3QgYnRuUGxheWVyOiBOb2RlTGlzdCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXBsYXllcicpXHJcbmNvbnN0IGJ0bkdhbWU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0Jyk7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9naWMoKXtcclxuXHJcbiAgICBnYW1lcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XHJcbiAgICAgICAgZ2FtZXJUZXh0LnRleHRDb250ZW50ID0gZ2FtZXJJbnB1dC52YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgZ2FtZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCk9PntcclxuICAgICAgICBpZihnYW1lcklucHV0LnZhbHVlLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICBidG5HYW1lLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgYnRuR2FtZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYnRuR2FtZT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGxldCBjb3VudGRvd246IEhUTUxIZWFkaW5nRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvdW50ZG93bi5jbGFzc0xpc3QuYWRkKCdjb3VudGRvd24nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoY291bnRkb3duKTtcclxuICAgICAgICBjb3VudGRvd24udGV4dENvbnRlbnQgPSAnNSc7XHJcbiAgICAgICAgc3RhcnRCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRg9C80LXQvdGM0YjQtdC90LjRjyDQt9C90LDRh9C10L3QuNGPIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGRlY3JlYXNlQ291bnRkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoY291bnRkb3duLnRleHRDb250ZW50IHx8IFwiMFwiKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZG93bi50ZXh0Q29udGVudCA9IChwYXJzZUludChjb3VudGRvd24udGV4dENvbnRlbnQgfHwgXCIwXCIpIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vINCS0YvQt9GL0LLQsNC10LwgZGVjcmVhc2VDb3VudGRvd24g0YHQvdC+0LLQsCDRh9C10YDQtdC3IDUwMG1zXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRlY3JlYXNlQ291bnRkb3duLCA1MDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjyBjb3VudGRvd24sINC/0L7QutCw0LfRi9Cy0LDQtdC8INC40LPRgNGDXHJcbiAgICAgICAgICAgICAgICBnYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgY291bnRkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vINCd0LDRh9C40L3QsNC10Lwg0YPQvNC10L3RjNGI0LXQvdC40LUgY291bnRkb3duXHJcbiAgICAgICAgZGVjcmVhc2VDb3VudGRvd24oKTtcclxuICAgIH0pXHJcblxyXG4gICAgYnRuUGxheWVyLmZvckVhY2goYnRuUGxheWVyID0+IHtcclxuICAgICAgICBidG5QbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBpZihidG5QbGF5ZXIudGV4dENvbnRlbnQgPT09ICcxJyl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25lLWdhbWVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29uZS1nYW1lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn0KTRg9C90LrRhtC40Y8g0L/QvtC60LAg0LTQvtGA0LDQsdCw0YLRi9Cy0LDQtdGC0YHRjycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnRuU3RhcnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG9wdGlvbkJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgYnRuU3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAobnVtKSB7XHJcbiAgICAgICAgICAgICAgICBudW0udGV4dENvbnRlbnQgPSAoTnVtYmVyKG51bS50ZXh0Q29udGVudCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChibG9jayAmJiAhYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdqdW1wJykpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2p1bXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2p1bXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG51bSAmJiBOdW1iZXIobnVtLnRleHRDb250ZW50KSA+PSA1ICYmIE51bWJlcihudW0udGV4dENvbnRlbnQpIDw9IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrQmx1ZSc7XHJcbiAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJzJzJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gJiYgTnVtYmVyKG51bS50ZXh0Q29udGVudCkgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsZXZlbFRocmVlJyk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBpc0FsaXZlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChibG9jayAmJiBsaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrVG9wID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYmxvY2spLmdldFByb3BlcnR5VmFsdWUoXCJ0b3BcIikpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lTGVmdCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLmdldFByb3BlcnR5VmFsdWUoXCJsZWZ0XCIpKTtcclxuICAgICAgICAgICAgaWYgKGxpbmVMZWZ0IDwgNDAgJiYgbGluZUxlZnQgPiAwICYmIGJsb2NrVG9wID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChg0JLQsNGIINGB0YfQtdGCICR7bnVtPy50ZXh0Q29udGVudH1gKTtcclxuICAgICAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICAgICAgICAgIGJ0blN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGV2ZWxUaHJlZScpO1xyXG4gICAgICAgICAgICAgICAgbGluZS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9ICczcyc7XHJcbiAgICAgICAgICAgICAgICBnYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBzdGFydEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIFxyXG59XHJcblxyXG5nYW1lTG9naWMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9