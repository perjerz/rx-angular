(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["structural-directives-structural-directives-module"],{

/***/ "+Oa7":
/*!********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/structural-directives.routes.ts ***!
  \********************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'view-vs-embedded-view'
    },
    {
        path: 'view-vs-embedded-view',
        loadChildren: () => Promise.all(/*! import() | view-vs-embedded-view-view-vs-embedded-view-routed-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("view-vs-embedded-view-view-vs-embedded-view-routed-module")]).then(__webpack_require__.bind(null, /*! ./view-vs-embedded-view/view-vs-embedded-view.routed.module */ "Cg1q")).then(m => m.ViewVsEmbeddedViewRoutedModule)
    },
    {
        path: 'rx-if-poc',
        loadChildren: () => Promise.all(/*! import() | rx-if-poc-rx-if-poc-routed-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~rx-if-poc-rx-if-poc-routed-module~rx-switch-poc-rx-swicht-poc-module"), __webpack_require__.e("rx-if-poc-rx-if-poc-routed-module")]).then(__webpack_require__.bind(null, /*! ./rx-if-poc/rx-if-poc.routed.module */ "vr47")).then(m => m.RxIfPocRoutedModule)
    },
    {
        path: 'rx-swicht-poc',
        loadChildren: () => Promise.all(/*! import() | rx-switch-poc-rx-swicht-poc-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("default~rx-if-poc-rx-if-poc-routed-module~rx-switch-poc-rx-swicht-poc-module"), __webpack_require__.e("rx-switch-poc-rx-swicht-poc-module")]).then(__webpack_require__.bind(null, /*! ./rx-switch-poc/rx-swicht-poc.module */ "iiHh")).then(m => m.RxSwichtPocModule)
    },
    {
        path: 'rx-for-poc',
        loadChildren: () => Promise.all(/*! import() | rx-for-poc-rx-for-poc-routed-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("common"), __webpack_require__.e("rx-for-poc-rx-for-poc-routed-module")]).then(__webpack_require__.bind(null, /*! ./rx-for-poc/rx-for-poc.routed.module */ "5WxO")).then(m => m.RxForPocRoutedModule)
    }
];


/***/ }),

/***/ "1pOS":
/*!********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/structural-directives.module.ts ***!
  \********************************************************************************************/
/*! exports provided: StructuralDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuralDirectivesModule", function() { return StructuralDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _structural_directives_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structural-directives.routes */ "+Oa7");






class StructuralDirectivesModule {
}
StructuralDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StructuralDirectivesModule });
StructuralDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StructuralDirectivesModule_Factory(t) { return new (t || StructuralDirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_structural_directives_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StructuralDirectivesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StructuralDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_structural_directives_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=structural-directives-structural-directives-module.js.map