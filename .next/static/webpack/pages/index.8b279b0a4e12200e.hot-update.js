"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/PizzaCard.jsx":
/*!*********************************!*\
  !*** ./component/PizzaCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/PizzaCard.module.css */ \"./styles/PizzaCard.module.css\");\n/* harmony import */ var _styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar PizzaCard = function(param) {\n    var pizza = param.pizza;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: pizza.img,\n                alt: \"\",\n                width: \"500\",\n                height: \"500\"\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/component/PizzaCard.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: pizza.title\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/component/PizzaCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                children: \"pizza.prices[0]\"\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/component/PizzaCard.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_PizzaCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                children: pizza.desc\n            }, void 0, false, {\n                fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/component/PizzaCard.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yaozonghui/Desktop/React/pizza-order/component/PizzaCard.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = PizzaCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PizzaCard);\nvar _c;\n$RefreshReg$(_c, \"PizzaCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvUGl6emFDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNxQjtBQUNwRCxJQUFNRyxTQUFTLEdBQUcsZ0JBQWE7UUFBWEMsS0FBSyxTQUFMQSxLQUFLO0lBQ3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUosK0VBQWdCOzswQkFDOUIsOERBQUNELG1EQUFLO2dCQUFDTyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ssR0FBRztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Z0JBQUNDLEtBQUssRUFBQyxLQUFLO2dCQUFDQyxNQUFNLEVBQUMsS0FBSzs7Ozs7cUJBQUc7MEJBQ3pELDhEQUFDQyxJQUFFO2dCQUFDUCxTQUFTLEVBQUVKLDJFQUFZOzBCQUFHRSxLQUFLLENBQUNVLEtBQUs7Ozs7O3FCQUFNOzBCQUMvQyw4REFBQ0MsTUFBSTtnQkFBQ1QsU0FBUyxFQUFFSiwyRUFBWTswQkFBSSxpQkFBZTs7Ozs7cUJBQVM7MEJBQ3pELDhEQUFDZSxHQUFDO2dCQUFDWCxTQUFTLEVBQUVKLDBFQUFXOzBCQUN2QkUsS0FBSyxDQUFDYyxJQUFJOzs7OztxQkFDUjs7Ozs7O2FBQ0EsQ0FDTjtDQUNIO0FBWEtmLEtBQUFBLFNBQVM7QUFhZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9QaXp6YUNhcmQuanN4P2VmMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUGl6emFDYXJkLm1vZHVsZS5jc3NcIjtcbmNvbnN0IFBpenphQ2FyZCA9ICh7cGl6emF9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEltYWdlIHNyYz17cGl6emEuaW1nfSBhbHQ9XCJcIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjUwMFwiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntwaXp6YS50aXRsZX08L2gxPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PntgcGl6emEucHJpY2VzWzBdYH08L3NwYW4+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICB7cGl6emEuZGVzY31cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpenphQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwiUGl6emFDYXJkIiwicGl6emEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzcmMiLCJpbWciLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwidGl0bGUiLCJzcGFuIiwicHJpY2UiLCJwIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/PizzaCard.jsx\n");

/***/ })

});