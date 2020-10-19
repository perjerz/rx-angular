(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nested-component-structure-nested-component-structure-module"],{

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

/***/ "2lzS":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/performance/nested-component-structure/nested-component-structure.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: NestedComponentStructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedComponentStructureModule", function() { return NestedComponentStructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _nested_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nested-component-structure.routes */ "6Iuw");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _nested_component_structure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nested-component-structure.component */ "cPCJ");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _shared_debug_helper_cd_trigger_cd_trigger_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/debug-helper/cd-trigger/cd-trigger.module */ "9btV");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/debug-helper/renderings */ "RB8a");
/* harmony import */ var _experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.module */ "pcLL");
/* harmony import */ var _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive.module */ "g+Pc");





















class NestedComponentStructureModule {
}
NestedComponentStructureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NestedComponentStructureModule });
NestedComponentStructureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NestedComponentStructureModule_Factory(t) { return new (t || NestedComponentStructureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_nested_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
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
            _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NestedComponentStructureModule, { declarations: [_nested_component_structure_component__WEBPACK_IMPORTED_MODULE_11__["NestedComponentStructureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
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
        _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NestedComponentStructureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _nested_component_structure_component__WEBPACK_IMPORTED_MODULE_11__["NestedComponentStructureComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_nested_component_structure_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
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
                    _shared_template_structures_recursive_recursive_module__WEBPACK_IMPORTED_MODULE_18__["RecursiveModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "6Iuw":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/performance/nested-component-structure/nested-component-structure.routes.ts ***!
  \******************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _nested_component_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nested-component-structure.component */ "cPCJ");

const ROUTES = [
    {
        path: '',
        component: _nested_component_structure_component__WEBPACK_IMPORTED_MODULE_0__["NestedComponentStructureComponent"]
    }
];


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

/***/ "cPCJ":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/performance/nested-component-structure/nested-component-structure.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NestedComponentStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedComponentStructureComponent", function() { return NestedComponentStructureComponent; });
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
/* harmony import */ var _shared_template_structures_recursive_recursive_async_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-async.component */ "9Nz7");
/* harmony import */ var _shared_template_structures_recursive_recursive_push_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-push.component */ "2uA3");
/* harmony import */ var _shared_template_structures_recursive_recursive_component_let_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-component-let.component */ "3J8n");
/* harmony import */ var _shared_template_structures_recursive_recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/template-structures/recursive/recursive-embedded-view-let.component */ "eaH9");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");




















function NestedComponentStructureComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r8.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-static", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.min)("max", ctx_r2.max)("changes$", ctx_r2.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r2.depth)("value", _r8.int);
} }
function NestedComponentStructureComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Observable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 14, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r11.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-observable", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r3.min)("max", ctx_r3.max)("changes$", ctx_r3.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r3.depth)("value$", _r11.int$);
} }
function NestedComponentStructureComponent_div_37_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r14.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-async", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx_r4.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r4.depth)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, _r14.int$));
} }
function NestedComponentStructureComponent_div_37_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 22, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r17.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rxa-recursive-push", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx_r5.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r5.depth)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, _r17.int$));
} }
function NestedComponentStructureComponent_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Component CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-value-provider", 22, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r20.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rxa-recursive-component-let", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx_r6.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r6.depth)("value", _r20.int$);
} }
function NestedComponentStructureComponent_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EmbeddedView CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-value-provider", 22, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_div_37_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r23.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rxa-recursive-embedded-view-let", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx_r7.btnBothClick$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r7.depth)("value", _r23.int$);
} }
function NestedComponentStructureComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NestedComponentStructureComponent_div_37_div_1_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NestedComponentStructureComponent_div_37_div_2_Template, 10, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NestedComponentStructureComponent_div_37_div_3_Template, 11, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NestedComponentStructureComponent_div_37_div_4_Template, 11, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NestedComponentStructureComponent_div_37_div_5_Template, 12, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NestedComponentStructureComponent_div_37_div_6_Template, 12, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.static));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.observable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.async));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.push));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.clet));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible(_r0, ctx_r1.displayStates.evlet));
} }
class NestedComponentStructureComponent {
    constructor() {
        this.min = 0;
        this.max = 5;
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
NestedComponentStructureComponent.ɵfac = function NestedComponentStructureComponent_Factory(t) { return new (t || NestedComponentStructureComponent)(); };
NestedComponentStructureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NestedComponentStructureComponent, selectors: [["rxa-nested-component-structure"]], decls: 38, vars: 12, consts: [["visualizerHeader", ""], [1, "mat-headline"], [1, "row"], [1, "col-sm-12", "col-md-12"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["name", "visibleExamples", "aria-label", "Visible Examples", 3, "value"], ["group", "matButtonToggleGroup"], [3, "value"], ["mat-raised-button", "", 1, "ml-2", 3, "click"], ["class", "row w-100", 4, "ngIf"], [1, "row", "w-100"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "mat-subheader"], [3, "min", "max", "changes$"], ["staticVal", "rxaValueProvider"], [1, "mb-1"], ["mat-mini-fab", "", 3, "click"], [3, "depth", "value"], ["observableVal", "rxaValueProvider"], ["mat-mini-fab", "", 3, "unpatch", "click"], [3, "depth", "value$"], [3, "changes$"], ["asyncVal", "rxaValueProvider"], ["pushVal", "rxaValueProvider"], ["letVal", "rxaValueProvider"]], template: function NestedComponentStructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nested Component Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nesting Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NestedComponentStructureComponent_Template_input_ngModelChange_9_listener($event) { return ctx.depth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Min Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NestedComponentStructureComponent_Template_input_ngModelChange_13_listener($event) { return ctx.min = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Max Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NestedComponentStructureComponent_Template_input_ngModelChange_17_listener($event) { return ctx.max = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C Let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ev Let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedComponentStructureComponent_Template_button_click_35_listener() { return ctx.isVisible = !ctx.isVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Toggle visibility to reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NestedComponentStructureComponent_div_37_Template, 7, 6, "div", 9);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.async);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.push);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.clet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.evlet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_9__["ValueProviderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_template_structures_recursive_recursive_static_component__WEBPACK_IMPORTED_MODULE_11__["RecursiveStaticComponent"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_12__["UnpatchEventsDirective"], _shared_template_structures_recursive_recursive_observable_component__WEBPACK_IMPORTED_MODULE_13__["RecursiveObservableComponent"], _shared_template_structures_recursive_recursive_async_component__WEBPACK_IMPORTED_MODULE_14__["RecursiveAsyncComponent"], _shared_template_structures_recursive_recursive_push_component__WEBPACK_IMPORTED_MODULE_15__["RecursivePushComponent"], _shared_template_structures_recursive_recursive_component_let_component__WEBPACK_IMPORTED_MODULE_16__["RecursiveComponentLetComponent"], _shared_template_structures_recursive_recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_17__["RecursiveEmbeddedViewLetComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_18__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NestedComponentStructureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-nested-component-structure',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h1 class="mat-headline">Nested Component Structure</h1>
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
                <mat-button-toggle [value]="displayStates.async">Async</mat-button-toggle>
                <mat-button-toggle [value]="displayStates.push">Push</mat-button-toggle>
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
        <div class="col"
             *ngIf="visible(group, displayStates.async)">
          <h2 class="mat-subheader">Async</h2>
          <rxa-value-provider [changes$]="btnBothClick$" #asyncVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab (click)="asyncVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-async [depth]="depth" [value]="asyncVal.int$ | async">
          </rxa-recursive-async>
        </div>
        <div class="col"
             *ngIf="visible(group, displayStates.push)">
          <h2 class="mat-subheader">Push</h2>
          <rxa-value-provider [changes$]="btnBothClick$" #pushVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab [unpatch] (click)="pushVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-push [depth]="depth" [value]="pushVal.int$ | push">
          </rxa-recursive-push>
        </div>
        <div class="col"
             *ngIf="visible(group, displayStates.clet)">
          <h2 class="mat-subheader">Let - <small>Component CD</small></h2>
          <rxa-value-provider [changes$]="btnBothClick$" #letVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab [unpatch] (click)="letVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-component-let [depth]="depth" [value]="letVal.int$">
          </rxa-recursive-component-let>
        </div>
        <div class="col"
             *ngIf="visible(group, displayStates.evlet)">
          <h2 class="mat-subheader">Let - <small>EmbeddedView CD</small></h2>
          <rxa-value-provider [changes$]="btnBothClick$" #letVal="rxaValueProvider"></rxa-value-provider>
          <div class="mb-1">
            <button mat-mini-fab [unpatch] (click)="letVal.next()">
              <mat-icon>add</mat-icon>
            </button>
          </div>
          <rxa-recursive-embedded-view-let [depth]="depth" [value]="letVal.int$">
          </rxa-recursive-embedded-view-let>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
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


/***/ })

}]);
//# sourceMappingURL=nested-component-structure-nested-component-structure-module.js.map