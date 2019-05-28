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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/about.scss */ \"./src/sass/about.scss\");\n/* harmony import */ var _sass_about_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_about_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_data_team_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/data/team.json */ \"./src/static/data/team.json\");\nvar _static_data_team_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/team.json */ \"./src/static/data/team.json\", 1);\n\n\n\n\nfunction createCard(src, name, designation, description) {\n  // Filter src\n  src = src.match(/https/g) ? src : `../${src}`;\n\n  const card = document.createElement('div');\n  card.className = 'card';\n\n  const imgContainer = document.createElement('div');\n  imgContainer.className = 'img';\n  const img = document.createElement('img');\n  img.src = src;\n  img.alt = name;\n  imgContainer.appendChild(img);\n  card.appendChild(imgContainer);\n\n  const infoContainer = document.createElement('div');\n  infoContainer.className = 'info';\n  const nameDiv = document.createElement('div');\n  nameDiv.className = 'name';\n  nameDiv.innerText = name;\n  infoContainer.appendChild(nameDiv);\n  const designationDiv = document.createElement('div');\n  designationDiv.className = 'designation';\n  designationDiv.innerText = designation;\n  infoContainer.appendChild(designationDiv);\n  const descriptionDiv = document.createElement('div');\n  descriptionDiv.className = 'description';\n  descriptionDiv.innerText = description;\n  infoContainer.appendChild(descriptionDiv);\n  card.appendChild(infoContainer);\n\n  return card;\n}\n\nconst cards = document.querySelector('div.cards');\ncards.innerHTML = '';\nfor (let member of _static_data_team_json__WEBPACK_IMPORTED_MODULE_2__) {\n  cards.appendChild(\n    createCard(member.img, member.name, member.designation, member.desc)\n  );\n}\n\n\n//# sourceURL=webpack:///./src/js/about.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburger = document.querySelector('.hamburger'),\n  closeButton = document.querySelector('.close-button'),\n  nav = document.querySelector('nav');\n\nhamburger.addEventListener('click', () => nav.classList.add('menu-open'));\n\ncloseButton.addEventListener('click', () => nav.classList.remove('menu-open'));\n\n\n//# sourceURL=webpack:///./src/js/nav.js?");

/***/ }),

/***/ "./src/sass/about.scss":
/*!*****************************!*\
  !*** ./src/sass/about.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/about.scss?");

/***/ }),

/***/ "./src/static/data/team.json":
/*!***********************************!*\
  !*** ./src/static/data/team.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

eval("module.exports = [{\"name\":\"Japnit K. Ahuja\",\"designation\":\"Co-Founder\",\"desc\":\"Japnit oversees all operations and is the head of the Singapore chapter of The Girl Code. She’s a student at the National Junior College, Singapore.\",\"img\":\"img/people/japnit.png\"},{\"name\":\"Samriddhi Agnihotri\",\"designation\":\"Co-Founder\",\"desc\":\"Samriddhi oversees all operations and is the head of the Indian chapter of The Girl Code.\",\"img\":\"img/people/sam.jpeg\"},{\"name\":\"Naman Sood\",\"designation\":\"Web Developer\",\"desc\":\"Naman is in charge of the front-end and back-end components of the website. He is a student of The Delhi Public School Vasant Kunj, India.\",\"img\":\"img/people/naman.jpeg\"},{\"name\":\"Tishya Doraiswamy\",\"designation\":\"Content Strategist\",\"desc\":\"Tishya creates written content for the organisation, including articles for publications, curating information for our website, and working on the medium blog. She is a student of The Shri Ram School, India.\",\"img\":\"img/people/tishya.jpeg\"},{\"name\":\"Vanaj Moorthy\",\"designation\":\"Designer\",\"desc\":\"Vanaj looks after the design components of the website including,illustrations and animations. He is a student of The Shri Ram School, India.\",\"img\":\"img/people/vanaj.jpg\"},{\"name\":\"Srijon Sinha\",\"designation\":\"Designer\",\"desc\":\"Srijon looks after animations, illustrations, videos, and editing. He is a student of The Shri Ram School, India.\",\"img\":\"img/people/josh.jpg\"},{\"name\":\"Sidhant Bhavnani\",\"designation\":\"Director of Curriculum\",\"desc\":\"Sidhant looks after the design, development and implementation of the curriculum.\",\"img\":\"https://avatars2.githubusercontent.com/u/8233952?s=460&v=4\"},{\"name\":\"Angad Singh\",\"designation\":\"Web Developer\",\"desc\":\"Angad is in charge of the front-end and back-end components of the website. He is a student of The Delhi Public School R.K. Puram, India.\",\"img\":\"https://avatars3.githubusercontent.com/u/30556800?s=460&v=4\"},{\"name\":\"Dhimant Ananmay\",\"designation\":\"Content Strategist\",\"desc\":\"Dhimant works the curriculum and handles social media. He is a student of The Shri Ram School, India.\",\"img\":\"img/people/dhimant.jpg\"}];\n\n//# sourceURL=webpack:///./src/static/data/team.json?");

/***/ })

/******/ });