(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-state-in-the-view-rx-state-in-the-view-module"],{

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

/***/ "GSqT":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-in-the-view/rx-state-in-the-view.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RxStateInTheViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateInTheViewModule", function() { return RxStateInTheViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_state_in_the_view_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-state-in-the-view.routes */ "p5WH");
/* harmony import */ var _rx_state_in_the_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-state-in-the-view.component */ "UZDk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "QGud");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");








const DECLARATIONS = [_rx_state_in_the_view_component__WEBPACK_IMPORTED_MODULE_3__["RxStateInTheViewComponent"]];
class RxStateInTheViewModule {
}
RxStateInTheViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxStateInTheViewModule });
RxStateInTheViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxStateInTheViewModule_Factory(t) { return new (t || RxStateInTheViewModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_in_the_view_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxStateInTheViewModule, { declarations: [_rx_state_in_the_view_component__WEBPACK_IMPORTED_MODULE_3__["RxStateInTheViewComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateInTheViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_in_the_view_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
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

/***/ "UZDk":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-in-the-view/rx-state-in-the-view.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RxStateInTheViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateInTheViewComponent", function() { return RxStateInTheViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model */ "vLMS");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils/to-latest-from */ "Yzsv");
/* harmony import */ var _shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/to-int */ "a8G2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils */ "vtTQ");
/* harmony import */ var _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/counter-display.component */ "dvYp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");














class RxStateInTheViewComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["RxState"] {
    constructor() {
        super();
        this.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"];
        this.setToClick = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.countChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.count$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(s => s.count + ''));
        this.tickSpeed$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(s => s.tickSpeed + ''));
        this.countDiff$ = this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(s => s.countDiff + ''));
        this.updateCountTrigger$ = this.select(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["selectSlice"])(['isTicking', 'tickSpeed']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(s => (s.isTicking ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, s.tickSpeed) : rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])));
        this.set(this.initialCounterState);
        this.connect('count', this.setToClick.pipe(Object(_shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_4__["toLatestFrom"])(this.countChange, this.initialCounterState.count + ''), Object(_shared_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["toInt"])()));
        this.connect('count', this.updateCountTrigger$, _shared_utils__WEBPACK_IMPORTED_MODULE_7__["updateCount"]);
    }
}
RxStateInTheViewComponent.ɵfac = function RxStateInTheViewComponent_Factory(t) { return new (t || RxStateInTheViewComponent)(); };
RxStateInTheViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxStateInTheViewComponent, selectors: [["rxa-counter-rx-state-in-the-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 8, consts: [[1, "counter"], [3, "count$"], ["mat-raised-button", "", 3, "click"], ["type", "number", "min", "0", "matInput", "", 3, "value", "input"], ["count", ""], ["tickSpeed", ""], ["countDiff", ""]], template: function RxStateInTheViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RxState in the view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-counter-display", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_4_listener() { return ctx.set({ isTicking: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_6_listener() { return ctx.set({ isTicking: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_8_listener() { return ctx.set(ctx.initialCounterState); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_11_listener() { return ctx.setToClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Set To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateInTheViewComponent_Template_input_input_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.countChange.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_19_listener() { return ctx.set({ countUp: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Count Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxStateInTheViewComponent_Template_button_click_21_listener() { return ctx.set({ countUp: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Count Down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tick Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateInTheViewComponent_Template_input_input_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.set({ tickSpeed: _r1.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CountDiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 3, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxStateInTheViewComponent_Template_input_input_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.set({ countUp: _r2.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count$", ctx.count$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.initialCounterState.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 4, ctx.tickSpeed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 6, ctx.countDiff$));
    } }, directives: [_shared_counter_display_component__WEBPACK_IMPORTED_MODULE_8__["CounterDisplayComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_12__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateInTheViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-counter-rx-state-in-the-view',
                template: `
    <h1>RxState in the view</h1>
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
        <input #count type="number" min="0" matInput [value]="initialCounterState.count" (input)="countChange.next(count.value)"/>
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
        <input #countDiff type="number" min="0" matInput [value]="countDiff$ | push" (input)="set({countUp: countDiff.value})"/>
      </mat-form-field>

    </div>
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "p5WH":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-in-the-view/rx-state-in-the-view.routes.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_state_in_the_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-state-in-the-view.component */ "UZDk");

const ROUTES = [
    {
        path: '',
        component: _rx_state_in_the_view_component__WEBPACK_IMPORTED_MODULE_0__["RxStateInTheViewComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=rx-state-in-the-view-rx-state-in-the-view-module.js.map