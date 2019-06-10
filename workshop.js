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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/workshop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburger = document.querySelector('.hamburger'),\n  closeButton = document.querySelector('.close-button'),\n  nav = document.querySelector('nav');\n\nhamburger.addEventListener('click', () => nav.classList.add('menu-open'));\n\ncloseButton.addEventListener('click', () => nav.classList.remove('menu-open'));\n\n\n//# sourceURL=webpack:///./src/js/nav.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return slider; });\nfunction slider() {\n  let currentIndex = 0,\n    timeout;\n\n  const slides = [...document.querySelectorAll('.galleryitems img')];\n\n  // Create dots\n  for (let i = 0; i < slides.length; i++) {\n    document\n      .querySelector('.control-btns')\n      .appendChild(document.createElement('div'));\n  }\n  const dots = [...document.querySelectorAll('.control-btns > div')];\n\n  function slide(n) {\n    slides[currentIndex].classList.remove('active');\n    dots[currentIndex].classList.remove('active');\n    slides[n].classList.add('active');\n    dots[n].classList.add('active');\n    currentIndex = n;\n\n    timer();\n  }\n\n  function nextSlide() {\n    return currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;\n  }\n\n  function prevSlide() {\n    return currentIndex - 1 <= 0 ? slides.length - 1 : currentIndex - 1;\n  }\n\n  function timer() {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => slide(nextSlide()), 3000);\n  }\n\n  [...document.querySelectorAll('.controls > div')].forEach(e =>\n    e.addEventListener('click', e =>\n      e.target.classList.contains('next')\n        ? slide(nextSlide())\n        : slide(prevSlide())\n    )\n  );\n\n  slide(0);\n}\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/js/workshop.js":
/*!****************************!*\
  !*** ./src/js/workshop.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_workshop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/workshop.scss */ \"./src/sass/workshop.scss\");\n/* harmony import */ var _sass_workshop_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_workshop_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/data/workshops.json */ \"./src/static/data/workshops.json\");\nvar _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/workshops.json */ \"./src/static/data/workshops.json\", 1);\n\n\n\n\n\nconst params = {};\nconst parser = document.createElement('a');\nparser.href = window.location.href;\nconst query = parser.search.substring(1);\nconst vars = query.split('&');\nfor (let i = 0; i < vars.length; i++) {\n  const pair = vars[i].split('=');\n  params[pair[0]] = decodeURIComponent(pair[1]);\n}\nconst slug = params.s;\n\nconst workshop = _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_3__.find(w => w.slug === slug);\n\nif(!workshop) location.href = '/workshops';\n\ndocument.querySelector('header').style.backgroundImage = `url(/${\n  workshop.heroImg\n})`;\ndocument.querySelector('header .hero .name').innerText = workshop.school;\ndocument.querySelector('header .hero .date').innerText = workshop.date;\n\nconst bodySectionFragment = document.createDocumentFragment();\nworkshop.body.forEach(b => {\n  const p = document.createElement('p');\n  p.innerHTML = b;\n  bodySectionFragment.appendChild(p);\n});\ndocument.querySelector('.section.body').appendChild(bodySectionFragment);\n\ndocument.querySelector(\n  '.section.three-col .participants .n'\n).innerText = String(workshop.participants);\ndocument.querySelector('.section.three-col .hours .n').innerText = String(\n  workshop.hours\n);\ndocument.querySelector('.section.three-col .days .n').innerText = String(\n  workshop.days\n);\nif (workshop.days === 1) {\n  document.querySelector('.section.three-col .days .heading').innerText = 'Day';\n}\n\nfor (let i = 0, j = workshop.gallery.length; i < j; i++) {\n  const img = document.createElement('img');\n  img.src = `/${workshop.gallery[i]}`;\n  document.querySelector('.galleryitems').appendChild(img);\n}\n\nObject(_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/js/workshop.js?");

/***/ }),

/***/ "./src/sass/workshop.scss":
/*!********************************!*\
  !*** ./src/sass/workshop.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/workshop.scss?");

/***/ }),

/***/ "./src/static/data/workshops.json":
/*!****************************************!*\
  !*** ./src/static/data/workshops.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

eval("module.exports = [{\"slug\":\"krmggn\",\"school\":\"KR Mangalam World School, Gurgaon\",\"past\":false,\"date\":\"May 2019\",\"thumbnail\":\"img/workshops/krmggn/thumbnail.jpg\"},{\"slug\":\"katong\",\"school\":\"Katong Convent School, Singapore (PyCon)\",\"past\":false,\"date\":\"June 2019\",\"thumbnail\":\"img/workshops/katong/thumbnail.jpg\"},{\"slug\":\"soc-ideashub\",\"school\":\"Summer of Code, Singapore (Ideashub)\",\"past\":false,\"date\":\"June 2019\",\"thumbnail\":\"img/workshops/soc-ideashub/thumbnail.jpg\"},{\"slug\":\"sanskriti\",\"school\":\"Sanskriti School\",\"past\":false,\"date\":\"Date TBD\",\"thumbnail\":\"img/workshops/sanskriti/thumbnail.jpeg\"},{\"slug\":\"sji-singapore\",\"school\":\"SJI, Singapore\",\"past\":false,\"date\":\"January 2019\",\"thumbnail\":\"img/workshops/sji-singapore/thumbnail.jpg\"},{\"slug\":\"st-george\",\"school\":\"St. George's School\",\"past\":false,\"date\":\"January 2019\",\"thumbnail\":\"img/workshops/st-george/thumbnail.png\"},{\"slug\":\"indus-hyderabad\",\"school\":\"Indus International School, Hyderabad\",\"past\":false,\"date\":\"February 2019\",\"thumbnail\":\"img/workshops/indus-hyderabad/thumbnail.png\"},{\"slug\":\"ramjas-rkp\",\"school\":\"Ramjas School, R.K. Puram\",\"past\":false,\"date\":\"February 2019\",\"thumbnail\":\"img/workshops/ramjas-rkp/thumbnail.jpeg\"},{\"slug\":\"oakridge-einstein\",\"school\":\"Oakridge International School, Einstein Campus\",\"past\":true,\"date\":\"March 2019\",\"thumbnail\":\"img/workshops/oakridge-einstein/thumbnail.jpg\",\"body\":[\"The workshop was conducted at the Oakridge International School, Einstein campus in Hyderabad, on March 16. We spent around 7 hours in the workshop, and completed the entire platform including all the exercises. We had 15 participants at the workshop. We started with variables and then progressed to discussing data types, if/else statements, for and while loops, and functions. We then completed the exercises on the platform like the Fibonacci number generator. The girls were extremely grateful for the workshop and said that they would like to learn more about Python and delve into areas like app development.\",\"Our students were able to easily understand and grasp all the concepts that were taught — after listening to mentors explain the concepts for about 10 minutes, they read through the curriculum material on The Girl Code platform and then completed the exercises pertaining to the concepts they had been taught.\"],\"participants\":15,\"hours\":7,\"days\":1,\"heroImg\":\"img/workshops/oakridge-einstein/1.jpg\",\"gallery\":[\"img/workshops/oakridge-einstein/1.jpg\",\"img/workshops/oakridge-einstein/2.png\",\"img/workshops/oakridge-einstein/3.png\",\"img/workshops/oakridge-einstein/4.jpg\",\"img/workshops/oakridge-einstein/5.png\"]},{\"slug\":\"tsrsm\",\"school\":\"The Shri Ram School, Moulsari\",\"past\":true,\"date\":\"December 2018\",\"thumbnail\":\"img/workshops/tsrsm/thumbnail.jpg\",\"body\":[\"<div class=\\\"litas\\\"><img src=\\\"/img/workshops/tsrsm/litas.png\\\" /></div>\",\"The Girl Code held a workshop at The Shri Ram School between December 12th and 20th of 2019. During the workshop, participants were challenged and kept on their toes with various problems. It harbored an engaging and dynamic atmosphere and encouraged lots of participation.\",\"In organizing this workshop, we partnered with Litas to organize a competition for the participants to come up with ideas involving incorporating technology into our daily lives. The students came up with various wonderful ideas, keeping in mind the needs of today, social norms and various other nuanced factors when coming up with their ideas. The workshop was a big success, with many girls getting encouraged to further pursue coding.\"],\"participants\":25,\"hours\":6,\"days\":4,\"heroImg\":\"img/workshops/tsrsm/tsrsm2.jpg\",\"gallery\":[\"img/workshops/tsrsm/tsrsm1.jpg\",\"img/workshops/tsrsm/tsrsm2.jpg\",\"img/workshops/tsrsm/tsrsm3.jpg\",\"img/workshops/tsrsm/tsrsm4.jpg\",\"img/workshops/tsrsm/tsrsm5.jpg\"]},{\"slug\":\"nus\",\"school\":\"National University of Singapore\",\"past\":true,\"date\":\"August 2018\",\"thumbnail\":\"img/workshops/nus/thumbnail.jpg\",\"body\":[\"On 10th August, The Girl Code held yet another successful workshop in collaboration with NUS School of Computing and sponsored by NUS ALSET.\",\"The workshop, held at the NUS School of Computing in Singapore was six hours long and hosted over sixty-five students from more than ten schools. The workshop held The Girl Code, taught students from Scratch, beginning with the most basic of concepts, gradually progressing to tougher ones.\"],\"participants\":68,\"hours\":6,\"days\":1,\"heroImg\":\"img/workshops/nus/hero.jpg\",\"gallery\":[\"img/workshops/nus/1.jpg\",\"img/workshops/nus/2.jpg\",\"img/workshops/nus/3.jpg\",\"img/workshops/nus/4.jpg\",\"img/workshops/nus/5.jpg\"]},{\"slug\":\"oakridge-newton\",\"school\":\"Oakridge International School, Newton Campus\",\"past\":true,\"date\":\"July 2018\",\"thumbnail\":\"img/workshops/oakridge-newton/thumbnail.jpg\",\"body\":[\"The Girl Code’s first workshop in Hyderabad was held at Oakridge International School Newton Campus over a span of ten days between July 23rd and August 14th with each days’ session taking place over an hour. A total of thirty-seven students attended, and were taught by seven mentors. Over the course of the workshop, various topics were successfully covered — Data types, String Operations, Input, Control Flow, Lists, and Functions being some of the many topics covered.\",\"Our students were able to easily understand and grasp all the concepts that were taught — after listening to mentors explain the concepts for about 10 minutes, they read through the curriculum material on The Girl Code platform and then completed the exercises pertaining to the concept. \"],\"participants\":37,\"hours\":11,\"days\":11,\"heroImg\":\"img/workshops/oakridge-newton/oak0.jpg\",\"gallery\":[\"img/workshops/oakridge-newton/oak0.jpg\",\"img/workshops/oakridge-newton/oak1.jpg\",\"img/workshops/oakridge-newton/oak2.jpg\",\"img/workshops/oakridge-newton/oak3.jpg\",\"img/workshops/oakridge-newton/oak4.jpg\",\"img/workshops/oakridge-newton/oak5.jpg\"]},{\"slug\":\"gyan-bharti\",\"school\":\"Gyan Bharti School\",\"past\":true,\"date\":\"May 2018\",\"thumbnail\":\"img/workshops/gyan-bharti/thumbnail.jpeg\",\"body\":[\"The Girl Code’s workshop at Gyan Bharti School was held between 21st and 26th May of 2018, during which girls between the ages of 11 and 16 were given the opportunity to explore a new field without any inhibitions. It took place over 5 days and lasted 12.5 hours.\",\"The workshop garnered large amounts of participation, with 60 students attending it. During the workshop, students successfully made games on Scratch (a programming language targeting primarily children). An interactive video call was also held with Stanford student and founder of Litas, Anvita Gupta.\"],\"participants\":60,\"hours\":12.5,\"days\":5,\"heroImg\":\"img/workshops/gyan-bharti/gb2.jpg\",\"gallery\":[\"img/workshops/gyan-bharti/gb1.jpg\",\"img/workshops/gyan-bharti/gb2.jpg\",\"img/workshops/gyan-bharti/gb3.jpg\",\"img/workshops/gyan-bharti/gb4.jpg\",\"img/workshops/gyan-bharti/gb5.jpg\"]},{\"slug\":\"mis\",\"school\":\"The Mother's International School\",\"past\":true,\"date\":\"January 2018\",\"thumbnail\":\"img/workshops/mis/thumbnail.jpg\",\"body\":[\"The Girl Code’s first workshop took place at Mother’s International School, New Delhi, and hosted over 50 girls, ranging from 7 to 16 years of age who were taught by mentors from 11th and 12th grade. The workshop lasted 6 days, beginning on January 2nd, 2018.\",\"The girls began the workshop with absolutely no prior knowledge on programming, but by the end, had all constructed a game using Scratch and were proficient in Python. Through the workshop, the girls had transformed from shy, diffident girls to those who were confident in themselves and their abilities. Following the workshop, two new participants had joined the school’s computing club, and another had cleared a cyber Olympiad.\"],\"participants\":50,\"hours\":12,\"days\":6,\"heroImg\":\"img/workshops/mis/mis0.jpg\",\"gallery\":[\"img/workshops/mis/mis0.jpg\",\"img/workshops/mis/mis1.jpg\",\"img/workshops/mis/mis2.jpg\",\"img/workshops/mis/mis3.jpg\",\"img/workshops/mis/mis4.jpg\",\"img/workshops/mis/mis5.jpg\"]}];\n\n//# sourceURL=webpack:///./src/static/data/workshops.json?");

/***/ })

/******/ });