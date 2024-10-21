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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useMobile */ \"(app-pages-browser)/./src/hooks/useMobile.ts\");\n/* harmony import */ var _barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HiMenu,HiSearch!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const isMobile = (0,_hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    if (isMobile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"bg-[#13736D] flex items-center justify-between p-2 h-fit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiMenu, {\n                            size: 30,\n                            color: \"white\",\n                            className: \"p-1 border border-white\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/horizontal_logo.jpg\" // Path to your image\n                            ,\n                            alt: \"Logo\" // Description for accessibility\n                            ,\n                            width: 140,\n                            height: 45\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiMenu_HiSearch_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiSearch, {\n                            size: 30,\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen flex bg-black  mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type and hit enter...\",\n                            className: \"bg-black p-2 text-white w-full outline-none placeholder:text-gray-400 focus:placeholder:text-white\",\n                            ref: searchRef\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#0b9607] px-4 font-semibold text-white hover:bg-white hover:text-black\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/horizontal_logo.jpg\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Allmovieshub_New\\\\frontend\\\\src\\\\components\\\\Navbar.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"33RwNuax9Fo+q5UzCENT7LEgL0M=\", false, function() {\n    return [\n        _hooks_useMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ047QUFDUztBQUNuQjtBQUkvQixNQUFNTyxTQUFtQjs7SUFDckIsTUFBTUMsV0FBV0wsNERBQVNBO0lBQzFCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNVSxZQUFZVCw2Q0FBTUEsQ0FBbUI7SUFFM0MsSUFBSU0sVUFBVTtRQUNWLHFCQUNJOzs4QkFDSSw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDVCx5RkFBTUE7NEJBQUNVLE1BQU07NEJBQUlDLE9BQU07NEJBQVFGLFdBQVU7Ozs7OztzQ0FFMUMsOERBQUNQLGtEQUFLQTs0QkFDRlUsS0FBSSx1QkFBdUIscUJBQXFCOzs0QkFDaERDLEtBQUksT0FBbUIsZ0NBQWdDOzs0QkFDdkRDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7OztzQ0FHWiw4REFBQ2QsMkZBQVFBOzRCQUFDUyxNQUFNOzRCQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBSzlCLDhEQUFDSztvQkFBSVAsV0FBVTs7c0NBQ1gsOERBQUNROzRCQUFNQyxNQUFLOzRCQUNSQyxhQUFZOzRCQUNaVixXQUFVOzRCQUNWVyxLQUFLYjs7Ozs7O3NDQUVULDhEQUFDYzs0QkFBT1osV0FBVTtzQ0FBNkU7Ozs7Ozs7Ozs7Ozs7O0lBUS9HO0lBQ0EscUJBQ0ksOERBQUNhO1FBQUlWLEtBQUk7Ozs7OztBQUVqQjtHQTFDTVQ7O1FBQ2VKLHdEQUFTQTs7O0tBRHhCSTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzlhNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZU1vYmlsZSBmcm9tICdAL2hvb2tzL3VzZU1vYmlsZSdcclxuaW1wb3J0IHsgSGlNZW51LCBIaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTW9iaWxlKCk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdiZy1bIzEzNzM2RF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMiBoLWZpdCc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIaU1lbnUgc2l6ZT17MzB9IGNvbG9yPSd3aGl0ZScgY2xhc3NOYW1lPSdwLTEgYm9yZGVyIGJvcmRlci13aGl0ZScgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9ob3Jpem9udGFsX2xvZ28uanBnXCIgLy8gUGF0aCB0byB5b3VyIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIiAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvbiBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTQwfSAgICAgICAgICAgICAvLyBEZXNpcmVkIHNpemUgd2l0aCBjb3JyZWN0IGFzcGVjdCByYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1fSAgICAgICAgICAgICAvLyBEZXNpcmVkIHNpemUgd2l0aCBjb3JyZWN0IGFzcGVjdCByYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIaVNlYXJjaCBzaXplPXszMH0gY29sb3I9J3doaXRlJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBzZWFyY2ggYmFyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGZsZXggYmctYmxhY2sgIG10LTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIGFuZCBoaXQgZW50ZXIuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0yIHRleHQtd2hpdGUgdy1mdWxsIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnBsYWNlaG9sZGVyOnRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c2VhcmNoUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLVsjMGI5NjA3XSBweC00IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPScvaG9yaXpvbnRhbF9sb2dvLmpwZyc+PC9pbWc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTW9iaWxlIiwiSGlNZW51IiwiSGlTZWFyY2giLCJJbWFnZSIsIk5hdmJhciIsImlzTW9iaWxlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoUmVmIiwibmF2IiwiY2xhc3NOYW1lIiwic2l6ZSIsImNvbG9yIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlZiIsImJ1dHRvbiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});