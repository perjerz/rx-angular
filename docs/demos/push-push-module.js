(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-push-module"],{

/***/ "CpYm":
/*!*******************************************************!*\
  !*** ./src/app/features/template/push/push.module.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, PushDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushDemoModule", function() { return PushDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const ROUTES = [
    {
        path: '',
        redirectTo: 'basic-example'
    },
    {
        path: 'basic-example',
        loadChildren: () => Promise.all(/*! import() | push-basic-example-push-basic-example-module */[__webpack_require__.e("default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"), __webpack_require__.e("push-basic-example-push-basic-example-module")]).then(__webpack_require__.bind(null, /*! ./push-basic-example/push-basic-example.module */ "RoF3")).then(m => m.PushBasicExampleModule)
    }
];
class PushDemoModule {
}
PushDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PushDemoModule });
PushDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PushDemoModule_Factory(t) { return new (t || PushDemoModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PushDemoModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=push-push-module.js.map