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

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMobile */ \"(app-pages-browser)/./src/hooks/useMobile.ts\");\n/* harmony import */ var _barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HiMenu,HiSearch!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const isMobile = (0,_hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    if (isMobile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"bg-[#13736D] flex items-center justify-between p-2 h-fit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiMenu, {\n                            size: 30,\n                            color: \"white\",\n                            className: \"p-1 border border-white\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/horizontal_logo.jpg\" // Path to your image\n                            ,\n                            alt: \"Logo\" // Description for accessibility\n                            ,\n                            width: 140,\n                            height: 45\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiSearch, {\n                            size: 30,\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen flex bg-black  mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type and hit enter...\",\n                            className: \"bg-black p-2 text-white w-full outline-none placeholder:text-gray-400 focus:placeholder:text-white\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#0b9607] px-4 font-semibold text-white hover:bg-white hover:text-black\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/horizontal_logo.jpg\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"33RwNuax9Fo+q5UzCENT7LEgL0M=\", false, function() {\n    return [\n        _hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ047QUFDUztBQUNuQjtBQUkvQixNQUFNTyxTQUFtQjs7SUFDckIsTUFBTUMsV0FBV0wsNERBQVNBO0lBQzFCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNVSxZQUFZVCw2Q0FBTUEsQ0FBbUI7SUFFM0MsSUFBSU0sVUFBVTtRQUNWLHFCQUNJOzs4QkFDSSw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDVCx5RkFBTUE7NEJBQUNVLE1BQU07NEJBQUlDLE9BQU07NEJBQVFGLFdBQVU7Ozs7OztzQ0FFMUMsOERBQUNQLGtEQUFLQTs0QkFDRlUsS0FBSSx1QkFBdUIscUJBQXFCOzs0QkFDaERDLEtBQUksT0FBbUIsZ0NBQWdDOzs0QkFDdkRDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7OztzQ0FHWiw4REFBQ2QsMkZBQVFBOzRCQUFDUyxNQUFNOzRCQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBSzlCLDhEQUFDSztvQkFBSVAsV0FBVTs7c0NBQ1gsOERBQUNROzRCQUFNQyxNQUFLOzRCQUNSQyxhQUFZOzRCQUNaVixXQUFVOzs7Ozs7c0NBRWQsOERBQUNXOzRCQUFPWCxXQUFVO3NDQUE2RTs7Ozs7Ozs7Ozs7Ozs7SUFRL0c7SUFDQSxxQkFDSSw4REFBQ1k7UUFBSVQsS0FBSTs7Ozs7O0FBRWpCO0dBekNNVDs7UUFDZUosd0RBQVNBOzs7S0FEeEJJO0FBMkNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3g/OWE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlTW9iaWxlIGZyb20gJ0AvaG9va3MvdXNlTW9iaWxlJ1xyXG5pbXBvcnQgeyBIaU1lbnUsIEhpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNb2JpbGUoKTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2JnLVsjMTM3MzZEXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yIGgtZml0Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpTWVudSBzaXplPXszMH0gY29sb3I9J3doaXRlJyBjbGFzc05hbWU9J3AtMSBib3JkZXIgYm9yZGVyLXdoaXRlJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2hvcml6b250YWxfbG9nby5qcGdcIiAvLyBQYXRoIHRvIHlvdXIgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uIGZvciBhY2Nlc3NpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNDB9ICAgICAgICAgICAgIC8vIERlc2lyZWQgc2l6ZSB3aXRoIGNvcnJlY3QgYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDV9ICAgICAgICAgICAgIC8vIERlc2lyZWQgc2l6ZSB3aXRoIGNvcnJlY3QgYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpU2VhcmNoIHNpemU9ezMwfSBjb2xvcj0nd2hpdGUnIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHNlYXJjaCBiYXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gZmxleCBiZy1ibGFjayAgbXQtMicgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIGFuZCBoaXQgZW50ZXIuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0yIHRleHQtd2hpdGUgdy1mdWxsIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnBsYWNlaG9sZGVyOnRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctWyMwYjk2MDddIHB4LTQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9Jy9ob3Jpem9udGFsX2xvZ28uanBnJz48L2ltZz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VNb2JpbGUiLCJIaU1lbnUiLCJIaVNlYXJjaCIsIkltYWdlIiwiTmF2YmFyIiwiaXNNb2JpbGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hSZWYiLCJuYXYiLCJjbGFzc05hbWUiLCJzaXplIiwiY29sb3IiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});