"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Projects.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Projects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section_heading */ \"(app-pages-browser)/./src/app/components/Section_heading.tsx\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/data */ \"(app-pages-browser)/./lib/data.ts\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"(app-pages-browser)/./src/app/components/project.tsx\");\n/* harmony import */ var _lib_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/hook */ \"(app-pages-browser)/./lib/hook.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Projects = ()=>{\n    _s();\n    const { ref } = (0,_lib_hook__WEBPACK_IMPORTED_MODULE_5__.useSectionInView)(\"Projects\", 0.5);\n    // const {ref , inView} = useInView({threshold: 0.5});\n    // const {setActiveSection, timeOfLastClick} = useActiveSectionContext();\n    // useEffect(()=>{\n    //   if(inView && Date.now() - timeOfLastClick > 1000) {\n    //     setActiveSection(\"Projects\")\n    //   }\n    // },[inView, setActiveSection, timeOfLastClick])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"projects\",\n        className: \"scroll-mt-28 mb-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/home/mubashir/Documents/abc/src/app/components/Projects.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            _lib_data__WEBPACK_IMPORTED_MODULE_3__.projectsData.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        ...project\n                    }, void 0, false, {\n                        fileName: \"/home/mubashir/Documents/abc/src/app/components/Projects.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/home/mubashir/Documents/abc/src/app/components/Projects.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mubashir/Documents/abc/src/app/components/Projects.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hook__WEBPACK_IMPORTED_MODULE_5__.useSectionInView\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwQjtBQUNzQjtBQUNDO0FBQ2pCO0FBQ3FCO0FBRXJELE1BQU1LLFdBQVc7O0lBQ2YsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0YsMkRBQWdCQSxDQUFDLFlBQVk7SUFFN0Msc0RBQXNEO0lBQ3RELHlFQUF5RTtJQUV6RSxrQkFBa0I7SUFDbEIsd0RBQXdEO0lBQ3hELG1DQUFtQztJQUNuQyxNQUFNO0lBQ04saURBQWlEO0lBRWpELHFCQUNFLDhEQUFDRztRQUFRRCxLQUFLQTtRQUFLRSxJQUFHO1FBQVdDLFdBQVU7OzBCQUN6Qyw4REFBQ1Isd0RBQWVBO2dCQUFDUyxPQUFPOzs7Ozs7WUFDdkJSLG1EQUFZQSxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCLDhEQUFDYix1REFBYzs4QkFDYiw0RUFBQ0csZ0RBQU9BO3dCQUFFLEdBQUdTLE9BQU87Ozs7OzttQkFEREM7Ozs7Ozs7Ozs7O0FBTTdCO0dBdEJNUjs7UUFDWUQsdURBQWdCQTs7O0tBRDVCQztBQXdCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzcyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VjdGlvbl9oZWFkaW5nIGZyb20gXCIuL1NlY3Rpb25faGVhZGluZ1wiO1xuaW1wb3J0IHsgcHJvamVjdHNEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ob29rXCI7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCB7IHJlZiB9ID0gdXNlU2VjdGlvbkluVmlldyhcIlByb2plY3RzXCIsIDAuNSk7XG5cbiAgLy8gY29uc3Qge3JlZiAsIGluVmlld30gPSB1c2VJblZpZXcoe3RocmVzaG9sZDogMC41fSk7XG4gIC8vIGNvbnN0IHtzZXRBY3RpdmVTZWN0aW9uLCB0aW1lT2ZMYXN0Q2xpY2t9ID0gdXNlQWN0aXZlU2VjdGlvbkNvbnRleHQoKTtcblxuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBpZihpblZpZXcgJiYgRGF0ZS5ub3coKSAtIHRpbWVPZkxhc3RDbGljayA+IDEwMDApIHtcbiAgLy8gICAgIHNldEFjdGl2ZVNlY3Rpb24oXCJQcm9qZWN0c1wiKVxuICAvLyAgIH1cbiAgLy8gfSxbaW5WaWV3LCBzZXRBY3RpdmVTZWN0aW9uLCB0aW1lT2ZMYXN0Q2xpY2tdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gcmVmPXtyZWZ9IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJzY3JvbGwtbXQtMjggbWItMjhcIj5cbiAgICAgIDxTZWN0aW9uX2hlYWRpbmcgdGl0bGU9e1wiTXkgUHJvamVjdHNcIn0gLz5cbiAgICAgIHtwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgPFByb2plY3Qgey4uLnByb2plY3R9IC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlY3Rpb25faGVhZGluZyIsInByb2plY3RzRGF0YSIsIlByb2plY3QiLCJ1c2VTZWN0aW9uSW5WaWV3IiwiUHJvamVjdHMiLCJyZWYiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});