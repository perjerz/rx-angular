(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-state-and-reactive-forms-rx-state-and-reactive-forms-module"],{

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

/***/ "bRre":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-reactive-forms/rx-state-and-reactive-forms.routes.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_state_and_reactive_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-state-and-reactive-forms.component */ "eZ0c");

const ROUTES = [
    {
        path: '',
        component: _rx_state_and_reactive_forms_component__WEBPACK_IMPORTED_MODULE_0__["RxStateAndReactiveFormsCounterComponent"]
    }
];


/***/ }),

/***/ "eZ0c":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-reactive-forms/rx-state-and-reactive-forms.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: RxStateAndReactiveFormsCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndReactiveFormsCounterComponent", function() { return RxStateAndReactiveFormsCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model */ "vLMS");
/* harmony import */ var _shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/to-latest-from */ "Yzsv");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/utils */ "vtTQ");
/* harmony import */ var _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/counter-display.component */ "dvYp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
















class RxStateAndReactiveFormsCounterComponent {
    constructor(fb, $) {
        this.fb = fb;
        this.$ = $;
        this.initialCounterState = _shared_model__WEBPACK_IMPORTED_MODULE_6__["INITIAL_STATE"];
        this.counterForm = this.fb.group({
            tickSpeed: [],
            count: [],
            countDiff: []
        });
        this.updateTicking = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateCountUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.btnSetTo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.count$ = this.$.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.count + ''));
        this.reset();
        this.$.connect(this.updateTicking);
        this.$.connect(this.updateCountUp);
        this.$.connect(this.counterForm.valueChanges
            .pipe(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["selectSlice"])(['tickSpeed', 'countDiff'])));
        this.$.connect(this.btnSetTo.pipe(Object(_shared_utils_to_latest_from__WEBPACK_IMPORTED_MODULE_7__["toLatestFrom"])(this.counterForm.valueChanges
            .pipe(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["selectSlice"])(['count'])), { count: this.counterForm.value.count })));
        const updateCountTrigger$ = this.$.select(Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["selectSlice"])(['isTicking', 'tickSpeed']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(s => (s.isTicking ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, s.tickSpeed) : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])));
        this.$.connect('count', updateCountTrigger$, _shared_utils__WEBPACK_IMPORTED_MODULE_8__["updateCount"]);
    }
    reset() {
        const _a = this.initialCounterState, { tickSpeed, countDiff, count } = _a, ignore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["tickSpeed", "countDiff", "count"]);
        this.$.set(this.initialCounterState);
        this.counterForm.patchValue({ tickSpeed, countDiff, count });
    }
}
RxStateAndReactiveFormsCounterComponent.ɵfac = function RxStateAndReactiveFormsCounterComponent_Factory(t) { return new (t || RxStateAndReactiveFormsCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["RxState"])); };
RxStateAndReactiveFormsCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RxStateAndReactiveFormsCounterComponent, selectors: [["rxa-dynamic-counter-and-forms"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["RxState"]])], decls: 31, vars: 5, consts: [[1, "counter", 3, "formGroup"], [3, "count$"], ["mat-raised-button", "", 3, "click"], ["type", "number", "min", "0", "matInput", "", 3, "formControlName"]], template: function RxStateAndReactiveFormsCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "RxState + ReactiveForms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "rxa-counter-display", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_4_listener() { return ctx.updateTicking.next({ isTicking: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_6_listener() { return ctx.updateTicking.next({ isTicking: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Pause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_8_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_11_listener() { return ctx.btnSetTo.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Set To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_18_listener() { return ctx.updateCountUp.next({ countUp: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Count Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RxStateAndReactiveFormsCounterComponent_Template_button_click_20_listener() { return ctx.updateCountUp.next({ countUp: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Count Down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Tick Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "CountDiff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.counterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("count$", ctx.count$);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", "count");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", "tickSpeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", "countDiff");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _shared_counter_display_component__WEBPACK_IMPORTED_MODULE_9__["CounterDisplayComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RxStateAndReactiveFormsCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'rxa-dynamic-counter-and-forms',
                template: `
    <h1>RxState + ReactiveForms</h1>
    <form [formGroup]="counterForm" class="counter">

      <rxa-counter-display [count$]="count$"></rxa-counter-display>

      <button
        (click)="updateTicking.next({ isTicking: true })"
        mat-raised-button>
        Start
      </button>

      <button
        (click)="updateTicking.next({ isTicking: false })"
        mat-raised-button>
        Pause
      </button>

      <button
        (click)="reset()"
        mat-raised-button>
        Reset
      </button>

      <br/>

      <button
        (click)="btnSetTo.next()"
        mat-raised-button>
        Set To
      </button>

      <mat-form-field>
        <label>Count</label>
        <input type="number" min="0" matInput [formControlName]="'count'"/>
      </mat-form-field>
      <br/>

      <button
        (click)="updateCountUp.next({ countUp: true })"
        mat-raised-button>
        Count Up
      </button>

      <button
        (click)="updateCountUp.next({ countUp: false })"
        mat-raised-button>
        Count Down
      </button>

      <br/>

      <mat-form-field>
        <label>Tick Speed</label>
        <input type="number" min="0" matInput [formControlName]="'tickSpeed'"/>
      </mat-form-field>

      <mat-form-field>
        <label>CountDiff</label>
        <input type="number" min="0" matInput [formControlName]="'countDiff'"/>
      </mat-form-field>

    </form>
  `,
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["RxState"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_5__["RxState"] }]; }, null); })();


/***/ }),

/***/ "lgii":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/rx-state-and-reactive-forms/rx-state-and-reactive-forms.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: RxStateAndReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStateAndReactiveFormsModule", function() { return RxStateAndReactiveFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_state_and_reactive_forms_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-state-and-reactive-forms.routes */ "bRre");
/* harmony import */ var _rx_state_and_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-state-and-reactive-forms.component */ "eZ0c");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "QGud");







const DECLARATIONS = [_rx_state_and_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAndReactiveFormsCounterComponent"]];
class RxStateAndReactiveFormsModule {
}
RxStateAndReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxStateAndReactiveFormsModule });
RxStateAndReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxStateAndReactiveFormsModule_Factory(t) { return new (t || RxStateAndReactiveFormsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_and_reactive_forms_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxStateAndReactiveFormsModule, { declarations: [_rx_state_and_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__["RxStateAndReactiveFormsCounterComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxStateAndReactiveFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_state_and_reactive_forms_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rx-state-and-reactive-forms-rx-state-and-reactive-forms-module.js.map