webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginForm/LoginForm.js":
/*!*******************************************!*\
  !*** ./components/LoginForm/LoginForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/LoginForm/LoginForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LoginForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var body, userInformations;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              body = {\n                email: email,\n                password: password\n              };\n              _context.next = 4;\n              return Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_6__[\"loginTalent\"])({\n                body: body\n              });\n\n            case 4:\n              userInformations = _context.sent;\n\n              if (userInformations !== null || undefined) {\n                localStorage.setItem('userInformations', userInformations);\n                router.pathname('/pages/talentProfile');\n              }\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          name: \"email\",\n          type: \"email\",\n          placeholder: \"Email\",\n          value: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          placeholder: \"Password\",\n          value: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n        border: \"black\",\n        colorScheme: \"green\",\n        children: \"Remember Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        width: \"full\",\n        mt: 4,\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(LoginForm, \"LSjBy/+8e694Z8+hBRmcdVALamQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzPzM5NTAiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJsb2dpblRhbGVudCIsInVzZXJJbmZvcm1hdGlvbnMiLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGF0aG5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFFQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEbUIsa0JBRU9DLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFWkMsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBQUEsbUJBR2FGLHNEQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBLE1BR1pHLFFBSFk7QUFBQSxNQUdGQyxXQUhFOztBQUFBLFdBS0pDLFlBTEk7QUFBQTtBQUFBOztBQUFBO0FBQUEscU1BS25CLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNNQyxrQkFGUixHQUVlO0FBQUVQLHFCQUFLLEVBQUxBLEtBQUY7QUFBU0Usd0JBQVEsRUFBUkE7QUFBVCxlQUZmO0FBQUE7QUFBQSxxQkFHaUNNLGtFQUFXLENBQUM7QUFBQ0Qsb0JBQUksRUFBRUE7QUFBUCxlQUFELENBSDVDOztBQUFBO0FBR1FFLDhCQUhSOztBQUlFLGtCQUFJQSxnQkFBZ0IsS0FBSyxJQUFyQixJQUE2QkMsU0FBakMsRUFBMkM7QUFDdkNDLDRCQUFZLENBQUNDLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDSCxnQkFBekM7QUFDQVosc0JBQU0sQ0FBQ2dCLFFBQVAsQ0FBZ0Isc0JBQWhCO0FBQ0g7O0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMbUI7QUFBQTtBQUFBOztBQWVuQixzQkFDRSxxRUFBQyxvREFBRDtBQUFLLEtBQUMsRUFBRSxHQUFSO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sY0FBUSxFQUFFVCxZQUFoQjtBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQWEsVUFBRSxFQUFDLE9BQWhCO0FBQXdCLFVBQUUsRUFBRSxDQUE1QjtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQ0EsY0FBSSxFQUFDLE9BREw7QUFFQyxjQUFJLEVBQUMsT0FGTjtBQUdDLHFCQUFXLEVBQUMsT0FIYjtBQUlDLGVBQUssRUFBRUosS0FKUjtBQUtDLGtCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxtQkFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsVUFBaEI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UscUJBQVcsRUFBQyxVQUhkO0FBSUUsZUFBSyxFQUFFYixRQUpUO0FBS0Usa0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLG1CQUFPRixXQUFXLENBQUNFLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBb0JFLHFFQUFDLHlEQUFEO0FBQVUsY0FBTSxFQUFDLE9BQWpCO0FBQXlCLG1CQUFXLEVBQUMsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkYsZUF3QkUscUVBQUMsdURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFLLEVBQUMsTUFBNUI7QUFBbUMsVUFBRSxFQUFFLENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQWhEUW5CLFM7VUFDUUUscUQ7OztLQURSRixTO0FBa0RNQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBJbnB1dCxcbiAgQm94LFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIENoZWNrYm94XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgbG9naW5UYWxlbnQgfSBmcm9tICcuLi8uLi9hcGkvdGFsZW50QXBpJztcblxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGJvZHkgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xuICAgIGNvbnN0IHVzZXJJbmZvcm1hdGlvbnMgPSBhd2FpdCBsb2dpblRhbGVudCh7Ym9keTogYm9keX0pO1xuICAgIGlmICh1c2VySW5mb3JtYXRpb25zICE9PSBudWxsIHx8IHVuZGVmaW5lZCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mb3JtYXRpb25zJywgdXNlckluZm9ybWF0aW9ucyk7XG4gICAgICAgIHJvdXRlci5wYXRobmFtZSgnL3BhZ2VzL3RhbGVudFByb2ZpbGUnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggdz17NDAwfT5cbiAgICAgIDxIZWFkaW5nPkxvZyBJbjwvSGVhZGluZz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIG10PXs0fT5cbiAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcbiAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcbiAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJwYXNzd29yZFwiIG10PXs0fT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgIDxDaGVja2JveCBib3JkZXI9XCJibGFja1wiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIj5cbiAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICA8L0NoZWNrYm94PlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHdpZHRoPVwiZnVsbFwiIG10PXs0fT5cbiAgICAgICAgICBMb2cgSW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginForm/LoginForm.js\n");

/***/ })

})