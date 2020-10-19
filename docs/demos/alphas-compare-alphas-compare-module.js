(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alphas-compare-alphas-compare-module"],{

/***/ "02J6":
/*!*********************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alphas-compare.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AlphasCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphasCompareComponent", function() { return AlphasCompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var templateAlpha1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! templateAlpha1 */ "iBM9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _alpha_0_toggle_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alpha-0-toggle/alpha-0-toggle.component */ "Bcsc");
/* harmony import */ var _alpha_1_toggle_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alpha-1-toggle/alpha-1-toggle.component */ "0Cd5");








function AlphasCompareComponent_rxa_alpha0_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha0", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true)("type", "push");
} }
function AlphasCompareComponent_rxa_alpha0_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha0", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false)("type", "push");
} }
function AlphasCompareComponent_rxa_alpha0_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha0", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true)("type", "rxLet");
} }
function AlphasCompareComponent_rxa_alpha0_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha0", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false)("type", "rxLet");
} }
function AlphasCompareComponent_rxa_alpha1_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha1", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true)("type", "push");
} }
function AlphasCompareComponent_rxa_alpha1_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha1", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false)("type", "push");
} }
function AlphasCompareComponent_rxa_alpha1_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha1", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", true)("type", "rxLet");
} }
function AlphasCompareComponent_rxa_alpha1_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-alpha1", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auto", false)("type", "rxLet");
} }
class AlphasCompareComponent {
    constructor() {
        this.show0PushAutoTest = false;
        this.show0Push = false;
        this.show0LetAutoTest = false;
        this.show0Let = false;
        this.show1PushAutoTest = false;
        this.show1Push = false;
        this.show1LetAutoTest = false;
        this.show1Let = false;
    }
    toggle0Push() {
        this.show0Push = !this.show0Push;
    }
    toggle0PushAutoTest() {
        this.show0PushAutoTest = !this.show0PushAutoTest;
    }
    toggle0Let() {
        this.show0Let = !this.show0Let;
    }
    toggle0LetAutoTest() {
        this.show0LetAutoTest = !this.show0LetAutoTest;
    }
    toggle1Push() {
        this.show1Push = !this.show1Push;
    }
    toggle1PushAutoTest() {
        this.show1PushAutoTest = !this.show1PushAutoTest;
    }
    toggle1Let() {
        this.show1Let = !this.show1Let;
    }
    toggle1LetAutoTest() {
        this.show1LetAutoTest = !this.show1LetAutoTest;
    }
}
AlphasCompareComponent.ɵfac = function AlphasCompareComponent_Factory(t) { return new (t || AlphasCompareComponent)(); };
AlphasCompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlphasCompareComponent, selectors: [["rxa-alphas-compare"]], decls: 39, vars: 8, consts: [[1, "row", "w-100"], [1, "col-sm-12", "col-md-3"], [2, "margin-bottom", "16px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "unpatch", "click"], [3, "auto", "type", 4, "ngIf"], ["mat-raised-button", "", "color", "secondary", 3, "click"], [3, "auto", "type"]], template: function AlphasCompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alpha 0 vs Beta 0 (To enable Alpha 1 check alpha-1-toggle.module)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_5_listener() { return ctx.toggle0PushAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Run Auto test for Push pipe in Alpha 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_8_listener() { return ctx.toggle0Push(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Open Manual test for Push pipe in Alpha 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlphasCompareComponent_rxa_alpha0_10_Template, 1, 2, "rxa-alpha0", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AlphasCompareComponent_rxa_alpha0_11_Template, 1, 2, "rxa-alpha0", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_14_listener() { return ctx.toggle0LetAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Run Auto test for Let in Alpha 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_17_listener() { return ctx.toggle0Let(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Open Manual test for Let in Alpha 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AlphasCompareComponent_rxa_alpha0_19_Template, 1, 2, "rxa-alpha0", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AlphasCompareComponent_rxa_alpha0_20_Template, 1, 2, "rxa-alpha0", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_23_listener() { return ctx.toggle1PushAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Run Auto test for Push in Alpha 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_26_listener() { return ctx.toggle1Push(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Open Manual test for Push pipe in Alpha 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AlphasCompareComponent_rxa_alpha1_28_Template, 1, 2, "rxa-alpha1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AlphasCompareComponent_rxa_alpha1_29_Template, 1, 2, "rxa-alpha1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_32_listener() { return ctx.toggle1LetAutoTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Run Auto test for Let in Alpha 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlphasCompareComponent_Template_button_click_35_listener() { return ctx.toggle1Let(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Open Manual test for Let in Alpha 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AlphasCompareComponent_rxa_alpha1_37_Template, 1, 2, "rxa-alpha1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AlphasCompareComponent_rxa_alpha1_38_Template, 1, 2, "rxa-alpha1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show0PushAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show0Push);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show0LetAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show0Let);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show1PushAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show1Push);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show1LetAutoTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show1Let);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], templateAlpha1__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _alpha_0_toggle_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_5__["Alpha0ToggleComponent"], _alpha_1_toggle_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_6__["Alpha1ToggleComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlphasCompareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-alphas-compare',
                templateUrl: './alphas-compare.component.html',
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
            }]
    }], null, null); })();


/***/ }),

/***/ "0Cd5":
/*!************************************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alpha-1-toggle/alpha-1-toggle.component.ts ***!
  \************************************************************************************************/
/*! exports provided: Alpha1ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alpha1ToggleComponent", function() { return Alpha1ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/rendering-work/rendering-work/rendering-work.component */ "kAS6");
/* harmony import */ var templateAlpha1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! templateAlpha1 */ "iBM9");








function Alpha1ToggleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of 2000 elements will be toggled 10 times");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function Alpha1ToggleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Alpha1ToggleComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function Alpha1ToggleComponent_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Alpha1ToggleComponent_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-rendering-work", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 20);
} }
function Alpha1ToggleComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha1ToggleComponent_ng_container_3_p_1_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Alpha1ToggleComponent_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.pushLoading$))("ngIfElse", _r8);
} }
function Alpha1ToggleComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-rendering-work", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 20);
} }
function Alpha1ToggleComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Alpha1ToggleComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha1ToggleComponent_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Alpha1ToggleComponent_ng_container_4_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx_r3.letLoading$)("rxLetSuspense", _r11);
} }
function Alpha1ToggleComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Alpha1ToggleComponent {
    constructor() {
        this.letEmitted = false;
        this.pushLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.letLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.done$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(800, 800);
    }
    ngAfterViewInit() {
        if (this.auto) {
            this.process$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.type === 'push' ? this.togglePush() : this.toggleLet()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
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
Alpha1ToggleComponent.ɵfac = function Alpha1ToggleComponent_Factory(t) { return new (t || Alpha1ToggleComponent)(); };
Alpha1ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Alpha1ToggleComponent, selectors: [["rxa-alpha1"]], inputs: { type: "type", auto: "auto" }, decls: 7, vars: 7, consts: [[1, "col-sm-12", "col-md-6"], [4, "ngIf"], ["color", "secondary", 3, "click"], [4, "ngIf", "ngIfElse"], ["pushContent", ""], [3, "factor"], [4, "rxLet", "rxLetSuspense"], ["suspenseTpl", ""]], template: function Alpha1ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha1ToggleComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Alpha1ToggleComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Alpha1ToggleComponent_ng_container_3_Template, 5, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Alpha1ToggleComponent_ng_container_4_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Alpha1ToggleComponent_p_5_Template, 2, 0, "p", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_5__["RenderingWorkComponent"], templateAlpha1__WEBPACK_IMPORTED_MODULE_6__["LetDirective"]], pipes: [templateAlpha1__WEBPACK_IMPORTED_MODULE_6__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Alpha1ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-alpha1',
                templateUrl: './alpha-1-toggle.component.html',
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].changeDetection,
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], auto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2Vpe":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/templateAlpha0/__ivy_ngcc__/fesm2015/rx-angular-template.js ***!
  \************************************************************************************************************************/
/*! exports provided: LetDirective, LetModule, PushModule, PushPipe, SchedulingPriority, TemplateModule, UnpatchEventsDirective, UnpatchEventsModule, apiZonePatched, coalesceAndSchedule, coalesceWith, createCoalesceManager, createPropertiesWeakMap, createRenderAware, envZonePatched, getGlobalThis, getPostTaskScheduler, getScheduler, getStrategies, getUnpatchedResolvedPromise, getZoneUnPatchedApi, idleScheduler, isNgZone, isNoopNgZone, isViewEngineIvy, nameToStrategy, prioritySchedulerMap, renderChange, schedule, staticCoalesce, toObservableValue, unpatchEventListener, unpatchedAnimationFrameScheduler, unpatchedAsapScheduler, ɵ0, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetDirective", function() { return LetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetModule", function() { return LetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushModule", function() { return PushModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPipe", function() { return PushPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return SchedulingPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsDirective", function() { return UnpatchEventsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsModule", function() { return UnpatchEventsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiZonePatched", function() { return apiZonePatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesceAndSchedule", function() { return coalesceAndSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return coalesceWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoalesceManager", function() { return createCoalesceManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPropertiesWeakMap", function() { return createPropertiesWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderAware", function() { return createRenderAware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envZonePatched", function() { return envZonePatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostTaskScheduler", function() { return getPostTaskScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScheduler", function() { return getScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return getStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnpatchedResolvedPromise", function() { return getUnpatchedResolvedPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return getZoneUnPatchedApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idleScheduler", function() { return idleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return isNgZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNoopNgZone", function() { return isNoopNgZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewEngineIvy", function() { return isViewEngineIvy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameToStrategy", function() { return nameToStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prioritySchedulerMap", function() { return prioritySchedulerMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderChange", function() { return renderChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticCoalesce", function() { return staticCoalesce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObservableValue", function() { return toObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpatchEventListener", function() { return unpatchEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpatchedAnimationFrameScheduler", function() { return unpatchedAnimationFrameScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpatchedAsapScheduler", function() { return unpatchedAsapScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PushModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return UnpatchEventsModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "aiQ1");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "D57K");







function toObservableValue(p) {
    // @ts-ignore
    return p == null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(p) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(p);
}

function nameToStrategy(strategies) {
    return (o$) => {
        return o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((strategy) => {
            const s = strategies[strategy];
            if (!!s) {
                return s;
            }
            throw new Error(`Strategy ${strategy} does not exist.`);
        }));
    };
}

/**
 * RenderAware
 *
 * @description
 * This function returns an object that holds all the shared logic for the push pipe and the let directive
 * responsible for change detection
 * If you extend this class you need to implement how the update of the rendered value happens.
 * Also custom behaviour is something you need to implement in the extending class
 */
function createRenderAware(cfg) {
    const strategyName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    const strategy$ = strategyName$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(stringOrObservable => typeof stringOrObservable === 'string'
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(stringOrObservable)
        : stringOrObservable), nameToStrategy(cfg.strategies));
    const observablesFromTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    const valuesFromTemplate$ = observablesFromTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    let firstTemplateObservableChange = true;
    const renderingEffect$ = valuesFromTemplate$.pipe(
    // handle null | undefined assignment and new Observable reset
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(observable$ => {
        if (observable$ === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
        if (!firstTemplateObservableChange) {
            cfg.resetObserver.next();
            if (observable$ === undefined) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
            }
        }
        firstTemplateObservableChange = false;
        return observable$;
    }), 
    // forward only observable values
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(o$ => o$ !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(o$ => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(cfg.updateObserver))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(strategy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(([v, strat]) => strat.scheduleCD()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(e => {
        console.error(e);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
    }));
    return {
        nextPotentialObservable(value) {
            observablesFromTemplate$.next(value);
        },
        nextStrategy(nextConfig) {
            strategyName$.next(nextConfig);
        },
        activeStrategy$: strategy$,
        subscribe() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]()
                .add(strategy$.subscribe())
                .add(renderingEffect$.subscribe());
        }
    };
}

/**
 * @description
 *
 * A fallback for the new `globalThis` reference.
 *
 *  It should be used to replace `window` due to different environments in:
 *  - SSR (Server Side Rendering)
 *  - Tests
 *  - Browser
 *
 *  @return {globalThis} - A reference to globalThis. `window` in the Browser.
 */
function getGlobalThis() {
    return (globalThis || self || window);
}

/*
 * createPropertiesWeakMap
 *
 * @param getDefaults: (o: O) => P
 * Example:
 *
 * export interface Properties {
 *   isCoalescing: boolean;
 * }
 *
 * const obj: object = {
 *   foo: 'bar',
 *   isCoalescing: 'weakMap version'
 * };
 *
 * const getDefaults = (ctx: object): Properties => ({isCoalescing: false});
 * const propsMap = createPropertiesWeakMap<object, Properties>(getDefaults);
 *
 * console.log('obj before:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props before:', propsMap.getProps(obj));
 * // {isCoalescing: "weakMap version"}
 *
 * propsMap.setProps(obj, {isCoalescing: true});
 * console.log('obj after:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props after:', propsMap.getProps(obj));
 * // {isCoalescing: "true"}
 * */
function createPropertiesWeakMap(getDefaults) {
    const propertyMap = new WeakMap();
    return {
        getProps: getProperties,
        setProps: setProperties
    };
    function getProperties(ctx) {
        const defaults = getDefaults(ctx);
        const propertiesPresent = propertyMap.get(ctx);
        let properties;
        if (propertiesPresent !== undefined) {
            properties = propertiesPresent;
        }
        else {
            properties = {};
            Object.entries(defaults).forEach(([prop, value]) => {
                properties[prop] = hasKey(ctx, prop) ? ctx[prop] : value;
            });
            propertyMap.set(ctx, properties);
        }
        return properties;
    }
    function setProperties(ctx, props) {
        const properties = getProperties(ctx);
        Object.entries(props).forEach(([prop, value]) => {
            properties[prop] = value;
        });
        propertyMap.set(ctx, properties);
        return properties;
    }
    function hasKey(ctx, property) {
        return ctx[property] != null;
    }
}

/**
 * envZonePatched
 *
 * @description
 *
 * This function checks the window object `zone.js` was instantiated.
 * If so, the `window` object maintains a property named `Zone`.
 *
 * Here how Angular checks it: https://github.com/angular/angular/blob/master/packages/core/src/zone/ng_zone.ts#L123
 *
 * @return {boolean} - true if `zone.js` patched global APIs.
 *
 */
function envZonePatched() {
    return getGlobalThis().Zone !== undefined;
}
/**
 * apiZonePatched
 *
 * @description
 *
 * This function checks if a specific Browser API is patched by `zone.js`.
 *
 * @param name {string} - The name of the API to check.
 * @return {boolean} - true if `zone.js` patched the API in question.
 *
 */
function apiZonePatched(name) {
    // if symbol is present, zone patched the API
    return getGlobalThis()['__zone_symbol__' + name] !== undefined;
}
const zoneDetectionCache = new WeakMap();
/**
 * isNgZone
 *
 * @description
 *
 * This function takes an instance of a class which implements the NgZone interface and checks if
 * its `runOutsideAngular()` function calls `apply()` on the function passed as parameter. This
 * means the Angular application that instantiated this service assumes it runs in a ZoneLess
 * environment, and therefore it's change detection will not be triggered by zone related logic.
 *
 * However, keep in mind this does not mean `zone.js` is not present.
 * The environment could still run in ZoneFull mode even if Angular turned it off.
 * Consider the situation of a Angular element configured for ZoneLess
 * environments is used in an Angular application relining on the zone mechanism.
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NgZone`.
 * @return {boolean} - true if instance is of type `NgZone`.
 *
 */
function isNgZone(instance) {
    const cachedValue = zoneDetectionCache.get(instance);
    if (cachedValue !== undefined) {
        return cachedValue;
    }
    let calledApply = false;
    function fn() { }
    fn.apply = () => (calledApply = true);
    instance.runOutsideAngular(fn);
    zoneDetectionCache.set(instance, calledApply);
    return calledApply;
}
/**
 * isNoopNgZone
 *
 *@description
 *
 * This function takes any instance of a class and checks
 * if the constructor name is equal to `NoopNgZone`.
 *
 * For more detailed information read the description of [isNgZone](#isngzone).
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NoopNgZone`.
 * @return {boolean} - true if instance is of type `NoopNgZone`.
 *
 */
function isNoopNgZone(instance) {
    return !isNgZone(instance);
}

/** A shared promise instance to cause a delay of one microtask */
let resolvedPromise = null;
function getUnpatchedResolvedPromise() {
    resolvedPromise =
        resolvedPromise ||
            (apiZonePatched('Promise')
                ? getGlobalThis().__zone_symbol__Promise.resolve()
                : Promise.resolve());
    return resolvedPromise;
}

/**
 * envRunsIvy
 *
 * @description
 * Determines the used view engine of an Angular project is Ivy or not.
 * The check is done based on following table:
 * | render       | ViewEngine | ViewEngine | Ivy         | Ivy         |
 * | ------------ | ---------- | ---------- | ----------- | ----------- |
 * | **mode**     | prod       | dev        | prod        | dev         |
 * | **ng**       | present    | present    | `undefined` | present     |
 * | **ng.probe** | present    | present    | `undefined` | `undefined` |
 *
 *  So for Ivy we need to make sure that ng is undefined or,
 *  in case of dev environment, ng.probe is undefined.
 *
 * @return {boolean} - true if the used view engine is Ivy.
 *
 */
function isViewEngineIvy() {
    const ng = getGlobalThis().ng;
    // Is the global ng object is unavailable?
    // ng === undefined in Ivy production mode
    // View Engine has the ng object both in development mode and production mode.
    return (ng === undefined ||
        // in case we are in dev mode in ivy
        // `probe` property is available on ng object we use View Engine.
        ng.probe === undefined);
}

/**
 * getZoneUnPatchedApi
 *
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no element is passed the window is used instead
 *
 * @param name {string} - The name of the API to check.
 * @param elem {any} - The elem to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */
function getZoneUnPatchedApi(name, elem) {
    elem = elem || getGlobalThis();
    return apiZonePatched(name) ? elem['__zone_symbol__' + name] : elem[name];
}
/**
 *
 * @description
 *
 * This function takes an elem and event and re-applies the listeners from the passed event to the
 * passed element with the zone un-patched version of it.
 *
 * @param elem {HTMLElement} - The elem to re-apply the listeners to.
 * @param event {string} - The name of the event from which to re-apply the listeners.
 *
 * @returns void
 */
function unpatchEventListener(elem, event) {
    const eventListeners = elem.eventListeners(event);
    // Return if no event listeners are present
    if (!eventListeners) {
        return;
    }
    const addEventListener = getZoneUnPatchedApi('addEventListener', elem).bind(elem);
    eventListeners.forEach(listener => {
        // Remove and reapply listeners with patched API
        elem.removeEventListener(event, listener);
        // Reapply listeners with un-patched API
        addEventListener(event, listener);
    });
}

const ɵ0 = ctx => ({
    numCoalescingSubscribers: 0
});
const coalescingContextPropertiesMap = createPropertiesWeakMap(ɵ0);
function createCoalesceManager(scope = {}) {
    return {
        remove: removeSubscriber,
        add: addSubscription,
        isCoalescing
    };
    // Increments the number of subscriptions in a scope e.g. a class instance
    function removeSubscriber() {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers -
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Decrements the number of subscriptions in a scope e.g. a class instance
    function addSubscription() {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers +
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Checks if anybody else is already coalescing atm
    function isCoalescing() {
        return (coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers >
            0);
    }
}

/**
 * @description
 * Limits the number of synchronous emitted a value from the source Observable to
 * one emitted value per
 *   [`AnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), then repeats
 *   this process for every tick of the browsers event loop.
 *
 * The coalesce operator is based on the [throttle](https://rxjs-dev.firebaseapp.com/api/operators/throttle) operator.
 * In addition to that is provides emitted values for the trailing end only, as well as maintaining a context to scope
 *   coalescing.
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector - A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * It defaults to `requestAnimationFrame` as durationSelector.
 * @param {Object} config - A configuration object to define `leading` and `trailing` behavior and the context object.
 * Defaults to `{ leading: false, trailing: true }`. The default scoping is per subscriber.
 * @return {Observable<T>} An Observable that performs the coalesce operation to
 * limit the rate of emissions from the source.
 *
 * @usageNotes
 * Emit clicks at a rate of at most one click per second
 * ```ts
 * import { fromEvent, animationFrames } from 'rxjs';
 * import { coalesce } from 'ngRx/component';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(coalesce(ev => animationFrames));
 * result.subscribe(x => console.log(x));
 * ```
 */
function coalesceWith(durationSelector, scope) {
    const _scope = scope || {};
    return source => {
        const o$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            const rootSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
            rootSubscription.add(source.subscribe(createInnerObserver(observer, rootSubscription)));
            return rootSubscription;
        });
        return o$;
        function createInnerObserver(outerObserver, rootSubscription) {
            let actionSubscription;
            let latestValue;
            const coa = createCoalesceManager(_scope);
            const tryEmitLatestValue = () => {
                coa.remove();
                if (!coa.isCoalescing()) {
                    outerObserver.next(latestValue);
                }
            };
            return {
                complete: () => {
                    if (actionSubscription) {
                        tryEmitLatestValue();
                    }
                    outerObserver.complete();
                },
                error: error => outerObserver.error(error),
                next: value => {
                    latestValue = value;
                    if (!actionSubscription) {
                        coa.add();
                        actionSubscription = durationSelector.subscribe({
                            next: () => {
                                tryEmitLatestValue();
                                actionSubscription = undefined;
                            },
                            complete: () => {
                                if (actionSubscription) {
                                    tryEmitLatestValue();
                                    actionSubscription = undefined;
                                }
                            }
                        });
                        rootSubscription.add(actionSubscription);
                    }
                }
            };
        }
    };
}

function renderChange(strategy) {
    return (s) => {
        return s.pipe(strategy.behavior, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(v => strategy.renderMethod()));
    };
}

const unpatchedAsapScheduler = {
    now() {
        return 0;
    },
    schedule(work, options, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise()).subscribe(() => work(state));
    }
};

/**
 *
 * Implementation based on rxjs-etc => IdleScheduler
 *
 */
var PostTaskSchedulerPriority;
(function (PostTaskSchedulerPriority) {
    PostTaskSchedulerPriority["background"] = "background";
    PostTaskSchedulerPriority["userBlocking"] = "user-blocking";
    PostTaskSchedulerPriority["userVisible"] = "user-visible";
})(PostTaskSchedulerPriority || (PostTaskSchedulerPriority = {}));
const postTaskScheduler = typeof window !== 'undefined'
    ? window.scheduler || {
        postTask(options) {
            const start = Date.now();
            return new Promise(resolve => {
                setTimeout(function () {
                    console.error('postTask not implemented. Use setTimeout as fallback');
                    resolve();
                }, 1);
            });
        }
    }
    : () => { };
class PostTaskAction extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(work) {
        super();
        this.work = work;
    }
    schedule(state, delay) {
        if (this.closed) {
            return this;
        }
        return this._scheduler.schedule(this.work, delay, state);
    }
}
function getPostTaskScheduler(priority) {
    return {
        now() {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"].now();
        },
        schedule(work, options = {}, state) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(options) && options.delay) {
                return rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"].schedule(work, options.delay, state);
            }
            options = Object.assign(Object.assign({}, options), { priority });
            const action = new PostTaskAction(work);
            // weired hack
            action._scheduler = this;
            const promise = postTaskScheduler
                .postTask(() => { }, options)
                .then(() => {
                try {
                    work.call(action, state);
                }
                catch (error) {
                    action.unsubscribe();
                    throw error;
                }
            });
            action.add(() => {
                throw new Error('not implemented');
            });
            return action;
        }
    };
}

const cancelIdleCallback = typeof window !== 'undefined'
    ? window.cancelIdleCallback ||
        function (idleId) {
            console.warn('Fake cancelIdleCallback used');
            clearTimeout(idleId);
        }
    : () => { };
const requestIdleCallback = typeof window !== 'undefined'
    ? window.requestIdleCallback ||
        function (cb) {
            console.warn('Fake requestIdleCallback used');
            const start = Date.now();
            return setTimeout(function () {
                cb({
                    didTimeout: false,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - start));
                    }
                });
            }, 1);
        }
    : () => { };
class IdleAction extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(work) {
        super();
        this.work = work;
    }
    schedule(state, delay) {
        if (this.closed) {
            return this;
        }
        return idleScheduler.schedule(this.work, delay, state);
    }
}
const idleScheduler = {
    now() {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"].now();
    },
    schedule(work, delay, state) {
        if (delay) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"].schedule(work, delay, state);
        }
        const action = new IdleAction(work);
        const id = requestIdleCallback(() => {
            try {
                work.call(action, state);
            }
            catch (error) {
                action.unsubscribe();
                throw error;
            }
        });
        action.add(() => cancelIdleCallback(id));
        return action;
    }
};

const ɵ0$1 = subscriber => {
    let i = 0;
    const id = getZoneUnPatchedApi('requestAnimationFrame')(() => {
        subscriber.next(++i);
    });
    return () => {
        getZoneUnPatchedApi('cancelAnimationFrame')(id);
    };
};
const animationFrameTick = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](ɵ0$1);
const unpatchedAnimationFrameScheduler = {
    now() {
        return 0;
    },
    schedule(work, options, state) {
        return animationFrameTick.subscribe(() => work(state));
    }
};

var SchedulingPriority;
(function (SchedulingPriority) {
    SchedulingPriority["animationFrame"] = "animationFrame";
    SchedulingPriority["Promise"] = "Promise";
    SchedulingPriority["idleCallback"] = "idleCallback";
    SchedulingPriority["userBlocking"] = "userBlocking";
    SchedulingPriority["userVisible"] = "userVisible";
    SchedulingPriority["background"] = "background";
    SchedulingPriority["setInterval"] = "setInterval";
})(SchedulingPriority || (SchedulingPriority = {}));

const prioritySchedulerMap = {
    animationFrame: rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"],
    Promise: rxjs__WEBPACK_IMPORTED_MODULE_0__["asapScheduler"],
    setInterval: rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"],
    idleCallback: idleScheduler,
    userBlocking: getPostTaskScheduler(PostTaskSchedulerPriority.userBlocking),
    userVisible: getPostTaskScheduler(PostTaskSchedulerPriority.userVisible),
    background: getPostTaskScheduler(PostTaskSchedulerPriority.background)
};
function getScheduler(priority) {
    if (!prioritySchedulerMap.hasOwnProperty(priority)) {
        throw new Error(`priority ${priority} is not present in prioritiesMap`);
    }
    return prioritySchedulerMap[priority];
}

function staticCoalesce(work, durationSelector, scope = {}) {
    const coalescingManager = createCoalesceManager(scope);
    if (!coalescingManager.isCoalescing()) {
        coalescingManager.add();
        durationSelector.subscribe(() => {
            tryExecuteWork();
        });
    }
    // =====
    function tryExecuteWork() {
        coalescingManager.remove();
        if (!coalescingManager.isCoalescing()) {
            return work();
        }
    }
}

function schedule(work, priority) {
    return getScheduler(priority).schedule(() => work());
}

function coalesceAndSchedule(work, priority, scope = {}) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scheduledWork = () => schedule(work, priority);
    staticCoalesce(scheduledWork, durationSelector, scope);
}

/**
 * Noop Strategy
 *
 * This strategy is does nothing. It serves for debugging only
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `noop`      | ❌/❌         | no rendering        | ❌               |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createNoopStrategy() {
    return {
        name: 'noop',
        renderMethod: () => { },
        behavior: o => o,
        scheduleCD: () => { }
    };
}

/**
 * Native Strategy
 * @description
 *
 * This strategy mirrors Angular's built-in `async` pipe.
 * This means for every emitted value `ChangeDetectorRef#markForCheck` is called.
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `native`    | ❌/❌         | mFC / mFC           | ❌               |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createNativeStrategy(config) {
    return {
        name: 'native',
        renderMethod: config.cdRef.markForCheck,
        behavior: o => o,
        scheduleCD: () => {
            config.cdRef.markForCheck();
        }
    };
}

/**
 * Strategies
 *
 * - VE/I - Options for ViewEngine / Ivy
 * - mFC - `cdRef.markForCheck`
 * - dC - `cdRef.detectChanges`
 * - ɵMD - `ɵmarkDirty`
 * - ɵDC - `ɵdetectChanges`
 * - LV  - `LView`
 * - C - `Component`
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------------- | ---------------- |
 * | `local`    | ✔/✔ ️        | dC / ɵDC            | ✔ ️ + C/ LV     |
 * | `detach`   | ❌/✔ ️       | mFC  / ɵMD          | ❌               |
 * | `postTask` | ❌/✔ ️       | mFC  / ɵMD          | ❌               |
 * | `idleCallback` | ❌/✔ ️   | mFC  / ɵMD          | ❌               |
 *
 */
function getLocalStrategies(config) {
    return {
        local: createLocalStrategy(config),
        localCoalesce: createLocalCoalesceStrategy(config),
        localCoalesceAndSchedule: createLocalCoalesceAndScheduleStrategy(config),
        localNative: createLocalNativeStrategy(config),
        detach: createDetachStrategy(config),
        userVisible: createUserVisibleStrategy(config),
        userBlocking: createUserBlockingStrategy(config),
        background: createBackgroundStrategy(config),
        idleCallback: createIdleCallbackStrategy(config)
    };
}
function createLocalNativeStrategy(config) {
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe();
    const scheduleCD = () => renderMethod();
    return {
        name: 'localNative',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  Local Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges has no coalescing of render calls
 * like `ChangeDetectorRef#markForCheck` or `ɵmarkDirty` has, so we have to apply our own coalescing, 'scoped' on
 * component level.
 *
 * Coalescing, in this very manner,
 * means **collecting all events** in the same
 * [EventLoop](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop) tick, that would cause a re-render and
 * execute **re-rendering only once**.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events by** a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `ɵlocal`    | ✔️/✔️    | dC / dC             | ✔️ + C         |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createLocalStrategy(config) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'local',
        renderMethod,
        behavior,
        scheduleCD
    };
}
function createLocalCoalesceStrategy(config) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'localCoalesce',
        renderMethod,
        behavior,
        scheduleCD
    };
}
function createLocalCoalesceAndScheduleStrategy(config) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'localCoalesceAndSchedule',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  Detach Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges has no coalescing of render calls
 * like `ChangeDetectorRef#markForCheck` or `ɵmarkDirty` has, so we have to apply our own coalescing, 'scoped' on
 * component level.
 *
 * Coalescing, in this very manner,
 * means **collecting all events** in the same
 * [EventLoop](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop) tick, that would cause a re-render and
 * execute **re-rendering only once**.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events by** a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `ɵdetach`     | ✔️/✔️          | dC / ɵDC            | ✔️ + C/ LV       |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createDetachStrategy(config) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.reattach();
        config.cdRef.detectChanges();
        config.cdRef.detach();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'detach',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  PostTask - Priority UserVisible Strategy
 *
 */
function createUserVisibleStrategy(config) {
    const durationSelector = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(postTaskScheduler.postTask(() => void 0, {
            priority: PostTaskSchedulerPriority.userVisible,
            delay: 0
        })).subscribe(subscriber);
    });
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.background;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'userVisible',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  PostTask - Priority UserBlocking Strategy
 *
 */
function createUserBlockingStrategy(config) {
    const durationSelector = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(postTaskScheduler.postTask(() => void 0, {
            priority: PostTaskSchedulerPriority.userVisible,
            delay: 0
        })).subscribe(subscriber);
    });
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.background;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => {
        staticCoalesce(renderMethod, durationSelector, scope);
        // coalesceAndSchedule(renderMethod, priority, scope);
    };
    return {
        name: 'userBlocking',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  PostTask - Priority Background Strategy
 *
 */
function createBackgroundStrategy(config) {
    const durationSelector = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(postTaskScheduler.postTask(() => void 0, {
            priority: PostTaskSchedulerPriority.userVisible,
            delay: 0
        })).subscribe(subscriber);
    });
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.background;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => {
        staticCoalesce(renderMethod, durationSelector, scope);
        // coalesceAndSchedule(renderMethod, priority, scope);
    };
    return {
        name: 'background',
        renderMethod,
        behavior,
        scheduleCD
    };
}
/**
 *  IdleCallback Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges is used the coalescing described in `ɵlocal` is implemented here.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events by** a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `ɵdetach`     | ✔️/✔️          | dC / ɵDC            | ✔️ + C/ LV       |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createIdleCallbackStrategy(config) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scope = config.cdRef.context;
    const priority = SchedulingPriority.idleCallback;
    const scheduler = getScheduler(priority);
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(coalesceWith(durationSelector, scope), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(scheduler));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, scope);
    return {
        name: 'idleCallback',
        renderMethod,
        behavior,
        scheduleCD
    };
}

function getGlobalStrategies(config) {
    return {
        global: createGlobalStrategy(config)
    };
}
/**
 * Strategies
 *
 * - VE/I - Options for ViewEngine / Ivy
 * - mFC - `cdRef.markForCheck`
 * - dC - `cdRef.detectChanges`
 * - ɵMD - `ɵmarkDirty`
 * - ɵDC - `ɵdetectChanges`
 * - LV  - `LView`
 * - C - `Component`
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------------- | ---------------- |
 * | `global`   | ❌/✔ ️        | mFC  / ɵMD          | ❌               |
 *
 */
/**
 *
 * Global Strategy
 *
 * This strategy is rendering the application root and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing       |
 * |-------------| --------------| ------------ ------ | ---------------- |
 * | `global`   | ❌/✔️       | mFC / ɵMD           | ❌                |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createGlobalStrategy(config) {
    const renderMethod = () => Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵmarkDirty"])(config.cdRef.context);
    return {
        name: 'global',
        renderMethod,
        behavior: o => o,
        scheduleCD: () => renderMethod()
    };
}

const DEFAULT_STRATEGY_NAME = 'local';
function getStrategies(config) {
    return Object.assign(Object.assign({ noop: createNoopStrategy(), native: createNativeStrategy(config) }, getGlobalStrategies(config)), getLocalStrategies(config));
}
/**
 * Strategies
 *
 * - VE/I - Options for ViewEngine / Ivy
 * - mFC - `cdRef.markForCheck`
 * - dC - `cdRef.detectChanges`
 * - ɵMD - `ɵmarkDirty`
 * - ɵDC - `ɵdetectChanges`
 * - LV  - `LView`
 * - C - `Component`
 *
 * | Name        | ZoneLess VE/I | Render Method VE/I  | Coalescing VE/I  |
 * |-------------| --------------| ------------------- | ---------------- |
 * | `noop`      | ❌/❌          | no rendering        | ❌               |
 * | `native`    | ❌/❌          | mFC / mFC           | ❌               |
 * | `global`    | ❌/✔ ️       | mFC  / ɵMD           | ❌               |
 * | `local`     | ✔/✔ ️        | dC / ɵDC            | ✔ ️ + C/ LV     |
 * | `ɵglobal`   | ❌/✔ ️       | mFC  / ɵMD          | ❌               |
 * | `ɵlocal`    | ✔/✔ ️       | dC / ɵDC             | ✔ ️ + C/ LV     |
 * | `ɵdetach`   | ❌/✔ ️       | mFC  / ɵMD          | ❌               |
 *
 */

/**
 * @Pipe PushPipe
 *
 * @description
 *
 * The `push` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * The current way of binding an observable to the view looks like that:
 *  ```html
 *  {{observable$ | async}}
 * <ng-container *ngIf="observable$ | async as o">{{o}}</ng-container>
 * <component [value]="observable$ | async"></component>
 * ```
 *
 * The problem is `async` pipe just marks the component and all its ancestors as dirty.
 * It needs zone.js microtask queue to exhaust until `ApplicationRef.tick` is called to render all dirty marked
 *     components.
 *
 * Heavy dynamic and interactive UIs suffer from zones change detection a lot and can
 * lean to bad performance or even unusable applications, but the `async` pipe does not work in zone-less mode.
 *
 * `push` pipe solves that problem.
 *
 * Included Features:
 *  - Take observables or promises, retrieve their values and render the value to the template
 *  - Handling null and undefined values in a clean unified/structured way
 *  - Triggers change-detection differently if `zone.js` is present or not (`detectChanges` or `markForCheck`)
 *  - Distinct same values in a row to increase performance
 *  - Coalescing of change detection calls to boost performance
 *
 * @usageNotes
 *
 * `push` pipe solves that problem. It can be used like shown here:
 * ```html
 * {{observable$ | push}}
 * <ng-container *ngIf="observable$ | push as o">{{o}}</ng-container>
 * <component [value]="observable$ | push"></component>
 * ```
 *
 * @publicApi
 */
let PushPipe = class PushPipe {
    constructor(cdRef) {
        this.resetObserver = {
            next: () => {
                this.renderedValue = undefined;
            }
        };
        this.updateObserver = {
            next: (value) => (this.renderedValue = value)
        };
        this.RenderAware = createRenderAware({
            strategies: getStrategies({ cdRef }),
            updateObserver: this.updateObserver,
            resetObserver: this.resetObserver
        });
        this.subscription = this.RenderAware.subscribe();
    }
    transform(potentialObservable, config) {
        const strategy = config || DEFAULT_STRATEGY_NAME;
        this.RenderAware.nextStrategy(strategy);
        this.RenderAware.nextPotentialObservable(potentialObservable);
        return this.renderedValue;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
PushPipe.ɵfac = function PushPipe_Factory(t) { return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectPipeChangeDetectorRef"]()); };
PushPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({ name: "push", type: PushPipe, pure: false });
PushPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PushPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PushPipe);

const DECLARATIONS = [PushPipe];
let PushModule = class PushModule {
};
PushModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PushModule });
PushModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PushModule_Factory(t) { return new (t || PushModule)(); }, imports: [[]] });

/**
 * @Directive LetDirective
 *
 * @description
 *
 * The `*rxLet` directive serves a convenient way of binding observables to a view context (a dom element scope).
 * It also helps with several internal processing under the hood.
 *
 * The current way of binding an observable to the view looks like that:
 * ```html
 * <ng-container *ngIf="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * <app-number-special [number]="n">
 * </app-number-special>
 * </ng-container>
 *  ```
 *
 *  The problem is `*ngIf` is also interfering with rendering and in case of a `0` the component would be hidden
 *
 * Included Features:
 * - binding is always present. (`*ngIf="truthy$"`)
 * - it takes away the multiple usages of the `async` or `push` pipe
 * - a unified/structured way of handling null and undefined
 * - triggers change-detection differently if `zone.js` is present or not (`ChangeDetectorRef.detectChanges` or
 *   `ChangeDetectorRef.markForCheck`)
 * - triggers change-detection differently if ViewEngine or Ivy is present (`ChangeDetectorRef.detectChanges` or
 *   `ɵdetectChanges`)
 * - distinct same values in a row (distinctUntilChanged operator),
 *
 * @usageNotes
 *
 * The `*rxLet` directive take over several things and makes it more convenient and save to work with streams in the
 *   template
 * `<ng-container *rxLet="observableNumber$ as c"></ng-container>`
 *
 * ```html
 * <ng-container *rxLet="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 *
 * <ng-container *rxLet="observableNumber$; let n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 * ```
 *
 * In addition to that it provides us information from the whole observable context.
 * We can track the observables:
 * - next value
 * - error value
 * - complete base-state
 *
 * ```html
 * <ng-container *rxLet="observableNumber$; let n; let e = $error, let c = $complete">
 * <app-number [number]="n"  *ngIf="!e && !c">
 * </app-number>
 * <ng-container *ngIf="e">
 * There is an error: {{e}}
 * </ng-container>
 * <ng-container *ngIf="c">
 * Observable completed: {{c}}
 * </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
let LetDirective = class LetDirective {
    constructor(cdRef, templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.ViewContext = {
            $implicit: undefined,
            rxLet: undefined,
            $error: false,
            $complete: false
        };
        this.resetObserver = {
            next: () => {
                // if not initialized no need to set undefined
                if (this.embeddedView) {
                    this.ViewContext.$implicit = undefined;
                    this.ViewContext.rxLet = undefined;
                    this.ViewContext.$error = false;
                    this.ViewContext.$complete = false;
                }
            }
        };
        this.updateObserver = {
            next: (value) => {
                // to have initial rendering lazy
                if (!this.embeddedView) {
                    this.createEmbeddedView();
                }
                this.ViewContext.$implicit = value;
                this.ViewContext.rxLet = value;
            },
            error: (error) => {
                // to have initial rendering lazy
                if (!this.embeddedView) {
                    this.createEmbeddedView();
                }
                this.ViewContext.$error = true;
            },
            complete: () => {
                // to have initial rendering lazy
                if (!this.embeddedView) {
                    this.createEmbeddedView();
                }
                this.ViewContext.$complete = true;
            }
        };
        this.strategies = getStrategies({ cdRef });
        this.renderAware = createRenderAware({
            strategies: this.strategies,
            resetObserver: this.resetObserver,
            updateObserver: this.updateObserver
        });
        this.renderAware.nextStrategy(DEFAULT_STRATEGY_NAME);
    }
    set rxLet(potentialObservable) {
        this.renderAware.nextPotentialObservable(potentialObservable);
    }
    set strategy(strategy) {
        this.renderAware.nextStrategy(strategy || DEFAULT_STRATEGY_NAME);
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    ngOnInit() {
        this.subscription = this.renderAware.subscribe();
    }
    createEmbeddedView() {
        this.embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef, this.ViewContext);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.viewContainerRef.clear();
    }
};
LetDirective.ɵfac = function LetDirective_Factory(t) { return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
LetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: LetDirective, selectors: [["", "rxLet", ""]], inputs: { rxLet: "rxLet", strategy: ["rxLetStrategy", "strategy"] } });
LetDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object])
], LetDirective.prototype, "rxLet", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('rxLetStrategy'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Object])
], LetDirective.prototype, "strategy", null);
LetDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]])
], LetDirective);

const EXPORTED_DECLARATIONS = [LetDirective];
let LetModule = class LetModule {
};
LetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LetModule });
LetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function LetModule_Factory(t) { return new (t || LetModule)(); } });

const zonePatchedEvents = [
    'scroll',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'load',
    'pointerup',
    'change',
    'blur',
    'focus',
    'click',
    'contextmenu',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',
    'input'
];

/**
 * @Directive UnpatchEventsDirective
 *
 * @description
 *
 * The `unpatch` directive helps in partially migrating to zone-less apps as well as getting rid
 * of unnecessary renderings through zones `addEventListener` patches.
 * It can be used on any element you apply event bindings.
 *
 * The current way of binding events to the DOM is to use output bindings:
 *  ```html
 * <button (click)="doStuff($event)">click me</button>
 * ```
 *
 * The problem is that every event registered over `()` syntax, e.g. `(click)`
 * marks the component and all its ancestors as dirty and re-renders the whole component tree.
 * This is because zone.js patches the native browser API and whenever one of the patched APIs is used it re-renders.
 *
 * So even if your button is not related to a change that needs a re-render the app will re-render completely.
 * This leads to bad performance. This is especially helpful if you work with frequently fired events like 'mousemove'
 *
 * `unpatch` directive solves that problem.
 *
 * Included Features:
 *  - by default un-patch all registered listeners of the host it is applied on
 *  - un-patch only a specified set of registered event listeners
 *  - works zone independent (it directly checks the widow for patched APIs and un-patches them without the use of `runOutsideZone` which brings more performance)
 *  - Not interfering with any logic executed by the registered callback
 *
 * @usageNotes
 *
 * The `unpatch` directive can be used like shown here:
 * ```html
 * <button [unoatch] (click)="triggerSomeMethod($event)">click me</button>
 * <button [unoatch]="['mousemove']" (mousemove)="doStuff2($event)" (click)="doStuff($event)">click me</button>
 * ```
 *
 * @publicApi
 */
// tslint:disable-next-line:directive-selector
let UnpatchEventsDirective = class UnpatchEventsDirective {
    constructor(el) {
        this.el = el;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](zonePatchedEvents);
    }
    set events(value) {
        if (value && value.length > 0) {
            this.events$.next(value);
        }
        else {
            this.events$.next(zonePatchedEvents);
        }
    }
    reapplyEventListenersZoneUnPatched(events) {
        events.forEach(ev => {
            unpatchEventListener(this.el.nativeElement, ev);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.subscription = this.events$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(eventList => this.reapplyEventListenersZoneUnPatched(eventList)))
            .subscribe();
    }
};
UnpatchEventsDirective.ɵfac = function UnpatchEventsDirective_Factory(t) { return new (t || UnpatchEventsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
UnpatchEventsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: UnpatchEventsDirective, selectors: [["", "unpatch", ""]], inputs: { events: ["unpatch", "events"] } });
UnpatchEventsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('unpatch'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Array),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [Array])
], UnpatchEventsDirective.prototype, "events", null);
UnpatchEventsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], UnpatchEventsDirective);

const DECLARATIONS$1 = [UnpatchEventsDirective];
let UnpatchEventsModule = class UnpatchEventsModule {
};
UnpatchEventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UnpatchEventsModule });
UnpatchEventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function UnpatchEventsModule_Factory(t) { return new (t || UnpatchEventsModule)(); } });

let TemplateModule = class TemplateModule {
};
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, imports: [LetModule, PushModule, UnpatchEventsModule] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PushPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"],
        args: [{ name: 'push', pure: false }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PushModule, { declarations: [PushPipe], exports: [PushPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PushModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [],
                exports: DECLARATIONS
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rxLet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, { rxLet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], strategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['rxLetStrategy']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LetModule, { declarations: [LetDirective], exports: [LetDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: EXPORTED_DECLARATIONS,
                exports: [EXPORTED_DECLARATIONS]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UnpatchEventsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[unpatch]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['unpatch']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UnpatchEventsModule, { declarations: [UnpatchEventsDirective], exports: [UnpatchEventsDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UnpatchEventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: DECLARATIONS$1,
                exports: DECLARATIONS$1
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TemplateModule, { exports: [LetModule, PushModule, UnpatchEventsModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: [LetModule, PushModule, UnpatchEventsModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=rx-angular-template.js.map

/***/ }),

/***/ "5EX2":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "9dHn":
/*!******************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alphas-compare.routes.ts ***!
  \******************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _alphas_compare_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphas-compare.component */ "02J6");

const ROUTES = [
    {
        path: '',
        redirectTo: 'alphas-compare',
    },
    {
        path: 'list-toggle',
        component: _alphas_compare_component__WEBPACK_IMPORTED_MODULE_0__["AlphasCompareComponent"],
    },
];


/***/ }),

/***/ "Bcsc":
/*!************************************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alpha-0-toggle/alpha-0-toggle.component.ts ***!
  \************************************************************************************************/
/*! exports provided: Alpha0ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alpha0ToggleComponent", function() { return Alpha0ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var templateAlpha0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! templateAlpha0 */ "2Vpe");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/rendering-work/rendering-work/rendering-work.component */ "kAS6");








function Alpha0ToggleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of 2000 elements will be toggled 10 times");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function Alpha0ToggleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Alpha0ToggleComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function Alpha0ToggleComponent_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Alpha0ToggleComponent_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-rendering-work", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 20);
} }
function Alpha0ToggleComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha0ToggleComponent_ng_container_3_p_1_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Alpha0ToggleComponent_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.pushLoading$))("ngIfElse", _r8);
} }
function Alpha0ToggleComponent_ng_container_4_ng_container_1_rxa_rendering_work_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-rendering-work", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("factor", 20);
} }
function Alpha0ToggleComponent_ng_container_4_ng_container_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Alpha0ToggleComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha0ToggleComponent_ng_container_4_ng_container_1_rxa_rendering_work_1_Template, 1, 1, "rxa-rendering-work", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Alpha0ToggleComponent_ng_container_4_ng_container_1_p_2_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const letLoading_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !letLoading_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letLoading_r11);
} }
function Alpha0ToggleComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha0ToggleComponent_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx_r3.letLoading$);
} }
function Alpha0ToggleComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Alpha0ToggleComponent {
    constructor() {
        this.pushLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.letLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.done$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(800, 1000);
    }
    ngAfterViewInit() {
        if (this.auto) {
            this.process$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.type === 'push' ? this.togglePush() : this.toggleLet()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
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
        this.letLoading$.next(!this.letLoading$.getValue());
    }
}
Alpha0ToggleComponent.ɵfac = function Alpha0ToggleComponent_Factory(t) { return new (t || Alpha0ToggleComponent)(); };
Alpha0ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Alpha0ToggleComponent, selectors: [["rxa-alpha0"]], inputs: { type: "type", auto: "auto" }, decls: 7, vars: 7, consts: [[1, "col-sm-12", "col-md-6"], [4, "ngIf"], ["color", "secondary", 3, "unpatch", "click"], [4, "ngIf", "ngIfElse"], ["pushContent", ""], [3, "factor"], [4, "rxLet"], [3, "factor", 4, "ngIf"]], template: function Alpha0ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Alpha0ToggleComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Alpha0ToggleComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Alpha0ToggleComponent_ng_container_3_Template, 5, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Alpha0ToggleComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Alpha0ToggleComponent_p_5_Template, 2, 0, "p", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], templateAlpha0__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsDirective"], _shared_debug_helper_rendering_work_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_6__["RenderingWorkComponent"], templateAlpha0__WEBPACK_IMPORTED_MODULE_5__["LetDirective"]], pipes: [templateAlpha0__WEBPACK_IMPORTED_MODULE_5__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Alpha0ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-alpha0',
                templateUrl: './alpha-0-toggle.component.html',
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].changeDetection,
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], auto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FGo3":
/*!********************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/util/support/isBufferBrowser.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "FdGC":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alpha-0-toggle/alpha-0-toggle.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: Alpha0ToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alpha0ToggleModule", function() { return Alpha0ToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var templateAlpha0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templateAlpha0 */ "2Vpe");
/* harmony import */ var _alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alpha-0-toggle.component */ "Bcsc");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/rendering-work/rendering-work.module */ "QGmT");






class Alpha0ToggleModule {
}
Alpha0ToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Alpha0ToggleModule });
Alpha0ToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Alpha0ToggleModule_Factory(t) { return new (t || Alpha0ToggleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha0__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Alpha0ToggleModule, { declarations: [_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha0ToggleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha0__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]], exports: [_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha0ToggleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Alpha0ToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha0ToggleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha0__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]],
                exports: [_alpha_0_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha0ToggleComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "RHNB":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alpha-1-toggle/alpha-1-toggle.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: Alpha1ToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alpha1ToggleModule", function() { return Alpha1ToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var templateAlpha1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templateAlpha1 */ "iBM9");
/* harmony import */ var _alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alpha-1-toggle.component */ "0Cd5");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/rendering-work/rendering-work.module */ "QGmT");






class Alpha1ToggleModule {
}
Alpha1ToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Alpha1ToggleModule });
Alpha1ToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Alpha1ToggleModule_Factory(t) { return new (t || Alpha1ToggleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha1__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Alpha1ToggleModule, { declarations: [_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha1ToggleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha1__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]], exports: [_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha1ToggleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Alpha1ToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha1ToggleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], templateAlpha1__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"], _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_4__["RenderingWorkModule"]],
                exports: [_alpha_1_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Alpha1ToggleComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aiQ1":
/*!*************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/util/util.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "FGo3");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "5EX2");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "iBM9":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/templateAlpha1/__ivy_ngcc__/fesm2015/rx-angular-template.js ***!
  \************************************************************************************************************************/
/*! exports provided: LetDirective, LetModule, PushModule, PushPipe, SchedulingPriority, TemplateModule, UnpatchEventsDirective, UnpatchEventsModule, ViewportPrioDirective, ViewportPrioModule, getStrategies, getZoneUnPatchedApi, isNgZone, isViewEngineIvy, priorityTickMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetDirective", function() { return LetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetModule", function() { return LetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushModule", function() { return PushModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPipe", function() { return PushPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return SchedulingPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsDirective", function() { return UnpatchEventsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsModule", function() { return UnpatchEventsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioDirective", function() { return ViewportPrioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioModule", function() { return ViewportPrioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return getStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return getZoneUnPatchedApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return isNgZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewEngineIvy", function() { return isViewEngineIvy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return priorityTickMap; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");




/**
 * @description
 *
 * A fallback for the new `globalThis` reference.
 *
 *  It should be used to replace `window` due to different environments in:
 *  - SSR (Server Side Rendering)
 *  - Tests
 *  - Browser
 *
 *  @return {globalThis} - A reference to globalThis. `window` in the Browser.
 */

function getGlobalThis() {
    return (window || self || globalThis);
}

/*
 * createPropertiesWeakMap
 *
 * @param getDefaults: (o: O) => P
 * Example:
 *
 * export interface Properties {
 *   isCoalescing: boolean;
 * }
 *
 * const obj: object = {
 *   foo: 'bar',
 *   isCoalescing: 'weakMap version'
 * };
 *
 * const getDefaults = (ctx: object): Properties => ({isCoalescing: false});
 * const propsMap = createPropertiesWeakMap<object, Properties>(getDefaults);
 *
 * console.log('obj before:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props before:', propsMap.getProps(obj));
 * // {isCoalescing: "weakMap version"}
 *
 * propsMap.setProps(obj, {isCoalescing: true});
 * console.log('obj after:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props after:', propsMap.getProps(obj));
 * // {isCoalescing: "true"}
 * */
function createPropertiesWeakMap(getDefaults) {
    const propertyMap = new WeakMap();
    return {
        getProps: getProperties,
        setProps: setProperties
    };
    function getProperties(ctx) {
        const defaults = getDefaults(ctx);
        const propertiesPresent = propertyMap.get(ctx);
        let properties;
        if (propertiesPresent !== undefined) {
            properties = propertiesPresent;
        }
        else {
            properties = {};
            Object.entries(defaults).forEach(([prop, value]) => {
                properties[prop] = hasKey(ctx, prop) ? ctx[prop] : value;
            });
            propertyMap.set(ctx, properties);
        }
        return properties;
    }
    function setProperties(ctx, props) {
        const properties = getProperties(ctx);
        Object.entries(props).forEach(([prop, value]) => {
            properties[prop] = value;
        });
        propertyMap.set(ctx, properties);
        return properties;
    }
    function hasKey(ctx, property) {
        return ctx[property] != null;
    }
}

/**
 * envZonePatched
 *
 * @description
 *
 * This function checks the window object `zone.js` was instantiated.
 * If so, the `window` object maintains a property named `Zone`.
 *
 * Here how Angular checks it: https://github.com/angular/angular/blob/master/packages/core/src/zone/ng_zone.ts#L123
 *
 * @return {boolean} - true if `zone.js` patched global APIs.
 *
 */
function envZonePatched() {
    return getGlobalThis().Zone !== undefined;
}
/**
 * apiZonePatched
 *
 * @description
 *
 * This function checks if a specific Browser API is patched by `zone.js`.
 *
 * @param name {string} - The name of the API to check.
 * @return {boolean} - true if `zone.js` patched the API in question.
 *
 */
function apiZonePatched(name) {
    // if symbol is present, zone patched the API
    return getGlobalThis()['__zone_symbol__' + name] !== undefined;
}
const zoneDetectionCache = new WeakMap();
/**
 * isNgZone
 *
 * @description
 *
 * This function takes an instance of a class which implements the NgZone interface and checks if
 * its `runOutsideAngular()` function calls `apply()` on the function passed as parameter. This
 * means the Angular application that instantiated this service assumes it runs in a ZoneLess
 * environment, and therefore it's change detection will not be triggered by zone related logic.
 *
 * However, keep in mind this does not mean `zone.js` is not present.
 * The environment could still run in ZoneFull mode even if Angular turned it off.
 * Consider the situation of a Angular element configured for ZoneLess
 * environments is used in an Angular application relining on the zone mechanism.
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NgZone`.
 * @return {boolean} - true if instance is of type `NgZone`.
 *
 */
function isNgZone(instance) {
    const cachedValue = zoneDetectionCache.get(instance);
    if (cachedValue !== undefined) {
        return cachedValue;
    }
    let calledApply = false;
    function fn() { }
    fn.apply = () => (calledApply = true);
    instance.runOutsideAngular(fn);
    zoneDetectionCache.set(instance, calledApply);
    return calledApply;
}
/**
 * isNoopNgZone
 *
 *@description
 *
 * This function takes any instance of a class and checks
 * if the constructor name is equal to `NoopNgZone`.
 *
 * For more detailed information read the description of [isNgZone](#isngzone).
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NoopNgZone`.
 * @return {boolean} - true if instance is of type `NoopNgZone`.
 *
 */
function isNoopNgZone(instance) {
    return !isNgZone(instance);
}

/** A shared promise instance to cause a delay of one microtask */
let resolvedPromise = null;
function getUnpatchedResolvedPromise() {
    resolvedPromise =
        resolvedPromise ||
            (apiZonePatched('Promise')
                ? getGlobalThis().__zone_symbol__Promise.resolve()
                : Promise.resolve());
    return resolvedPromise;
}

/**
 * envRunsIvy
 *
 * @description
 * Determines the used view engine of an Angular project is Ivy or not.
 * The check is done based on following table:
 * | render       | ViewEngine | ViewEngine | Ivy         | Ivy         |
 * | ------------ | ---------- | ---------- | ----------- | ----------- |
 * | **mode**     | prod       | dev        | prod        | dev         |
 * | **ng**       | present    | present    | `undefined` | present     |
 * | **ng.probe** | present    | present    | `undefined` | `undefined` |
 *
 *  So for Ivy we need to make sure that ng is undefined or,
 *  in case of dev environment, ng.probe is undefined.
 *
 * @return {boolean} - true if the used view engine is Ivy.
 *
 */
function isViewEngineIvy() {
    const ng = getGlobalThis().ng;
    // Is the global ng object is unavailable?
    // ng === undefined in Ivy production mode
    // View Engine has the ng object both in development mode and production mode.
    return (ng === undefined ||
        // in case we are in dev mode in ivy
        // `probe` property is available on ng object we use View Engine.
        ng.probe === undefined);
}

/**
 * getZoneUnPatchedApi
 *
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no element is passed the window is used instead
 *
 * @param name {string} - The name of the API to check.
 * @param elem {any} - The elem to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */
function getZoneUnPatchedApi(name, elem) {
    elem = elem || getGlobalThis();
    return apiZonePatched(name) ? elem['__zone_symbol__' + name] : elem[name];
}

const coalescingManager = createCoalesceManager();
const ɵ0 = ctx => ({
    numCoalescingSubscribers: 0
});
const coalescingContextPropertiesMap = createPropertiesWeakMap(ɵ0);
function createCoalesceManager() {
    return {
        remove: removeWork,
        add: addWork,
        isCoalescing
    };
    // Increments the number of subscriptions in a scope e.g. a class instance
    function removeWork(scope = {}) {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers -
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Decrements the number of subscriptions in a scope e.g. a class instance
    function addWork(scope = {}) {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers +
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Checks if anybody else is already coalescing atm
    function isCoalescing(scope = {}) {
        return (coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers >
            0);
    }
}

/**
 * @description
 * Limits the number of synchronous emitted a value from the source Observable to
 * one emitted value per
 *   [`AnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), then repeats
 *   this process for every tick of the browsers event loop.
 *
 * The coalesce operator is based on the [throttle](https://rxjs-dev.firebaseapp.com/api/operators/throttle) operator.
 * In addition to that is provides emitted values for the trailing end only, as well as maintaining a context to scope
 *   coalescing.
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector - A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * It defaults to `requestAnimationFrame` as durationSelector.
 * @param {Object} config - A configuration object to define `leading` and `trailing` behavior and the context object.
 * Defaults to `{ leading: false, trailing: true }`. The default scoping is per subscriber.
 * @return {Observable<T>} An Observable that performs the coalesce operation to
 * limit the rate of emissions from the source.
 *
 * @usageNotes
 * Emit clicks at a rate of at most one click per second
 * ```ts
 * import { fromEvent, animationFrames } from 'rxjs';
 * import { coalesce } from 'ngRx/component';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(coalesce(ev => animationFrames));
 * result.subscribe(x => console.log(x));
 * ```
 */
function coalesceWith(durationSelector, scope) {
    const _scope = scope || {};
    return source => {
        const o$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            const rootSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
            rootSubscription.add(source.subscribe(createInnerObserver(observer, rootSubscription)));
            return rootSubscription;
        });
        return o$;
        function createInnerObserver(outerObserver, rootSubscription) {
            let actionSubscription;
            let latestValue;
            const tryEmitLatestValue = () => {
                coalescingManager.remove(_scope);
                if (!coalescingManager.isCoalescing(_scope)) {
                    outerObserver.next(latestValue);
                }
            };
            return {
                complete: () => {
                    if (actionSubscription) {
                        tryEmitLatestValue();
                    }
                    outerObserver.complete();
                },
                error: error => outerObserver.error(error),
                next: value => {
                    latestValue = value;
                    if (!actionSubscription) {
                        coalescingManager.add(_scope);
                        actionSubscription = durationSelector.subscribe({
                            next: () => {
                                tryEmitLatestValue();
                                actionSubscription = undefined;
                            },
                            complete: () => {
                                if (actionSubscription) {
                                    tryEmitLatestValue();
                                    actionSubscription = undefined;
                                }
                            }
                        });
                        rootSubscription.add(actionSubscription);
                    }
                }
            };
        }
    };
}

/**
 * Noop Strategy
 *
 * This strategy is does nothing. It serves for debugging only
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `noop`      | ❌       | ❌             | ❌                | ❌         | ❌      |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createNoopStrategy() {
    return {
        name: 'noop',
        detectChanges: () => { },
        rxScheduleCD: o => o,
        scheduleCD: () => new AbortController()
    };
}

/**
 * Native Strategy
 * @description
 *
 * - mFC - `cdRef.markForCheck`
 *
 * This strategy mirrors Angular's built-in `async` pipe.
 * This means for every emitted value `ChangeDetectorRef#markForCheck` is called.
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `native`    | ❌       | mFC           | ❌                | ❌         | ❌      |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createNativeStrategy(config) {
    const component = config.cdRef.context;
    return {
        name: 'native',
        detectChanges: () => config.cdRef.markForCheck(),
        rxScheduleCD: o => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵmarkDirty"])(component))),
        scheduleCD: () => {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵmarkDirty"])(component);
            return new AbortController();
        }
    };
}

function nameToStrategy(strategies) {
    return (o$) => {
        return o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((strategy) => {
            const s = strategies[strategy];
            if (!!s) {
                return s;
            }
            throw new Error(`Strategy ${strategy} does not exist.`);
        }));
    };
}

/**
 * RenderAware
 *
 * @description
 * This function returns an object that holds all the shared logic for the push pipe and the let directive
 * responsible for change detection
 * If you extend this class you need to implement how the update of the rendered value happens.
 * Also custom behaviour is something you need to implement in the extending class
 */
function createRenderAware(cfg) {
    const strategyName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    let currentStrategy;
    const strategy$ = strategyName$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(stringOrObservable => typeof stringOrObservable === 'string'
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(stringOrObservable)
        : stringOrObservable), nameToStrategy(cfg.strategies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(s => (currentStrategy = s)));
    const observablesFromTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    const valuesFromTemplate$ = observablesFromTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    let firstTemplateObservableChange = true;
    const renderingEffect$ = valuesFromTemplate$.pipe(
    // handle null | undefined assignment and new Observable reset
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(observable$ => {
        if (observable$ === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
        if (!firstTemplateObservableChange) {
            cfg.resetObserver.next();
            if (observable$ === undefined) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
            }
        }
        firstTemplateObservableChange = false;
        return observable$;
    }), 
    // forward only observable values
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(o$ => o$ !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(o$ => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(cfg.updateObserver), currentStrategy.rxScheduleCD, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => currentStrategy.scheduleCD()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(e => {
        console.error(e);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
    }));
    return {
        nextPotentialObservable(value) {
            observablesFromTemplate$.next(value);
        },
        nextStrategy(nextConfig) {
            strategyName$.next(nextConfig);
        },
        activeStrategy$: strategy$,
        subscribe() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]()
                .add(strategy$.subscribe())
                .add(renderingEffect$.subscribe());
        }
    };
}

function staticCoalesce(work, durationSelector, scope = {}, abC = new AbortController()) {
    let sub;
    if (!coalescingManager.isCoalescing(scope)) {
        coalescingManager.add(scope);
        sub = durationSelector.subscribe(() => {
            tryExecuteWork();
        });
        const abortHandler = function () {
            sub.unsubscribe();
            abC.signal.removeEventListener('abort', abortHandler, false);
        };
        abC.signal.addEventListener('abort', abortHandler, false);
    }
    return abC;
    // =====
    function tryExecuteWork() {
        coalescingManager.remove(scope);
        if (!coalescingManager.isCoalescing(scope)) {
            return work();
        }
    }
}

var PostTaskSchedulerPriority;
(function (PostTaskSchedulerPriority) {
    PostTaskSchedulerPriority["background"] = "background";
    PostTaskSchedulerPriority["userBlocking"] = "user-blocking";
    PostTaskSchedulerPriority["userVisible"] = "user-visible";
})(PostTaskSchedulerPriority || (PostTaskSchedulerPriority = {}));
const postTaskScheduler = typeof window !== 'undefined'
    ? window.scheduler || {
        postTask(options) {
            const start = Date.now();
            return new Promise(resolve => {
                setTimeout(function () {
                    console.error('postTask not implemented. Use setTimeout as fallback');
                    resolve();
                }, 1);
            });
        }
    }
    : () => { };

const animationFrameTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
    const id = getZoneUnPatchedApi('requestAnimationFrame')(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => {
        getZoneUnPatchedApi('cancelAnimationFrame')(id);
    };
});

// @NOTICE replace logic with 7v handling of promises in RxJS
const promiseTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
    let cancelled = false;
    getUnpatchedResolvedPromise()
        .then(() => {
        if (!cancelled) {
            subscriber.next(0);
            subscriber.complete();
        }
    })
        .catch(e => {
        subscriber.error(e);
    });
    return () => {
        cancelled = true;
        subscriber.complete();
    };
});

const timeoutTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
    const id = window.__zone_symbol__setTimeout(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => {
        window.__zone_symbol__clearTimeout(id);
    };
});

const cancelIdleCallback = typeof window !== 'undefined'
    ? window.cancelIdleCallback ||
        function (idleId) {
            console.warn('Fake cancelIdleCallback used');
            clearTimeout(idleId);
        }
    : () => { };
const requestIdleCallback = typeof window !== 'undefined'
    ? window.requestIdleCallback ||
        function (cb) {
            console.warn('Fake requestIdleCallback used');
            const start = Date.now();
            return setTimeout(function () {
                cb({
                    didTimeout: false,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - start));
                    }
                });
            }, 1);
        }
    : () => { };

const idleCallbackTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
    const id = requestIdleCallback(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => cancelIdleCallback(id);
});

const postTaskTick = (options) => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscription => {
    postTaskScheduler
        .postTask(() => { }, options)
        .then(() => {
        subscription.next(0);
        subscription.complete();
    });
    return () => { };
});

const priorityTickMap = {
    animationFrame: animationFrameTick(),
    Promise: promiseTick(),
    setInterval: timeoutTick(),
    idleCallback: idleCallbackTick(),
    userBlocking: postTaskTick({
        priority: PostTaskSchedulerPriority.userBlocking
    }),
    userVisible: postTaskTick({
        priority: PostTaskSchedulerPriority.userVisible
    }),
    background: postTaskTick({ priority: PostTaskSchedulerPriority.background })
};

function staticSchedule(work, priority, abC = new AbortController()) {
    // immediately execute work
    if (priority === false) {
        tryExecuteWork();
        return abC;
    }
    // schedule work
    const sub = priorityTickMap[priority].subscribe(() => tryExecuteWork(), error => console.error(error), 
    // on complete abort further executions
    () => abC.abort());
    const abortHandler = function () {
        sub.unsubscribe();
        abC.signal.removeEventListener('abort', abortHandler, false);
    };
    abC.signal.addEventListener('abort', abortHandler, false);
    return abC;
    // execute work and abort further executions
    function tryExecuteWork() {
        if (!abC.signal.aborted) {
            work();
            abC.abort();
        }
    }
}

function coalesceAndSchedule(work, priority, scope = {}, abC = new AbortController()) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(getUnpatchedResolvedPromise());
    const scheduledWork = () => staticSchedule(work, priority, abC);
    const coalesceAbC = staticCoalesce(scheduledWork, durationSelector, scope, abC);
    const abortHandler = function () {
        coalesceAbC.abort();
        abC.signal.removeEventListener('abort', abortHandler, false);
    };
    abC.signal.addEventListener('abort', abortHandler, false);
    return abC;
}

var SchedulingPriority;
(function (SchedulingPriority) {
    SchedulingPriority["animationFrame"] = "animationFrame";
    SchedulingPriority["Promise"] = "Promise";
    SchedulingPriority["idleCallback"] = "idleCallback";
    SchedulingPriority["userBlocking"] = "userBlocking";
    SchedulingPriority["userVisible"] = "userVisible";
    SchedulingPriority["background"] = "background";
    SchedulingPriority["setInterval"] = "setInterval";
})(SchedulingPriority || (SchedulingPriority = {}));

const promiseDurationSelector = promiseTick();
/**
 * Experimental Local Strategies
 *
 * - ɵDC - `ɵdetectChanges`
 * - C - `Component`
 * - det - `cdRef.detach`
 * - ret - `cdRef.reattach`
 * - Pr - `Promise`
 * - aF - `requestAnimationFrame`
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `local`     | ✔        | ɵDC           | C + Pr           | aF         | ❌      |
 * | `detach`    | ✔ ️     | ret,ɵDC, det  | C + Pr           | aF         | ❌      |
 *
 */
function getLocalStrategies(config) {
    return {
        local: createLocalStrategy(config),
        detach: createDetachStrategy(config)
    };
}
/**
 *  Local Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges has no coalescing of render calls
 * like `ChangeDetectorRef#markForCheck` or `ɵmarkDirty` has, so we have to apply our own coalescing, 'scoped' on
 * component level.
 *
 * Coalescing, in this very manner,
 * means **collecting all events** in the same
 * [EventLoop](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop) tick, that would cause a re-render and
 * execute **re-rendering only once**.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events by** a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `local`     | ✔        | ɵDC           | C + Pr           | aF         | ❌      |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createLocalStrategy(config) {
    const component = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const tick = priorityTickMap[priority];
    const renderMethod = () => {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdetectChanges"])(component);
    };
    const behavior = o => o.pipe(coalesceWith(promiseDurationSelector, component), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(v => tick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(renderMethod));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, component);
    return {
        name: 'local',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}
/**
 *  Detach Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges has no coalescing of render calls
 * like `ChangeDetectorRef#markForCheck` or `ɵmarkDirty` has, so we have to apply our own coalescing, 'scoped' on
 * component level.
 *
 * Coalescing, in this very manner,
 * means **collecting all events** in the same
 * [EventLoop](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop) tick, that would cause a re-render and
 * execute **re-rendering only once**.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events by** a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `detach`    | ✔ ️     | ret,ɵDC, det  | C + Pr           | aF         | ❌      |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createDetachStrategy(config) {
    const component = config.cdRef.context;
    const priority = SchedulingPriority.animationFrame;
    const tick = priorityTickMap[priority];
    const renderMethod = () => {
        config.cdRef.reattach();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdetectChanges"])(component);
        config.cdRef.detach();
    };
    const behavior = o => o.pipe(coalesceWith(promiseDurationSelector, component), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(v => tick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(renderMethod));
    const scheduleCD = () => coalesceAndSchedule(renderMethod, priority, component);
    return {
        name: 'detach',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}

function getGlobalStrategies(config) {
    return {
        global: createGlobalStrategy(config)
    };
}
/**
 * Global Strategies
 *
 * - ɵMD - `ɵmarkDirty`
 * - C - `Component`
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `global`     | ✔        | ɵMD           | C + Pr          | ❌         | ❌      |
 *
 */
/**
 *
 * Global Strategy
 *
 * This strategy is rendering the application root and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `global`     | ✔        | ɵMD           | C + Pr          | ❌         | ❌      |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy<T>} - The calculated strategy
 *
 */
function createGlobalStrategy(config) {
    const renderMethod = () => Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵmarkDirty"])(config.cdRef.context);
    return {
        name: 'global',
        detectChanges: renderMethod,
        rxScheduleCD: o => o,
        scheduleCD: () => {
            renderMethod();
            return new AbortController();
        }
    };
}

const DEFAULT_STRATEGY_NAME = 'local';
function getStrategies(config) {
    return Object.assign(Object.assign({ noop: createNoopStrategy(), native: createNativeStrategy(config) }, getGlobalStrategies(config)), getLocalStrategies(config));
}
/**
 * Strategies
 *
 * - mFC - `cdRef.markForCheck`
 * - dC - `cdRef.detectChanges`
 * - ɵMD - `ɵmarkDirty`
 * - ɵDC - `ɵdetectChanges`
 * - C - `Component`
 * - det - `cdRef.detach`
 * - ret - `cdRef.reattach`
 * - Pr - `Promise`
 * - aF - `requestAnimationFrame`
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `noop`      | ❌       | ❌             | ❌               | ❌         | ❌       |
 * | `native`    | ❌       | mFC           | ❌                | ❌         | ❌      |
 * | `global`    | ✔        | ɵMD           | C + Pr           | ❌         | ❌      |
 * | `local`     | ✔        | ɵDC           | C + Pr           | aF         | ❌      |
 * | `detach`    | ✔ ️     | ret,ɵDC, det  | C + Pr           | aF         | ❌      |
 */

function renderChange(cdRef, strategyName) {
    const strategies = getStrategies({ cdRef });
    const strategy = strategies[strategyName];
    return o => o.pipe(strategy.rxScheduleCD);
}

/**
 * @Pipe PushPipe
 *
 * @description
 *
 * The `push` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * The current way of binding an observable to the view looks like that:
 *  ```html
 *  {{observable$ | async}}
 * <ng-container *ngIf="observable$ | async as o">{{o}}</ng-container>
 * <component [value]="observable$ | async"></component>
 * ```
 *
 * The problem is `async` pipe just marks the component and all its ancestors as dirty.
 * It needs zone.js microtask queue to exhaust until `ApplicationRef.tick` is called to render all dirty marked
 *     components.
 *
 * Heavy dynamic and interactive UIs suffer from zones change detection a lot and can
 * lean to bad performance or even unusable applications, but the `async` pipe does not work in zone-less mode.
 *
 * `push` pipe solves that problem.
 *
 * Included Features:
 *  - Take observables or promises, retrieve their values and render the value to the template
 *  - Handling null and undefined values in a clean unified/structured way
 *  - Triggers change-detection differently if `zone.js` is present or not (`detectChanges` or `markForCheck`)
 *  - Distinct same values in a row to increase performance
 *  - Coalescing of change detection calls to boost performance
 *
 * @usageNotes
 *
 * `push` pipe solves that problem. It can be used like shown here:
 * ```html
 * {{observable$ | push}}
 * <ng-container *ngIf="observable$ | push as o">{{o}}</ng-container>
 * <component [value]="observable$ | push"></component>
 * ```
 *
 * @publicApi
 */
class PushPipe {
    constructor(cdRef) {
        this.resetObserver = {
            next: () => {
                this.renderedValue = undefined;
            }
        };
        this.updateObserver = {
            next: (value) => (this.renderedValue = value)
        };
        this.RenderAware = createRenderAware({
            strategies: getStrategies({
                cdRef
            }),
            updateObserver: this.updateObserver,
            resetObserver: this.resetObserver
        });
        this.subscription = this.RenderAware.subscribe();
    }
    transform(potentialObservable, config) {
        const strategy = config || DEFAULT_STRATEGY_NAME;
        this.RenderAware.nextStrategy(strategy);
        this.RenderAware.nextPotentialObservable(potentialObservable);
        return this.renderedValue;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PushPipe.ɵfac = function PushPipe_Factory(t) { return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectPipeChangeDetectorRef"]()); };
PushPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "push", type: PushPipe, pure: false });
PushPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PushPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{ name: 'push', pure: false }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, null); })();
PushPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];

const DECLARATIONS = [PushPipe];
class PushModule {
}
PushModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PushModule });
PushModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PushModule_Factory(t) { return new (t || PushModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PushModule, { declarations: [PushPipe], exports: [PushPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PushModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [],
                exports: DECLARATIONS
            }]
    }], null, null); })();

class TemplateManager {
    constructor(viewContainerRef, initialViewContext) {
        this.viewContainerRef = viewContainerRef;
        this.templateCache = new Map();
        this.viewCache = new Map();
        this.viewContext = Object.assign({}, initialViewContext);
    }
    updateViewContext(viewContextSlice) {
        Object.entries(viewContextSlice).forEach(([key, value]) => {
            this.viewContext[key] = value;
        });
    }
    addTemplateRef(name, templateRef) {
        assertTemplate(name, templateRef);
        this.templateCache.set(name, templateRef);
    }
    insertEmbeddedView(name) {
        if (this.templateCache.has(name)) {
            this.viewContainerRef.detach();
            if (this.viewCache.has(name)) {
                this.viewContainerRef.insert(this.viewCache.get(name));
            }
            else {
                const newView = this.viewContainerRef.createEmbeddedView(this.templateCache.get(name), this.viewContext);
                this.viewCache.set(name, newView);
            }
        }
    }
    destroy() {
        this.viewCache.forEach(embeddedView => embeddedView === null || embeddedView === void 0 ? void 0 : embeddedView.destroy());
        this.viewContainerRef.clear();
    }
}
function assertTemplate(property, templateRef) {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received something else.`);
    }
    return isTemplateRefOrNull;
}

/**
 * @Directive LetDirective
 *
 * @description
 *
 * The `*rxLet` directive serves a convenient way of binding observables to a view context (a dom element scope).
 * It also helps with several internal processing under the hood.
 *
 * The current way of binding an observable to the view looks like that:
 * ```html
 * <ng-container *ngIf="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * <app-number-special [number]="n">
 * </app-number-special>
 * </ng-container>
 *  ```
 *
 *  The problem is `*ngIf` is also interfering with rendering and in case of a `0` the component would be hidden
 *
 * Included Features:
 * - binding is always present. (`*ngIf="truthy$"`)
 * - it takes away the multiple usages of the `async` or `push` pipe
 * - a unified/structured way of handling null and undefined
 * - triggers change-detection differently if `zone.js` is present or not (`ChangeDetectorRef.detectChanges` or
 *   `ChangeDetectorRef.markForCheck`)
 * - triggers change-detection differently if ViewEngine or Ivy is present (`ChangeDetectorRef.detectChanges` or
 *   `ɵdetectChanges`)
 * - distinct same values in a row (distinctUntilChanged operator),
 *
 * @usageNotes
 *
 * The `*rxLet` directive take over several things and makes it more convenient and save to work with streams in the
 *   template
 * `<ng-container *rxLet="observableNumber$ as c"></ng-container>`
 *
 * ```html
 * <ng-container *rxLet="observableNumber$ as n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 *
 * <ng-container *rxLet="observableNumber$; let n">
 * <app-number [number]="n">
 * </app-number>
 * </ng-container>
 * ```
 *
 * In addition to that it provides us information from the whole observable context.
 * We can track the observables:
 * - next value
 * - error value
 * - complete base-state
 *
 * ```html
 * <ng-container *rxLet="observableNumber$; let n; let e = $error, let c = $complete">
 * <app-number [number]="n"  *ngIf="!e && !c">
 * </app-number>
 * <ng-container *ngIf="e">
 * There is an error: {{e}}
 * </ng-container>
 * <ng-container *ngIf="c">
 * Observable completed: {{c}}
 * </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
class LetDirective {
    constructor(cdRef, nextTemplateRef, viewContainerRef) {
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.resetObserver = {
            next: () => {
                this.templateManager.updateViewContext({
                    $implicit: undefined,
                    rxLet: undefined,
                    $error: false,
                    $complete: false
                });
            }
        };
        this.updateObserver = {
            next: (value) => {
                this.templateManager.insertEmbeddedView('rxNext');
                this.templateManager.updateViewContext({
                    $implicit: value,
                    rxLet: value
                });
            },
            error: (error) => {
                // fallback to rxNext when there's no template for rxError
                this.templateManager.insertEmbeddedView('rxNext');
                this.templateManager.insertEmbeddedView('rxError');
                this.templateManager.updateViewContext({
                    $error: true
                });
            },
            complete: () => {
                // fallback to rxNext when there's no template for rxComplete
                this.templateManager.insertEmbeddedView('rxNext');
                this.templateManager.insertEmbeddedView('rxComplete');
                this.templateManager.updateViewContext({
                    $complete: true
                });
            }
        };
        this.strategies = getStrategies({ cdRef });
        this.templateManager = new TemplateManager(this.viewContainerRef, {
            $implicit: undefined,
            rxLet: undefined,
            $error: false,
            $complete: false
        });
        this.renderAware = createRenderAware({
            strategies: this.strategies,
            resetObserver: this.resetObserver,
            updateObserver: this.updateObserver
        });
        this.renderAware.nextStrategy(DEFAULT_STRATEGY_NAME);
    }
    set rxLet(potentialObservable) {
        this.renderAware.nextPotentialObservable(potentialObservable);
    }
    set strategy(strategy) {
        this.renderAware.nextStrategy(strategy || DEFAULT_STRATEGY_NAME);
    }
    set rxLetComplete(templateRef) {
        this.templateManager.addTemplateRef('rxComplete', templateRef);
    }
    set rxLetError(templateRef) {
        this.templateManager.addTemplateRef('rxError', templateRef);
    }
    set rxLetSuspense(templateRef) {
        this.templateManager.addTemplateRef('rxSuspense', templateRef);
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    ngOnInit() {
        this.templateManager.insertEmbeddedView('rxSuspense');
        this.templateManager.addTemplateRef('rxNext', this.nextTemplateRef);
        this.subscription = this.renderAware.subscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.templateManager.destroy();
    }
}
LetDirective.ɵfac = function LetDirective_Factory(t) { return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
LetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: LetDirective, selectors: [["", "rxLet", ""]], inputs: { rxLet: "rxLet", strategy: ["rxLetStrategy", "strategy"], rxLetComplete: "rxLetComplete", rxLetError: "rxLetError", rxLetSuspense: "rxLetSuspense" }, exportAs: ["renderNotifier"] });
LetDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
LetDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
LetDirective.propDecorators = {
    rxLet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    strategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['rxLetStrategy',] }],
    rxLetComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    rxLetError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    rxLetSuspense: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[rxLet]',
                exportAs: 'renderNotifier'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { rxLet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], strategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['rxLetStrategy']
        }], rxLetComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rxLetError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rxLetSuspense: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

const EXPORTED_DECLARATIONS = [LetDirective];
class LetModule {
}
LetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LetModule });
LetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LetModule_Factory(t) { return new (t || LetModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LetModule, { declarations: [LetDirective], exports: [LetDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: EXPORTED_DECLARATIONS,
                exports: [EXPORTED_DECLARATIONS]
            }]
    }], null, null); })();

const zonePatchedEvents = [
    'scroll',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'load',
    'pointerup',
    'change',
    'blur',
    'focus',
    'click',
    'contextmenu',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',
    'input'
];

/**
 *
 * @description
 *
 * This function takes an elem and event and re-applies the listeners from the passed event to the
 * passed element with the zone un-patched version of it.
 *
 * @param elem {HTMLElement} - The elem to re-apply the listeners to.
 * @param event {string} - The name of the event from which to re-apply the listeners.
 *
 * @returns void
 */
function unpatchEventListener(elem, event) {
    const eventListeners = elem.eventListeners(event);
    // Return if no event listeners are present
    if (!eventListeners) {
        return;
    }
    const addEventListener = getZoneUnPatchedApi('addEventListener', elem).bind(elem);
    eventListeners.forEach(listener => {
        // Remove and reapply listeners with patched API
        elem.removeEventListener(event, listener);
        // Reapply listeners with un-patched API
        addEventListener(event, listener);
    });
}
/**
 * @Directive UnpatchEventsDirective
 *
 * @description
 *
 * The `unpatch` directive helps in partially migrating to zone-less apps as well as getting rid
 * of unnecessary renderings through zones `addEventListener` patches.
 * It can be used on any element you apply event bindings.
 *
 * The current way of binding events to the DOM is to use output bindings:
 *  ```html
 * <button (click)="doStuff($event)">click me</button>
 * ```
 *
 * The problem is that every event registered over `()` syntax, e.g. `(click)`
 * marks the component and all its ancestors as dirty and re-renders the whole component tree.
 * This is because zone.js patches the native browser API and whenever one of the patched APIs is used it re-renders.
 *
 * So even if your button is not related to a change that needs a re-render the app will re-render completely.
 * This leads to bad performance. This is especially helpful if you work with frequently fired events like 'mousemove'
 *
 * `unpatch` directive solves that problem.
 *
 * Included Features:
 *  - by default un-patch all registered listeners of the host it is applied on
 *  - un-patch only a specified set of registered event listeners
 *  - works zone independent (it directly checks the widow for patched APIs and un-patches them without the use of `runOutsideZone` which brings more performance)
 *  - Not interfering with any logic executed by the registered callback
 *
 * @usageNotes
 *
 * The `unpatch` directive can be used like shown here:
 * ```html
 * <button [unoatch] (click)="triggerSomeMethod($event)">click me</button>
 * <button [unoatch]="['mousemove']" (mousemove)="doStuff2($event)" (click)="doStuff($event)">click me</button>
 * ```
 *
 * @publicApi
 */
// tslint:disable-next-line:directive-selector
class UnpatchEventsDirective {
    constructor(el) {
        this.el = el;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](zonePatchedEvents);
    }
    set events(value) {
        if (value && value.length > 0) {
            this.events$.next(value);
        }
        else {
            this.events$.next(zonePatchedEvents);
        }
    }
    reapplyEventListenersZoneUnPatched(events) {
        events.forEach(ev => {
            unpatchEventListener(this.el.nativeElement, ev);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.subscription = this.events$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(eventList => this.reapplyEventListenersZoneUnPatched(eventList)))
            .subscribe();
    }
}
UnpatchEventsDirective.ɵfac = function UnpatchEventsDirective_Factory(t) { return new (t || UnpatchEventsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
UnpatchEventsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: UnpatchEventsDirective, selectors: [["", "unpatch", ""]], inputs: { events: ["unpatch", "events"] } });
UnpatchEventsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
UnpatchEventsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
UnpatchEventsDirective.propDecorators = {
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['unpatch',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UnpatchEventsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{ selector: '[unpatch]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['unpatch']
        }] }); })();

const DECLARATIONS$1 = [UnpatchEventsDirective];
class UnpatchEventsModule {
}
UnpatchEventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UnpatchEventsModule });
UnpatchEventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UnpatchEventsModule_Factory(t) { return new (t || UnpatchEventsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UnpatchEventsModule, { declarations: [UnpatchEventsDirective], exports: [UnpatchEventsDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UnpatchEventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: DECLARATIONS$1,
                exports: DECLARATIONS$1
            }]
    }], null, null); })();

/**
 *
 * @description
 *
 * This function takes an elem and event and re-applies the listeners from the passed event to the
 * passed element with the zone un-patched version of it.
 *
 * @param elem {HTMLElement} - The elem to re-apply the listeners to.
 * @param event {string} - The name of the event from which to re-apply the listeners.
 *
 * @returns void
 */
function unpatchEventListener$1(elem, event) {
    const eventListeners = elem.eventListeners(event);
    // Return if no event listeners are present
    if (!eventListeners) {
        return;
    }
    const addEventListener = getZoneUnPatchedApi('addEventListener', elem).bind(elem);
    eventListeners.forEach(listener => {
        // Remove and reapply listeners with patched API
        elem.removeEventListener(event, listener);
        // Reapply listeners with un-patched API
        addEventListener(event, listener);
    });
}
function intersectionObserver(options) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    const observer = observerSupported()
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => subject.next(entry));
        }, options)
        : null;
    const entries$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        subject.subscribe(subscriber);
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    });
    return {
        entries$,
        observe: observer.observe,
        unobserve: observer.unobserve
    };
}
const observerSupported = () => typeof window !== 'undefined'
    ? !!window.IntersectionObserver
    : false;
const ɵ0$1 = observerSupported;
class ViewportPrioDirective {
    constructor(el, letDirective) {
        this.el = el;
        this.letDirective = letDirective;
        this.entriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.entries$ = this.entriesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])());
        this._viewportPrio = 'noop';
        this.observer = observerSupported()
            ? new IntersectionObserver(entries => this.entriesSubject.next(entries), {
                threshold: 0
            })
            : null;
        this.visibilityEvents$ = this.entries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(entry => {
            if (entry.intersectionRatio > 0) {
                return 'visible';
            }
            else {
                return 'invisible';
            }
        }));
    }
    set viewportPrio(prio) {
        if (prio) {
            this._viewportPrio = prio || 'noop';
        }
    }
    ngOnInit() {
        const letStrategyName$ = this.letDirective.renderAware.activeStrategy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => s.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(name => name !== this._viewportPrio));
        this.observer.observe(this.el.nativeElement);
        this.visibilityEvents$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(letStrategyName$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([visibility, strategyName]) => visibility === 'visible' ? strategyName : this._viewportPrio))
            .subscribe(strategyName => {
            this.letDirective.strategy = strategyName;
            // render actual state on viewport enter
            this.letDirective.strategies[strategyName].scheduleCD();
            //
            this.el.nativeElement.classList.add(strategyName);
        });
    }
}
ViewportPrioDirective.ɵfac = function ViewportPrioDirective_Factory(t) { return new (t || ViewportPrioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LetDirective, 8)); };
ViewportPrioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ViewportPrioDirective, selectors: [["", "viewport-prio", ""]], inputs: { viewportPrio: ["viewport-prio", "viewportPrio"] } });
ViewportPrioDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: LetDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
ViewportPrioDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: LetDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
ViewportPrioDirective.propDecorators = {
    viewportPrio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['viewport-prio',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ViewportPrioDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[viewport-prio]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: LetDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { viewportPrio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['viewport-prio']
        }] }); })();

const DECLARATIONS$2 = [ViewportPrioDirective];
class ViewportPrioModule {
}
ViewportPrioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewportPrioModule });
ViewportPrioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ViewportPrioModule_Factory(t) { return new (t || ViewportPrioModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewportPrioModule, { declarations: [ViewportPrioDirective], exports: [ViewportPrioDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ViewportPrioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: DECLARATIONS$2,
                exports: DECLARATIONS$2
            }]
    }], null, null); })();

class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, imports: [LetModule, PushModule, UnpatchEventsModule, ViewportPrioModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TemplateModule, { exports: [LetModule, PushModule, UnpatchEventsModule, ViewportPrioModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [LetModule, PushModule, UnpatchEventsModule, ViewportPrioModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=rx-angular-template.js.map

/***/ }),

/***/ "q75x":
/*!******************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alphas-compare.module.ts ***!
  \******************************************************************************/
/*! exports provided: AlphasCompareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphasCompareModule", function() { return AlphasCompareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/debug-helper/rendering-work/rendering-work.module */ "QGmT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _alphas_compare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alphas-compare.component */ "02J6");
/* harmony import */ var _alphas_compare_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alphas-compare.routes */ "9dHn");
/* harmony import */ var _alpha_0_toggle_alpha_0_toggle_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alpha-0-toggle/alpha-0-toggle.module */ "FdGC");
/* harmony import */ var _alpha_1_toggle_alpha_1_toggle_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alpha-1-toggle/alpha-1-toggle.module */ "RHNB");
/* harmony import */ var templateAlpha1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! templateAlpha1 */ "iBM9");












class AlphasCompareModule {
}
AlphasCompareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlphasCompareModule });
AlphasCompareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlphasCompareModule_Factory(t) { return new (t || AlphasCompareModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_2__["RenderingWorkModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_alphas_compare_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
            _alpha_0_toggle_alpha_0_toggle_module__WEBPACK_IMPORTED_MODULE_7__["Alpha0ToggleModule"],
            _alpha_1_toggle_alpha_1_toggle_module__WEBPACK_IMPORTED_MODULE_8__["Alpha1ToggleModule"],
            templateAlpha1__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlphasCompareModule, { declarations: [_alphas_compare_component__WEBPACK_IMPORTED_MODULE_5__["AlphasCompareComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_2__["RenderingWorkModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _alpha_0_toggle_alpha_0_toggle_module__WEBPACK_IMPORTED_MODULE_7__["Alpha0ToggleModule"],
        _alpha_1_toggle_alpha_1_toggle_module__WEBPACK_IMPORTED_MODULE_8__["Alpha1ToggleModule"],
        templateAlpha1__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlphasCompareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_alphas_compare_component__WEBPACK_IMPORTED_MODULE_5__["AlphasCompareComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_debug_helper_rendering_work_rendering_work_module__WEBPACK_IMPORTED_MODULE_2__["RenderingWorkModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_alphas_compare_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                    _alpha_0_toggle_alpha_0_toggle_module__WEBPACK_IMPORTED_MODULE_7__["Alpha0ToggleModule"],
                    _alpha_1_toggle_alpha_1_toggle_module__WEBPACK_IMPORTED_MODULE_8__["Alpha1ToggleModule"],
                    templateAlpha1__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=alphas-compare-alphas-compare-module.js.map