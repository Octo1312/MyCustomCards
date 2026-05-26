"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");

var mybutton = document.getElementById("myBtn");

// Si scroll de minimum 20px alors fais apparaitre le bouton
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Si le button est click alors remonte tout en haut
function topFunction() {
  document.documentElement.scrollTop = 0;
  console.log(bonjour);
}

// // Menu burger
// const logoBurger = document.getElementsByClassName('logo-burger')[0]
// const responsiveNav = document.getElementsByClassName('responsive-nav')[0]

// let count = 0

// logoBurger.addEventListener('click', function () {
//   if (count == 0) {
//     responsiveNav.classList.add('open')
//     count++
//   } else {
//     responsiveNav.classList.remove('open')
//     count--
//   }
// })

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJCO0FBRTNCLElBQUlBLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDOztBQUUvQztBQUNBQyxNQUFNLENBQUNDLFFBQVEsR0FBRyxZQUFZO0VBQUVDLGNBQWMsQ0FBQyxDQUFDO0FBQUMsQ0FBQztBQUVsRCxTQUFTQSxjQUFjQSxDQUFBLEVBQUc7RUFDeEIsSUFBSUosUUFBUSxDQUFDSyxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFLElBQUlOLFFBQVEsQ0FBQ08sZUFBZSxDQUFDRCxTQUFTLEdBQUcsRUFBRSxFQUFFO0lBQzNFUCxRQUFRLENBQUNTLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDbEMsQ0FBQyxNQUFNO0lBQ0xWLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNqQztBQUNGOztBQUVBO0FBQ0EsU0FBU0MsV0FBV0EsQ0FBQSxFQUFHO0VBQ3JCVixRQUFRLENBQUNPLGVBQWUsQ0FBQ0QsU0FBUyxHQUFHLENBQUM7RUFDdENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFQyxPQUFPLENBQUM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7OztBQ25DQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmxldCBteWJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlCdG5cIik7XHJcblxyXG4vLyBTaSBzY3JvbGwgZGUgbWluaW11bSAyMHB4IGFsb3JzIGZhaXMgYXBwYXJhaXRyZSBsZSBib3V0b25cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkgeyBzY3JvbGxGdW5jdGlvbigpIH07XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApIHtcclxuICAgIG15YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG15YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNpIGxlIGJ1dHRvbiBlc3QgY2xpY2sgYWxvcnMgcmVtb250ZSB0b3V0IGVuIGhhdXRcclxuZnVuY3Rpb24gdG9wRnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgY29uc29sZS5sb2cgKGJvbmpvdXIpO1xyXG59XHJcblxyXG4vLyAvLyBNZW51IGJ1cmdlclxyXG4vLyBjb25zdCBsb2dvQnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9nby1idXJnZXInKVswXVxyXG4vLyBjb25zdCByZXNwb25zaXZlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzcG9uc2l2ZS1uYXYnKVswXVxyXG5cclxuLy8gbGV0IGNvdW50ID0gMFxyXG5cclxuLy8gbG9nb0J1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBpZiAoY291bnQgPT0gMCkge1xyXG4vLyAgICAgcmVzcG9uc2l2ZU5hdi5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuLy8gICAgIGNvdW50KytcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgcmVzcG9uc2l2ZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuLy8gICAgIGNvdW50LS1cclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsibXlidXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxGdW5jdGlvbiIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b3BGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJib25qb3VyIl0sInNvdXJjZVJvb3QiOiIifQ==