(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"insert-form\">\n  <div class=\"alert-info\">\n    create a new student\n    <button (click)=\"$event.target.parentElement.parentElement.style.display='none'\">X</button>\n  </div>\n  <input #x1 placeholder=\"name\">\n  <input #x2 placeholder=\"email\">\n  <input #x3 placeholder=\"s1\">\n  <input #x4 placeholder=\"s2\">\n  <input #x5 placeholder=\"s3\">\n  <button (click)=\"insert(x1,x2,x3,x4,x5)\">create student</button>\n</div>\n\n<div class=\"edit-form\" *ngIf=\"ob.id>0\">\n  <div class=\"alert-info\">\n    edit a existing student\n    <button (click)=\"$event.target.parentElement.parentElement.style.display='none'\">X</button>\n  </div>\n  <input #y1 type=\"hidden\" [value]=\"ob.id\">\n  <input #y2 placeholder=\"name\" [value]=\"ob.name\">\n  <input #y3 placeholder=\"email\" [value]=\"ob.email\">\n  <input #y4 placeholder=\"s1\" [value]=\"ob.s1\">\n  <input #y5 placeholder=\"s2\" [value]=\"ob.s2\">\n  <input #y6 placeholder=\"s3\" [value]=\"ob.s3\">\n  <p>total:{{ob.total}}</p>\n  <p>result:{{ob.result}}</p>\n  <button (click)=\"update(y1,y2,y3,y4,y5,y6)\">update student</button>\n</div>\n\n<!-- <button (click)=\"openCreateForm()\" class=\"btn-create-student\">create a student</button> -->\n\n\n\n<div class=\"table\" *ngIf=\"a.length>0\">\n  <h1>All Records {{a.length}}</h1>\n\n  <table>\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>name</th>\n        <th>email</th>\n        <th>s1</th>\n        <th>s2</th>\n        <th>s3</th>\n        <th>total</th>\n        <th>result</th>\n        <th>actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let x of a;let i=index;\">\n        <td>{{x.id}}</td>\n        <td>{{x.name}}</td>\n        <td>{{x.email}}</td>\n        <td>{{x.s1}}</td>\n        <td>{{x.s2}}</td>\n        <td>{{x.s3}}</td>\n        <td>{{x.total}}</td>\n        <td>{{x.result}}</td>\n        <td>\n          <button (click)=\"edit(i)\" class=\"edit-btn\">edit</button>\n          <button (click)=\"del(i)\" class=\"delete-btn\">delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\r\n{\r\n\tfont-family: verdana;\r\n}\r\n.insert-form\r\n{\r\n\twidth: 90%;\r\n\tbox-shadow: 0 0 10px black;\r\n\tpadding: 1%;\r\n\tmargin: 2%;\r\n}\r\n.alert-info\r\n{\r\n\tpadding: 1%;\r\n\tfont-size: 120%;\r\n\tbackground: rgba(0,0,255,0.1);\r\n\tmargin: 2%;\r\n\ttransition: 0.4s;\r\n}\r\n.alert-info>button\r\n{\r\n\tfloat: right;\r\n\tborder:0;\r\n\tbackground: transparent;\r\n\toutline:0;\r\n}\r\n.insert-form input\r\n{\r\n\tpadding: 0.5%;\r\n\tmargin: 0.3%;\r\n\tborder:1px solid grey;\r\n}\r\n.insert-form>button\r\n{\r\n\tdisplay: block;\r\n\tmargin-top: 2%;\r\n\tbackground: slateblue;\r\n\tpadding: 1%;\r\n\tfont-weight: bold;\r\n\tcolor:white;\r\n}\r\n.edit-form\r\n{\r\n\twidth: 90%;\r\n\tbox-shadow: 0 0 10px black;\r\n\tpadding: 1%;\r\n\tmargin: 2%;\r\n\tbackground: #f1f1f1;\r\n}\r\n.alert-info\r\n{\r\n\tpadding: 1%;\r\n\tfont-size: 120%;\r\n\tbackground: rgba(0,0,255,0.1);\r\n\tmargin: 2%;\r\n\ttransition: 0.4s;\r\n}\r\n.alert-info>button\r\n{\r\n\tfloat: right;\r\n\tborder:0;\r\n\tbackground: transparent;\r\n\toutline:0;\r\n}\r\n.edit-form input\r\n{\r\n\tpadding: 0.5%;\r\n\tmargin: 0.3%;\r\n\tborder:1px solid grey;\r\n}\r\n.edit-form>button\r\n{\r\n\tdisplay: block;\r\n\tmargin-top: 2%;\r\n\tbackground: slateblue;\r\n\tpadding: 1%;\r\n\tfont-weight: bold;\r\n\tcolor:white;\r\n}\r\n.btn-create-student\r\n{\r\n\tpadding: 1.5%;\r\n\tfont-size: 120%;\r\n\tfont-weight: bold;\r\n\tborder:0;\r\n\tbackground: #222;\r\n\tcolor:white;\r\n\tfont-family: calibri;\r\n\toutline:0;\r\n}\r\n.table\r\n{\r\n\toverflow: auto;\r\n\theight: 200px;\r\n\tborder:1px solid black;\r\n\tpadding: 2%;\r\n\tmargin: 2%;\r\n\tbox-shadow:0 10px 10px black;\r\n}\r\ntable\r\n{\r\n\twidth: 100%;\r\n}\r\nthead\r\n{\r\n\tbackground: black;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n}\r\ntbody>tr\r\n{\r\n\ttext-align: center;\r\n}\r\n.delete-btn,\r\n.edit-btn\r\n{\r\n\tbackground: teal;\r\n\tborder:0;\r\n\tpadding: 4.5%;\r\n\tcolor:white;\r\n\tfont-weight: bold;\r\n\tfont-family: verdana;\r\n\tmargin: 1%;\r\n}\r\n.delete-btn\r\n{\r\n\tbackground: tomato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsVUFBVTtDQUNWLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0IsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLFlBQVk7Q0FDWixRQUFRO0NBQ1IsdUJBQXVCO0NBQ3ZCLFNBQVM7QUFDVjtBQUVBOztDQUVDLGFBQWE7Q0FDYixZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxVQUFVO0NBQ1YsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0IsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLFlBQVk7Q0FDWixRQUFRO0NBQ1IsdUJBQXVCO0NBQ3ZCLFNBQVM7QUFDVjtBQUVBOztDQUVDLGFBQWE7Q0FDYixZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFJQTs7Q0FFQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsU0FBUztBQUNWO0FBRUE7O0NBRUMsY0FBYztDQUNkLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFVBQVU7Q0FDViw0QkFBNEI7QUFDN0I7QUFFQTs7Q0FFQyxXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjtBQUNBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOzs7Q0FHQyxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLGFBQWE7Q0FDYixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIipcclxue1xyXG5cdGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG59XHJcbi5pbnNlcnQtZm9ybVxyXG57XHJcblx0d2lkdGg6IDkwJTtcclxuXHRib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuXHRwYWRkaW5nOiAxJTtcclxuXHRtYXJnaW46IDIlO1xyXG59XHJcbi5hbGVydC1pbmZvXHJcbntcclxuXHRwYWRkaW5nOiAxJTtcclxuXHRmb250LXNpemU6IDEyMCU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMjU1LDAuMSk7XHJcblx0bWFyZ2luOiAyJTtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbi5hbGVydC1pbmZvPmJ1dHRvblxyXG57XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGJvcmRlcjowO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG91dGxpbmU6MDtcclxufVxyXG5cclxuLmluc2VydC1mb3JtIGlucHV0XHJcbntcclxuXHRwYWRkaW5nOiAwLjUlO1xyXG5cdG1hcmdpbjogMC4zJTtcclxuXHRib3JkZXI6MXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLmluc2VydC1mb3JtPmJ1dHRvblxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLXRvcDogMiU7XHJcblx0YmFja2dyb3VuZDogc2xhdGVibHVlO1xyXG5cdHBhZGRpbmc6IDElO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcbi5lZGl0LWZvcm1cclxue1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcblx0cGFkZGluZzogMSU7XHJcblx0bWFyZ2luOiAyJTtcclxuXHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi5hbGVydC1pbmZvXHJcbntcclxuXHRwYWRkaW5nOiAxJTtcclxuXHRmb250LXNpemU6IDEyMCU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMjU1LDAuMSk7XHJcblx0bWFyZ2luOiAyJTtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbi5hbGVydC1pbmZvPmJ1dHRvblxyXG57XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGJvcmRlcjowO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdG91dGxpbmU6MDtcclxufVxyXG5cclxuLmVkaXQtZm9ybSBpbnB1dFxyXG57XHJcblx0cGFkZGluZzogMC41JTtcclxuXHRtYXJnaW46IDAuMyU7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG59XHJcbi5lZGl0LWZvcm0+YnV0dG9uXHJcbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tdG9wOiAyJTtcclxuXHRiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XHJcblx0cGFkZGluZzogMSU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bi1jcmVhdGUtc3R1ZGVudFxyXG57XHJcblx0cGFkZGluZzogMS41JTtcclxuXHRmb250LXNpemU6IDEyMCU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Ym9yZGVyOjA7XHJcblx0YmFja2dyb3VuZDogIzIyMjtcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LWZhbWlseTogY2FsaWJyaTtcclxuXHRvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi50YWJsZVxyXG57XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cdG1hcmdpbjogMiU7XHJcblx0Ym94LXNoYWRvdzowIDEwcHggMTBweCBibGFjaztcclxufVxyXG5cclxudGFibGVcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoZWFkXHJcbntcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGJvZHk+dHJcclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4sXHJcbi5lZGl0LWJ0blxyXG57XHJcblx0YmFja2dyb3VuZDogdGVhbDtcclxuXHRib3JkZXI6MDtcclxuXHRwYWRkaW5nOiA0LjUlO1xyXG5cdGNvbG9yOndoaXRlO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG5cdG1hcmdpbjogMSU7XHJcbn1cclxuLmRlbGV0ZS1idG5cclxue1xyXG5cdGJhY2tncm91bmQ6IHRvbWF0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.a = [];
        this.ob = { id: 0, name: "", email: "", s1: 0, s2: 0, s3: 0, total: 0, result: "" };
        this.load();
    }
    insert(t1, t2, t3, t4, t5) {
        this.ob.id = 0;
        let id = 1;
        if (this.a.length > 0) {
            id = this.a[this.a.length - 1].id + 1;
        }
        let name = t1.value;
        let email = t2.value;
        let s1 = +t3.value;
        let s2 = +t4.value;
        let s3 = +t5.value;
        let total = s1 + s2 + s3;
        let result = total < 150 ? "fail" : "pass";
        let ob = {
            id: id,
            name: name,
            email: email,
            s1: s1,
            s2: s2,
            s3: s3,
            total: total,
            result: result
        };
        if (this.a.filter(item => { return item.email == ob.email; }).length == 0) {
            this.a.push(ob);
            this.save();
        }
    }
    edit(index) {
        this.ob = this.a[index];
    }
    update(t1, t2, t3, t4, t5, t6) {
        let id = this.ob.id;
        let name = t2.value;
        let email = t3.value;
        let s1 = +t4.value;
        let s2 = +t5.value;
        let s3 = +t6.value;
        let total = s1 + s2 + s3;
        let result = total < 150 ? "fail" : "pass";
        let ob = { id: id, name: name, email: email, s1: s1, s2: s2, s3: s3, total: total, result: result };
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i].id == this.ob.id) {
                this.a[i] = ob;
                this.save();
            }
        }
        this.ob.id = 0;
    }
    del(index) {
        this.ob.id = 0;
        this.a.splice(index, 1);
        this.save();
    }
    save() {
        localStorage.a = JSON.stringify(this.a);
    }
    load() {
        if (localStorage.a) {
            this.a = JSON.parse(localStorage.a);
        }
        this.ob.id = 0;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\p1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map