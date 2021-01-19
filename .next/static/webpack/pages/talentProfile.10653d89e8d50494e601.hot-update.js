webpackHotUpdate_N_E("pages/talentProfile",{

/***/ "./pages/talentProfile.js":
/*!********************************!*\
  !*** ./pages/talentProfile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Talent_TalenAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Talent/TalenAbout */ \"./components/Talent/TalenAbout.js\");\n/* harmony import */ var _components_Talent_TalentInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Talent/TalentInfo */ \"./components/Talent/TalentInfo.js\");\n/* harmony import */ var _components_Talent_TalentRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Talent/TalentRoles */ \"./components/Talent/TalentRoles.js\");\n/* harmony import */ var _components_Talent_TalentSkills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Talent/TalentSkills */ \"./components/Talent/TalentSkills.js\");\n/* harmony import */ var _components_Talent_TalentSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Talent/TalentSummary */ \"./components/Talent/TalentSummary.js\");\n/* harmony import */ var _components_Talent_TalentWorkExperience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Talent/TalentWorkExperience */ \"./components/Talent/TalentWorkExperience.js\");\n/* harmony import */ var _components_Talent_TalentEducation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Talent/TalentEducation */ \"./components/Talent/TalentEducation.js\");\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/pages/talentProfile.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction TalenProfile() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userInformations = localStorage.getItem('userInformations');\n    setUser(JSON.parse(userInformations));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    mt: 20,\n    h: \"1000px\",\n    templateRows: \"repeat(2, 1fr)\",\n    templateColumns: \"repeat(5, 1fr)\",\n    gap: 5,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n      rowSpan: 20,\n      colSpan: 1,\n      h: \"auto\",\n      w: \"300px\",\n      bg: \"#f7f7fe\",\n      borderColor: \"turquoise\",\n      borderWidth: 2,\n      borderRadius: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalenAbout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n      h: \"200px\",\n      w: \"auto\",\n      colSpan: 4,\n      bg: \"#f7f7fe\",\n      borderColor: \"turquoise\",\n      borderWidth: 2,\n      borderRadius: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      h: \"1000px\",\n      templateRows: \"repeat(6, 1fr)\",\n      templateColumns: \"repeat(70, 1fr)\",\n      gap: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#ffffff\",\n        borderColor: \"gray\",\n        borderWidth: 1,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentRoles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        rowSpan: 2,\n        colSpan: 20,\n        bg: \"tomato\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentSummary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentSkills__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        h: \"auto\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentWorkExperience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentEducation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(TalenProfile, \"g26Pb/ecDi+x6k07CsgfguRqPQQ=\");\n\n_c = TalenProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalenProfile);\n\nvar _c;\n\n$RefreshReg$(_c, \"TalenProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFsZW50UHJvZmlsZS5qcz8yYTAxIl0sIm5hbWVzIjpbIlRhbGVuUHJvZmlsZSIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VySW5mb3JtYXRpb25zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGdCQUFnQixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsa0JBQXJCLENBQXZCO0FBQ0FKLFdBQU8sQ0FBQ0ssSUFBSSxDQUFDQyxLQUFMLENBQVdKLGdCQUFYLENBQUQsQ0FBUDtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyxxREFBRDtBQUNFLE1BQUUsRUFBRSxFQUROO0FBRUUsS0FBQyxFQUFDLFFBRko7QUFHRSxnQkFBWSxFQUFDLGdCQUhmO0FBSUUsbUJBQWUsRUFBQyxnQkFKbEI7QUFLRSxPQUFHLEVBQUUsQ0FMUDtBQUFBLDRCQU9FLHFFQUFDLHlEQUFEO0FBQ0UsYUFBTyxFQUFFLEVBRFg7QUFFRSxhQUFPLEVBQUUsQ0FGWDtBQUdFLE9BQUMsRUFBQyxNQUhKO0FBSUUsT0FBQyxFQUFDLE9BSko7QUFLRSxRQUFFLEVBQUMsU0FMTDtBQU1FLGlCQUFXLEVBQUMsV0FOZDtBQU9FLGlCQUFXLEVBQUUsQ0FQZjtBQVFFLGtCQUFZLEVBQUUsQ0FSaEI7QUFBQSw2QkFVRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBbUJFLHFFQUFDLHlEQUFEO0FBQ0UsT0FBQyxFQUFDLE9BREo7QUFFRSxPQUFDLEVBQUMsTUFGSjtBQUdFLGFBQU8sRUFBRSxDQUhYO0FBSUUsUUFBRSxFQUFDLFNBSkw7QUFLRSxpQkFBVyxFQUFDLFdBTGQ7QUFNRSxpQkFBVyxFQUFFLENBTmY7QUFPRSxrQkFBWSxFQUFFLENBUGhCO0FBQUEsNkJBU0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUFtREUscUVBQUMscURBQUQ7QUFDRSxPQUFDLEVBQUMsUUFESjtBQUVFLGtCQUFZLEVBQUMsZ0JBRmY7QUFHRSxxQkFBZSxFQUFDLGlCQUhsQjtBQUlFLFNBQUcsRUFBRSxDQUpQO0FBQUEsOEJBT0UscUVBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUUsRUFBbkI7QUFBdUIsVUFBRSxFQUFDLFNBQTFCO0FBQW9DLG1CQUFXLEVBQUMsTUFBaEQ7QUFBd0QsbUJBQVcsRUFBRSxDQUFyRTtBQUF3RSxvQkFBWSxFQUFFLENBQXRGO0FBQUEsK0JBQ00scUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLENBQW5CO0FBQXNCLGVBQU8sRUFBRSxFQUEvQjtBQUFtQyxVQUFFLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBV0UscUVBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUUsRUFBbkI7QUFBdUIsVUFBRSxFQUFDLFNBQTFCO0FBQW9DLG1CQUFXLEVBQUMsV0FBaEQ7QUFBNEQsbUJBQVcsRUFBRSxDQUF6RTtBQUE0RSxvQkFBWSxFQUFFLENBQTFGO0FBQUEsK0JBQ00scUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQWNJLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLEVBQW5CO0FBQXVCLFVBQUUsRUFBQyxTQUExQjtBQUFvQyxtQkFBVyxFQUFDLFdBQWhEO0FBQTRELG1CQUFXLEVBQUUsQ0FBekU7QUFBNEUsb0JBQVksRUFBRSxDQUExRjtBQUFBLCtCQUNJLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUFpQkkscUVBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUUsRUFBbkI7QUFBdUIsVUFBRSxFQUFDLFNBQTFCO0FBQW9DLFNBQUMsRUFBQyxNQUF0QztBQUE2QyxtQkFBVyxFQUFDLFdBQXpEO0FBQXFFLG1CQUFXLEVBQUUsQ0FBbEY7QUFBcUYsb0JBQVksRUFBRSxDQUFuRztBQUFBLCtCQUNJLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKLGVBb0JJLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLEVBQW5CO0FBQXVCLFVBQUUsRUFBQyxTQUExQjtBQUFvQyxtQkFBVyxFQUFDLFdBQWhEO0FBQTRELG1CQUFXLEVBQUUsQ0FBekU7QUFBNEUsb0JBQVksRUFBRSxDQUExRjtBQUFBLCtCQUNJLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStFRDs7R0F0RlFMLFk7O0tBQUFBLFk7QUF3Rk1BLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFsZW50UHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIEdyaWRJdGVtIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGFsZW50QWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9UYWxlbnQvVGFsZW5BYm91dCdcbmltcG9ydCBUYWxlbnRJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudEluZm8nXG5pbXBvcnQgVGFsZW50Um9sZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWxlbnQvVGFsZW50Um9sZXMnXG5pbXBvcnQgVGFsZW50U2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudFNraWxscydcbmltcG9ydCBUYWxlbnRTdW1tYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudFN1bW1hcnknXG5pbXBvcnQgVGFsZW50V29ya0V4cGVyaWVuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9UYWxlbnQvVGFsZW50V29ya0V4cGVyaWVuY2UnXG5pbXBvcnQgVGFsZW50RWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudEVkdWNhdGlvbidcblxuZnVuY3Rpb24gVGFsZW5Qcm9maWxlKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdXNlckluZm9ybWF0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mb3JtYXRpb25zJylcbiAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlckluZm9ybWF0aW9ucykpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIG10PXsyMH1cbiAgICAgIGg9XCIxMDAwcHhcIlxuICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDIsIDFmcilcIlxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDUsIDFmcilcIlxuICAgICAgZ2FwPXs1fVxuICAgID5cbiAgICAgIDxHcmlkSXRlbVxuICAgICAgICByb3dTcGFuPXsyMH1cbiAgICAgICAgY29sU3Bhbj17MX1cbiAgICAgICAgaD1cImF1dG9cIlxuICAgICAgICB3PVwiMzAwcHhcIlxuICAgICAgICBiZz1cIiNmN2Y3ZmVcIlxuICAgICAgICBib3JkZXJDb2xvcj1cInR1cnF1b2lzZVwiXG4gICAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezd9XG4gICAgICA+XG4gICAgICAgIDxUYWxlbnRBYm91dCAvPlxuICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIDxHcmlkSXRlbVxuICAgICAgICBoPVwiMjAwcHhcIlxuICAgICAgICB3PVwiYXV0b1wiXG4gICAgICAgIGNvbFNwYW49ezR9XG4gICAgICAgIGJnPVwiI2Y3ZjdmZVwiXG4gICAgICAgIGJvcmRlckNvbG9yPVwidHVycXVvaXNlXCJcbiAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgIGJvcmRlclJhZGl1cz17N31cbiAgICAgID5cbiAgICAgICAgPFRhbGVudEluZm8gLz5cbiAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgIHsvKiA8R3JpZFxuICAgICAgICBoPScxMDAwcHgnXG4gICAgICAgIHc9ezUwMH1cbiAgICAgICAgZ2FwPXsyfVxuICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoNSwgMWZyKVwiXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCJcbiAgICAgICAgLy8gbWw9ezI1MH1cblxuICAgICAgPlxuICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxMDB9IGJnPScjZjdmN2ZlJyBib3JkZXJDb2xvcj0ndHVycXVvaXNlJyBib3JkZXJXaWR0aD17Mn0gYm9yZGVyUmFkaXVzPXs3fT5cbiAgICAgICAgICAgICAgPFRhbGVudFJvbGVzIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MTAwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30gLz5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MTAwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30gLz5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MTAwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30gLz5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MTAwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30gLz5cbiAgICAgICAgICA8R3JpZEl0ZW0gcm93U3Bhbj17MjB9IGNvbFNwYW49ezEwfSAgYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9IC8+XG5cbiAgICAgIDwvR3JpZD4gKi99XG5cbiAgICAgIDxHcmlkXG4gICAgICAgIGg9XCIxMDAwcHhcIlxuICAgICAgICB0ZW1wbGF0ZVJvd3M9XCJyZXBlYXQoNiwgMWZyKVwiXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg3MCwgMWZyKVwiXG4gICAgICAgIGdhcD17NH1cbiAgICAgID5cbiAgICAgICAgXG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs1MH0gYmc9JyNmZmZmZmYnIGJvcmRlckNvbG9yPSdncmF5JyAgYm9yZGVyV2lkdGg9ezF9IGJvcmRlclJhZGl1cz17N30+XG4gICAgICAgICAgICAgIDxUYWxlbnRSb2xlcyAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDxHcmlkSXRlbSByb3dTcGFuPXsyfSBjb2xTcGFuPXsyMH0gYmc9XCJ0b21hdG9cIiAvPlxuICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NTB9IGJnPScjZjdmN2ZlJyBib3JkZXJDb2xvcj0ndHVycXVvaXNlJyBib3JkZXJXaWR0aD17Mn0gYm9yZGVyUmFkaXVzPXs3fT5cbiAgICAgICAgICAgICAgPFRhbGVudFN1bW1hcnkgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs1MH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9PlxuICAgICAgICAgICAgICA8VGFsZW50U2tpbGxzIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NTB9IGJnPScjZjdmN2ZlJyBoPSdhdXRvJyBib3JkZXJDb2xvcj0ndHVycXVvaXNlJyBib3JkZXJXaWR0aD17Mn0gYm9yZGVyUmFkaXVzPXs3fT5cbiAgICAgICAgICAgICAgPFRhbGVudFdvcmtFeHBlcmllbmNlIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NTB9IGJnPScjZjdmN2ZlJyBib3JkZXJDb2xvcj0ndHVycXVvaXNlJyBib3JkZXJXaWR0aD17Mn0gYm9yZGVyUmFkaXVzPXs3fT5cbiAgICAgICAgICAgICAgPFRhbGVudEVkdWNhdGlvbiAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIFxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWxlblByb2ZpbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/talentProfile.js\n");

/***/ })

})