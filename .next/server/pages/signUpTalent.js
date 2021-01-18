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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signUpTalent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/talentApi.js":
/*!**************************!*\
  !*** ./api/talentApi.js ***!
  \**************************/
/*! exports provided: loginTalent, getTalents, createTalent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginTalent\", function() { return loginTalent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTalents\", function() { return getTalents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTalent\", function() { return createTalent; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loginTalent = ({\n  body = null\n}) => {\n  return new Promise((resolve, reject) => {\n    let REQUEST_URL = \"https://honeypot-server.herokuapp.com/auth/loginTalent\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REQUEST_URL, body).then(response => {\n      resolve(response.data);\n    }).catch(err => {\n      reject(null);\n    });\n  });\n};\nconst getTalents = token => {\n  return new Promise((resolve, reject) => {\n    let REQUEST_URL = \"https://honeypot-server.herokuapp.com/talent/getTalents\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(REQUEST_URL, {\n      headers: {\n        'token': token\n      }\n    }).then(response => {\n      resolve(response.data);\n    }).catch(err => {\n      reject(null);\n    });\n  });\n};\nconst createTalent = ({\n  body = null\n}) => {\n  return new Promise((resolve, reject) => {\n    let REQUEST_URL = \"https://honeypot-server.herokuapp.com/talent/createTalent\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REQUEST_URL, body, {\n      headers: {\n        'token': \"16108922870918d187342fbbfb548b2b329629db4a2fe20c46e91\"\n      }\n    }).then(response => {\n      console.log(response);\n      resolve(response.data);\n    }).catch(err => {\n      reject(null);\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdGFsZW50QXBpLmpzPzdmZTgiXSwibmFtZXMiOlsibG9naW5UYWxlbnQiLCJib2R5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJSRVFVRVNUX1VSTCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImdldFRhbGVudHMiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJjcmVhdGVUYWxlbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUNDLE1BQUksR0FBQztBQUFOLENBQUQsS0FBaUI7QUFDeEMsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFFBQUlDLFdBQVcsR0FBRyx3REFBbEI7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXRixXQUFYLEVBQXVCSixJQUF2QixFQUNLTyxJQURMLENBQ1dDLFFBQUQsSUFBYztBQUNoQk4sYUFBTyxDQUFDTSxRQUFRLENBQUNDLElBQVYsQ0FBUDtBQUNILEtBSEwsRUFHT0MsS0FIUCxDQUdjQyxHQUFELElBQVM7QUFDZFIsWUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNILEtBTEw7QUFNSCxHQVJNLENBQVA7QUFTSCxDQVZNO0FBWUEsTUFBTVMsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFDakMsU0FBTyxJQUFJWixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFFBQUlDLFdBQVcsR0FBRyx5REFBbEI7QUFDQUMsZ0RBQUssQ0FBQ1MsR0FBTixDQUFVVixXQUFWLEVBQXVCO0FBQ25CVyxhQUFPLEVBQUU7QUFDTCxpQkFBU0Y7QUFESjtBQURVLEtBQXZCLEVBS0tOLElBTEwsQ0FLV0MsUUFBRCxJQUFjO0FBQ2hCTixhQUFPLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0gsS0FQTCxFQU9PQyxLQVBQLENBT2NDLEdBQUQsSUFBUztBQUNkUixZQUFNLENBQUMsSUFBRCxDQUFOO0FBQ0gsS0FUTDtBQVVILEdBWk0sQ0FBUDtBQWFILENBZE07QUFnQkEsTUFBTWEsWUFBWSxHQUFHLENBQUM7QUFBQ2hCLE1BQUksR0FBQztBQUFOLENBQUQsS0FBaUI7QUFDekMsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFFBQUlDLFdBQVcsR0FBRywyREFBbEI7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXRixXQUFYLEVBQXVCSixJQUF2QixFQUE0QjtBQUN4QmUsYUFBTyxFQUFFO0FBQ0wsaUJBQVM7QUFESjtBQURlLEtBQTVCLEVBS0tSLElBTEwsQ0FLV0MsUUFBRCxJQUFjO0FBQ2hCUyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBTixhQUFPLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0gsS0FSTCxFQVFPQyxLQVJQLENBUWNDLEdBQUQsSUFBUztBQUNkUixZQUFNLENBQUMsSUFBRCxDQUFOO0FBQ0gsS0FWTDtBQVdILEdBYk0sQ0FBUDtBQWNILENBZk0iLCJmaWxlIjoiLi9hcGkvdGFsZW50QXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luVGFsZW50ID0gKHtib2R5PW51bGx9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IFJFUVVFU1RfVVJMID0gXCJodHRwczovL2hvbmV5cG90LXNlcnZlci5oZXJva3VhcHAuY29tL2F1dGgvbG9naW5UYWxlbnRcIjtcbiAgICAgICAgYXhpb3MucG9zdChSRVFVRVNUX1VSTCxib2R5KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGFsZW50cyA9ICh0b2tlbikgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBSRVFVRVNUX1VSTCA9IFwiaHR0cHM6Ly9ob25leXBvdC1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS90YWxlbnQvZ2V0VGFsZW50c1wiO1xuICAgICAgICBheGlvcy5nZXQoUkVRVUVTVF9VUkwsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAndG9rZW4nOiB0b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFsZW50ID0gKHtib2R5PW51bGx9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IFJFUVVFU1RfVVJMID0gXCJodHRwczovL2hvbmV5cG90LXNlcnZlci5oZXJva3VhcHAuY29tL3RhbGVudC9jcmVhdGVUYWxlbnRcIjtcbiAgICAgICAgYXhpb3MucG9zdChSRVFVRVNUX1VSTCxib2R5LHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAndG9rZW4nOiBcIjE2MTA4OTIyODcwOTE4ZDE4NzM0MmZiYmZiNTQ4YjJiMzI5NjI5ZGI0YTJmZTIwYzQ2ZTkxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/talentApi.js\n");

/***/ }),

/***/ "./components/SignUpForm/SignUpForm.js":
/*!*********************************************!*\
  !*** ./components/SignUpForm/SignUpForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpForm.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction SignUpForm() {\n  const {\n    0: values,\n    1: setValues\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    name: '',\n    surname: '',\n    email: '',\n    password: '',\n    rePassword: ''\n  });\n\n  const handleInputChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setValues(_objectSpread(_objectSpread({}, values), {}, {\n      [name]: value\n    }));\n  };\n\n  async function handleSubmit(e) {\n    e.preventDefault();\n    const body = {\n      name: values.name,\n      surname: values.surname,\n      password: values.password,\n      email: values.email\n    };\n    console.log(body);\n    const userInformations = await Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_3__[\"createTalent\"])({\n      body: body\n    });\n    console.log(userInformations);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"name\",\n          name: \"name\",\n          value: values.name,\n          onChange: handleInputChange,\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"name\",\n          name: \"surname\",\n          value: values.surname,\n          onChange: handleInputChange,\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"email\",\n          name: \"email\",\n          value: values.email,\n          onChange: handleInputChange,\n          placeholder: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          value: values.password,\n          onChange: handleInputChange,\n          placeholder: \"Create a password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"password\",\n          name: \"rePassword\",\n          value: values.rePassword,\n          onChange: handleInputChange,\n          placeholder: \"Repeat password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"submit\",\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25VcEZvcm0vU2lnblVwRm9ybS5qcz82YjAyIl0sIm5hbWVzIjpbIlNpZ25VcEZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5mb3JtYXRpb25zIiwiY3JlYXRlVGFsZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxXQUFPLEVBQUUsRUFGd0I7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsWUFBUSxFQUFFLEVBSnVCO0FBS2pDQyxjQUFVLEVBQUU7QUFMcUIsR0FBRCxDQUFwQzs7QUFRQSxRQUFNQyxpQkFBaUIsR0FBR0MsQ0FBQyxJQUFJO0FBQzNCLFVBQU07QUFBRU4sVUFBRjtBQUFRTztBQUFSLFFBQWtCRCxDQUFDLENBQUNFLE1BQTFCO0FBQ0FWLGFBQVMsaUNBQU1ELE1BQU47QUFBYyxPQUFDRyxJQUFELEdBQVFPO0FBQXRCLE9BQVQ7QUFDSCxHQUhEOztBQUtBLGlCQUFlRSxZQUFmLENBQTRCSCxDQUE1QixFQUErQjtBQUMzQkEsS0FBQyxDQUFDSSxjQUFGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHO0FBQUVYLFVBQUksRUFBRUgsTUFBTSxDQUFDRyxJQUFmO0FBQXFCQyxhQUFPLEVBQUVKLE1BQU0sQ0FBQ0ksT0FBckM7QUFBOENFLGNBQVEsRUFBRU4sTUFBTSxD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QUFBO0FBQUE7QUFBQTtBQUFBLFlBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUEwREg7O0FBRWNULHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZvcm1Db250cm9sLFxuICAgIElucHV0LFxuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgSGVhZGluZ1xuICB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVRhbGVudCB9IGZyb20gJy4uLy4uL2FwaS90YWxlbnRBcGknO1xuXG5mdW5jdGlvbiBTaWduVXBGb3JtKCkge1xuXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHN1cm5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcmVQYXNzd29yZDogJycsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBib2R5ID0geyBuYW1lOiB2YWx1ZXMubmFtZSwgc3VybmFtZTogdmFsdWVzLnN1cm5hbWUsIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsIGVtYWlsOiB2YWx1ZXMuZW1haWwgfTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvcm1hdGlvbnMgPSBhd2FpdCBjcmVhdGVUYWxlbnQoe2JvZHk6IGJvZHl9KTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckluZm9ybWF0aW9ucyk7XG4gICAgICB9XG4gICAgcmV0dXJuKFxuICAgIDxCb3ggdz17NDAwfT5cbiAgICA8SGVhZGluZz5Kb2luIFhYWFg8L0hlYWRpbmc+XG4gICAgPEhlYWRpbmcgYXM9XCJoNlwiIHNpemU9XCJ4c1wiPlxuICAgICAgQ3JlYXRlIGEgZnJlZSBYWFhYIGFjY291bnQgYW5kIGxldCBjb21wYW5pZXMgYXBwbHkgZGlyZWN0bHkgdG8geW91LlxuICAgIDwvSGVhZGluZz5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImZpcnN0TmFtZVwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRmlyc3QgTmFtZVwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJsYXN0TmFtZVwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgIG5hbWU9XCJzdXJuYW1lXCIgXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMuc3VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIExhc3QgTmFtZVwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwicGFzc3dvcmRcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIHBhc3N3b3JkXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cInJlUGFzc3dvcmRcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgIG5hbWU9XCJyZVBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5yZVBhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGVhdCBwYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgd2lkdGg9XCJmdWxsXCIgbXQ9ezR9PlxuICAgICAgICBTaWduIFVwXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0JveD4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpForm.js\n");

/***/ }),

/***/ "./pages/signUpTalent.js":
/*!*******************************!*\
  !*** ./pages/signUpTalent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignUpForm/SignUpForm */ \"./components/SignUpForm/SignUpForm.js\");\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/pages/signUpTalent.js\";\n\n\n\nfunction SignUpTalent() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: \"auto\",\n    h: 600,\n    justify: \"center\",\n    align: \"center\",\n    direction: \"column\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 6\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpTalent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduVXBUYWxlbnQuanM/YWFlMSJdLCJuYW1lcyI6WyJTaWduVXBUYWxlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQ3RCLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxLQUFDLEVBQUUsR0FGTDtBQUdFLFdBQU8sRUFBQyxRQUhWO0FBSUUsU0FBSyxFQUFDLFFBSlI7QUFLRSxhQUFTLEVBQUMsUUFMWjtBQUFBLDJCQU9DLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFFY0EsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaWduVXBUYWxlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwRm9ybS9TaWduVXBGb3JtJ1xuXG5mdW5jdGlvbiBTaWduVXBUYWxlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICBoPXs2MDB9XG4gICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgPlxuICAgICA8U2lnblVwRm9ybSAvPlxuICAgIDwvRmxleD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBUYWxlbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signUpTalent.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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