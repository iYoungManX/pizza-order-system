"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].jsx":
/*!********************************!*\
  !*** ./pages/product/[id].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), size = ref[0], setSize = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pizza.prices[0]), price = ref1[0], setprice = ref1[1];\n    var changePrice = number;\n    var handleSize = function(sizeIndex) {};\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            pizza.prices[size]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: option.text,\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"KXZSv6nkGNu8wZ3zdblQKjhu25A=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUMyQjtBQUN0QjtBQUVFOztBQUNqQyxJQUFNSSxPQUFPLEdBQUcsZ0JBQWU7UUFBWkMsS0FBSyxTQUFMQSxLQUFLOzs7SUFDdEIsSUFBd0JGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFOckMsSUFNYSxHQUFhQSxHQUFXLEdBQXhCLEVBTmIsT0FNc0IsR0FBSUEsR0FBVyxHQUFmO0lBQ3BCLElBQTBCQSxJQUF5QixHQUF6QkEsK0NBQVEsQ0FBQ0UsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFQckQsS0FPYyxHQUFjTCxJQUF5QixHQUF2QyxFQVBkLFFBT3dCLEdBQUlBLElBQXlCLEdBQTdCO0lBRXRCLElBQU1RLFdBQVcsR0FBR0MsTUFBTTtJQUMxQixJQUFNQyxVQUFVLEdBQUMsU0FBQ0MsU0FBUyxFQUFHLEVBRTdCO0lBRUQsSUFBTUMsWUFBWSxHQUFDLFNBQUNDLENBQUMsRUFBRUMsTUFBTSxFQUFHO1FBQzVCLElBQU1DLE9BQU8sR0FBRUYsQ0FBQyxDQUFDRyxNQUFNLENBQUNELE9BQU87UUFDL0IsSUFBR0EsT0FBTyxFQUFDLEVBRVY7S0FDSjtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBRXBCLDZFQUFnQjs7MEJBQzlCLDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIsd0VBQVc7MEJBQ3pCLDRFQUFDbUIsS0FBRztvQkFBQ0MsU0FBUyxFQUFFcEIsZ0ZBQW1COzhCQUNqQyw0RUFBQ0MsbURBQUs7d0JBQUN1QixHQUFHLEVBQUVwQixLQUFLLENBQUNxQixHQUFHO3dCQUFFQyxTQUFTLEVBQUMsU0FBUzt3QkFBQ0MsTUFBTSxFQUFDLE1BQU07d0JBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2QkFBRzs7Ozs7eUJBQzlEOzs7OztxQkFDRjswQkFDTiw4REFBQ1QsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIseUVBQVk7O2tDQUMxQiw4REFBQzhCLElBQUU7d0JBQUNWLFNBQVMsRUFBRXBCLHlFQUFZO2tDQUFHSSxLQUFLLENBQUMyQixLQUFLOzs7Ozs2QkFBTTtrQ0FDL0MsOERBQUNDLE1BQUk7d0JBQUNaLFNBQVMsRUFBRXBCLHlFQUFZOzs0QkFBRSxHQUFDOzRCQUFDSSxLQUFLLENBQUNHLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDOzs7Ozs7NkJBQVE7a0NBQzNELDhEQUFDNEIsR0FBQzt3QkFBQ2IsU0FBUyxFQUFFcEIsd0VBQVc7a0NBQUdJLEtBQUssQ0FBQzhCLElBQUk7Ozs7OzZCQUFLO2tDQUMzQyw4REFBQ0MsSUFBRTt3QkFBQ2YsU0FBUyxFQUFFcEIsMEVBQWE7a0NBQUUsaUJBQWU7Ozs7OzZCQUFLO2tDQUNsRCw4REFBQ21CLEtBQUc7d0JBQUNDLFNBQVMsRUFBRXBCLHlFQUFZOzswQ0FDMUIsOERBQUNtQixLQUFHO2dDQUFDQyxTQUFTLEVBQUVwQix3RUFBVztnQ0FBRXNDLE9BQU8sRUFBRTsyQ0FBTTFCLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUNBQUE7O2tEQUN2RCw4REFBQ1gsbURBQUs7d0NBQUN1QixHQUFHLEVBQUMsZUFBZTt3Q0FBQ0csTUFBTSxFQUFDLE1BQU07d0NBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2Q0FBRztrREFDbEQsOERBQUNJLE1BQUk7d0NBQUNaLFNBQVMsRUFBRXBCLDBFQUFhO2tEQUFFLE9BQUs7Ozs7OzZDQUFPOzs7Ozs7cUNBQ3hDOzBDQUVOLDhEQUFDbUIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFcEIsd0VBQVc7Z0NBQUVzQyxPQUFPLEVBQUU7MkNBQU0xQixVQUFVLENBQUMsQ0FBQyxDQUFDO2lDQUFBOztrREFDdkQsOERBQUNYLG1EQUFLO3dDQUFDdUIsR0FBRyxFQUFDLGVBQWU7d0NBQUNHLE1BQU0sRUFBQyxNQUFNO3dDQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7NkNBQUc7a0RBQ2xELDhEQUFDSSxNQUFJO3dDQUFDWixTQUFTLEVBQUVwQiwwRUFBYTtrREFBRSxRQUFNOzs7Ozs2Q0FBTzs7Ozs7O3FDQUN6QzswQ0FFTiw4REFBQ21CLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRXBCLHdFQUFXO2dDQUFFc0MsT0FBTyxFQUFFOzJDQUFNMUIsVUFBVSxDQUFDLENBQUMsQ0FBQztpQ0FBQTs7a0RBQ3ZELDhEQUFDWCxtREFBSzt3Q0FBQ3VCLEdBQUcsRUFBQyxlQUFlO3dDQUFDRyxNQUFNLEVBQUMsTUFBTTt3Q0FBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7OzZDQUFHO2tEQUNsRCw4REFBQ0ksTUFBSTt3Q0FBQ1osU0FBUyxFQUFFcEIsMEVBQWE7a0RBQUUsT0FBSzs7Ozs7NkNBQU87Ozs7OztxQ0FDeEM7Ozs7Ozs2QkFDRjtrQ0FFTiw4REFBQ21DLElBQUU7d0JBQUNmLFNBQVMsRUFBRXBCLDBFQUFhO2tDQUFFLCtCQUE2Qjs7Ozs7NkJBQUs7a0NBQ2hFLDhEQUFDbUIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFcEIsK0VBQWtCO2tDQUMvQkksS0FBSyxDQUFDb0MsWUFBWSxDQUFDQyxHQUFHLENBQUMsU0FBQ3pCLE1BQU07aURBQzNCLDhEQUFDRyxLQUFHO2dDQUFDQyxTQUFTLEVBQUVwQiwwRUFBYTs7a0RBQzdCLDhEQUFDMEMsT0FBSzt3Q0FDSkMsSUFBSSxFQUFDLFVBQVU7d0NBQ2ZDLEVBQUUsRUFBRTVCLE1BQU0sQ0FBQzZCLElBQUk7d0NBQ2ZDLElBQUksRUFBRTlCLE1BQU0sQ0FBQzZCLElBQUk7d0NBQ2pCekIsU0FBUyxFQUFFcEIsNEVBQWU7d0NBQzFCZ0QsUUFBUSxFQUFFakMsU0FBQUEsQ0FBQzttREFBRUQsWUFBWSxDQUFDQyxDQUFDLEVBQUNDLE1BQU0sQ0FBQzt5Q0FBQTs7Ozs7OENBQ25DO2tEQUNGLDhEQUFDaUMsT0FBSzt3Q0FBQ0MsT0FBTyxFQUFFbEMsTUFBTSxDQUFDNkIsSUFBSTtrREFBRzdCLE1BQU0sQ0FBQzZCLElBQUk7Ozs7OzhDQUFTOzsrQkFSZDdCLE1BQU0sQ0FBQ21DLEdBQUc7Ozs7c0NBU3hDO3lCQUNULENBQUM7Ozs7OzZCQUVFO2tDQUNOLDhEQUFDaEMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFcEIsdUVBQVU7OzBDQUN4Qiw4REFBQzBDLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxRQUFRO2dDQUFDVSxZQUFZLEVBQUUsQ0FBQztnQ0FBRWpDLFNBQVMsRUFBRXBCLDRFQUFlOzs7OztxQ0FBSTswQ0FDcEUsOERBQUN1RCxRQUFNO2dDQUFDbkMsU0FBUyxFQUFFcEIsMEVBQWE7MENBQUUsYUFBVzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDbEQ7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBcEVLRyxPQUFPO0FBQVBBLEtBQUFBLE9BQU87O0FBaUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzeD80YTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByb2R1Y3QgPSAoeyBwaXp6YSB9KSA9PiB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJpY2UsIHNldHByaWNlXSA9IHVzZVN0YXRlKHBpenphLnByaWNlc1swXSk7XG5cbiAgY29uc3QgY2hhbmdlUHJpY2UgPShudW1iZXIpXG4gIGNvbnN0IGhhbmRsZVNpemU9KHNpemVJbmRleCk9PntcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlPShlLCBvcHRpb24pPT57XG4gICAgICBjb25zdCBjaGVja2VkID1lLnRhcmdldC5jaGVja2VkO1xuICAgICAgaWYoY2hlY2tlZCl7XG5cbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3BpenphLmltZ30gb2JqZWN0Rml0PVwiY29udGFpblwiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3BpenphLnRpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ke3BpenphLnByaWNlc1tzaXplXX08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PntwaXp6YS5kZXNjfTwvcD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIHRoZSBzaXplPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDApfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PlNtYWxsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDEpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9Pk1lZGl1bTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2l6ZSgyKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5MYXJnZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIGFkZGl0aW9uYWwgaW5ncmVkaWVudHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRzfT5cbiAgICAgICAgICB7cGl6emEuZXh0cmFPcHRpb25zLm1hcCgob3B0aW9uKT0+KFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0ga2V5PXtvcHRpb24uX2lkfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBpZD17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgbmFtZT17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PmhhbmRsZUNoYW5nZShlLG9wdGlvbil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtvcHRpb24udGV4dH0+e29wdGlvbi50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBkZWZhdWx0VmFsdWU9ezF9IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cy8ke3BhcmFtcy5pZH1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBpenphOiByZXMuZGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwidXNlU3RhdGUiLCJQcm9kdWN0IiwicGl6emEiLCJzaXplIiwic2V0U2l6ZSIsInByaWNlcyIsInByaWNlIiwic2V0cHJpY2UiLCJjaGFuZ2VQcmljZSIsIm51bWJlciIsImhhbmRsZVNpemUiLCJzaXplSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwib3B0aW9uIiwiY2hlY2tlZCIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxlZnQiLCJpbWdDb250YWluZXIiLCJzcmMiLCJpbWciLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJyaWdodCIsImgxIiwidGl0bGUiLCJzcGFuIiwicCIsImRlc2MiLCJoMyIsImNob29zZSIsInNpemVzIiwib25DbGljayIsImluZ3JlZGllbnRzIiwiZXh0cmFPcHRpb25zIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwibmFtZSIsImNoZWNrYm94Iiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJfaWQiLCJhZGQiLCJkZWZhdWx0VmFsdWUiLCJxdWFudGl0eSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].jsx\n");

/***/ })

});