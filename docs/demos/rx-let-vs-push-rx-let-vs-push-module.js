(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-let-vs-push-rx-let-vs-push-module"],{

/***/ "DUEo":
/*!******************************************************************************!*\
  !*** ./src/app/features/performance/rx-let-vs-push/rx-let-vs-push.module.ts ***!
  \******************************************************************************/
/*! exports provided: RxLetVsPushModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxLetVsPushModule", function() { return RxLetVsPushModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _rx_let_vs_push_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-let-vs-push.component */ "Gb0M");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/debug-helper/rendering-work/rendering-work.module */ "QGmT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_let_vs_push_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rx-let-vs-push.routes */ "nC3G");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _list_toggle_test_component_list_toggle_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-toggle-test-component/list-toggle-test.component */ "nkMT");











class RxLetVsPushModule {
}
RxLetVsPushModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxLetVsPushModule });
RxLetVsPushModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxLetVsPushModule_Factory(t) { return new (t || RxLetVsPushModule)(); }, imports: [[
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_7__["TemplateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_rx_let_vs_push_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxLetVsPushModule, { declarations: [_rx_let_vs_push_component__WEBPACK_IMPORTED_MODULE_2__["RxLetVsPushComponent"], _list_toggle_test_component_list_toggle_test_component__WEBPACK_IMPORTED_MODULE_8__["ListToggleTestComponent"]], imports: [_rx_angular_template__WEBPACK_IMPORTED_MODULE_7__["TemplateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxLetVsPushModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rx_let_vs_push_component__WEBPACK_IMPORTED_MODULE_2__["RxLetVsPushComponent"], _list_toggle_test_component_list_toggle_test_component__WEBPACK_IMPORTED_MODULE_8__["ListToggleTestComponent"]],
                imports: [
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_7__["TemplateModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_rx_let_vs_push_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Gb0M":
/*!*********************************************************************************!*\
  !*** ./src/app/features/performance/rx-let-vs-push/rx-let-vs-push.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RxLetVsPushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxLetVsPushComponent", function() { return RxLetVsPushComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _list_toggle_test_component_list_toggle_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-toggle-test-component/list-toggle-test.component */ "nkMT");






function RxLetVsPushComponent_rxa_list_toggle_test_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-list-toggle-test", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true);
} }
function RxLetVsPushComponent_rxa_list_toggle_test_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-list-toggle-test", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false);
} }
function RxLetVsPushComponent_rxa_list_toggle_test_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-list-toggle-test", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true);
} }
function RxLetVsPushComponent_rxa_list_toggle_test_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-list-toggle-test", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false);
} }
class RxLetVsPushComponent {
    constructor() {
        this.showLetAutoTest = false;
        this.showLet = false;
        this.showPushAutoTest = false;
        this.showPush = false;
    }
    togglePush() {
        this.showPush = !this.showPush;
    }
    togglePushAutoTest() {
        this.showPushAutoTest = !this.showPushAutoTest;
    }
    toggleLet() {
        this.showLet = !this.showLet;
    }
    toggleLetAutoTest() {
        this.showLetAutoTest = !this.showLetAutoTest;
    }
}
RxLetVsPushComponent.ɵfac = function RxLetVsPushComponent_Factory(t) { return new (t || RxLetVsPushComponent)(); };
RxLetVsPushComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxLetVsPushComponent, selectors: [["rxa-rx-let-vs-push"]], decls: 21, vars: 4, consts: [[1, "row", "w-100"], [1, "col-sm-12", "col-md-6"], [2, "margin-bottom", "16px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"], ["type", "push", 3, "auto", 4, "ngIf"], ["type", "rxLet", 3, "auto", 4, "ngIf"], ["type", "push", 3, "auto"], ["type", "rxLet", 3, "auto"]], template: function RxLetVsPushComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Push vs RxLet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxLetVsPushComponent_Template_button_click_5_listener() { return ctx.togglePushAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Run Auto test for Push pipe (Start performance profiler beforehand) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxLetVsPushComponent_Template_button_click_8_listener() { return ctx.togglePush(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Open Manual test for Push pipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RxLetVsPushComponent_rxa_list_toggle_test_10_Template, 1, 1, "rxa-list-toggle-test", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RxLetVsPushComponent_rxa_list_toggle_test_11_Template, 1, 1, "rxa-list-toggle-test", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxLetVsPushComponent_Template_button_click_14_listener() { return ctx.toggleLetAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Run Auto test for Let directive (Start performance profiler beforehand) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxLetVsPushComponent_Template_button_click_17_listener() { return ctx.toggleLet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Open Manual test for Let directive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RxLetVsPushComponent_rxa_list_toggle_test_19_Template, 1, 1, "rxa-list-toggle-test", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RxLetVsPushComponent_rxa_list_toggle_test_20_Template, 1, 1, "rxa-list-toggle-test", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPushAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPush);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLetAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLet);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _list_toggle_test_component_list_toggle_test_component__WEBPACK_IMPORTED_MODULE_4__["ListToggleTestComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxLetVsPushComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-rx-let-vs-push',
                template: `
    <h1>Push vs RxLet</h1>
    <div class="row w-100">
      <div class="col-sm-12 col-md-6">
        <div style="margin-bottom: 16px">
          <button
            mat-raised-button
            color="primary"
            (click)="togglePushAutoTest()"
          >
            Run Auto test for Push pipe (Start performance profiler beforehand)
          </button>
        </div>
        <div style="margin-bottom: 16px">
          <button mat-raised-button color="secondary" (click)="togglePush()">
            Open Manual test for Push pipe
          </button>
        </div>
        <rxa-list-toggle-test
          *ngIf="showPushAutoTest"
          type="push"
          [auto]="true"
        ></rxa-list-toggle-test>
        <rxa-list-toggle-test
          *ngIf="showPush"
          type="push"
          [auto]="false"
        ></rxa-list-toggle-test>
      </div>

      <div class="col-sm-12 col-md-6">
        <div style="margin-bottom: 16px">
          <button
            mat-raised-button
            color="primary"
            (click)="toggleLetAutoTest()"
          >
            Run Auto test for Let directive (Start performance profiler
            beforehand)
          </button>
        </div>
        <div style="margin-bottom: 16px">
          <button mat-raised-button color="secondary" (click)="toggleLet()">
            Open Manual test for Let directive
          </button>
        </div>
        <rxa-list-toggle-test
          *ngIf="showLetAutoTest"
          type="rxLet"
          [auto]="true"
        ></rxa-list-toggle-test>
        <rxa-list-toggle-test
          *ngIf="showLet"
          type="rxLet"
          [auto]="false"
        ></rxa-list-toggle-test>
      </div>
    </div>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
            }]
    }], null, null); })();


/***/ }),

/***/ "nC3G":
/*!******************************************************************************!*\
  !*** ./src/app/features/performance/rx-let-vs-push/rx-let-vs-push.routes.ts ***!
  \******************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_let_vs_push_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-let-vs-push.component */ "Gb0M");

const ROUTES = [
    {
        path: '',
        redirectTo: 'rx-let-vs-push',
    },
    {
        path: 'list-toggle',
        component: _rx_let_vs_push_component__WEBPACK_IMPORTED_MODULE_0__["RxLetVsPushComponent"],
    },
];


/***/ }),

/***/ "nkMT":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/performance/rx-let-vs-push/list-toggle-test-component/list-toggle-test.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ListToggleTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListToggleTestComponent", function() { return ListToggleTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/rendering-work/rendering-work/rendering-work.component */ "kAS6");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");









function ListToggleTestComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of 1000 elements will be toggled 10 times");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListToggleTestComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListToggleTestComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListToggleTestComponent_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListToggleTestComponent_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-rendering-work", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 10);
} }
function ListToggleTestComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListToggleTestComponent_ng_container_3_p_1_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListToggleTestComponent_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.pushLoading$))("ngIfElse", _r8);
} }
function ListToggleTestComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-rendering-work", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 10);
} }
function ListToggleTestComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListToggleTestComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListToggleTestComponent_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListToggleTestComponent_ng_container_4_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx_r3.letLoading$)("rxLetSuspense", _r11);
} }
function ListToggleTestComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListToggleTestComponent {
    constructor() {
        this.letEmitted = false;
        this.pushLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.letLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.done$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 3000);
    }
    ngAfterViewInit() {
        if (this.auto) {
            this.process$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.type === 'push' ? this.togglePush() : this.toggleLet()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                this.done$.next(true);
            }))
                .subscribe();
        }
    }
    toggleList() {
        this.type === 'push' ? this.togglePush() : this.toggleLet();
    }
    togglePush() {
        this.pushLoading$.next(!this.pushLoading$.getValue());
    }
    toggleLet() {
        if (!this.letEmitted) {
            this.letEmitted = true;
            return this.letLoading$.next(true);
        }
        this.letLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.letEmitted = false;
    }
}
ListToggleTestComponent.ɵfac = function ListToggleTestComponent_Factory(t) { return new (t || ListToggleTestComponent)(); };
ListToggleTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListToggleTestComponent, selectors: [["rxa-list-toggle-test"]], inputs: { type: "type", auto: "auto" }, decls: 7, vars: 7, consts: [[1, "col-sm-12", "col-md-6"], [4, "ngIf"], ["color", "secondary", 3, "click"], [4, "ngIf", "ngIfElse"], ["pushContent", ""], [3, "factor"], [4, "rxLet", "rxLetSuspense"], ["suspenseTpl", ""]], template: function ListToggleTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListToggleTestComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListToggleTestComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListToggleTestComponent_ng_container_3_Template, 5, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListToggleTestComponent_ng_container_4_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListToggleTestComponent_p_5_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "rxLet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.done$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_5__["RenderingWorkComponent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["LetDirective"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListToggleTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-list-toggle-test',
                templateUrl: './list-toggle-test.component.html',
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], auto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=rx-let-vs-push-rx-let-vs-push-module.js.map