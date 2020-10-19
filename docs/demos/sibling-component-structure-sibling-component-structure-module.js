(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sibling-component-structure-sibling-component-structure-module"],{

/***/ "/G/n":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/performance/sibling-component-structure/sibling-component-structure.routes.ts ***!
  \********************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _sibling_component_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sibling-component-structure.component */ "GqLk");

const ROUTES = [
    {
        path: '',
        component: _sibling_component_structure_component__WEBPACK_IMPORTED_MODULE_0__["SiblingComponentStructureComponent"]
    }
];


/***/ }),

/***/ "1rJa":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/cd-helper.ts ***!
  \*******************************************/
/*! exports provided: CdHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdHelper", function() { return CdHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class CdHelper {
    constructor(cdRef, appRef) {
        this.cdRef = cdRef;
        this.appRef = appRef;
    }
    appRef_tick() {
        this.appRef.tick();
    }
    cdRef_detectChanges() {
        this.cdRef.detectChanges();
    }
    cdRef_markForCheck() {
        this.cdRef.markForCheck();
    }
    markDirty() {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmarkDirty"])(this.cdRef.context);
    }
    detectChanges() {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdetectChanges"])(this.cdRef.context);
    }
}
CdHelper.ɵfac = function CdHelper_Factory(t) { return new (t || CdHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
CdHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CdHelper, factory: CdHelper.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, null); })();


/***/ }),

/***/ "9btV":
/*!*********************************************************************!*\
  !*** ./src/app/shared/debug-helper/cd-trigger/cd-trigger.module.ts ***!
  \*********************************************************************/
/*! exports provided: CdTriggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdTriggerModule", function() { return CdTriggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cd-trigger/cd-trigger.component */ "jf4S");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _strategy_control_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../strategy-control-panel */ "kUfC");







class CdTriggerModule {
}
CdTriggerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdTriggerModule });
CdTriggerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdTriggerModule_Factory(t) { return new (t || CdTriggerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"],
            _strategy_control_panel__WEBPACK_IMPORTED_MODULE_5__["ZonePatchedIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdTriggerModule, { declarations: [_cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_2__["CdTriggerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"],
        _strategy_control_panel__WEBPACK_IMPORTED_MODULE_5__["ZonePatchedIconModule"]], exports: [_cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_2__["CdTriggerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdTriggerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_2__["CdTriggerComponent"]],
                exports: [
                    _cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_2__["CdTriggerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"],
                    _strategy_control_panel__WEBPACK_IMPORTED_MODULE_5__["ZonePatchedIconModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GqLk":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/performance/sibling-component-structure/sibling-component-structure.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SiblingComponentStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiblingComponentStructureComponent", function() { return SiblingComponentStructureComponent; });
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
/* harmony import */ var _shared_template_structures_sibling_sibling_async_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/template-structures/sibling/sibling-async.component */ "PY8l");













function SiblingComponentStructureComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiblingComponentStructureComponent_div_25_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r3.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-sibling-async", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.min)("max", ctx_r2.max)("changes$", ctx_r2.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx_r2.count)("value", _r3.int);
} }
function SiblingComponentStructureComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SiblingComponentStructureComponent_div_25_div_1_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.static));
} }
class SiblingComponentStructureComponent {
    constructor() {
        this.displayStates = {
            none: 0,
            all: 1,
            static: 2,
            observable: 3,
            async: 4,
            push: 5,
            clet: 6,
            evlet: 7
        };
        this.isVisible = true;
        this.btnBothClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this._count = 100;
    }
    set count(depth) {
        this._count = depth >= 1 ? depth : 1;
    }
    get count() {
        return this._count;
    }
    selected(group, choice) {
        return group.value === choice;
    }
    visible(group, choice) {
        return group.value === choice || group.value === this.displayStates.all;
    }
}
SiblingComponentStructureComponent.ɵfac = function SiblingComponentStructureComponent_Factory(t) { return new (t || SiblingComponentStructureComponent)(); };
SiblingComponentStructureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiblingComponentStructureComponent, selectors: [["rxa-sibling-component-structure"]], decls: 26, vars: 8, consts: [["visualizerHeader", ""], [1, "mat-headline"], [1, "row"], [1, "col-sm-12", "col-md-12"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["name", "visibleExamples", "aria-label", "Visible Examples", 3, "value"], ["group", "matButtonToggleGroup"], [3, "value"], ["mat-raised-button", "", 1, "ml-2", 3, "click"], ["class", "row w-100", 4, "ngIf"], [1, "row", "w-100"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "mat-subheader"], [3, "min", "max", "changes$"], ["staticVal", "rxaValueProvider"], [1, "mb-1"], ["mat-mini-fab", "", 3, "click"], [3, "count", "value"]], template: function SiblingComponentStructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nested Component Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Num Siblings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiblingComponentStructureComponent_Template_input_ngModelChange_9_listener($event) { return ctx.count = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle-group", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "C Let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ev Let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiblingComponentStructureComponent_Template_button_click_23_listener() { return ctx.isVisible = !ctx.isVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Toggle visibility to reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SiblingComponentStructureComponent_div_25_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.static);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.async);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.clet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.evlet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_9__["ValueProviderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_template_structures_sibling_sibling_async_component__WEBPACK_IMPORTED_MODULE_11__["SiblingAsyncComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiblingComponentStructureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-sibling-component-structure',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h1 class="mat-headline">Nested Component Structure</h1>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <mat-form-field>
              <mat-label>Num Siblings</mat-label>
              <input matInput type="number" [(ngModel)]="count">
            </mat-form-field>
            <div>
              <mat-button-toggle-group
                name="visibleExamples"
                aria-label="Visible Examples"
                [value]="displayStates.all"
                #group="matButtonToggleGroup">
                <mat-button-toggle [value]="displayStates.static">Static</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.async">Async</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.clet">C Let</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.evlet">Ev Let</mat-button-toggle>
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
          <rxa-sibling-async [count]="count" [value]="staticVal.int"></rxa-sibling-async>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();


/***/ }),

/***/ "PY8l":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/template-structures/sibling/sibling-async.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SiblingAsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiblingAsyncComponent", function() { return SiblingAsyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function SiblingAsyncComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SiblingAsyncComponent {
    constructor() {
        this.siblings = [];
        this.trackBy = i => i;
    }
    set count(num) {
        this.siblings = new Array(num).fill(0).map((_, idx) => idx);
    }
    ;
}
SiblingAsyncComponent.ɵfac = function SiblingAsyncComponent_Factory(t) { return new (t || SiblingAsyncComponent)(); };
SiblingAsyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiblingAsyncComponent, selectors: [["rxa-sibling-async"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { count: "count", value: "value" }, decls: 5, vars: 3, consts: [["visualizerHeader", ""], [1, "w-100"], ["class", "sibling", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "sibling"]], template: function SiblingAsyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SiblingAsyncComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.siblings.length, " Siblings Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.siblings)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".sibling[_ngcontent-%COMP%] {\n      width: 3px;\n      height: 3px;\n      float: left;\n      margin: 0 1px 1px 0;\n      background-color: #fafbfc;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiblingAsyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-sibling-async',
                template: `
    <rxa-visualizer>
      <p visualizerHeader>{{siblings.length}} Siblings Static</p>
      <div class="w-100">
        <span class="sibling" *ngFor="let sibling of siblings; trackBy:trackBy">
          &nbsp;
        </span>
      </div>
    </rxa-visualizer>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                styles: [`
    .sibling {
      width: 3px;
      height: 3px;
      float: left;
      margin: 0 1px 1px 0;
      background-color: #fafbfc;
    }
  `],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hbFO":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/performance/sibling-component-structure/sibling-component-structure.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: SiblingComponentStructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiblingComponentStructureModule", function() { return SiblingComponentStructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _sibling_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sibling-component-structure.routes */ "/G/n");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _sibling_component_structure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sibling-component-structure.component */ "GqLk");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _shared_debug_helper_cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/debug-helper/cd-trigger/cd-trigger.module */ "9btV");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/debug-helper/renderings */ "RB8a");
/* harmony import */ var _experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.module */ "pcLL");
/* harmony import */ var _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive.module */ "g+Pc");
/* harmony import */ var _shared_template_structures_sibling_sibling_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/template-structures/sibling/sibling.module */ "syLg");






















class SiblingComponentStructureModule {
}
SiblingComponentStructureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SiblingComponentStructureModule });
SiblingComponentStructureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SiblingComponentStructureModule_Factory(t) { return new (t || SiblingComponentStructureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_sibling_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["PushModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_12__["VisualizerModule"],
            _shared_debug_helper_cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_13__["CdTriggerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_14__["ValueProvidersModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_16__["RenderingsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
            _experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_17__["ViewVsEmbeddedViewModule"],
            _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"],
            _shared_template_structures_sibling_sibling_module__WEBPACK_IMPORTED_MODULE_19__["SiblingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SiblingComponentStructureModule, { declarations: [_sibling_component_structure_component__WEBPACK_IMPORTED_MODULE_11__["SiblingComponentStructureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["PushModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_12__["VisualizerModule"],
        _shared_debug_helper_cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_13__["CdTriggerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_14__["ValueProvidersModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_16__["RenderingsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
        _experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_17__["ViewVsEmbeddedViewModule"],
        _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"],
        _shared_template_structures_sibling_sibling_module__WEBPACK_IMPORTED_MODULE_19__["SiblingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiblingComponentStructureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _sibling_component_structure_component__WEBPACK_IMPORTED_MODULE_11__["SiblingComponentStructureComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_sibling_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["UnpatchEventsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["PushModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_12__["VisualizerModule"],
                    _shared_debug_helper_cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_13__["CdTriggerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_14__["ValueProvidersModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_16__["RenderingsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__["TemplateModule"],
                    _experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_17__["ViewVsEmbeddedViewModule"],
                    _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"],
                    _shared_template_structures_sibling_sibling_module__WEBPACK_IMPORTED_MODULE_19__["SiblingModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "jf4S":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/debug-helper/cd-trigger/cd-trigger/cd-trigger.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CdTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdTriggerComponent", function() { return CdTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cd-helper */ "1rJa");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _strategy_control_panel_zone_patched_icon_zone_patched_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../strategy-control-panel/zone-patched-icon/zone-patched-icon.component */ "Hvie");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");







class CdTriggerComponent {
    constructor(_cdHelper) {
        this._cdHelper = _cdHelper;
        this.cdHelper = this._cdHelper;
    }
}
CdTriggerComponent.ɵfac = function CdTriggerComponent_Factory(t) { return new (t || CdTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"])); };
CdTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdTriggerComponent, selectors: [["rxa-cd-trigger"]], hostAttrs: [1, "d-flex", "flex-wrap"], inputs: { cdHelper: "cdHelper" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"]])], decls: 14, vars: 3, consts: [["mat-raised-button", "", 3, "click"], [1, "mat-icon"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "mat-icon", 3, "zoneState"]], template: function CdTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdTriggerComponent_Template_button_click_0_listener() { return ctx.cdHelper.appRef_tick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdTriggerComponent_Template_button_click_2_listener() { return ctx.cdHelper.cdRef_markForCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " markForCheck ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-zone-patched-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdTriggerComponent_Template_button_click_5_listener() { return ctx.cdHelper.cdRef_detectChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " detectChanges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rxa-zone-patched-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdTriggerComponent_Template_button_click_8_listener() { return ctx.cdHelper.markDirty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0275markDirty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rxa-zone-patched-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdTriggerComponent_Template_button_click_11_listener() { return ctx.cdHelper.detectChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0275detectChanges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rxa-zone-patched-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", "unpatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", "unpatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", "unpatched");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _strategy_control_panel_zone_patched_icon_zone_patched_icon_component__WEBPACK_IMPORTED_MODULE_3__["ZonePatchedIconComponent"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-cd-trigger',
                template: `
    <button mat-raised-button (click)="cdHelper.appRef_tick()">
      tick
    </button>
    <button mat-raised-button (click)="cdHelper.cdRef_markForCheck()">
      markForCheck <rxa-zone-patched-icon class="mat-icon"></rxa-zone-patched-icon>
    </button>
    <button mat-raised-button [unpatch] (click)="cdHelper.cdRef_detectChanges()">
      detectChanges <rxa-zone-patched-icon class="mat-icon" [zoneState]="'unpatched'"></rxa-zone-patched-icon>
    </button>
    <button mat-raised-button [unpatch] (click)="cdHelper.markDirty()">
      ɵmarkDirty <rxa-zone-patched-icon class="mat-icon" [zoneState]="'unpatched'"></rxa-zone-patched-icon>
    </button>
    <button mat-raised-button [unpatch] (click)="cdHelper.detectChanges()">
      ɵdetectChanges <rxa-zone-patched-icon class="mat-icon" [zoneState]="'unpatched'"></rxa-zone-patched-icon>
    </button>
  `,
                host: {
                    class: 'd-flex flex-wrap'
                },
                providers: [_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"]]
            }]
    }], function () { return [{ type: _utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"] }]; }, { cdHelper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "syLg":
/*!**********************************************************************!*\
  !*** ./src/app/shared/template-structures/sibling/sibling.module.ts ***!
  \**********************************************************************/
/*! exports provided: SiblingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiblingModule", function() { return SiblingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../debug-helper/visualizer */ "cCWh");
/* harmony import */ var _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../debug-helper/value-provider */ "uNb+");
/* harmony import */ var _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../debug-helper/renderings */ "RB8a");
/* harmony import */ var _sibling_async_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sibling-async.component */ "PY8l");
/* harmony import */ var _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.module */ "pcLL");











const DECLARATIONS = [
    _sibling_async_component__WEBPACK_IMPORTED_MODULE_8__["SiblingAsyncComponent"]
];
class SiblingModule {
}
SiblingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SiblingModule });
SiblingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SiblingModule_Factory(t) { return new (t || SiblingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
            _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
            _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_6__["ValueProvidersModule"],
            _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_7__["RenderingsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_9__["ViewVsEmbeddedViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SiblingModule, { declarations: [_sibling_async_component__WEBPACK_IMPORTED_MODULE_8__["SiblingAsyncComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
        _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
        _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_6__["ValueProvidersModule"],
        _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_7__["RenderingsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_9__["ViewVsEmbeddedViewModule"]], exports: [_sibling_async_component__WEBPACK_IMPORTED_MODULE_8__["SiblingAsyncComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiblingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
                    _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
                    _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_6__["ValueProvidersModule"],
                    _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_7__["RenderingsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_9__["ViewVsEmbeddedViewModule"]
                ],
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sibling-component-structure-sibling-component-structure-module.js.map