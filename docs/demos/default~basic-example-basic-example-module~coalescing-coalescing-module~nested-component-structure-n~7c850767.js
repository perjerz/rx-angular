(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767"],{

/***/ "+5kn":
/*!******************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value-providers.module.ts ***!
  \******************************************************************************/
/*! exports provided: ValueProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueProvidersModule", function() { return ValueProvidersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value-provider/value-provider.component */ "llid");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array-provider/array-provider.component */ "IyUv");
/* harmony import */ var _strategy_control_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../strategy-control-panel */ "kUfC");








class ValueProvidersModule {
}
ValueProvidersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValueProvidersModule });
ValueProvidersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValueProvidersModule_Factory(t) { return new (t || ValueProvidersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _strategy_control_panel__WEBPACK_IMPORTED_MODULE_6__["ZonePatchedIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValueProvidersModule, { declarations: [_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__["ValueProviderComponent"], _array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_5__["ArrayProviderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _strategy_control_panel__WEBPACK_IMPORTED_MODULE_6__["ZonePatchedIconModule"]], exports: [_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__["ValueProviderComponent"], _array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_5__["ArrayProviderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueProvidersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__["ValueProviderComponent"], _array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_5__["ArrayProviderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _strategy_control_panel__WEBPACK_IMPORTED_MODULE_6__["ZonePatchedIconModule"]
                ],
                exports: [_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__["ValueProviderComponent"], _array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_5__["ArrayProviderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "4EG1":
/*!************************************************!*\
  !*** ./src/app/shared/utils/ngInputFlatten.ts ***!
  \************************************************/
/*! exports provided: ngInputFlatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngInputFlatten", function() { return ngInputFlatten; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");


function ngInputFlatten() {
    return o$ => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(o => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(o) ? o : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(o)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
}


/***/ }),

/***/ "IyUv":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/array-provider/array-provider.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ArrayProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProviderComponent", function() { return ArrayProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _array_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array-provider.service */ "uHkN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");






function ArrayProviderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Observable Context");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.error(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mutable Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addItemsMutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.moveItemsMutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Move ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateItemsMutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeItemsMutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Immutable Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addItemsImmutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.moveItemsImmutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Move ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.updateItemsImmutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayProviderComponent_ng_container_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.removeItemsImmutable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
} }
const _c0 = ["*"];
class ArrayProviderComponent extends _array_provider_service__WEBPACK_IMPORTED_MODULE_1__["ArrayProviderService"] {
    constructor(cdRef) {
        super(cdRef);
        this.cdRef = cdRef;
        this.buttons = false;
        this.unpatched = undefined;
        this.min = 0;
        this.max = 10;
    }
}
ArrayProviderComponent.ɵfac = function ArrayProviderComponent_Factory(t) { return new (t || ArrayProviderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ArrayProviderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArrayProviderComponent, selectors: [["rxa-array-provider"]], inputs: { buttons: "buttons", unpatched: "unpatched", min: "min", max: "max" }, exportAs: ["rxaArrayProvider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [1, "row"], [1, "col-sm-12"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "col-sm-6"]], template: function ArrayProviderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArrayProviderComponent_ng_container_0_Template, 33, 11, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayProviderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-array-provider',
                exportAs: 'rxaArrayProvider',
                template: `
    <ng-container *ngIf="buttons">
      <div class="row">
        <div class="col-sm-12">
          <p>Observable Context</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="reset()">
            Reset
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="error()">
            Error
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="complete()">
            Complete
          </button>
        </div>
        <div class="col-sm-6">
          <p>Mutable Operations</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="addItemsMutable()">
            Add
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="moveItemsMutable()">
            Move
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="updateItemsMutable()">
            Update
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="removeItemsMutable()">
            Remove
          </button>

        </div>
        <div class="col-sm-6">
          <p>Immutable Operations</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="addItemsImmutable()">
            Add
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="moveItemsImmutable()">
            Move
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="updateItemsImmutable()">
            Update
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="removeItemsImmutable()">
            Remove
          </button>
        </div>
      </div>
    </ng-container>
    <ng-content></ng-content>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unpatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jZTU":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/primitives-provider.service.ts ***!
  \***********************************************************************************/
/*! exports provided: PrimitivesProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitivesProviderService", function() { return PrimitivesProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils_ngInputFlatten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ngInputFlatten */ "4EG1");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "Twlx");








class PrimitivesProviderService {
    constructor(state, cdRef) {
        this.state = state;
        this.cdRef = cdRef;
        this.outerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.error$ = this.errorSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_) => {
            throw new Error('ERROR');
        }));
        this.completeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.truthy = 0.5;
        this.min = 0;
        this.max = 10;
        this.resetAll = () => {
            this.resetObservables();
            this.updateStatic(undefined);
            this.cdRef.markForCheck();
        };
        this.resetObservables = () => {
            this.state.ngOnDestroy();
            this.state = new _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"]();
            this.state.connect('random', Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.nextSubject, this.outerChanges.pipe(Object(_utils_ngInputFlatten__WEBPACK_IMPORTED_MODULE_4__["ngInputFlatten"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils__WEBPACK_IMPORTED_MODULE_5__["toRandom"])));
            this.float$ = this.state.select('random');
            this.int$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toInt"])(s.random, this.min, this.max)), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["withCompleteAndError"])(this.error$, this.completeSubject));
            this.incremental$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((inc) => ++inc, 0), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["withCompleteAndError"])(this.error$, this.completeSubject));
            this.boolean$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toBoolean"])(s.random, this.truthy)), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["withCompleteAndError"])(this.error$, this.completeSubject));
            this.imgUrl$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toImgUrl"])(s.random)), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["withCompleteAndError"])(this.error$, this.completeSubject));
            this.state.hold(this.float$, this.updateStatic);
            this.state.hold(this.resetSubject, this.resetAll);
        };
        this.updateStatic = (float) => {
            this.float = float;
            this.int = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toInt"])(float, this.min, this.max);
            this.boolean = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toBoolean"])(float, this.truthy);
        };
        this.resetAll();
    }
    set changes$(o$) {
        this.outerChanges.next(o$);
    }
    next() {
        this.nextSubject.next();
    }
    error() {
        this.errorSubject.next();
    }
    complete() {
        this.completeSubject.next();
    }
    reset() {
        this.resetSubject.next();
    }
}
PrimitivesProviderService.ɵfac = function PrimitivesProviderService_Factory(t) { return new (t || PrimitivesProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PrimitivesProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrimitivesProviderService, factory: PrimitivesProviderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimitivesProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "llid":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value-provider/value-provider.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ValueProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueProviderComponent", function() { return ValueProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _primitives_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../primitives-provider.service */ "jZTU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _strategy_control_panel_zone_patched_icon_zone_patched_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../strategy-control-panel/zone-patched-icon/zone-patched-icon.component */ "Hvie");










function ValueProviderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValueProviderComponent_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset (patched)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValueProviderComponent_ng_container_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-zone-patched-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValueProviderComponent_ng_container_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.error(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rxa-zone-patched-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValueProviderComponent_ng_container_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rxa-zone-patched-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", (ctx_r0.unpatched == null ? null : ctx_r0.unpatched.length) === 0 ? "patched" : "unpatched");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", (ctx_r0.unpatched == null ? null : ctx_r0.unpatched.length) === 0 ? "patched" : "unpatched");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatch", ctx_r0.unpatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoneState", (ctx_r0.unpatched == null ? null : ctx_r0.unpatched.length) === 0 ? "patched" : "unpatched");
} }
const _c0 = ["*"];
class ValueProviderComponent extends _primitives_provider_service__WEBPACK_IMPORTED_MODULE_3__["PrimitivesProviderService"] {
    constructor(state, cdRef) {
        super(state, cdRef);
        this.state = state;
        this.cdRef = cdRef;
        this.buttons = false;
        this.truthy = 0.5;
        this.min = 0;
        this.max = 10;
        this.resetState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    set changes$(o$) {
        this.outerChanges.next(o$);
    }
    reset() {
        super.reset();
        this.resetState.next();
    }
}
ValueProviderComponent.ɵfac = function ValueProviderComponent_Factory(t) { return new (t || ValueProviderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ValueProviderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueProviderComponent, selectors: [["rxa-value-provider"]], inputs: { unpatched: "unpatched", buttons: "buttons", truthy: "truthy", min: "min", max: "max", changes$: "changes$" }, outputs: { resetState: "resetState" }, exportAs: ["rxaValueProvider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "mat-icon", 3, "zoneState"]], template: function ValueProviderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValueProviderComponent_ng_container_0_Template, 12, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"], _strategy_control_panel_zone_patched_icon_zone_patched_icon_component__WEBPACK_IMPORTED_MODULE_7__["ZonePatchedIconComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueProviderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-value-provider',
                exportAs: 'rxaValueProvider',
                template: `
    <ng-container *ngIf="buttons">
      <button mat-raised-button (click)="reset()">Reset (patched)</button>
      <button mat-raised-button [unpatch]="unpatched" (click)="next()">
        Next  <rxa-zone-patched-icon class="mat-icon" [zoneState]="unpatched?.length === 0 ? 'patched' : 'unpatched'"></rxa-zone-patched-icon>
      </button>
      <button mat-raised-button [unpatch]="unpatched" (click)="error()">
        Error  <rxa-zone-patched-icon class="mat-icon" [zoneState]="unpatched?.length === 0 ? 'patched' : 'unpatched'"></rxa-zone-patched-icon>
      </button>
      <button mat-raised-button [unpatch]="unpatched" (click)="complete()">
        Complete  <rxa-zone-patched-icon class="mat-icon" [zoneState]="unpatched?.length === 0 ? 'patched' : 'unpatched'"></rxa-zone-patched-icon>
      </button>
    </ng-container>
    <ng-content></ng-content>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { unpatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], truthy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changes$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resetState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uHkN":
/*!******************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/array-provider.service.ts ***!
  \******************************************************************************/
/*! exports provided: ArrayProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProviderService", function() { return ArrayProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "Twlx");






class ArrayProviderService extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(cdRef) {
        super();
        this.cdRef = cdRef;
        this.errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.error$ = this.errorSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_) => {
            throw new Error('ERROR');
        }));
        this.completeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addItemsImmutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.moveItemsImmutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateItemsImmutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.removeItemsImmutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addItemsMutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.moveItemsMutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateItemsMutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.removeItemsMutableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resetAll = () => {
            this.resetObservables();
            this.cdRef.markForCheck();
        };
        this.resetObservables = () => {
            this.array$ = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => s.array), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withCompleteAndError"])(this.error$, this.completeSubject));
        };
        this.connect('array', this.addItemsImmutableSubject, (state, numItems = 1) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["addItemImmutable"])(state.array, numItems));
        this.connect('array', this.updateItemsImmutableSubject, (state, itemIds) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateItemImmutable"])(state.array, itemIds));
        this.connect('array', this.moveItemsImmutableSubject, (state, positions) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["moveItemImmutable"])(state.array, positions));
        this.connect('array', this.removeItemsImmutableSubject, (state, ids) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["removeItemsImmutable"])(state.array, ids));
        this.connect('array', this.addItemsMutableSubject, (state, numItems = 1) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["addItemMutable"])(state.array, numItems));
        this.connect('array', this.updateItemsMutableSubject, (state, itemIds) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateItemMutable"])(state.array, itemIds));
        this.connect('array', this.moveItemsMutableSubject, (state, positions) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["moveItemMutable"])(state.array, positions));
        this.connect('array', this.removeItemsMutableSubject, (state, ids) => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["removeItemsMutable"])(state.array, ids));
        this.resetAll();
    }
    addItemsImmutable(numItems) {
        this.addItemsImmutableSubject.next(numItems);
    }
    moveItemsImmutable(positions) {
        this.moveItemsImmutableSubject.next(positions);
    }
    updateItemsImmutable(itemsIds) {
        this.updateItemsImmutableSubject.next(itemsIds);
    }
    removeItemsImmutable(itemsIds) {
        this.removeItemsImmutableSubject.next(itemsIds);
    }
    addItemsMutable(numItems) {
        this.addItemsMutableSubject.next(numItems);
    }
    moveItemsMutable(positions) {
        this.moveItemsMutableSubject.next(positions);
    }
    updateItemsMutable(itemsIds) {
        this.updateItemsMutableSubject.next(itemsIds);
    }
    removeItemsMutable(itemsIds) {
        this.removeItemsMutableSubject.next(itemsIds);
    }
    error() {
        this.errorSubject.next();
    }
    complete() {
        this.completeSubject.next();
    }
    reset() {
        this.resetSubject.next();
    }
}
ArrayProviderService.ɵfac = function ArrayProviderService_Factory(t) { return new (t || ArrayProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ArrayProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArrayProviderService, factory: ArrayProviderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "uNb+":
/*!*************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/index.ts ***!
  \*************************************************************/
/*! exports provided: compareIdFn, withCompleteAndError, toTick, toInt, toRandom, toBoolean, toImgUrl, toRandomItems, toNewItems, getRandomItems, getItems, updateItemMutable, updateItemImmutable, addItemMutable, addItemImmutable, moveItemMutable, moveItemImmutable, removeItemsMutable, removeItemsImmutable, GliphyApi, placeholderImg, PrimitivesProviderService, ArrayProviderService, ValueProviderComponent, ValueProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "Twlx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareIdFn", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["compareIdFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCompleteAndError", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["withCompleteAndError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTick", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRandom", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toRandom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toImgUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toImgUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRandomItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toRandomItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNewItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toNewItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateItemMutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["updateItemMutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateItemImmutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["updateItemImmutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItemMutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["addItemMutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItemImmutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["addItemImmutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveItemMutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["moveItemMutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveItemImmutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["moveItemImmutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItemsMutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["removeItemsMutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItemsImmutable", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["removeItemsImmutable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GliphyApi", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["GliphyApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placeholderImg", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["placeholderImg"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "yXdT");
/* empty/unused harmony star reexport *//* harmony import */ var _primitives_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitives-provider.service */ "jZTU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimitivesProviderService", function() { return _primitives_provider_service__WEBPACK_IMPORTED_MODULE_2__["PrimitivesProviderService"]; });

/* harmony import */ var _array_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-provider.service */ "uHkN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProviderService", function() { return _array_provider_service__WEBPACK_IMPORTED_MODULE_3__["ArrayProviderService"]; });

/* harmony import */ var _value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-provider/value-provider.component */ "llid");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueProviderComponent", function() { return _value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__["ValueProviderComponent"]; });

/* harmony import */ var _value_providers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value-providers.module */ "+5kn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueProvidersModule", function() { return _value_providers_module__WEBPACK_IMPORTED_MODULE_5__["ValueProvidersModule"]; });









/***/ }),

/***/ "yXdT":
/*!*************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/model.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=default~basic-example-basic-example-module~coalescing-coalescing-module~nested-component-structure-n~7c850767.js.map