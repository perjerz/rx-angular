(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zone-patched-apis-zone-patched-apis-module"],{

/***/ "0o+B":
/*!*************************************************************************************!*\
  !*** ./src/app/features/fundamentals/zone-patched-apis/zone-patched-apis.routes.ts ***!
  \*************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _zone_patched_apis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone-patched-apis.component */ "2M2l");

const ROUTES = [
    {
        path: '',
        component: _zone_patched_apis_component__WEBPACK_IMPORTED_MODULE_0__["ZonePatchedApisComponent"]
    }
];


/***/ }),

/***/ "2M2l":
/*!****************************************************************************************!*\
  !*** ./src/app/features/fundamentals/zone-patched-apis/zone-patched-apis.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ZonePatchedApisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonePatchedApisComponent", function() { return ZonePatchedApisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_debug_helper_value_provider_scheduling_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider/scheduling-helper */ "JNVf");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");









class ZonePatchedApisComponent {
    constructor() {
        this.p = _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["SchedulingPriority"];
        this.sh = Object(_shared_debug_helper_value_provider_scheduling_helper__WEBPACK_IMPORTED_MODULE_1__["schedulingHelper"])();
    }
}
ZonePatchedApisComponent.ɵfac = function ZonePatchedApisComponent_Factory(t) { return new (t || ZonePatchedApisComponent)(); };
ZonePatchedApisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZonePatchedApisComponent, selectors: [["rxa-cd-parent13"]], decls: 11, vars: 4, consts: [["visualizerHeader", ""], [3, "changes$"], ["valP", "rxaValueProvider"], ["mat-raised-button", "", 3, "unpatch", "click"]], template: function ZonePatchedApisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " AnimationFrames triggers zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-value-provider", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZonePatchedApisComponent_Template_button_click_7_listener() { ctx.sh.scheduler(ctx.p.animationFrame); return ctx.sh.duration(1000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " AnimationFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZonePatchedApisComponent_Template_button_click_9_listener() { ctx.sh.scheduler(ctx.p.setTimeout); return ctx.sh.tick(100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " setTimeout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx.sh.ticks$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.sh.ticks$), " ");
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__["ValueProviderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_7__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZonePatchedApisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-cd-parent13',
                template: `
    <rxa-visualizer>
      <h2 visualizerHeader>
        AnimationFrames triggers zone
      </h2>
      <rxa-value-provider [changes$]="sh.ticks$" #valP="rxaValueProvider">
      </rxa-value-provider>
      {{sh.ticks$ | push }}
      <button mat-raised-button [unpatch] (click)="sh.scheduler(p.animationFrame); sh.duration(1000)">
        AnimationFrame
      </button>
      <button mat-raised-button [unpatch] (click)="sh.scheduler(p.setTimeout); sh.tick(100)">
        setTimeout
      </button>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();


/***/ }),

/***/ "spCk":
/*!*************************************************************************************!*\
  !*** ./src/app/features/fundamentals/zone-patched-apis/zone-patched-apis.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ZonePatchedApisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonePatchedApisModule", function() { return ZonePatchedApisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _zone_patched_apis_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone-patched-apis.routes */ "0o+B");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _zone_patched_apis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone-patched-apis.component */ "2M2l");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _shared_debug_helper_cd_default_cd_default_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/debug-helper/cd-default/cd-default.module */ "252M");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/debug-helper/value-provider */ "uNb+");













class ZonePatchedApisModule {
}
ZonePatchedApisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ZonePatchedApisModule });
ZonePatchedApisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ZonePatchedApisModule_Factory(t) { return new (t || ZonePatchedApisModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_zone_patched_apis_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
            _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
            _shared_debug_helper_cd_default_cd_default_module__WEBPACK_IMPORTED_MODULE_9__["CdDefaultModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ZonePatchedApisModule, { declarations: [_zone_patched_apis_component__WEBPACK_IMPORTED_MODULE_6__["ZonePatchedApisComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
        _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
        _shared_debug_helper_cd_default_cd_default_module__WEBPACK_IMPORTED_MODULE_9__["CdDefaultModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZonePatchedApisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _zone_patched_apis_component__WEBPACK_IMPORTED_MODULE_6__["ZonePatchedApisComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_zone_patched_apis_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
                    _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
                    _shared_debug_helper_cd_default_cd_default_module__WEBPACK_IMPORTED_MODULE_9__["CdDefaultModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=zone-patched-apis-zone-patched-apis-module.js.map