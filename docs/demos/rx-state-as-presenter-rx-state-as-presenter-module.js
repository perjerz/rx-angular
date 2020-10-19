(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-state-as-presenter-rx-state-as-presenter-module"],{

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

/***/ "PbBz":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-as-presenter/rx-state-as-presenter.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RxStateAsPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAsPresenterComponent", function() { return RxStateAsPresenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model */ "vLMS");
/* harmony import */ var _counter_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.presenter */ "m89T");
/* harmony import */ var _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/counter-display.component */ "dvYp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");










class RxStateAsPresenterComponent {
    constructor(p) {
        this.p = p;
        this.p.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"];
        this.p.reset();
    }
}
RxStateAsPresenterComponent.ɵfac = function RxStateAsPresenterComponent_Factory(t) { return new (t || RxStateAsPresenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_counter_presenter__WEBPACK_IMPORTED_MODULE_2__["CounterPresenterService"])); };
RxStateAsPresenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxStateAsPresenterComponent, selectors: [["rxa-dynamic-counter-and-forms"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_counter_presenter__WEBPACK_IMPORTED_MODULE_2__["CounterPresenterService"]])], decls: 37, vars: 10, consts: [[1, "counter"], [3, "count$"], ["mat-raised-button", "", 3, "click"], ["type", "number", "min", "0", "matInput", "", 3, "value", "input"], ["count", ""], ["tickSpeed", ""], ["countDiff", ""]], template: function RxStateAsPresenterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RxState + Presenter Patters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-counter-display", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_4_listener() { return ctx.p.dontTick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_6_listener() { return ctx.p.dontTick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_8_listener() { return ctx.p.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_11_listener() { return ctx.p.setToClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Set To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAsPresenterComponent_Template_input_input_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.p.changeCount(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_20_listener() { return ctx.p.countUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Count Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateAsPresenterComponent_Template_button_click_22_listener() { return ctx.p.countDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Count Down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tick Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAsPresenterComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.p.changeTickSpeed(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CountDiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 3, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateAsPresenterComponent_Template_input_input_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.p.changeCountDiff(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count$", ctx.p.count$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 4, ctx.p.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 6, ctx.p.count$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 8, ctx.p.countDiff$));
    } }, directives: [_shared_counter_display_component__WEBPACK_IMPORTED_MODULE_3__["CounterDisplayComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateAsPresenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-dynamic-counter-and-forms',
                template: `
    <h1>RxState + Presenter Patters</h1>
    <div class="counter">

      <rxa-counter-display [count$]="p.count$"></rxa-counter-display>

      <button (click)="p.dontTick()" mat-raised-button>
        Start
      </button>

      <button (click)="p.dontTick()" mat-raised-button>
        Pause
      </button>

      <button (click)="p.reset()" mat-raised-button>
        Reset
      </button>

      <br/>

      <button (click)="p.setToClick()" mat-raised-button>
        Set To
      </button>

      <mat-form-field>
        <label>Count</label>
        <input #count type="number" min="0" matInput [value]="p.count$ | push" (input)="p.changeCount(count.value)"/>
      </mat-form-field>
      <br/>

      <button (click)="p.countUp()" mat-raised-button>
        Count Up
      </button>

      <button (click)="p.countDown()" mat-raised-button>
        Count Down
      </button>

      <br/>

      <mat-form-field>
        <label>Tick Speed</label>
        <input #tickSpeed type="number" min="0" matInput [value]="p.count$ | push" (input)="p.changeTickSpeed(tickSpeed.value)"/>
      </mat-form-field>

      <mat-form-field>
        <label>CountDiff</label>
        <input #countDiff type="number" min="0" matInput [value]="p.countDiff$ | push" (input)="p.changeCountDiff(countDiff.value)"/>
      </mat-form-field>

    </div>
  `,
                providers: [_counter_presenter__WEBPACK_IMPORTED_MODULE_2__["CounterPresenterService"]]
            }]
    }], function () { return [{ type: _counter_presenter__WEBPACK_IMPORTED_MODULE_2__["CounterPresenterService"] }]; }, null); })();


/***/ }),

/***/ "m89T":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-as-presenter/counter.presenter.ts ***!
  \**************************************************************************************************/
/*! exports provided: CounterPresenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPresenterService", function() { return CounterPresenterService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model */ "vLMS");
/* harmony import */ var _shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/to-latest-from */ "Yzsv");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/utils */ "vtTQ");








class CounterPresenterService extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] {
    constructor() {
        super();
        this.countChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.tickSpeedChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.countDiffChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isTickingToggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.countUpToggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setToClickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.updateCountTrigger$ = this.select(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["selectSlice"])(['isTicking', 'tickSpeed']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(s => (s.isTicking ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, s.tickSpeed) : rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])));
        this.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_4__["INITIAL_STATE"];
        this.count$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => s.count + ''));
        this.tickSpeed$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => s.tickSpeed + ''));
        this.countDiff$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => s.countDiff + ''));
        this.connect('isTicking', this.isTickingToggleSubject);
        this.connect('countUp', this.countUpToggleSubject);
        this.connect('countDiff', this.countDiffChangeSubject);
        this.connect('tickSpeed', this.tickSpeedChangeSubject);
        this.connect('count', this.setToClickSubject.pipe(Object(_shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_5__["toLatestFrom"])(this.countChangeSubject)));
        this.connect('count', this.updateCountTrigger$, _shared_utils__WEBPACK_IMPORTED_MODULE_6__["updateCount"]);
    }
    reset() {
        this.set(this.initialCounterState);
    }
    setToClick() {
        this.countChangeSubject.next();
    }
    changeTickSpeed(tickSpeed) {
        this.tickSpeedChangeSubject.next(parseInt(tickSpeed, 10));
    }
    changeCountDiff(countDiff) {
        this.tickSpeedChangeSubject.next(parseInt(countDiff, 10));
    }
    changeCount(count) {
        this.countChangeSubject.next(parseInt(count, 10));
    }
    doTick() {
        this.isTickingToggleSubject.next(true);
    }
    dontTick() {
        this.isTickingToggleSubject.next(false);
    }
    countUp() {
        this.countUpToggleSubject.next(true);
    }
    countDown() {
        this.countUpToggleSubject.next(false);
    }
}
CounterPresenterService.ɵfac = function CounterPresenterService_Factory(t) { return new (t || CounterPresenterService)(); };
CounterPresenterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CounterPresenterService, factory: CounterPresenterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CounterPresenterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "snfz":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-as-presenter/rx-state-as-presenter.routes.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_state_as_presenter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-state-as-presenter.component */ "PbBz");

const ROUTES = [
    {
        path: '',
        component: _rx_state_as_presenter_component__WEBPACK_IMPORTED_MODULE_0__["RxStateAsPresenterComponent"]
    }
];


/***/ }),

/***/ "u4tU":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-as-presenter/rx-state-as-presenter.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RxStateAsPresenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAsPresenterModule", function() { return RxStateAsPresenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_state_as_presenter_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-state-as-presenter.routes */ "snfz");
/* harmony import */ var _rx_state_as_presenter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-state-as-presenter.component */ "PbBz");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "QGud");







const DECLARATIONS = [_rx_state_as_presenter_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAsPresenterComponent"]];
class RxStateAsPresenterModule {
}
RxStateAsPresenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxStateAsPresenterModule });
RxStateAsPresenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxStateAsPresenterModule_Factory(t) { return new (t || RxStateAsPresenterModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_as_presenter_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxStateAsPresenterModule, { declarations: [_rx_state_as_presenter_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAsPresenterComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateAsPresenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_as_presenter_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rx-state-as-presenter-rx-state-as-presenter-module.js.map