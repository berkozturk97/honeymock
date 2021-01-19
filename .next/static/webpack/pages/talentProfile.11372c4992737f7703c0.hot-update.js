webpackHotUpdate_N_E("pages/talentProfile",{

/***/ "./pages/talentProfile.js":
/*!********************************!*\
  !*** ./pages/talentProfile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Talent_TalenAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Talent/TalenAbout */ \"./components/Talent/TalenAbout.js\");\n/* harmony import */ var _components_Talent_TalentInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Talent/TalentInfo */ \"./components/Talent/TalentInfo.js\");\n/* harmony import */ var _components_Talent_TalentRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Talent/TalentRoles */ \"./components/Talent/TalentRoles.js\");\n/* harmony import */ var _components_Talent_TalentSkills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Talent/TalentSkills */ \"./components/Talent/TalentSkills.js\");\n/* harmony import */ var _components_Talent_TalentSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Talent/TalentSummary */ \"./components/Talent/TalentSummary.js\");\n/* harmony import */ var _components_Talent_TalentWorkExperience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Talent/TalentWorkExperience */ \"./components/Talent/TalentWorkExperience.js\");\n/* harmony import */ var _components_Talent_TalentEducation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Talent/TalentEducation */ \"./components/Talent/TalentEducation.js\");\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/pages/talentProfile.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction TalenProfile() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userInformations = localStorage.getItem('userInformations');\n    setUser(JSON.parse(userInformations));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    mt: 20,\n    h: \"1000px\",\n    templateRows: \"repeat(2, 1fr)\",\n    templateColumns: \"repeat(5, 1fr)\",\n    gap: 5,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n      rowSpan: 20,\n      colSpan: 1,\n      h: \"auto\",\n      w: \"300px\",\n      bg: \"#f7f7fe\",\n      borderColor: \"turquoise\",\n      borderWidth: 2,\n      borderRadius: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalenAbout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n      h: \"200px\",\n      w: \"auto\",\n      colSpan: 4,\n      bg: \"#f7f7fe\",\n      borderColor: \"turquoise\",\n      borderWidth: 2,\n      borderRadius: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      h: \"1000px\",\n      templateRows: \"repeat(6, 1fr)\",\n      templateColumns: \"repeat(70, 1fr)\",\n      gap: 4,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#ffffff\",\n        borderWidth: 0.6,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentRoles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        rowSpan: 2,\n        colSpan: 20,\n        bg: \"tomato\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentSummary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentSkills__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        h: \"auto\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentWorkExperience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 50,\n        bg: \"#f7f7fe\",\n        borderColor: \"turquoise\",\n        borderWidth: 2,\n        borderRadius: 7,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Talent_TalentEducation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(TalenProfile, \"g26Pb/ecDi+x6k07CsgfguRqPQQ=\");\n\n_c = TalenProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalenProfile);\n\nvar _c;\n\n$RefreshReg$(_c, \"TalenProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFsZW50UHJvZmlsZS5qcz8yYTAxIl0sIm5hbWVzIjpbIlRhbGVuUHJvZmlsZSIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VySW5mb3JtYXRpb25zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGdCQUFnQixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsa0JBQXJCLENBQXZCO0FBQ0FKLFdBQU8sQ0FBQ0ssSUFBSSxDQUFDQyxLQUFMLENBQVdKLGdCQUFYLENBQUQsQ0FBUDtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyxxREFBRDtBQUNFLE1BQUUsRUFBRSxFQUROO0FBRUUsS0FBQyxFQUFDLFFBRko7QUFHRSxnQkFBWSxFQUFDLGdCQUhmO0FBSUUsbUJBQWUsRUFBQyxnQkFKbEI7QUFLRSxPQUFHLEVBQUUsQ0FMUDtBQUFBLDRCQU9FLHFFQUFDLHlEQUFEO0FBQ0UsYUFBTyxFQUFFLEVBRFg7QUFFRSxhQUFPLEVBQUUsQ0FGWDtBQUdFLE9BQUMsRUFBQyxNQUhKO0FBSUUsT0FBQyxFQUFDLE9BSko7QUFLRSxRQUFFLEVBQUMsU0FMTDtBQU1FLGlCQUFXLEVBQUMsV0FOZDtBQU9FLGlCQUFXLEVBQUUsQ0FQZjtBQVFFLGtCQUFZLEVBQUUsQ0FSaEI7QUFBQSw2QkFVRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBbUJFLHFFQUFDLHlEQUFEO0FBQ0UsT0FBQyxFQUFDLE9BREo7QUFFRSxPQUFDLEVBQUMsTUFGSjtBQUdFLGFBQU8sRUFBRSxDQUhYO0FBSUUsUUFBRSxFQUFDLFNBSkw7QUFLRSxpQkFBVyxFQUFDLFdBTGQ7QUFNRSxpQkFBVyxFQUFFLENBTmY7QUFPRSxrQkFBWSxFQUFFLENBUGhCO0FBQUEsNkJBU0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUFtREUscUVBQUMscURBQUQ7QUFDRSxPQUFDLEVBQUMsUUFESjtBQUVFLGtCQUFZLEVBQUMsZ0JBRmY7QUFHRSxxQkFBZSxFQUFDLGlCQUhsQjtBQUlFLFNBQUcsRUFBRSxDQUpQO0FBQUEsOEJBT0UscUVBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUUsRUFBbkI7QUFBdUIsVUFBRSxFQUFDLFNBQTFCO0FBQXFDLG1CQUFXLEVBQUUsR0FBbEQ7QUFBdUQsb0JBQVksRUFBRSxDQUFyRTtBQUFBLCtCQUNNLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFVRSxxRUFBQyx5REFBRDtBQUFVLGVBQU8sRUFBRSxDQUFuQjtBQUFzQixlQUFPLEVBQUUsRUFBL0I7QUFBbUMsVUFBRSxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLEVBQW5CO0FBQXVCLFVBQUUsRUFBQyxTQUExQjtBQUFvQyxtQkFBVyxFQUFDLFdBQWhEO0FBQTRELG1CQUFXLEVBQUUsQ0FBekU7QUFBNEUsb0JBQVksRUFBRSxDQUExRjtBQUFBLCtCQUNNLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFjSSxxRUFBQyx5REFBRDtBQUFVLGVBQU8sRUFBRSxFQUFuQjtBQUF1QixVQUFFLEVBQUMsU0FBMUI7QUFBb0MsbUJBQVcsRUFBQyxXQUFoRDtBQUE0RCxtQkFBVyxFQUFFLENBQXpFO0FBQTRFLG9CQUFZLEVBQUUsQ0FBMUY7QUFBQSwrQkFDSSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBaUJJLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLEVBQW5CO0FBQXVCLFVBQUUsRUFBQyxTQUExQjtBQUFvQyxTQUFDLEVBQUMsTUFBdEM7QUFBNkMsbUJBQVcsRUFBQyxXQUF6RDtBQUFxRSxtQkFBVyxFQUFFLENBQWxGO0FBQXFGLG9CQUFZLEVBQUUsQ0FBbkc7QUFBQSwrQkFDSSxxRUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixlQW9CSSxxRUFBQyx5REFBRDtBQUFVLGVBQU8sRUFBRSxFQUFuQjtBQUF1QixVQUFFLEVBQUMsU0FBMUI7QUFBb0MsbUJBQVcsRUFBQyxXQUFoRDtBQUE0RCxtQkFBVyxFQUFFLENBQXpFO0FBQTRFLG9CQUFZLEVBQUUsQ0FBMUY7QUFBQSwrQkFDSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBdEZRTCxZOztLQUFBQSxZO0FBd0ZNQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RhbGVudFByb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBHcmlkSXRlbSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhbGVudEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVuQWJvdXQnXG5pbXBvcnQgVGFsZW50SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1RhbGVudC9UYWxlbnRJbmZvJ1xuaW1wb3J0IFRhbGVudFJvbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudFJvbGVzJ1xuaW1wb3J0IFRhbGVudFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1RhbGVudC9UYWxlbnRTa2lsbHMnXG5pbXBvcnQgVGFsZW50U3VtbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL1RhbGVudC9UYWxlbnRTdW1tYXJ5J1xuaW1wb3J0IFRhbGVudFdvcmtFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFsZW50L1RhbGVudFdvcmtFeHBlcmllbmNlJ1xuaW1wb3J0IFRhbGVudEVkdWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RhbGVudC9UYWxlbnRFZHVjYXRpb24nXG5cbmZ1bmN0aW9uIFRhbGVuUHJvZmlsZSgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJJbmZvcm1hdGlvbnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm9ybWF0aW9ucycpXG4gICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXJJbmZvcm1hdGlvbnMpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBtdD17MjB9XG4gICAgICBoPVwiMTAwMHB4XCJcbiAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgyLCAxZnIpXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCJcbiAgICAgIGdhcD17NX1cbiAgICA+XG4gICAgICA8R3JpZEl0ZW1cbiAgICAgICAgcm93U3Bhbj17MjB9XG4gICAgICAgIGNvbFNwYW49ezF9XG4gICAgICAgIGg9XCJhdXRvXCJcbiAgICAgICAgdz1cIjMwMHB4XCJcbiAgICAgICAgYmc9XCIjZjdmN2ZlXCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJ0dXJxdW9pc2VcIlxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXs3fVxuICAgICAgPlxuICAgICAgICA8VGFsZW50QWJvdXQgLz5cbiAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8R3JpZEl0ZW1cbiAgICAgICAgaD1cIjIwMHB4XCJcbiAgICAgICAgdz1cImF1dG9cIlxuICAgICAgICBjb2xTcGFuPXs0fVxuICAgICAgICBiZz1cIiNmN2Y3ZmVcIlxuICAgICAgICBib3JkZXJDb2xvcj1cInR1cnF1b2lzZVwiXG4gICAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezd9XG4gICAgICA+XG4gICAgICAgIDxUYWxlbnRJbmZvIC8+XG4gICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICB7LyogPEdyaWRcbiAgICAgICAgaD0nMTAwMHB4J1xuICAgICAgICB3PXs1MDB9XG4gICAgICAgIGdhcD17Mn1cbiAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDUsIDFmcilcIlxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNSwgMWZyKVwiXG4gICAgICAgIC8vIG1sPXsyNTB9XG5cbiAgICAgID5cbiAgICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17MTAwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30+XG4gICAgICAgICAgICAgIDxUYWxlbnRSb2xlcyAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezEwMH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9IC8+XG4gICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezEwMH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9IC8+XG4gICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezEwMH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9IC8+XG4gICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezEwMH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9IC8+XG4gICAgICAgICAgPEdyaWRJdGVtIHJvd1NwYW49ezIwfSBjb2xTcGFuPXsxMH0gIGJnPScjZjdmN2ZlJyBib3JkZXJDb2xvcj0ndHVycXVvaXNlJyBib3JkZXJXaWR0aD17Mn0gYm9yZGVyUmFkaXVzPXs3fSAvPlxuXG4gICAgICA8L0dyaWQ+ICovfVxuXG4gICAgICA8R3JpZFxuICAgICAgICBoPVwiMTAwMHB4XCJcbiAgICAgICAgdGVtcGxhdGVSb3dzPVwicmVwZWF0KDYsIDFmcilcIlxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNzAsIDFmcilcIlxuICAgICAgICBnYXA9ezR9XG4gICAgICA+XG4gICAgICAgIFxuICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17NTB9IGJnPScjZmZmZmZmJyAgYm9yZGVyV2lkdGg9ezAuNn0gYm9yZGVyUmFkaXVzPXs3fT5cbiAgICAgICAgICAgICAgPFRhbGVudFJvbGVzIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPEdyaWRJdGVtIHJvd1NwYW49ezJ9IGNvbFNwYW49ezIwfSBiZz1cInRvbWF0b1wiIC8+XG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs1MH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9PlxuICAgICAgICAgICAgICA8VGFsZW50U3VtbWFyeSAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezUwfSBiZz0nI2Y3ZjdmZScgYm9yZGVyQ29sb3I9J3R1cnF1b2lzZScgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclJhZGl1cz17N30+XG4gICAgICAgICAgICAgIDxUYWxlbnRTa2lsbHMgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs1MH0gYmc9JyNmN2Y3ZmUnIGg9J2F1dG8nIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9PlxuICAgICAgICAgICAgICA8VGFsZW50V29ya0V4cGVyaWVuY2UgLz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs1MH0gYmc9JyNmN2Y3ZmUnIGJvcmRlckNvbG9yPSd0dXJxdW9pc2UnIGJvcmRlcldpZHRoPXsyfSBib3JkZXJSYWRpdXM9ezd9PlxuICAgICAgICAgICAgICA8VGFsZW50RWR1Y2F0aW9uIC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgXG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhbGVuUHJvZmlsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/talentProfile.js\n");

/***/ })

})