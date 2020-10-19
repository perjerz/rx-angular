(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-template-template-shell-module"],{

/***/ "8aaI":
/*!************************************************************!*\
  !*** ./src/app/features/template/template-shell.module.ts ***!
  \************************************************************/
/*! exports provided: TemplateShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateShellModule", function() { return TemplateShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const ROUTES = [
    {
        path: '',
        redirectTo: 'rx-let',
        pathMatch: 'full'
    },
    {
        path: 'strategies',
        loadChildren: () => __webpack_require__.e(/*! import() | strategies-strategies-module */ "strategies-strategies-module").then(__webpack_require__.bind(null, /*! ./strategies/strategies.module */ "8Xbu")).then(m => m.StrategiesDemoModule)
    },
    {
        path: 'rx-let',
        loadChildren: () => __webpack_require__.e(/*! import() | rx-let-rx-let-demo-module */ "rx-let-rx-let-demo-module").then(__webpack_require__.bind(null, /*! ./rx-let/rx-let-demo.module */ "38ui")).then(m => m.RxLetDemoModule)
    },
    {
        path: 'push',
        loadChildren: () => __webpack_require__.e(/*! import() | push-push-module */ "push-push-module").then(__webpack_require__.bind(null, /*! ./push/push.module */ "CpYm")).then(m => m.PushDemoModule)
    },
    {
        path: 'unpatch',
        loadChildren: () => __webpack_require__.e(/*! import() | unpatch-unpatch-module */ "unpatch-unpatch-module").then(__webpack_require__.bind(null, /*! ./unpatch/unpatch.module */ "9DnQ")).then(m => m.UnpatchModule)
    },
    {
        path: 'view-port-prio',
        loadChildren: () => __webpack_require__.e(/*! import() | viewport-prio-viewport-prio-demo-module */ "viewport-prio-viewport-prio-demo-module").then(__webpack_require__.bind(null, /*! ./viewport-prio/viewport-prio-demo.module */ "KD5p")).then(m => m.ViewportPrioModule)
    }
];
class TemplateShellModule {
}
TemplateShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateShellModule });
TemplateShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateShellModule_Factory(t) { return new (t || TemplateShellModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateShellModule, [{
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
//# sourceMappingURL=features-template-template-shell-module.js.map