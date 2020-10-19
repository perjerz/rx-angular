(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheduling-scheduling-module"],{

/***/ "20yI":
/*!*************************************************************************************!*\
  !*** ./src/app/features/fundamentals/scheduling/scheduling/scheduling.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SchedulingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingComponent", function() { return SchedulingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");








class SchedulingComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.prios = _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"];
        this.o$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        this.nextValues = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.value$ = this.nextValues.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(count => ++count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('count:', v)));
    }
    scheduleAllPrios() {
        const sync = () => {
            this.cdRef.detectChanges();
        };
        const micro = () => {
            this.cdRef.detectChanges();
        };
        const setInterval = () => {
            this.cdRef.detectChanges();
        };
        const setTimeout = () => {
            this.cdRef.detectChanges();
        };
        const animationFrame = () => {
            this.cdRef.detectChanges();
        };
        const idleCallback = () => {
            this.cdRef.detectChanges();
        };
        const userBlocking = () => {
            this.cdRef.detectChanges();
        };
        const userVisible = () => {
            this.cdRef.detectChanges();
        };
        const background = () => {
            this.cdRef.detectChanges();
        };
        sync();
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].Promise].subscribe(micro);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].setTimeout].subscribe(setTimeout);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].setInterval].subscribe(setInterval);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].animationFrame].subscribe(animationFrame);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].idleCallback].subscribe(idleCallback);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].background].subscribe(background);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].userVisible].subscribe(userVisible);
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].userBlocking].subscribe(userBlocking);
    }
    scheduleByPrio(priority) {
        const XXXXXXXXXXXXXXXXXXXXX = () => {
            this.cdRef.detectChanges();
            console.log('scheduled over', priority);
        };
        priority
            ? _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"][priority].subscribe(XXXXXXXXXXXXXXXXXXXXX)
            : XXXXXXXXXXXXXXXXXXXXX();
    }
    ngOnInit() {
        this.strategies = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["getStrategies"])({ cdRef: this.cdRef });
        console.log(this.strategies, this.cdRef);
    }
}
SchedulingComponent.ɵfac = function SchedulingComponent_Factory(t) { return new (t || SchedulingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SchedulingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulingComponent, selectors: [["rxa-scheduling"]], decls: 24, vars: 0, consts: [["visualizerHeader", ""], ["mat-raised-button", "", 3, "unpatch", "click"]], template: function SchedulingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scheduling Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_4_listener() { return ctx.scheduleAllPrios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " scheduleAll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_6_listener() { return ctx.scheduleByPrio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Unscheduled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_8_listener() { return ctx.scheduleByPrio(ctx.prios.Promise); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Promise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_10_listener() { return ctx.scheduleByPrio(ctx.prios.setTimeout); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " setTimeout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_12_listener() { return ctx.scheduleByPrio(ctx.prios.setInterval); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " setInterval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_14_listener() { return ctx.scheduleByPrio(ctx.prios.animationFrame); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " animationFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_16_listener() { return ctx.scheduleByPrio(ctx.prios.idleCallback); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " idleCallback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_18_listener() { return ctx.scheduleByPrio(ctx.prios.background); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " background ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_20_listener() { return ctx.scheduleByPrio(ctx.prios.userVisible); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " userVisible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulingComponent_Template_button_click_22_listener() { return ctx.scheduleByPrio(ctx.prios.userBlocking); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " userBlocking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"]], styles: ["button[_ngcontent-%COMP%]:active {\n        background: red;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-scheduling',
                template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h2>Scheduling Options</h2>
        <button mat-raised-button [unpatch] (click)="scheduleAllPrios()">
          scheduleAll
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio()">
          Unscheduled
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.Promise)">
          Promise
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.setTimeout)">
          setTimeout
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.setInterval)">
          setInterval
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.animationFrame)">
          animationFrame
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.idleCallback)">
          idleCallback
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.background)">
          background
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.userVisible)">
          userVisible
        </button>
        <button mat-raised-button [unpatch] (click)="scheduleByPrio(prios.userBlocking)">
          userBlocking
        </button>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [
                    `
      button:active {
        background: red;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "X66y":
/*!***********************************************************************!*\
  !*** ./src/app/features/fundamentals/scheduling/scheduling.module.ts ***!
  \***********************************************************************/
/*! exports provided: SchedulingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingModule", function() { return SchedulingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduling/scheduling.component */ "20yI");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _scheduling_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduling.routes */ "kDss");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/debug-helper/visualizer */ "cCWh");










const DECLARATIONS = [_scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_3__["SchedulingComponent"]];
class SchedulingModule {
}
SchedulingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SchedulingModule });
SchedulingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SchedulingModule_Factory(t) { return new (t || SchedulingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_scheduling_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchedulingModule, { declarations: [_scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_3__["SchedulingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"]], exports: [_scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_3__["SchedulingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_scheduling_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"]
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCWh":
/*!*********************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/index.ts ***!
  \*********************************************************/
/*! exports provided: VisualizerModule, VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.module */ "WoFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerModule", function() { return _visualizer_module__WEBPACK_IMPORTED_MODULE_0__["VisualizerModule"]; });

/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "KD49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"]; });





/***/ }),

/***/ "kDss":
/*!***********************************************************************!*\
  !*** ./src/app/features/fundamentals/scheduling/scheduling.routes.ts ***!
  \***********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduling/scheduling.component */ "20yI");

const ROUTES = [
    {
        path: '',
        component: _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_0__["SchedulingComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=scheduling-scheduling-module.js.map