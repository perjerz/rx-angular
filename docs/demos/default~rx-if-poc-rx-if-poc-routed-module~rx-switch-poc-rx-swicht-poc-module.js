(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~rx-if-poc-rx-if-poc-routed-module~rx-switch-poc-rx-swicht-poc-module"],{

/***/ "2NQe":
/*!**************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value/value.module.ts ***!
  \**************************************************************************/
/*! exports provided: ValueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueModule", function() { return ValueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _dirty_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dirty-checks */ "ApVg");
/* harmony import */ var _value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value.component */ "c9zg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils.module */ "MQax");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");









const DEPRECATIONS = [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]];
class ValueModule {
}
ValueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValueModule });
ValueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValueModule_Factory(t) { return new (t || ValueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValueModule, { declarations: [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]], exports: [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...DEPRECATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
                    _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]
                ],
                exports: [...DEPRECATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "3TIp":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/poc2-if.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: Poc2IfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc2IfDirective", function() { return Poc2IfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc2IfDirective {
    constructor(cdRef, truthyTemplateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.truthyTemplateRef = truthyTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.viewContext = { $implicit: undefined };
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    set poc2If(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set poc2IfFalsey(templateRef) {
        this.falseyTemplateRef = templateRef;
        this.falseyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.falseyTemplateRef, this.viewContext);
    }
    ngOnInit() {
        this.tuthyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.truthyTemplateRef, this.viewContext);
        this.subscription = this.values$
            .subscribe(v => {
            this.viewContext.$implicit = v;
            this.viewContainerRef.clear();
            if (v) {
                this.tuthyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.truthyTemplateRef, this.viewContext);
                this.tuthyEmbeddedView.detectChanges();
            }
            else {
                this.falseyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.falseyTemplateRef, this.viewContext);
                this.falseyEmbeddedView.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        this.tuthyEmbeddedView.destroy();
        if (this.falseyTemplateRef) {
            this.falseyEmbeddedView.destroy();
        }
        this.subscription.unsubscribe();
    }
}
Poc2IfDirective.ɵfac = function Poc2IfDirective_Factory(t) { return new (t || Poc2IfDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc2IfDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc2IfDirective, selectors: [["", "poc2If", ""]], inputs: { poc2If: "poc2If", poc2IfFalsey: "poc2IfFalsey" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc2IfDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc2If]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc2If: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc2IfFalsey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "86EH":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/to-array.pipe.ts ***!
  \***********************************************/
/*! exports provided: ToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class ToArrayPipe {
    transform(value) {
        if (typeof value === 'number') {
            return new Array(value).fill(0).map((_, idx) => idx);
        }
        return value != null ? value.toString().split('') : [];
    }
}
ToArrayPipe.ɵfac = function ToArrayPipe_Factory(t) { return new (t || ToArrayPipe)(); };
ToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toArray", type: ToArrayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toArray'
            }]
    }], null, null); })();


/***/ }),

/***/ "FR8y":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/rx-if.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: RxIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIfDirective", function() { return RxIfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");





class RxIfDirective {
    constructor(cdRef, truthyTemplateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.truthyTemplateRef = truthyTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.templateObserver = {
            next: ($implicit) => this.updateView($implicit)
        };
        this.updateView = ($implicit) => {
            const templateName = ($implicit != null && !!$implicit) ? 'truthy' : 'falsey';
            this.templateManager.displayView(templateName);
            if (this.templateManager.hasTemplateRef(templateName)) {
                this.templateManager.updateViewContext({ $implicit });
                this.templateManager.getEmbeddedView(templateName).detectChanges();
                this.activeName = templateName;
            }
            else {
                const activeViewEmbeddedView = this.templateManager.getEmbeddedView(this.activeName);
                if (this.activeName && activeViewEmbeddedView) {
                    // Detach currently inserted view from the container
                    this.viewContainerRef.detach();
                    activeViewEmbeddedView.detectChanges();
                    this.activeName = templateName;
                }
            }
        };
        this.templateManager = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["createTemplateManager"])(this.viewContainerRef, { $implicit: undefined });
    }
    set rxIf(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set rxIfFalsey(templateRef) {
        if (templateRef) {
            this.templateManager.addTemplateRef('falsey', templateRef);
        }
    }
    ngOnInit() {
        this.templateManager.addTemplateRef('truthy', this.truthyTemplateRef);
        this.subscription = this.values$.subscribe(this.templateObserver);
    }
    ngOnDestroy() {
        this.templateManager.destroy();
        this.subscription.unsubscribe();
    }
}
RxIfDirective.ɵfac = function RxIfDirective_Factory(t) { return new (t || RxIfDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RxIfDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxIfDirective, selectors: [["", "rxIf", ""]], inputs: { rxIf: "rxIf", rxIfFalsey: "rxIfFalsey" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIfDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[rxIf]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { rxIf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxIfFalsey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MQax":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/utils.module.ts ***!
  \**********************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _to_array_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-array.pipe */ "86EH");




class UtilsModule {
}
UtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilsModule });
UtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilsModule_Factory(t) { return new (t || UtilsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilsModule, { declarations: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q1ST":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/rx-if-poc.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RxIfPocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIfPocComponent", function() { return RxIfPocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _poc1_if_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./poc1-if.directive */ "mCGv");
/* harmony import */ var _poc2_if_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./poc2-if.directive */ "3TIp");
/* harmony import */ var _rx_if_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rx-if.directive */ "FR8y");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");













function RxIfPocComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FALSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TRUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FALSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TRUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FALSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TRUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FALSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RxIfPocComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TRUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RxIfPocComponent {
    constructor() {
        this.toggleClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.value1$ = this.toggleClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(a => !a, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(false));
    }
}
RxIfPocComponent.ɵfac = function RxIfPocComponent_Factory(t) { return new (t || RxIfPocComponent)(); };
RxIfPocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxIfPocComponent, selectors: [["rxa-rx-if-poc"]], decls: 34, vars: 10, consts: [["visualizerHeader", ""], ["mat-raised-button", "", 1, "mr-1", 3, "click"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "row", "w-100"], [1, "col-sm-3"], ["f1", ""], ["class", "dh-embedded-view", 4, "ngIf", "ngIfElse"], ["class", "dh-embedded-view", 4, "poc1If", "poc1IfFalsey"], ["f2", ""], ["class", "dh-embedded-view", 4, "poc2If", "poc2IfFalsey"], ["f3", ""], ["class", "dh-embedded-view", 4, "rxIf", "rxIfFalsey"], [1, "dh-embedded-view"]], template: function RxIfPocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " rxIf POC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxIfPocComponent_Template_button_click_4_listener($event) { return ctx.toggleClick$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxIfPocComponent_Template_button_click_6_listener($event) { return ctx.toggleClick$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " toggle (unpatched) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Angular Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RxIfPocComponent_ng_template_12_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RxIfPocComponent_div_14_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Render EmbeddedViews directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RxIfPocComponent_ng_template_19_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RxIfPocComponent_div_21_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Create/Destroy EmbeddedViews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RxIfPocComponent_ng_template_25_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RxIfPocComponent_div_27_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Display/Hide EmbeddedViews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RxIfPocComponent_ng_template_31_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RxIfPocComponent_div_33_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, ctx.value1$))("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc1If", ctx.value1$)("poc1IfFalsey", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc2If", ctx.value1$)("poc2IfFalsey", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxIf", ctx.value1$)("rxIfFalsey", _r9);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _poc1_if_directive__WEBPACK_IMPORTED_MODULE_8__["Poc1IfDirective"], _poc2_if_directive__WEBPACK_IMPORTED_MODULE_9__["Poc2IfDirective"], _rx_if_directive__WEBPACK_IMPORTED_MODULE_10__["RxIfDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_11__["DirtyChecksComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIfPocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-rx-if-poc',
                template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h2>
          rxIf POC
        </h2>
        <button mat-raised-button (click)="toggleClick$.next($event)" class="mr-1">
          toggle
        </button>
        <button mat-raised-button [unpatch] (click)="toggleClick$.next($event)">
          toggle (unpatched)
        </button>
      </div>
      <div class="row w-100">
        <div class="col-sm-3">
          <h3>Angular Native</h3>
          <ng-template #f1>
            <div class="dh-embedded-view">
              <rxa-dirty-check></rxa-dirty-check>
              FALSE
            </div>
          </ng-template>
          <div class="dh-embedded-view" *ngIf="value1$ | async; else: f1">
            <rxa-dirty-check></rxa-dirty-check>
            TRUE
          </div>
        </div>
        <div class="col-sm-3">
          <h3>Render EmbeddedViews directly</h3>
          <ng-template #f1>
            <div class="dh-embedded-view">
              <rxa-dirty-check></rxa-dirty-check>
              FALSE
            </div>
          </ng-template>
          <div class="dh-embedded-view" *poc1If="value1$; let value; falsey: f1">
            <rxa-dirty-check></rxa-dirty-check>
            TRUE
          </div>

        </div>
        <div class="col-sm-3">
          <h3>Create/Destroy EmbeddedViews</h3>
          <ng-template #f2>
            <div class="dh-embedded-view">
              <rxa-dirty-check></rxa-dirty-check>
              FALSE
            </div>
          </ng-template>
          <div class="dh-embedded-view" *poc2If="value1$; let value; falsey: f2">
            <rxa-dirty-check></rxa-dirty-check>
            TRUE
          </div>
        </div>
        <div class="col-sm-3">
          <h3>Display/Hide EmbeddedViews</h3>
          <ng-template #f3>
            <div class="dh-embedded-view">
              <rxa-dirty-check></rxa-dirty-check>
              FALSE
            </div>
          </ng-template>
          <div class="dh-embedded-view" *rxIf="value1$; let value; falsey: f3">
            <rxa-dirty-check></rxa-dirty-check>
            TRUE
          </div>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection
            }]
    }], null, null); })();


/***/ }),

/***/ "c9zg":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value/value.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "Twlx");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
// tslint:disable:no-unused-expression










const _c0 = function (a0, a1) { return { red: a0, green: a1 }; };
function ValueComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !v_r1, v_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r1 ? "check" : "highlight_off");
} }
class ValueComponent {
    constructor(state) {
        this.state = state;
        this.value$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(s.item.value, 0.5)));
    }
    set value(o) {
        this.state.connect('item', Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(o) ? o : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(o));
    }
}
ValueComponent.ɵfac = function ValueComponent_Factory(t) { return new (t || ValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"])); };
ValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueComponent, selectors: [["rxa-value"]], inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], decls: 1, vars: 1, consts: [["class", "item", 3, "ngClass", 4, "rxLet"], [1, "item", 3, "ngClass"]], template: function ValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValueComponent_mat_icon_0_Template, 2, 5, "mat-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.value$);
    } }, directives: [_libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".item.red[_ngcontent-%COMP%] {\n      color: red;\n    }\n    .item.green[_ngcontent-%COMP%] {\n      color: green;\n    }\n    .value.number[_ngcontent-%COMP%] {\n    }\n    .value.string[_ngcontent-%COMP%] {\n    }\n    .value.object[_ngcontent-%COMP%] {\n    }\n    .value.array[_ngcontent-%COMP%] {\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'rxa-value',
                template: `
    <mat-icon class="item" [ngClass]="{red:!v, green:v}" *rxLet="value$; let v">{{v ? 'check' : 'highlight_off'}}</mat-icon>`,
                styles: [`
    .item.red {
      color: red;
    }
    .item.green {
      color: green;
    }
    .value.number {
    }
    .value.string {
    }
    .value.object {
    }
    .value.array {
    }
  `],
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mCGv":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/poc1-if.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: Poc1IfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc1IfDirective", function() { return Poc1IfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc1IfDirective {
    constructor(cdRef, truthyTemplateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.truthyTemplateRef = truthyTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.viewContext = { $implicit: undefined };
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    set poc1If(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set poc1IfFalsey(templateRef) {
        this.falseyTemplateRef = templateRef;
        this.falseyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.falseyTemplateRef, this.viewContext);
    }
    ngOnInit() {
        this.tuthyEmbeddedView = this.viewContainerRef.createEmbeddedView(this.truthyTemplateRef, this.viewContext);
        this.subscription = this.values$
            .subscribe(v => {
            this.viewContext.$implicit = v;
            if (v) {
                this.tuthyEmbeddedView.detectChanges();
            }
            else {
                this.falseyEmbeddedView.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        this.tuthyEmbeddedView.destroy();
        if (this.falseyTemplateRef) {
            this.falseyEmbeddedView.destroy();
        }
        this.subscription.unsubscribe();
    }
}
Poc1IfDirective.ɵfac = function Poc1IfDirective_Factory(t) { return new (t || Poc1IfDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc1IfDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc1IfDirective, selectors: [["", "poc1If", ""]], inputs: { poc1If: "poc1If", poc1IfFalsey: "poc1IfFalsey" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc1IfDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc1If]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc1If: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc1IfFalsey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nTN4":
/*!******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-if-poc/rx-if-poc.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RxIfPocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIfPocModule", function() { return RxIfPocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _poc1_if_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poc1-if.directive */ "mCGv");
/* harmony import */ var _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rx-if-poc.component */ "Q1ST");
/* harmony import */ var _poc2_if_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./poc2-if.directive */ "3TIp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _rx_if_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rx-if.directive */ "FR8y");
/* harmony import */ var _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/work */ "nqxQ");












const DECLARATIONS = [
    _poc1_if_directive__WEBPACK_IMPORTED_MODULE_4__["Poc1IfDirective"],
    _poc2_if_directive__WEBPACK_IMPORTED_MODULE_6__["Poc2IfDirective"],
    _rx_if_directive__WEBPACK_IMPORTED_MODULE_9__["RxIfDirective"],
    _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_5__["RxIfPocComponent"]
];
class RxIfPocModule {
}
RxIfPocModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxIfPocModule });
RxIfPocModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxIfPocModule_Factory(t) { return new (t || RxIfPocModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_8__["DirtyChecksModule"],
            _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxIfPocModule, { declarations: [_poc1_if_directive__WEBPACK_IMPORTED_MODULE_4__["Poc1IfDirective"],
        _poc2_if_directive__WEBPACK_IMPORTED_MODULE_6__["Poc2IfDirective"],
        _rx_if_directive__WEBPACK_IMPORTED_MODULE_9__["RxIfDirective"],
        _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_5__["RxIfPocComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_8__["DirtyChecksModule"],
        _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]], exports: [_poc1_if_directive__WEBPACK_IMPORTED_MODULE_4__["Poc1IfDirective"],
        _poc2_if_directive__WEBPACK_IMPORTED_MODULE_6__["Poc2IfDirective"],
        _rx_if_directive__WEBPACK_IMPORTED_MODULE_9__["RxIfDirective"],
        _rx_if_poc_component__WEBPACK_IMPORTED_MODULE_5__["RxIfPocComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIfPocModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_8__["DirtyChecksModule"],
                    _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]
                ],
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ }),

/***/ "nqxQ":
/*!***************************************************!*\
  !*** ./src/app/shared/debug-helper/work/index.ts ***!
  \***************************************************/
/*! exports provided: ValueModule, ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_provider_value_value_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value-provider/value/value.module */ "2NQe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueModule", function() { return _value_provider_value_value_module__WEBPACK_IMPORTED_MODULE_0__["ValueModule"]; });

/* harmony import */ var _value_provider_value_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-provider/value/value.component */ "c9zg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return _value_provider_value_value_component__WEBPACK_IMPORTED_MODULE_1__["ValueComponent"]; });





/***/ })

}]);
//# sourceMappingURL=default~rx-if-poc-rx-if-poc-routed-module~rx-switch-poc-rx-swicht-poc-module.js.map