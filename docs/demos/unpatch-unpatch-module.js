(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unpatch-unpatch-module"],{

/***/ "9DnQ":
/*!*************************************************************!*\
  !*** ./src/app/features/template/unpatch/unpatch.module.ts ***!
  \*************************************************************/
/*! exports provided: UnpatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchModule", function() { return UnpatchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _unpatch_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpatch.routes */ "N1Pw");






class UnpatchModule {
}
UnpatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpatchModule });
UnpatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpatchModule_Factory(t) { return new (t || UnpatchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_unpatch_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpatchModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_unpatch_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "N1Pw":
/*!*************************************************************!*\
  !*** ./src/app/features/template/unpatch/unpatch.routes.ts ***!
  \*************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'comparison',
        pathMatch: 'full'
    },
    {
        path: 'comparison',
        loadChildren: () => Promise.all(/*! import() | comparison-unpatch-comparison-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("comparison-unpatch-comparison-module")]).then(__webpack_require__.bind(null, /*! ./comparison/unpatch-comparison.module */ "CVdL")).then(m => m.UnpatchComparisonModule)
    },
    {
        path: 'routing',
        loadChildren: () => __webpack_require__.e(/*! import() | routing-unpatch-routing-module */ "routing-unpatch-routing-module").then(__webpack_require__.bind(null, /*! ./routing/unpatch-routing.module */ "NZWL")).then(m => m.UnpatchRoutingModule)
    }
];


/***/ })

}]);
//# sourceMappingURL=unpatch-unpatch-module.js.map