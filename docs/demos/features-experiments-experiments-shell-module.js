(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-experiments-experiments-shell-module"],{

/***/ "ZoVp":
/*!******************************************************************!*\
  !*** ./src/app/features/experiments/experiments-shell.module.ts ***!
  \******************************************************************/
/*! exports provided: ExperimentsShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsShellModule", function() { return ExperimentsShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const ROUTES = [
    {
        path: 'differ',
        loadChildren: () => __webpack_require__.e(/*! import() | differ-differ-module */ "differ-differ-module").then(__webpack_require__.bind(null, /*! ./differ/differ.module */ "x5ii")).then((m) => m.DifferModule)
    },
    {
        path: 'rx-base-state',
        loadChildren: () => Promise.all(/*! import() | state-rx-state-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("state-rx-state-module")]).then(__webpack_require__.bind(null, /*! ./state/rx-state.module */ "tFUm")).then((mod) => mod.RxStateModule),
        canActivate: [],
        canActivateChild: []
    },
    {
        path: 'structural-directives',
        loadChildren: () => __webpack_require__.e(/*! import() | structural-directives-structural-directives-module */ "structural-directives-structural-directives-module").then(__webpack_require__.bind(null, /*! ./structural-directives/structural-directives.module */ "1pOS")).then((m) => m.StructuralDirectivesModule)
    }
];
class ExperimentsShellModule {
}
ExperimentsShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExperimentsShellModule });
ExperimentsShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExperimentsShellModule_Factory(t) { return new (t || ExperimentsShellModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExperimentsShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperimentsShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-experiments-experiments-shell-module.js.map