(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-integrations-integrations-shell-module"],{

/***/ "vma7":
/*!********************************************************************!*\
  !*** ./src/app/features/integrations/integrations-shell.module.ts ***!
  \********************************************************************/
/*! exports provided: IntegrationsShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationsShellModule", function() { return IntegrationsShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const SHOWCASES_ROUTES = [
    {
        path: '',
        redirectTo: 'dynamic-counter',
        pathMatch: 'full'
    },
    {
        path: 'dynamic-counter',
        loadChildren: () => __webpack_require__.e(/*! import() | dynamic-counter-dynamic-counter-module */ "dynamic-counter-dynamic-counter-module").then(__webpack_require__.bind(null, /*! ./dynamic-counter/dynamic-counter.module */ "Xkdl")).then(m => m.DynamicCounterModule)
    }
];
class IntegrationsShellModule {
}
IntegrationsShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntegrationsShellModule });
IntegrationsShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntegrationsShellModule_Factory(t) { return new (t || IntegrationsShellModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SHOWCASES_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntegrationsShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntegrationsShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SHOWCASES_ROUTES)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-integrations-integrations-shell-module.js.map