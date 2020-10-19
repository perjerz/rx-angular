(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-let-rx-let-demo-module"],{

/***/ "38ui":
/*!****************************************************************!*\
  !*** ./src/app/features/template/rx-let/rx-let-demo.module.ts ***!
  \****************************************************************/
/*! exports provided: RxLetDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxLetDemoModule", function() { return RxLetDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_let_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-let.routes */ "8xEk");






class RxLetDemoModule {
}
RxLetDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxLetDemoModule });
RxLetDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxLetDemoModule_Factory(t) { return new (t || RxLetDemoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_let_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxLetDemoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxLetDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_let_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "8xEk":
/*!***********************************************************!*\
  !*** ./src/app/features/template/rx-let/rx-let.routes.ts ***!
  \***********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        redirectTo: 'error-handling'
    },
    {
        path: 'error-handling',
        loadChildren: () => Promise.all(/*! import() | error-handling-error-handing-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~ca094880"), __webpack_require__.e("default~error-handling-error-handing-module~http-errors-http-error-module~lazy-loading-components-la~9edc7690"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~fe4d98d4"), __webpack_require__.e("common"), __webpack_require__.e("error-handling-error-handing-module")]).then(__webpack_require__.bind(null, /*! ./error-handling/error-handing.module */ "GXpZ"))
            .then(m => m.ErrorHandingModule)
    },
    {
        path: 'http-errors',
        loadChildren: () => Promise.all(/*! import() | http-errors-http-error-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~ca094880"), __webpack_require__.e("default~error-handling-error-handing-module~http-errors-http-error-module~lazy-loading-components-la~9edc7690"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~fe4d98d4"), __webpack_require__.e("common"), __webpack_require__.e("http-errors-http-error-module")]).then(__webpack_require__.bind(null, /*! ./http-errors/http-error.module */ "hALZ"))
            .then(m => m.HttpErrorModule)
    },
    {
        path: 'template-bindings',
        loadChildren: () => Promise.all(/*! import() | let-template-binding-let-template-binding-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~ca094880"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~fe4d98d4"), __webpack_require__.e("let-template-binding-let-template-binding-module")]).then(__webpack_require__.bind(null, /*! ./let-template-binding/let-template-binding.module */ "IeEz"))
            .then(m => m.LetTemplateBindingModule)
    },
    {
        path: 'ng-if-hack',
        loadChildren: () => Promise.all(/*! import() | ng-if-hack-ng-if-hack-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~error-handling-error-handing-module~http-errors-http-error-module~lazy-loading-components-la~9edc7690"), __webpack_require__.e("ng-if-hack-ng-if-hack-module")]).then(__webpack_require__.bind(null, /*! ./ng-if-hack/ng-if-hack.module */ "uQMO"))
            .then(m => m.NgIfHackModule)
    },
    {
        path: 'preloading-images',
        loadChildren: () => Promise.all(/*! import() | preloading-images-preloading-images-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~8f2352fb"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~f5eefc1d"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"), __webpack_require__.e("default~error-handling-error-handing-module~http-errors-http-error-module~lazy-loading-components-la~9edc7690"), __webpack_require__.e("common"), __webpack_require__.e("preloading-images-preloading-images-module")]).then(__webpack_require__.bind(null, /*! ./preloading-images/preloading-images.module */ "k/Vi"))
            .then(m => m.PreloadingImagesModule)
    },
    {
        path: 'lazy-components',
        loadChildren: () => Promise.all(/*! import() | lazy-loading-components-lazy-loading-components-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"), __webpack_require__.e("default~lazy-loading-components-lazy-loading-components-module~nested-component-structure-nested-com~d385b1d5"), __webpack_require__.e("default~error-handling-error-handing-module~http-errors-http-error-module~lazy-loading-components-la~9edc7690"), __webpack_require__.e("default~alphas-compare-alphas-compare-module~lazy-loading-components-lazy-loading-components-module~~0c0396e9"), __webpack_require__.e("common"), __webpack_require__.e("lazy-loading-components-lazy-loading-components-module")]).then(__webpack_require__.bind(null, /*! ./lazy-loading-components/lazy-loading-components.module */ "EjPM"))
            .then(m => m.LazyLoadingComponentsModule)
    }
];


/***/ })

}]);
//# sourceMappingURL=rx-let-rx-let-demo-module.js.map