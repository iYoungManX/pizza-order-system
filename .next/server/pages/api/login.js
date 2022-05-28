"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        if (username === process.env.USERNAME && password === process.env.PASSWORD) {\n            res.setHeader(\"set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Successful\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBRTNCLE1BQU1DLE9BQU8sR0FBRSxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsR0FBRztJQUN4QixJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDckIsTUFBTSxFQUFDQyxRQUFRLEdBQUNDLFFBQVEsR0FBQyxHQUFDSixHQUFHLENBQUNLLElBQUk7UUFDbEMsSUFBR0YsUUFBUSxLQUFHRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJSixRQUFRLEtBQUtFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxRQUFRLEVBQUM7WUFDdEVSLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDLFlBQVksRUFBRVosdURBQWdCLENBQUMsT0FBTyxFQUFDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssS0FBSyxFQUFDO2dCQUNyRUMsTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFO2dCQUNaQyxRQUFRLEVBQUMsUUFBUTtnQkFDakJDLElBQUksRUFBQyxHQUFHO2FBQ1QsQ0FBQyxDQUFDO1lBQ0hkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ25DLE1BQUk7WUFDSGhCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDM0M7S0FDRjtDQUNGO0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YS1vcmRlci8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiXG5cbmNvbnN0IGhhbmRsZXIgPShyZXEscmVzKT0+e1xuICBpZihyZXEubWV0aG9kPT09XCJQT1NUXCIpe1xuICAgIGNvbnN0IHt1c2VybmFtZSxwYXNzd29yZH09cmVxLmJvZHlcbiAgICBpZih1c2VybmFtZT09PXByb2Nlc3MuZW52LlVTRVJOQU1FICYmIHBhc3N3b3JkID09PSBwcm9jZXNzLmVudi5QQVNTV09SRCl7XG4gICAgICByZXMuc2V0SGVhZGVyKFwic2V0LUNvb2tpZVwiLCBjb29raWUuc2VyaWFsaXplKFwidG9rZW5cIixwcm9jZXNzLmVudi5UT0tFTix7XG4gICAgICAgIG1heEFnZTo2MCo2MCxcbiAgICAgICAgc2FtZVNpdGU6XCJzdHJpY3RcIixcbiAgICAgICAgcGF0aDpcIi9cIixcbiAgICAgIH0pKVxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJTdWNjZXNzZnVsXCIpXG4gICAgfWVsc2V7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihcIldyb25nIENyZWRlbnRpYWxzIVwiKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJjb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJwcm9jZXNzIiwiZW52IiwiVVNFUk5BTUUiLCJQQVNTV09SRCIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsIlRPS0VOIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();