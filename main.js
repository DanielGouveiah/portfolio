/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animar-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/animar-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimarScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar AnimarScroll = /*#__PURE__*/function () {\n  function AnimarScroll(elements) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimarScroll);\n\n    this.sections = document.querySelectorAll(elements);\n    this.halfWindow = window.innerHeight * 0.5;\n    this.animarScroll = this.animarScroll.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimarScroll, [{\n    key: \"animarScroll\",\n    value: function animarScroll() {\n      var _this = this;\n\n      this.sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n\n        if (sectionTop <= _this.halfWindow) {\n          section.classList.add(\"ativo\");\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.animarScroll();\n        window.addEventListener(\"scroll\", this.animarScroll);\n      }\n\n      return this;\n    }\n  }]);\n\n  return AnimarScroll;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./js/modules/animar-scroll.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(menuBtn, menuList) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n\n    this.menuBtn = document.querySelector(menuBtn);\n    this.menuList = document.querySelector(menuList);\n    this.events = [\"touch\", \"click\"];\n    this.toggleMenu = this.toggleMenu.bind(this);\n    this.outSideClick = this.outSideClick.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"outSideClick\",\n    value: function outSideClick(e) {\n      var _this = this;\n\n      if (e.target !== this.menuList) {\n        if (this.menuList.hasAttribute(\"data-outside\")) {\n          this.menuList.classList.remove(\"ativo\");\n          this.menuList.removeAttribute(\"data-outside\");\n          this.menuBtn.removeAttribute(\"data-outside\", \"\");\n          this.events.forEach(function (userEvent) {\n            setTimeout(function () {\n              window.removeEventListener(userEvent, _this.outSideClick);\n            }, 0);\n          });\n        }\n      }\n    }\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      var _this2 = this;\n\n      if (!this.menuList.classList.contains(\"ativo\")) {\n        this.menuList.classList.add(\"ativo\");\n        this.menuList.setAttribute(\"data-outside\", \"\");\n        this.menuBtn.setAttribute(\"data-outside\", \"\");\n      }\n\n      this.events.forEach(function (userEvent) {\n        setTimeout(function () {\n          window.addEventListener(userEvent, _this2.outSideClick);\n        }, 0);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this3 = this;\n\n      if (this.menuList && this.menuBtn) {\n        this.events.forEach(function (userEvent) {\n          _this3.menuBtn.addEventListener(userEvent, _this3.toggleMenu);\n        });\n      }\n\n      return this;\n    }\n  }]);\n\n  return MenuMobile;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n\n    this.links = document.querySelectorAll(links);\n    this.events = [\"touch\", \"click\"];\n    this.options = {\n      behavior: \"smooth\"\n    };\n    this.scrollSuave = this.scrollSuave.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollSuave\",\n    value: function scrollSuave(e) {\n      e.preventDefault();\n      var href = e.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addElementEvents\",\n    value: function addElementEvents() {\n      var _this = this;\n\n      this.links.forEach(function (link) {\n        _this.events.forEach(function (userEvent) {\n          link.addEventListener(userEvent, _this.scrollSuave);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addElementEvents();\n      return this;\n    }\n  }]);\n\n  return ScrollSuave;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/show-more.js":
/*!*********************************!*\
  !*** ./js/modules/show-more.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowMore)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ShowMore = /*#__PURE__*/function () {\n  function ShowMore(btn, lista) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ShowMore);\n\n    this.showBtn = document.querySelector(btn);\n    this.lista = document.querySelector(lista);\n    this.listaParent = this.lista.parentElement;\n    this.events = [\"touch\", \"click\"];\n    this.showMore = this.showMore.bind(this);\n    this.goTop = this.goTop.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ShowMore, [{\n    key: \"goTop\",\n    value: function goTop() {\n      this.listaParent.scrollIntoView();\n    }\n  }, {\n    key: \"showMore\",\n    value: function showMore() {\n      var _this = this;\n\n      this.lista.classList.toggle(\"ativo\");\n\n      if (this.lista.classList.contains(\"ativo\")) {\n        this.showBtn.innerHTML = \"Ver menos\";\n        this.events.forEach(function (userEvent) {\n          _this.showBtn.addEventListener(userEvent, _this.goTop);\n        });\n      } else {\n        this.showBtn.innerHTML = \"Ver mais\";\n        setTimeout(function () {\n          _this.events.forEach(function (userEvent) {\n            _this.showBtn.removeEventListener(userEvent, _this.goTop);\n          });\n        }, 0);\n      }\n    }\n  }, {\n    key: \"addEventElements\",\n    value: function addEventElements() {\n      var _this2 = this;\n\n      this.events.forEach(function (userEvent) {\n        _this2.showBtn.addEventListener(userEvent, _this2.showMore);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.addEventElements();\n      return this;\n    }\n  }]);\n\n  return ShowMore;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./js/modules/show-more.js?");

/***/ }),

/***/ "./js/modules/title-animation.js":
/*!***************************************!*\
  !*** ./js/modules/title-animation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TitleAnimation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar TitleAnimation = /*#__PURE__*/function () {\n  function TitleAnimation(element) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TitleAnimation);\n\n    this.title = document.querySelector(element);\n    this.oldTitle = this.title.innerText.split(\"\");\n    this.cont = 200;\n    this.blinkText = this.blinkText.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TitleAnimation, [{\n    key: \"blinkText\",\n    value: function blinkText(_char) {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.title.innerText += _char;\n      }, this.cont);\n      this.cont += 100;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.title.innerText = \"\";\n      this.oldTitle.forEach(function (_char2) {\n        _this2.blinkText(_char2 === undefined ? \" \" : _char2);\n      });\n    }\n  }]);\n\n  return TitleAnimation;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./js/modules/title-animation.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animar-scroll.js */ \"./js/modules/animar-scroll.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_show_more_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/show-more.js */ \"./js/modules/show-more.js\");\n/* harmony import */ var _modules_title_animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/title-animation.js */ \"./js/modules/title-animation.js\");\n\n\n\n\n\ndocument.documentElement.classList.add(\"js\");\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".menu li a\");\nscrollSuave.init();\nvar scrollToTop = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".to-top\");\nscrollToTop.init();\nvar showMoreCursos = new _modules_show_more_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"#ver-cursos\", \".academico-cursos\");\nshowMoreCursos.init();\nvar showMoreProjetos = new _modules_show_more_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"#ver-projetos\", \".projetos-lista\");\nshowMoreProjetos.init();\nvar menuBtn = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".menu-mobile\", \".menu\");\nmenuBtn.init();\nvar animarScroll = new _modules_animar_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-anime='scroll']\");\nanimarScroll.init();\nvar titleAnimation = new _modules_title_animation_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\".conteudo h1\");\ntitleAnimation.init();\n\n//# sourceURL=webpack://portfolio/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;