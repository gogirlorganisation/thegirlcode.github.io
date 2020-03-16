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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/workshops.js");
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

/***/ "./src/js/workshops.js":
/*!*****************************!*\
  !*** ./src/js/workshops.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_workshops_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/workshops.scss */ \"./src/sass/workshops.scss\");\n/* harmony import */ var _sass_workshops_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_workshops_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/data/workshops.json */ \"./src/static/data/workshops.json\");\nvar _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data/workshops.json */ \"./src/static/data/workshops.json\", 1);\n\n\n\n\n\nfunction Workshop(workshop) {\n  const workshopEl = document.createElement('a');\n  workshopEl.className = 'workshop';\n\n  const backgroundDiv = document.createElement('div');\n  backgroundDiv.className = 'background';\n  backgroundDiv.style.backgroundImage = `url(/${workshop.thumbnail})`;\n\n  const overlayDiv = document.createElement('div');\n  overlayDiv.className = 'overlay';\n\n  const nameDiv = document.createElement('div');\n  nameDiv.className = 'name';\n  nameDiv.innerText = workshop.school;\n  overlayDiv.appendChild(nameDiv);\n\n  const dateDiv = document.createElement('div');\n  dateDiv.className = 'date';\n  dateDiv.innerText = workshop.date;\n  overlayDiv.appendChild(dateDiv);\n\n  workshopEl.appendChild(overlayDiv);\n  workshopEl.appendChild(backgroundDiv);\n\n  return workshopEl;\n}\n\nfunction linkWorkshop(workshopEl, slug) {\n  workshopEl.setAttribute('href', `/workshop?s=${slug}`);\n\n  return workshopEl;\n}\n\nfunction createFragment(workshops, f, m) {\n  const workshopEls = workshops.filter(f).map(m);\n  const fragment = document.createDocumentFragment();\n  for (let div of workshopEls) {\n    fragment.appendChild(div);\n  }\n\n  return fragment;\n}\n\ndocument\n  .querySelector('.section.upcoming .workshops')\n  .appendChild(createFragment(_static_data_workshops_json__WEBPACK_IMPORTED_MODULE_2__, w => !w.past, Workshop));\n\ndocument.querySelector('.section.past .workshops').appendChild(\n  createFragment(\n    _static_data_workshops_json__WEBPACK_IMPORTED_MODULE_2__,\n    w => w.past,\n    w => linkWorkshop(Workshop(w), w.slug)\n  )\n);\n\n\n//# sourceURL=webpack:///./src/js/workshops.js?");

/***/ }),

/***/ "./src/sass/workshops.scss":
/*!*********************************!*\
  !*** ./src/sass/workshops.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/workshops.scss?");

/***/ }),

/***/ "./src/static/data/workshops.json":
/*!****************************************!*\
  !*** ./src/static/data/workshops.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"slug\\\":\\\"asu\\\",\\\"school\\\":\\\"Arizona State University\\\",\\\"past\\\":true,\\\"date\\\":\\\"January 2020\\\",\\\"thumbnail\\\":\\\"img/workshops/asu/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code’s workshop at Arizona State University was held on the 26th October 2019 in collaboration with WICS ASU. There were 25 participants in total, from high school and college. The workshop was 6 hours long and covered basic Python (from conditionals to functions and loops)\\\"],\\\"gallery\\\":[\\\"img/workshops/asu/1.jpeg\\\",\\\"img/workshops/asu/2.jpeg\\\",\\\"img/workshops/asu/3.jpeg\\\",\\\"img/workshops/asu/4.jpeg\\\"],\\\"heroImg\\\":\\\"img/workshops/asu/hero.jpeg\\\",\\\"participants\\\":25,\\\"hours\\\":6,\\\"days\\\":1},{\\\"slug\\\":\\\"soc-ideashub\\\",\\\"school\\\":\\\"Summer of Code, Singapore (Ideashub)\\\",\\\"past\\\":true,\\\"date\\\":\\\"June 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/soc-ideashub/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code organised the Summer of Code workshop series in June 2019.  The series comprised of three workshops, which were each two hours long, which was primarily focused on Python. It was held at Ideashub in United World College Southeast Asia, Dover in Singapore. The main objective was to teach Python to teenage girls from scratch. It was beneficial to the girls who had little to no prior knowledge in coding as this workshop served as a good platform to kickstart their interest and passion for coding. It was a meaningful and useful learning experience for the girls. This time we had a well-received response of approximately 60 attendees including mentors. We received positive feedback from those who attended the workshop which was a bonus.\\\"],\\\"gallery\\\":[\\\"img/workshops/soc-ideashub/1.jpg\\\",\\\"img/workshops/soc-ideashub/2.jpg\\\",\\\"img/workshops/soc-ideashub/3.jpg\\\",\\\"img/workshops/soc-ideashub/4.jpg\\\",\\\"img/workshops/soc-ideashub/5.jpg\\\"],\\\"heroImg\\\":\\\"img/workshops/soc-ideashub/hero.jpg\\\",\\\"participants\\\":60,\\\"hours\\\":6,\\\"days\\\":3},{\\\"slug\\\":\\\"sanskriti\\\",\\\"school\\\":\\\"Sanskriti School\\\",\\\"past\\\":false,\\\"date\\\":\\\"Date TBD\\\",\\\"thumbnail\\\":\\\"img/workshops/sanskriti/thumbnail.jpeg\\\"},{\\\"slug\\\":\\\"sji-singapore\\\",\\\"school\\\":\\\"SJI, Singapore\\\",\\\"past\\\":false,\\\"date\\\":\\\"January 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/sji-singapore/thumbnail.jpg\\\"},{\\\"slug\\\":\\\"st-george\\\",\\\"school\\\":\\\"St. George's School\\\",\\\"past\\\":false,\\\"date\\\":\\\"January 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/st-george/thumbnail.png\\\"},{\\\"slug\\\":\\\"indus-hyderabad\\\",\\\"school\\\":\\\"Indus International School, Hyderabad\\\",\\\"past\\\":false,\\\"date\\\":\\\"February 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/indus-hyderabad/thumbnail.png\\\"},{\\\"slug\\\":\\\"ramjas-rkp\\\",\\\"school\\\":\\\"Ramjas School, R.K. Puram\\\",\\\"past\\\":false,\\\"date\\\":\\\"February 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/ramjas-rkp/thumbnail.jpeg\\\"},{\\\"slug\\\":\\\"katong\\\",\\\"school\\\":\\\"Katong Convent School, Singapore (PyCon)\\\",\\\"past\\\":true,\\\"date\\\":\\\"June 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/katong/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code held a workshop at CHIJ Katong Convent on the (date) June 2019. During the workshop, participants were challenged and kept on their toes with various problems. It harboured an engaging and dynamic atmosphere and encouraged lots of participation.\\\",\\\"This workshop was part ​PyCon SG 2019 Young Coders' Workshops for student​s, i​n collaboration​ with ​BuildingBloCS ‘19. ​Targeted at a younger audience aged 18 and below, the workshop aims to enthuse the young about the joy of experiential and hands-on learning through Python coding, i​nspiring and encouraging JC and secondary students to continue coding. This is aligned with Singapore’s goal of becoming a ‘Smart Nation’, bringing together JC and secondary school students to build an infocomm-empowered future for a better world.\\\"],\\\"gallery\\\":[\\\"img/workshops/katong/1.jpg\\\",\\\"img/workshops/katong/2.jpg\\\",\\\"img/workshops/katong/3.jpg\\\",\\\"img/workshops/katong/4.jpg\\\",\\\"img/workshops/katong/5.jpg\\\"],\\\"heroImg\\\":\\\"img/workshops/katong/hero.jpg\\\",\\\"participants\\\":30,\\\"hours\\\":3,\\\"days\\\":1},{\\\"slug\\\":\\\"krmggn\\\",\\\"school\\\":\\\"KR Mangalam World School, Gurgaon\\\",\\\"past\\\":true,\\\"date\\\":\\\"May 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/krmggn/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code held a workshop on the 21st and 22nd of May 2019 at KR Mangalam School in Gurugram. Over the course of about 8 hours spread across the two days, the 30 tenth graders were taught python using The Girl Code’s platform.\\\",\\\"The girls began the workshop with absolutely no prior knowledge on programming, but by the end, were proficient in Python. Through the workshop, the girls had transformed from shy, diffident girls to those who were confident in themselves and their abilities.\\\"],\\\"gallery\\\":[\\\"img/workshops/krmggn/1.jpg\\\",\\\"img/workshops/krmggn/2.jpg\\\",\\\"img/workshops/krmggn/3.jpg\\\",\\\"img/workshops/krmggn/4.jpg\\\",\\\"img/workshops/krmggn/5.jpg\\\"],\\\"heroImg\\\":\\\"img/workshops/krmggn/hero.jpg\\\",\\\"participants\\\":30,\\\"hours\\\":8,\\\"days\\\":2},{\\\"slug\\\":\\\"dps-rohini\\\",\\\"school\\\":\\\"Delhi Public School, Rohini\\\",\\\"past\\\":true,\\\"date\\\":\\\"May 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/dps-rohini/thumbnail.jpg\\\",\\\"body\\\":[\\\"<div class=\\\\\\\"litas\\\\\\\"><img src=\\\\\\\"/img/workshops/tsrsm/litas.png\\\\\\\" /></div>\\\",\\\"The Girl Code held a workshop on 27th and 28th May at DPS Rohini. During the 10 hours the 25 participants spent with the TGC team, they were taught how to code in python using our platform, LEARN.\\\",\\\"In organizing this workshop, we partnered with Litas to organize a competition for the participants to come up with ideas involving incorporating technology into our daily lives. The students came up with various wonderful ideas, keeping in mind the needs of today, social norms and various other nuanced factors when coming up with their ideas. The workshop was a big success, with many girls getting encouraged to further pursue coding.\\\"],\\\"gallery\\\":[\\\"img/workshops/dps-rohini/1.jpg\\\",\\\"img/workshops/dps-rohini/2.jpg\\\",\\\"img/workshops/dps-rohini/3.jpg\\\",\\\"img/workshops/dps-rohini/4.jpg\\\",\\\"img/workshops/dps-rohini/5.jpg\\\"],\\\"heroImg\\\":\\\"img/workshops/dps-rohini/hero.jpg\\\",\\\"participants\\\":25,\\\"hours\\\":10,\\\"days\\\":2},{\\\"slug\\\":\\\"oakridge-einstein\\\",\\\"school\\\":\\\"Oakridge International School, Einstein Campus\\\",\\\"past\\\":true,\\\"date\\\":\\\"March 2019\\\",\\\"thumbnail\\\":\\\"img/workshops/oakridge-einstein/thumbnail.jpg\\\",\\\"body\\\":[\\\"The workshop was conducted at the Oakridge International School, Einstein campus in Hyderabad, on March 16. We spent around 7 hours in the workshop, and completed the entire platform including all the exercises. We had 15 participants at the workshop. We started with variables and then progressed to discussing data types, if/else statements, for and while loops, and functions. We then completed the exercises on the platform like the Fibonacci number generator. The girls were extremely grateful for the workshop and said that they would like to learn more about Python and delve into areas like app development.\\\",\\\"Our students were able to easily understand and grasp all the concepts that were taught — after listening to mentors explain the concepts for about 10 minutes, they read through the curriculum material on The Girl Code platform and then completed the exercises pertaining to the concepts they had been taught.\\\"],\\\"participants\\\":15,\\\"hours\\\":7,\\\"days\\\":1,\\\"heroImg\\\":\\\"img/workshops/oakridge-einstein/1.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/oakridge-einstein/1.jpg\\\",\\\"img/workshops/oakridge-einstein/2.png\\\",\\\"img/workshops/oakridge-einstein/3.png\\\",\\\"img/workshops/oakridge-einstein/4.jpg\\\",\\\"img/workshops/oakridge-einstein/5.png\\\"]},{\\\"slug\\\":\\\"tsrsm\\\",\\\"school\\\":\\\"The Shri Ram School, Moulsari\\\",\\\"past\\\":true,\\\"date\\\":\\\"December 2018\\\",\\\"thumbnail\\\":\\\"img/workshops/tsrsm/thumbnail.jpg\\\",\\\"body\\\":[\\\"<div class=\\\\\\\"litas\\\\\\\"><img src=\\\\\\\"/img/workshops/tsrsm/litas.png\\\\\\\" /></div>\\\",\\\"The Girl Code held a workshop at The Shri Ram School between December 12th and 20th of 2019. During the workshop, participants were challenged and kept on their toes with various problems. It harbored an engaging and dynamic atmosphere and encouraged lots of participation.\\\",\\\"In organizing this workshop, we partnered with Litas to organize a competition for the participants to come up with ideas involving incorporating technology into our daily lives. The students came up with various wonderful ideas, keeping in mind the needs of today, social norms and various other nuanced factors when coming up with their ideas. The workshop was a big success, with many girls getting encouraged to further pursue coding.\\\"],\\\"participants\\\":25,\\\"hours\\\":6,\\\"days\\\":4,\\\"heroImg\\\":\\\"img/workshops/tsrsm/tsrsm2.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/tsrsm/tsrsm1.jpg\\\",\\\"img/workshops/tsrsm/tsrsm2.jpg\\\",\\\"img/workshops/tsrsm/tsrsm3.jpg\\\",\\\"img/workshops/tsrsm/tsrsm4.jpg\\\",\\\"img/workshops/tsrsm/tsrsm5.jpg\\\"]},{\\\"slug\\\":\\\"nus\\\",\\\"school\\\":\\\"National University of Singapore\\\",\\\"past\\\":true,\\\"date\\\":\\\"August 2018\\\",\\\"thumbnail\\\":\\\"img/workshops/nus/thumbnail.jpg\\\",\\\"body\\\":[\\\"On 10th August, The Girl Code held yet another successful workshop in collaboration with NUS School of Computing and sponsored by NUS ALSET.\\\",\\\"The workshop, held at the NUS School of Computing in Singapore was six hours long and hosted over sixty-five students from more than ten schools. The workshop held The Girl Code, taught students from Scratch, beginning with the most basic of concepts, gradually progressing to tougher ones.\\\"],\\\"participants\\\":68,\\\"hours\\\":6,\\\"days\\\":1,\\\"heroImg\\\":\\\"img/workshops/nus/hero.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/nus/1.jpg\\\",\\\"img/workshops/nus/2.jpg\\\",\\\"img/workshops/nus/3.jpg\\\",\\\"img/workshops/nus/4.jpg\\\",\\\"img/workshops/nus/5.jpg\\\"]},{\\\"slug\\\":\\\"oakridge-newton\\\",\\\"school\\\":\\\"Oakridge International School, Newton Campus\\\",\\\"past\\\":true,\\\"date\\\":\\\"July 2018\\\",\\\"thumbnail\\\":\\\"img/workshops/oakridge-newton/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code’s first workshop in Hyderabad was held at Oakridge International School Newton Campus over a span of ten days between July 23rd and August 14th with each days’ session taking place over an hour. A total of thirty-seven students attended, and were taught by seven mentors. Over the course of the workshop, various topics were successfully covered — Data types, String Operations, Input, Control Flow, Lists, and Functions being some of the many topics covered.\\\",\\\"Our students were able to easily understand and grasp all the concepts that were taught — after listening to mentors explain the concepts for about 10 minutes, they read through the curriculum material on The Girl Code platform and then completed the exercises pertaining to the concept. \\\"],\\\"participants\\\":37,\\\"hours\\\":11,\\\"days\\\":11,\\\"heroImg\\\":\\\"img/workshops/oakridge-newton/oak0.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/oakridge-newton/oak0.jpg\\\",\\\"img/workshops/oakridge-newton/oak1.jpg\\\",\\\"img/workshops/oakridge-newton/oak2.jpg\\\",\\\"img/workshops/oakridge-newton/oak3.jpg\\\",\\\"img/workshops/oakridge-newton/oak4.jpg\\\",\\\"img/workshops/oakridge-newton/oak5.jpg\\\"]},{\\\"slug\\\":\\\"gyan-bharti\\\",\\\"school\\\":\\\"Gyan Bharti School\\\",\\\"past\\\":true,\\\"date\\\":\\\"May 2018\\\",\\\"thumbnail\\\":\\\"img/workshops/gyan-bharti/thumbnail.jpeg\\\",\\\"body\\\":[\\\"The Girl Code’s workshop at Gyan Bharti School was held between 21st and 26th May of 2018, during which girls between the ages of 11 and 16 were given the opportunity to explore a new field without any inhibitions. It took place over 5 days and lasted 12.5 hours.\\\",\\\"The workshop garnered large amounts of participation, with 60 students attending it. During the workshop, students successfully made games on Scratch (a programming language targeting primarily children). An interactive video call was also held with Stanford student and founder of Litas, Anvita Gupta.\\\"],\\\"participants\\\":60,\\\"hours\\\":12.5,\\\"days\\\":5,\\\"heroImg\\\":\\\"img/workshops/gyan-bharti/gb2.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/gyan-bharti/gb1.jpg\\\",\\\"img/workshops/gyan-bharti/gb2.jpg\\\",\\\"img/workshops/gyan-bharti/gb3.jpg\\\",\\\"img/workshops/gyan-bharti/gb4.jpg\\\",\\\"img/workshops/gyan-bharti/gb5.jpg\\\"]},{\\\"slug\\\":\\\"mis\\\",\\\"school\\\":\\\"The Mother's International School\\\",\\\"past\\\":true,\\\"date\\\":\\\"January 2018\\\",\\\"thumbnail\\\":\\\"img/workshops/mis/thumbnail.jpg\\\",\\\"body\\\":[\\\"The Girl Code’s first workshop took place at Mother’s International School, New Delhi, and hosted over 50 girls, ranging from 7 to 16 years of age who were taught by mentors from 11th and 12th grade. The workshop lasted 6 days, beginning on January 2nd, 2018.\\\",\\\"The girls began the workshop with absolutely no prior knowledge on programming, but by the end, had all constructed a game using Scratch and were proficient in Python. Through the workshop, the girls had transformed from shy, diffident girls to those who were confident in themselves and their abilities. Following the workshop, two new participants had joined the school’s computing club, and another had cleared a cyber Olympiad.\\\"],\\\"participants\\\":50,\\\"hours\\\":12,\\\"days\\\":6,\\\"heroImg\\\":\\\"img/workshops/mis/mis0.jpg\\\",\\\"gallery\\\":[\\\"img/workshops/mis/mis0.jpg\\\",\\\"img/workshops/mis/mis1.jpg\\\",\\\"img/workshops/mis/mis2.jpg\\\",\\\"img/workshops/mis/mis3.jpg\\\",\\\"img/workshops/mis/mis4.jpg\\\",\\\"img/workshops/mis/mis5.jpg\\\"]},{\\\"slug\\\":\\\"mis-2020\\\",\\\"school\\\":\\\"The Mother's International School\\\",\\\"past\\\":false,\\\"date\\\":\\\"May 2020\\\",\\\"thumbnail\\\":\\\"img/workshops/mis/thumbnail.jpg\\\"}]\");\n\n//# sourceURL=webpack:///./src/static/data/workshops.json?");

/***/ })

/******/ });