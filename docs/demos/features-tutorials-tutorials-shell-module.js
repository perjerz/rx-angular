(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-tutorials-tutorials-shell-module"],{

/***/ "mk2T":
/*!**************************************************************!*\
  !*** ./src/app/features/tutorials/tutorials-shell.module.ts ***!
  \**************************************************************/
/*! exports provided: TutorialsShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsShellModule", function() { return TutorialsShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");




const TUTORIAL_ROUTES = [
    {
        path: '',
        redirectTo: 'basics',
        pathMatch: 'full'
    },
    {
        path: 'basics',
        loadChildren: () => Promise.all(/*! import() | basics-tutorial-basics-module */[__webpack_require__.e("default~basic-example-basic-example-module~basics-tutorial-basics-module~coalescing-coalescing-modul~e15a2079"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~32c13eff"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~ca094880"), __webpack_require__.e("default~basics-tutorial-basics-module~error-handling-error-handing-module~http-errors-http-error-mod~fe4d98d4"), __webpack_require__.e("basics-tutorial-basics-module")]).then(__webpack_require__.bind(null, /*! ./basics/tutorial-basics.module */ "pA6t")).then(m => m.TutorialBasicsModule)
    },
];
class TutorialsShellModule {
}
TutorialsShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TutorialsShellModule });
TutorialsShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TutorialsShellModule_Factory(t) { return new (t || TutorialsShellModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(TUTORIAL_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TutorialsShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialsShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(TUTORIAL_ROUTES)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-tutorials-tutorials-shell-module.js.map