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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    desc: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    prices: {\n        type: [\n            Number\n        ],\n        required: true\n    },\n    extraOptions: {\n        type: [\n            {\n                text: {\n                    type: String,\n                    required: true\n                },\n                price: {\n                    type: Number,\n                    required: true\n                }\n            }, \n        ]\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxHQUFHLElBQUlELHdEQUFlLENBQ3ZDO0lBQ0VHLEtBQUssRUFBRTtRQUNMQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUVEQyxJQUFJLEVBQUU7UUFDSkosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxHQUFHO0tBQ2Y7SUFFREUsR0FBRyxFQUFFO1FBQ0hMLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBRURJLE1BQU0sRUFBRTtRQUNOTixJQUFJLEVBQUU7WUFBQ08sTUFBTTtTQUFDO1FBQ2RMLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRE0sWUFBWSxFQUFFO1FBQ1pSLElBQUksRUFBRTtZQUNKO2dCQUNFUyxJQUFJLEVBQUU7b0JBQUVULElBQUksRUFBRUMsTUFBTTtvQkFBRUMsUUFBUSxFQUFFLElBQUk7aUJBQUU7Z0JBQ3RDUSxLQUFLLEVBQUU7b0JBQUVWLElBQUksRUFBRU8sTUFBTTtvQkFBRUwsUUFBUSxFQUFFLElBQUk7aUJBQUU7YUFDeEM7U0FDRjtLQUNGO0NBQ0YsRUFDRDtJQUFFUyxVQUFVLEVBQUUsSUFBSTtDQUFFLENBQ3JCO0FBRUQsaUVBQWVmLGdFQUF1QixJQUNwQ0EscURBQWMsQ0FBQyxTQUFTLEVBQUVDLGFBQWEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emEtb3JkZXIvLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtYXhsZW5ndGg6IDYwLFxuICAgIH0sXG5cbiAgICBkZXNjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1heGxlbmd0aDogMjAwLFxuICAgIH0sXG5cbiAgICBpbWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG5cbiAgICBwcmljZXM6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXJdLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBleHRyYU9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8XG4gIG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImRlc2MiLCJpbWciLCJwcmljZXMiLCJOdW1iZXIiLCJleHRyYU9wdGlvbnMiLCJ0ZXh0IiwicHJpY2UiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiUHJvZHVjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handler(req, res) {\n    const { method , cookies  } = req;\n    const token = cookies.token;\n    (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(products);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        if (!token || token !== process.env.token) {\n            return res.status(401).json(\"Not authenticated!\");\n        }\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0U7QUFFL0IsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsT0FBTyxHQUFFLEdBQUdILEdBQUc7SUFFL0IsTUFBTUksS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUs7SUFFM0JQLHVEQUFTLEVBQUUsQ0FBQztJQUVaLElBQUlLLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEIsSUFBSTtZQUNGLE1BQU1HLFFBQVEsR0FBRyxNQUFNUCw0REFBWSxFQUFFO1lBQ3JDRyxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQztTQUNoQyxDQUFDLE9BQU9JLEdBQUcsRUFBRTtZQUNaUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBRUQsSUFBSVAsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNyQixJQUFHLENBQUNFLEtBQUssSUFBSUEsS0FBSyxLQUFLTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxFQUFDO1lBQ3ZDLE9BQU9ILEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDbEQ7UUFDRCxJQUFJO1lBQ0YsTUFBTUksT0FBTyxHQUFHLE1BQU1kLDhEQUFjLENBQUNFLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO1lBQzlDYixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQztTQUMvQixDQUFDLE9BQU9ILEdBQUcsRUFBRTtZQUNaUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YS1vcmRlci8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcz81OTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvUHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kLCBjb29raWVzIH0gPSByZXE7XG5cbiAgY29uc3QgdG9rZW4gPSBjb29raWVzLnRva2VuXG5cbiAgZGJDb25uZWN0KCk7XG5cbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGlmKCF0b2tlbiB8fCB0b2tlbiAhPT0gcHJvY2Vzcy5lbnYudG9rZW4pe1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKFwiTm90IGF1dGhlbnRpY2F0ZWQhXCIpXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5jcmVhdGUocmVxLmJvZHkpO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocHJvZHVjdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJ0b2tlbiIsInByb2R1Y3RzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJwcm9jZXNzIiwiZW52IiwicHJvZHVjdCIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error(\"Please define the MONGO_URL environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose1)=>{\n            return mongoose1;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixTQUFTO0FBRXZDLElBQUksQ0FBQ0EsU0FBUyxFQUFFO0lBQ2QsTUFBTSxJQUFJRyxLQUFLLENBQ2Isb0VBQW9FLENBQ3JFO0NBQ0Y7QUFFRDs7OztHQUlHLENBQ0gsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNOLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNOLFFBQVEsR0FBRztRQUFFTyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFO0NBQ3pEO0FBRUQsZUFBZUMsU0FBUyxHQUFHO0lBQ3pCLElBQUlKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsTUFBTSxDQUFDRSxJQUFJO0tBQ25CO0lBRUQsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxJQUFJLEdBQUc7WUFDWEMsY0FBYyxFQUFFLEtBQUs7U0FDdEI7UUFFRE4sTUFBTSxDQUFDRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxTQUFTLEVBQUVTLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQ2IsU0FBUSxHQUFLO1lBQ3BFLE9BQU9BLFNBQVE7U0FDaEIsQ0FBQztLQUNIO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csT0FBTztJQUNsQyxPQUFPSCxNQUFNLENBQUNFLElBQUk7Q0FDbkI7QUFFRCxpRUFBZUUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLW9yZGVyLy4vdXRpbC9tb25nby5qcz9jMGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMXG5cbmlmICghTU9OR09fVVJMKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlXG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJMLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlXG4gICAgfSlcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIHJldHVybiBjYWNoZWQuY29ublxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkwiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();