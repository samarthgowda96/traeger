/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Products.jsx":
/*!****************************!*\
  !*** ./pages/Products.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./pages/Product.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Faqs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Faqs */ \"./pages/Faqs.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/samarthgowda/Desktop/Assesments/Traeger-onboarding/pages/Products.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var products = _ref.products,\n      grillName = _ref.grillName;\n\n  //Declaring the state to set parsed data \n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      newproducts = _useState[0],\n      setNewProducts = _useState[1]; //Parsing the data based on Grill type\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    //Parsing the data based on Grill Type\n    if (grillName === \"Timberline Features - Tout Content\") {\n      var res = products.filter(function (product) {\n        return product['_meta'].schema === \"https://traegergrills.com/data/contentTypes/toutContent.json\";\n      });\n      setNewProducts(res);\n    } else if (grillName === \"Ironwood 650 Pellet Grill\") {\n      var _res = products.filter(function (product) {\n        return product['_meta'].schema === \"https://traegergrills.com/data/contentTypes/product.json\" || product['_meta'].schema === \"https://traegergrills.com/data/contentTypes/grillCapacityAndMeasurement.json\";\n      });\n\n      setNewProducts(_res);\n    }\n  }, [grillName]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: newproducts.length > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n      newproducts: newproducts,\n      grillName: grillName,\n      products: products\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 37\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Products, \"K9t8W1uwTnh7h47kn3w6AyVxD9w=\");\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJvZHVjdHMuanN4P2M4MzMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJwcm9kdWN0cyIsImdyaWxsTmFtZSIsInVzZVN0YXRlIiwibmV3cHJvZHVjdHMiLCJzZXROZXdQcm9kdWN0cyIsInVzZUVmZmVjdCIsInJlcyIsImZpbHRlciIsInByb2R1Y3QiLCJzY2hlbWEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxPQUF3QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ25DO0FBRG1DLGtCQUVDQywrQ0FBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRTVCQyxXQUY0QjtBQUFBLE1BRWhCQyxjQUZnQixpQkFHbkM7OztBQUNBQyxrREFBUyxDQUFDLFlBQUk7QUFDVjtBQUNBLFFBQUdKLFNBQVMsS0FBRyxvQ0FBZixFQUFvRDtBQUNoRCxVQUFNSyxHQUFHLEdBQUNOLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsZUFDMUJBLE9BQU8sQ0FBQyxPQUFELENBQVAsQ0FBaUJDLE1BQWpCLEtBQTBCLDhEQURBO0FBQUEsT0FBaEIsQ0FBVjtBQUdBTCxvQkFBYyxDQUFDRSxHQUFELENBQWQ7QUFFSCxLQU5ELE1BTU0sSUFBR0wsU0FBUyxLQUFHLDJCQUFmLEVBQTJDO0FBQzlDLFVBQU1LLElBQUcsR0FBQ04sUUFBUSxDQUFDTyxNQUFULENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxlQUNyQkEsT0FBTyxDQUFDLE9BQUQsQ0FBUCxDQUFpQkMsTUFBakIsS0FBMEIsMERBQTFCLElBQXNGRCxPQUFPLENBQUMsT0FBRCxDQUFQLENBQWlCQyxNQUFqQixLQUEwQiw4RUFEM0Y7QUFBQSxPQUFoQixDQUFWOztBQUlLTCxvQkFBYyxDQUFDRSxJQUFELENBQWQ7QUFDUDtBQUNQLEdBZlcsRUFlVixDQUFDTCxTQUFELENBZlUsQ0FBVDtBQWlCSCxzQkFDTztBQUFBLGNBQ0tFLFdBQVcsQ0FBQ08sTUFBWixHQUFtQixDQUFuQixpQkFBdUIsOERBQUMsNkNBQUQ7QUFBUyxpQkFBVyxFQUFFUCxXQUF0QjtBQUFtQyxlQUFTLEVBQUVGLFNBQTlDO0FBQXlELGNBQVEsRUFBRUQ7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ1QixtQkFEUDtBQU1BLENBM0JEOztHQUFNRCxROztLQUFBQSxRO0FBNkJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvUHJvZHVjdHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBGYXFzIGZyb20gJy4vRmFxcydcbmNvbnN0IFByb2R1Y3RzPSh7cHJvZHVjdHMsZ3JpbGxOYW1lfSk9PntcbiAgICAvL0RlY2xhcmluZyB0aGUgc3RhdGUgdG8gc2V0IHBhcnNlZCBkYXRhIFxuICAgIGNvbnN0IFtuZXdwcm9kdWN0cyxzZXROZXdQcm9kdWN0c109IHVzZVN0YXRlKHt9KVxuICAgIC8vUGFyc2luZyB0aGUgZGF0YSBiYXNlZCBvbiBHcmlsbCB0eXBlXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vUGFyc2luZyB0aGUgZGF0YSBiYXNlZCBvbiBHcmlsbCBUeXBlXG4gICAgICAgIGlmKGdyaWxsTmFtZT09PVwiVGltYmVybGluZSBGZWF0dXJlcyAtIFRvdXQgQ29udGVudFwiKXtcbiAgICAgICAgICAgIGNvbnN0IHJlcz1wcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpPT4oXG4gICAgICAgICAgICBwcm9kdWN0WydfbWV0YSddLnNjaGVtYT09PVwiaHR0cHM6Ly90cmFlZ2VyZ3JpbGxzLmNvbS9kYXRhL2NvbnRlbnRUeXBlcy90b3V0Q29udGVudC5qc29uXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBzZXROZXdQcm9kdWN0cyhyZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2UgaWYoZ3JpbGxOYW1lPT09XCJJcm9ud29vZCA2NTAgUGVsbGV0IEdyaWxsXCIpe1xuICAgICAgICAgICBjb25zdCByZXM9cHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KT0+KFxuICAgICAgICAgICAgICAgIHByb2R1Y3RbJ19tZXRhJ10uc2NoZW1hPT09XCJodHRwczovL3RyYWVnZXJncmlsbHMuY29tL2RhdGEvY29udGVudFR5cGVzL3Byb2R1Y3QuanNvblwifHxwcm9kdWN0WydfbWV0YSddLnNjaGVtYT09PVwiaHR0cHM6Ly90cmFlZ2VyZ3JpbGxzLmNvbS9kYXRhL2NvbnRlbnRUeXBlcy9ncmlsbENhcGFjaXR5QW5kTWVhc3VyZW1lbnQuanNvblwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXROZXdQcm9kdWN0cyhyZXMpXG4gICAgICAgIH1cbiB9LFtncmlsbE5hbWVdKVxuIFxuIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bmV3cHJvZHVjdHMubGVuZ3RoPjEmJiA8UHJvZHVjdCBuZXdwcm9kdWN0cz17bmV3cHJvZHVjdHN9IGdyaWxsTmFtZT17Z3JpbGxOYW1lfSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+fVxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Products.jsx\n");

/***/ })

});