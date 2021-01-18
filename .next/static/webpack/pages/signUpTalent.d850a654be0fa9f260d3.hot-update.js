webpackHotUpdate_N_E("pages/signUpTalent",{

/***/ "./components/SignUpForm/SignUpForm.js":
/*!*********************************************!*\
  !*** ./components/SignUpForm/SignUpForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction SignUpForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    name: '',\n    surname: '',\n    email: '',\n    password: '',\n    rePassword: ''\n  }),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setValues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, name, value)));\n  };\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var body, userInformations;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              body = {\n                name: values.name,\n                surname: values.surname,\n                password: values.password,\n                email: values.email\n              };\n              _context.next = 4;\n              return Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_6__[\"createTalent\"])({\n                body: body\n              });\n\n            case 4:\n              userInformations = _context.sent;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"name\",\n          name: \"name\",\n          value: values.name,\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"name\",\n          va: true,\n          name: \"surname\",\n          value: \"lastName\",\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          placeholder: \"Create a password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"password\",\n          name: \"rePassword\",\n          placeholder: \"Repeat password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignUpForm, \"HNWi9YToVVAXCtSci20EBB1V7j8=\");\n\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUpForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanM/NmIwMiJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwidXNlU3RhdGUiLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZVBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJjcmVhdGVUYWxlbnQiLCJ1c2VySW5mb3JtYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUM7QUFDakNDLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsV0FBTyxFQUFFLEVBRndCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0MsY0FBVSxFQUFFO0FBTHFCLEdBQUQsQ0FGbEI7QUFBQSxNQUVYQyxNQUZXO0FBQUEsTUFFSEMsU0FGRzs7QUFVbEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFBQSxvQkFDSEEsQ0FBQyxDQUFDQyxNQURDO0FBQUEsUUFDbkJULElBRG1CLGFBQ25CQSxJQURtQjtBQUFBLFFBQ2JVLEtBRGEsYUFDYkEsS0FEYTtBQUUzQkosYUFBUyxpQ0FBTUQsTUFBTixxR0FBZUwsSUFBZixFQUFzQlUsS0FBdEIsR0FBVDtBQUNILEdBSEQ7O0FBVmtCLFdBZUhDLFlBZkc7QUFBQTtBQUFBOztBQUFBO0FBQUEscU1BZWxCLGlCQUE0QkgsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0ksY0FBRjtBQUNNQyxrQkFGVixHQUVpQjtBQUFFYixv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c0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBGb3JtQ29udHJvbCxcbiAgICBJbnB1dCxcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEhlYWRpbmdcbiAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVUYWxlbnQgfSBmcm9tICcuLi8uLi9hcGkvdGFsZW50QXBpJztcblxuZnVuY3Rpb24gU2lnblVwRm9ybSgpIHtcblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBzdXJuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHJlUGFzc3dvcmQ6ICcnLFxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYm9keSA9IHsgbmFtZTogdmFsdWVzLm5hbWUsIHN1cm5hbWU6IHZhbHVlcy5zdXJuYW1lLCBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLCBlbWFpbDogdmFsdWVzLmVtYWlsIH07XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvcm1hdGlvbnMgPSBhd2FpdCBjcmVhdGVUYWxlbnQoe2JvZHk6IGJvZHl9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgcmV0dXJuKFxuICAgIDxCb3ggdz17NDAwfT5cbiAgICA8SGVhZGluZz5Kb2luIFhYWFg8L0hlYWRpbmc+XG4gICAgPEhlYWRpbmcgYXM9XCJoNlwiIHNpemU9XCJ4c1wiPlxuICAgICAgQ3JlYXRlIGEgZnJlZSBYWFhYIGFjY291bnQgYW5kIGxldCBjb21wYW5pZXMgYXBwbHkgZGlyZWN0bHkgdG8geW91LlxuICAgIDwvSGVhZGluZz5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImZpcnN0TmFtZVwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwibmFtZVwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0IE5hbWVcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwibGFzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICB2YVxuICAgICAgICBuYW1lPVwic3VybmFtZVwiIFxuICAgICAgICB2YWx1ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIExhc3QgTmFtZVwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cInBhc3N3b3JkXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgcGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwicmVQYXNzd29yZFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgbmFtZT1cInJlUGFzc3dvcmRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBlYXQgcGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEJ1dHRvbiB3aWR0aD1cImZ1bGxcIiBtdD17NH0+XG4gICAgICAgIFNpZ24gVXBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PiAgICApXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpForm.js\n");

/***/ })

})