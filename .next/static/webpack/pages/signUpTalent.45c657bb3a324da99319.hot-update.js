webpackHotUpdate_N_E("pages/signUpTalent",{

/***/ "./components/SignUpForm/SignUpForm.js":
/*!*********************************************!*\
  !*** ./components/SignUpForm/SignUpForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpForm.js\";\n\n\nfunction SignUpForm() {\n  var _jsxDEV2, _jsxDEV3;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"name\",\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"name\",\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], (_jsxDEV2 = {\n          type: \"email\",\n          name: \"email\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"email\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"placeholder\", \"Email address\"), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], (_jsxDEV3 = {\n          name: \"password\",\n          type: \"password\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV3, \"type\", \"password\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV3, \"placeholder\", \"Create a password\"), _jsxDEV3), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          type: \"password\",\n          placeholder: \"Repeat password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUpForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanM/NmIwMiJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVFBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDbEIsc0JBQ0EscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUUsR0FBUjtBQUFBLDRCQUNBLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQSxxRUFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBS0E7QUFBTSxjQUFRLEVBQUVDLFlBQWhCO0FBQUEsOEJBQ0UscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsV0FBaEI7QUFBNEIsVUFBRSxFQUFFLENBQWhDO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsTUFETDtBQUVBLHFCQUFXLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsVUFBaEI7QUFBMkIsVUFBRSxFQUFFLENBQS9CO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsTUFETDtBQUVBLHFCQUFXLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBYUUscUVBQUMsNERBQUQ7QUFBYSxVQUFFLEVBQUMsT0FBaEI7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQ7QUFDQSxjQUFJLEVBQUMsT0FETDtBQUVBLGNBQUksRUFBQztBQUZMLHVIQUdRLE9BSFIsc0hBSVksZUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBcUJFLHFFQUFDLDREQUFEO0FBQWEsVUFBRSxFQUFDLFVBQWhCO0FBQTJCLFVBQUUsRUFBRSxDQUEvQjtBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQ0EsY0FBSSxFQUFDLFVBREw7QUFFQSxjQUFJLEVBQUM7QUFGTCx1SEFHSyxVQUhMLHNIQUlZLG1CQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGLGVBNkJFLHFFQUFDLDREQUFEO0FBQWEsVUFBRSxFQUFDLFlBQWhCO0FBQTZCLFVBQUUsRUFBRSxDQUFqQztBQUFBLCtCQUNFLHFFQUFDLHNEQUFEO0FBQ0EsY0FBSSxFQUFDLFVBREw7QUFFQSxxQkFBVyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkYsZUFtQ0UscUVBQUMsdURBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUErQ0g7O0tBaERRRCxVO0FBa0RNQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnblVwRm9ybS9TaWduVXBGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBGb3JtQ29udHJvbCxcbiAgICBJbnB1dCxcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEhlYWRpbmdcbiAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5mdW5jdGlvbiBTaWduVXBGb3JtKCkge1xuICAgIHJldHVybihcbiAgICA8Qm94IHc9ezQwMH0+XG4gICAgPEhlYWRpbmc+Sm9pbiBYWFhYPC9IZWFkaW5nPlxuICAgIDxIZWFkaW5nIGFzPVwiaDZcIiBzaXplPVwieHNcIj5cbiAgICAgIENyZWF0ZSBhIGZyZWUgWFhYWCBhY2NvdW50IGFuZCBsZXQgY29tcGFuaWVzIGFwcGx5IGRpcmVjdGx5IHRvIHlvdS5cbiAgICA8L0hlYWRpbmc+XG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJmaXJzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0IE5hbWVcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwibGFzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIExhc3QgTmFtZVwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICB0eXBlPVwiZW1haWxcIiAgXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJwYXNzd29yZFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBwYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJyZVBhc3N3b3JkXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGVhdCBwYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8QnV0dG9uIHdpZHRoPVwiZnVsbFwiIG10PXs0fT5cbiAgICAgICAgU2lnbiBVcFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+ICAgIClcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpForm.js\n");

/***/ })

})