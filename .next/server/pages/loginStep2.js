module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/loginStep2.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/LoginSteps/Step2.js\";\n\n\nfunction Step2() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      ml: 5,\n      color: \"#979EA7\",\n      fontSize: \"3xl\",\n      children: [\"Hi Berk! Let's start with the basics!\", ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 14\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      ml: 5,\n      fontWeight: \"bold\",\n      mt: 10,\n      fontSize: \"xl\",\n      children: \"Let us help you fill in all your professional info with your CV. This will speed you up by 50%.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      ml: 5,\n      mt: 2,\n      fontSize: \"md\",\n      children: \"You don't have a CV? You can also upload your LinkedIn profile, click here to see how. Supported file formats: PDF and DOC(X) with maximum file size limit of 20MB\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      bg: \"#7DB0E4\",\n      color: \"white\",\n      _hover: \"none\",\n      ml: 5,\n      mt: 5,\n      children: \"Click And Save\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Step2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luU3RlcHMvU3RlcDIuanM/NWUyZSJdLCJuYW1lcyI6WyJTdGVwMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFTQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBQSw0QkFDSyxxRUFBQyxxREFBRDtBQUFNLFFBQUUsRUFBRSxDQUFWO0FBQWEsV0FBSyxFQUFDLFNBQW5CO0FBQTZCLGNBQVEsRUFBQyxLQUF0QztBQUFBLDBEQUM2QixHQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETCxlQUlOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKTSxlQUtOLHFFQUFDLHFEQUFEO0FBQU0sUUFBRSxFQUFFLENBQVY7QUFBYSxnQkFBVSxFQUFDLE1BQXhCO0FBQStCLFFBQUUsRUFBRSxFQUFuQztBQUF1QyxjQUFRLEVBQUMsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMTSxlQVNOLHFFQUFDLHFEQUFEO0FBQU0sUUFBRSxFQUFFLENBQVY7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsY0FBUSxFQUFDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVE0sZUFnQk4scUVBQUMsdURBQUQ7QUFBUSxRQUFFLEVBQUMsU0FBWDtBQUFxQixXQUFLLEVBQUMsT0FBM0I7QUFBbUMsWUFBTSxFQUFDLE1BQTFDO0FBQWlELFFBQUUsRUFBRSxDQUFyRDtBQUF3RCxRQUFFLEVBQUUsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQk07QUFBQSxrQkFESjtBQXVCSDs7QUFFY0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luU3RlcHMvU3RlcDIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgRmxleCxcbiAgICBGb3JtQ29udHJvbCxcbiAgICBJY29uLFxuICAgIElucHV0LFxuICAgIFRleHRcbiAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuZnVuY3Rpb24gU3RlcDIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgIDxUZXh0IG1sPXs1fSBjb2xvcj1cIiM5NzlFQTdcIiBmb250U2l6ZT1cIjN4bFwiPlxuICAgIEhpIEJlcmshIExldCdzIHN0YXJ0IHdpdGggdGhlIGJhc2ljcyF7JyAnfVxuICA8L1RleHQ+XG4gIDxociAvPlxuICA8VGV4dCBtbD17NX0gZm9udFdlaWdodD1cImJvbGRcIiBtdD17MTB9IGZvbnRTaXplPVwieGxcIj5cbiAgICBMZXQgdXMgaGVscCB5b3UgZmlsbCBpbiBhbGwgeW91ciBwcm9mZXNzaW9uYWwgaW5mbyB3aXRoIHlvdXIgQ1YuIFRoaXNcbiAgICB3aWxsIHNwZWVkIHlvdSB1cCBieSA1MCUuXG4gIDwvVGV4dD5cbiAgPFRleHQgbWw9ezV9IG10PXsyfSBmb250U2l6ZT1cIm1kXCI+XG4gICAgWW91IGRvbid0IGhhdmUgYSBDVj8gWW91IGNhbiBhbHNvIHVwbG9hZCB5b3VyIExpbmtlZEluIHByb2ZpbGUsIGNsaWNrXG4gICAgaGVyZSB0byBzZWUgaG93LiBTdXBwb3J0ZWQgZmlsZSBmb3JtYXRzOiBQREYgYW5kIERPQyhYKSB3aXRoIG1heGltdW1cbiAgICBmaWxlIHNpemUgbGltaXQgb2YgMjBNQlxuICA8L1RleHQ+XG5cblxuICA8QnV0dG9uIGJnPVwiIzdEQjBFNFwiIGNvbG9yPVwid2hpdGVcIiBfaG92ZXI9XCJub25lXCIgbWw9ezV9IG10PXs1fT5cbiAgICBDbGljayBBbmQgU2F2ZVxuICA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKVxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXAyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginSteps/Step2.js\n");

/***/ }),

/***/ "./pages/loginStep2.js":
/*!*****************************!*\
  !*** ./pages/loginStep2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LoginSteps_Step2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginSteps/Step2 */ \"./components/LoginSteps/Step2.js\");\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/pages/loginStep2.js\";\n\n\n\nfunction LoginStep2() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: 1000,\n    height: \"auto\",\n    bg: \"\",\n    m: (0, 'auto'),\n    mt: 10,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LoginSteps_Step2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginStep2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpblN0ZXAyLmpzPzM4ZDEiXSwibmFtZXMiOlsiTG9naW5TdGVwMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkIsc0JBQVEscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUUsSUFBUjtBQUFjLFVBQU0sRUFBQyxNQUFyQjtBQUE0QixNQUFFLEVBQUMsRUFBL0I7QUFBa0MsS0FBQyxHQUFHLEdBQUcsTUFBTixDQUFuQztBQUFrRCxNQUFFLEVBQUUsRUFBdEQ7QUFBQSwyQkFDUCxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBSUY7O0FBRWNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW5TdGVwMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgU3RlcDIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpblN0ZXBzL1N0ZXAyJ1xuXG5mdW5jdGlvbiBMb2dpblN0ZXAyKCkge1xuICAgcmV0dXJuKCA8Qm94IHc9ezEwMDB9IGhlaWdodD1cImF1dG9cIiBiZz1cIlwiIG09eygwLCAnYXV0bycpfSBtdD17MTB9PlxuICAgIDxTdGVwMiAvPlxuICA8L0JveD4pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5TdGVwMjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/loginStep2.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });