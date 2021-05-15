(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Terminal/Block/index.tsx":
/*!*********************************************!*\
  !*** ./components/Terminal/Block/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Terminal/Block/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/samanthalau/Code/sammiepls.github.io/components/Terminal/Block/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Block = function Block(_ref) {
  var company = _ref.company,
      role = _ref.role,
      duration = _ref.duration,
      description = _ref.description,
      institute = _ref.institute,
      major = _ref.major,
      course = _ref.course;
  return __jsx("article", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, company || institute), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, role || course, " ", __jsx("time", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 28
    }
  }, duration))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, description || major));
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/Terminal/Block/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/Terminal/Block/styles.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/Block/styles.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/Block/styles.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/Block/styles.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Terminal/index.tsx":
/*!***************************************!*\
  !*** ./components/Terminal/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Terminal/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Block */ "./components/Terminal/Block/index.tsx");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./data.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/samanthalau/Code/sammiepls.github.io/components/Terminal/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Terminal = function Terminal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      selectedTab = _useState[0],
      setSelectedTab = _useState[1];

  return __jsx("article", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.terminal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.statusBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.terminalControls,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return setSelectedTab(0);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab, selectedTab === 0 && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Experience")), __jsx("button", {
    onClick: function onClick() {
      return setSelectedTab(1);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab, selectedTab === 1 && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Education"))), __jsx("section", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, selectedTab === 0 ? _data_json__WEBPACK_IMPORTED_MODULE_4__.experience.map(function (exp) {
    return __jsx(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], {
      company: exp.company,
      role: exp.role,
      duration: exp.duration,
      description: exp.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    });
  }) : _data_json__WEBPACK_IMPORTED_MODULE_4__.education.map(function (edu) {
    return __jsx(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], {
      institute: edu.institute,
      course: edu.course,
      duration: edu.duration,
      major: edu.major,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Terminal);

/***/ }),

/***/ "./components/Terminal/styles.module.scss":
/*!************************************************!*\
  !*** ./components/Terminal/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/styles.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/styles.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/styles.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: experience, education, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"experience\":[{\"company\":\"Fave\",\"role\":\"Software engineer (Front-end)\",\"duration\":\"Nov 2019 - current\",\"description\":\"Part of the team that built the merchant web views for Fave using React with functional components and hooks for better performance. Implemented visualization of merchant data with Chart.js. Helped set up CleverTap to track user events.\"},{\"company\":\"Jirnexu\",\"role\":\"Front-end developer\",\"duration\":\"Feb 2018 - Nov 2019\",\"description\":\"Revamped the RinggitPlus website to a modern, scalable and mobile-first website with speed and performance in mind using Marko.js and Algolia. Adopted the latest additions to CSS3 such as CSS grid and custom CSS properties. Optimized SEO with semantic HTML and JSON-LD.\"},{\"company\":\"Locus-T\",\"role\":\"Web designer\",\"duration\":\"Jan 2016 - Jan 2018\",\"description\":\"Responsible for creating website and landing page mockups, and digital marketing banners. Delved into web development by bringing those mockups to life with code with HTML and CSS by building Wordpress websites, landing pages and Alibaba sites.\"},{\"company\":\"The Idea Hut\",\"role\":\"Graphic designer\",\"duration\":\"Jan 2014 - Dec 2015\",\"description\":\"As the sole designer, worked independently to produce event visuals, promotional advertising materials and branding solutions in both digital and print mediums.\"}],\"education\":[{\"institute\":\"University of South Australia\",\"duration\":\"2010 - 2012\",\"course\":\"Bachelor of Arts\",\"major\":\"Communication and Media Management\"},{\"institute\":\"University of South Australia\",\"duration\":\"2012 - 2013\",\"course\":\"Bachelor of Media Arts\",\"major\":\"Digital Design\"},{\"institute\":\"Next Academy\",\"duration\":\"2016\",\"course\":\"Web development bootcamp\"}]}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/Block/styles.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Terminal/Block/styles.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".styles_block__O0BWR {\n  margin-bottom: 2rem;\n}\n.styles_block__O0BWR h3 {\n  color: var(--pink);\n  position: relative;\n}\n.styles_block__O0BWR h3::before {\n  content: \">\";\n  position: absolute;\n  left: -1.3rem;\n}\n.styles_block__O0BWR h4 {\n  font-family: \"Hasklig\";\n  color: var(--green);\n}\n.styles_block__O0BWR h4 time {\n  color: var(--purple);\n  display: block;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_block__O0BWR h4 time {\n    display: inline-block;\n  }\n  .styles_block__O0BWR h4 time::before {\n    content: \"|\";\n    margin-right: 1rem;\n  }\n}", "",{"version":3,"sources":["/Users/samanthalau/Code/sammiepls.github.io/components/Terminal/Block/styles.module.scss","/Users/samanthalau/Code/sammiepls.github.io/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;AADF;AAGE;EACE,kBAAA;EACA,kBAAA;AADJ;AAGI;EACE,YAAA;EACA,kBAAA;EACA,aAAA;AADN;AAKE;EACE,sBAAA;EACA,mBAAA;AAHJ;AAKI;EACE,oBAAA;EACA,cAAA;AAHN;AClBE;EDmBE;IAKI,qBAAA;EAFN;EAIM;IACE,YAAA;IACA,kBAAA;EAFR;AACF","file":"styles.module.scss","sourcesContent":["@import 'styles/mixins';\n\n.block {\n  margin-bottom: 2rem;\n\n  h3 {\n    color: var(--pink);\n    position: relative;\n\n    &::before {\n      content: '>';\n      position: absolute;\n      left: -1.3rem;\n    }\n  }\n\n  h4 {\n    font-family: 'Hasklig';\n    color: var(--green);\n\n    time {\n      color: var(--purple);\n      display: block;\n\n      @include for-desktop {\n        display: inline-block;\n\n        &::before {\n          content: '|';\n          margin-right: 1rem;\n        }\n      }\n    }\n  }\n}\n","@mixin for-desktop {\n  @media (min-width: 62.5em) and (orientation: landscape) {\n    @content;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"block": "styles_block__O0BWR"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Terminal/styles.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Terminal/styles.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".styles_terminal__ruBG6 {\n  background: var(--terminal-bg-color);\n  margin: 0 -2rem;\n  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_terminal__ruBG6 {\n    border-radius: 2rem;\n  }\n}\n\n.styles_statusBar__2LQbA {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  background: var(--statusbar-bg-color);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_statusBar__2LQbA {\n    display: block;\n    padding: 0.8rem 0.5rem 0;\n    border-radius: 2rem 2rem 0 0;\n  }\n}\n\n.styles_terminalControls__LQf-F {\n  display: none;\n  outline: none;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_terminalControls__LQf-F {\n    background: transparent;\n    border: none;\n    display: inline-block;\n    margin-left: 1rem;\n    margin-right: 3rem;\n    position: relative;\n  }\n  .styles_terminalControls__LQf-F span {\n    background: var(--yellow);\n    border-radius: 50%;\n    height: 1rem;\n    width: 1rem;\n    margin-left: 2rem;\n    display: inline-block;\n  }\n  .styles_terminalControls__LQf-F::before, .styles_terminalControls__LQf-F::after {\n    position: absolute;\n    content: \"\";\n    border-radius: 50%;\n    width: 1rem;\n    height: 1rem;\n    display: inline-block;\n  }\n  .styles_terminalControls__LQf-F::before {\n    margin-right: 2rem;\n    background: var(--pink);\n  }\n  .styles_terminalControls__LQf-F::after {\n    margin-left: 1rem;\n    background: var(--green);\n  }\n}\n\n.styles_tab__2C1Vj {\n  outline: none;\n  background: none;\n  border: none;\n  color: var(--text-color);\n  opacity: 0.1;\n  cursor: pointer;\n  transition: 0.3s all ease-out;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_tab__2C1Vj {\n    border-radius: 1rem 1rem 0 0;\n    margin: 0 0.5rem;\n    padding: 0.2rem 1rem;\n  }\n}\n.styles_tab__2C1Vj:hover {\n  transition: 0.3s all ease-out;\n  opacity: 0.6;\n  background: var(--terminal-bg-color);\n}\n.styles_tab__2C1Vj h3 {\n  margin: 0;\n}\n.styles_tab__2C1Vj.styles_active__1bor3 {\n  -webkit-filter: unset;\n          filter: unset;\n  opacity: 1;\n  background: var(--terminal-bg-color);\n}\n\n.styles_content__3aKrO {\n  padding: 1rem 2rem;\n  overflow-y: scroll;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .styles_content__3aKrO {\n    max-height: 60vh;\n    padding: 2rem 4rem;\n  }\n}", "",{"version":3,"sources":["/Users/samanthalau/Code/sammiepls.github.io/components/Terminal/styles.module.scss","/Users/samanthalau/Code/sammiepls.github.io/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,oCAAA;EACA,eAAA;EACA,gDAAA;AADF;ACHE;EDCF;IAMI,mBAAA;EAAF;AACF;;AAGA;EACE,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,qCAAA;EACA,wBAAA;EAAA,gBAAA;EACA,MAAA;EACA,WAAA;AAAF;AClBE;EDWF;IAUI,cAAA;IACA,wBAAA;IACA,4BAAA;EACF;AACF;;AAEA;EACE,aAAA;EACA,aAAA;AACF;AC9BE;ED2BF;IAKI,uBAAA;IACA,YAAA;IACA,qBAAA;IACA,iBAAA;IACA,kBAAA;IACA,kBAAA;EAEF;EAAE;IACE,yBAAA;IACA,kBAAA;IACA,YAAA;IACA,WAAA;IACA,iBAAA;IACA,qBAAA;EAEJ;EAAE;IAEE,kBAAA;IACA,WAAA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,qBAAA;EACJ;EAEE;IACE,kBAAA;IACA,uBAAA;EAAJ;EAGE;IACE,iBAAA;IACA,wBAAA;EADJ;AACF;;AAKA;EACE,aAAA;EACA,gBAAA;EACA,YAAA;EACA,wBAAA;EAEA,YAAA;EACA,eAAA;EACA,6BAAA;AAHF;AC1EE;EDqEF;IAWI,4BAAA;IACA,gBAAA;IACA,oBAAA;EAFF;AACF;AAIE;EAEE,6BAAA;EACA,YAAA;EACA,oCAAA;AAHJ;AAME;EACE,SAAA;AAJJ;AAOE;EACE,qBAAA;UAAA,aAAA;EACA,UAAA;EACA,oCAAA;AALJ;;AASA;EACE,kBAAA;EACA,kBAAA;AANF;ACnGE;EDuGF;IAKI,gBAAA;IACA,kBAAA;EALF;AACF","file":"styles.module.scss","sourcesContent":["@import 'styles/mixins.scss';\n\n.terminal {\n  background: var(--terminal-bg-color);\n  margin: 0 -2rem;\n  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);\n\n  @include for-desktop {\n    border-radius: 2rem;\n  }\n}\n\n.statusBar {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  background: var(--statusbar-bg-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n\n  @include for-desktop {\n    display: block;\n    padding: 0.8rem 0.5rem 0;\n    border-radius: 2rem 2rem 0 0;\n  }\n}\n\n.terminalControls {\n  display: none;\n  outline: none;\n\n  @include for-desktop {\n    background: transparent;\n    border: none;\n    display: inline-block;\n    margin-left: 1rem;\n    margin-right: 3rem;\n    position: relative;\n\n    span {\n      background: var(--yellow);\n      border-radius: 50%;\n      height: 1rem;\n      width: 1rem;\n      margin-left: 2rem;\n      display: inline-block;\n    }\n    &::before,\n    &::after {\n      position: absolute;\n      content: '';\n      border-radius: 50%;\n      width: 1rem;\n      height: 1rem;\n      display: inline-block;\n    }\n\n    &::before {\n      margin-right: 2rem;\n      background: var(--pink);\n    }\n\n    &::after {\n      margin-left: 1rem;\n      background: var(--green);\n    }\n  }\n}\n\n.tab {\n  outline: none;\n  background: none;\n  border: none;\n  color: var(--text-color);\n  //filter: opacity(10%);\n  opacity: 0.1;\n  cursor: pointer;\n  transition: 0.3s all ease-out;\n\n  @include for-desktop {\n    border-radius: 1rem 1rem 0 0;\n    margin: 0 0.5rem;\n    padding: 0.2rem 1rem;\n  }\n\n  &:hover {\n    //filter: opacity(60%);\n    transition: 0.3s all ease-out;\n    opacity: 0.6;\n    background: var(--terminal-bg-color);\n  }\n\n  h3 {\n    margin: 0;\n  }\n\n  &.active {\n    filter: unset;\n    opacity: 1;\n    background: var(--terminal-bg-color);\n  }\n}\n\n.content {\n  padding: 1rem 2rem;\n  overflow-y: scroll;\n\n  @include for-desktop {\n    max-height: 60vh;\n    padding: 2rem 4rem;\n  }\n}\n","@mixin for-desktop {\n  @media (min-width: 62.5em) and (orientation: landscape) {\n    @content;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"terminal": "styles_terminal__ruBG6",
	"statusBar": "styles_statusBar__2LQbA",
	"terminalControls": "styles_terminalControls__LQf-F",
	"tab": "styles_tab__2C1Vj",
	"active": "styles_active__1bor3",
	"content": "styles_content__3aKrO"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/index.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/index.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".index_container__3Or0C {\n  background: var(--bg-color);\n  min-height: 100vh;\n  padding: 0;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.index_header__2_wA9 {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.index_header__2_wA9 .index_logo__23Fjo {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 1rem;\n  max-width: 10rem;\n}\n.index_header__2_wA9 .index_title__3W9b9 {\n  height: 0;\n  color: transparent;\n  margin: 0;\n}\n.index_header__2_wA9 .index_intro__eAwt7 {\n  font-size: 3rem;\n}\n\n.index_about__2igOD {\n  text-align: center;\n  margin: 2rem 0;\n  display: grid;\n  grid-gap: 1rem;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .index_about__2igOD {\n    text-align: left;\n  }\n}\n.index_about__2igOD .index_avatar__3wUkm {\n  grid-row: 2;\n  margin: 2rem auto;\n  max-width: 12.5rem;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 1rem #333333;\n}\n.index_about__2igOD address {\n  margin: 1rem 0;\n}\n.index_about__2igOD address ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .index_about__2igOD address ul {\n    text-align: left;\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n.index_about__2igOD address ul li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .index_about__2igOD address ul li {\n    width: 50%;\n    justify-content: flex-start;\n  }\n}\n.index_about__2igOD address ul li a {\n  display: flex;\n  font-style: normal;\n  text-decoration: none;\n  color: var(--white);\n  transition: 0.3s ease-out;\n}\n.index_about__2igOD address ul li a:hover {\n  transform: scale(1.05);\n}\n.index_about__2igOD address ul li a img {\n  margin-right: 1rem;\n}\n@media (min-width: 62.5em) and (orientation: landscape) {\n  .index_about__2igOD {\n    grid-template-columns: 20rem 1fr;\n    grid-gap: 0;\n  }\n  .index_about__2igOD h2 {\n    grid-column: 2/3;\n  }\n  .index_about__2igOD .index_avatar__3wUkm {\n    grid-area: 1/1/4/2;\n  }\n  .index_about__2igOD address {\n    grid-column: 2/3;\n  }\n}", "",{"version":3,"sources":["/Users/samanthalau/Code/sammiepls.github.io/pages/index.module.scss","/Users/samanthalau/Code/sammiepls.github.io/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,2BAAA;EACA,iBAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,kBAAA;EACA,mBAAA;AADF;AAGE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AADJ;AAIE;EACE,SAAA;EACA,kBAAA;EACA,SAAA;AAFJ;AAKE;EACE,eAAA;AAHJ;;AAOA;EACE,kBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;AAJF;ACjCE;EDiCF;IAOI,gBAAA;EAHF;AACF;AAKE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,8BAAA;AAHJ;AAME;EACE,cAAA;AAJJ;AAMI;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAJN;ACtDE;EDuDE;IAMI,gBAAA;IACA,aAAA;IACA,eAAA;EAHN;AACF;AAKM;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AAHR;ACnEE;EDkEI;IAOI,UAAA;IACA,2BAAA;EAFR;AACF;AAIQ;EACE,aAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBAAA;AAFV;AAIU;EACE,sBAAA;AAFZ;AAKU;EACE,kBAAA;AAHZ;ACtFE;EDiCF;IAgEI,gCAAA;IACA,WAAA;EAPF;EASE;IACE,gBAAA;EAPJ;EAUE;IACE,kBAAA;EARJ;EAWE;IACE,gBAAA;EATJ;AACF","file":"index.module.scss","sourcesContent":["@import 'styles/mixins.scss';\n\n.container {\n  background: var(--bg-color);\n  min-height: 100vh;\n  padding: 0;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header {\n  text-align: center;\n  margin-bottom: 5rem;\n\n  .logo {\n    width: 100%;\n    margin: auto;\n    margin-bottom: 1rem;\n    max-width: 10rem;\n  }\n\n  .title {\n    height: 0;\n    color: transparent;\n    margin: 0;\n  }\n\n  .intro {\n    font-size: 3rem;\n  }\n}\n\n.about {\n  text-align: center;\n  margin: 2rem 0;\n  display: grid;\n  grid-gap: 1rem;\n\n  @include for-desktop {\n    text-align: left;\n  }\n\n  .avatar {\n    grid-row: 2;\n    margin: 2rem auto;\n    max-width: 12.5rem;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    box-shadow: 0 0 0 1rem hsl(0, 0%, 20%);\n  }\n\n  address {\n    margin: 1rem 0;\n\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n\n      @include for-desktop {\n        text-align: left;\n        display: flex;\n        flex-wrap: wrap;\n      }\n\n      li {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 1rem;\n\n        @include for-desktop {\n          width: 50%;\n          justify-content: flex-start;\n        }\n\n        a {\n          display: flex;\n          font-style: normal;\n          text-decoration: none;\n          color: var(--white);\n          transition: 0.3s ease-out;\n\n          &:hover {\n            transform: scale(1.05);\n          }\n\n          img {\n            margin-right: 1rem;\n          }\n        }\n      }\n    }\n  }\n\n  @include for-desktop {\n    grid-template-columns: 20rem 1fr;\n    grid-gap: 0;\n\n    h2 {\n      grid-column: 2/3;\n    }\n\n    .avatar {\n      grid-area: 1/1/4/2;\n    }\n\n    address {\n      grid-column: 2/3;\n    }\n  }\n}\n","@mixin for-desktop {\n  @media (min-width: 62.5em) and (orientation: landscape) {\n    @content;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"container": "index_container__3Or0C",
	"header": "index_header__2_wA9",
	"logo": "index_logo__23Fjo",
	"title": "index_title__3W9b9",
	"intro": "index_intro__eAwt7",
	"about": "index_about__2igOD",
	"avatar": "index_avatar__3wUkm"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsamanthalau%2FCode%2Fsammiepls.github.io%2Fpages%2Findex.tsx!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsamanthalau%2FCode%2Fsammiepls.github.io%2Fpages%2Findex.tsx ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Terminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Terminal */ "./components/Terminal/index.tsx");
var _jsxFileName = "/Users/samanthalau/Code/sammiepls.github.io/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Sammiepls"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Sammiepls"), __jsx("img", {
    src: "/logo-white.svg",
    alt: "Sammiepls Logo",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "I\u2019m Sammie, a web designer turned ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 47
    }
  }), "developer from Kuala Lumpur, Malaysia.")), __jsx("section", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.about,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Hi how are you?"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Originally working in print design, but realized all the exciting stuff was in digital. After making the switch to web design, fell in love with making designs come to life with code. Now a web developer on a life-long journey of learning."), __jsx("address", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "tel:0122372518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/icon-phone-white.svg",
    alt: "Phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }), "+(6) 012-237 2518")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "mailto:samantha.lhe@gmail.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/icon-email-white.svg",
    alt: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }), "samantha.lhe@gmail.com")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://github.com/sammiepls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/icon-github-white.svg",
    alt: "Github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }), "Github")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://linkedin.com/sammiepls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/icon-linkedin-white.svg",
    alt: "LinkedIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }), "LinkedIn")))), __jsx("img", {
    src: "/avatar.jpg",
    alt: "Sammie",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx(_components_Terminal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 1:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsamanthalau%2FCode%2Fsammiepls.github.io%2Fpages%2Findex.tsx ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsamanthalau%2FCode%2Fsammiepls.github.io%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsamanthalau%2FCode%2Fsammiepls.github.io%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map