(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-vs-embedded-view-view-vs-embedded-view-routed-module"],{

/***/ "Cg1q":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.routed.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ViewVsEmbeddedViewRoutedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVsEmbeddedViewRoutedModule", function() { return ViewVsEmbeddedViewRoutedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _view_vs_embedded_view_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-vs-embedded-view.routes */ "u5o8");
/* harmony import */ var _view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-vs-embedded-view.module */ "pcLL");






class ViewVsEmbeddedViewRoutedModule {
}
ViewVsEmbeddedViewRoutedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewVsEmbeddedViewRoutedModule });
ViewVsEmbeddedViewRoutedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewVsEmbeddedViewRoutedModule_Factory(t) { return new (t || ViewVsEmbeddedViewRoutedModule)(); }, imports: [[
            _view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_view_vs_embedded_view_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
        ], _view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewVsEmbeddedViewRoutedModule, { imports: [_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVsEmbeddedViewRoutedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"]
                ],
                imports: [
                    _view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_3__["ViewVsEmbeddedViewModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_view_vs_embedded_view_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCWh":
/*!*********************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/index.ts ***!
  \*********************************************************/
/*! exports provided: VisualizerModule, VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.module */ "WoFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerModule", function() { return _visualizer_module__WEBPACK_IMPORTED_MODULE_0__["VisualizerModule"]; });

/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "KD49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"]; });





/***/ }),

/***/ "u5o8":
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.routes.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _view_vs_embedded_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-vs-embedded-view.component */ "xxTh");

const ROUTES = [
    {
        path: '',
        component: _view_vs_embedded_view_component__WEBPACK_IMPORTED_MODULE_0__["ViewVsEmbeddedViewComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=view-vs-embedded-view-view-vs-embedded-view-routed-module.js.map