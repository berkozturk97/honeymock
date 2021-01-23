module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/loginStep2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginSteps/Step2.js":
/*!****************************************!*\
  !*** ./components/LoginSteps/Step2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ "rsuite");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\SECKIN\\Desktop\\honeymock\\components\\LoginSteps\\Step2.js";





function Step2() {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("1");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const [checkedItems, setCheckedItems] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([false, false, false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ml: 5,
      color: "#979EA7",
      fontSize: "3xl",
      children: "Some practical questions.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ml: 5,
      fontWeight: "bold",
      mt: 10,
      fontSize: "xl",
      children: "What type of employment are you looking for? *"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      pl: 6,
      mt: 1,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[0],
        onChange: e => setCheckedItems([e.target.checked, checkedItems[1]]),
        children: "Permanent (full-time)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[1],
        onChange: e => setCheckedItems([checkedItems[0], e.target.checked]),
        children: "Part-time"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[2],
        onChange: e => setCheckedItems([checkedItems[2], e.target.checked]),
        children: "Contract / Freelance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[3],
        onChange: e => setCheckedItems([checkedItems[3], e.target.checked]),
        children: "Intern"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ml: 5,
      fontWeight: "bold",
      mt: 10,
      fontSize: "xl",
      children: "Where would you like to work? *"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      ml: 5,
      border: "#555555",
      isChecked: allChecked,
      isIndeterminate: isIndeterminate,
      onChange: e => setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked]),
      children: "Select all cities"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      pl: 6,
      mt: 1,
      ml: 5,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[0],
        onChange: e => setCheckedItems([e.target.checked, checkedItems[1]]),
        children: "Seattle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[1],
        onChange: e => setCheckedItems([checkedItems[0], e.target.checked]),
        children: "New York"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[2],
        onChange: e => setCheckedItems([checkedItems[2], e.target.checked]),
        children: "San Fransisco"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        border: "#555555",
        isChecked: checkedItems[3],
        onChange: e => setCheckedItems([checkedItems[3], e.target.checked]),
        children: "Washington D.C."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ml: 5,
      fontWeight: "bold",
      mt: 10,
      fontSize: "xl",
      children: "Do you have an USA work permit? *"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      placeholder: "--select--",
      w: 300,
      ml: 5,
      mt: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "option1",
        children: "Yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "option2",
        children: "No"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      ml: 5,
      fontWeight: "bold",
      mt: 10,
      fontSize: "xl",
      children: "When can you start? *"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], {
      onChange: setValue,
      mt: 10,
      value: value,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
        ml: 5,
        direction: "column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          value: "1",
          children: "Now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          value: "2",
          children: "Upon completing notice period"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          value: "3",
          children: "After a specific date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      bg: "#7DB0E4",
      color: "white",
      _hover: "none",
      ml: 5,
      onClick: () => router.push('/login/loginStep3'),
      mt: 5,
      children: "Click And Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Step2);

/***/ }),

/***/ "./pages/login/loginStep2.js":
/*!***********************************!*\
  !*** ./pages/login/loginStep2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginSteps_Step2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginSteps/Step2 */ "./components/LoginSteps/Step2.js");

var _jsxFileName = "C:\\Users\\SECKIN\\Desktop\\honeymock\\pages\\login\\loginStep2.js";



function LoginStep2() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: 1000,
    backgroundColor: "#fff",
    h: 'auto',
    p: 10,
    m: (0, 'auto'),
    mt: 10,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginSteps_Step2__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 16
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoginStep2);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "rsuite":
/*!*************************!*\
  !*** external "rsuite" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rsuite");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpblN0ZXBzL1N0ZXAyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2xvZ2luU3RlcDIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyc3VpdGVcIiJdLCJuYW1lcyI6WyJTdGVwMiIsInZhbHVlIiwic2V0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2hlY2tlZEl0ZW1zIiwic2V0Q2hlY2tlZEl0ZW1zIiwiYWxsQ2hlY2tlZCIsImV2ZXJ5IiwiQm9vbGVhbiIsImlzSW5kZXRlcm1pbmF0ZSIsInNvbWUiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInB1c2giLCJMb2dpblN0ZXAyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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QUF2RTtBQUF5RyxRQUFFLEVBQUUsQ0FBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoSEY7QUFBQSxrQkFERjtBQXNIRDs7QUFFY2pCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkpBO0FBQ0E7O0FBRUEsU0FBU2tCLFVBQVQsR0FBc0I7QUFDbkIsc0JBQVkscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUUsSUFBUjtBQUFjLG1CQUFlLEVBQUMsTUFBOUI7QUFBcUMsS0FBQyxFQUFFLE1BQXhDO0FBQWdELEtBQUMsRUFBRSxFQUFuRDtBQUF1RCxLQUFDLEdBQUcsR0FBRyxNQUFOLENBQXhEO0FBQXVFLE1BQUUsRUFBRSxFQUEzRTtBQUFBLDJCQUNYLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVo7QUFJRjs7QUFFY0EseUVBQWYsRTs7Ozs7Ozs7Ozs7QUNWQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9sb2dpbi9sb2dpblN0ZXAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi9sb2dpblN0ZXAyLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgQ2hlY2tib3gsXHJcbiAgU3RhY2ssXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBTZWxlY3RcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBSYWRpbywgUmFkaW9Hcm91cCB9IGZyb20gJ3JzdWl0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFN0ZXAyKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIjFcIilcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjaGVja2VkSXRlbXMsIHNldENoZWNrZWRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShbXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gIF0pXHJcblxyXG4gIGNvbnN0IGFsbENoZWNrZWQgPSBjaGVja2VkSXRlbXMuZXZlcnkoQm9vbGVhbilcclxuICBjb25zdCBpc0luZGV0ZXJtaW5hdGUgPSBjaGVja2VkSXRlbXMuc29tZShCb29sZWFuKSAmJiAhYWxsQ2hlY2tlZFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dCBtbD17NX0gY29sb3I9XCIjOTc5RUE3XCIgZm9udFNpemU9XCIzeGxcIj5cclxuICAgICAgICBTb21lIHByYWN0aWNhbCBxdWVzdGlvbnMuLlxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8VGV4dCBtbD17NX0gZm9udFdlaWdodD1cImJvbGRcIiBtdD17MTB9IGZvbnRTaXplPVwieGxcIj5cclxuICAgICAgICBXaGF0IHR5cGUgb2YgZW1wbG95bWVudCBhcmUgeW91IGxvb2tpbmcgZm9yPyAqXHJcbiAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgIDxTdGFjayBwbD17Nn0gbXQ9ezF9IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgYm9yZGVyPVwiIzU1NTU1NVwiXHJcbiAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1swXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tlZEl0ZW1zKFtlLnRhcmdldC5jaGVja2VkLCBjaGVja2VkSXRlbXNbMV1dKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQZXJtYW5lbnQgKGZ1bGwtdGltZSlcclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgYm9yZGVyPVwiIzU1NTU1NVwiXHJcbiAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1sxXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tlZEl0ZW1zKFtjaGVja2VkSXRlbXNbMF0sIGUudGFyZ2V0LmNoZWNrZWRdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQYXJ0LXRpbWVcclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgYm9yZGVyPVwiIzU1NTU1NVwiXHJcbiAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1syXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tlZEl0ZW1zKFtjaGVja2VkSXRlbXNbMl0sIGUudGFyZ2V0LmNoZWNrZWRdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb250cmFjdCAvIEZyZWVsYW5jZVxyXG4gICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBib3JkZXI9XCIjNTU1NTU1XCJcclxuICAgICAgICAgIGlzQ2hlY2tlZD17Y2hlY2tlZEl0ZW1zWzNdfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2VkSXRlbXMoW2NoZWNrZWRJdGVtc1szXSwgZS50YXJnZXQuY2hlY2tlZF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEludGVyblxyXG4gICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICA8VGV4dCBtbD17NX0gZm9udFdlaWdodD1cImJvbGRcIiBtdD17MTB9IGZvbnRTaXplPVwieGxcIj5cclxuICAgICAgV2hlcmUgd291bGQgeW91IGxpa2UgdG8gd29yaz8gKlxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8Q2hlY2tib3hcclxuICAgICAgbWw9ezV9IFxyXG4gICAgICAgIGJvcmRlcj1cIiM1NTU1NTVcIlxyXG4gICAgICAgIGlzQ2hlY2tlZD17YWxsQ2hlY2tlZH1cclxuICAgICAgICBpc0luZGV0ZXJtaW5hdGU9e2lzSW5kZXRlcm1pbmF0ZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRDaGVja2VkSXRlbXMoW1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIFNlbGVjdCBhbGwgY2l0aWVzXHJcbiAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgIDxTdGFjayBwbD17Nn0gbXQ9ezF9IG1sPXs1fSAgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBib3JkZXI9XCIjNTU1NTU1XCJcclxuICAgICAgICAgIGlzQ2hlY2tlZD17Y2hlY2tlZEl0ZW1zWzBdfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2VkSXRlbXMoW2UudGFyZ2V0LmNoZWNrZWQsIGNoZWNrZWRJdGVtc1sxXV0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNlYXR0bGVcclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgYm9yZGVyPVwiIzU1NTU1NVwiXHJcbiAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1sxXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tlZEl0ZW1zKFtjaGVja2VkSXRlbXNbMF0sIGUudGFyZ2V0LmNoZWNrZWRdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXcgWW9ya1xyXG4gICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBib3JkZXI9XCIjNTU1NTU1XCJcclxuICAgICAgICAgIGlzQ2hlY2tlZD17Y2hlY2tlZEl0ZW1zWzJdfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2VkSXRlbXMoW2NoZWNrZWRJdGVtc1syXSwgZS50YXJnZXQuY2hlY2tlZF0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNhbiBGcmFuc2lzY29cclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgYm9yZGVyPVwiIzU1NTU1NVwiXHJcbiAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1szXX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tlZEl0ZW1zKFtjaGVja2VkSXRlbXNbM10sIGUudGFyZ2V0LmNoZWNrZWRdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBXYXNoaW5ndG9uIEQuQy5cclxuICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgPFRleHQgbWw9ezV9IGZvbnRXZWlnaHQ9XCJib2xkXCIgIG10PXsxMH0gZm9udFNpemU9XCJ4bFwiPlxyXG4gICAgICAgIERvIHlvdSBoYXZlIGFuIFVTQSB3b3JrIHBlcm1pdD8gKlxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiLS1zZWxlY3QtLVwiIHc9ezMwMH0gbWw9ezV9IG10PXs1fT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3B0aW9uMVwiPlllczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+Tm88L29wdGlvbj5cclxuICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICA8VGV4dCBtbD17NX0gZm9udFdlaWdodD1cImJvbGRcIiAgbXQ9ezEwfSBmb250U2l6ZT1cInhsXCI+XHJcbiAgICAgICAgV2hlbiBjYW4geW91IHN0YXJ0PyAqXHJcbiAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgIDxSYWRpb0dyb3VwIG9uQ2hhbmdlPXtzZXRWYWx1ZX0gbXQ9ezEwfSAgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgPFN0YWNrIG1sPXs1fSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICA8UmFkaW8gdmFsdWU9XCIxXCI+Tm93PC9SYWRpbz5cclxuICAgICAgICA8UmFkaW8gdmFsdWU9XCIyXCI+VXBvbiBjb21wbGV0aW5nIG5vdGljZSBwZXJpb2Q8L1JhZGlvPlxyXG4gICAgICAgIDxSYWRpbyB2YWx1ZT1cIjNcIj5BZnRlciBhIHNwZWNpZmljIGRhdGU8L1JhZGlvPlxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgPC9SYWRpb0dyb3VwPlxyXG5cclxuICAgICAgPEJ1dHRvbiBiZz1cIiM3REIwRTRcIiBjb2xvcj1cIndoaXRlXCIgX2hvdmVyPVwibm9uZVwiIG1sPXs1fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2xvZ2luL2xvZ2luU3RlcDMnKX0gbXQ9ezV9PlxyXG4gICAgICAgIENsaWNrIEFuZCBTYXZlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwMlxyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgU3RlcDIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dpblN0ZXBzL1N0ZXAyJ1xyXG5cclxuZnVuY3Rpb24gTG9naW5TdGVwMigpIHtcclxuICAgcmV0dXJuKCAgICAgPEJveCB3PXsxMDAwfSBiYWNrZ3JvdW5kQ29sb3I9JyNmZmYnIGg9eydhdXRvJ30gcD17MTB9IG09eygwLCAnYXV0bycpfSBtdD17MTB9PlxyXG4gICAgPFN0ZXAyIC8+XHJcbiAgPC9Cb3g+KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5TdGVwMjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyc3VpdGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==