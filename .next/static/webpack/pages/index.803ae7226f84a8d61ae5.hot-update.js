/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Ironwood.jsx":
/*!****************************!*\
  !*** ./pages/Ironwood.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/next-server/server/router */ \"./node_modules/next/dist/next-server/server/router.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _Faqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faqs */ \"./pages/Faqs.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/samarthgowda/Desktop/Assesments/Traeger-onboarding/pages/Ironwood.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({\n  root: {\n    width: \"100vw\",\n    height: \"500px\",\n    textAlign: \"center\",\n    verticalAlign: \"middle\",\n    cursor: \"context-menu\",\n    marginTop: \"21em\",\n    backgroundColor: \"#2f4353\",\n    backgroundImage: \"linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)\",\n    boxShadow: \"0 -1px 4px 0 rgba(25,32,36,0.04), 0 3px 6px 0 rgba(25,32,36,0.16)\",\n    \"&:hover\": {\n      borderColor: \"#564345\"\n    }\n  },\n  bullet: {\n    display: \"inline-block\",\n    margin: \"0 2px\",\n    transform: \"scale(0.8)\"\n  },\n  title: {\n    fontSize: \"40px\",\n    textAlign: \"right\",\n    marginTop: \"20px\",\n    fontFamily: \"Helvetica\",\n    fontWeight: \"bold\",\n    color: \"#192024\",\n    display: \"inline-block\",\n    marginLeft: \"\"\n  },\n  pos: {\n    marginBottom: \"12px\"\n  },\n  flexbox: {\n    display: \"flex\",\n    flexDirection: \"row\",\n    flexWrap: \"wrap\",\n    margin: \"-10px 0 0 -10px\"\n  },\n  box: {\n    display: \"flex\",\n    flexDirection: \"row\",\n    textAlign: \"center\",\n    height: \"fit-content\"\n  },\n  main: {\n    height: \"fit-content\"\n  },\n  image: {\n    display: \"inline-block\",\n    marginRight: \"4em\",\n    marginTop: \"1.5em\"\n  },\n  imgcont: {\n    marginLeft: \"0%\",\n    marginRight: \"10em\",\n    boxShadow: \"0 -1px 4px 0 rgba(25,32,36,0.04), 0 3px 6px 0 rgba(25,36,36,0.16)\"\n  },\n  imgItem: {\n    /* marginLeft: \"2em\" */\n    width: \"1em\",\n    height: \"1em\"\n  },\n  desc: {\n    backgroundColor: \"azure\",\n    alignItems: \"left\",\n    border: \"5px solid red\"\n  },\n  spa: {\n    display: \"inline-block\",\n    height: \"fit-content\",\n    color: \"black\",\n    textAlign: \"right\",\n    fontSize: \"0.5em\",\n    marginRight: '100px'\n  },\n  sp: {\n    color: \"black\",\n    marginRight: \"3em\",\n    marginTop: \"1em\",\n    fontSize: \"0.5em\",\n    width: \"fit-content\"\n  },\n  s: {\n    alignItems: \"center\",\n    marginRight: \"10em\",\n    width: \"fit-content\"\n  },\n  flexboxCont: {\n    display: 'flex',\n\n    /*     flex-direction:column; */\n    height: '350px',\n    backgroundColor: 'black',\n    justifyContent: 'space-evenly'\n  },\n  flexboxItem: {\n    margin: '10px',\n    height: \"fit-content\",\n    textAlign: 'left',\n    marginBottom: \"2em\",\n    justifyContent: 'space-evenly'\n  },\n  flexboxItem1: {\n    fontSize: \"0.7em\",\n\n    /* this tells the box not to shrink even when the browser is made small */\n    flexShrink: '0',\n    textAlign: \"left\"\n  },\n  flexboxItem2: {\n    fontSize: \"0.5em\"\n  },\n  foodTitle: {\n    justifyContent: 'space-evenly',\n    marginLeft: '1em',\n    fontSize: \"0.6em\"\n  }\n  /*  flexboxItem3:{\n     fontSize: \"0.5em\",\n     marginBottom: \"\",\n     height:\"fit-content\",\n     marginLeft:\"4em\"\n   } */\n\n});\n\nvar Ironwood = function Ironwood(_ref) {\n  _s();\n\n  var newproducts = _ref.newproducts,\n      products = _ref.products;\n  var classes = useStyles();\n  console.log(newproducts);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      style: {\n        color: \"white\"\n      },\n      children: \"Grills\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.main,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, {\n        className: classes.root,\n        variant: \"outlined\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classes.image,\n            children: newproducts && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              style: {\n                \"width\": \"250px\",\n                \"height\": \"230px\"\n              },\n              src: newproducts[0]['images'][1].url\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 175,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 173,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n            className: classes.title,\n            color: \"textSecondary\",\n            gutterBottom: true,\n            children: [newproducts[0]['_meta'].name.toUpperCase(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 188,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                color: \"white\"\n              },\n              children: [\"$\", newproducts[0]['productData'][\"price\"]]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 189,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {\n              style: {\n                \"backgroundColor\": \"#7cffcb\",\n                \"backgroundImage\": \"linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%\",\n                \"height\": \"3em\"\n              },\n              children: \"ADD TO CART\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 193,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 181,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes.flexboxCont,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: classes.flexboxItem,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: classes.flexboxItem1,\n            children: newproducts[0]['productData'][\"grillSeries\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 226,\n            columnNumber: 12\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 227,\n            columnNumber: 12\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: classes.flexboxItem2,\n            children: newproducts[1]['toutContent']['toutContent']['description']\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 228,\n            columnNumber: 12\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 225,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: classes.flexboxItem,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            style: {\n              \"width\": \"270px\",\n              \"height\": \"270px\"\n            },\n            src: newproducts[1]['exteriorImage'].url\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 235,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 232,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 224,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes.flexboxCont,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: classes.flexboxItem,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            style: {\n              textAlign: \"center\",\n              fontSize: \"1em\",\n              color: \"#ff8c00\"\n            },\n            children: \"Capacity\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 249,\n            columnNumber: 17\n          }, _this), newproducts[1].grillCapacity.map(function (cap) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: classes.foodTitle,\n              children: [cap.foodTitle, \" - \", cap.amount]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 251,\n              columnNumber: 26\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 248,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 247,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          display: \"inline-block\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: classes.foodTitle,\n          children: [\"Total Cooking Space : \", newproducts[1].totalCookingSpace]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 259,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 259,\n          columnNumber: 114\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: classes.foodTitle,\n          children: [\"Total weight : \", newproducts[1].totalWeight]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 260,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 260,\n          columnNumber: 101\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: classes.foodTitle,\n          children: [\"Pellet hopper capacity : \", newproducts[1].pelletHopperCapacity]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 261,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 261,\n          columnNumber: 120\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: classes.foodTitle,\n          children: [\"Max temperature : \", newproducts[1].maxTemp]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 100\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 258,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Faqs__WEBPACK_IMPORTED_MODULE_2__.default, {\n          products: products[4]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 265,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 264,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 8\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Ironwood, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Ironwood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ironwood);\n\nvar _c;\n\n$RefreshReg$(_c, \"Ironwood\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSXJvbndvb2QuanN4P2IyYzIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3hTaGFkb3ciLCJib3JkZXJDb2xvciIsImJ1bGxldCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJmbGV4Ym94IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiYm94IiwibWFpbiIsImltYWdlIiwibWFyZ2luUmlnaHQiLCJpbWdjb250IiwiaW1nSXRlbSIsImRlc2MiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyIiwic3BhIiwic3AiLCJzIiwiZmxleGJveENvbnQiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhib3hJdGVtIiwiZmxleGJveEl0ZW0xIiwiZmxleFNocmluayIsImZsZXhib3hJdGVtMiIsImZvb2RUaXRsZSIsIklyb253b29kIiwibmV3cHJvZHVjdHMiLCJwcm9kdWN0cyIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwidXJsIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiZ3JpbGxDYXBhY2l0eSIsIm1hcCIsImNhcCIsImFtb3VudCIsInRvdGFsQ29va2luZ1NwYWNlIiwidG90YWxXZWlnaHQiLCJwZWxsZXRIb3BwZXJDYXBhY2l0eSIsIm1heFRlbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE9BREg7QUFJSkMsVUFBTSxFQUFFLE9BSko7QUFLSkMsYUFBUyxFQUFFLFFBTFA7QUFNSkMsaUJBQWEsRUFBRSxRQU5YO0FBT0pDLFVBQU0sRUFBRSxjQVBKO0FBUUpDLGFBQVMsRUFBRSxNQVJQO0FBVUpDLG1CQUFlLEVBQUUsU0FWYjtBQVdKQyxtQkFBZSxFQUFFLGtEQVhiO0FBWUpDLGFBQVMsRUFDUCxtRUFiRTtBQWNKLGVBQVc7QUFDVEMsaUJBQVcsRUFBRTtBQURKO0FBZFAsR0FEbUI7QUFtQnpCQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLGNBREg7QUFFTkMsVUFBTSxFQUFFLE9BRkY7QUFHTkMsYUFBUyxFQUFFO0FBSEwsR0FuQmlCO0FBd0J6QkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxNQURMO0FBRUxiLGFBQVMsRUFBRSxPQUZOO0FBR0xHLGFBQVMsRUFBRSxNQUhOO0FBSUxXLGNBQVUsRUFBRSxXQUpQO0FBS0xDLGNBQVUsRUFBRSxNQUxQO0FBTUxDLFNBQUssRUFBRSxTQU5GO0FBT0xQLFdBQU8sRUFBQyxjQVBIO0FBUUxRLGNBQVUsRUFBQztBQVJOLEdBeEJrQjtBQWtDekJDLEtBQUcsRUFBRTtBQUNIQyxnQkFBWSxFQUFFO0FBRFgsR0FsQ29CO0FBcUN6QkMsU0FBTyxFQUFFO0FBQ1BYLFdBQU8sRUFBRSxNQURGO0FBRVBZLGlCQUFhLEVBQUUsS0FGUjtBQUdQQyxZQUFRLEVBQUUsTUFISDtBQUlQWixVQUFNLEVBQUU7QUFKRCxHQXJDZ0I7QUEyQ3pCYSxLQUFHLEVBQUU7QUFDSGQsV0FBTyxFQUFFLE1BRE47QUFFSFksaUJBQWEsRUFBRSxLQUZaO0FBR0hyQixhQUFTLEVBQUMsUUFIUDtBQUlIRCxVQUFNLEVBQUU7QUFKTCxHQTNDb0I7QUFpRHpCeUIsTUFBSSxFQUFFO0FBQ0p6QixVQUFNLEVBQUM7QUFESCxHQWpEbUI7QUFzRHpCMEIsT0FBSyxFQUFFO0FBQ0hoQixXQUFPLEVBQUUsY0FETjtBQUVIaUIsZUFBVyxFQUFDLEtBRlQ7QUFHSHZCLGFBQVMsRUFBQztBQUhQLEdBdERrQjtBQTREekJ3QixTQUFPLEVBQUM7QUFDTlYsY0FBVSxFQUFDLElBREw7QUFFTlMsZUFBVyxFQUFDLE1BRk47QUFHTnBCLGFBQVMsRUFDVDtBQUpNLEdBNURpQjtBQWtFekJzQixTQUFPLEVBQUU7QUFDUDtBQUNBOUIsU0FBSyxFQUFDLEtBRkM7QUFHUEMsVUFBTSxFQUFDO0FBSEEsR0FsRWdCO0FBdUV6QjhCLE1BQUksRUFBQztBQUlMekIsbUJBQWUsRUFBQyxPQUpYO0FBS0wwQixjQUFVLEVBQUMsTUFMTjtBQU1MQyxVQUFNLEVBQUM7QUFORixHQXZFb0I7QUErRXpCQyxLQUFHLEVBQUM7QUFDRnZCLFdBQU8sRUFBRSxjQURQO0FBRUZWLFVBQU0sRUFBQyxhQUZMO0FBR0ZpQixTQUFLLEVBQUUsT0FITDtBQUlGaEIsYUFBUyxFQUFDLE9BSlI7QUFLRmEsWUFBUSxFQUFFLE9BTFI7QUFNRmEsZUFBVyxFQUFDO0FBTlYsR0EvRXFCO0FBeUZ6Qk8sSUFBRSxFQUFDO0FBQ0RqQixTQUFLLEVBQUUsT0FETjtBQUVEVSxlQUFXLEVBQUMsS0FGWDtBQUlEdkIsYUFBUyxFQUFDLEtBSlQ7QUFLRFUsWUFBUSxFQUFDLE9BTFI7QUFNRGYsU0FBSyxFQUFDO0FBTkwsR0F6RnNCO0FBbUd6Qm9DLEdBQUMsRUFBQztBQUNBSixjQUFVLEVBQUUsUUFEWjtBQUVBSixlQUFXLEVBQUMsTUFGWjtBQUdBNUIsU0FBSyxFQUFDO0FBSE4sR0FuR3VCO0FBeUd6QnFDLGFBQVcsRUFBQztBQUNWMUIsV0FBTyxFQUFFLE1BREM7O0FBRWQ7QUFDSVYsVUFBTSxFQUFFLE9BSEU7QUFJVkssbUJBQWUsRUFBRSxPQUpQO0FBS1ZnQyxrQkFBYyxFQUFDO0FBTEwsR0F6R2E7QUFnSHpCQyxhQUFXLEVBQUM7QUFFVjNCLFVBQU0sRUFBQyxNQUZHO0FBR1ZYLFVBQU0sRUFBQyxhQUhHO0FBTVZDLGFBQVMsRUFBRSxNQU5EO0FBUVZtQixnQkFBWSxFQUFDLEtBUkg7QUFTVmlCLGtCQUFjLEVBQUM7QUFUTCxHQWhIYTtBQTJIM0JFLGNBQVksRUFBQztBQUVUekIsWUFBUSxFQUFDLE9BRkE7O0FBR1Q7QUFDQTBCLGNBQVUsRUFBRSxHQUpIO0FBS1R2QyxhQUFTLEVBQUM7QUFMRCxHQTNIYztBQW9JM0J3QyxjQUFZLEVBQUM7QUFDWDNCLFlBQVEsRUFBRTtBQURDLEdBcEljO0FBdUkzQjRCLFdBQVMsRUFBRTtBQUNUTCxrQkFBYyxFQUFDLGNBRE47QUFFVG5CLGNBQVUsRUFBQyxLQUZGO0FBR1RKLFlBQVEsRUFBQztBQUhBO0FBS1o7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpKNkIsQ0FBRCxDQUE1Qjs7QUFxSkEsSUFBTTZCLFFBQVEsR0FBQyxTQUFUQSxRQUFTLE9BQTBCO0FBQUE7O0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNyQyxNQUFNQyxPQUFPLEdBQUdsRCxTQUFTLEVBQXpCO0FBQ0FtRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxXQUFLLEVBQUU7QUFBQzNCLGFBQUssRUFBQztBQUFQLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVDO0FBQUssZUFBUyxFQUFFNkIsT0FBTyxDQUFDckIsSUFBeEI7QUFBQSw4QkFJQyw4REFBQywyREFBRDtBQUNNLGlCQUFTLEVBQUVxQixPQUFPLENBQUNoRCxJQUR6QjtBQUVNLGVBQU8sRUFBQyxVQUZkO0FBQUEsK0JBSU0sOERBQUMsa0VBQUQ7QUFBQSxrQ0FFQTtBQUFLLHFCQUFTLEVBQUVnRCxPQUFPLENBQUNwQixLQUF4QjtBQUFBLHNCQUNHa0IsV0FBVyxpQkFDVjtBQUNBLG1CQUFLLEVBQUU7QUFBQyx5QkFBUSxPQUFUO0FBQWtCLDBCQUFTO0FBQTNCLGVBRFA7QUFFRCxpQkFBRyxFQUFFQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsUUFBZixFQUF5QixDQUF6QixFQUE0Qks7QUFGaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFVRSw4REFBQyxpRUFBRDtBQUNFLHFCQUFTLEVBQUVILE9BQU8sQ0FBQ2pDLEtBRHJCO0FBRUUsaUJBQUssRUFBQyxlQUZSO0FBR0Usd0JBQVksTUFIZDtBQUFBLHVCQU1DK0IsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLE9BQWYsRUFBd0JNLElBQXhCLENBQTZCQyxXQUE3QixFQU5ELGVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQQSxlQVFBO0FBQUssbUJBQUssRUFBRTtBQUFDbEMscUJBQUssRUFBQztBQUFQLGVBQVo7QUFBQSw4QkFDRTJCLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxhQUFmLEVBQThCLE9BQTlCLENBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJBLGVBWUEsOERBQUMsNkRBQUQ7QUFDQSxtQkFBSyxFQUFFO0FBQ0gsbUNBQW1CLFNBRGhCO0FBRUgsbUNBQWtCLGlEQUZmO0FBR0gsMEJBQVM7QUFITixlQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUE2REM7QUFBSyxpQkFBUyxFQUFFRSxPQUFPLENBQUNWLFdBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFVSxPQUFPLENBQUNSLFdBQXhCO0FBQUEsa0NBQ0M7QUFBTSxxQkFBUyxFQUFFUSxPQUFPLENBQUNQLFlBQXpCO0FBQUEsc0JBQXdDSyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsYUFBZixFQUE4QixhQUE5QjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQU0scUJBQVMsRUFBRUUsT0FBTyxDQUFDTCxZQUF6QjtBQUFBLHNCQUF5Q0csV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLGFBQWYsRUFBOEIsYUFBOUIsRUFBNkMsYUFBN0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRSTtBQUFLLG1CQUFTLEVBQUVFLE9BQU8sQ0FBQ1IsV0FBeEI7QUFBQSxpQ0FHRTtBQUVFLGlCQUFLLEVBQUU7QUFBQyx1QkFBUSxPQUFUO0FBQWtCLHdCQUFTO0FBQTNCLGFBRlQ7QUFHRSxlQUFHLEVBQUVNLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxlQUFmLEVBQWdDSztBQUh2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3REQsZUFvRkM7QUFBSyxpQkFBUyxFQUFFSCxPQUFPLENBQUNWLFdBQXhCO0FBQUEsK0JBQ007QUFBSyxtQkFBUyxFQUFFVSxPQUFPLENBQUNSLFdBQXhCO0FBQUEsa0NBQ0U7QUFBSSxpQkFBSyxFQUFFO0FBQUNyQyx1QkFBUyxFQUFDLFFBQVg7QUFBcUJhLHNCQUFRLEVBQUMsS0FBOUI7QUFBcUNHLG1CQUFLLEVBQUM7QUFBM0MsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHMkIsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlUSxhQUFmLENBQTZCQyxHQUE3QixDQUFpQyxVQUFBQyxHQUFHLEVBQUU7QUFDckMsZ0NBQU87QUFBTSx1QkFBUyxFQUFFUixPQUFPLENBQUNKLFNBQXpCO0FBQUEseUJBQXFDWSxHQUFHLENBQUNaLFNBQXpDLFNBQXVEWSxHQUFHLENBQUNDLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELFdBRkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEZELGVBK0ZLO0FBQUssYUFBSyxFQUFFO0FBQUM3QyxpQkFBTyxFQUFDO0FBQVQsU0FBWjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRW9DLE9BQU8sQ0FBQ0osU0FBekI7QUFBQSwrQ0FBMkRFLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZVksaUJBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUNxRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURyRyxlQUVFO0FBQU0sbUJBQVMsRUFBRVYsT0FBTyxDQUFDSixTQUF6QjtBQUFBLHdDQUFvREUsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlYSxXQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFFd0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGeEYsZUFHRTtBQUFNLG1CQUFTLEVBQUVYLE9BQU8sQ0FBQ0osU0FBekI7QUFBQSxrREFBOERFLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZWMsb0JBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUcyRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUgzRyxlQUlFO0FBQU0sbUJBQVMsRUFBRVosT0FBTyxDQUFDSixTQUF6QjtBQUFBLDJDQUF1REUsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlZSxPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFJdUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0ZMLGVBcUdLO0FBQUEsK0JBQ0EsOERBQUMsMENBQUQ7QUFBTSxrQkFBUSxFQUFFZCxRQUFRLENBQUMsQ0FBRDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBLGtCQURGO0FBaUhILENBcEhEOztHQUFNRixRO1VBQ2MvQyxTOzs7S0FEZCtDLFE7QUFxSE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9Jcm9ud29vZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIlxuaW1wb3J0IEZhcXMgZnJvbSAnLi9GYXFzJ1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgd2lkdGg6IFwiMTAwdndcIixcblxuICAgIFxuICAgICAgaGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgY3Vyc29yOiBcImNvbnRleHQtbWVudVwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjIxZW1cIixcbiAgICAgIFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyZjQzNTNcIixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmY0MzUzIDAlLCAjZDJjY2M0IDc0JSlcIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgXCIwIC0xcHggNHB4IDAgcmdiYSgyNSwzMiwzNiwwLjA0KSwgMCAzcHggNnB4IDAgcmdiYSgyNSwzMiwzNiwwLjE2KVwiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzU2NDM0NVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBidWxsZXQ6IHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMCAycHhcIixcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjgpXCJcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogXCI0MHB4XCIsXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYVwiLFxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICBjb2xvcjogXCIjMTkyMDI0XCIsXG4gICAgICBkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsXG4gICAgICBtYXJnaW5MZWZ0OlwiXCJcbiAgICB9LFxuICAgIHBvczoge1xuICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIlxuICAgIH0sXG4gICAgZmxleGJveDoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgbWFyZ2luOiBcIi0xMHB4IDAgMCAtMTBweFwiXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLCBcbiAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiXG4gICAgfSxcbiAgICBtYWluOiB7XG4gICAgICBoZWlnaHQ6XCJmaXQtY29udGVudFwiXG4gICAgIFxuICAgICAgXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBtYXJnaW5SaWdodDpcIjRlbVwiLFxuICAgICAgICBtYXJnaW5Ub3A6XCIxLjVlbVwiLFxuICAgICAgICBcbiAgICB9LFxuICAgIGltZ2NvbnQ6e1xuICAgICAgbWFyZ2luTGVmdDpcIjAlXCIsXG4gICAgICBtYXJnaW5SaWdodDpcIjEwZW1cIixcbiAgICAgIGJveFNoYWRvdzpcbiAgICAgIFwiMCAtMXB4IDRweCAwIHJnYmEoMjUsMzIsMzYsMC4wNCksIDAgM3B4IDZweCAwIHJnYmEoMjUsMzYsMzYsMC4xNilcIlxuICAgIH0sXG4gICAgaW1nSXRlbToge1xuICAgICAgLyogbWFyZ2luTGVmdDogXCIyZW1cIiAqL1xuICAgICAgd2lkdGg6XCIxZW1cIixcbiAgICAgIGhlaWdodDpcIjFlbVwiXG4gICAgfSxcbiAgICBkZXNjOntcbiAgIFxuXG5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCJhenVyZVwiLFxuICAgIGFsaWduSXRlbXM6XCJsZWZ0XCIsXG4gICAgYm9yZGVyOlwiNXB4IHNvbGlkIHJlZFwiXG4gICAgfSxcbiAgICBzcGE6e1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIGhlaWdodDpcImZpdC1jb250ZW50XCIsXG4gICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgdGV4dEFsaWduOlwicmlnaHRcIixcbiAgICAgIGZvbnRTaXplOiBcIjAuNWVtXCIsXG4gICAgICBtYXJnaW5SaWdodDonMTAwcHgnLFxuICAgICAgXG4gICAgXG4gICAgfSxcbiAgICBzcDp7XG4gICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgbWFyZ2luUmlnaHQ6XCIzZW1cIixcblxuICAgICAgbWFyZ2luVG9wOlwiMWVtXCIsXG4gICAgICBmb250U2l6ZTpcIjAuNWVtXCIsXG4gICAgICB3aWR0aDpcImZpdC1jb250ZW50XCJcbiAgICAgIFxuXG4gICAgfSxcbiAgICBzOntcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW5SaWdodDpcIjEwZW1cIixcbiAgICAgIHdpZHRoOlwiZml0LWNvbnRlbnRcIlxuICAgICAgXG4gICAgfSxcbiAgICBmbGV4Ym94Q29udDp7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gIC8qICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47ICovXG4gICAgICBoZWlnaHQ6ICczNTBweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgICBqdXN0aWZ5Q29udGVudDonc3BhY2UtZXZlbmx5JyxcbiAgICB9LFxuICAgIGZsZXhib3hJdGVtOntcbiAgICBcbiAgICAgIG1hcmdpbjonMTBweCcsXG4gICAgICBoZWlnaHQ6XCJmaXQtY29udGVudFwiLFxuICAgICBcbiAgICBcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgXG4gICAgICBtYXJnaW5Cb3R0b206XCIyZW1cIixcbiAgICAgIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknXG4gIH0sXG4gIGZsZXhib3hJdGVtMTp7XG4gICAgICBcbiAgICAgIGZvbnRTaXplOlwiMC43ZW1cIixcbiAgICAgIC8qIHRoaXMgdGVsbHMgdGhlIGJveCBub3QgdG8gc2hyaW5rIGV2ZW4gd2hlbiB0aGUgYnJvd3NlciBpcyBtYWRlIHNtYWxsICovXG4gICAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgICB0ZXh0QWxpZ246XCJsZWZ0XCIsXG4gXG4gICAgXG4gIH0sXG4gIGZsZXhib3hJdGVtMjp7XG4gICAgZm9udFNpemU6IFwiMC41ZW1cIlxuICB9LFxuICBmb29kVGl0bGU6IHtcbiAgICBqdXN0aWZ5Q29udGVudDonc3BhY2UtZXZlbmx5JyxcbiAgICBtYXJnaW5MZWZ0OicxZW0nLFxuICAgIGZvbnRTaXplOlwiMC42ZW1cIlxuICB9XG4gLyogIGZsZXhib3hJdGVtMzp7XG4gICAgZm9udFNpemU6IFwiMC41ZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiXCIsXG4gICAgaGVpZ2h0OlwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW5MZWZ0OlwiNGVtXCJcbiAgfSAqL1xuICAgICAgIFxuICB9KTtcblxuY29uc3QgSXJvbndvb2Q9KHtuZXdwcm9kdWN0cyxwcm9kdWN0c30pPT57XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnNvbGUubG9nKG5ld3Byb2R1Y3RzKVxuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PkdyaWxsczwvaDE+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgXG4gICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICAgICAge25ld3Byb2R1Y3RzJiZcbiAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1wid2lkdGhcIjpcIjI1MHB4XCIsIFwiaGVpZ2h0XCI6XCIyMzBweFwifX1cbiAgICAgICAgICAgICAgICAgc3JjPXtuZXdwcm9kdWN0c1swXVsnaW1hZ2VzJ11bMV0udXJsfS8+XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtuZXdwcm9kdWN0c1swXVsnX21ldGEnXS5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PlxuICAgICAgICAgICAgICAgICR7bmV3cHJvZHVjdHNbMF1bJ3Byb2R1Y3REYXRhJ11bXCJwcmljZVwiXX0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzdjZmZjYlwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRJbWFnZVwiOlwibGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdjZmZjYiAwJSwgIzc0ZjJjZSA3NCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjpcIjNlbVwiLCBcblxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFERCBUTyBDQVJUXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+IFxuICAgICAgIFxuICAgICAgICBcblxuICAgIFxuICAgICAgICAgIFxuICAgICAgXG4gICAgICAgey8qICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4Ym94SXRlbX0+XG4gICAgICAgIDxpbWcgXG4gICAgICAgIHN0eWxlPXt7XCJ3aWR0aFwiOlwiMjUwcHhcIiwgXCJoZWlnaHRcIjpcIjIzMHB4XCJ9fVxuICAgICAgICBzcmM9e25ld3Byb2R1Y3RzWzBdWydpbWFnZXMnXVswXS51cmx9Lz5cbiAgICAgICAgPGltZyBcbiAgICAgICAgXG4gICAgICAgIHN0eWxlPXt7XCJ3aWR0aFwiOlwiMjUwcHhcIiwgXCJoZWlnaHRcIjpcIjIzMHB4XCJ9fVxuICAgICAgICBzcmM9e25ld3Byb2R1Y3RzWzBdWydpbWFnZXMnXVsyXS51cmx9Lz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleGJveENvbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhib3hJdGVtfT5cbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhib3hJdGVtMX0+e25ld3Byb2R1Y3RzWzBdWydwcm9kdWN0RGF0YSddW1wiZ3JpbGxTZXJpZXNcIl19PC9zcGFuPlxuICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhib3hJdGVtMn0gPntuZXdwcm9kdWN0c1sxXVsndG91dENvbnRlbnQnXVsndG91dENvbnRlbnQnXVsnZGVzY3JpcHRpb24nXX08L3NwYW4+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhib3hJdGVtMX0+RmxleGJveCAxPC9kaXY+PC9kaXY+ICovfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleGJveEl0ZW19PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdHlsZT17e1wid2lkdGhcIjpcIjI3MHB4XCIsIFwiaGVpZ2h0XCI6XCIyNzBweFwifX1cbiAgICAgICAgICAgICAgICBzcmM9e25ld3Byb2R1Y3RzWzFdWydleHRlcmlvckltYWdlJ10udXJsfS8+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4Ym94Q29udH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhib3hJdGVtfT5cbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgZm9udFNpemU6XCIxZW1cIiwgY29sb3I6XCIjZmY4YzAwXCJ9fT5DYXBhY2l0eTwvaDM+XG4gICAgICAgICAgICAgICAge25ld3Byb2R1Y3RzWzFdLmdyaWxsQ2FwYWNpdHkubWFwKGNhcD0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb29kVGl0bGV9PntjYXAuZm9vZFRpdGxlfSAtIHtjYXAuYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9KX0gXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb29kVGl0bGV9PlRvdGFsIENvb2tpbmcgU3BhY2UgOiB7bmV3cHJvZHVjdHNbMV0udG90YWxDb29raW5nU3BhY2V9PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vZFRpdGxlfT5Ub3RhbCB3ZWlnaHQgOiB7bmV3cHJvZHVjdHNbMV0udG90YWxXZWlnaHR9PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vZFRpdGxlfT5QZWxsZXQgaG9wcGVyIGNhcGFjaXR5IDoge25ld3Byb2R1Y3RzWzFdLnBlbGxldEhvcHBlckNhcGFjaXR5fTwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmZvb2RUaXRsZX0+TWF4IHRlbXBlcmF0dXJlIDoge25ld3Byb2R1Y3RzWzFdLm1heFRlbXB9PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZhcXMgcHJvZHVjdHM9e3Byb2R1Y3RzWzRdfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICA8Lz5cbiAgIFxuICAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgSXJvbndvb2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Ironwood.jsx\n");

/***/ })

});