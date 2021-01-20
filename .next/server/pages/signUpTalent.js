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

/***/ "./components/SignUpForm/SignUpFormTalent.js":
/*!***************************************************!*\
  !*** ./components/SignUpForm/SignUpFormTalent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpFormTalent.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction SignUpFormTalent() {\n  const {\n    0: values,\n    1: setValues\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    name: '',\n    surname: '',\n    email: '',\n    password: '',\n    rePassword: ''\n  });\n\n  const handleInputChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setValues(_objectSpread(_objectSpread({}, values), {}, {\n      [name]: value\n    }));\n  };\n\n  async function handleSubmit(e) {\n    e.preventDefault();\n    const body = {\n      name: values.name,\n      surname: values.surname,\n      password: values.password,\n      email: values.email\n    };\n    console.log(body);\n    const userInformations = await Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_3__[\"createTalent\"])({\n      body: body\n    });\n    console.log(userInformations);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"name\",\n          name: \"name\",\n          value: values.name,\n          onChange: handleInputChange,\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"name\",\n          name: \"surname\",\n          value: values.surname,\n          onChange: handleInputChange,\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"email\",\n          name: \"email\",\n          value: values.email,\n          onChange: handleInputChange,\n          placeholder: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          value: values.password,\n          onChange: handleInputChange,\n          placeholder: \"Create a password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n          type: \"password\",\n          name: \"rePassword\",\n          value: values.rePassword,\n          onChange: handleInputChange,\n          placeholder: \"Repeat password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"submit\",\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpFormTalent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25VcEZvcm0vU2lnblVwRm9ybVRhbGVudC5qcz9iNmUxIl0sIm5hbWVzIjpbIlNpZ25VcEZvcm1UYWxlbnQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlUGFzc3dvcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5mb3JtYXRpb25zIiwiY3JlYXRlVGFsZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxHQUE0QjtBQUV4QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUM7QUFDakNDLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsV0FBTyxFQUFFLEVBRndCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0MsY0FBVSxFQUFFO0FBTHFCLEdBQUQsQ0FBcEM7O0FBUUEsUUFBTUMsaUJBQWlCLEdBQUdDLENBQUMsSUFBSTtBQUMzQixVQUFNO0FBQUVOLFVBQUY7QUFBUU87QUFBUixRQUFrQkQsQ0FBQyxDQUFDRSxNQUExQjtBQUNBVixhQUFTLGlDQUFNRCxNQUFOO0FBQWMsT0FBQ0csSUFBRCxHQUFRTztBQUF0QixPQUFUO0FBQ0gsR0FIRDs7QUFLQSxpQkFBZUUsWUFBZixDQUE0QkgsQ0FBNUIsRUFBK0I7QUFDM0JBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBLFVBQU1DLElBQUksR0FBRztBQUFFWCxVQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBZjtBQUFxQkMsYUFBTyxFQUFFSixNQUFNLENBQUNJLE9BQXJDO0FBQThDRSxjQUFR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LGNBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBMERIOztBQUVjVCwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnblVwRm9ybS9TaWduVXBGb3JtVGFsZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBGb3JtQ29udHJvbCxcbiAgICBJbnB1dCxcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEhlYWRpbmdcbiAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVUYWxlbnQgfSBmcm9tICcuLi8uLi9hcGkvdGFsZW50QXBpJztcblxuZnVuY3Rpb24gU2lnblVwRm9ybVRhbGVudCgpIHtcblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBzdXJuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHJlUGFzc3dvcmQ6ICcnLFxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYm9keSA9IHsgbmFtZTogdmFsdWVzLm5hbWUsIHN1cm5hbWU6IHZhbHVlcy5zdXJuYW1lLCBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLCBlbWFpbDogdmFsdWVzLmVtYWlsIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICBjb25zdCB1c2VySW5mb3JtYXRpb25zID0gYXdhaXQgY3JlYXRlVGFsZW50KHtib2R5OiBib2R5fSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvcm1hdGlvbnMpO1xuICAgICAgfVxuICAgIHJldHVybihcbiAgICA8Qm94IHc9ezQwMH0+XG4gICAgPEhlYWRpbmc+Sm9pbiBYWFhYPC9IZWFkaW5nPlxuICAgIDxIZWFkaW5nIGFzPVwiaDZcIiBzaXplPVwieHNcIj5cbiAgICAgIENyZWF0ZSBhIGZyZWUgWFhYWCBhY2NvdW50IGFuZCBsZXQgY29tcGFuaWVzIGFwcGx5IGRpcmVjdGx5IHRvIHlvdS5cbiAgICA8L0hlYWRpbmc+XG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJmaXJzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0IE5hbWVcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwibGFzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICBuYW1lPVwic3VybmFtZVwiIFxuICAgICAgICB2YWx1ZT17dmFsdWVzLnN1cm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBMYXN0IE5hbWVcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwiZW1haWxcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cInBhc3N3b3JkXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBwYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJyZVBhc3N3b3JkXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICBuYW1lPVwicmVQYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMucmVQYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBlYXQgcGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHdpZHRoPVwiZnVsbFwiIG10PXs0fT5cbiAgICAgICAgU2lnbiBVcFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+ICAgIClcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwRm9ybVRhbGVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpFormTalent.js\n");

/***/ }),

/***/ "./pages/signUpTalent.js":
/*!*******************************!*\
  !*** ./pages/signUpTalent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SignUpForm_SignUpFormTalent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignUpForm/SignUpFormTalent */ \"./components/SignUpForm/SignUpFormTalent.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/pages/signUpTalent.js\";\n\n\n\n\nfunction SignUpTalent() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    align: \"center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      bg: \"white\",\n      mt: 20,\n      children: \"Talent\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      bg: \"white\",\n      onClick: () => router.push('/signUpCompany'),\n      ml: 5,\n      mt: 20,\n      children: \"Company\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n      style: {\n        marginTop: '5px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      width: \"auto\",\n      h: 600,\n      justify: \"center\",\n      align: \"center\",\n      direction: \"column\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SignUpForm_SignUpFormTalent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpTalent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduVXBUYWxlbnQuanM/YWFlMSJdLCJuYW1lcyI6WyJTaWduVXBUYWxlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBQSw0QkFFRSxxRUFBQyx1REFBRDtBQUFRLFFBQUUsRUFBQyxPQUFYO0FBQW1CLFFBQUUsRUFBRSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsdURBQUQ7QUFBUSxRQUFFLEVBQUMsT0FBWDtBQUFtQixhQUFPLEVBQUUsTUFBTUQsTUFBTSxDQUFDRSxJQUFQLENBQVksZ0JBQVosQ0FBbEM7QUFBaUUsUUFBRSxFQUFFLENBQXJFO0FBQXdFLFFBQUUsRUFBRSxFQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSSxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBRTtBQUFaO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0EscUVBQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsTUFEUjtBQUVFLE9BQUMsRUFBRSxHQUZMO0FBR0UsYUFBTyxFQUFDLFFBSFY7QUFJRSxXQUFLLEVBQUMsUUFKUjtBQUtFLGVBQVMsRUFBQyxRQUxaO0FBQUEsNkJBUUMscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7QUFFY0osMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaWduVXBUYWxlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgU2lnblVwRm9ybVRhbGVudCBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25VcEZvcm0vU2lnblVwRm9ybVRhbGVudCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5mdW5jdGlvbiBTaWduVXBUYWxlbnQoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggYWxpZ249J2NlbnRlcic+XG5cbiAgICAgIDxCdXR0b24gYmc9J3doaXRlJyBtdD17MjB9PlRhbGVudDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBiZz0nd2hpdGUnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnblVwQ29tcGFueScpfSBtbD17NX0gbXQ9ezIwfT5Db21wYW55PC9CdXR0b24+XG4gICAgICA8aHIgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnfX0vPlxuICAgIDxGbGV4XG4gICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgaD17NjAwfVxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgID5cbiAgICAgIFxuICAgICA8U2lnblVwRm9ybVRhbGVudCAvPlxuICAgIDwvRmxleD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBUYWxlbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signUpTalent.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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