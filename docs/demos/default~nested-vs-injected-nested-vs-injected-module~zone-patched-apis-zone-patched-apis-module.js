(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nested-vs-injected-nested-vs-injected-module~zone-patched-apis-zone-patched-apis-module"],{

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

/***/ "252M":
/*!*********************************************************************!*\
  !*** ./src/app/shared/debug-helper/cd-default/cd-default.module.ts ***!
  \*********************************************************************/
/*! exports provided: CdDefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdDefaultModule", function() { return CdDefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _cd_default_cd_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cd-default/cd-default.component */ "j+lb");
/* harmony import */ var _visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cd-trigger/cd-trigger.module */ "9btV");






class CdDefaultModule {
}
CdDefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdDefaultModule });
CdDefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdDefaultModule_Factory(t) { return new (t || CdDefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_3__["VisualizerModule"],
            _cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_4__["CdTriggerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdDefaultModule, { declarations: [_cd_default_cd_default_component__WEBPACK_IMPORTED_MODULE_2__["CdDefaultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_3__["VisualizerModule"],
        _cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_4__["CdTriggerModule"]], exports: [_cd_default_cd_default_component__WEBPACK_IMPORTED_MODULE_2__["CdDefaultComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdDefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cd_default_cd_default_component__WEBPACK_IMPORTED_MODULE_2__["CdDefaultComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_3__["VisualizerModule"],
                    _cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_4__["CdTriggerModule"]
                ],
                exports: [_cd_default_cd_default_component__WEBPACK_IMPORTED_MODULE_2__["CdDefaultComponent"]]
            }]
    }], null, null); })();


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

/***/ "j+lb":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/debug-helper/cd-default/cd-default/cd-default.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CdDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdDefaultComponent", function() { return CdDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cd-helper */ "1rJa");
/* harmony import */ var _visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _cd_trigger_cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cd-trigger/cd-trigger/cd-trigger.component */ "jf4S");






const _c0 = [[["", "cdDefaultHeader", ""]], "*"];
const _c1 = ["[cdDefaultHeader]", "*"];
class CdDefaultComponent {
    constructor(cdHelper) {
        this.cdHelper = cdHelper;
    }
}
CdDefaultComponent.ɵfac = function CdDefaultComponent_Factory(t) { return new (t || CdDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"])); };
CdDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdDefaultComponent, selectors: [["rxa-cd-default"]], hostAttrs: [1, "d-block", "w-100"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"]])], ngContentSelectors: _c1, decls: 7, vars: 1, consts: [["visualizerHeader", ""], [3, "cdHelper"]], template: function CdDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-cd-trigger", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdHelper", ctx.cdHelper);
    } }, directives: [_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _cd_trigger_cd_trigger_cd_trigger_component__WEBPACK_IMPORTED_MODULE_3__["CdTriggerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-cd-default',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h3>Default</h3>
        <rxa-cd-trigger [cdHelper]="cdHelper"></rxa-cd-trigger>
        <ng-content select="[cdDefaultHeader]"></ng-content>
      </ng-container>
      <ng-content></ng-content>
    </rxa-visualizer>`,
                host: {
                    class: 'd-block w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                providers: [_utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"]]
            }]
    }], function () { return [{ type: _utils_cd_helper__WEBPACK_IMPORTED_MODULE_1__["CdHelper"] }]; }, null); })();


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


/***/ })

}]);
//# sourceMappingURL=default~nested-vs-injected-nested-vs-injected-module~zone-patched-apis-zone-patched-apis-module.js.map