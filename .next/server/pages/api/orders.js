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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    customer: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    address: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: Number,\n        default: 0\n    },\n    method: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUNyQztJQUNFRyxRQUFRLEVBQUU7UUFDUkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFFREMsT0FBTyxFQUFFO1FBQ1BKLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsR0FBRztLQUNmO0lBRURFLEtBQUssRUFBRTtRQUNMTCxJQUFJLEVBQUVNLE1BQU07UUFDWkosUUFBUSxFQUFFLElBQUk7S0FDZjtJQUVESyxNQUFNLEVBQUU7UUFDTlAsSUFBSSxFQUFFTSxNQUFNO1FBQ1pFLE9BQU8sRUFBQyxDQUFDO0tBQ1Y7SUFFREMsTUFBTSxFQUFFO1FBQ05ULElBQUksRUFBRU0sTUFBTTtRQUNaSixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBR0YsRUFDRDtJQUFFUSxVQUFVLEVBQUUsSUFBSTtDQUFFLENBQ3JCO0FBRUQsaUVBQWVkLDhEQUFxQixJQUNsQ0EscURBQWMsQ0FBQyxPQUFPLEVBQUVDLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emEtb3JkZXIvLi9tb2RlbHMvT3JkZXIuanM/ZWIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGN1c3RvbWVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1heGxlbmd0aDogNjAsXG4gICAgfSxcblxuICAgIGFkZHJlc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWF4bGVuZ3RoOiAyMDAsXG4gICAgfSxcblxuICAgIHRvdGFsOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgc3RhdHVzOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OjAsXG4gICAgfSxcblxuICAgIG1ldGhvZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcblxuICBcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fFxuICBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIE9yZGVyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk9yZGVyU2NoZW1hIiwiU2NoZW1hIiwiY3VzdG9tZXIiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJhZGRyZXNzIiwidG90YWwiLCJOdW1iZXIiLCJzdGF0dXMiLCJkZWZhdWx0IiwibWV0aG9kIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIk9yZGVyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order */ \"(api)/./models/Order.js\");\n\n\nconst handler = async (req, res)=>{\n    const { method  } = req;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(orders);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(order);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNGO0FBRTFDLE1BQU1FLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHO0lBRXRCLE1BQU1ILHVEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJSyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTUwsMERBQVUsRUFBRTtZQUNqQ0csR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUM7U0FDOUIsQ0FBQyxPQUFPSSxHQUFHLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUNELElBQUlMLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDckIsSUFBSTtZQUNGLE1BQU1NLEtBQUssR0FBRyxNQUFNViw0REFBWSxDQUFDRSxHQUFHLENBQUNVLElBQUksQ0FBQztZQUMxQ1QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxPQUFPRCxHQUFHLEVBQUU7WUFDWk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7U0FDM0I7S0FDRjtDQUNGO0FBRUQsaUVBQWVSLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLW9yZGVyLy4vcGFnZXMvYXBpL29yZGVycy9pbmRleC5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL09yZGVyXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVycyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVyLmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihvcmRlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiT3JkZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwib3JkZXJzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJvcmRlciIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();