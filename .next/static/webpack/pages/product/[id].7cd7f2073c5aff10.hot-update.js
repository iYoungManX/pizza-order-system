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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), size = ref[0], setSize = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.name\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            pizza.prices[size]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return setSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return setSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return setSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"double\",\n                                        name: \"double\",\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"double\",\n                                        children: \"Double Ingredients\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"cheese\",\n                                        name: \"cheese\",\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"cheese\",\n                                        children: \"Extra Cheese\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"spicy\",\n                                        name: \"spicy\",\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"spicy\",\n                                        children: \"Spicy Sauce\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: \"garlic\",\n                                        name: \"garlic\",\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"garlic\",\n                                        children: \"Garlic Sauce\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsUUFBUTt3Q0FDWGYsSUFBSSxFQUFDLFFBQVE7d0NBQ2JaLFNBQVMsRUFBRVIsNEVBQWU7Ozs7OzZDQUMxQjtrREFDRiw4REFBQ3FDLE9BQUs7d0NBQUNDLE9BQU8sRUFBQyxRQUFRO2tEQUFDLGNBQVk7Ozs7OzZDQUFROzs7Ozs7cUNBQ3hDOzs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUMvQixLQUFHO3dCQUFDQyxTQUFTLEVBQUVSLHVFQUFVOzswQ0FDeEIsOERBQUNpQyxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTtnQ0FBQ00sWUFBWSxFQUFFLENBQUM7Z0NBQUVoQyxTQUFTLEVBQUVSLDRFQUFlOzs7OztxQ0FBRzswQ0FDbkUsOERBQUMwQyxRQUFNO2dDQUFDbEMsU0FBUyxFQUFFUiwwRUFBYTswQ0FBRSxhQUFXOzs7OztxQ0FBUzs7Ozs7OzZCQUNsRDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FsRktHLE9BQU87QUFBUEEsS0FBQUEsT0FBTzs7QUFnR2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanN4PzRhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2R1Y3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJvZHVjdCA9ICh7cGl6emF9KSA9PiB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgPEltYWdlIHNyYz17cGl6emEuaW1nfSBvYmplY3RGaXQ9XCJjb250YWluXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cGl6emEubmFtZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JHtwaXp6YS5wcmljZXNbc2l6ZV19PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57cGl6emEuZGVzY308L3A+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2V9PkNob29zZSB0aGUgc2l6ZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZXN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gc2V0U2l6ZSgwKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5TbWFsbDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gc2V0U2l6ZSgxKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5NZWRpdW08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IHNldFNpemUoMil9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+TGFyZ2U8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2V9PkNob29zZSBhZGRpdGlvbmFsIGluZ3JlZGllbnRzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50c30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiZG91YmxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRvdWJsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG91YmxlXCI+RG91YmxlIEluZ3JlZGllbnRzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImNoZWVzZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGVlc2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoZWVzZVwiPkV4dHJhIENoZWVzZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cInNwaWN5XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNwaWN5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzcGljeVwiPlNwaWN5IFNhdWNlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImdhcmxpY1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJnYXJsaWNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmxpY1wiPkdhcmxpYyBTYXVjZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBkZWZhdWx0VmFsdWU9ezF9IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwaXp6YTogcmVzLmRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJwaXp6YSIsInNpemUiLCJzZXRTaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibGVmdCIsImltZ0NvbnRhaW5lciIsInNyYyIsImltZyIsIm9iamVjdEZpdCIsImxheW91dCIsImFsdCIsInJpZ2h0IiwiaDEiLCJ0aXRsZSIsIm5hbWUiLCJzcGFuIiwicHJpY2UiLCJwcmljZXMiLCJwIiwiZGVzYyIsImgzIiwiY2hvb3NlIiwic2l6ZXMiLCJvbkNsaWNrIiwibnVtYmVyIiwiaW5ncmVkaWVudHMiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwibGFiZWwiLCJodG1sRm9yIiwiYWRkIiwiZGVmYXVsdFZhbHVlIiwicXVhbnRpdHkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].jsx\n");

/***/ })

});