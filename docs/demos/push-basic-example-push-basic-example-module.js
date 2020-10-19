(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-basic-example-push-basic-example-module"],{

/***/ "+dvr":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/template/push/push-basic-example/push-basic-example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PushBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushBasicExampleComponent", function() { return PushBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");








class PushBasicExampleComponent {
    constructor() {
        this.updateClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.value$ = this.updateClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Math.ceil(Math.random() * 100)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
}
PushBasicExampleComponent.ɵfac = function PushBasicExampleComponent_Factory(t) { return new (t || PushBasicExampleComponent)(); };
PushBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PushBasicExampleComponent, selectors: [["rxa-push-basic-example"]], decls: 24, vars: 9, consts: [[1, "row", "mb-2"], [1, "col"], ["mat-raised-button", "", "unpatch", "", 3, "click"], [1, "row"], [1, "col-4"], [1, "mat-headline"]], template: function PushBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PushBasicExampleComponent_Template_button_click_2_listener() { return ctx.updateClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-dirty-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx.value$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 5, ctx.value$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 7, ctx.value$), "");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksComponent"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_6__["PushPipe"]], styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushBasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-push-basic-example',
                template: `
    <div class="row mb-2">
      <div class="col">
        <button mat-raised-button unpatch (click)="updateClick.next()">Update</button>
      </div>
    </div>
    <rxa-dirty-check></rxa-dirty-check>
    <div class="row">
      <div class="col-4">
        <div class="mat-headline">
          Value
        </div>
        <div> {{ value$ | push }}</div>
      </div>
      <div class="col-4">
        <div class="mat-headline">
          Value
        </div>
        <div> {{ value$ | push }}</div>
      </div>
      <div class="col-4">
        <div class="mat-headline">
          Value
        </div>
        <div> {{ value$ | push }}</div>
      </div>
    </div>
  `,
                styles: [`

  `],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "GCG1":
/*!****************************************************************************************!*\
  !*** ./src/app/features/template/push/push-basic-example/push-basic-example.routes.ts ***!
  \****************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _push_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push-basic-example.component */ "+dvr");

const ROUTES = [
    {
        path: '',
        component: _push_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["PushBasicExampleComponent"]
    }
];


/***/ }),

/***/ "RoF3":
/*!****************************************************************************************!*\
  !*** ./src/app/features/template/push/push-basic-example/push-basic-example.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PushBasicExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushBasicExampleModule", function() { return PushBasicExampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _push_basic_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push-basic-example.component */ "+dvr");
/* harmony import */ var _push_basic_example_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./push-basic-example.routes */ "GCG1");










const DECLARATIONS = [_push_basic_example_component__WEBPACK_IMPORTED_MODULE_6__["PushBasicExampleComponent"]];
class PushBasicExampleModule {
}
PushBasicExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PushBasicExampleModule });
PushBasicExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PushBasicExampleModule_Factory(t) { return new (t || PushBasicExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_push_basic_example_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PushBasicExampleModule, { declarations: [_push_basic_example_component__WEBPACK_IMPORTED_MODULE_6__["PushBasicExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]], exports: [_push_basic_example_component__WEBPACK_IMPORTED_MODULE_6__["PushBasicExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PushBasicExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_push_basic_example_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=push-basic-example-push-basic-example-module.js.map