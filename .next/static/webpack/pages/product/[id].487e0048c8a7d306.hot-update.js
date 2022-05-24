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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), size = ref[0], setSize = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pizza.prices[0]), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), extras1 = ref2[0], setExtras = ref2[1];\n    var changePrice = function(number) {\n        setPrice(price + number);\n    };\n    var handleSize = function(sizeIndex) {\n        var difference = pizza.prices[sizeIndex] - pizza.prices[size];\n        setSize(sizeIndex);\n        changePrice(difference);\n    };\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {\n            changePrice(option.price);\n            setExtras(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    option\n                ]);\n            });\n        } else {\n            changePrice(-option.price);\n            setExtras(extras1.filter(function(extras) {\n                return extras._id !== option._id;\n            }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: option.text,\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"pO9x8/iaGuNHu+KZ9dX8suCwSpY=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPO0FBQVBBLEtBQUFBLE9BQU87O0FBNkZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzeD80YTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByb2R1Y3QgPSAoeyBwaXp6YSB9KSA9PiB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKHBpenphLnByaWNlc1swXSk7XG4gIGNvbnN0IFtleHRyYXMsIHNldEV4dHJhc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgY2hhbmdlUHJpY2UgPSAobnVtYmVyKSA9PiB7XG4gICAgc2V0UHJpY2UocHJpY2UgKyBudW1iZXIpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTaXplID0gKHNpemVJbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwaXp6YS5wcmljZXNbc2l6ZUluZGV4XSAtIHBpenphLnByaWNlc1tzaXplXTtcbiAgICBzZXRTaXplKHNpemVJbmRleCk7XG4gICAgY2hhbmdlUHJpY2UoZGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBjaGFuZ2VQcmljZShvcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKHByZXY9PlsuLi5wcmV2LCBvcHRpb25dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlUHJpY2UoLW9wdGlvbi5wcmljZSk7XG4gICAgICBzZXRFeHRyYXMoZXh0cmFzLmZpbHRlcigoZXh0cmFzKT0+ZXh0cmFzLl9pZCAhPT0gb3B0aW9uLl9pZCkpO1xuICAgIH1cbiAgfTtcblxuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaXp6YS5pbWd9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntwaXp6YS50aXRsZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JHtwcmljZX08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PntwaXp6YS5kZXNjfTwvcD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIHRoZSBzaXplPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDApfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PlNtYWxsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDEpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9Pk1lZGl1bTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2l6ZSgyKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5MYXJnZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIGFkZGl0aW9uYWwgaW5ncmVkaWVudHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRzfT5cbiAgICAgICAgICB7cGl6emEuZXh0cmFPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0ga2V5PXtvcHRpb24uX2lkfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBpZD17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgbmFtZT17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgb3B0aW9uKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e29wdGlvbi50ZXh0fT57b3B0aW9uLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZGVmYXVsdFZhbHVlPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMvJHtwYXJhbXMuaWR9YFxuICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwaXp6YTogcmVzLmRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsInVzZVN0YXRlIiwiUHJvZHVjdCIsInBpenphIiwic2l6ZSIsInNldFNpemUiLCJwcmljZXMiLCJwcmljZSIsInNldFByaWNlIiwiZXh0cmFzIiwic2V0RXh0cmFzIiwiY2hhbmdlUHJpY2UiLCJudW1iZXIiLCJoYW5kbGVTaXplIiwic2l6ZUluZGV4IiwiZGlmZmVyZW5jZSIsImhhbmRsZUNoYW5nZSIsImUiLCJvcHRpb24iLCJjaGVja2VkIiwidGFyZ2V0IiwicHJldiIsImZpbHRlciIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxlZnQiLCJpbWdDb250YWluZXIiLCJzcmMiLCJpbWciLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJyaWdodCIsImgxIiwidGl0bGUiLCJzcGFuIiwicCIsImRlc2MiLCJoMyIsImNob29zZSIsInNpemVzIiwib25DbGljayIsImluZ3JlZGllbnRzIiwiZXh0cmFPcHRpb25zIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwibmFtZSIsImNoZWNrYm94Iiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJhZGQiLCJkZWZhdWx0VmFsdWUiLCJxdWFudGl0eSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].jsx\n");

/***/ })

});