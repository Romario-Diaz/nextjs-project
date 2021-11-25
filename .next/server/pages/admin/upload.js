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
exports.id = "pages/admin/upload";
exports.ids = ["pages/admin/upload"];
exports.modules = {

/***/ "./pages/admin/upload.js":
/*!*******************************!*\
  !*** ./pages/admin/upload.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_booksServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/booksServices */ \"./services/booksServices.js\");\n\n\n\nconst Upload = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: author , 1: setAuthor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: pathImage , 1: setPathImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetStates = ()=>{\n        setName(\"\");\n        setAuthor(\"\");\n        setFile();\n    };\n    const sendBook = (e)=>{\n        e.preventDefault();\n        console.log(\"funciona el envio !!!\");\n        console.log(\"name : \", name);\n        console.log(\"author: \", author);\n    };\n    const onFileChage = ()=>{\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"form__books\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title__form\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Uploading!!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                onSubmit: sendBook,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                className: \"label__form\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                },\n                                __self: undefined,\n                                children: \"Escriba el titulo del libro\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"text\",\n                                className: \"input-upload\",\n                                value: name,\n                                name: \"name\",\n                                onChange: (e)=>setName(e.target.value)\n                                ,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                },\n                                __self: undefined\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                className: \"label__form\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                },\n                                __self: undefined,\n                                children: \"Escriba el autor\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"text\",\n                                className: \"input-upload\",\n                                value: author,\n                                name: \"author\",\n                                onChange: (e)=>setAuthor(e.target.value)\n                                ,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                },\n                                __self: undefined\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"input-file input-upload\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"file\",\n                                placeholder: \"File\",\n                                onChange: onFileChage,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                },\n                                __self: undefined\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: pathImage,\n                                alt: \"Image\",\n                                width: \"150\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                },\n                                __self: undefined\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"submit\",\n                            value: \"Enviar\",\n                            className: \"input-upload submit\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Romario Diaz\\\\Desktop\\\\next_library\\\\pages\\\\admin\\\\upload.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            },\n                            __self: undefined\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi91cGxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUV2RCxLQUFLLENBQUNFLE1BQU0sT0FBUyxDQUFDO0lBRWxCLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsQ0FBRTtJQUNuQyxLQUFLLE1BQUVLLE1BQU0sTUFBRUMsU0FBUyxNQUFJTiwrQ0FBUSxDQUFDLENBQUU7SUFDdkMsS0FBSyxNQUFFTyxJQUFJLE1BQUVDLE9BQU8sTUFBSVIsK0NBQVE7SUFFaEMsS0FBSyxNQUFFUyxTQUFTLE1BQUVDLFlBQVksTUFBSVYsK0NBQVEsQ0FBQyxDQUFFO0lBRTdDLEtBQUssQ0FBQ1csV0FBVyxPQUFTLENBQUM7UUFDdkJQLE9BQU8sQ0FBQyxDQUFFO1FBQ1ZFLFNBQVMsQ0FBQyxDQUFFO1FBQ1pFLE9BQU87SUFDWCxDQUFDO0lBRUQsS0FBSyxDQUFDSSxRQUFRLElBQUlDLENBQUMsR0FBSyxDQUFDO1FBQ3JCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO1FBQ25DRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUViLElBQUk7UUFDM0JZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVUsV0FBRVgsTUFBTTtJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDWSxXQUFXLE9BQVMsQ0FBQztJQUUzQixDQUFDO0lBRUQsTUFBTSx1RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7aUZBQ3ZCQyxDQUFFO2dCQUFDRCxTQUFTLEVBQUMsQ0FBYTs7Ozs7OzswQkFBQyxDQUFXOztpRkFDdENFLENBQUU7Ozs7Ozs7O2tGQUVGQyxDQUFJO2dCQUFDQyxRQUFRLEVBQUVYLFFBQVE7Ozs7Ozs7OzBGQUNuQk0sQ0FBRzs7Ozs7Ozs7aUdBQ0NNLENBQUs7Z0NBQUNMLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzBDQUFDLENBQTJCOztpR0FDekRNLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFNO2dDQUFDUCxTQUFTLEVBQUMsQ0FBYztnQ0FBQ1EsS0FBSyxFQUFFeEIsSUFBSTtnQ0FBRUEsSUFBSSxFQUFDLENBQU07Z0NBQ25FeUIsUUFBUSxHQUFHZixDQUFDLEdBQUtULE9BQU8sQ0FBQ1MsQ0FBQyxDQUFDZ0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7OzswRkFFM0NULENBQUc7Ozs7Ozs7O2lHQUNDTSxDQUFLO2dDQUFDTCxTQUFTLEVBQUMsQ0FBYTs7Ozs7OzswQ0FBQyxDQUFnQjs7aUdBQzlDTSxDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQ0FBQ1AsU0FBUyxFQUFDLENBQWM7Z0NBQUNRLEtBQUssRUFBRXRCLE1BQU07Z0NBQUVGLElBQUksRUFBQyxDQUFRO2dDQUN2RXlCLFFBQVEsR0FBR2YsQ0FBQyxHQUFLUCxTQUFTLENBQUNPLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7MEZBRTdDVCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBeUI7Ozs7Ozs7O2lHQUNuQ00sQ0FBSztnQ0FDRkMsSUFBSSxFQUFDLENBQU07Z0NBQ1hJLFdBQVcsRUFBQyxDQUFNO2dDQUNsQkYsUUFBUSxFQUFFWCxXQUFXOzs7Ozs7OztpR0FHeEJjLENBQUc7Z0NBQUNDLEdBQUcsRUFBRXZCLFNBQVM7Z0NBQUV3QixHQUFHLEVBQUMsQ0FBTztnQ0FBQ0MsS0FBSyxFQUFDLENBQUs7Ozs7Ozs7Ozs7eUZBRS9DaEIsQ0FBRzs7Ozs7Ozt1R0FDQ08sQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQVE7NEJBQUNDLEtBQUssRUFBQyxDQUFROzRCQUFDUixTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozs7QUFLdkYsQ0FBQztBQUVELGlFQUFlakIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfbGlicmFyeS8uL3BhZ2VzL2FkbWluL3VwbG9hZC5qcz9mZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEJvb2tzU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ib29rc1NlcnZpY2VzJ1xyXG5cclxuY29uc3QgVXBsb2FkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBbcGF0aEltYWdlLCBzZXRQYXRoSW1hZ2VdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zdCByZXNldFN0YXRlcyA9ICgpID0+IHtcclxuICAgICAgICBzZXROYW1lKFwiXCIpXHJcbiAgICAgICAgc2V0QXV0aG9yKFwiXCIpXHJcbiAgICAgICAgc2V0RmlsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZEJvb2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnVuY2lvbmEgZWwgZW52aW8gISEhXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIDogXCIsIG5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3I6IFwiLCBhdXRob3IpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25GaWxlQ2hhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ib29rc1wiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVfX2Zvcm1cIj5VcGxvYWRpbmchITwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRCb29rfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsX19mb3JtXCI+RXNjcmliYSBlbCB0aXR1bG8gZGVsIGxpYnJvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dC11cGxvYWRcIiB2YWx1ZT17bmFtZX0gbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbF9fZm9ybVwiPkVzY3JpYmEgZWwgYXV0b3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0LXVwbG9hZFwiIHZhbHVlPXthdXRob3J9IG5hbWU9XCJhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmlsZSBpbnB1dC11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYXRoSW1hZ2V9IGFsdD1cIkltYWdlXCIgd2lkdGg9XCIxNTBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudmlhclwiIGNsYXNzTmFtZT1cImlucHV0LXVwbG9hZCBzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm9va3NTZXJ2aWNlIiwiVXBsb2FkIiwibmFtZSIsInNldE5hbWUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJmaWxlIiwic2V0RmlsZSIsInBhdGhJbWFnZSIsInNldFBhdGhJbWFnZSIsInJlc2V0U3RhdGVzIiwic2VuZEJvb2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwib25GaWxlQ2hhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/upload.js\n");

/***/ }),

/***/ "./services/booksServices.js":
/*!***********************************!*\
  !*** ./services/booksServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/const */ \"./util/const.js\");\n\n\nclass BooksService {\n    sendBooks({ data  }, file) {\n    }\n    getInitialBooks() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_util_const__WEBPACK_IMPORTED_MODULE_1__[\"default\"].URI}/books/getInicializationData`);\n    }\n    getAllAudioBooks() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_util_const__WEBPACK_IMPORTED_MODULE_1__[\"default\"].URI}/books/getAudioBooks`);\n    }\n    getAllEbooks() {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_util_const__WEBPACK_IMPORTED_MODULE_1__[\"default\"].URI}/books/getEbooks`);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BooksService);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9ib29rc1NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTTtNQUV6QkUsWUFBWTtJQUVkQyxTQUFTLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEVBQUVDLElBQUksRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFFREMsZUFBZSxHQUFHLENBQUM7UUFDZixNQUFNLENBQUNOLGdEQUFTLElBQUlDLHVEQUFPLENBQUMsNEJBQTRCO0lBQzVELENBQUM7SUFFRFEsZ0JBQWdCLEdBQUcsQ0FBQztRQUNoQixNQUFNLENBQUNULGdEQUFTLElBQUlDLHVEQUFPLENBQUMsb0JBQW9CO0lBQ3BELENBQUM7SUFFRFMsWUFBWSxHQUFHLENBQUM7UUFDWixNQUFNLENBQUNWLGdEQUFTLElBQUlDLHVEQUFPLENBQUMsZ0JBQWdCO0lBQ2hELENBQUM7O0FBR0wsaUVBQWVDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2xpYnJhcnkvLi9zZXJ2aWNlcy9ib29rc1NlcnZpY2VzLmpzPzljYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uL3V0aWwvY29uc3QnXHJcblxyXG5jbGFzcyBCb29rc1NlcnZpY2Uge1xyXG5cclxuICAgIHNlbmRCb29rcyh7ZGF0YX0sIGZpbGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5pdGlhbEJvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7QVBJLlVSSX0vYm9va3MvZ2V0SW5pY2lhbGl6YXRpb25EYXRhYClcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBdWRpb0Jvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7QVBJLlVSSX0vYm9va3MvZ2V0QXVkaW9Cb29rc2ApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsRWJvb2tzKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7QVBJLlVSSX0vYm9va3MvZ2V0RWJvb2tzYClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va3NTZXJ2aWNlIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJIiwiQm9va3NTZXJ2aWNlIiwic2VuZEJvb2tzIiwiZGF0YSIsImZpbGUiLCJnZXRJbml0aWFsQm9va3MiLCJnZXQiLCJVUkkiLCJnZXRBbGxBdWRpb0Jvb2tzIiwiZ2V0QWxsRWJvb2tzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/booksServices.js\n");

/***/ }),

/***/ "./util/const.js":
/*!***********************!*\
  !*** ./util/const.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar API = {\n    URI: 'http://localhost:8080'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2NvbnN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxHQUFHLENBQUNBLEdBQUcsR0FBRyxDQUFDO0lBQ1BDLEdBQUcsRUFBRSxDQUF1QjtBQUNoQyxDQUFDO0FBRUQsaUVBQWVELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2xpYnJhcnkvLi91dGlsL2NvbnN0LmpzP2EyMDgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEFQSSA9IHtcclxuICAgIFVSSTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJIl0sIm5hbWVzIjpbIkFQSSIsIlVSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/const.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/upload.js"));
module.exports = __webpack_exports__;

})();