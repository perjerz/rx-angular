(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coalescing-coalescing-module"],{

/***/ "1s19":
/*!***********************************************************************!*\
  !*** ./src/app/features/fundamentals/coalescing/coalescing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CoalescingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoalescingModule", function() { return CoalescingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _coalescing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coalescing.routes */ "pJpZ");
/* harmony import */ var _coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coalescing/coalescing.component */ "Zy7p");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider */ "uNb+");














const DECLARATIONS = [
    _coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_5__["CoalescingComponent"]
];
class CoalescingModule {
}
CoalescingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoalescingModule });
CoalescingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoalescingModule_Factory(t) { return new (t || CoalescingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_coalescing_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_6__["VisualizerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoalescingModule, { declarations: [_coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_5__["CoalescingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_6__["VisualizerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"]], exports: [_coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_5__["CoalescingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoalescingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_coalescing_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_6__["VisualizerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"]
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "6192":
/*!****************************************************************************************!*\
  !*** ./src/app/features/fundamentals/coalescing/coalescing/coalescing-test.service.ts ***!
  \****************************************************************************************/
/*! exports provided: CoalescingTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoalescingTestService", function() { return CoalescingTestService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");


class CoalescingTestService {
    constructor() {
        this.ms = 10;
        this.strategy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('noop');
        this.nextValues = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.toggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.value$ = this.nextValues.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => ['1', '2', Math.random() + '']));
        this.toggleTick = this.toggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(isTrue => !isTrue, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(isTrue => (isTrue ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(this.ms) : rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.nextValues.next(1)));
    }
    updateValue() {
        this.nextValues.next(1);
    }
    updatePattern() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(this.ms)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(20))
            .subscribe(() => this.nextValues.next(1));
    }
    updatePatternSet(strategyNames) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(strategyNames)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(strategyName => {
            this.strategy$.next(strategyName);
            console.log('strategy', strategyName);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(this.ms, rxjs__WEBPACK_IMPORTED_MODULE_0__["asapScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(5000)));
        }))
            .subscribe(() => {
            this.nextValues.next(1);
        });
    }
}


/***/ }),

/***/ "Zy7p":
/*!*************************************************************************************!*\
  !*** ./src/app/features/fundamentals/coalescing/coalescing/coalescing.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CoalescingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoalescingComponent", function() { return CoalescingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _coalescing_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coalescing-test.service */ "6192");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");















function CoalescingComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r5, " ");
} }
function CoalescingComponent_rxa_visualizer_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "rxLet 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
function CoalescingComponent_rxa_visualizer_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "rxLet 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r7, " ");
} }
const _c0 = function () { return []; };
class CoalescingComponent {
    constructor(cdRef, s) {
        this.cdRef = cdRef;
        this.s = s;
        this.strategy$ = this.s.strategy$;
        this.strategies = Object.keys(Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_1__["getStrategies"])({ cdRef: { context: {} } }));
    }
    updateValue() {
        this.s.updateValue();
    }
    ngOnInit() {
        this.s.toggleTick.subscribe();
    }
}
CoalescingComponent.ɵfac = function CoalescingComponent_Factory(t) { return new (t || CoalescingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coalescing_test_service__WEBPACK_IMPORTED_MODULE_2__["CoalescingTestService"])); };
CoalescingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoalescingComponent, selectors: [["rxa-demo-basics"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_coalescing_test_service__WEBPACK_IMPORTED_MODULE_2__["CoalescingTestService"]])], decls: 36, vars: 21, consts: [["visualizerHeader", ""], [3, "buttons", "unpatched"], ["vP", "rxaValueProvider"], ["formControlName", "strategy", "id", "strategy", 3, "selectionChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "w-100"], [1, "col-sm-3"], ["viewType", "embedded-view", "class", "col-sm-3", 4, "rxLet", "rxLetStrategy"], [3, "value"], ["viewType", "embedded-view", 1, "col-sm-3"]], template: function CoalescingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Coalescing Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-value-provider", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CoalescingComponent_Template_mat_select_selectionChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.strategy$.next(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CoalescingComponent_mat_option_14_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoalescingComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "UpdateValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoalescingComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "UpdateValue (unpatched)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rxa-visualizer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Push 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CoalescingComponent_rxa_visualizer_28_Template, 4, 1, "rxa-visualizer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Push 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CoalescingComponent_rxa_visualizer_35_Template, 4, 1, "rxa-visualizer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", true)("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Render Strategy: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx.strategy$)), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.strategies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 14, _r0.incremental$, ctx.strategy$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", _r0.incremental$)("rxLetStrategy", ctx.strategy$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 17, _r0.incremental$, ctx.strategy$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", _r0.incremental$)("rxLetStrategy", ctx.strategy$);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__["ValueProviderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsDirective"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_10__["LetDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoalescingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-demo-basics',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h2>Coalescing Tests</h2>
        <rxa-value-provider [buttons]="true" [unpatched]="[]" #vP="rxaValueProvider"></rxa-value-provider>
        <div>
          <mat-form-field>
            <label>Render Strategy: {{ strategy$ | push | json}}</label>
            <mat-select #select formControlName="strategy" id="strategy" (selectionChange)="strategy$.next(select.value)">
              <mat-option
                [value]="s"
                *ngFor="let s of strategies">
                {{ s }}
              </mat-option>
            </mat-select>
          </mat-form-field>
          <br>
          <button mat-raised-button (click)="vP.next()">UpdateValue</button>
          <button mat-raised-button [unpatch] (click)="vP.next()">UpdateValue (unpatched)</button>
        </div>
      </ng-container>
      <rxa-visualizer class="w-100">
        <div class="col-sm-3">
          <h3>Push 1</h3>
          <br/>
          {{ vP.incremental$ | push: strategy$ }}<br/>
        </div>
        <rxa-visualizer viewType="embedded-view" *rxLet="vP.incremental$; let value; strategy: strategy$" class="col-sm-3">
          <h3 visualizerHeader>rxLet 1</h3>
          {{ value }}
        </rxa-visualizer>
        <div class="col-sm-3">
          <h3>Push 2</h3>
          <br/>
          {{ vP.incremental$ | push: strategy$ }}
        </div>
        <rxa-visualizer viewType="embedded-view" *rxLet="vP.incremental$; let value; strategy: strategy$" class="col-sm-3">
          <h3 visualizerHeader>rxLet 2</h3>
          {{ value }}
        </rxa-visualizer>
      </rxa-visualizer>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [_coalescing_test_service__WEBPACK_IMPORTED_MODULE_2__["CoalescingTestService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _coalescing_test_service__WEBPACK_IMPORTED_MODULE_2__["CoalescingTestService"] }]; }, null); })();


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

/***/ "pJpZ":
/*!***********************************************************************!*\
  !*** ./src/app/features/fundamentals/coalescing/coalescing.routes.ts ***!
  \***********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coalescing/coalescing.component */ "Zy7p");

const ROUTES = [
    {
        path: '',
        component: _coalescing_coalescing_component__WEBPACK_IMPORTED_MODULE_0__["CoalescingComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=coalescing-coalescing-module.js.map