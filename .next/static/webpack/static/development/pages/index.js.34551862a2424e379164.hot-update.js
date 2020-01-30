webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\NextTutor\\components\\Prices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState[0],
      setCurrency = _useState[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("li", {
    className: "list-group-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Bitcoin rate for ", props.bpi[currency].description, ":", " ", __jsx("span", {
    className: "badge-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.bpi[currency].code), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.bpi[currency].rate))), __jsx("div", {
    "class": "btn-group m-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick(event) {
      return setCurrency(event.target.value);
    },
    type: "button",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "USD"), __jsx("button", {
    onClick: function onClick(event) {
      return setCurrency(event.target.value);
    },
    type: "button",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "EUR"), __jsx("button", {
    onClick: function onClick(event) {
      return console.log(event.target.value);
    },
    type: "button",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "GBP")));
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.34551862a2424e379164.hot-update.js.map