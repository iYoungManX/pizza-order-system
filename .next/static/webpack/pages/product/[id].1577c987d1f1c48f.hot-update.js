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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), size = ref[0], setSize = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pizza.prices[0]), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), extras = ref2[0], setExtras = ref2[1];\n    var changePrice = function(number) {\n        setPrice(price + number);\n    };\n    var handleSize = function(sizeIndex) {\n        var difference = pizza.prices[sizeIndex] - pizza.prices[size];\n        setSize(sizeIndex);\n        changePrice(difference);\n    };\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {\n            changePrice(option.price);\n            setExtras(_toConsumableArray(prev).concat([\n                option\n            ]));\n        } else {\n            changePrice(-option.price);\n            setExtras(extras.filter(extras._id !== option._id));\n        }\n    };\n    console.log();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: option.text,\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/pages/product/[id].jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"pO9x8/iaGuNHu+KZ9dX8suCwSpY=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qc3g/NGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBQcm9kdWN0ID0gKHsgcGl6emEgfSkgPT4ge1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShwaXp6YS5wcmljZXNbMF0pO1xuICBjb25zdCBbZXh0cmFzLCBzZXRFeHRyYXNdPXVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGNoYW5nZVByaWNlID0obnVtYmVyKT0+e1xuICAgIHNldFByaWNlKHByaWNlK251bWJlcilcbiAgfVxuICBjb25zdCBoYW5kbGVTaXplPShzaXplSW5kZXgpPT57XG4gICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwaXp6YS5wcmljZXNbc2l6ZUluZGV4XS1waXp6YS5wcmljZXNbc2l6ZV1cbiAgICAgc2V0U2l6ZShzaXplSW5kZXgpO1xuICAgICBjaGFuZ2VQcmljZShkaWZmZXJlbmNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlPShlLCBvcHRpb24pPT57XG4gICAgICBjb25zdCBjaGVja2VkID1lLnRhcmdldC5jaGVja2VkO1xuICAgICAgaWYoY2hlY2tlZCl7XG4gICAgICAgICAgY2hhbmdlUHJpY2Uob3B0aW9uLnByaWNlKVxuICAgICAgICAgIHNldEV4dHJhcyhbLi4ucHJldixvcHRpb25dKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGNoYW5nZVByaWNlKC1vcHRpb24ucHJpY2UpXG4gICAgICAgIHNldEV4dHJhcyhleHRyYXMuZmlsdGVyKGV4dHJhcy5faWQhPT0gb3B0aW9uLl9pZCkpXG4gICAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgPEltYWdlIHNyYz17cGl6emEuaW1nfSBvYmplY3RGaXQ9XCJjb250YWluXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cGl6emEudGl0bGV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PiR7cHJpY2V9PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT57cGl6emEuZGVzY308L3A+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2V9PkNob29zZSB0aGUgc2l6ZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZXN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2l6ZSgwKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5TbWFsbDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2l6ZSgxKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5NZWRpdW08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpemUoMil9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+TGFyZ2U8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jaG9vc2V9PkNob29zZSBhZGRpdGlvbmFsIGluZ3JlZGllbnRzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50c30+XG4gICAgICAgICAge3BpenphLmV4dHJhT3B0aW9ucy5tYXAoKG9wdGlvbik9PihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259IGtleT17b3B0aW9uLl9pZH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgaWQ9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIG5hbWU9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5oYW5kbGVDaGFuZ2UoZSxvcHRpb24pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17b3B0aW9uLnRleHR9PntvcHRpb24udGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgZGVmYXVsdFZhbHVlPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMvJHtwYXJhbXMuaWR9YFxuICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwaXp6YTogcmVzLmRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsInVzZVN0YXRlIiwiUHJvZHVjdCIsInBpenphIiwic2l6ZSIsInNldFNpemUiLCJwcmljZXMiLCJwcmljZSIsInNldFByaWNlIiwiZXh0cmFzIiwic2V0RXh0cmFzIiwiY2hhbmdlUHJpY2UiLCJudW1iZXIiLCJoYW5kbGVTaXplIiwic2l6ZUluZGV4IiwiZGlmZmVyZW5jZSIsImhhbmRsZUNoYW5nZSIsImUiLCJvcHRpb24iLCJjaGVja2VkIiwidGFyZ2V0IiwicHJldiIsImZpbHRlciIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJsZWZ0IiwiaW1nQ29udGFpbmVyIiwic3JjIiwiaW1nIiwib2JqZWN0Rml0IiwibGF5b3V0IiwiYWx0IiwicmlnaHQiLCJoMSIsInRpdGxlIiwic3BhbiIsInAiLCJkZXNjIiwiaDMiLCJjaG9vc2UiLCJzaXplcyIsIm9uQ2xpY2siLCJpbmdyZWRpZW50cyIsImV4dHJhT3B0aW9ucyIsIm1hcCIsImlucHV0IiwidHlwZSIsImlkIiwidGV4dCIsIm5hbWUiLCJjaGVja2JveCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYWRkIiwiZGVmYXVsdFZhbHVlIiwicXVhbnRpdHkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].jsx\n");

/***/ })

});