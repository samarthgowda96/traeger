/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Timberline.jsx":
/*!******************************!*\
  !*** ./pages/Timberline.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/samarthgowda/Desktop/Assesments/Traeger-onboarding/pages/Timberline.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({\n  main: {\n    height: \"500px\",\n    width: \"100vw\",\n    backgroundColor: \"azure\"\n  },\n  cont: {\n    marginTop: \"2em\"\n  }\n});\n\nvar Timberline = function Timberline(_ref) {\n  _s();\n\n  var newproducts = _ref.newproducts;\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.main,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.cont,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n          textAlign: \"center\",\n          fontSize: \"1em\",\n          color: \"#ff8c00\",\n          padding: \"0px\"\n        },\n        children: newproducts[0][\"toutContent\"].heading\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n          textAlign: \"center\",\n          color: \"#ff8c00\",\n          padding: \"0px\"\n        },\n        children: newproducts[0][\"toutContent\"].description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Timberline, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Timberline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timberline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timberline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGltYmVybGluZS5qc3g/ZDA2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwibWFpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29udCIsIm1hcmdpblRvcCIsIlRpbWJlcmxpbmUiLCJuZXdwcm9kdWN0cyIsImNsYXNzZXMiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZyIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxPQUROO0FBRUZDLFNBQUssRUFBRSxPQUZMO0FBR0ZDLG1CQUFlLEVBQUM7QUFIZCxHQURtQjtBQVF6QkMsTUFBSSxFQUFDO0FBRUxDLGFBQVMsRUFBQztBQUZMO0FBUm9CLENBQUQsQ0FBNUI7O0FBY0EsSUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBaUI7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFHOUIsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1IsSUFBeEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVEsT0FBTyxDQUFDSixJQUF4QjtBQUFBLDhCQUNBO0FBQUksYUFBSyxFQUFFO0FBQUNLLG1CQUFTLEVBQUMsUUFBWDtBQUFxQkMsa0JBQVEsRUFBQyxLQUE5QjtBQUFxQ0MsZUFBSyxFQUFDLFNBQTNDO0FBQXFEQyxpQkFBTyxFQUFDO0FBQTdELFNBQVg7QUFBQSxrQkFBaUZMLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxhQUFmLEVBQThCTTtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFHLGFBQUssRUFBRTtBQUFDSixtQkFBUyxFQUFDLFFBQVg7QUFBcUJFLGVBQUssRUFBQyxTQUEzQjtBQUFxQ0MsaUJBQU8sRUFBQztBQUE3QyxTQUFWO0FBQUEsa0JBQWdFTCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsYUFBZixFQUE4Qk87QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBZEQ7O0dBQU1SLFU7VUFHY1IsUzs7O0tBSGRRLFU7QUFlTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL1RpbWJlcmxpbmUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIG1haW46IHtcbiAgICAgICAgaGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcImF6dXJlXCJcbiAgICAgICBcbiAgICAgICAgXG4gICAgICB9LFxuICAgIGNvbnQ6e1xuICAgIFxuICAgIG1hcmdpblRvcDpcIjJlbVwiXG4gICAgXG4gICAgfVxufSk7XG5jb25zdCBUaW1iZXJsaW5lPSh7bmV3cHJvZHVjdHN9KT0+e1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udH0+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgZm9udFNpemU6XCIxZW1cIiwgY29sb3I6XCIjZmY4YzAwXCIscGFkZGluZzpcIjBweFwifX0+e25ld3Byb2R1Y3RzWzBdW1widG91dENvbnRlbnRcIl0uaGVhZGluZ308L2gxPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgY29sb3I6XCIjZmY4YzAwXCIscGFkZGluZzpcIjBweFwifX0+e25ld3Byb2R1Y3RzWzBdW1widG91dENvbnRlbnRcIl0uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVGltYmVybGluZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Timberline.jsx\n");

/***/ })

});