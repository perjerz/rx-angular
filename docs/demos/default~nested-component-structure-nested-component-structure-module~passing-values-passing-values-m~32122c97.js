(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97"],{

/***/ "Lp5t":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/poc1-let.directive.ts ***!
  \********************************************************************************************************/
/*! exports provided: Poc1LetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc1LetDirective", function() { return Poc1LetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc1LetDirective {
    constructor(cdRef, nextTemplateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.viewContext = { $implicit: undefined };
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    set poc1Let(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.embeddedView = this.viewContainerRef.createEmbeddedView(this.nextTemplateRef, this.viewContext);
        this.subscription = this.values$
            .subscribe(v => {
            this.viewContext.$implicit = v;
            this.embeddedView.detectChanges();
        });
    }
    ngOnDestroy() {
        this.embeddedView.destroy();
        this.subscription.unsubscribe();
    }
}
Poc1LetDirective.ɵfac = function Poc1LetDirective_Factory(t) { return new (t || Poc1LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc1LetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc1LetDirective, selectors: [["", "poc1Let", ""]], inputs: { poc1Let: "poc1Let" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc1LetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc1Let]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc1Let: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PRh6":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/original-let.directive.ts ***!
  \************************************************************************************************************/
/*! exports provided: OriginalLetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginalLetDirective", function() { return OriginalLetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class OriginalLetDirective {
    constructor(cdRef, nextTemplateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.viewContext = { $implicit: undefined };
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    set oLet(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.embeddedView = this.viewContainerRef.createEmbeddedView(this.nextTemplateRef, this.viewContext);
        this.subscription = this.values$
            .subscribe(v => {
            this.viewContext.$implicit = v;
            this.cdRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.embeddedView.destroy();
        this.subscription.unsubscribe();
    }
}
OriginalLetDirective.ɵfac = function OriginalLetDirective_Factory(t) { return new (t || OriginalLetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
OriginalLetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OriginalLetDirective, selectors: [["", "oLet", ""]], inputs: { oLet: "oLet" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OriginalLetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[oLet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { oLet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pcLL":
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ViewVsEmbeddedViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVsEmbeddedViewModule", function() { return ViewVsEmbeddedViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _original_let_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./original-let.directive */ "PRh6");
/* harmony import */ var _poc1_let_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poc1-let.directive */ "Lp5t");
/* harmony import */ var _view_vs_embedded_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-vs-embedded-view.component */ "xxTh");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");









class ViewVsEmbeddedViewModule {
}
ViewVsEmbeddedViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewVsEmbeddedViewModule });
ViewVsEmbeddedViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewVsEmbeddedViewModule_Factory(t) { return new (t || ViewVsEmbeddedViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewVsEmbeddedViewModule, { declarations: [_original_let_directive__WEBPACK_IMPORTED_MODULE_2__["OriginalLetDirective"],
        _poc1_let_directive__WEBPACK_IMPORTED_MODULE_3__["Poc1LetDirective"],
        _view_vs_embedded_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewVsEmbeddedViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]], exports: [_poc1_let_directive__WEBPACK_IMPORTED_MODULE_3__["Poc1LetDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVsEmbeddedViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _original_let_directive__WEBPACK_IMPORTED_MODULE_2__["OriginalLetDirective"],
                    _poc1_let_directive__WEBPACK_IMPORTED_MODULE_3__["Poc1LetDirective"],
                    _view_vs_embedded_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewVsEmbeddedViewComponent"]
                ],
                exports: [
                    _poc1_let_directive__WEBPACK_IMPORTED_MODULE_3__["Poc1LetDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xxTh":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ViewVsEmbeddedViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVsEmbeddedViewComponent", function() { return ViewVsEmbeddedViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _original_let_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./original-let.directive */ "PRh6");
/* harmony import */ var _poc1_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./poc1-let.directive */ "Lp5t");










function ViewVsEmbeddedViewComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r2, " ");
} }
function ViewVsEmbeddedViewComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewType", "embedded-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r3, " ");
} }
class ViewVsEmbeddedViewComponent {
    constructor() {
        this.btn1Click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.btn2Click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.value1$ = this.btn1Click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(a => ++a, 0));
        this.value2$ = this.btn2Click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(a => ++a, 0));
    }
}
ViewVsEmbeddedViewComponent.ɵfac = function ViewVsEmbeddedViewComponent_Factory(t) { return new (t || ViewVsEmbeddedViewComponent)(); };
ViewVsEmbeddedViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewVsEmbeddedViewComponent, selectors: [["rxa-cd-embedded-view-parent01"]], decls: 18, vars: 2, consts: [["visualizerHeader", ""], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "row", "w-100"], [1, "col-sm-6"], [4, "oLet"], [4, "poc1Let"], [3, "viewType"]], template: function ViewVsEmbeddedViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Component Template vs Embedded View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVsEmbeddedViewComponent_Template_button_click_5_listener($event) { return ctx.btn2Click$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Directive cdRef#detectChanges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVsEmbeddedViewComponent_Template_button_click_7_listener($event) { return ctx.btn1Click$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " EmbeddedView cdRef#detectChanges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*rxLet Directive cdRef#detectChanges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewVsEmbeddedViewComponent_ng_container_13_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*rxLet EmbeddedView cdRef#detectChanges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ViewVsEmbeddedViewComponent_ng_container_17_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oLet", ctx.value2$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc1Let", ctx.value1$);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_4__["VisualizerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"], _original_let_directive__WEBPACK_IMPORTED_MODULE_7__["OriginalLetDirective"], _poc1_let_directive__WEBPACK_IMPORTED_MODULE_8__["Poc1LetDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVsEmbeddedViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-cd-embedded-view-parent01',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h2>
          Component Template vs Embedded View
        </h2>
        <div>

          <button mat-raised-button [unpatch] (click)="btn2Click$.next($event)">
            Directive cdRef#detectChanges
          </button>
          <button mat-raised-button [unpatch] (click)="btn1Click$.next($event)">
            EmbeddedView cdRef#detectChanges
          </button>

        </div>
      </ng-container>
    </rxa-visualizer>

    <div class="row w-100">
      <div class="col-sm-6">
        <h3>*rxLet Directive cdRef#detectChanges</h3>
        <ng-container *oLet="value2$; let value">
          <rxa-visualizer>
            {{value}}
          </rxa-visualizer>
        </ng-container>
      </div>

      <div class="col-sm-6">
        <h3>*rxLet EmbeddedView cdRef#detectChanges</h3>
        <ng-container *poc1Let="value1$; let value">
          <rxa-visualizer [viewType]="'embedded-view'">
            {{value}}
          </rxa-visualizer>
        </ng-container>
      </div>
    </div>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~32122c97.js.map