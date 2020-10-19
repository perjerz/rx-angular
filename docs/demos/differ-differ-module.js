(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["differ-differ-module"],{

/***/ "MdRZ":
/*!**************************************************************!*\
  !*** ./src/app/features/experiments/differ/differ.routes.ts ***!
  \**************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        children: [
            {
                path: 'ng-iterable-differ',
                loadChildren: () => Promise.all(/*! import() | ng-iterable-differ-ng-iterable-differ-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("ng-iterable-differ-ng-iterable-differ-module")]).then(__webpack_require__.bind(null, /*! ./ng-iterable-differ/ng-iterable-differ.module */ "DTFk"))
                    .then(m => m.NgIterableDifferModule)
            },
            {
                path: 'rx-iterable-differ',
                loadChildren: () => Promise.all(/*! import() | rx-iterable-differ-rx-iterable-differ-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~rx-for-differ-rx-for-differ-module~rx-iterable-differ-rx-iterable-differ-module"), __webpack_require__.e("rx-iterable-differ-rx-iterable-differ-module")]).then(__webpack_require__.bind(null, /*! ./rx-iterable-differ/rx-iterable-differ.module */ "Jwj9"))
                    .then(m => m.RxIterableDifferModule)
            },
            {
                path: 'rx-for-differ',
                loadChildren: () => Promise.all(/*! import() | rx-for-differ-rx-for-differ-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~rx-for-differ-rx-for-differ-module~rx-iterable-differ-rx-iterable-differ-module"), __webpack_require__.e("rx-for-differ-rx-for-differ-module")]).then(__webpack_require__.bind(null, /*! ./rx-for-differ/rx-for-differ.module */ "24/t"))
                    .then(m => m.RxForDifferModule)
            }
            /**/
        ]
    }
];


/***/ }),

/***/ "x5ii":
/*!**************************************************************!*\
  !*** ./src/app/features/experiments/differ/differ.module.ts ***!
  \**************************************************************/
/*! exports provided: DifferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferModule", function() { return DifferModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _differ_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./differ.routes */ "MdRZ");






class DifferModule {
}
DifferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DifferModule });
DifferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DifferModule_Factory(t) { return new (t || DifferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_differ_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DifferModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DifferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_differ_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=differ-differ-module.js.map