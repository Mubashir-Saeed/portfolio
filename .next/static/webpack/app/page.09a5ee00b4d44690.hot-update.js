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

/***/ "(app-pages-browser)/./src/app/components/skills.tsx":
/*!***************************************!*\
  !*** ./src/app/components/skills.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Section_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section_heading */ \"(app-pages-browser)/./src/app/components/Section_heading.tsx\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data */ \"(app-pages-browser)/./lib/data.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/hook */ \"(app-pages-browser)/./lib/hook.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// import { useSectionView } from \"../../../lib/hook\";\n\n\nconst fadeInAnimationVarients = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (index)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.05 * index\n            }\n        })\n};\nconst Skills = ()=>{\n    _s();\n    const { ref } = (0,_lib_hook__WEBPACK_IMPORTED_MODULE_3__.useSectionInView)(\"Skills\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"skills\",\n        className: \"mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section_heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"My Skills\"\n            }, void 0, false, {\n                fileName: \"/home/mubashir/Documents/abc/src/app/components/skills.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center gap-3 text-lg text-gray-800\",\n                children: _lib_data__WEBPACK_IMPORTED_MODULE_2__.skillsData.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                        className: \"bg-white border border-black/[0.1] rounded-xl px-5 py-3 \",\n                        variants: fadeInAnimationVarients,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: index,\n                        children: skill\n                    }, index, false, {\n                        fileName: \"/home/mubashir/Documents/abc/src/app/components/skills.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/mubashir/Documents/abc/src/app/components/skills.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mubashir/Documents/abc/src/app/components/skills.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Skills, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hook__WEBPACK_IMPORTED_MODULE_3__.useSectionInView\n    ];\n});\n_c = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBQ0Q7QUFDL0Msc0RBQXNEO0FBQ0M7QUFDRjtBQUVyRCxNQUFNSSwwQkFBMEI7SUFDOUJDLFNBQVM7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUk7SUFDOUJDLFNBQVMsQ0FBQ0MsUUFBbUI7WUFDM0JILFNBQVM7WUFDVEMsR0FBRztZQUNIRyxZQUFZO2dCQUFFQyxPQUFPLE9BQU9GO1lBQU07UUFDcEM7QUFDRjtBQUVBLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR1YsMkRBQWdCQSxDQUFDO0lBRWpDLHFCQUNFLDhEQUFDVztRQUNDRCxLQUFLQTtRQUNMRSxJQUFHO1FBQ0hDLFdBQVU7OzBCQUVWLDhEQUFDaEIsd0RBQWVBO2dCQUFDaUIsT0FBTTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQ1hmLGlEQUFVQSxDQUFDa0IsR0FBRyxDQUFDLENBQUNDLE9BQU9YLHNCQUN0Qiw4REFBQ1AsaURBQU1BLENBQUNtQixFQUFFO3dCQUNSTCxXQUFVO3dCQUVWTSxVQUFVbEI7d0JBQ1ZDLFNBQVE7d0JBQ1JrQixhQUFZO3dCQUNaQyxVQUFVOzRCQUNSQyxNQUFNO3dCQUNSO3dCQUNBQyxRQUFRakI7a0NBRVBXO3VCQVRJWDs7Ozs7Ozs7Ozs7Ozs7OztBQWVqQjtHQTdCTUc7O1FBQ1lULHVEQUFnQkE7OztLQUQ1QlM7QUErQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NraWxscy50c3g/MTViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBTZWN0aW9uX2hlYWRpbmcgZnJvbSBcIi4vU2VjdGlvbl9oZWFkaW5nXCI7XG5pbXBvcnQgeyBza2lsbHNEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XG4vLyBpbXBvcnQgeyB1c2VTZWN0aW9uVmlldyB9IGZyb20gXCIuLi8uLi8uLi9saWIvaG9va1wiO1xuaW1wb3J0IHsgYW5pbWF0ZSwgZGVsYXksIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ob29rXCI7XG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvblZhcmllbnRzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDEwMCB9LFxuICBhbmltYXRlOiAoaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBkZWxheTogMC4wNSAqIGluZGV4IH0sXG4gIH0pLFxufTtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCB7IHJlZiB9ID0gdXNlU2VjdGlvbkluVmlldyhcIlNraWxsc1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGlkPVwic2tpbGxzXCJcbiAgICAgIGNsYXNzTmFtZT1cIm1iLTI4IG1heC13LVs1M3JlbV0gc2Nyb2xsLW10LTI4IHRleHQtY2VudGVyIHNtOm1iLTQwXCJcbiAgICA+XG4gICAgICA8U2VjdGlvbl9oZWFkaW5nIHRpdGxlPVwiTXkgU2tpbGxzXCIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyB0ZXh0LWxnIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAge3NraWxsc0RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWJsYWNrL1swLjFdIHJvdW5kZWQteGwgcHgtNSBweS0zIFwiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbkFuaW1hdGlvblZhcmllbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJhbmltYXRlXCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3VzdG9tPXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwibmFtZXMiOlsiU2VjdGlvbl9oZWFkaW5nIiwic2tpbGxzRGF0YSIsIm1vdGlvbiIsInVzZVNlY3Rpb25JblZpZXciLCJmYWRlSW5BbmltYXRpb25WYXJpZW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJpbmRleCIsInRyYW5zaXRpb24iLCJkZWxheSIsIlNraWxscyIsInJlZiIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsInRpdGxlIiwidWwiLCJtYXAiLCJza2lsbCIsImxpIiwidmFyaWFudHMiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImN1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/skills.tsx\n"));

/***/ })

});