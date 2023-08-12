"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/code/page",{

/***/ "(app-client)/./app/code/CodeEditor.js":
/*!********************************!*\
  !*** ./app/code/CodeEditor.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CodeEditor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditor.css */ \"(app-client)/./app/code/CodeEditor.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n//import { PythonConsole } from 'pyodide'\nconst CodeEditor = ()=>{\n    _s();\n    // all backend code:\n    const [savedCode, setSavedCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //get function\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8000/\");\n                const jsonData = await response.json();\n                setSavedCode(jsonData);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    // post \n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        setText(document.querySelector(\".code-area\").textContent);\n        try {\n            const response = await fetch(\"http://localhost:8000/add/new\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    text\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                console.log(data.message); // Response from the server\n            } else {\n                console.error(\"Error:\", response.status);\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    // handleSubmit()\n    };\n    const saverCode = async (e)=>{\n        handleSubmit();\n    };\n    //gpt integration\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function getGPTResponse(text) {\n        console.log(output);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://api.openai.com/v1/engines/davinci/completions\", {\n                prompt: text,\n                max_tokens: 15,\n                temperature: 0.2\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer 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\"\n                }\n            });\n            return response.data.choices[0].text;\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    }\n    const handleRunCode = async ()=>{\n        window.alert(\"GPT TOKENs WHICH ARE USED TO RUN THE PROGRAM ARE FINISHED \\n CONTACT THE OWNER MPCODE\");\n        const code = \"write the output for this line of code: \\n\" + document.querySelector(\".code-area\").textContent;\n        console.log(code);\n        const response = await getGPTResponse(code);\n        setOutput(\"\".concat(response));\n    };\n    const handleOptimizeCode = async ()=>{\n        const code = \"optimize this line of code: \\n\" + document.querySelector(\".code-area\").textContent;\n        const response = await getGPTResponse(code);\n        setOutput(\"\".concat(response));\n    };\n    const handleExplainCode = async ()=>{\n        const code = \"Explain what this line of code does: \\n\" + document.querySelector(\".code-area\").textContent;\n        const response = await getGPTResponse(code);\n        setOutput(\"\".concat(response));\n    };\n    // interpreter...\n    //color changer\n    const [bgColor, setBgColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"black\");\n    const handleColorClick = ()=>{\n        setBgColor(bgColor === \"white\" ? \"black\" : \"white\");\n        setColor(color === \"black\" ? \"white\" : \"black\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"p-4 flex justify-between items-center border border-gray-800\",\n                style: {\n                    backgroundColor: bgColor,\n                    color: color\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleColorClick,\n                        className: \" text-lg font-bold\",\n                        children: \"◑\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-cyan-700 text-4xl\",\n                        children: \"MPCode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border border-gray-300 rounded-lg px-3 py-2 mr-2 pr-10\",\n                                style: {\n                                    backgroundColor: bgColor,\n                                    color: color\n                                },\n                                type: \"text\",\n                                placeholder: \"File name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"border border-gray-300 rounded-lg px-3 py-2 mr-12 cursor-not-allowed\",\n                                style: {\n                                    backgroundColor: bgColor,\n                                    color: color\n                                },\n                                disabled: true,\n                                title: \"Coming soon\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option1\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option2\",\n                                        children: \"java\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option3\",\n                                        children: \"javascript\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option4\",\n                                        children: \"C++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option5\",\n                                        children: \"C#\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option6\",\n                                        children: \"C\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"option7\",\n                                        children: \"Ruby\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: saverCode,\n                                className: \"text-black text-lg font-bold hover:bg-lime-900 hover:text-white rounded-md\",\n                                style: {\n                                    backgroundColor: bgColor,\n                                    color: color\n                                },\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                className: \" text-2xl ml-4 text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium\",\n                                children: \"EXIT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"code-editor\",\n                style: {\n                    backgroundColor: bgColor,\n                    color: color\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"line-numbers\",\n                        children: Array.from({\n                            length: 21\n                        }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: i + 1\n                            }, i + 1, false, {\n                                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: bgColor,\n                            color: color\n                        },\n                        className: \"code-area\",\n                        contentEditable: \"true\",\n                        spellCheck: \"flase\",\n                        children: savedCode.Code\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                style: {\n                    backgroundColor: bgColor,\n                    color: color\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRunCode,\n                        className: \"bg-gray-800 text-white py-2 px-4 rounded-l-md\",\n                        children: \"Run\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOptimizeCode,\n                        className: \"bg-green-400 text-white py-2 px-4\",\n                        children: \"Optimize\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleExplainCode,\n                        className: \"bg-purple-400 text-white py-2 px-4 rounded-r-md\",\n                        children: \"Explain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"output-area\",\n                style: {\n                    backgroundColor: bgColor,\n                    color: color\n                },\n                children: output\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poshm\\\\coder\\\\MPCODE\\\\app\\\\code\\\\CodeEditor.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CodeEditor, \"gwNGtqyieuJH/O4ISOJjsYcGB8A=\");\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvZGUvQ29kZUVkaXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ0E7QUFDa0I7QUFDZjtBQUNIO0FBQzFCLHlDQUF5QztBQUV6QyxNQUFNSyxhQUFhOztJQUNqQixvQkFBb0I7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLGNBQWM7SUFDZEMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxXQUFXLE1BQU1GLFNBQVNHO2dCQUNoQ0wsYUFBYUk7WUFDZixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELE1BQU0sd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsUUFBUTtJQUNSLE1BQU0sQ0FBQ08sVUFBU0MsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN4QyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNa0IsZUFBZSxPQUFPQztRQUUxQkYsUUFBUUcsU0FBU0MsY0FBYyxjQUFjQztRQUc3QyxJQUFJO1lBQ0YsTUFBTWQsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztnQkFDNURjLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsVUFBVTtvQkFBRVg7Z0JBQUs7WUFDOUI7WUFFQSxJQUFJUixTQUFTb0IsSUFBSTtnQkFDZixNQUFNQyxPQUFPLE1BQU1yQixTQUFTRztnQkFDNUJFLFFBQVFpQixJQUFJRCxLQUFLRSxVQUFVLDJCQUEyQjtZQUN4RCxPQUFPO2dCQUNMbEIsUUFBUUQsTUFBTSxVQUFVSixTQUFTd0I7WUFDbkM7UUFDRixFQUFFLE9BQU9wQixPQUFPO1lBQ2RDLFFBQVFELE1BQU0sVUFBVUE7UUFDMUI7SUFDQSxpQkFB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RSxNQUFLO2dDQUFJZixXQUFVOzBDQUFrRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvSCw4REFBQ007Z0JBQUlOLFdBQVU7Z0JBQWNDLE9BQU87b0JBQUVDLGlCQUFpQlI7b0JBQVNFLE9BQU9BO2dCQUFNOztrQ0FDM0UsOERBQUNVO3dCQUFJTixXQUFVO2tDQUNaZ0IsTUFBTUMsS0FBSzs0QkFBRUMsUUFBUTt3QkFBRyxHQUFHLENBQUNDLEdBQUdDLGtCQUM5Qiw4REFBQ0M7MENBQWtCRCxJQUFJOytCQUFaQSxJQUFJOzs7Ozs7Ozs7O2tDQUduQiw4REFBQ2Q7d0JBQUlMLE9BQU87NEJBQUVDLGlCQUFpQlI7NEJBQVNFLE9BQU9BO3dCQUFNO3dCQUFHSSxXQUFVO3dCQUFZc0IsaUJBQWdCO3dCQUFPQyxZQUFXO2tDQUFTeEUsVUFBVXlFOzs7Ozs7Ozs7Ozs7MEJBS3JJLDhEQUFDbEI7Z0JBQUlOLFdBQVU7Z0JBQU9DLE9BQU87b0JBQUVDLGlCQUFpQlI7b0JBQVNFLE9BQU9BO2dCQUFNOztrQ0FDcEUsOERBQUNPO3dCQUFPQyxTQUFTaEI7d0JBQWVZLFdBQVU7a0NBQWdEOzs7Ozs7a0NBQzFGLDhEQUFDRzt3QkFBT0MsU0FBU1o7d0JBQW9CUSxXQUFVO2tDQUFvQzs7Ozs7O2tDQUNuRiw4REFBQ0c7d0JBQU9DLFNBQVNYO3dCQUFtQk8sV0FBVTtrQ0FBa0Q7Ozs7Ozs7Ozs7OzswQkFFbEcsOERBQUN5QjtnQkFBSXpCLFdBQVU7Z0JBQWNDLE9BQU87b0JBQUVDLGlCQUFpQlI7b0JBQVNFLE9BQU9BO2dCQUFNOzBCQUFNaEI7Ozs7Ozs7O0FBR3pGO0dBeEpNOUI7S0FBQUE7QUEwSk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvZGUvQ29kZUVkaXRvci5qcz8wMTlmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9Db2RlRWRpdG9yLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vaW1wb3J0IHsgUHl0aG9uQ29uc29sZSB9IGZyb20gJ3B5b2RpZGUnXHJcblxyXG5jb25zdCBDb2RlRWRpdG9yID0gKCkgPT4ge1xyXG4gIC8vIGFsbCBiYWNrZW5kIGNvZGU6XHJcbiAgY29uc3QgW3NhdmVkQ29kZSwgc2V0U2F2ZWRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIC8vZ2V0IGZ1bmN0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvJyk7XHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0U2F2ZWRDb2RlKGpzb25EYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHBvc3QgXHJcbiAgY29uc3QgW2ZpbGVOYW1lLHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICBzZXRUZXh0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2RlLWFyZWEnKS50ZXh0Q29udGVudCk7XHJcbiAgICBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYWRkL25ldycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTsgLy8gUmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgLy8gaGFuZGxlU3VibWl0KClcclxuICB9O1xyXG4gIGNvbnN0IHNhdmVyQ29kZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBoYW5kbGVTdWJtaXQoKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy9ncHQgaW50ZWdyYXRpb25cclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEdQVFJlc3BvbnNlKHRleHQpIHtcclxuICAgIGNvbnNvbGUubG9nKG91dHB1dClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9lbmdpbmVzL2RhdmluY2kvY29tcGxldGlvbnMnLCB7XHJcbiAgICAgICAgcHJvbXB0OiB0ZXh0LFxyXG4gICAgICAgIG1heF90b2tlbnM6IDE1LFxyXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjIsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIHNrLUYybXBROHhJR3ozZ2lLdlNzd3hwVDNCbGJrRkpuSnA0cGpMbHd4MnpIRHZDemdCdycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLnRleHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSdW5Db2RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgd2luZG93LmFsZXJ0KFwiR1BUIFRPS0VOcyBXSElDSCBBUkUgVVNFRCBUTyBSVU4gVEhFIFBST0dSQU0gQVJFIEZJTklTSEVEIFxcbiBDT05UQUNUIFRIRSBPV05FUiBNUENPREVcIik7XHJcbiAgICBjb25zdCBjb2RlID0gXCJ3cml0ZSB0aGUgb3V0cHV0IGZvciB0aGlzIGxpbmUgb2YgY29kZTogXFxuXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29kZS1hcmVhJykudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zb2xlLmxvZyhjb2RlKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRHUFRSZXNwb25zZShjb2RlKTtcclxuICAgIHNldE91dHB1dChgJHtyZXNwb25zZX1gKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3B0aW1pemVDb2RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29kZSA9IFwib3B0aW1pemUgdGhpcyBsaW5lIG9mIGNvZGU6IFxcblwiICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvZGUtYXJlYScpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRHUFRSZXNwb25zZShjb2RlKTtcclxuICAgIHNldE91dHB1dChgJHtyZXNwb25zZX1gKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXhwbGFpbkNvZGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gXCJFeHBsYWluIHdoYXQgdGhpcyBsaW5lIG9mIGNvZGUgZG9lczogXFxuXCIgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29kZS1hcmVhJykudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEdQVFJlc3BvbnNlKGNvZGUpO1xyXG4gICAgc2V0T3V0cHV0KGAke3Jlc3BvbnNlfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gaW50ZXJwcmV0ZXIuLi5cclxuXHJcblxyXG5cclxuICAvL2NvbG9yIGNoYW5nZXJcclxuICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZSgnd2hpdGUnKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCdibGFjaycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xvckNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QmdDb2xvcihiZ0NvbG9yID09PSAnd2hpdGUnID8gJ2JsYWNrJyA6ICd3aGl0ZScpO1xyXG4gICAgc2V0Q29sb3IoY29sb3IgPT09ICdibGFjaycgPyAnd2hpdGUnIDogJ2JsYWNrJylcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTgwMFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH19PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29sb3JDbGlja30gY2xhc3NOYW1lPVwiIHRleHQtbGcgZm9udC1ib2xkXCIgPlxyXG4gICAgICAgICAg4peRXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jeWFuLTcwMCB0ZXh0LTR4bCc+TVBDb2RlPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHB4LTMgcHktMiBtci0yIHByLTEwXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLCBjb2xvcjogY29sb3IgfX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpbGUgbmFtZVwiID48L2lucHV0PlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtMyBweS0yIG1yLTEyIGN1cnNvci1ub3QtYWxsb3dlZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH19IGRpc2FibGVkIHRpdGxlPSdDb21pbmcgc29vbic+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcHRpb24xXCI+cHl0aG9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+amF2YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3B0aW9uM1wiPmphdmFzY3JpcHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjRcIj5DKys8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjVcIj5DIzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3B0aW9uNlwiPkM8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjdcIj5SdWJ5PC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZXJDb2RlfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtbGcgZm9udC1ib2xkIGhvdmVyOmJnLWxpbWUtOTAwIGhvdmVyOnRleHQtd2hpdGUgcm91bmRlZC1tZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH19ID5cclxuICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIiB0ZXh0LTJ4bCBtbC00IHRleHQtcmVkLTYwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIEVYSVRcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1lZGl0b3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsIGNvbG9yOiBjb2xvciB9fSA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLW51bWJlcnNcIj5cclxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMSB9LCAoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2kgKyAxfT57aSArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsIGNvbG9yOiBjb2xvciB9fSBjbGFzc05hbWU9XCJjb2RlLWFyZWFcIiBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgc3BlbGxDaGVjaz1cImZsYXNlXCI+e3NhdmVkQ29kZS5Db2RlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1lZGl0b3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsIGNvbG9yOiBjb2xvciB9fSA+XHJcbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInctZnVsbCBoLXNjcmVlbiByZXNpemUtbm9uZSBib3JkZXItMCBmb250LW1vbm8gdGV4dC1iYXNlIHAtNFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLCBjb2xvcjogY29sb3IgfX0gPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUnVuQ29kZX0gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1sLW1kXCI+UnVuPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcHRpbWl6ZUNvZGV9IGNsYXNzTmFtZT1cImJnLWdyZWVuLTQwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNFwiPk9wdGltaXplPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFeHBsYWluQ29kZX0gY2xhc3NOYW1lPVwiYmctcHVycGxlLTQwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLXItbWRcIj5FeHBsYWluPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cHJlIGNsYXNzTmFtZT1cIm91dHB1dC1hcmVhXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLCBjb2xvcjogY29sb3IgfX0gID57b3V0cHV0fTwvcHJlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVFZGl0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImF4aW9zIiwiQ29kZUVkaXRvciIsInNhdmVkQ29kZSIsInNldFNhdmVkQ29kZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJsb2ciLCJtZXNzYWdlIiwic3RhdHVzIiwic2F2ZXJDb2RlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwiZ2V0R1BUUmVzcG9uc2UiLCJwb3N0IiwicHJvbXB0IiwibWF4X3Rva2VucyIsInRlbXBlcmF0dXJlIiwiY2hvaWNlcyIsImhhbmRsZVJ1bkNvZGUiLCJ3aW5kb3ciLCJhbGVydCIsImNvZGUiLCJoYW5kbGVPcHRpbWl6ZUNvZGUiLCJoYW5kbGVFeHBsYWluQ29kZSIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwiY29sb3IiLCJzZXRDb2xvciIsImhhbmRsZUNvbG9yQ2xpY2siLCJuYXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiZGlzYWJsZWQiLCJ0aXRsZSIsIm9wdGlvbiIsInZhbHVlIiwiaHJlZiIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwic3BhbiIsImNvbnRlbnRFZGl0YWJsZSIsInNwZWxsQ2hlY2siLCJDb2RlIiwicHJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/code/CodeEditor.js\n"));

/***/ })

});