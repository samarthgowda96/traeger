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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/samarthgowda/Desktop/Assesments/Traeger-onboarding/pages/Timberline.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({\n  main: {\n    height: \"400px\",\n    width: \"100vw\",\n    backgroundColor: \"azure\"\n  },\n  cont: {},\n  box: {\n    height: \"400px\",\n    width: \"100vw\",\n    backgroundColor: \"black\"\n  }\n});\n\nvar Timberline = function Timberline(_ref) {\n  _s();\n\n  var newproducts = _ref.newproducts;\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.main,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n          textAlign: \"center\",\n          fontSize: \"1em\",\n          color: \"#ff8c00\",\n          padding: \"25px\"\n        },\n        children: newproducts[0][\"toutContent\"].heading\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n          textAlign: \"center\",\n          fontSize: \"0.45em\",\n          color: \"#ff8c00\",\n          padding: \"15px\"\n        },\n        children: newproducts[0][\"toutContent\"].description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.box\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Timberline, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Timberline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timberline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timberline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGltYmVybGluZS5qc3g/ZDA2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwibWFpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29udCIsImJveCIsIlRpbWJlcmxpbmUiLCJuZXdwcm9kdWN0cyIsImNsYXNzZXMiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZyIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsT0FETjtBQUVGQyxTQUFLLEVBQUUsT0FGTDtBQUdGQyxtQkFBZSxFQUFDO0FBSGQsR0FEbUI7QUFRekJDLE1BQUksRUFBQyxFQVJvQjtBQWF6QkMsS0FBRyxFQUFDO0FBQ0FKLFVBQU0sRUFBRSxPQURSO0FBRUFDLFNBQUssRUFBRSxPQUZQO0FBR0FDLG1CQUFlLEVBQUM7QUFIaEI7QUFicUIsQ0FBRCxDQUE1Qjs7QUFvQkEsSUFBTUcsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBaUI7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFHOUIsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUEsc0JBQ0c7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRVUsT0FBTyxDQUFDUixJQUF4QjtBQUFBLDhCQUVJO0FBQUksYUFBSyxFQUFFO0FBQUNTLG1CQUFTLEVBQUMsUUFBWDtBQUFxQkMsa0JBQVEsRUFBQyxLQUE5QjtBQUFxQ0MsZUFBSyxFQUFDLFNBQTNDO0FBQXFEQyxpQkFBTyxFQUFDO0FBQTdELFNBQVg7QUFBQSxrQkFBa0ZMLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxhQUFmLEVBQThCTTtBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFHLGFBQUssRUFBRTtBQUFDSixtQkFBUyxFQUFDLFFBQVg7QUFBb0JDLGtCQUFRLEVBQUMsUUFBN0I7QUFBc0NDLGVBQUssRUFBQyxTQUE1QztBQUFzREMsaUJBQU8sRUFBQztBQUE5RCxTQUFWO0FBQUEsa0JBQWtGTCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsYUFBZixFQUE4Qk87QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBUUM7QUFBSyxlQUFTLEVBQUVOLE9BQU8sQ0FBQ0g7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJEO0FBQUEsa0JBREg7QUFtQkgsQ0F4QkQ7O0dBQU1DLFU7VUFHY1IsUzs7O0tBSGRRLFU7QUF5Qk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9UaW1iZXJsaW5lLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBtYWluOiB7XG4gICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJhenVyZVwiXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgfSxcbiAgICBjb250OntcbiAgICBcbiAgICBcbiAgICBcbiAgICB9LFxuICAgIGJveDp7XG4gICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiXG5cbiAgICB9XG59KTtcbmNvbnN0IFRpbWJlcmxpbmU9KHtuZXdwcm9kdWN0c30pPT57XG4gICAgXG4gICAgXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIGZvbnRTaXplOlwiMWVtXCIsIGNvbG9yOlwiI2ZmOGMwMFwiLHBhZGRpbmc6XCIyNXB4XCJ9fT57bmV3cHJvZHVjdHNbMF1bXCJ0b3V0Q29udGVudFwiXS5oZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGZvbnRTaXplOlwiMC40NWVtXCIsY29sb3I6XCIjZmY4YzAwXCIscGFkZGluZzpcIjE1cHhcIn19PntuZXdwcm9kdWN0c1swXVtcInRvdXRDb250ZW50XCJdLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgICAgICBcbiAgICAgICAgICB7LyogICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLCBmb250U2l6ZTpcIjFlbVwiLCBjb2xvcjpcIiNmZjhjMDBcIn19PntuZXdwcm9kdWN0c1sxXVtcInRvdXRDb250ZW50XCJdLmxpbEhlYWRpbmd9PC9wPiAqL31cblxuICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVGltYmVybGluZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Timberline.jsx\n");

/***/ })

});