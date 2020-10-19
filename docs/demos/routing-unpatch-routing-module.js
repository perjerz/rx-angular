(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-unpatch-routing-module"],{

/***/ "D6f7":
/*!********************************************************************************!*\
  !*** ./src/app/features/template/unpatch/routing/unpatch-routing.component.ts ***!
  \********************************************************************************/
/*! exports provided: UnpatchRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchRoutingComponent", function() { return UnpatchRoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class UnpatchRoutingComponent {
}
UnpatchRoutingComponent.ɵfac = function UnpatchRoutingComponent_Factory(t) { return new (t || UnpatchRoutingComponent)(); };
UnpatchRoutingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnpatchRoutingComponent, selectors: [["rxa-demo-basics"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 1, vars: 0, template: function UnpatchRoutingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " @TODO ");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchRoutingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-demo-basics',
                template: `
    @TODO
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "NZWL":
/*!*****************************************************************************!*\
  !*** ./src/app/features/template/unpatch/routing/unpatch-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UnpatchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchRoutingModule", function() { return UnpatchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _unpatch_routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpatch-routing.component */ "D6f7");
/* harmony import */ var _unpatch_routing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unpatch-routing.routes */ "jJID");







const DECLARATIONS = [_unpatch_routing_component__WEBPACK_IMPORTED_MODULE_3__["UnpatchRoutingComponent"]];
class UnpatchRoutingModule {
}
UnpatchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpatchRoutingModule });
UnpatchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpatchRoutingModule_Factory(t) { return new (t || UnpatchRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_unpatch_routing_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpatchRoutingModule, { declarations: [_unpatch_routing_component__WEBPACK_IMPORTED_MODULE_3__["UnpatchRoutingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_unpatch_routing_component__WEBPACK_IMPORTED_MODULE_3__["UnpatchRoutingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_unpatch_routing_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"])
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "jJID":
/*!*****************************************************************************!*\
  !*** ./src/app/features/template/unpatch/routing/unpatch-routing.routes.ts ***!
  \*****************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _unpatch_routing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpatch-routing.component */ "D6f7");

const ROUTES = [
    {
        path: '',
        component: _unpatch_routing_component__WEBPACK_IMPORTED_MODULE_0__["UnpatchRoutingComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=routing-unpatch-routing-module.js.map