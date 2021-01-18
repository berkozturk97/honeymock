webpackHotUpdate_N_E("pages/signUpTalent",{

/***/ "./components/SignUpForm/SignUpForm.js":
/*!*********************************************!*\
  !*** ./components/SignUpForm/SignUpForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpForm.js\";\n\n\nfunction SignUpForm() {\n  var _jsxDEV2;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"name\",\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"name\",\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          placeholder: \"Create a password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], (_jsxDEV2 = {\n          type: \"password\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"password\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"placeholder\", \"Repeat password\"), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUpForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanM/NmIwMiJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVFBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDbEIsc0JBQ0EscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUUsR0FBUjtBQUFBLDRCQUNBLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQSxxRUFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBS0E7QUFBTSxjQUFRLEVBQUVDLFlBQWhCO0FBQUEsOEJBQ0UscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsV0FBaEI7QUFBNEIsVUFBRSxFQUFFLENBQWhDO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsTUFETDtBQUVBLHFCQUFXLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsVUFBaEI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsTUFETDtBQUVBLHFCQUFXLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBYUUscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsT0FBaEI7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsT0FETDtBQUVBLGNBQUksRUFBQyxPQUZMO0FBR0EscUJBQVcsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFvQkUscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsVUFBaEI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsVUFETDtBQUVBLGNBQUksRUFBQyxVQUZMO0FBR0EscUJBQVcsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGLGVBMkJFLHFFQUFDLDREQUFEO0FBQWEsVUFBRSxFQUFDLFlBQWhCO0FBQTZCLFVBQUUsRUFBRSxDQUFqQztBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQ0EsY0FBSSxFQUFDO0FBREwsdUhBRUssVUFGTCxzSEFHWSxpQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQWtDRSxxRUFBQyx1REFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQXFCLFVBQUUsRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQThDSDs7S0EvQ1FELFU7QUFpRE1BLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZvcm1Db250cm9sLFxuICAgIElucHV0LFxuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgSGVhZGluZ1xuICB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmZ1bmN0aW9uIFNpZ25VcEZvcm0oKSB7XG4gICAgcmV0dXJuKFxuICAgIDxCb3ggdz17NDAwfT5cbiAgICA8SGVhZGluZz5Kb2luIFhYWFg8L0hlYWRpbmc+XG4gICAgPEhlYWRpbmcgYXM9XCJoNlwiIHNpemU9XCJ4c1wiPlxuICAgICAgQ3JlYXRlIGEgZnJlZSBYWFhYIGFjY291bnQgYW5kIGxldCBjb21wYW5pZXMgYXBwbHkgZGlyZWN0bHkgdG8geW91LlxuICAgIDwvSGVhZGluZz5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImZpcnN0TmFtZVwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwibmFtZVwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRmlyc3QgTmFtZVwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJsYXN0TmFtZVwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwibmFtZVwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTGFzdCBOYW1lXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwicGFzc3dvcmRcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBwYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJyZVBhc3N3b3JkXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBlYXQgcGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEJ1dHRvbiB3aWR0aD1cImZ1bGxcIiBtdD17NH0+XG4gICAgICAgIFNpZ24gVXBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQm94PiAgICApXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpForm.js\n");

/***/ })

})