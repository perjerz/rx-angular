(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-fundamentals-fundamentals-module"],{

/***/ "dDYt":
/*!**************************************************************!*\
  !*** ./src/app/features/fundamentals/fundamentals.module.ts ***!
  \**************************************************************/
/*! exports provided: FundamentalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundamentalsModule", function() { return FundamentalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const ROUTES = [
    {
        path: 'nested-vs-injected',
        loadChildren: () => Promise.all(/*! import() | nested-vs-injected-nested-vs-injected-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-vs-injected-nested-vs-injected-module~zone-patched-apis-zone-patched-apis-module"), __webpack_require__.e("nested-vs-injected-nested-vs-injected-module")]).then(__webpack_require__.bind(null, /*! ./nested-vs-injected/nested-vs-injected.module */ "zI00")).then(m => m.NestedVsInjectedModule)
    },
    {
        path: 'passing-values',
        loadChildren: () => Promise.all(/*! import() | passing-values-passing-values-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"), __webpack_require__.e("default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~cd4d53ae"), __webpack_require__.e("passing-values-passing-values-module")]).then(__webpack_require__.bind(null, /*! ./passing-values/passing-values.module */ "xRbn")).then(m => m.PassingValuesModule)
    },
    {
        path: 'zone-patched-apis',
        loadChildren: () => Promise.all(/*! import() | zone-patched-apis-zone-patched-apis-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~nested-vs-injected-nested-vs-injected-module~zone-patched-apis-zone-patched-apis-module"), __webpack_require__.e("common"), __webpack_require__.e("zone-patched-apis-zone-patched-apis-module")]).then(__webpack_require__.bind(null, /*! ./zone-patched-apis/zone-patched-apis.module */ "spCk")).then(m => m.ZonePatchedApisModule)
    },
    {
        path: 'scheduling',
        loadChildren: () => Promise.all(/*! import() | scheduling-scheduling-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("scheduling-scheduling-module")]).then(__webpack_require__.bind(null, /*! ./scheduling/scheduling.module */ "X66y")).then(m => m.SchedulingModule)
    },
    {
        path: 'coalescing',
        loadChildren: () => Promise.all(/*! import() | coalescing-coalescing-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("coalescing-coalescing-module")]).then(__webpack_require__.bind(null, /*! ./coalescing/coalescing.module */ "1s19")).then(m => m.CoalescingModule)
    },
    {
        path: 'render-callback',
        loadChildren: () => Promise.all(/*! import() | render-callback-render-callback-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~ca094880"), __webpack_require__.e("render-callback-render-callback-module")]).then(__webpack_require__.bind(null, /*! ./render-callback/render-callback.module */ "dBh9"))
            .then(m => m.RenderCallbackModule)
    }
];
class FundamentalsModule {
}
FundamentalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FundamentalsModule });
FundamentalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FundamentalsModule_Factory(t) { return new (t || FundamentalsModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FundamentalsModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundamentalsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-fundamentals-fundamentals-module.js.map