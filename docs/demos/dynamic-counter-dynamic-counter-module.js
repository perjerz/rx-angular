(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamic-counter-dynamic-counter-module"],{

/***/ "LWNE":
/*!*********************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/dynamic-counter.routes.ts ***!
  \*********************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'rx-state-and-reactive-forms'
    },
    {
        path: 'rx-state-and-reactive-forms',
        loadChildren: () => Promise.all(/*! import() | rx-state-and-reactive-forms-rx-state-and-reactive-forms-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~alphas-compare-alphas-compare-module~lazy-loading-components-lazy-loading-components-module~~0c0396e9"), __webpack_require__.e("common"), __webpack_require__.e("rx-state-and-reactive-forms-rx-state-and-reactive-forms-module")]).then(__webpack_require__.bind(null, /*! ./rx-state-and-reactive-forms/rx-state-and-reactive-forms.module */ "lgii")).then(m => m.RxStateAndReactiveFormsModule)
    },
    {
        path: 'rx-state-as-presenter',
        loadChildren: () => Promise.all(/*! import() | rx-state-as-presenter-rx-state-as-presenter-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("common"), __webpack_require__.e("rx-state-as-presenter-rx-state-as-presenter-module")]).then(__webpack_require__.bind(null, /*! ./rx-state-as-presenter/rx-state-as-presenter.module */ "u4tU")).then(m => m.RxStateAsPresenterModule)
    },
    {
        path: 'rx-state-in-the-view',
        loadChildren: () => Promise.all(/*! import() | rx-state-in-the-view-rx-state-in-the-view-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("common"), __webpack_require__.e("rx-state-in-the-view-rx-state-in-the-view-module")]).then(__webpack_require__.bind(null, /*! ./rx-state-in-the-view/rx-state-in-the-view.module */ "GSqT")).then(m => m.RxStateInTheViewModule)
    },
    {
        path: 'rx-state-and-subjects',
        loadChildren: () => Promise.all(/*! import() | rx-state-and-subjects-rx-state-and-subjects-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("common"), __webpack_require__.e("rx-state-and-subjects-rx-state-and-subjects-module")]).then(__webpack_require__.bind(null, /*! ./rx-state-and-subjects/rx-state-and-subjects.module */ "DuV3")).then(m => m.RxStateAndSubjectsModule)
    },
    {
        path: 'starter',
        loadChildren: () => Promise.all(/*! import() | starter-starter-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("common"), __webpack_require__.e("starter-starter-module")]).then(__webpack_require__.bind(null, /*! ./starter/starter.module */ "NXsP")).then(m => m.StarterModule)
    }
];


/***/ }),

/***/ "Xkdl":
/*!*********************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/dynamic-counter.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DynamicCounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicCounterModule", function() { return DynamicCounterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _dynamic_counter_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-counter.routes */ "LWNE");





class DynamicCounterModule {
}
DynamicCounterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DynamicCounterModule });
DynamicCounterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DynamicCounterModule_Factory(t) { return new (t || DynamicCounterModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dynamic_counter_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DynamicCounterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicCounterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dynamic_counter_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dynamic-counter-dynamic-counter-module.js.map