webpackHotUpdate_N_E("pages/signUpTalent",{

/***/ "./components/SignUpForm/SignUpForm.js":
/*!*********************************************!*\
  !*** ./components/SignUpForm/SignUpForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_talentApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/talentApi */ \"./api/talentApi.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/berk/Documents/React/honeymock/components/SignUpForm/SignUpForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction SignUpForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    name: '',\n    surname: '',\n    email: '',\n    password: '',\n    rePassword: ''\n  }),\n      values = _useState[0],\n      setValues = _useState[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setValues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, name, value)));\n  };\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var body, userInformations;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              body = {\n                name: values.name,\n                surname: values.surname,\n                password: values.password,\n                email: values.email\n              };\n              _context.next = 4;\n              return Object(_api_talentApi__WEBPACK_IMPORTED_MODULE_6__[\"createTalent\"])({\n                body: body\n              });\n\n            case 4:\n              userInformations = _context.sent;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    w: 400,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n      children: \"Join XXXX\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n      as: \"h6\",\n      size: \"xs\",\n      children: \"Create a free XXXX account and let companies apply directly to you.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"firstName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"name\",\n          name: \"name\",\n          value: values.name,\n          onChange: handleInputChange,\n          placeholder: \"Your First Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"lastName\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"name\",\n          name: \"surname\",\n          value: values.surname,\n          onChange: handleInputChange,\n          placeholder: \"Your Last Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"email\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"email\",\n          name: \"email\",\n          value: values.email,\n          onChange: handleInputChange,\n          placeholder: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"password\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          name: \"password\",\n          type: \"password\",\n          value: values.password,\n          onChange: handleInputChange,\n          placeholder: \"Create a password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"FormControl\"], {\n        id: \"rePassword\",\n        mt: 4,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"password\",\n          name: \"rePassword\",\n          value: values.rePassword,\n          onChange: handleInputChange,\n          placeholder: \"Repeat password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        width: \"full\",\n        mt: 4,\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SignUpForm, \"HNWi9YToVVAXCtSci20EBB1V7j8=\");\n\n_c = SignUpForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUpForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtL1NpZ25VcEZvcm0uanM/NmIwMiJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwidXNlU3RhdGUiLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZVBhc3N3b3JkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJjcmVhdGVUYWxlbnQiLCJ1c2VySW5mb3JtYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUM7QUFDakNDLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsV0FBTyxFQUFFLEVBRndCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFlBQVEsRUFBRSxFQUp1QjtBQUtqQ0MsY0FBVSxFQUFFO0FBTHFCLEdBQUQsQ0FGbEI7QUFBQSxNQUVYQyxNQUZXO0FBQUEsTUFFSEMsU0FGRzs7QUFVbEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFBQSxvQkFDSEEsQ0FBQyxDQUFDQyxNQURDO0FBQUEsUUFDbkJULElBRG1CLGFBQ25CQSxJQURtQjtBQUFBLFFBQ2JVLEtBRGEsYUFDYkEsS0FEYTtBQUUzQkosYUFBUyxpQ0FBTUQsTUFBTixxR0FBZUwsSUFBZixFQUFzQlUsS0FBdEIsR0FBVDtBQUNILEdBSEQ7O0FBVmtCLFdBZUhDLFlBZkc7QUFBQTtBQUFBOztBQUFBO0FBQUEscU1BZWxCLGlCQUE0QkgsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0ksY0FBRjtBQUNNQyxrQkFGVixHQUVpQjtBQUFFYixv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VUFBRSxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBMkRIOztHQWhGUVQsVTs7S0FBQUEsVTtBQWtGTUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25VcEZvcm0vU2lnblVwRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRm9ybUNvbnRyb2wsXG4gICAgSW5wdXQsXG4gICAgQm94LFxuICAgIEJ1dHRvbixcbiAgICBIZWFkaW5nXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlVGFsZW50IH0gZnJvbSAnLi4vLi4vYXBpL3RhbGVudEFwaSc7XG5cbmZ1bmN0aW9uIFNpZ25VcEZvcm0oKSB7XG5cbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgc3VybmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICByZVBhc3N3b3JkOiAnJyxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IG5hbWU6IHZhbHVlcy5uYW1lLCBzdXJuYW1lOiB2YWx1ZXMuc3VybmFtZSwgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCwgZW1haWw6IHZhbHVlcy5lbWFpbCB9O1xuICAgICAgICBjb25zdCB1c2VySW5mb3JtYXRpb25zID0gYXdhaXQgY3JlYXRlVGFsZW50KHtib2R5OiBib2R5fSk7XG4gICAgICAgIFxuICAgICAgfVxuICAgIHJldHVybihcbiAgICA8Qm94IHc9ezQwMH0+XG4gICAgPEhlYWRpbmc+Sm9pbiBYWFhYPC9IZWFkaW5nPlxuICAgIDxIZWFkaW5nIGFzPVwiaDZcIiBzaXplPVwieHNcIj5cbiAgICAgIENyZWF0ZSBhIGZyZWUgWFhYWCBhY2NvdW50IGFuZCBsZXQgY29tcGFuaWVzIGFwcGx5IGRpcmVjdGx5IHRvIHlvdS5cbiAgICA8L0hlYWRpbmc+XG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJmaXJzdE5hbWVcIiBtdD17NH0+XG4gICAgICAgIDxJbnB1dCBcbiAgICAgICAgdHlwZT1cIm5hbWVcIlxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0IE5hbWVcIiAvPlxuICAgICAgICBcbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImxhc3ROYW1lXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgbmFtZT1cInN1cm5hbWVcIiBcbiAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTGFzdCBOYW1lXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCIgbXQ9ezR9PlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJwYXNzd29yZFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgcGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIGlkPVwicmVQYXNzd29yZFwiIG10PXs0fT5cbiAgICAgICAgPElucHV0IFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgbmFtZT1cInJlUGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17dmFsdWVzLnJlUGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwZWF0IHBhc3N3b3JkXCIgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxCdXR0b24gd2lkdGg9XCJmdWxsXCIgbXQ9ezR9PlxuICAgICAgICBTaWduIFVwXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0JveD4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignUpForm/SignUpForm.js\n");

/***/ })

})