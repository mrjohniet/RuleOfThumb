(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"contenedor\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"row menu\">\n    <div class=\"col-lg-6 col-2\">\n      <h2 class=\"title\"><a [routerLink]=\"'home'\">Rule of Thumb</a></h2>\n    </div>\n    <div class=\"col-lg-6 col-10 d-flex flex-row justify-content-around\">\n          <a [routerLink]=\"'past-trials'\" class=\"menu-item\">Past Trials</a>\n          <a [routerLink]=\"'how-it-works'\" class=\"menu-item\">How It Works</a>\n          <a [routerLink]=\"'log-in'\" class=\"menu-item\">Log In / Sign Up</a>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/featured-character/featured-character.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/featured-character/featured-character.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"row container-featured\">\n        <div class=\"col-xl-6 \">\n            <div class=\"description\">\n                <span class=\"text\">What's your opinion on</span>\n                <h1 class=\"huge-text\">{{dataCharacter.name}}</h1>\n                <p class=\"text\">{{dataCharacter.description}}</p>\n                <span>\n                    <fa-icon [icon]=\"faWikipediaW\"></fa-icon>\n                <a [attr.href]=\"dataCharacter.link\" target=\"_blank\">&nbsp;More Information</a>\n                </span>\n                <h2 class=\"huge-text-2\">What's your verdict?</h2>\n            </div>\n            <div class=\"row votes-container\" style=\"width: 100%\">\n                <div class=\"col-6 text-center upvote\">\n                        <i class=\"material-icons thumbs-icon\">thumb_up </i>\n                </div>\n                <div class=\"col-6 text-center downvote\">\n                        <i class=\"material-icons thumbs-icon\">thumb_down </i>\n                </div>\n            </div>\n        </div>   \n    </div>\n    <div class=\"row closure-bar\">\n        <div class=\"col-4 closure-col-1 justify-content-end\">\n            <span>CLOSING IN</span>\n        </div>\n        <div class=\"col-8 closure-col-2\">\n            <span><b>22</b> days</span>\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<featured-character></featured-character>\n<voting></voting>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/voting/voting.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/voting/voting.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"voting-container\">\n\n    <div *ngIf=\"visibilidadMensaje\" class=\" row speak-out-container\">\n        <div class=\"col-3\">\n            <span class=\"span-speak\">Speak out.Be Heard.</span>\n            <h2><b>Be Counted.</b></h2>\n        </div>\n        <div class=\"col-8 d-flex align-items-center\">\n            <p>{{description}}</p>\n        </div>\n        <div class=\"col-1 d-flex text-center justify-content-center align-items-center\">\n            <span style=\"cursor: pointer;font-size: 1.25rem;\" (click)=\"visibilidadMensaje=false\">X</span>\n        </div>\n    </div>\n    <h1 class=\"votes-title\">Votes</h1>\n    <div class=\"row\" [formGroup]=\"formCharacters\">\n        <div *ngFor=\"let item of characters;let i=index\" formArrayName=\"characters\" class=\"col-lg-6 mt-4\" [ngClass]=\"{'no-padding-left':i%2 == 0,'no-padding-right':i%2!=0}\">\n            <div class=\"background\"></div>\n            <div formGroupName=\"{{i}}\" class=\"character-container\"\n            [style.backgroundImage]=\"'url(assets/images/' + item.image +')'\">\n            <div class=\"row character-info\">\n                    <div class=\"col-1\" style=\"padding: 0.5rem 0;color: white;\">\n                        <div class=\"vote-indicator\" [ngClass]=\"{'label-upvote':formCharacters.controls.characters.at(i).controls.upvotes.value >=\n                                          formCharacters.controls.characters.at(i).controls.downvotes.value,\n                                          'label-downvote':formCharacters.controls.characters.at(i).controls.upvotes.value < formCharacters.controls.characters.at(i).controls.downvotes.value  }\">\n                            <i class=\"material-icons thumbs-icon\" >\n                                    {{formCharacters.controls.characters.at(i).controls.upvotes.value >= formCharacters.controls.characters.at(i).controls.downvotes.value ? 'thumb_up':'thumb_down'}} \n                            </i>\n                        </div>\n                    </div>\n                    <div class=\"col-11\">\n                        <h1 class=\"name\">{{item.name}}</h1>\n                        <small><b>1 month ago</b>&nbsp;in&nbsp;{{item.category}}</small>\n                        <p>{{item.description}}</p>\n                        <div *ngIf=\"formCharacters.controls.characters.at(i).controls.executedVote.value==false\" class=\"d-flex flex-row\">\n                           \n                                <input type=\"radio\" name=\"vote\" value=\"true\" id=\"upvote{{i}}\" formControlName=\"vote\"/>\n                                <label class=\"label-upvote\" for=\"upvote{{i}}\"><i class=\"material-icons thumbs-icon\">thumb_up </i></label>\n                               \n                                <input type=\"radio\"  name=\"vote\" value=\"false\" id=\"downvote{{i}}\"formControlName=\"vote\" />\n                                <label class=\"label-downvote\" for=\"downvote{{i}}\"><i class=\"material-icons thumbs-icon\">thumb_down </i></label>\n\n                                <button class=\"vote-now\" (click)=\"vote(formCharacters.controls.characters.at(i).controls.vote.value,i)\">Vote Now</button>\n                            \n                        </div>\n                        <div *ngIf=\"formCharacters.controls.characters.at(i).controls.executedVote.value==true\">\n                            <p >Thanks for voting!</p>\n                            <button class=\"vote-now\" (click)=\"restartVote(i)\">Vote Again</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"d-flex flex-row vote-container\">\n                    <div class=\"total-upvotes\" [style.width]=\"(formCharacters.controls.characters.at(i).controls.upvotes.value*100)/formCharacters.controls.characters.at(i).controls.totalVotes.value+'%'\" >\n                            <i class=\"material-icons thumbs-icon\">thumb_up </i>&nbsp;\n                            {{(formCharacters.controls.characters.at(i).controls.upvotes.value*100)/(formCharacters.controls.characters.at(i).controls.totalVotes.value)| number:'1.1-1'}}%\n                    </div>\n                    <div class=\"total-downvotes\" [style.width]=\"(formCharacters.controls.characters.at(i).controls.downvotes.value*100)/formCharacters.controls.characters.at(i).controls.totalVotes.value+'%'\">\n                            <i class=\"material-icons thumbs-icon\">thumb_down </i>&nbsp;    \n                            {{(formCharacters.controls.characters.at(i).controls.downvotes.value*100)/(formCharacters.controls.characters.at(i).controls.totalVotes.value)| number:'1.1-1'}}%\n                    </div>\n                </div>\n            </div> \n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-it-works/how-it-works.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-it-works/how-it-works.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-section\">\n        <h2>How it works</h2>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-section\">\n        <h2>Log In / Sign Up</h2>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/past-trials/past-trials.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/past-trials/past-trials.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-section\">\n    <h2>Past Trials</h2>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _past_trials_past_trials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./past-trials/past-trials.component */ "./src/app/past-trials/past-trials.component.ts");
            /* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            var routes = [
                {
                    path: 'home',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                },
                {
                    path: 'past-trials',
                    component: _past_trials_past_trials_component__WEBPACK_IMPORTED_MODULE_4__["PastTrialsComponent"],
                },
                {
                    path: 'how-it-works',
                    component: _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__["HowItWorksComponent"],
                },
                {
                    path: 'log-in',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                },
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  position: relative;\n  width: 67%;\n  margin: 0 auto;\n}\n\n.title {\n  color: white;\n}\n\n.title a {\n  text-decoration: none;\n  color: white;\n}\n\n.menu {\n  position: absolute;\n  width: 67%;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 3rem 8rem;\n  margin: 0 auto;\n}\n\n.menu .menu-item {\n  color: #dedede;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.menu li {\n  list-style-type: none;\n  display: inline-block;\n}\n\n@media (max-width: 1864px) {\n  .contenedor {\n    width: 100%;\n  }\n}\n\n@media (max-width: 968px) {\n  .menu {\n    padding: 1em 1em;\n    width: 100%;\n  }\n\n  .contenedor {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFJ1bGVPZlRodW1iL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGtCQUFBO0VBQ0EsVUFKYTtFQUtiLGNBQUE7QUNMSjs7QURRQTtFQUFPLFlBVkM7QUNNUjs7QURJc0I7RUFBRSxxQkFBQTtFQUFzQixZQVZ0QztBQ1VSOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQVhhO0VBWWIsTUFBQTtFQUFNLE9BQUE7RUFBUSxRQUFBO0VBQ2Qsa0JBaEJVO0VBaUJWLGNBQUE7QUNJSjs7QURISTtFQUFXLGNBaEJKO0VBZ0JxQixlQUFBO0VBQWdCLHFCQUFBO0FDUWhEOztBRE5JO0VBQUkscUJBQUE7RUFBc0IscUJBQUE7QUNVOUI7O0FEUEE7RUFDSTtJQUFZLFdBQUE7RUNXZDtBQUNGOztBRFJBO0VBQ0k7SUFBTSxnQkFBQTtJQUFpQixXQUFBO0VDWXpCOztFRFhFO0lBQVksV0FBQTtFQ2VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJHBhZGRpbmctbmF2OiAzcmVtIDhyZW07XHJcbiRibGFuY286d2hpdGU7XHJcbiRncmlzLW1lbnU6I2RlZGVkZTtcclxuJHdpZHRoLWNvbnRhaW5lcjo2NyU7XHJcblxyXG4uY29udGVuZWRvcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiR3aWR0aC1jb250YWluZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRpdGxle2NvbG9yOiRibGFuY287IGF7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAkYmxhbmNvO319XHJcbi5tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiR3aWR0aC1jb250YWluZXI7XHJcbiAgICB0b3A6MDtsZWZ0OiAwO3JpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmctbmF2O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAubWVudS1pdGVte2NvbG9yOiRncmlzLW1lbnU7Y3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIGxpIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE4NjRweCkge1xyXG4gICAgLmNvbnRlbmVkb3J7d2lkdGg6IDEwMCU7fVxyXG4gIH1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgIC5tZW51e3BhZGRpbmc6IDFlbSAxZW07d2lkdGg6IDEwMCU7fVxyXG4gICAgLmNvbnRlbmVkb3J7d2lkdGg6IDEwMCU7fVxyXG4gIH0iLCIuY29udGVuZWRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY3JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjclO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAzcmVtIDhyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1lbnUgLm1lbnUtaXRlbSB7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tZW51IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxODY0cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcbiAgLm1lbnUge1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGVuZWRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'RuleOfThumb';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _home_featured_character_featured_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/featured-character/featured-character.component */ "./src/app/home/featured-character/featured-character.component.ts");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _past_trials_past_trials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./past-trials/past-trials.component */ "./src/app/past-trials/past-trials.component.ts");
            /* harmony import */ var _home_voting_voting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/voting/voting.component */ "./src/app/home/voting/voting.component.ts");
            /* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _home_featured_character_featured_character_component__WEBPACK_IMPORTED_MODULE_8__["FeaturedCharacterComponent"],
                        _past_trials_past_trials_component__WEBPACK_IMPORTED_MODULE_10__["PastTrialsComponent"],
                        _home_voting_voting_component__WEBPACK_IMPORTED_MODULE_11__["VotingComponent"],
                        _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_12__["HowItWorksComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/featured-character/featured-character.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/home/featured-character/featured-character.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-featured {\n  background: linear-gradient(to bottom, rgba(31, 31, 31, 0.8), rgba(255, 255, 255, 0) 25%), url('papa_francisco.jpg');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 39vw;\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: 12rem 8vw;\n}\n\n.description {\n  background: #3a3a3a;\n  padding: 2.25rem 2rem 2rem;\n  background: #505050cc;\n  color: #dedede;\n}\n\n.description p {\n  font-size: 1.25rem;\n  margin-top: 1rem;\n}\n\n.description .huge-text {\n  font-size: 3.25rem;\n  color: #fff;\n}\n\n.description a {\n  text-decoration: none;\n  color: #dedede;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #dedede;\n}\n\n.description fa-icon {\n  color: #fff;\n}\n\n.description .huge-text-2 {\n  font-size: 1.25rem;\n  color: #fff;\n  font-weight: 600;\n  margin-top: 2rem;\n}\n\n.votes-container {\n  width: 100%;\n  padding: 0;\n}\n\n.votes-container .thumbs-icon {\n  font-size: 2.5rem;\n  color: #fff;\n  line-height: 5rem;\n}\n\n.votes-container .upvote {\n  background: #2dbcb4;\n  background-color: #2dbcb4cc;\n  cursor: pointer;\n}\n\n.votes-container .upvote:hover {\n  background-color: #2dbcb4;\n}\n\n.votes-container .downvote {\n  background: #fcb230;\n  background-color: #fcb230e3;\n  cursor: pointer;\n}\n\n.votes-container .downvote:hover {\n  background-color: #fcb230;\n}\n\n.closure-bar {\n  width: 100%;\n  margin: -3.25rem 0;\n}\n\n.closure-bar .closure-col-1 {\n  background-color: rgba(80, 80, 80, 0.3);\n  text-align: end;\n  color: white;\n  padding: 10px;\n  font-size: 0.8rem;\n}\n\n.closure-bar .closure-col-2 {\n  background-color: rgba(243, 243, 243, 0.8);\n  text-align: start;\n  color: #1f1f1f;\n  padding: 2px 1rem;\n  font-size: 2rem;\n}\n\n@media (max-width: 1864px) {\n  .container-featured {\n    height: auto;\n    background-size: cover;\n  }\n}\n\n@media (max-width: 968px) {\n  .container-featured {\n    padding: 4rem 0;\n    height: auto;\n    background-size: cover;\n    background-position: center;\n  }\n\n  .description {\n    padding: 1.25rem 1rem 1rem;\n  }\n  .description p {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mZWF0dXJlZC1jaGFyYWN0ZXIvRDpcXFJ1bGVPZlRodW1iL3NyY1xcYXBwXFxob21lXFxmZWF0dXJlZC1jaGFyYWN0ZXJcXGZlYXR1cmVkLWNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9mZWF0dXJlZC1jaGFyYWN0ZXIvZmVhdHVyZWQtY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBRUksb0hBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQWZlO0FDRW5COztBRGdCQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkE3Qm9CO0VBOEJwQixjQTVCUTtBQ2VaOztBRGNJO0VBQUUsa0JBQUE7RUFBa0IsZ0JBQUE7QUNWeEI7O0FEV0k7RUFBVyxrQkFBQTtFQUFtQixXQTdCM0I7QUNzQlA7O0FEUUk7RUFBRSxxQkFBQTtFQUFzQixjQS9CaEI7RUErQmtDLGlCQUFBO0VBQWtCLGdDQUFBO0FDRmhFOztBREdJO0VBQVEsV0EvQkw7QUMrQlA7O0FEQ0k7RUFBYSxrQkFBQTtFQUFtQixXQWhDN0I7RUFnQzJDLGdCQUFBO0VBQWlCLGdCQUFBO0FDS25FOztBREZBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNLSjs7QURKSTtFQUFjLGlCQUFBO0VBQW1CLFdBdEM5QjtFQXNDMkMsaUJBQUE7QUNTbEQ7O0FEUkk7RUFBUSxtQkFwQ0c7RUFvQ3VCLDJCQXRDeEI7RUFzQ3VELGVBQUE7QUNhckU7O0FEYnNGO0VBQWMseUJBcENyRjtBQ29EZjs7QURmSTtFQUFVLG1CQXBDRztFQW9DeUIsMkJBdEMxQjtFQXNDNEQsZUFBQTtBQ29CNUU7O0FEcEI2RjtFQUFnQix5QkFwQzVGO0FDMkRqQjs7QURwQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUN1Qko7O0FEdEJJO0VBQWUsdUNBeENJO0VBd0NvQyxlQUFBO0VBQWdCLFlBQUE7RUFBYSxhQUFBO0VBQWMsaUJBQUE7QUM2QnRHOztBRDVCSTtFQUFlLDBDQXhDTTtFQXdDb0MsaUJBQUE7RUFBa0IsY0FBQTtFQUF1QixpQkFBQTtFQUFrQixlQUFBO0FDbUN4SDs7QUQvQkE7RUFDSTtJQUFvQixZQUFBO0lBQWEsc0JBQUE7RUNvQ25DO0FBQ0Y7O0FEbENBO0VBQ0k7SUFBb0IsZUFBQTtJQUFnQixZQUFBO0lBQWEsc0JBQUE7SUFBdUIsMkJBQUE7RUN3QzFFOztFRHZDRTtJQUFhLDBCQUFBO0VDMkNmO0VEM0MwQztJQUFFLFNBQUE7RUM4QzVDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2ZlYXR1cmVkLWNoYXJhY3Rlci9mZWF0dXJlZC1jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhY2tncm91bmQtZGVzY3JpcHRpb246IzUwNTA1MGNjO1xyXG4kY29sdW1uLXBhZGRpbmc6MTVweDtcclxuJGNvbG9yLXRleHQ6I2RlZGVkZTtcclxuJHdoaXRlOiNmZmY7XHJcbiR1cHZvdGUtY29sb3I6IzJkYmNiNGNjO1xyXG4kZG93bnZvdGUtY29sb3I6I2ZjYjIzMGUzO1xyXG4kdXB2b3RlLWNvbG9yMjojMmRiY2I0O1xyXG4kZG93bnZvdGUtY29sb3IyOiNmY2IyMzA7XHJcbiRwYWRkaW5nLWNvbnRhaW5lcjoxMnJlbSA4dnc7XHJcbiRiYWNrZ3JvdW5kLWNsb3NpbmctaW46cmdiYSg4MCwgODAsIDgwLCAwLjMpO1xyXG4kYmFja2dyb3VuZC1jbG9zaW5nLWRheXM6cmdiYSgyNDMsIDI0MywgMjQzLCAwLjgpO1xyXG5cclxuLmNvbnRhaW5lci1mZWF0dXJlZHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDMxLCAzMSwgMzEsIDAuOCkgLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDI1JSksdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXBhX2ZyYW5jaXNjby5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOXZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzokcGFkZGluZy1jb250YWluZXI7IFxyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBwYWRkaW5nOiAyLjI1cmVtIDJyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWRlc2NyaXB0aW9uO1xyXG4gICAgY29sb3I6JGNvbG9yLXRleHQ7XHJcbiAgICBwe2ZvbnQtc2l6ZToxLjI1cmVtO21hcmdpbi10b3A6MXJlbTt9XHJcbiAgICAuaHVnZS10ZXh0e2ZvbnQtc2l6ZTogMy4yNXJlbTtjb2xvcjogJHdoaXRlO31cclxuICAgIGF7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiRjb2xvci10ZXh0O2ZvbnQtc2l6ZTogMC45cmVtO2JvcmRlci1ib3R0b206c29saWQgMXB4ICRjb2xvci10ZXh0O31cclxuICAgIGZhLWljb257Y29sb3I6ICR3aGl0ZTt9XHJcbiAgICAuaHVnZS10ZXh0LTJ7Zm9udC1zaXplOiAxLjI1cmVtO2NvbG9yOiAkd2hpdGU7Zm9udC13ZWlnaHQ6IDYwMDttYXJnaW4tdG9wOiAycmVtO31cclxufVxyXG5cclxuLnZvdGVzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC50aHVtYnMtaWNvbnsgZm9udC1zaXplOiAyLjVyZW07IGNvbG9yOiR3aGl0ZTtsaW5lLWhlaWdodDogNXJlbTsgfVxyXG4gICAgLnVwdm90ZXtiYWNrZ3JvdW5kOiR1cHZvdGUtY29sb3IyO2JhY2tncm91bmQtY29sb3I6JHVwdm90ZS1jb2xvcjtjdXJzb3I6IHBvaW50ZXI7fS51cHZvdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogJHVwdm90ZS1jb2xvcjI7fVxyXG4gICAgLmRvd252b3Rle2JhY2tncm91bmQ6JGRvd252b3RlLWNvbG9yMjtiYWNrZ3JvdW5kLWNvbG9yOiAkZG93bnZvdGUtY29sb3I7Y3Vyc29yOiBwb2ludGVyO30uZG93bnZvdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogJGRvd252b3RlLWNvbG9yMjt9XHJcbn1cclxuXHJcbi5jbG9zdXJlLWJhcntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW46LTMuMjVyZW0gMDtcclxuICAgIC5jbG9zdXJlLWNvbC0xe2JhY2tncm91bmQtY29sb3I6JGJhY2tncm91bmQtY2xvc2luZy1pbjt0ZXh0LWFsaWduOiBlbmQ7Y29sb3I6IHdoaXRlO3BhZGRpbmc6IDEwcHg7Zm9udC1zaXplOiAwLjhyZW07fVxyXG4gICAgLmNsb3N1cmUtY29sLTJ7YmFja2dyb3VuZC1jb2xvcjokYmFja2dyb3VuZC1jbG9zaW5nLWRheXM7dGV4dC1hbGlnbjogc3RhcnQ7Y29sb3I6IHJnYigzMSwgMzEsIDMxKTtwYWRkaW5nOiAycHggMXJlbTtmb250LXNpemU6IDJyZW07fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE4NjRweCkge1xyXG4gICAgLmNvbnRhaW5lci1mZWF0dXJlZHtoZWlnaHQ6IGF1dG87YmFja2dyb3VuZC1zaXplOiBjb3Zlcn1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgIC5jb250YWluZXItZmVhdHVyZWR7cGFkZGluZzogNHJlbSAwO2hlaWdodDogYXV0bztiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjt9XHJcbiAgICAuZGVzY3JpcHRpb257cGFkZGluZzogMS4yNXJlbSAxcmVtIDFyZW07cHttYXJnaW46MH19XHJcbiAgfVxyXG5cclxuIiwiLmNvbnRhaW5lci1mZWF0dXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzEsIDMxLCAzMSwgMC44KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAyNSUpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcGFfZnJhbmNpc2NvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM5dnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTJyZW0gOHZ3O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBwYWRkaW5nOiAyLjI1cmVtIDJyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogIzUwNTA1MGNjO1xuICBjb2xvcjogI2RlZGVkZTtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmRlc2NyaXB0aW9uIC5odWdlLXRleHQge1xuICBmb250LXNpemU6IDMuMjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRlc2NyaXB0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG59XG4uZGVzY3JpcHRpb24gZmEtaWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRlc2NyaXB0aW9uIC5odWdlLXRleHQtMiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi52b3Rlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi52b3Rlcy1jb250YWluZXIgLnRodW1icy1pY29uIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogNXJlbTtcbn1cbi52b3Rlcy1jb250YWluZXIgLnVwdm90ZSB7XG4gIGJhY2tncm91bmQ6ICMyZGJjYjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGJjYjRjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZvdGVzLWNvbnRhaW5lciAudXB2b3RlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkYmNiNDtcbn1cbi52b3Rlcy1jb250YWluZXIgLmRvd252b3RlIHtcbiAgYmFja2dyb3VuZDogI2ZjYjIzMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYjIzMGUzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udm90ZXMtY29udGFpbmVyIC5kb3dudm90ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2IyMzA7XG59XG5cbi5jbG9zdXJlLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IC0zLjI1cmVtIDA7XG59XG4uY2xvc3VyZS1iYXIgLmNsb3N1cmUtY29sLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5jbG9zdXJlLWJhciAuY2xvc3VyZS1jb2wtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC44KTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjMWYxZjFmO1xuICBwYWRkaW5nOiAycHggMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTg2NHB4KSB7XG4gIC5jb250YWluZXItZmVhdHVyZWQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcbiAgLmNvbnRhaW5lci1mZWF0dXJlZCB7XG4gICAgcGFkZGluZzogNHJlbSAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMS4yNXJlbSAxcmVtIDFyZW07XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/featured-character/featured-character.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/home/featured-character/featured-character.component.ts ***!
          \*************************************************************************/
        /*! exports provided: FeaturedCharacterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedCharacterComponent", function () { return FeaturedCharacterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
            var FeaturedCharacterComponent = /** @class */ (function () {
                function FeaturedCharacterComponent() {
                    this.dataCharacter = {
                        name: "Pope Francis",
                        description: "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
                        link: "https://en.wikipedia.org/wiki/Pope_Francis", closureDate: ""
                    };
                    this.faWikipediaW = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWikipediaW"];
                }
                FeaturedCharacterComponent.prototype.ngOnInit = function () {
                };
                return FeaturedCharacterComponent;
            }());
            FeaturedCharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'featured-character',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured-character.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/featured-character/featured-character.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./featured-character.component.scss */ "./src/app/home/featured-character/featured-character.component.scss")).default]
                })
            ], FeaturedCharacterComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/voting/voting.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/home/voting/voting.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".voting-container {\n  background-color: white;\n  padding: 1.5em 8em;\n  margin-top: 3.25rem;\n}\n\n.speak-out-container {\n  background-color: #ebebeb;\n}\n\n.speak-out-container .span-speak {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n\n.speak-out-container p {\n  font-size: 0.9rem;\n}\n\n.votes-title {\n  margin: 3rem 0;\n  font-weight: 300;\n}\n\n.background {\n  position: absolute;\n  width: 97%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(20, 20, 20, 0.8), rgba(31, 31, 31, 0.5) 40%, rgba(255, 255, 255, 0) 100%);\n  background-size: cover;\n  padding-right: 15px;\n}\n\n.character-container {\n  width: 100%;\n  height: 500px;\n  background-size: cover;\n}\n\n.no-padding-left {\n  padding-left: 0 !important;\n}\n\n.no-padding-right {\n  padding-right: 0 !important;\n}\n\n.character-info {\n  width: 100%;\n  padding-top: 40%;\n}\n\n.character-info .name {\n  color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.character-info small {\n  color: white;\n  vertical-align: super;\n}\n\n.character-info p {\n  color: #ebebeb;\n  padding-right: 1rem;\n}\n\n.character-info .vote-now {\n  font-size: 0.9rem;\n  background: #3a3a3a;\n  background: #221e1f62;\n  color: white;\n  border: solid 2px;\n  padding: 0 1.25rem;\n  height: 2.5rem;\n}\n\n.vote-container {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 1.75rem;\n  width: 97.1%;\n}\n\n.vote-container .total-upvotes {\n  background-color: #1cbbb4;\n  opacity: 0.8;\n  padding: 0.2rem 1rem;\n}\n\n.vote-container .total-downvotes {\n  background-color: #ffad1d;\n  opacity: 0.8;\n  padding: 0.2rem 1rem;\n  text-align: right;\n}\n\n.vote-indicator {\n  padding: 0.25rem;\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=radio] {\n  visibility: hidden;\n  height: 0;\n  width: 0;\n}\n\ninput[type=radio]:checked + label {\n  border: solid 2px white;\n}\n\nlabel {\n  cursor: pointer;\n  padding: 0.35rem;\n  display: flex;\n  color: white;\n  margin-right: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.label-upvote {\n  background-color: #1cbbb4;\n}\n\n.label-downvote {\n  background-color: #ffad1d;\n}\n\n@media (max-width: 968px) {\n  .background {\n    width: 100%;\n  }\n\n  .vote-container {\n    width: 100%;\n  }\n\n  .voting-container {\n    padding: 1.5em 0.75em;\n    margin-top: 3.25rem;\n  }\n\n  .votes-title {\n    margin: 0.5rem 0;\n    font-weight: 300;\n  }\n\n  .no-padding-left {\n    padding-left: 0 !important;\n    padding-right: 0;\n  }\n\n  .no-padding-right {\n    padding-right: 0 !important;\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92b3RpbmcvRDpcXFJ1bGVPZlRodW1iL3NyY1xcYXBwXFxob21lXFx2b3RpbmdcXHZvdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS92b3Rpbmcvdm90aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQWtCLHVCQUFBO0VBQXdCLGtCQUFBO0VBQWtCLG1CQUFBO0FDRDVEOztBREVBO0VBQXFCLHlCQUxLO0FDTzFCOztBRERJO0VBQVksaUJBQUE7RUFBa0IsZ0JBQUE7QUNLbEM7O0FESkk7RUFBRSxpQkFBQTtBQ09OOztBRExBO0VBQWEsY0FBQTtFQUFjLGdCQUFBO0FDVTNCOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtIQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1dKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1dKOztBRFRBO0VBQWlCLDBCQUFBO0FDYWpCOztBRFpBO0VBQWtCLDJCQUFBO0FDZ0JsQjs7QURmQTtFQUFnQixXQUFBO0VBQVksZ0JBQUE7QUNvQjVCOztBRG5CSTtFQUFNLFlBQUE7RUFBWSxTQUFBO0VBQVMsVUFBQTtBQ3dCL0I7O0FEdkJJO0VBQU0sWUFBQTtFQUFhLHFCQUFBO0FDMkJ2Qjs7QUQxQkk7RUFBRSxjQTlCb0I7RUE4QlksbUJBQUE7QUM4QnRDOztBRDdCSTtFQUFVLGlCQUFBO0VBQ04sbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2dDUjs7QUQ5QkE7RUFBZ0Isa0JBQUE7RUFBcUIsU0FBQTtFQUFVLFlBQUE7RUFBWSxrQkFBQTtFQUFrQixZQUFBO0FDc0M3RTs7QURyQ0E7RUFBZSx5QkF2Q0Q7RUF1Q2dDLFlBQUE7RUFBYSxvQkFBQTtBQzBDM0Q7O0FEekNBO0VBQWlCLHlCQXZDRDtFQXVDa0MsWUFBQTtFQUFhLG9CQUFBO0VBQXFCLGlCQUFBO0FDK0NwRjs7QUQ3Q0E7RUFBZ0IsZ0JBQUE7RUFBZ0IsYUFBQTtFQUFjLHVCQUFBO0FDbUQ5Qzs7QURqREU7RUFDTSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDb0RSOztBRGxERTtFQUNFLHVCQUFBO0FDcURKOztBRG5ERTtFQUFNLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsYUFBQTtFQUFjLFlBQUE7RUFBYSxrQkFBQTtFQUFtQix5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQzREdkY7O0FEM0RFO0VBQWMseUJBckRGO0FDb0hkOztBRDlERTtFQUFnQix5QkFyREY7QUN1SGhCOztBRC9EQTtFQUNJO0lBQVksV0FBQTtFQ21FZDs7RURsRUU7SUFBZ0IsV0FBQTtFQ3NFbEI7O0VEckVFO0lBQWtCLHFCQUFBO0lBQXFCLG1CQUFBO0VDMEV6Qzs7RUR6RUU7SUFBYSxnQkFBQTtJQUFnQixnQkFBQTtFQzhFL0I7O0VEN0VFO0lBQWlCLDBCQUFBO0lBQXlCLGdCQUFBO0VDa0Y1Qzs7RURqRkU7SUFBa0IsMkJBQUE7SUFBMEIsZUFBQTtFQ3NGOUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdm90aW5nL3ZvdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFja2dyb3VuZC1tZXNzYWdlLWNvbG9yOiNlYmViZWI7XHJcbiR1cHZvdGUtY29sb3I6IzFjYmJiNDtcclxuJGRvd252b3RlLWNvbG9yOiNmZmFkMWQ7XHJcblxyXG4udm90aW5nLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwYWRkaW5nOjEuNWVtIDhlbTttYXJnaW4tdG9wOiAzLjI1cmVtO31cclxuLnNwZWFrLW91dC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbWVzc2FnZS1jb2xvcjtcclxuICAgIC5zcGFuLXNwZWFre2ZvbnQtc2l6ZTogMS41cmVtO2ZvbnQtd2VpZ2h0OiAzMDA7fVxyXG4gICAgcHtmb250LXNpemU6IDAuOXJlbTt9XHJcbn1cclxuLnZvdGVzLXRpdGxle21hcmdpbjozcmVtIDA7Zm9udC13ZWlnaHQ6IDMwMDt9XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIwLCAyMCwgMjAsIDAuOCksIHJnYmEoMzEsIDMxLCAzMSwgMC41KSA0MCUscmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuLmNoYXJhY3Rlci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubm8tcGFkZGluZy1sZWZ0e3BhZGRpbmctbGVmdDowIWltcG9ydGFudDt9XHJcbi5uby1wYWRkaW5nLXJpZ2h0e3BhZGRpbmctcmlnaHQ6MCFpbXBvcnRhbnQ7fVxyXG4uY2hhcmFjdGVyLWluZm97d2lkdGg6IDEwMCU7cGFkZGluZy10b3A6IDQwJTtcclxuICAgIC5uYW1le2NvbG9yOndoaXRlO21hcmdpbjowO3BhZGRpbmc6IDA7fVxyXG4gICAgc21hbGx7Y29sb3I6IHdoaXRlO3ZlcnRpY2FsLWFsaWduOiBzdXBlcjt9XHJcbiAgICBwe2NvbG9yOiRiYWNrZ3JvdW5kLW1lc3NhZ2UtY29sb3I7cGFkZGluZy1yaWdodDogMXJlbTt9XHJcbiAgICAudm90ZS1ub3d7Zm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjFlMWY2MjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi41cmVtO31cclxufVxyXG4udm90ZS1jb250YWluZXJ7cG9zaXRpb246IGFic29sdXRlOyAgYm90dG9tOiAwO2NvbG9yOndoaXRlO2ZvbnQtc2l6ZToxLjc1cmVtO3dpZHRoOjk3LjElO1xyXG4udG90YWwtdXB2b3Rlc3tiYWNrZ3JvdW5kLWNvbG9yOiR1cHZvdGUtY29sb3I7b3BhY2l0eTogMC44O3BhZGRpbmc6IDAuMnJlbSAxcmVtO31cclxuLnRvdGFsLWRvd252b3Rlc3tiYWNrZ3JvdW5kLWNvbG9yOiRkb3dudm90ZS1jb2xvcjtvcGFjaXR5OiAwLjg7cGFkZGluZzogMC4ycmVtIDFyZW07dGV4dC1hbGlnbjogcmlnaHQ7fVxyXG59XHJcbi52b3RlLWluZGljYXRvcntwYWRkaW5nOjAuMjVyZW07ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgd2lkdGg6IDA7IFxyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgIGJvcmRlcjpzb2xpZCAycHggd2hpdGVcclxuICB9XHJcbiAgbGFiZWx7Y3Vyc29yOiBwb2ludGVyO3BhZGRpbmc6IDAuMzVyZW07ZGlzcGxheTogZmxleDtjb2xvcjogd2hpdGU7bWFyZ2luLXJpZ2h0OiAxMHB4O3VzZXItc2VsZWN0OiBub25lO31cclxuICAubGFiZWwtdXB2b3Rle2JhY2tncm91bmQtY29sb3I6JHVwdm90ZS1jb2xvcjt9XHJcbiAgLmxhYmVsLWRvd252b3Rle2JhY2tncm91bmQtY29sb3I6ICRkb3dudm90ZS1jb2xvcjt9XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2OHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZHt3aWR0aDogMTAwJTt9XHJcbiAgICAudm90ZS1jb250YWluZXJ7d2lkdGg6MTAwJX1cclxuICAgIC52b3RpbmctY29udGFpbmVye3BhZGRpbmc6MS41ZW0gMC43NWVtO21hcmdpbi10b3A6IDMuMjVyZW07fVxyXG4gICAgLnZvdGVzLXRpdGxle21hcmdpbjowLjVyZW0gMDtmb250LXdlaWdodDogMzAwO31cclxuICAgIC5uby1wYWRkaW5nLWxlZnR7cGFkZGluZy1sZWZ0OjAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6IDA7fVxyXG4gICAgLm5vLXBhZGRpbmctcmlnaHR7cGFkZGluZy1yaWdodDowIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6IDA7fSAgICAgIFxyXG4gIH0iLCIudm90aW5nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjVlbSA4ZW07XG4gIG1hcmdpbi10b3A6IDMuMjVyZW07XG59XG5cbi5zcGVhay1vdXQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cbi5zcGVhay1vdXQtY29udGFpbmVyIC5zcGFuLXNwZWFrIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3BlYWstb3V0LWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi52b3Rlcy10aXRsZSB7XG4gIG1hcmdpbjogM3JlbSAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk3JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIwLCAyMCwgMjAsIDAuOCksIHJnYmEoMzEsIDMxLCAzMSwgMC41KSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jaGFyYWN0ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jaGFyYWN0ZXItaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNDAlO1xufVxuLmNoYXJhY3Rlci1pbmZvIC5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2hhcmFjdGVyLWluZm8gc21hbGwge1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cbi5jaGFyYWN0ZXItaW5mbyBwIHtcbiAgY29sb3I6ICNlYmViZWI7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4uY2hhcmFjdGVyLWluZm8gLnZvdGUtbm93IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGJhY2tncm91bmQ6ICMyMjFlMWY2MjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuLnZvdGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB3aWR0aDogOTcuMSU7XG59XG4udm90ZS1jb250YWluZXIgLnRvdGFsLXVwdm90ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiYmI0O1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xufVxuLnZvdGUtY29udGFpbmVyIC50b3RhbC1kb3dudm90ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZDFkO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZvdGUtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxubGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuMzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmxhYmVsLXVwdm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxY2JiYjQ7XG59XG5cbi5sYWJlbC1kb3dudm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFkMWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xuICAuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudm90ZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnZvdGluZy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEuNWVtIDAuNzVlbTtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICB9XG5cbiAgLnZvdGVzLXRpdGxlIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAubm8tcGFkZGluZy1sZWZ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLm5vLXBhZGRpbmctcmlnaHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/voting/voting.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/home/voting/voting.component.ts ***!
          \*************************************************/
        /*! exports provided: VotingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function () { return VotingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var VotingComponent = /** @class */ (function () {
                function VotingComponent(fb) {
                    this.fb = fb;
                    this.description = "Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.It's easy: You share your opinion, we analyze and put the data in a public report.";
                    this.visibilidadMensaje = true;
                    this.characters = [
                        { id: 1, name: "Kanye West", category: "Entertainment", description: "Is Kanye West the best rapper of all time (thumbs up) or is he a nobody (thumbs down)", upvotes: 64, downvotes: 36, votingDate: "", image: "kanye.jpg" },
                        { id: 2, name: "Mark Zuckerberg", category: "Business", description: "Is Mark Zuckerberg a tecnological genius (thumbs up) or is he a disgrace to mankind.(thumbs down)", upvotes: 36, downvotes: 64, votingDate: "", image: "zuckerberg.jpg" },
                        { id: 3, name: "Cristina Fernández", category: "Politics", description: "Is Cristina a role model to the latin american woman(thumbs up) or is she a corrupted politician.(thumbs down)", upvotes: 36, downvotes: 64, votingDate: "", image: "kirchner.jpg" },
                        { id: 4, name: "Malala Yousafzai", category: "Entertainment", description: "Is Malala worth of the Nobel Prize (thumbs up), or is she just some random girl trying to get attention (thumbs down)", upvotes: 64, downvotes: 36, votingDate: "", image: "malala.jpg" }
                    ];
                }
                VotingComponent.prototype.ngOnInit = function () {
                    this.createForm();
                    this.fillForm();
                };
                VotingComponent.prototype.vote = function (value, index) {
                    console.log(value);
                    console.log(index);
                    var currentUpvoteValue = this.formArrayCharacters.at(index).get('upvotes').value;
                    var currentDownvoteValue = this.formArrayCharacters.at(index).get('downvotes').value;
                    var currentTotalVotes = this.formArrayCharacters.at(index).get('totalVotes').value;
                    if (value == 'true') {
                        this.formArrayCharacters.at(index).get('upvotes').setValue(currentUpvoteValue + 1);
                        this.formArrayCharacters.at(index).get('executedVote').setValue(true);
                        this.formArrayCharacters.at(index).get('totalVotes').setValue(currentTotalVotes + 1);
                        localStorage.setItem("characters", JSON.stringify(this.formCharacters.value));
                    }
                    else if (value == 'false') {
                        this.formArrayCharacters.at(index).get('downvotes').setValue(currentDownvoteValue + 1);
                        this.formArrayCharacters.at(index).get('executedVote').setValue(true);
                        this.formArrayCharacters.at(index).get('totalVotes').setValue(currentTotalVotes + 1);
                        localStorage.setItem("characters", JSON.stringify(this.formCharacters.value));
                    }
                };
                VotingComponent.prototype.restartVote = function (index) {
                    this.formArrayCharacters.at(index).get('executedVote').setValue(false);
                };
                VotingComponent.prototype.createForm = function () {
                    this.formCharacters = this.fb.group({
                        characters: this.fb.array([])
                    });
                };
                Object.defineProperty(VotingComponent.prototype, "formArrayCharacters", {
                    get: function () {
                        return this.formCharacters.controls.characters;
                    },
                    enumerable: true,
                    configurable: true
                });
                VotingComponent.prototype.fillForm = function () {
                    if (localStorage.getItem("characters") === null) {
                        for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
                            var item = _a[_i];
                            var formCharacter = this.fb.group({
                                name: [item.name],
                                upvotes: [item.upvotes],
                                downvotes: [item.downvotes],
                                vote: [],
                                executedVote: [false],
                                totalVotes: [item.upvotes + item.downvotes]
                            });
                            this.formArrayCharacters.push(formCharacter);
                            localStorage.setItem("characters", JSON.stringify(this.formCharacters.value));
                        }
                    }
                    else if (localStorage.hasOwnProperty('characters')) {
                        var object_characters = JSON.parse(localStorage.getItem("characters"));
                        for (var _b = 0, _c = object_characters.characters; _b < _c.length; _b++) {
                            var item = _c[_b];
                            var formCharacter = this.fb.group({
                                name: [item.name],
                                upvotes: [item.upvotes],
                                downvotes: [item.downvotes],
                                vote: [],
                                executedVote: [false],
                                totalVotes: [item.upvotes + item.downvotes]
                            });
                            this.formArrayCharacters.push(formCharacter);
                            localStorage.setItem("characters", JSON.stringify(this.formCharacters.value));
                        }
                    }
                };
                return VotingComponent;
            }());
            VotingComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            VotingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'voting',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/voting/voting.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voting.component.scss */ "./src/app/home/voting/voting.component.scss")).default]
                })
            ], VotingComponent);
            /***/ 
        }),
        /***/ "./src/app/how-it-works/how-it-works.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/how-it-works/how-it-works.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-section {\n  padding: 8rem 9rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LWl0LXdvcmtzL0Q6XFxSdWxlT2ZUaHVtYi9zcmNcXGFwcFxcaG93LWl0LXdvcmtzXFxob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiA4cmVtIDlyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9IiwiLmNvbnRhaW5lci1zZWN0aW9uIHtcbiAgcGFkZGluZzogOHJlbSA5cmVtO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/how-it-works/how-it-works.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/how-it-works/how-it-works.component.ts ***!
          \********************************************************/
        /*! exports provided: HowItWorksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function () { return HowItWorksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HowItWorksComponent = /** @class */ (function () {
                function HowItWorksComponent() {
                }
                HowItWorksComponent.prototype.ngOnInit = function () {
                };
                return HowItWorksComponent;
            }());
            HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-how-it-works',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-it-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-it-works/how-it-works.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./how-it-works.component.scss */ "./src/app/how-it-works/how-it-works.component.scss")).default]
                })
            ], HowItWorksComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-section {\n  padding: 8rem 9rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFJ1bGVPZlRodW1iL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDhyZW0gOXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iLCIuY29udGFpbmVyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4cmVtIDlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent() {
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                return LoginComponent;
            }());
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/past-trials/past-trials.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/past-trials/past-trials.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-section {\n  padding: 8rem 9rem;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzdC10cmlhbHMvRDpcXFJ1bGVPZlRodW1iL3NyY1xcYXBwXFxwYXN0LXRyaWFsc1xccGFzdC10cmlhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bhc3QtdHJpYWxzL3Bhc3QtdHJpYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9wYXN0LXRyaWFscy9wYXN0LXRyaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc2VjdGlvbntcclxucGFkZGluZzogOHJlbSA5cmVtO1xyXG5jb2xvcjogd2hpdGU7XHJcbn0iLCIuY29udGFpbmVyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4cmVtIDlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/past-trials/past-trials.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/past-trials/past-trials.component.ts ***!
          \******************************************************/
        /*! exports provided: PastTrialsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrialsComponent", function () { return PastTrialsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PastTrialsComponent = /** @class */ (function () {
                function PastTrialsComponent() {
                }
                PastTrialsComponent.prototype.ngOnInit = function () {
                };
                return PastTrialsComponent;
            }());
            PastTrialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'past-trials',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./past-trials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/past-trials/past-trials.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./past-trials.component.scss */ "./src/app/past-trials/past-trials.component.scss")).default]
                })
            ], PastTrialsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\RuleOfThumb\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map