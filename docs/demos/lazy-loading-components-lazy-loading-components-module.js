(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-loading-components-lazy-loading-components-module"],{

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

/***/ "4LXs":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/lazy-loading-components/lazy-loading-components.routes.ts ***!
  \****************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _lazy_loading_components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-loading-components.component */ "S3u0");

const ROUTES = [
    {
        path: '',
        component: _lazy_loading_components_component__WEBPACK_IMPORTED_MODULE_0__["LazyLoadingComponentsComponent"]
    }
];


/***/ }),

/***/ "EjPM":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/lazy-loading-components/lazy-loading-components.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: LazyLoadingComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingComponentsModule", function() { return LazyLoadingComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _lazy_loading_components_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-loading-components.routes */ "4LXs");
/* harmony import */ var _lazy_loading_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-loading-components.component */ "S3u0");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ghost-elements */ "jRUy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");












const DECLARATIONS = [
    _lazy_loading_components_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadingComponentsComponent"]
];
class LazyLoadingComponentsModule {
}
LazyLoadingComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyLoadingComponentsModule });
LazyLoadingComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LazyLoadingComponentsModule_Factory(t) { return new (t || LazyLoadingComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_lazy_loading_components_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
            _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_6__["GhostElementsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyLoadingComponentsModule, { declarations: [_lazy_loading_components_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadingComponentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
        _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_6__["GhostElementsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyLoadingComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_lazy_loading_components_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
                    _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_6__["GhostElementsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "S3u0":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/lazy-loading-components/lazy-loading-components.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LazyLoadingComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingComponentsComponent", function() { return LazyLoadingComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/rx-effects.service */ "DLaK");
/* harmony import */ var _shared_utils_cd_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/cd-helper */ "1rJa");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_ghost_elements_list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/ghost-elements/list-item-ghost/list-item-ghost.component */ "SPfS");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");














function LazyLoadingComponentsComponent_div_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rxa-list-item-ghost");
} }
function LazyLoadingComponentsComponent_div_16_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", ctx_r5.componentAwait);
} }
function LazyLoadingComponentsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Resolving over async/await");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyLoadingComponentsComponent_div_16_ng_template_3_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LazyLoadingComponentsComponent_div_16_ng_container_5_Template, 1, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.componentAwait)("ngIfElse", _r3);
} }
function LazyLoadingComponentsComponent_div_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rxa-list-item-ghost");
} }
function LazyLoadingComponentsComponent_div_17_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 10);
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", c_r9);
} }
function LazyLoadingComponentsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Resolving over Observable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyLoadingComponentsComponent_div_17_ng_template_3_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LazyLoadingComponentsComponent_div_17_ng_container_5_Template, 1, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rxLet", ctx_r2.component$)("rxLetRxSuspense", _r6);
} }
class LazyLoadingComponentsComponent extends _shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__["RxEffects"] {
    constructor(cdHelper) {
        super();
        this.cdHelper = cdHelper;
        this.displayStates = {
            await: 0,
            observable: 1,
            all: 2
        };
        this.toggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toggle$ = this.toggleSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(b => !b, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
        this.component$ = this.toggle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(b => b ? this.cA() : this.cB()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.cA = () => __webpack_require__.e(/*! import() | lazy-component-a-component */ "lazy-component-a-component").then(__webpack_require__.bind(null, /*! ./lazy-component-a.component */ "HT2U")).then(c => c.component);
        this.cB = () => __webpack_require__.e(/*! import() | lazy-component-b-component */ "lazy-component-b-component").then(__webpack_require__.bind(null, /*! ./lazy-component-b.component */ "w4Xz")).then(c => c.component);
        this.hold(this.toggle$, (b) => this.awaiting(b));
    }
    awaiting(b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.componentAwait = yield (b ? this.cA() : this.cB());
            this.cdHelper.cdRef_detectChanges();
        });
    }
}
LazyLoadingComponentsComponent.ɵfac = function LazyLoadingComponentsComponent_Factory(t) { return new (t || LazyLoadingComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_utils_cd_helper__WEBPACK_IMPORTED_MODULE_5__["CdHelper"])); };
LazyLoadingComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LazyLoadingComponentsComponent, selectors: [["rxa-lazy-loading-components"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_utils_cd_helper__WEBPACK_IMPORTED_MODULE_5__["CdHelper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 6, consts: [["visualizerHeader", ""], ["name", "visibleExamples", "aria-label", "Visible Examples", 3, "value"], ["group", "matButtonToggleGroup"], [3, "value"], ["mat-raised-button", "", 3, "click"], [1, "w-100", "row"], ["class", "col", 4, "ngIf"], [1, "col"], ["suspenseAwaitView", ""], [3, "ngComponentOutlet", 4, "ngIf", "ngIfElse"], [3, "ngComponentOutlet"], ["suspenseView", ""], [3, "ngComponentOutlet", 4, "rxLet", "rxLetRxSuspense"]], template: function LazyLoadingComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Lazy Loading Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-button-toggle-group", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Async Await");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LazyLoadingComponentsComponent_Template_button_click_13_listener() { return ctx.toggleSubject.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LazyLoadingComponentsComponent_div_16_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LazyLoadingComponentsComponent_div_17_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.displayStates.await);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.displayStates.observable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.value === ctx.displayStates.await || _r0.value === ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.value === ctx.displayStates.observable || _r0.value === ctx.displayStates.all);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_6__["VisualizerComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_ghost_elements_list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_10__["ListItemGhostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgComponentOutlet"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_11__["LetDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyLoadingComponentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rxa-lazy-loading-components',
                template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <h2>Lazy Loading Components</h2>
        <mat-button-toggle-group name="visibleExamples"
                                 aria-label="Visible Examples"
                                 [value]="displayStates.all"
                                 #group="matButtonToggleGroup">
          <mat-button-toggle [value]="displayStates.await">Async Await</mat-button-toggle>
          <mat-button-toggle [value]="displayStates.observable">Observable</mat-button-toggle>
          <mat-button-toggle [value]="displayStates.all">All</mat-button-toggle>
        </mat-button-toggle-group>
        <br/>
        <button mat-raised-button (click)="toggleSubject.next();">Toggle</button>
      </div>
      <div class="w-100 row">
        <div class="col" *ngIf="group.value === displayStates.await || group.value === displayStates.all">
          <h3>Resolving over async/await</h3>
          <ng-template #suspenseAwaitView>
            <rxa-list-item-ghost></rxa-list-item-ghost>
          </ng-template>
          <ng-container *ngIf="componentAwait; else: suspenseAwaitView" [ngComponentOutlet]="componentAwait"></ng-container>
        </div>
        <div class="col" *ngIf="group.value === displayStates.observable || group.value === displayStates.all">
          <h3>Resolving over Observable</h3>
          <ng-template #suspenseView>
            <rxa-list-item-ghost></rxa-list-item-ghost>
          </ng-template>
          <ng-container [ngComponentOutlet]="c" *rxLet="component$; let c; rxSuspense:suspenseView"></ng-container>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_shared_utils_cd_helper__WEBPACK_IMPORTED_MODULE_5__["CdHelper"]]
            }]
    }], function () { return [{ type: _shared_utils_cd_helper__WEBPACK_IMPORTED_MODULE_5__["CdHelper"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=lazy-loading-components-lazy-loading-components-module.js.map