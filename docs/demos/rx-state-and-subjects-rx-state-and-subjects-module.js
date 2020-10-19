(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-state-and-subjects-rx-state-and-subjects-module"],{

/***/ "5PDz":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RxStateAndSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndSubjectsComponent", function() { return RxStateAndSubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model */ "vLMS");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils/to-latest-from */ "Yzsv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/utils/to-int */ "a8G2");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils */ "vtTQ");
/* harmony import */ var _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/counter-display.component */ "dvYp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");














class RxStateAndSubjectsComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["RxState"] {
    constructor() {
        super();
        this.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"];
        this.countChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tickSpeedChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.countDiffChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isTickingToggle = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.countUpToggle = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.setToClick = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateCountTrigger$ = this.select(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["selectSlice"])(['isTicking', 'tickSpeed']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(s => (s.isTicking ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, s.tickSpeed) : rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])));
        this.count$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(s => s.count + ''));
        this.tickSpeed$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(s => s.tickSpeed + ''));
        this.countDiff$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(s => s.countDiff + ''));
        this.set(this.initialCounterState);
        this.connect('isTicking', this.isTickingToggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(a => !a, this.initialCounterState.isTicking)));
        this.connect('countUp', this.countUpToggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(a => !a, this.initialCounterState.countUp)));
        this.connect('countDiff', this.countDiffChange.pipe(Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["toInt"])()));
        this.connect('tickSpeed', this.tickSpeedChange.pipe(Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["toInt"])()));
        this.connect('count', this.setToClick.pipe(Object(_shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_4__["toLatestFrom"])(this.countChange, this.initialCounterState.count + ''), Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["toInt"])()));
        this.connect('count', this.updateCountTrigger$, _shared_utils__WEBPACK_IMPORTED_MODULE_7__["updateCount"]);
    }
}
RxStateAndSubjectsComponent.ɵfac = function RxStateAndSubjectsComponent_Factory(t) { return new (t || RxStateAndSubjectsComponent)(); };
RxStateAndSubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxStateAndSubjectsComponent, selectors: [["rxa-counter-rx-state-in-the-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 10, consts: [[1, "counter"], [3, "count$"], ["mat-raised-button", "", 3, "click"], ["type", "number", "min", "0", "matInput", "", 3, "value", "input"], ["count", ""], ["tickSpeed", ""], ["countDiff", ""]], template: function RxStateAndSubjectsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RxState + Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-counter-display", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_4_listener() { return ctx.set({ isTicking: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_6_listener() { return ctx.set({ isTicking: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_8_listener() { return ctx.set(ctx.initialCounterState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_11_listener() { return ctx.setToClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Set To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.countChange.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_20_listener() { return ctx.set({ countUp: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Count Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAndSubjectsComponent_Template_button_click_22_listener() { return ctx.set({ countUp: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Count Down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tick Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.set({ tickSpeed: _r1.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CountDiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 3, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAndSubjectsComponent_Template_input_input_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.set({ countDiff: _r2.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count$", ctx.count$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 4, ctx.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 6, ctx.tickSpeed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 8, ctx.countDiff$));
    } }, directives: [_shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__["CounterDisplayComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateAndSubjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-counter-rx-state-in-the-view',
                template: `
    <h1>RxState + Subjects</h1>
    <div class="counter">

      <rxa-counter-display [count$]="count$"></rxa-counter-display>

      <button (click)="set({isTicking: true})" mat-raised-button>
        Start
      </button>

      <button (click)="set({isTicking: false})" mat-raised-button>
        Pause
      </button>

      <button (click)="set(initialCounterState)" mat-raised-button>
        Reset
      </button>

      <br/>

      <button (click)="setToClick.next()" mat-raised-button>
        Set To
      </button>

      <mat-form-field>
        <label>Count</label>
        <input #count type="number" min="0" matInput [value]="count$ | push" (input)="countChange.next(count.value)"/>
      </mat-form-field>
      <br/>

      <button (click)="set({countUp: true})" mat-raised-button>
        Count Up
      </button>

      <button (click)="set({countUp: false})" mat-raised-button>
        Count Down
      </button>

      <br/>

      <mat-form-field>
        <label>Tick Speed</label>
        <input #tickSpeed type="number" min="0" matInput [value]="tickSpeed$ | push" (input)="set({tickSpeed: tickSpeed.value})"/>
      </mat-form-field>

      <mat-form-field>
        <label>CountDiff</label>
        <input #countDiff type="number" min="0" matInput [value]="countDiff$ | push" (input)="set({countDiff: countDiff.value})"/>
      </mat-form-field>

    </div>
  `
            }]
    }], function () { return []; }, null); })();


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

/***/ "DuV3":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RxStateAndSubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndSubjectsModule", function() { return RxStateAndSubjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_state_and_subjects_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-state-and-subjects.routes */ "TF04");
/* harmony import */ var _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-state-and-subjects.component */ "5PDz");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "QGud");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");








const DECLARATIONS = [_rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAndSubjectsComponent"]];
class RxStateAndSubjectsModule {
}
RxStateAndSubjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxStateAndSubjectsModule });
RxStateAndSubjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxStateAndSubjectsModule_Factory(t) { return new (t || RxStateAndSubjectsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_and_subjects_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxStateAndSubjectsModule, { declarations: [_rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAndSubjectsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateAndSubjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_and_subjects_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ]
            }]
    }], null, null); })();


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

/***/ "TF04":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-subjects/rx-state-and-subjects.routes.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-state-and-subjects.component */ "5PDz");

const ROUTES = [
    {
        path: '',
        component: _rx_state_and_subjects_component__WEBPACK_IMPORTED_MODULE_0__["RxStateAndSubjectsComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=rx-state-and-subjects-rx-state-and-subjects-module.js.map