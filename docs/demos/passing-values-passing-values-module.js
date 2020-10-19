(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passing-values-passing-values-module"],{

/***/ "C+rG":
/*!*******************************************************************************!*\
  !*** ./src/app/features/fundamentals/passing-values/passing-values.routes.ts ***!
  \*******************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _passing_values_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passing-values.component */ "ILmJ");

const ROUTES = [
    {
        path: '',
        component: _passing_values_component__WEBPACK_IMPORTED_MODULE_0__["PassingValuesComponent"]
    }
];


/***/ }),

/***/ "ILmJ":
/*!**********************************************************************************!*\
  !*** ./src/app/features/fundamentals/passing-values/passing-values.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PassingValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingValuesComponent", function() { return PassingValuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_template_structures_recursive_recursive_static_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-static.component */ "hXri");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _shared_template_structures_recursive_recursive_observable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-observable.component */ "eYvl");















function PassingValuesComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassingValuesComponent_div_29_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r4.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-static", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.min)("max", ctx_r2.max)("changes$", ctx_r2.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r2.depth)("value", _r4.int);
} }
function PassingValuesComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Observable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 14, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassingValuesComponent_div_29_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r7.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-observable", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r3.min)("max", ctx_r3.max)("changes$", ctx_r3.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r3.depth)("value$", _r7.int$);
} }
function PassingValuesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PassingValuesComponent_div_29_div_1_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PassingValuesComponent_div_29_div_2_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.static));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.observable));
} }
class PassingValuesComponent {
    constructor() {
        this.min = 0;
        this.max = 5;
        this.displayStates = {
            none: 0,
            all: 1,
            static: 2,
            observable: 3
        };
        this.isVisible = true;
        this.btnBothClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this._depth = 5;
    }
    set depth(depth) {
        this._depth = depth >= 1 ? depth : 1;
    }
    get depth() {
        return this._depth;
    }
    selected(group, choice) {
        return group.value === choice;
    }
    visible(group, choice) {
        return group.value === choice || group.value === this.displayStates.all;
    }
}
PassingValuesComponent.ɵfac = function PassingValuesComponent_Factory(t) { return new (t || PassingValuesComponent)(); };
PassingValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassingValuesComponent, selectors: [["rxa-passing-values"]], decls: 30, vars: 8, consts: [["visualizerHeader", ""], [1, "mat-headline"], [1, "row"], [1, "col-sm-12", "col-md-12"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["name", "visibleExamples", "aria-label", "Visible Examples", 3, "value"], ["group", "matButtonToggleGroup"], [3, "value"], ["mat-raised-button", "", 1, "ml-2", 3, "click"], ["class", "row w-100", 4, "ngIf"], [1, "row", "w-100"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "mat-subheader"], [3, "min", "max", "changes$"], ["staticVal", "rxaValueProvider"], [1, "mb-1"], ["mat-mini-fab", "", 3, "click"], [3, "depth", "value"], ["observableVal", "rxaValueProvider"], ["mat-mini-fab", "", 3, "unpatch", "click"], [3, "depth", "value$"]], template: function PassingValuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Passing Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nesting Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassingValuesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.depth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Min Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassingValuesComponent_Template_input_ngModelChange_13_listener($event) { return ctx.min = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Max Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassingValuesComponent_Template_input_ngModelChange_17_listener($event) { return ctx.max = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle-group", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassingValuesComponent_Template_button_click_27_listener() { return ctx.isVisible = !ctx.isVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Toggle visibility to reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PassingValuesComponent_div_29_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.depth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.static);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.observable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_9__["ValueProviderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_template_structures_recursive_recursive_static_component__WEBPACK_IMPORTED_MODULE_11__["RecursiveStaticComponent"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_12__["UnpatchEventsDirective"], _shared_template_structures_recursive_recursive_observable_component__WEBPACK_IMPORTED_MODULE_13__["RecursiveObservableComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassingValuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-passing-values',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h1 class="mat-headline">Passing Values</h1>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <mat-form-field>
              <mat-label>Nesting Level</mat-label>
              <input matInput type="number" [(ngModel)]="depth">
            </mat-form-field>
            <mat-form-field>
              <mat-label>Min Value</mat-label>
              <input matInput type="number" [(ngModel)]="min">
            </mat-form-field>
            <mat-form-field>
              <mat-label>Max Value</mat-label>
              <input matInput type="number" [(ngModel)]="max">
            </mat-form-field>
            <div>
              <mat-button-toggle-group
                name="visibleExamples"
                aria-label="Visible Examples"
                [value]="displayStates.all"
                #group="matButtonToggleGroup">
                <mat-button-toggle [value]="displayStates.static">Static</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.observable">Observable</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.all">All</mat-button-toggle>
              </mat-button-toggle-group>
              <button mat-raised-button class="ml-2" (click)="isVisible = !isVisible;">
                Toggle visibility to reset
              </button>
            </div>
          </div>
        </div>
      </ng-container>
      <div class="row w-100" *ngIf="isVisible">
        <div class="col"
             *ngIf="visible(group, displayStates.static)">
          <h2 class="mat-subheader">Static</h2>
          <rxa-value-provider [min]="min" [max]="max" [changes$]="btnBothClick$"
                              #staticVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab (click)="staticVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-static [depth]="depth" [value]="staticVal.int"></rxa-recursive-static>
        </div>
        <div class="col"
             *ngIf="visible(group, displayStates.observable)">
          <h2 class="mat-subheader">Observable</h2>
          <rxa-value-provider [min]="min" [max]="max" [changes$]="btnBothClick$"
                              #observableVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab [unpatch] (click)="observableVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-observable [depth]="depth" [value$]="observableVal.int$"></rxa-recursive-observable>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();


/***/ }),

/***/ "xRbn":
/*!*******************************************************************************!*\
  !*** ./src/app/features/fundamentals/passing-values/passing-values.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PassingValuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingValuesModule", function() { return PassingValuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _passing_values_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passing-values.routes */ "C+rG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _passing_values_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passing-values.component */ "ILmJ");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive.module */ "g+Pc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "nIj0");

















class PassingValuesModule {
}
PassingValuesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PassingValuesModule });
PassingValuesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PassingValuesModule_Factory(t) { return new (t || PassingValuesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_passing_values_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_13__["RecursiveModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["UnpatchEventsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["PushModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PassingValuesModule, { declarations: [_passing_values_component__WEBPACK_IMPORTED_MODULE_9__["PassingValuesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_13__["RecursiveModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["UnpatchEventsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["PushModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassingValuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _passing_values_component__WEBPACK_IMPORTED_MODULE_9__["PassingValuesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_passing_values_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_11__["ValueProvidersModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_13__["RecursiveModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["UnpatchEventsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_8__["PushModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=passing-values-passing-values-module.js.map