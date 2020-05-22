/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/build-slider.js":
/*!********************************!*\
  !*** ./src/js/build-slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return slider; });\nfunction slider() {\n  let currentIndex = 0,\n    timeout;\n\n  const slides = [...document.querySelectorAll('.written')];\n\n  console.log(slides);\n  for (let i = 0; i < slides.length; i++) {\n    document\n      .querySelector('.control-btns')\n      .appendChild(document.createElement('div'));\n  }\n  const dots = [...document.querySelectorAll('.control-btns > div')];\n\n  function slide(n) {\n    slides[currentIndex].classList.remove('active');\n    dots[currentIndex].classList.remove('active');\n    slides[n].classList.add('active');\n    dots[n].classList.add('active');\n    currentIndex = n;\n\n    timer();\n  }\n\n  function nextSlide() {\n    return currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;\n  }\n\n  function prevSlide() {\n    return currentIndex - 1 <= 0 ? slides.length - 1 : currentIndex - 1;\n  }\n\n  function timer() {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => slide(nextSlide()), 3000);\n  }\n\n  // [...document.querySelectorAll('.controls > div')].forEach(e =>\n  //   e.addEventListener('click', e =>\n  //     e.target.classList.contains('next')\n  //       ? slide(nextSlide())\n  //       : slide(prevSlide())\n  //   )\n  // );\n\n  slide(0);\n}\n\n\n//# sourceURL=webpack:///./src/js/build-slider.js?");

/***/ }),

/***/ "./src/js/build.js":
/*!*************************!*\
  !*** ./src/js/build.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_build_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/build.scss */ \"./src/sass/build.scss\");\n/* harmony import */ var _sass_build_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_build_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build-slider */ \"./src/js/build-slider.js\");\n/* harmony import */ var _static_data_build_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/data/build.json */ \"./src/static/data/build.json\");\nvar _static_data_build_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/build.json */ \"./src/static/data/build.json\", 1);\n\n\n\n\n\nfor (let i = 0, j = _static_data_build_json__WEBPACK_IMPORTED_MODULE_3__.length; i < j; i++) {\n  const written = document.createElement('div');\n  written.setAttribute('class', 'written');\n\n  const review = document.createElement('p');\n  review.setAttribute('class', 'review');\n  review.innerText = String(_static_data_build_json__WEBPACK_IMPORTED_MODULE_3__[i].review);\n\n  const author = document.createElement('p');\n  author.setAttribute('class', 'author');\n  author.innerText = String(_static_data_build_json__WEBPACK_IMPORTED_MODULE_3__[i].author);\n\n  const school = document.createElement('p');\n  school.setAttribute('class', 'institute');\n  school.innerText = String(_static_data_build_json__WEBPACK_IMPORTED_MODULE_3__[i].school);\n\n  written.appendChild(review);\n  written.appendChild(author);\n  written.appendChild(school);\n  document.querySelector('.dimigo .galleryitems').appendChild(written);\n  //   console.log(review, author, school);\n}\n\nObject(_build_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/js/build.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburger = document.querySelector('.hamburger'),\n  closeButton = document.querySelector('.close-button'),\n  nav = document.querySelector('nav');\n\nhamburger.addEventListener('click', () => nav.classList.add('menu-open'));\n\ncloseButton.addEventListener('click', () => nav.classList.remove('menu-open'));\n\n\n//# sourceURL=webpack:///./src/js/nav.js?");

/***/ }),

/***/ "./src/sass/build.scss":
/*!*****************************!*\
  !*** ./src/sass/build.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/build.scss?");

/***/ }),

/***/ "./src/static/data/build.json":
/*!************************************!*\
  !*** ./src/static/data/build.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"review\\\":\\\" It was a really good initiative taken by you people, for our learning. I really liked how there was no burden of learning in a hurry but at your own comfortable pace. I also liked how easy it was to be a part of The Girl Code with not too many formalities to be fulfilled before the participation. Thank You to everyone who was a part of this! \\\",\\\"author\\\":\\\"SSOMYA SAXENA\\\",\\\"school\\\":\\\"KIET Group Of Institutions\\\"},{\\\"review\\\":\\\" I had a great experience in learning new skills - HTML and CSS and in implementing them to design my first website with easy steps and in a very short period of time. I really hope and wait for the other coming #build like events from 'The Girl Code' to learn something new again.\\\",\\\"author\\\":\\\"Neha Kumari\\\",\\\"school\\\":\\\"National Institute of Technology Patna\\\"},{\\\"review\\\":\\\"#Build was an amazing experience. The lessons were smooth and seamless, the presentations were illustrative and the mentors were extremely helpful. Working on the final project helped me grasp so many nuances of HTML and CSS which I wasn't aware of before. #Build has pushed me towards wanting to learn and explore more of web development. Eagerly looking forward to #Build2! :D\\\",\\\"author\\\":\\\"Vishnupriya\\\",\\\"school\\\":\\\"Maharaja Surajmal Institute of Technology\\\"},{\\\"review\\\":\\\"It was really amazing to work on a language that I had never practiced before. At first, it was quite tough for me to build the code but then I started loving it, and finally made the webpages. The mentors were really very helpful!l and the sessions too were brief and apt! It was really a wonderful experience and I learned a lot. A Big Thanks to The Girl Code Team!\\\",\\\"author\\\":\\\"Ruhee Jain\\\",\\\"school\\\":\\\"Guru Tegh Bahadur Institute of technology\\\"},{\\\"review\\\":\\\"Amazing experience!! It was my first-ever time coding!! I loved it. Thanks a lot to “THE GIRL CODE “ for this wonderful opportunity! Best part..were The mentors! Honestly, a blessing to have them give support and guidance at the oddest time! So glad that  I got to know about this...Joining the next program for sure!!!\\\",\\\"author\\\":\\\"Ishita Pai Raikar\\\",\\\"school\\\":\\\"Dover Court International School\\\"}]\");\n\n//# sourceURL=webpack:///./src/static/data/build.json?");

/***/ })

/******/ });