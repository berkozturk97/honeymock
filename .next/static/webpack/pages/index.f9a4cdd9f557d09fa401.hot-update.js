webpackHotUpdate_N_E("pages/index",{

/***/ "./api/talentApi.js":
/*!**************************!*\
  !*** ./api/talentApi.js ***!
  \**************************/
/*! exports provided: loginTalent, getTalents, createTalent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginTalent\", function() { return loginTalent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTalents\", function() { return getTalents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTalent\", function() { return createTalent; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar loginTalent = function loginTalent(_ref) {\n  var _ref$body = _ref.body,\n      body = _ref$body === void 0 ? null : _ref$body;\n  return new Promise(function (resolve, reject) {\n    var REQUEST_URL = \"https://honeypot-server.herokuapp.com/auth/loginTalent\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REQUEST_URL, body).then(function (response) {\n      console.log(response.data);\n      resolve(response.data);\n    })[\"catch\"](function (err) {\n      reject(null);\n    });\n  });\n};\nvar getTalents = function getTalents(token) {\n  return new Promise(function (resolve, reject) {\n    var REQUEST_URL = \"https://honeypot-server.herokuapp.com/talent/getTalents\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(REQUEST_URL, {\n      headers: {\n        'token': \"16108890204186d79baccc795ac1a55b59ab1d9f195b07c9582bf\"\n      }\n    }).then(function (response) {\n      resolve(response.data);\n    })[\"catch\"](function (err) {\n      reject(null);\n    });\n  });\n};\nvar createTalent = function createTalent(_ref2) {\n  var _ref2$body = _ref2.body,\n      body = _ref2$body === void 0 ? null : _ref2$body;\n  return new Promise(function (resolve, reject) {\n    var REQUEST_URL = \"https://honeypot-server.herokuapp.com/talent/createTalent\";\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(REQUEST_URL, body).then(function (response) {\n      console.log(response);\n      resolve(response.data);\n    })[\"catch\"](function (err) {\n      reject(null);\n    });\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL3RhbGVudEFwaS5qcz83ZmU4Il0sIm5hbWVzIjpbImxvZ2luVGFsZW50IiwiYm9keSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiUkVRVUVTVF9VUkwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImdldFRhbGVudHMiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJjcmVhdGVUYWxlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQSx1QkFBZkMsSUFBZTtBQUFBLE1BQWZBLElBQWUsMEJBQVYsSUFBVTtBQUN4QyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBSUMsV0FBVyxHQUFHLHdEQUFsQjtBQUNBQyxnREFBSyxDQUFDQyxJQUFOLENBQVdGLFdBQVgsRUFBdUJKLElBQXZCLEVBQ0tPLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBRUFULGFBQU8sQ0FBQ00sUUFBUSxDQUFDRyxJQUFWLENBQVA7QUFDSCxLQUxMLFdBS2EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RULFlBQU0sQ0FBQyxJQUFELENBQU47QUFDSCxLQVBMO0FBUUgsR0FWTSxDQUFQO0FBV0gsQ0FaTTtBQWNBLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPLElBQUliLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBSUMsV0FBVyxHQUFHLHlEQUFsQjtBQUNBQyxnREFBSyxDQUFDVSxHQUFOLENBQVVYLFdBQVYsRUFBdUI7QUFDbkJZLGFBQU8sRUFBRTtBQUNMLGlCQUFTO0FBREo7QUFEVSxLQUF2QixFQUtLVCxJQUxMLENBS1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCTixhQUFPLENBQUNNLFFBQVEsQ0FBQ0csSUFBVixDQUFQO0FBQ0gsS0FQTCxXQU9hLFVBQUNDLEdBQUQsRUFBUztBQUNkVCxZQUFNLENBQUMsSUFBRCxDQUFOO0FBQ0gsS0FUTDtBQVVILEdBWk0sQ0FBUDtBQWFILENBZE07QUFnQkEsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBaUI7QUFBQSx5QkFBZmpCLElBQWU7QUFBQSxNQUFmQSxJQUFlLDJCQUFWLElBQVU7QUFDekMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFFBQUlDLFdBQVcsR0FBRywyREFBbEI7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXRixXQUFYLEVBQXVCSixJQUF2QixFQUNLTyxJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBTixhQUFPLENBQUNNLFFBQVEsQ0FBQ0csSUFBVixDQUFQO0FBQ0gsS0FKTCxXQUlhLFVBQUNDLEdBQUQsRUFBUztBQUNkVCxZQUFNLENBQUMsSUFBRCxDQUFOO0FBQ0gsS0FOTDtBQU9ILEdBVE0sQ0FBUDtBQVVILENBWE0iLCJmaWxlIjoiLi9hcGkvdGFsZW50QXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luVGFsZW50ID0gKHtib2R5PW51bGx9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IFJFUVVFU1RfVVJMID0gXCJodHRwczovL2hvbmV5cG90LXNlcnZlci5oZXJva3VhcHAuY29tL2F1dGgvbG9naW5UYWxlbnRcIjtcbiAgICAgICAgYXhpb3MucG9zdChSRVFVRVNUX1VSTCxib2R5KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYWxlbnRzID0gKHRva2VuKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IFJFUVVFU1RfVVJMID0gXCJodHRwczovL2hvbmV5cG90LXNlcnZlci5oZXJva3VhcHAuY29tL3RhbGVudC9nZXRUYWxlbnRzXCI7XG4gICAgICAgIGF4aW9zLmdldChSRVFVRVNUX1VSTCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd0b2tlbic6IFwiMTYxMDg4OTAyMDQxODZkNzliYWNjYzc5NWFjMWE1NWI1OWFiMWQ5ZjE5NWIwN2M5NTgyYmZcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFsZW50ID0gKHtib2R5PW51bGx9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IFJFUVVFU1RfVVJMID0gXCJodHRwczovL2hvbmV5cG90LXNlcnZlci5oZXJva3VhcHAuY29tL3RhbGVudC9jcmVhdGVUYWxlbnRcIjtcbiAgICAgICAgYXhpb3MucG9zdChSRVFVRVNUX1VSTCxib2R5KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/talentApi.js\n");

/***/ })

})