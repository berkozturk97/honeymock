webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginForm/LoginForm.js":
/*!*******************************************!*\
  !*** ./components/LoginForm/LoginForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/LoginForm/LoginForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var body, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              body = {\n                email: email,\n                password: password\n              };\n              console.log(body);\n              _context.next = 5;\n              return Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_5__[\"loginTalent\"])({\n                body: body\n              });\n\n            case 5:\n              data = _context.sent;\n              console.log(data.data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          name: \"email\",\n          type: \"email\",\n          placeholder: \"Email\",\n          value: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          placeholder: \"Password\",\n          value: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n        border: \"black\",\n        colorScheme: \"green\",\n        children: \"Remember Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        width: \"full\",\n        mt: 4,\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(LoginForm, \"TSZhDBNy8CmbxXgprY/vvMmTG1Q=\");\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzPzM5NTAiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibG9naW5UYWxlbnQiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFWkcsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsV0FJSkMsWUFKSTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTUFJbkIsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGO0FBQ01DLGtCQUZSLEdBRWU7QUFBRVAscUJBQUssRUFBTEEsS0FBRjtBQUFTRSx3QkFBUSxFQUFSQTtBQUFULGVBRmY7QUFHRU0scUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBSEY7QUFBQSxxQkFJcUJHLGtFQUFXLENBQUM7QUFBQ0gsb0JBQUksRUFBRUE7QUFBUCxlQUFELENBSmhDOztBQUFBO0FBSVFJLGtCQUpSO0FBS0VILHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBSSxDQUFDQSxJQUFqQjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUptQjtBQUFBO0FBQUE7O0FBWW5CLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFFLEdBQVI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVQLFlBQWhCO0FBQUEsOEJBQ0UscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsT0FBaEI7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsT0FETDtBQUVDLGNBQUksRUFBQyxPQUZOO0FBR0MscUJBQVcsRUFBQyxPQUhiO0FBSUMsZUFBSyxFQUFFSixLQUpSO0FBS0Msa0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLG1CQUFPSixRQUFRLENBQUNJLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSxxRUFBQyw0REFBRDtBQUFhLFVBQUUsRUFBQyxVQUFoQjtBQUEyQixVQUFFLEVBQUUsQ0FBL0I7QUFBQSwrQkFDRSxxRUFBQyxzREFBRDtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxlQUFLLEVBQUVYLFFBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsbUJBQU9GLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFvQkUscUVBQUMseURBQUQ7QUFBVSxjQUFNLEVBQUMsT0FBakI7QUFBeUIsbUJBQVcsRUFBQyxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXdCRSxxRUFBQyx1REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGFBQUssRUFBQyxNQUE1QjtBQUFtQyxVQUFFLEVBQUUsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBN0NRZixTOztLQUFBQSxTO0FBK0NNQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBJbnB1dCxcbiAgQm94LFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIENoZWNrYm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGxvZ2luVGFsZW50IH0gZnJvbSAnLi4vLi4vYXBpL3RhbGVudEFwaSdcblxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgYm9keSA9IHsgZW1haWwsIHBhc3N3b3JkIH07XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvZ2luVGFsZW50KHtib2R5OiBib2R5fSk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHc9ezQwMH0+XG4gICAgICA8SGVhZGluZz5Mb2cgSW48L0hlYWRpbmc+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZvcm1Db250cm9sIGlkPVwiZW1haWxcIiBtdD17NH0+XG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXG4gICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXG4gICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgPEZvcm1Db250cm9sIGlkPVwicGFzc3dvcmRcIiBtdD17NH0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICA8Q2hlY2tib3ggYm9yZGVyPVwiYmxhY2tcIiBjb2xvclNjaGVtZT1cImdyZWVuXCI+XG4gICAgICAgICAgUmVtZW1iZXIgTWVcbiAgICAgICAgPC9DaGVja2JveD5cblxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB3aWR0aD1cImZ1bGxcIiBtdD17NH0+XG4gICAgICAgICAgTG9nIEluXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm/LoginForm.js\n");

/***/ })

})