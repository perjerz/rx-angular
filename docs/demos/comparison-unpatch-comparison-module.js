(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comparison-unpatch-comparison-module"],{

/***/ "/YV5":
/*!**************************************************************************************!*\
  !*** ./src/app/features/template/unpatch/comparison/comparison-unpatch.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComparisonUnpatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonUnpatchComponent", function() { return ComparisonUnpatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runOutsideZone.directive */ "JKfH");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");






class ComparisonUnpatchComponent {
    nativeAngular() {
        console.log('nativeAngular');
    }
    runOutSideAngular() {
        console.log('runOutSideAngular');
    }
    unpatch() {
        console.log('unpatch');
    }
}
ComparisonUnpatchComponent.ɵfac = function ComparisonUnpatchComponent_Factory(t) { return new (t || ComparisonUnpatchComponent)(); };
ComparisonUnpatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComparisonUnpatchComponent, selectors: [["rxa-demo-basics"]], decls: 10, vars: 0, consts: [["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "runOutsideZone", "click"], ["mat-raised-button", "", 3, "unpatch", "click"]], template: function ComparisonUnpatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-dirty-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " --- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComparisonUnpatchComponent_Template_button_click_2_listener() { return ctx.nativeAngular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Native Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComparisonUnpatchComponent_Template_button_click_5_listener() { return ctx.runOutSideAngular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Zone Run Outside Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComparisonUnpatchComponent_Template_button_click_8_listener() { return ctx.unpatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rx-Angular Unpatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_3__["RunOutsideZoneDirective"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComparisonUnpatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-demo-basics',
                template: `
    <rxa-dirty-check></rxa-dirty-check>

    ---

    <button mat-raised-button (click)="nativeAngular()">Native Angular</button>
    <br/>
    <button mat-raised-button [runOutsideZone] (click)="runOutSideAngular()">
      Zone Run Outside Angular
    </button>
    <br/>
    <button mat-raised-button [unpatch] (click)="unpatch()">Rx-Angular Unpatch</button>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "CVdL":
/*!***********************************************************************************!*\
  !*** ./src/app/features/template/unpatch/comparison/unpatch-comparison.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UnpatchComparisonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchComparisonModule", function() { return UnpatchComparisonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comparison-unpatch.component */ "/YV5");
/* harmony import */ var _comparison_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comparison.routes */ "UEIh");
/* harmony import */ var _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runOutsideZone.directive */ "JKfH");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");











const DECLARATIONS = [_comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonUnpatchComponent"], _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_6__["RunOutsideZoneDirective"]];
class UnpatchComparisonModule {
}
UnpatchComparisonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpatchComparisonModule });
UnpatchComparisonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpatchComparisonModule_Factory(t) { return new (t || UnpatchComparisonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_comparison_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpatchComparisonModule, { declarations: [_comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonUnpatchComponent"], _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_6__["RunOutsideZoneDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"]], exports: [_comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_4__["ComparisonUnpatchComponent"], _runOutsideZone_directive__WEBPACK_IMPORTED_MODULE_6__["RunOutsideZoneDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchComparisonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_comparison_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"]
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "JKfH":
/*!**********************************************************************************!*\
  !*** ./src/app/features/template/unpatch/comparison/runOutsideZone.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: RunOutsideZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunOutsideZoneDirective", function() { return RunOutsideZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");





// tslint:disable-next-line:directive-selector
class RunOutsideZoneDirective {
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](['click']);
    }
    set events(value) {
        if (value && value.length > 0) {
            this.events$.next(value);
        }
        else {
            this.events$.next(['click']);
        }
    }
    reapplyEventListenersZoneUnPatched(events) {
        events.forEach(ev => {
            this.unpatchEventListener(this.el.nativeElement, ev);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.subscription = this.events$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(eventList => this.reapplyEventListenersZoneUnPatched(eventList)))
            .subscribe();
    }
    unpatchEventListener(elem, event) {
        const eventListeners = elem.eventListeners(event);
        // Return if no event listeners are present
        if (!eventListeners) {
            return;
        }
        const addEventListener = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["getZoneUnPatchedApi"])('addEventListener', elem).bind(elem);
        eventListeners.forEach(listener => {
            // Remove and reapply listeners with patched API
            elem.removeEventListener(event, listener);
            // Reapply listeners with un-patched API
            this.ngZone.runOutsideAngular(() => {
                elem.addEventListener(event, listener);
            });
        });
    }
}
RunOutsideZoneDirective.ɵfac = function RunOutsideZoneDirective_Factory(t) { return new (t || RunOutsideZoneDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
RunOutsideZoneDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RunOutsideZoneDirective, selectors: [["", "runOutsideZone", ""]], inputs: { events: ["runOutsideZone", "events"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RunOutsideZoneDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[runOutsideZone]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['runOutsideZone']
        }] }); })();


/***/ }),

/***/ "UEIh":
/*!***************************************************************************!*\
  !*** ./src/app/features/template/unpatch/comparison/comparison.routes.ts ***!
  \***************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparison-unpatch.component */ "/YV5");

const ROUTES = [
    {
        path: '',
        component: _comparison_unpatch_component__WEBPACK_IMPORTED_MODULE_0__["ComparisonUnpatchComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=comparison-unpatch-comparison-module.js.map