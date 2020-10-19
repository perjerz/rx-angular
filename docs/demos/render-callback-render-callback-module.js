(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["render-callback-render-callback-module"],{

/***/ "83tG":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/render-callback-overview.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RenderCallbackOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallbackOverviewComponent", function() { return RenderCallbackOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class RenderCallbackOverviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
RenderCallbackOverviewComponent.ɵfac = function RenderCallbackOverviewComponent_Factory(t) { return new (t || RenderCallbackOverviewComponent)(); };
RenderCallbackOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderCallbackOverviewComponent, selectors: [["rxa-render-callback-overview"]], decls: 0, vars: 0, template: function RenderCallbackOverviewComponent_Template(rf, ctx) { }, styles: [""], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderCallbackOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-callback-overview',
                template: `

  `,
                styles: [`


  `],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Co0T":
/*!*********************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/render-callback.routes.ts ***!
  \*********************************************************************************/
/*! exports provided: RENDER_CALLBACK_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_CALLBACK_ROUTES", function() { return RENDER_CALLBACK_ROUTES; });
/* harmony import */ var _01_render_callback_01_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01/render-callback-01.component */ "zvPN");
/* harmony import */ var _02_render_callback_02_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02/render-callback-02.component */ "bxDR");
/* harmony import */ var _03_render_callback_03_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03/render-callback-03.component */ "zqR0");
/* harmony import */ var _04_render_callback04_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04/render-callback04.component */ "IlV6");
/* harmony import */ var _render_callback_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-callback-overview.component */ "83tG");





const RENDER_CALLBACK_ROUTES = [
    {
        path: '',
        redirectTo: 'render-callback',
        component: _render_callback_overview_component__WEBPACK_IMPORTED_MODULE_4__["RenderCallbackOverviewComponent"],
    },
    {
        path: 'render-callback',
        component: _render_callback_overview_component__WEBPACK_IMPORTED_MODULE_4__["RenderCallbackOverviewComponent"],
    },
    {
        path: 'render-callback-01',
        component: _01_render_callback_01_component__WEBPACK_IMPORTED_MODULE_0__["RenderCallback01Component"],
    },
    {
        path: 'render-callback-02',
        component: _02_render_callback_02_component__WEBPACK_IMPORTED_MODULE_1__["RenderCallback02Component"],
    },
    {
        path: 'render-callback-03',
        component: _03_render_callback_03_component__WEBPACK_IMPORTED_MODULE_2__["RenderCallback03Component"],
    },
    {
        path: 'render-callback-04',
        component: _04_render_callback04_component__WEBPACK_IMPORTED_MODULE_3__["RenderCallback04Component"],
    },
];


/***/ }),

/***/ "IlV6":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/04/render-callback04.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RenderCallback04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallback04Component", function() { return RenderCallback04Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "zmEM");
/* harmony import */ var _components_push_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/push.pipe */ "cNYz");








const _c0 = ["box"];
class RenderCallback04Component {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.strategyName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('local'), rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"]);
        this.rendered$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rendered2$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rendered3$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.content$ = this.updateClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => Math.random() * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    reset() {
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.afterViewInit$.next();
    }
}
RenderCallback04Component.ɵfac = function RenderCallback04Component_Factory(t) { return new (t || RenderCallback04Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RenderCallback04Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderCallback04Component, selectors: [["rxa-render-callback-04"]], viewQuery: function RenderCallback04Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
    } }, decls: 43, vars: 31, consts: [["mat-raised-button", "", "unpatch", "", 3, "click"], [1, "example-results"], [1, "example-result"], [1, "example-box"], [1, "mat-headline"]], template: function RenderCallback04Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Render Callback example 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Multiple rendercallbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback04Component_Template_button_click_7_listener() { return ctx.updateClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Callback Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Callback Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Callback Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("RenderStrategy: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.strategyName$, "local"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 10, ctx.content$, "local", ctx.rendered$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 14, ctx.rendered$, "local"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](26, 17, ctx.content$, "local", ctx.rendered2$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 21, ctx.rendered2$, "local"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](37, 24, ctx.content$, "local", ctx.rendered3$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 28, ctx.rendered3$, "local"), " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]], pipes: [_components_push_pipe__WEBPACK_IMPORTED_MODULE_6__["PushRcbPipe"]], styles: [".example-results[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        justify-content: space-evenly;\n        margin-bottom: 3rem;\n      }\n\n      .example-result[_ngcontent-%COMP%] {\n        flex-grow: 1;\n      }\n\n      .example-box[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        align-items: center;\n        width: 300px;\n        outline: 1px solid red;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderCallback04Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-callback-04',
                template: `
    <h1>Render Callback example 04</h1>
    <h4>Multiple rendercallbacks</h4>
    <h4>RenderStrategy: {{strategyName$ | pushRcb: 'local'}}</h4>
    <button mat-raised-button unpatch (click)="updateClick.next()">Update</button>
    <div class="example-results">
      <div class="example-result">
        <div class="example-box">
          <h4 class="mat-headline">Value</h4>
          {{ content$ | pushRcb: 'local': rendered$ }}
          <mat-divider></mat-divider>
          <h4 class="mat-headline">Callback Value</h4>
          {{ rendered$ | pushRcb: 'local' }}
        </div>
      </div>
      <div class="example-result">
        <div class="example-box">
          <h4 class="mat-headline">Value</h4>
          {{ content$ | pushRcb: 'local': rendered2$ }}
          <mat-divider></mat-divider>
          <h4 class="mat-headline">Callback Value</h4>
          {{ rendered2$ | pushRcb: 'local' }}
        </div>
      </div>
      <div class="example-result">
        <div class="example-box">
          <h4 class="mat-headline">Value</h4>
          {{ content$ | pushRcb: 'local': rendered3$ }}
          <mat-divider></mat-divider>
          <h4 class="mat-headline">Callback Value</h4>
          {{ rendered3$ | pushRcb: 'local' }}
        </div>
      </div>
    </div>
  `,
                styles: [
                    `
      .example-results {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        margin-bottom: 3rem;
      }

      .example-result {
        flex-grow: 1;
      }

      .example-box {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        outline: 1px solid red;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['box']
        }] }); })();


/***/ }),

/***/ "So+b":
/*!***********************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/components/let.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: LetRcbDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetRcbDirective", function() { return LetRcbDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _libs_template_src_lib_core_render_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/core/render-aware */ "85zy");
/* harmony import */ var _libs_template_src_lib_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/render-strategies/strategies/strategies-map */ "sWix");




// tslint:disable:nx-enforce-module-boundaries



/**
 * @Directive LetDirective
 *
 * @description
 *
 * The `*rxLet` directive serves a convenient way of binding observables to a view context. Furthermore, it helps
 * you structure view-related models into view context scope (DOM element's scope).
 *
 * Under the hood, it leverages a `RenderStrategy` which in turn takes care of optimizing the change detection
 * of your component or embedded view. The `LetDirective` will render its template and manage change detection after it got an initial
 *   value. So if the incoming `Observable` emits its value lazily (e.g. data coming from `Http`), your template will
 *   be rendered lazily as well. This can very positively impact the initial render performance of your application.
 *
 *
 * ### Problems with `async` and `*ngIf`
 *
 * In Angular, a way of binding an observable to the view could look like that:
 * ```html
 * <ng-container *ngIf="observableNumber$ | async as n">
 *   <app-number [number]="n"></app-number>
 *   <app-number-special [number]="n"></app-number-special>
 * </ng-container>
 * ```
 *
 * The problem is that `*ngIf` interferes with rendering and in case of a `0` (a falsy value) the component
 * would be hidden. This issue doesn't concern the `LetDirective`.
 *
 * The `AsyncPipe` relies on the Zone to be present - it doesn't really trigger change detection by itself.
 * It marks the component and its children as dirty waiting for the Zone to trigger change detection. So, in case
 * you want to create a zone-less application, the `AsyncPipe` won't work as desired. `LetDirective` comes
 * with its own strategies to manage change detection every time a new notification is sent from
 * the bound Observable.
 *
 *
 * ### Features of `*rxLet`
 *
 * Included features for `*rxLet`:
 * - binding is always present. (see "Problems with `async` and `*ngIf`" section below)
 * - it takes away the multiple usages of the `async` or `push` pipe
 * - a unified/structured way of handling null and undefined
 * - triggers change-detection differently if `zone.js` is present or not (`ChangeDetectorRef.detectChanges` or
 *   `ChangeDetectorRef.markForCheck`)
 * - triggers change-detection differently if ViewEngine or Ivy is present (`ChangeDetectorRef.detectChanges` or
 *   `ɵdetectChanges`)
 * - distinct same values in a row (`distinctUntilChanged` operator),
 * - display custom templates for different observable notifications (rxSuspense, rxNext, rxError, rxComplete)
 * - notify about after changes got rendered to the template (RenderCallback)
 *
 *
 * ### Binding an Observable and using the view context
 *
 * The `*rxLet` directive takes over several things and makes it more convenient and save to work with streams in the
 * template:
 *
 * ```html
 * <ng-container *rxLet="observableNumber$; let n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-container *rxLet="observableNumber$ as n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * ```
 *
 * In addition to that it provides us information from the whole observable context.
 * We can track the observables:
 * - next value
 * - error occurrence
 * - complete occurrence
 *
 * ```html
 * <ng-container *rxLet="observableNumber$; let n; let e = $rxError, let c = $rxComplete">
 *   <app-number [number]="n" *ngIf="!e && !c"></app-number>
 *   <ng-container *ngIf="e">
 *     There is an error: {{ e }}
 *   </ng-container>
 *   <ng-container *ngIf="c">
 *     Observable completed: {{ c }}
 *   </ng-container>
 * </ng-container>
 * ```
 *
 *
 * ### Using the template-binding
 *
 * You can also use template anchors and display template's content for different observable states:
 * - on complete
 * - on error
 * - on suspense - before the first value is emitted
 *
 * ```html
 * <ng-container
 *   *rxLet="
 *     observableNumber$;
 *     let n;
 *     rxError: error;
 *     rxComplete: complete;
 *     rxSuspense: suspense;
 *   "
 * >
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * <ng-template #error>ERROR</ng-template>
 * <ng-template #complete>COMPLETE</ng-template>
 * <ng-template #suspense>SUSPENSE</ng-template>
 * ```
 *
 * Internally, `*rxLet` is using a simple "view memoization" - it caches all anchored template references and re-uses
 * them whenever the observable notification (next/error/complete) is sent. Then, it only updates the context
 * (e.g. a value from the observable) in the view.
 *
 * ### Using the RenderCallback
 * The RenderCallback notifies users about when the `LetDirective` "rendered" the latest values of the
 * active template.
 * At the time the `rendered` callback emits, the DOM should be already updated with the latest changes connected
 * to this instance.
 * The callback will emit the latest value rendered to the template.
 *
 * Since structural directives currently do not support `@Output` bindings, developers have to use other mechanics
 * to access this event.
 * Beyond the traditional approach the `LetDirectives` offers an input property as renderCallback.
 * This enables developers to bind a `NextObserver` (e.g. `Subject`) to the `LetDirective`which will emit after
 * rendering happened.
 *
 * You can choose between using the [Template syntax](https://angular.io/guide/template-syntax), injecting the
 * `LetDirective` as `@ViewChild()` and subscribe the event manually or providing a RenderCallback on your own.
 *
 * Please note that due to the built-in
 *   [coalescing][https://github.com/rx-angular/rx-angular/blob/master/libs/template/docs/concepts.md] can cause this
 *   callback different in situations where multiple `LetDirectives` are used to render the same
 * `Component`. Make sure to subscribe to every instance in your component to avoid missing render
 * notifications.
 *
 * #### RenderCallback Input
 * ```html
 * <ng-container *rxLet="content$; let content; strategy: strategyName$; renderCallback: renderCallback$">
 *    <div class="example-box">
 *        {{ content }}
 *    </div>
 * </ng-container>
 * ```
 * ```ts
 * // inside component:
 * readonly renderCallback$ = new Subject<string>();
 * ```
 * #### Template syntax
 * ```html
 * <!-- template syntax with output binding -->
 * <ng-template let-content
 *    [rxLet]="content$"
 *    (rendered)="onTemplateRendered($event)">
 *  <div class="example-box">
 *    {{ content }}
 *  </div>
 * </ng-template>
 * ```
 * #### ViewChild
 * ```html
 * <div *rxLet="content$; let content" class="example-box">
 *  {{ content }}
 * </div>
 * ```
 * ```ts
 * // inside of your component
 * \@ViewChild(LetDirective) rxLet: LetDirective<string>;
 * this.rxLet.rendered.subscribe(value => console.log('afterRender', value));
 * ```
 *
 *
 * @docsCategory LetDirective
 * @docsPage LetDirective
 * @publicApi
 */
class LetRcbDirective {
    /** @internal */
    constructor(cdRef, nextTemplateRef, viewContainerRef) {
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        /**
         * @description
         * A callback for when the `LetDirective` "rendered" the latest values of the active template.
         * At the time the `rendered` callback emits, the DOM should be already updated with the latest changes connected
         * to this instance.
         * The callback will emit the latest value rendered to the template.
         *
         * Since structural directives currently do not support `@Output` bindings, developers have to use other mechanics
         * to access this event.
         *
         * You can still use this Output event by using either the [Template
         * syntax](https://angular.io/guide/template-syntax) or
         * injecting the `LetDirective` as `@ViewChild()` and subscribe the event manually.
         *
         * Please note that due to the built in
         *   [coalescing][https://github.com/rx-angular/rx-angular/blob/master/libs/template/docs/concepts.md] can cause this
         *   callback different in situations where multiple `LetDirectives` are used to render the same
         * `Component`. Make sure to subscribe to every instance in your component to make sure you don't miss render
         * notifications.
         *
         * @example
         * <ng-template let-content
         *    [rxLet]="content$"
         *    (rendered)="onTemplateRendered($event)">
         *  <div class="example-box">
         *    {{ content }}
         *  </div>
         * </ng-template>
         *
         * <div *rxLet="content$; let content" class="example-box">
         *  {{ content }}
         * </div>
         *
         * `@ViewChild(LetDirective) rxLet: LetDirective<string>;`
         * this.rxLet.rendered.subscribe(value => console.log('afterRender', value));
         */
        this.rendered = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => this.renderAware.rendered$.pipe(
        // We use defer here as the as otherwise the the `@Output` decorator subscribes earlier than the renderAware
        // property is assigned
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(({ kind }) => this.templateManager.hasTemplateRef(kind)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ value }) => value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])()));
        /** @internal */
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /** @internal */
        this.renderCallBackSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /** @internal */
        this.initialViewContext = {
            $implicit: undefined,
            rxLet: undefined,
            $rxError: false,
            $rxComplete: false,
            $rxSuspense: false
        };
        /** @internal */
        this.templateObserver = {
            suspense: () => {
                this.displayInitialView();
                this.templateManager.updateViewContext({
                    $implicit: undefined,
                    rxLet: undefined,
                    $rxError: false,
                    $rxComplete: false,
                    $rxSuspense: true
                });
            },
            next: (value) => {
                this.templateManager.displayView('rxNext');
                this.templateManager.updateViewContext({
                    $implicit: value,
                    rxLet: value
                });
            },
            error: (error) => {
                // fallback to rxNext when there's no template for rxError
                this.templateManager.hasTemplateRef('rxError')
                    ? this.templateManager.displayView('rxError')
                    : this.templateManager.displayView('rxNext');
                this.templateManager.updateViewContext({
                    $rxError: error
                });
            },
            complete: () => {
                // fallback to rxNext when there's no template for rxComplete
                this.templateManager.hasTemplateRef('rxComplete')
                    ? this.templateManager.displayView('rxComplete')
                    : this.templateManager.displayView('rxNext');
                this.templateManager.updateViewContext({
                    $rxComplete: true
                });
            }
        };
        /** @internal */
        this.displayInitialView = () => {
            // Display "suspense" template if provided
            if (this.templateManager.hasTemplateRef('rxSuspense')) {
                this.templateManager.displayView('rxSuspense');
            }
        };
        this.strategies = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["getStrategies"])({ cdRef });
        this.templateManager = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["createTemplateManager"])(this.viewContainerRef, this.initialViewContext);
        this.renderAware = Object(_libs_template_src_lib_core_render_aware__WEBPACK_IMPORTED_MODULE_4__["createRenderAware"])({
            strategies: this.strategies,
            templateObserver: this.templateObserver
        });
        this.renderAware.nextStrategy(_libs_template_src_lib_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_STRATEGY_NAME"]);
    }
    /**
     * @description
     * The Observable to be bound to the context of a template.
     *
     * @example
     * <ng-container *rxLet="hero$; let hero">
     *   <app-hero [hero]="hero"></app-hero>
     * </ng-container>
     *
     * @param potentialObservable
     */
    set rxLetRcb(potentialObservable) {
        this.renderAware.nextPotentialObservable(potentialObservable);
    }
    /**
     * @description
     * The rendering strategy to be used when rendering with the reactive context within a template.
     * Use it to dynamically manage your rendering strategy. You can switch the strategies
     * imperatively (with a string) or by bounding an Observable.
     * The default strategy is `'local'`.
     *
     * @example
     * \@Component({
     *   selector: 'app-root',
     *   template: `
     *     <ng-container *rxLet="hero$; let hero; strategy: strategy">
     *       <app-hero [hero]="hero"></app-hero>
     *     </ng-container>
     *   `
     * })
     * export class AppComponent {
     *   strategy = 'local';
     * }
     *
     * // OR
     *
     * \@Component({
     *   selector: 'app-root',
     *   template: `
     *     <ng-container *rxLet="hero$; let hero; strategy: strategy$">
     *       <app-hero [hero]="hero"></app-hero>
     *     </ng-container>
     *   `
     * })
     * export class AppComponent {
     *   strategy$ = new BehaviorSubject('local');
     * }
     *
     * @param strategy
     * @see {@link strategies}
     */
    set strategy(strategy) {
        this.renderAware.nextStrategy(strategy || _libs_template_src_lib_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_STRATEGY_NAME"]);
    }
    /**
     * @description
     * A template to show if the bound Observable is in "complete" state.
     *
     * @example
     * <ng-container *rxLet="hero$; let hero; rxComplete: completeTemplate">
     *   <app-hero [hero]="hero"></app-hero>
     * </ng-container>
     * <ng-template #completeTemplate>
     *   <mat-icon>thumb_up</mat-icon>
     * </ng-template>
     *
     * @param templateRef
     */
    set rxComplete(templateRef) {
        this.templateManager.addTemplateRef('rxComplete', templateRef);
    }
    /**
     * @description
     * A template to show if the bound Observable is in "error" state.
     *
     * @example
     * <ng-container *rxLet="hero$; let hero; rxError: errorTemplate">
     *   <app-hero [hero]="hero"></app-hero>
     * </ng-container>
     * <ng-template #errorTemplate>
     *   <mat-icon>thumb_down</mat-icon>
     * </ng-template>
     *
     * @param templateRef
     */
    set rxError(templateRef) {
        this.templateManager.addTemplateRef('rxError', templateRef);
    }
    /**
     * @description
     * A template to show before the first value is emitted from the bound Observable.
     *
     * @example
     * <ng-container *rxLet="hero$; let hero; rxSuspense: suspenseTemplate">
     *   <app-hero [hero]="hero"></app-hero>
     * </ng-container>
     * <ng-template #suspenseTemplate>
     *   <mat-progress-spinner></mat-progress-spinner>
     * </ng-template>
     *
     * @param templateRef
     */
    set rxSuspense(templateRef) {
        this.templateManager.addTemplateRef('rxSuspense', templateRef);
    }
    /**
     * @description
     * A callback for when the `LetDirective` "rendered" the latest values of the active template.
     * At the time the `rendered` callback emits, the DOM should be already updated with the latest changes connected
     * to this instance.
     * The callback will emit the latest value rendered to the template.
     *
     * Since structural directives currently do not support `@Output` bindings, the `LetDirective` offers an input
     * property as renderCallback. This enables developers to bind a `NextObserver` (e.g. `Subject`) to the `LetDirective`
     * which will emit after rendering happened.
     *
     * Please note that due to the built in
     *   [coalescing][https://github.com/rx-angular/rx-angular/blob/master/libs/template/docs/concepts.md] can cause this
     *   callback different in situations where multiple `LetDirectives` are used to render the same
     * `Component`. Make sure to subscribe to every instance in your component to make sure you don't miss render
     * notifications.
     *
     * @example
     *  <ng-container *rxLet="content$; let content; strategy: strategyName$; renderCallback: renderCallback$">
     *    <div class="example-box">
     *        {{ content }}
     *    </div>
     *  </ng-container>
     *
     * // inside component:
     * readonly renderCallback$ = new Subject<string>();
     */
    set renderCallback(callback) {
        this._renderObserver = callback;
        this.subscribeRenderCallback();
    }
    /** @internal */
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    /** @internal */
    ngOnInit() {
        this.templateManager.addTemplateRef('rxNext', this.nextTemplateRef);
        this.displayInitialView();
        this.subscription = this.renderAware.subscribe();
    }
    /** @internal */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.renderCallBackSubscription.unsubscribe();
        this.templateManager.destroy();
    }
    /** @internal */
    subscribeRenderCallback() {
        this.renderCallBackSubscription.unsubscribe();
        if (this._renderObserver) {
            this.renderCallBackSubscription = this.rendered.subscribe(this._renderObserver);
        }
    }
}
LetRcbDirective.ɵfac = function LetRcbDirective_Factory(t) { return new (t || LetRcbDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
LetRcbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LetRcbDirective, selectors: [["", "rxLetRcb", ""]], inputs: { rxLetRcb: "rxLetRcb", strategy: ["rxLetRcbStrategy", "strategy"], rxComplete: ["rxLetRcbRxComplete", "rxComplete"], rxError: ["rxLetRcbRxError", "rxError"], rxSuspense: ["rxLetRcbRxSuspense", "rxSuspense"], renderCallback: ["rxLetRcbRenderCallback", "renderCallback"] }, outputs: { rendered: "rendered" }, exportAs: ["renderNotifier"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetRcbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[rxLetRcb]',
                exportAs: 'renderNotifier'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { rxLetRcb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRcbStrategy']
        }], rxComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRcbRxComplete']
        }], rxError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRcbRxError']
        }], rxSuspense: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRcbRxSuspense']
        }], renderCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRcbRenderCallback']
        }], rendered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "bxDR":
/*!******************************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/02/render-callback-02.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RenderCallback02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallback02Component", function() { return RenderCallback02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _components_let_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/let.directive */ "So+b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _components_push_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/push.pipe */ "cNYz");










const _c0 = ["box"];
function RenderCallback02Component_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1, " ");
} }
class RenderCallback02Component {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.strategyName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('local');
        this.updateClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.completeClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pushRenderCallback = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.content$ = this.reset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.updateClick, this.errorClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('Boom!')))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(a => !a, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(b => b ? sentence() : paragraph()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.completeClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.calculatedAfterRender$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.renderer.rendered, this.pushRenderCallback)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height));
        // afterViewInit$ is needed, otherwise the ViewChild would not be ready
        this.calculatedAfterValue$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.renderer.rendered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height))));
    }
    reset() {
        this.reset$.next();
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        // this.calculatedAfterRender$.subscribe();
        this.afterViewInit$.next();
        this.reset();
    }
}
RenderCallback02Component.ɵfac = function RenderCallback02Component_Factory(t) { return new (t || RenderCallback02Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RenderCallback02Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderCallback02Component, selectors: [["rxa-render-callback-02"]], viewQuery: function RenderCallback02Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_let_directive__WEBPACK_IMPORTED_MODULE_3__["LetRcbDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.renderer = _t.first);
    } }, decls: 36, vars: 11, consts: [["mat-raised-button", "", "unpatch", "", 3, "click"], [1, "example-results"], [1, "example-result", 2, "height", "170px", "overflow-y", "scroll"], [1, "example-result"], [4, "rxLetRcb"], [1, "example-box"], ["box", ""]], template: function RenderCallback02Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Render Callback example 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Height calculation using ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback02Component_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback02Component_Template_button_click_6_listener() { return ctx.updateClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Update content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback02Component_Template_button_click_8_listener() { return ctx.errorClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback02Component_Template_button_click_10_listener() { return ctx.completeClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rxa-dirty-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "render callback output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "rendered$:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "After value changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "After renderCallback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RenderCallback02Component_ng_container_35_Template, 4, 1, "ng-container", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](26, 3, ctx.calculatedAfterValue$, "local", ctx.pushRenderCallback) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](34, 7, ctx.calculatedAfterRender$, "local", ctx.pushRenderCallback) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLetRcb", ctx.content$);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_6__["DirtyChecksComponent"], _components_let_directive__WEBPACK_IMPORTED_MODULE_3__["LetRcbDirective"]], pipes: [_components_push_pipe__WEBPACK_IMPORTED_MODULE_7__["PushRcbPipe"]], styles: [".example-results[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        margin-bottom: 3rem;\n      }\n\n      .example-result[_ngcontent-%COMP%] {\n        flex-grow: 1;\n      }\n\n      .example-box[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 300px;\n        outline: 1px solid red;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderCallback02Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-callback-02',
                template: `
    <h1>Render Callback example 02</h1>
    <h4>Height calculation using ViewChild</h4>
    <button mat-raised-button unpatch (click)="reset()">Reset</button>
    <button mat-raised-button unpatch (click)="updateClick.next()">Update content</button>
    <button mat-raised-button unpatch (click)="errorClick.next()">Error</button>
    <button mat-raised-button unpatch (click)="completeClick.next()">Complete</button>
    <rxa-dirty-check></rxa-dirty-check>
    <div class="example-results">
      <div class="example-result" style="height: 170px; overflow-y: scroll">
        <h4>render callback output</h4>
        <span>rendered$:</span>
      </div>
      <div class="example-result">
        <h4>After value changed</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterValue$ | pushRcb: 'local': pushRenderCallback
                                          ) + 'px' }}</strong></span>
      </div>
      <div class="example-result">
        <h4>After renderCallback</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterRender$ | pushRcb: 'local': pushRenderCallback
                                          ) + 'px' }}</strong></span>
      </div>
    </div>
    <ng-container *rxLetRcb="content$; let content;">
      <div class="example-box"
           #box>
        {{ content }}
      </div>
    </ng-container>
  `,
                styles: [
                    `
      .example-results {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 3rem;
      }

      .example-result {
        flex-grow: 1;
      }

      .example-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        outline: 1px solid red;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['box']
        }], renderer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_let_directive__WEBPACK_IMPORTED_MODULE_3__["LetRcbDirective"]]
        }] }); })();
function sentence() {
    return text(3, 12);
}
function paragraph() {
    return text(35, 102);
}
function text(min, max) {
    return 'Lorem Ipsum '.repeat(Math.ceil(Math.max(min, Math.random() * max)));
}


/***/ }),

/***/ "cNYz":
/*!*******************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/components/push.pipe.ts ***!
  \*******************************************************************************/
/*! exports provided: PushRcbPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushRcbPipe", function() { return PushRcbPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _libs_template_src_lib_core_render_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/core/render-aware */ "85zy");
/* harmony import */ var _libs_template_src_lib_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/render-strategies/strategies/strategies-map */ "sWix");




// tslint:disable:nx-enforce-module-boundaries



/**
 * @Pipe PushPipe
 *
 * @description
 *
 * The `push` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * The current way of binding an observable to the view looks like that:
 *  ```html
 *  {{observable$ | async}}
 * <ng-container *ngIf="observable$ | async as o">{{o}}</ng-container>
 * <component [value]="observable$ | async"></component>
 * ```
 *
 * The problem is `async` pipe just marks the component and all its ancestors as dirty.
 * It needs zone.js microtask queue to exhaust until `ApplicationRef.tick` is called to render all dirty marked
 *     components.
 *
 * Heavy dynamic and interactive UIs suffer from zones change detection a lot and can
 * lean to bad performance or even unusable applications, but the `async` pipe does not work in zone-less mode.
 *
 * `push` pipe solves that problem.
 *
 * Included Features:
 *  - Take observables or promises, retrieve their values and render the value to the template
 *  - Handling null and undefined values in a clean unified/structured way
 *  - Triggers change-detection differently if `zone.js` is present or not (`detectChanges` or `markForCheck`)
 *  - Distinct same values in a row to increase performance
 *  - Coalescing of change detection calls to boost performance
 *
 * @usageNotes
 *
 * `push` pipe solves that problem. It can be used like shown here:
 * ```html
 * {{observable$ | push}}
 * <ng-container *ngIf="observable$ | push as o">{{o}}</ng-container>
 * <component [value]="observable$ | push"></component>
 * ```
 *
 * @publicApi
 */
class PushRcbPipe {
    constructor(cdRef) {
        this.renderCallbackSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.templateObserver = {
            suspense: () => this.renderedValue = undefined,
            next: (value) => this.renderedValue = value
        };
        this.RenderAware = Object(_libs_template_src_lib_core_render_aware__WEBPACK_IMPORTED_MODULE_4__["createRenderAware"])({
            strategies: Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["getStrategies"])({
                cdRef
            }),
            templateObserver: this.templateObserver
        });
        this.subscription = this.RenderAware.subscribe();
    }
    transform(potentialObservable, config, renderCallback) {
        const strategy = config || _libs_template_src_lib_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_STRATEGY_NAME"];
        this.RenderAware.nextStrategy(strategy);
        this.RenderAware.nextPotentialObservable(potentialObservable);
        this.subscribeRenderCallback(renderCallback);
        return this.renderedValue;
    }
    ngOnDestroy() {
        this.renderCallbackSubscription.unsubscribe();
        this.subscription.unsubscribe();
    }
    subscribeRenderCallback(renderCallback) {
        if (renderCallback) {
            this.renderCallbackSubscription.unsubscribe();
            this.renderCallbackSubscription = this.RenderAware.rendered$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ value }) => value))
                .subscribe(renderCallback);
        }
    }
}
PushRcbPipe.ɵfac = function PushRcbPipe_Factory(t) { return new (t || PushRcbPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"]()); };
PushRcbPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pushRcb", type: PushRcbPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushRcbPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'pushRcb', pure: false }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "dBh9":
/*!*********************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/render-callback.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RenderCallbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallbackModule", function() { return RenderCallbackModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "zmEM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _01_render_callback_01_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./01/render-callback-01.component */ "zvPN");
/* harmony import */ var _02_render_callback_02_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./02/render-callback-02.component */ "bxDR");
/* harmony import */ var _03_render_callback_03_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./03/render-callback-03.component */ "zqR0");
/* harmony import */ var _04_render_callback04_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./04/render-callback04.component */ "IlV6");
/* harmony import */ var _components_let_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/let.directive */ "So+b");
/* harmony import */ var _components_push_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/push.pipe */ "cNYz");
/* harmony import */ var _render_callback_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./render-callback-overview.component */ "83tG");
/* harmony import */ var _render_callback_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./render-callback.routes */ "Co0T");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @rx-angular/template */ "10BB");


















class RenderCallbackModule {
}
RenderCallbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RenderCallbackModule });
RenderCallbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RenderCallbackModule_Factory(t) { return new (t || RenderCallbackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_render_callback_routes__WEBPACK_IMPORTED_MODULE_13__["RENDER_CALLBACK_ROUTES"]),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_15__["UnpatchEventsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RenderCallbackModule, { declarations: [_render_callback_overview_component__WEBPACK_IMPORTED_MODULE_12__["RenderCallbackOverviewComponent"],
        _01_render_callback_01_component__WEBPACK_IMPORTED_MODULE_6__["RenderCallback01Component"],
        _02_render_callback_02_component__WEBPACK_IMPORTED_MODULE_7__["RenderCallback02Component"],
        _03_render_callback_03_component__WEBPACK_IMPORTED_MODULE_8__["RenderCallback03Component"],
        _04_render_callback04_component__WEBPACK_IMPORTED_MODULE_9__["RenderCallback04Component"],
        _components_let_directive__WEBPACK_IMPORTED_MODULE_10__["LetRcbDirective"],
        _components_push_pipe__WEBPACK_IMPORTED_MODULE_11__["PushRcbPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_15__["UnpatchEventsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RenderCallbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _render_callback_overview_component__WEBPACK_IMPORTED_MODULE_12__["RenderCallbackOverviewComponent"],
                    _01_render_callback_01_component__WEBPACK_IMPORTED_MODULE_6__["RenderCallback01Component"],
                    _02_render_callback_02_component__WEBPACK_IMPORTED_MODULE_7__["RenderCallback02Component"],
                    _03_render_callback_03_component__WEBPACK_IMPORTED_MODULE_8__["RenderCallback03Component"],
                    _04_render_callback04_component__WEBPACK_IMPORTED_MODULE_9__["RenderCallback04Component"],
                    _components_let_directive__WEBPACK_IMPORTED_MODULE_10__["LetRcbDirective"],
                    _components_push_pipe__WEBPACK_IMPORTED_MODULE_11__["PushRcbPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_render_callback_routes__WEBPACK_IMPORTED_MODULE_13__["RENDER_CALLBACK_ROUTES"]),
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_15__["UnpatchEventsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zqR0":
/*!******************************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/03/render-callback-03.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RenderCallback03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallback03Component", function() { return RenderCallback03Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _components_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/let.directive */ "So+b");
/* harmony import */ var _components_push_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/push.pipe */ "cNYz");








const _c0 = ["box"];
function RenderCallback03Component_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1, " ");
} }
class RenderCallback03Component {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.strategyName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('local'), rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"]);
        this.rendered$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.completeClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.content$ = this.reset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.updateClick, this.errorClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('Boom!')))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(a => !a, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(b => b ? sentence() : paragraph()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.completeClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.calculatedAfterRender$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.rendered$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height));
        // afterViewInit$ is needed, otherwise the ViewChild would not be ready
        this.calculatedAfterValue$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.rendered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height))));
    }
    reset() {
        this.reset$.next();
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.afterViewInit$.next();
        this.reset();
    }
}
RenderCallback03Component.ɵfac = function RenderCallback03Component_Factory(t) { return new (t || RenderCallback03Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RenderCallback03Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderCallback03Component, selectors: [["rxa-render-callback-03"]], viewQuery: function RenderCallback03Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
    } }, decls: 38, vars: 16, consts: [["mat-raised-button", "", "unpatch", "", 3, "click"], [1, "example-results"], [1, "example-result", 2, "height", "170px", "overflow-y", "scroll"], [1, "example-result"], [4, "rxLetRcb", "rxLetRcbRenderCallback"], [1, "example-box"], ["box", ""]], template: function RenderCallback03Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Render Callback example 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Height calculation using LetRenderCallback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback03Component_Template_button_click_7_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback03Component_Template_button_click_9_listener() { return ctx.updateClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback03Component_Template_button_click_11_listener() { return ctx.errorClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback03Component_Template_button_click_13_listener() { return ctx.completeClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "render callback output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rendered$:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "After value changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "After renderCallback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RenderCallback03Component_ng_container_37_Template, 4, 1, "ng-container", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("RenderStrategy: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx.strategyName$, "local"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](28, 8, ctx.calculatedAfterValue$, "local", ctx.rendered$) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](36, 12, ctx.calculatedAfterRender$, "local", ctx.rendered$) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLetRcb", ctx.content$)("rxLetRcbRenderCallback", ctx.rendered$);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"], _components_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetRcbDirective"]], pipes: [_components_push_pipe__WEBPACK_IMPORTED_MODULE_6__["PushRcbPipe"]], styles: [".example-results[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        justify-content: space-evenly;\n        margin-bottom: 3rem;\n      }\n\n      .example-result[_ngcontent-%COMP%] {\n        flex-grow: 1;\n      }\n\n      .example-box[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 300px;\n        outline: 1px solid red;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderCallback03Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-callback-03',
                template: `
    <h1>Render Callback example 03</h1>
    <h4>Height calculation using LetRenderCallback</h4>
    <h4>RenderStrategy: {{strategyName$ | pushRcb: 'local'}}</h4>
    <button mat-raised-button unpatch (click)="reset()">Reset</button>
    <button mat-raised-button unpatch (click)="updateClick.next()">Update content</button>
    <button mat-raised-button unpatch (click)="errorClick.next()">Error</button>
    <button mat-raised-button unpatch (click)="completeClick.next()">Complete</button>
    <div class="example-results">
      <div class="example-result" style="height: 170px; overflow-y: scroll">
        <h4>render callback output</h4>
        <span>rendered$:</span>
      </div>
      <div class="example-result">
        <h4>After value changed</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterValue$ | pushRcb: 'local': rendered$
                                          ) + 'px' }}</strong></span>
      </div>
      <div class="example-result">
        <h4>After renderCallback</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterRender$ | pushRcb: 'local': rendered$
                                          ) + 'px' }}</strong></span>
      </div>
    </div>
    <ng-container *rxLetRcb="content$; let content; renderCallback: rendered$">
      <div class="example-box"
           #box>
        {{ content }}
      </div>
    </ng-container>
  `,
                styles: [
                    `
      .example-results {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        margin-bottom: 3rem;
      }

      .example-result {
        flex-grow: 1;
      }

      .example-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        outline: 1px solid red;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['box']
        }] }); })();
function sentence() {
    return text(3, 12);
}
function paragraph() {
    return text(35, 102);
}
function text(min, max) {
    return 'Lorem Ipsum '.repeat(Math.ceil(Math.max(min, Math.random() * max)));
}


/***/ }),

/***/ "zvPN":
/*!******************************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/01/render-callback-01.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RenderCallback01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCallback01Component", function() { return RenderCallback01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _components_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/let.directive */ "So+b");
/* harmony import */ var _components_push_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/push.pipe */ "cNYz");








const _c0 = ["box"];
function RenderCallback01Component_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r1, " ");
} }
class RenderCallback01Component {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rendered$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.completeClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.content$ = this.reset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.updateClick, this.errorClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('Boom!')))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(a => !a, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(b => b ? sentence() : paragraph()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.completeClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.calculatedAfterRender$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.rendered$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height));
        // afterViewInit$ is needed, otherwise the ViewChild would not be ready
        this.calculatedAfterValue$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.rendered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.box.nativeElement.getBoundingClientRect().height))));
    }
    reset() {
        this.reset$.next();
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.afterViewInit$.next();
        this.reset();
    }
}
RenderCallback01Component.ɵfac = function RenderCallback01Component_Factory(t) { return new (t || RenderCallback01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RenderCallback01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderCallback01Component, selectors: [["rxa-render-callback-01"]], viewQuery: function RenderCallback01Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
    } }, decls: 35, vars: 11, consts: [["mat-raised-button", "", 3, "unpatch", "click"], [1, "example-results"], [1, "example-result", 2, "height", "170px", "overflow-y", "scroll"], [1, "example-result"], [3, "rxLetRcb", "rendered"], [1, "example-box"], ["box", ""]], template: function RenderCallback01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Render Callback example 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Height calculation using rendered$ Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback01Component_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback01Component_Template_button_click_6_listener() { return ctx.updateClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Update content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback01Component_Template_button_click_8_listener() { return ctx.errorClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderCallback01Component_Template_button_click_10_listener() { return ctx.completeClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "render callback output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "rendered$:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "After value changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "After renderCallback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "calculated size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "pushRcb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RenderCallback01Component_ng_template_34_Template, 3, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rendered", function RenderCallback01Component_Template_ng_template_rendered_34_listener($event) { return ctx.rendered$.next($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 3, ctx.calculatedAfterValue$, "local", ctx.rendered$) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](33, 7, ctx.calculatedAfterRender$, "local", ctx.rendered$) + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLetRcb", ctx.content$);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsDirective"], _components_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetRcbDirective"]], pipes: [_components_push_pipe__WEBPACK_IMPORTED_MODULE_6__["PushRcbPipe"]], styles: [".example-results[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        justify-content: space-evenly;\n        margin-bottom: 3rem;\n      }\n\n      .example-result[_ngcontent-%COMP%] {\n        flex-grow: 1;\n      }\n\n      .example-box[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 300px;\n        outline: 1px solid red;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderCallback01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-callback-01',
                template: `
    <h1>Render Callback example 01</h1>
    <h4>Height calculation using rendered$ Event</h4>
    <button mat-raised-button [unpatch] (click)="reset()">Reset</button>
    <button mat-raised-button [unpatch] (click)="updateClick.next()">Update content</button>
    <button mat-raised-button [unpatch] (click)="errorClick.next()">Error</button>
    <button mat-raised-button [unpatch] (click)="completeClick.next()">Complete</button>
    <div class="example-results">
      <div class="example-result" style="height: 170px; overflow-y: scroll">
        <h4>render callback output</h4>
        <span>rendered$:</span>
      </div>
      <div class="example-result">
        <h4>After value changed</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterValue$ | pushRcb: 'local': rendered$
                                          ) + 'px' }}</strong></span>
      </div>
      <div class="example-result">
        <h4>After renderCallback</h4>
        <span>calculated size: <strong>{{ (
                                            calculatedAfterRender$ | pushRcb: 'local': rendered$
                                          ) + 'px' }}</strong></span>
      </div>
    </div>
    <ng-template let-content
                 [rxLetRcb]="content$"
                 (rendered)="rendered$.next($event)">
      <div class="example-box"
           #box>
        {{ content }}
      </div>
    </ng-template>
  `,
                styles: [
                    `
      .example-results {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        margin-bottom: 3rem;
      }

      .example-result {
        flex-grow: 1;
      }

      .example-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        outline: 1px solid red;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['box']
        }] }); })();
function sentence() {
    return text(3, 12);
}
function paragraph() {
    return text(35, 102);
}
function text(min, max) {
    return 'Lorem Ipsum '.repeat(Math.ceil(Math.max(min, Math.random() * max)));
}


/***/ })

}]);
//# sourceMappingURL=render-callback-render-callback-module.js.map