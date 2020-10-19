(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-iterable-differ-rx-iterable-differ-module"],{

/***/ "Jwj9":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-iterable-differ/rx-iterable-differ.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RxIterableDifferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIterableDifferModule", function() { return RxIterableDifferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _rx_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rx-iterable-differ.routes */ "s0q+");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_iterable_differ_rx_iterable_differ_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rx-iterable-differ/rx-iterable-differ.component */ "dMN0");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");












const DECLARATIONS = [_rx_iterable_differ_rx_iterable_differ_component__WEBPACK_IMPORTED_MODULE_7__["RxIterableDifferComponent"]];
class RxIterableDifferModule {
}
RxIterableDifferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxIterableDifferModule });
RxIterableDifferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxIterableDifferModule_Factory(t) { return new (t || RxIterableDifferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxIterableDifferModule, { declarations: [_rx_iterable_differ_rx_iterable_differ_component__WEBPACK_IMPORTED_MODULE_7__["RxIterableDifferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIterableDifferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dMN0":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-iterable-differ/rx-iterable-differ/rx-iterable-differ.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RxIterableDifferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxIterableDifferComponent", function() { return RxIterableDifferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "lb96");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/debug-helper/hooks */ "S0Hg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/debug-helper/value-provider/array-provider/array-provider.component */ "IyUv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");













const _c0 = ["arrayP"];
function RxIterableDifferComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enterRes_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enterRes_r6));
} }
function RxIterableDifferComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enterRes_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enterRes_r7));
} }
function RxIterableDifferComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enterRes_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enterRes_r8));
} }
function RxIterableDifferComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enterRes_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enterRes_r9));
} }
function RxIterableDifferComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enterRes_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, enterRes_r10));
} }
const _c1 = function () { return []; };
class RxIterableDifferComponent extends _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_5__["Hooks"] {
    constructor(state, cdRef) {
        super();
        this.state = state;
        this.cdRef = cdRef;
        this.rxDiffer = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["rxIterableDifferFactory"])({
            trackBy: 'id',
            distinctBy: 'value'
        });
        this.enter$ = this.rxDiffer.enter$;
        this.move$ = this.rxDiffer.update$;
        this.identityChange$ = this.rxDiffer.update$;
        this.exit$ = this.rxDiffer.exit$;
        this.trackByIdFn = (a) => a.id;
        this.state.hold(this.afterViewInit$, () => this.setupRxDiffer());
        this.state.hold(this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(_ => this.arrayP.array$)), (v) => this.rxDiffer.next(v));
    }
    setupRxDiffer() {
        this.rxDiffer.connect();
        this.rxDiffer.enter$.subscribe((result) => {
            console.log('enter', result);
        });
        this.rxDiffer.update$.subscribe((result) => {
            console.log('update', result);
        });
        this.rxDiffer.exit$.subscribe((result) => {
            console.log('exit', result);
        });
        this.cdRef.detectChanges();
    }
}
RxIterableDifferComponent.ɵfac = function RxIterableDifferComponent_Factory(t) { return new (t || RxIterableDifferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RxIterableDifferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxIterableDifferComponent, selectors: [["rxa-differ-rx-iterable-differ"]], viewQuery: function RxIterableDifferComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.arrayP = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__["ArrayProviderService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 18, consts: [["visualizerHeader", "", 1, "row"], [1, "col-sm-12"], [3, "unpatched", "buttons"], ["arrayP", "rxaArrayProvider"], [1, "w-100", "row"], [1, "col-sm-2"], [4, "ngFor", "ngForOf"]], template: function RxIterableDifferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reactive Iterable Differ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-array-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RxIterableDifferComponent_div_11_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RxIterableDifferComponent_div_16_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RxIterableDifferComponent_div_21_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Identity Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RxIterableDifferComponent_div_26_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RxIterableDifferComponent_div_31_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, _r0.array$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx.enter$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.move$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 13, ctx.identityChange$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 15, ctx.exit$));
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_7__["VisualizerComponent"], _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_8__["ArrayProviderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_10__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxIterableDifferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-differ-rx-iterable-differ',
                template: `
    <rxa-visualizer>
      <div visualizerHeader class="row">
        <div class="col-sm-12">
          <h2>Reactive Iterable Differ</h2>
          <rxa-array-provider [unpatched]="[]" [buttons]="true" #arrayP="rxaArrayProvider"></rxa-array-provider>
        </div>
      </div>
      <div class="w-100 row">
        <div class="col-sm-2">
          <h3>List</h3>
          <div *ngFor="let enterRes of arrayP.array$ | push">
            <pre>{{enterRes | json}}</pre>
          </div>
        </div>
        <div class="col-sm-2">
          <h3>Enter</h3>
          <div *ngFor="let enterRes of enter$ | push">
            <pre>{{enterRes | json}}</pre>
          </div>
        </div>
        <div class="col-sm-2">
          <h3>Move</h3>
          <div *ngFor="let enterRes of move$ | push">
            <pre>{{enterRes | json}}</pre>
          </div>
        </div>
        <div class="col-sm-2">
          <h3>Identity Change</h3>
          <div *ngFor="let enterRes of identityChange$ | push">
            <pre>{{enterRes | json}}</pre>
          </div>
        </div>
        <div class="col-sm-2">
          <h3>Exit</h3>
          <div *ngFor="let enterRes of exit$ | push">
            <pre>{{enterRes | json}}</pre>
          </div>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__["ArrayProviderService"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { arrayP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['arrayP']
        }] }); })();


/***/ }),

/***/ "s0q+":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-iterable-differ/rx-iterable-differ.routes.ts ***!
  \*********************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_iterable_differ_rx_iterable_differ_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-iterable-differ/rx-iterable-differ.component */ "dMN0");

const ROUTES = [
    {
        path: '',
        component: _rx_iterable_differ_rx_iterable_differ_component__WEBPACK_IMPORTED_MODULE_0__["RxIterableDifferComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=rx-iterable-differ-rx-iterable-differ-module.js.map