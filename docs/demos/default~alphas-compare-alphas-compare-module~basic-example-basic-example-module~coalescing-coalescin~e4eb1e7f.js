(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f"],{

/***/ "+W5W":
/*!******************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/let/let.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: LetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetDirective", function() { return LetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "WL1M");
/* harmony import */ var _core_utils_template_manager_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils/template-manager_creator */ "0ChF");
/* harmony import */ var _render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render-strategies/strategies/strategies-map */ "sWix");






/**
 * @Directive LetDirective
 *
 * @description
 *
 * The `*rxLet` directive serves a convenient way of binding observables to a view context. Furthermore, it helps
 * you structure view-related models into view context scope (DOM element's scope).
 *
 * Under the hood, it leverages a `RenderStrategy` which in turn takes care of optimizing the change detection
 * of your component or embedded view. The `LetDirective` will render its template and manage change detection after it
 *   got an initial value. So if the incoming `Observable` emits its value lazily (e.g. data coming from `Http`), your
 *   template will be rendered lazily as well. This can very positively impact the initial render performance of your
 *   application.
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
 *
 * @docsCategory LetDirective
 * @docsPage LetDirective
 * @publicApi
 */
class LetDirective {
    /** @internal */
    constructor(cdRef, nextTemplateRef, viewContainerRef) {
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        /** @internal */
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
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
        this.strategies = Object(_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_4__["getStrategies"])({ cdRef });
        this.templateManager = Object(_core_utils_template_manager_creator__WEBPACK_IMPORTED_MODULE_3__["createTemplateManager"])(this.viewContainerRef, this.initialViewContext);
        this.renderAware = Object(_core__WEBPACK_IMPORTED_MODULE_2__["createRenderAware"])({
            strategies: this.strategies,
            templateObserver: this.templateObserver
        });
        this.renderAware.nextStrategy(_render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_STRATEGY_NAME"]);
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
    set rxLet(potentialObservable) {
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
        this.renderAware.nextStrategy(strategy || _render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_STRATEGY_NAME"]);
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
        this.templateManager.destroy();
    }
}
LetDirective.ɵfac = function LetDirective_Factory(t) { return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
LetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LetDirective, selectors: [["", "rxLet", ""]], inputs: { rxLet: "rxLet", strategy: ["rxLetStrategy", "strategy"], rxComplete: ["rxLetRxComplete", "rxComplete"], rxError: ["rxLetRxError", "rxError"], rxSuspense: ["rxLetRxSuspense", "rxSuspense"] }, exportAs: ["renderNotifier"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[rxLet]',
                exportAs: 'renderNotifier'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { rxLet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetStrategy']
        }], rxComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRxComplete']
        }], rxError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRxError']
        }], rxSuspense: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxLetRxSuspense']
        }] }); })();


/***/ }),

/***/ "/3d+":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/scheduling/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: promiseTick, animationFrameTick, SchedulingName, SchedulingPriority, priorityTickMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promiseTick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promiseTick */ "OI4S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseTick", function() { return _promiseTick__WEBPACK_IMPORTED_MODULE_0__["promiseTick"]; });

/* harmony import */ var _animationFrameTick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameTick */ "JEeV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameTick", function() { return _animationFrameTick__WEBPACK_IMPORTED_MODULE_1__["animationFrameTick"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "PDhT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingName", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["SchedulingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_2__["SchedulingPriority"]; });

/* harmony import */ var _priority_tick_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority-tick-map */ "hyNo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return _priority_tick_map__WEBPACK_IMPORTED_MODULE_3__["priorityTickMap"]; });







/***/ }),

/***/ "/Nps":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/get-global-this.ts ***!
  \***************************************************************************************************/
/*! exports provided: getGlobalThis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return getGlobalThis; });
/**
 * @description
 *
 * A fallback for the new `globalThis` reference.
 *
 *  It should be used to replace `window` due to different environments in:
 *  - SSR (Server Side Rendering)
 *  - Tests
 *  - Browser
 *
 *  @return {globalThis} - A reference to globalThis. `window` in the Browser.
 */
function getGlobalThis() {
    return (window || self || globalThis);
}


/***/ }),

/***/ "0ChF":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/template-manager_creator.ts ***!
  \************************************************************************************************************/
/*! exports provided: createTemplateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTemplateManager", function() { return createTemplateManager; });
/**
 * TemplateManager
 *
 * @description
 * This function returns an object that holds the logic for managing templates of a `ViewContainerRef`.
 * It abstracts `EmbeddedView` creation, `insert` calls and `ViewContext` updates.
 * Internally it creates template references lazily by combining caching logic and the `ViewContainerRef#detach` method.
 * The `TemplateManager` lets you re-use templates and insert views on-demand, as well as update the view context
 * (e.g. when a new observable notification is sent).
 *
 * @param viewContainerRef reference to a top-level view container where passed templates will be attached
 * @param initialViewContext initial view context state
 */
function createTemplateManager(viewContainerRef, initialViewContext) {
    const templateCache = new Map();
    const viewCache = new Map();
    const viewContext = Object.assign({}, initialViewContext);
    let activeView;
    return {
        hasTemplateRef(name) {
            return templateCache.has(name);
        },
        updateViewContext(viewContextSlice) {
            Object.entries(viewContextSlice).forEach(([key, value]) => {
                viewContext[key] = value;
            });
        },
        addTemplateRef(name, templateRef) {
            assertTemplate(name, templateRef);
            if (!templateCache.has(name)) {
                templateCache.set(name, templateRef);
            }
            else {
                // @Notice We have to think through how this would work. We also call viewCache.set(name, newView); in insertEmbeddedView
                throw new Error('Updating an already existing Template is not supported at the moment.');
            }
        },
        getEmbeddedView(name) {
            return viewCache.get(name);
        },
        displayView(name) {
            if (activeView !== name) {
                if (templateCache.has(name)) {
                    // Detach currently inserted view from the container
                    viewContainerRef.detach();
                    if (viewCache.has(name)) {
                        viewContainerRef.insert(viewCache.get(name));
                    }
                    else {
                        // Creates and inserts view to the view container
                        const newView = viewContainerRef.createEmbeddedView(templateCache.get(name), viewContext);
                        viewCache.set(name, newView);
                    }
                }
                else {
                    // @NOTICE this is here to cause errors and see in which situations we would throw.
                    // In CDK it should work different.
                    console.error(`A non-existing view was tried to insert ${name}`);
                }
                activeView = name;
            }
        },
        destroy() {
            viewCache.forEach((view) => view.destroy());
            viewContainerRef.clear();
        }
    };
}
function assertTemplate(property, templateRef) {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received something else.`);
    }
    return isTemplateRefOrNull;
}


/***/ }),

/***/ "0dKL":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/native.strategy.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: createNativeStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNativeStrategy", function() { return createNativeStrategy; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../experimental/render-strategies/rxjs/scheduling */ "7BlF");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "64HY");



/**
 * @description
 *
 * Native Strategy
 *
 * @description
 *
 * This strategy mirrors Angular's built-in `async` pipe.
 * This means for every emitted value [`ChangeDetectorRef#markForCheck`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/view_ref.ts#L128) is called.
 * Angular still needs zone.js to trigger the [`ApplicationRef#tick`](https://github.com/angular/angular/blob/7d8dce11c0726cdba999fc59a83295d19e5e92e6/packages/core/src/application_ref.ts#L719) to re-render,
 * as the internally called function [`markViewDirty`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/instructions/shared.ts#L1837) is only responsible for dirty marking and not rendering.
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing    | Scheduling               |
 * | --------- | --------------| ----------------- | ------------- | ------------------------ |
 * | `native`  | ❌            | ⮁ `markForCheck` | ✔ RootContext  | `requestAnimationFrame`  |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createNativeStrategy(config) {
    const renderMethod = () => config.cdRef.markForCheck();
    const cdScheduled = Object(_util__WEBPACK_IMPORTED_MODULE_2__["afterScheduleCD"])(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_1__["timeoutTick"]);
    return {
        name: 'native',
        detectChanges: () => renderMethod(),
        rxScheduleCD: (o) => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => renderMethod()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(v => Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_1__["timeoutTick"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => v)))),
        scheduleCD: (afterCD) => {
            renderMethod();
            return cdScheduled(afterCD);
        }
    };
}


/***/ }),

/***/ "10BB":
/*!**************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: coalesceWith, staticCoalesce, UnpatchEventsDirective, UnpatchEventsModule, ViewportPrioModule, ViewportPrioDirective, getZoneUnPatchedApi, isNgZone, isViewEngineIvy, createTemplateManager, getStrategies, priorityTickMap, SchedulingPriority, PushPipe, PushModule, LetDirective, LetModule, TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_render_strategies_rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/render-strategies/rxjs/operators/coalesceWith */ "LbHP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return _lib_render_strategies_rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_0__["coalesceWith"]; });

/* harmony import */ var _lib_render_strategies_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/render-strategies/static */ "yDGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticCoalesce", function() { return _lib_render_strategies_static__WEBPACK_IMPORTED_MODULE_1__["staticCoalesce"]; });

/* harmony import */ var _lib_experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/experimental/unpatch/events */ "D/MS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsDirective", function() { return _lib_experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsModule", function() { return _lib_experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsModule"]; });

/* harmony import */ var _lib_experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/experimental/viewport-prio */ "D53v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioModule", function() { return _lib_experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_3__["ViewportPrioModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioDirective", function() { return _lib_experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_3__["ViewportPrioDirective"]; });

/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/core */ "WL1M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_4__["getZoneUnPatchedApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_4__["isNgZone"]; });

/* harmony import */ var _lib_experimental_core_utils_view_engine_checks_experimental__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/experimental/core/utils/view-engine-checks.experimental */ "MLhI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewEngineIvy", function() { return _lib_experimental_core_utils_view_engine_checks_experimental__WEBPACK_IMPORTED_MODULE_5__["isViewEngineIvy"]; });

/* harmony import */ var _lib_core_utils_template_manager_creator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/core/utils/template-manager_creator */ "0ChF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTemplateManager", function() { return _lib_core_utils_template_manager_creator__WEBPACK_IMPORTED_MODULE_6__["createTemplateManager"]; });

/* harmony import */ var _lib_render_strategies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/render-strategies */ "X98U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return _lib_render_strategies__WEBPACK_IMPORTED_MODULE_7__["getStrategies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return _lib_render_strategies__WEBPACK_IMPORTED_MODULE_7__["priorityTickMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return _lib_render_strategies__WEBPACK_IMPORTED_MODULE_7__["SchedulingPriority"]; });

/* harmony import */ var _lib_push__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/push */ "Y0bf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushPipe", function() { return _lib_push__WEBPACK_IMPORTED_MODULE_8__["PushPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushModule", function() { return _lib_push__WEBPACK_IMPORTED_MODULE_8__["PushModule"]; });

/* harmony import */ var _lib_let__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/let */ "sZTa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LetDirective", function() { return _lib_let__WEBPACK_IMPORTED_MODULE_9__["LetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LetModule", function() { return _lib_let__WEBPACK_IMPORTED_MODULE_9__["LetModule"]; });

/* harmony import */ var _lib_template_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/template.module */ "h9mN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return _lib_template_module__WEBPACK_IMPORTED_MODULE_10__["TemplateModule"]; });





// @TODO clarify if we should exports this


// STABLE







/***/ }),

/***/ "36Zt":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/static/static-coalesce.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: staticCoalesce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticCoalesce", function() { return staticCoalesce; });
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils */ "nLkF");

function staticCoalesce(work, durationSelector, scope = {}, abC = new AbortController()) {
    let sub;
    if (!_core_utils__WEBPACK_IMPORTED_MODULE_0__["coalescingManager"].isCoalescing(scope)) {
        _core_utils__WEBPACK_IMPORTED_MODULE_0__["coalescingManager"].add(scope);
        sub = durationSelector.subscribe(() => {
            tryExecuteWork();
        });
        const abortHandler = function () {
            sub.unsubscribe();
            abC.signal.removeEventListener('abort', abortHandler, false);
        };
        abC.signal.addEventListener('abort', abortHandler, false);
    }
    return abC;
    // =====
    function tryExecuteWork() {
        _core_utils__WEBPACK_IMPORTED_MODULE_0__["coalescingManager"].remove(scope);
        if (!_core_utils__WEBPACK_IMPORTED_MODULE_0__["coalescingManager"].isCoalescing(scope)) {
            return work();
        }
        else {
            return void 0;
        }
    }
}


/***/ }),

/***/ "3dr7":
/*!***************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/push/push.pipe.ts ***!
  \***************************************************************************************/
/*! exports provided: PushPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushPipe", function() { return PushPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "WL1M");
/* harmony import */ var _render_strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render-strategies */ "X98U");
/* harmony import */ var _render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render-strategies/strategies/strategies-map */ "sWix");





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
class PushPipe {
    constructor(cdRef) {
        this.templateObserver = {
            suspense: () => this.renderedValue = undefined,
            next: (value) => this.renderedValue = value
        };
        this.RenderAware = Object(_core__WEBPACK_IMPORTED_MODULE_1__["createRenderAware"])({
            strategies: Object(_render_strategies__WEBPACK_IMPORTED_MODULE_2__["getStrategies"])({
                cdRef
            }),
            templateObserver: this.templateObserver
        });
        this.subscription = this.RenderAware.subscribe();
    }
    transform(potentialObservable, config, renderCallback) {
        const strategy = config || _render_strategies_strategies_strategies_map__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_STRATEGY_NAME"];
        this.RenderAware.nextStrategy(strategy);
        this.RenderAware.nextPotentialObservable(potentialObservable);
        return this.renderedValue;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PushPipe.ɵfac = function PushPipe_Factory(t) { return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"]()); };
PushPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "push", type: PushPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'push', pure: false }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "4unI":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/static/static-schedule.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: staticSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticSchedule", function() { return staticSchedule; });
/* harmony import */ var _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rxjs/scheduling/priority-tick-map */ "hyNo");

function staticSchedule(work, priority, abC = new AbortController()) {
    // immediately execute work
    if (priority === false) {
        tryExecuteWork();
        return abC;
    }
    // schedule work
    const sub = _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_0__["priorityTickMap"][priority].subscribe({
        // on complete abort further executions
        complete: () => abC.abort(),
        next: () => tryExecuteWork()
    });
    const abortHandler = function () {
        sub.unsubscribe();
        abC.signal.removeEventListener('abort', abortHandler, false);
    };
    abC.signal.addEventListener('abort', abortHandler, false);
    return abC;
    // execute work and abort further executions
    function tryExecuteWork() {
        if (!abC.signal.aborted) {
            work();
            abC.abort();
        }
    }
}


/***/ }),

/***/ "64HY":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/util/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: afterCoalesceAndSchedule, afterScheduleCD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "Owvm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterCoalesceAndSchedule", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["afterCoalesceAndSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterScheduleCD", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["afterScheduleCD"]; });




/***/ }),

/***/ "6gdZ":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: getStrategies, getLocalStrategies, getGlobalStrategies, createNativeStrategy, createNoopStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strategies_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategies-map */ "sWix");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return _strategies_map__WEBPACK_IMPORTED_MODULE_0__["getStrategies"]; });

/* harmony import */ var _local_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local.strategy */ "8V+o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocalStrategies", function() { return _local_strategy__WEBPACK_IMPORTED_MODULE_1__["getLocalStrategies"]; });

/* harmony import */ var _global_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.strategy */ "p0bj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalStrategies", function() { return _global_strategy__WEBPACK_IMPORTED_MODULE_2__["getGlobalStrategies"]; });

/* harmony import */ var _native_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./native.strategy */ "0dKL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNativeStrategy", function() { return _native_strategy__WEBPACK_IMPORTED_MODULE_3__["createNativeStrategy"]; });

/* harmony import */ var _noop_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop.strategy */ "GGVh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNoopStrategy", function() { return _noop_strategy__WEBPACK_IMPORTED_MODULE_4__["createNoopStrategy"]; });








/***/ }),

/***/ "7BlF":
/*!*****************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/index.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PostTaskSchedulerPriority, postTaskScheduler, postTaskTick, idleCallbackTick, intervalTick, timeoutTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postTask_experimental__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postTask.experimental */ "cseT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTaskSchedulerPriority", function() { return _postTask_experimental__WEBPACK_IMPORTED_MODULE_0__["PostTaskSchedulerPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postTaskScheduler", function() { return _postTask_experimental__WEBPACK_IMPORTED_MODULE_0__["postTaskScheduler"]; });

/* harmony import */ var _postTaskTick_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postTaskTick.experimental */ "rkdd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postTaskTick", function() { return _postTaskTick_experimental__WEBPACK_IMPORTED_MODULE_1__["postTaskTick"]; });

/* harmony import */ var _idleCallbackTick_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idleCallbackTick.experimental */ "iIck");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idleCallbackTick", function() { return _idleCallbackTick_experimental__WEBPACK_IMPORTED_MODULE_2__["idleCallbackTick"]; });

/* harmony import */ var _intervalTick_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intervalTick.experimental */ "BWtR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intervalTick", function() { return _intervalTick_experimental__WEBPACK_IMPORTED_MODULE_3__["intervalTick"]; });

/* harmony import */ var _timeoutTick_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeoutTick.experimental */ "a/Wn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeoutTick", function() { return _timeoutTick_experimental__WEBPACK_IMPORTED_MODULE_4__["timeoutTick"]; });








/***/ }),

/***/ "85zy":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/render-aware/index.ts ***!
  \************************************************************************************************/
/*! exports provided: createRenderAware, notificationKindToRxNotificationKind, rxMaterialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_aware_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-aware_creator */ "kSZf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderAware", function() { return _render_aware_creator__WEBPACK_IMPORTED_MODULE_0__["createRenderAware"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "eTur");
/* empty/unused harmony star reexport *//* harmony import */ var _utils_rx_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rx-materialize */ "ooG0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationKindToRxNotificationKind", function() { return _utils_rx_materialize__WEBPACK_IMPORTED_MODULE_2__["notificationKindToRxNotificationKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rxMaterialize", function() { return _utils_rx_materialize__WEBPACK_IMPORTED_MODULE_2__["rxMaterialize"]; });







/***/ }),

/***/ "8V+o":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/local.strategy.ts ***!
  \********************************************************************************************************************/
/*! exports provided: getLocalStrategies, createLocalStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStrategies", function() { return getLocalStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalStrategy", function() { return createLocalStrategy; });
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static */ "yDGT");
/* harmony import */ var _rxjs_scheduling_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rxjs/scheduling/interfaces */ "PDhT");
/* harmony import */ var _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs/scheduling/priority-tick-map */ "hyNo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rxjs/operators/coalesceWith */ "LbHP");
/* harmony import */ var _rxjs_scheduling_promiseTick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rxjs/scheduling/promiseTick */ "OI4S");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util */ "64HY");







const promiseDurationSelector = Object(_rxjs_scheduling_promiseTick__WEBPACK_IMPORTED_MODULE_5__["promiseTick"])();
/**
 * Local Strategies
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing         | Scheduling                |
 * | --------- | --------------| ----------------- | ------------------ | ------------------------- |
 * | `local`   | ✔             | 🠗 `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 *
 */
function getLocalStrategies(config) {
    return {
        local: createLocalStrategy(config)
    };
}
/**
 * @description
 *
 * Local Strategy
 *
 * This strategy is rendering the actual component and
 * all it's children that are on a path
 * that is marked as dirty or has components with `ChangeDetectionStrategy.Default`.
 *
 * As detectChanges has no coalescing of render calls
 * like [`ChangeDetectorRef#markForCheck`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/view_ref.ts#L128) or [`ɵmarkDirty`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/instructions/change_detection.ts#L36) has, so we have to apply our own coalescing, 'scoped' on
 * component level.
 *
 * Coalescing, in this very manner,
 * means **collecting all events** in the same
 * [EventLoop](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop) tick, that would cause a re-render and
 * execute **re-rendering only once**.
 *
 * 'Scoped' coalescing, in addition, means **grouping the collected events** by a specific context.
 * E. g. the **component** from which the re-rendering was initiated.
 *
 * This context could be the Component instance or a ViewContextRef,
 * both accessed over the context over `ChangeDetectorRef#context`.
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing         | Scheduling                 |
 * | --------- | --------------| ----------------- | ------------------ | -------------------------- |
 * | `local`   | ✔             | 🠗 `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createLocalStrategy(config) {
    const component = config.cdRef.context;
    const priority = _rxjs_scheduling_interfaces__WEBPACK_IMPORTED_MODULE_1__["SchedulingPriority"].animationFrame;
    const tick = _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_2__["priorityTickMap"][priority];
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = (o) => o.pipe(Object(_rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_4__["coalesceWith"])(promiseDurationSelector, component), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((v) => tick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(renderMethod));
    const scheduleCD = (afterCD) => Object(_static__WEBPACK_IMPORTED_MODULE_0__["coalesceAndSchedule"])(() => {
        Object(_util__WEBPACK_IMPORTED_MODULE_6__["afterCoalesceAndSchedule"])(renderMethod, afterCD);
    }, priority, component);
    return {
        name: 'local',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}


/***/ }),

/***/ "ABc9":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/idleCallback.experimental.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: cancelIdleCallback, requestIdleCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelIdleCallback", function() { return cancelIdleCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestIdleCallback", function() { return requestIdleCallback; });
const cancelIdleCallback = typeof window !== 'undefined'
    ? window.cancelIdleCallback ||
        function (idleId) {
            console.warn('Fake cancelIdleCallback used');
            clearTimeout(idleId);
        }
    : () => {
    };
const requestIdleCallback = typeof window !== 'undefined'
    ? window.requestIdleCallback ||
        function (cb) {
            console.warn('Fake requestIdleCallback used');
            const start = Date.now();
            return setTimeout(function () {
                cb({
                    didTimeout: false,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - start));
                    }
                });
            }, 1);
        }
    : () => {
    };


/***/ }),

/***/ "BWtR":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/intervalTick.experimental.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: intervalTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervalTick", function() { return intervalTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");

const intervalTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
    const id = window.__zone_symbol__setInterval(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => {
        window.__zone_symbol__clearInterval(id);
    };
});


/***/ }),

/***/ "D/MS":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/unpatch/events/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: unpatchEventListener, UnpatchEventsDirective, UnpatchEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpatch-events.experimental.directive */ "GK3P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpatchEventListener", function() { return _unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_0__["unpatchEventListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsDirective", function() { return _unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_0__["UnpatchEventsDirective"]; });

/* harmony import */ var _unpatch_events_experimental_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unpatch-events.experimental.module */ "DJM5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsModule", function() { return _unpatch_events_experimental_module__WEBPACK_IMPORTED_MODULE_1__["UnpatchEventsModule"]; });





/***/ }),

/***/ "D53v":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/viewport-prio/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ViewportPrioDirective, ViewportPrioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport-prio.experimental.directive */ "IS9V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioDirective", function() { return _viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_0__["ViewportPrioDirective"]; });

/* harmony import */ var _viewport_prio_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport-prio.module */ "SHM1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioModule", function() { return _viewport_prio_module__WEBPACK_IMPORTED_MODULE_1__["ViewportPrioModule"]; });





/***/ }),

/***/ "DJM5":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.module.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: UnpatchEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsModule", function() { return UnpatchEventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unpatch-events.experimental.directive */ "GK3P");



const DECLARATIONS = [_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["UnpatchEventsDirective"]];
class UnpatchEventsModule {
}
UnpatchEventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpatchEventsModule });
UnpatchEventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpatchEventsModule_Factory(t) { return new (t || UnpatchEventsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpatchEventsModule, { declarations: [_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["UnpatchEventsDirective"]], exports: [_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["UnpatchEventsDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchEventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ }),

/***/ "GGVh":
/*!*******************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/noop.strategy.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: createNoopStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNoopStrategy", function() { return createNoopStrategy; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

/**
 * @description
 *
 * Noop Strategy
 *
 * The no-operation strategy does nothing.
 * It can be a useful tool for performance improvements as well as debugging
 * The [`[viewport-prio]`](https://github.com/rx-angular/rx-angular/blob/ef99804c1b07aeb96763cacca6afad7bbdab03b1/libs/template/src/lib/experimental/viewport-prio/viewport-prio.directive.ts) directive use it to limit renderings to only visible components:
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing    | Scheduling |
 * | --------- | --------------| ----------------- | ------------- | ---------- |
 * | `noop`    | ✔             | - `noop`          | ❌             | ❌         |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return {RenderStrategy} - The calculated strategy
 *
 */
function createNoopStrategy(config) {
    return {
        name: 'noop',
        detectChanges: () => { },
        rxScheduleCD: (o) => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(v => false)),
        scheduleCD: () => new AbortController()
    };
}


/***/ }),

/***/ "GK3P":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: unpatchEventListener, UnpatchEventsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpatchEventListener", function() { return unpatchEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpatchEventsDirective", function() { return UnpatchEventsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _unpatch_event_list_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpatch-event-list.experimental */ "hA5H");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/utils */ "nLkF");






/**
 *
 * @description
 *
 * This function takes an elem and event and re-applies the listeners from the passed event to the
 * passed element with the zone un-patched version of it.
 *
 * @param elem {HTMLElement} - The elem to re-apply the listeners to.
 * @param event {string} - The name of the event from which to re-apply the listeners.
 *
 * @returns void
 */
function unpatchEventListener(elem, event) {
    const eventListeners = elem.eventListeners(event);
    // Return if no event listeners are present
    if (!eventListeners) {
        return;
    }
    const addEventListener = Object(_core_utils__WEBPACK_IMPORTED_MODULE_4__["getZoneUnPatchedApi"])('addEventListener', elem).bind(elem);
    eventListeners.forEach((listener) => {
        // Remove and reapply listeners with patched API
        elem.removeEventListener(event, listener);
        // Reapply listeners with un-patched API
        addEventListener(event, listener);
    });
}
/**
 * @Directive UnpatchEventsDirective
 *
 * @description
 *
 * The `unpatch` directive helps in partially migrating to zone-less apps as well as getting rid
 * of unnecessary renderings through zones `addEventListener` patches.
 * It can be used on any element you apply event bindings.
 *
 * The current way of binding events to the DOM is to use output bindings:
 *  ```html
 * <button (click)="doStuff($event)">click me</button>
 * ```
 *
 * The problem is that every event registered over `()` syntax, e.g. `(click)`
 * marks the component and all its ancestors as dirty and re-renders the whole component tree.
 * This is because zone.js patches the native browser API and whenever one of the patched APIs is used it re-renders.
 *
 * So even if your button is not related to a change that needs a re-render the app will re-render completely.
 * This leads to bad performance. This is especially helpful if you work with frequently fired events like 'mousemove'
 *
 * `unpatch` directive solves that problem.
 *
 * Included Features:
 *  - by default un-patch all registered listeners of the host it is applied on
 *  - un-patch only a specified set of registered event listeners
 *  - works zone independent (it directly checks the widow for patched APIs and un-patches them without the use of `runOutsideZone` which brings more performance)
 *  - Not interfering with any logic executed by the registered callback
 *
 * @usageNotes
 *
 * The `unpatch` directive can be used like shown here:
 * ```html
 * <button [unoatch] (click)="triggerSomeMethod($event)">click me</button>
 * <button [unoatch]="['mousemove']" (mousemove)="doStuff2($event)" (click)="doStuff($event)">click me</button>
 * ```
 *
 * @publicApi
 */
// tslint:disable-next-line:directive-selector
class UnpatchEventsDirective {
    constructor(el) {
        this.el = el;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_unpatch_event_list_experimental__WEBPACK_IMPORTED_MODULE_3__["zonePatchedEvents"]);
    }
    /**
     * @description
     * List of events that the element should be unpatched from. When input is empty or undefined,
     * the element is unpatched from all zone-patched events.
     *
     * Full list of zone-patched browser events can be found in
     * [this document](https://github.com/angular/angular/blob/master/packages/zone.js/STANDARD-APIS.md#browser).
     *
     */
    set events(events) {
        if (events && events.length > 0) {
            this.events$.next(events);
        }
        else {
            this.events$.next(_unpatch_event_list_experimental__WEBPACK_IMPORTED_MODULE_3__["zonePatchedEvents"]);
        }
    }
    reapplyEventListenersZoneUnPatched(events) {
        events.forEach((ev) => {
            unpatchEventListener(this.el.nativeElement, ev);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.subscription = this.events$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((eventList) => this.reapplyEventListenersZoneUnPatched(eventList)))
            .subscribe();
    }
}
UnpatchEventsDirective.ɵfac = function UnpatchEventsDirective_Factory(t) { return new (t || UnpatchEventsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UnpatchEventsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: UnpatchEventsDirective, selectors: [["", "unpatch", ""]], inputs: { events: ["unpatch", "events"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpatchEventsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[unpatch]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['unpatch']
        }] }); })();


/***/ }),

/***/ "HEZm":
/*!***************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/let/let.module.ts ***!
  \***************************************************************************************/
/*! exports provided: LetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetModule", function() { return LetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _let_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./let.directive */ "+W5W");



const EXPORTED_DECLARATIONS = [_let_directive__WEBPACK_IMPORTED_MODULE_1__["LetDirective"]];
class LetModule {
}
LetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LetModule });
LetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LetModule_Factory(t) { return new (t || LetModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LetModule, { declarations: [_let_directive__WEBPACK_IMPORTED_MODULE_1__["LetDirective"]], exports: [_let_directive__WEBPACK_IMPORTED_MODULE_1__["LetDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: EXPORTED_DECLARATIONS,
                exports: [EXPORTED_DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "IS9V":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/viewport-prio/viewport-prio.experimental.directive.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ViewportPrioDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioDirective", function() { return ViewportPrioDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "WL1M");
/* harmony import */ var _let__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../let */ "sZTa");







/**
 *
 * @description
 *
 * This function takes an elem and event and re-applies the listeners from the passed event to the
 * passed element with the zone un-patched version of it.
 *
 * @param elem {HTMLElement} - The elem to re-apply the listeners to.
 * @param event {string} - The name of the event from which to re-apply the listeners.
 *
 * @returns void
 */
function unpatchEventListener(elem, event) {
    const eventListeners = elem.eventListeners(event);
    // Return if no event listeners are present
    if (!eventListeners) {
        return;
    }
    const addEventListener = Object(_core__WEBPACK_IMPORTED_MODULE_3__["getZoneUnPatchedApi"])('addEventListener', elem).bind(elem);
    eventListeners.forEach((listener) => {
        // Remove and reapply listeners with patched API
        elem.removeEventListener(event, listener);
        // Reapply listeners with un-patched API
        addEventListener(event, listener);
    });
}
function intersectionObserver(options) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const observer = observerSupported()
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => subject.next(entry));
        }, options)
        : null;
    const entries$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
        subject.subscribe(subscriber);
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    });
    return {
        entries$,
        observe: observer.observe,
        unobserve: observer.unobserve
    };
}
const observerSupported = () => typeof window !== 'undefined'
    ? !!window.IntersectionObserver
    : false;
class ViewportPrioDirective {
    constructor(el, letDirective) {
        this.el = el;
        this.letDirective = letDirective;
        this.entriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.entries$ = this.entriesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])());
        this._viewportPrio = 'noop';
        /* @Input('viewport-prio')
        set viewportPrio(prio) {
          if (prio) {
            this._viewportPrio = prio || 'noop';
          }
        }*/
        this.observer = observerSupported()
            ? new IntersectionObserver((entries) => this.entriesSubject.next(entries), {
                threshold: 0
            })
            : null;
        this.visibilityEvents$ = this.entries$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => {
            if (entry.intersectionRatio > 0) {
                return 'visible';
            }
            else {
                return 'invisible';
            }
        }));
    }
    ngOnInit() {
        const letStrategyName$ = this.letDirective.renderAware.activeStrategy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((s) => s.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((name) => name !== this._viewportPrio));
        this.observer.observe(this.el.nativeElement);
        this.visibilityEvents$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(letStrategyName$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([visibility, strategyName]) => visibility === 'visible' ? strategyName : this._viewportPrio), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((strategyName) => {
            this.letDirective.strategy = strategyName;
            // render actual state on viewport enter
            // @TODO this doesnt catch unsubscribe (cant be cancelled)
            this.letDirective.strategies[strategyName].scheduleCD();
        }))
            .subscribe();
    }
}
ViewportPrioDirective.ɵfac = function ViewportPrioDirective_Factory(t) { return new (t || ViewportPrioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_let__WEBPACK_IMPORTED_MODULE_4__["LetDirective"], 8)); };
ViewportPrioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ViewportPrioDirective, selectors: [["", "viewport-prio", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportPrioDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[viewport-prio]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _let__WEBPACK_IMPORTED_MODULE_4__["LetDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "JEeV":
/*!*****************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/scheduling/animationFrameTick.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: animationFrameTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrameTick", function() { return animationFrameTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ "WL1M");


const animationFrameTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getZoneUnPatchedApi"])('requestAnimationFrame')(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => {
        Object(_core__WEBPACK_IMPORTED_MODULE_1__["getZoneUnPatchedApi"])('cancelAnimationFrame')(id);
    };
});


/***/ }),

/***/ "LbHP":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/operators/coalesceWith.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: coalesceWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return coalesceWith; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _core_utils_coalescing_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utils/coalescing-manager */ "kHNp");


/**
 * @description
 * Limits the number of synchronous emitted a value from the source Observable to
 * one emitted value per
 *   [`AnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), then repeats
 *   this process for every tick of the browsers event loop.
 *
 * The coalesce operator is based on the [throttle](https://rxjs-dev.firebaseapp.com/api/operators/throttle) operator.
 * In addition to that is provides emitted values for the trailing end only, as well as maintaining a context to scope
 *   coalescing.
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector - A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * It defaults to `requestAnimationFrame` as durationSelector.
 * @param {Object} config - A configuration object to define `leading` and `trailing` behavior and the context object.
 * Defaults to `{ leading: false, trailing: true }`. The default scoping is per subscriber.
 * @return {Observable<T>} An Observable that performs the coalesce operation to
 * limit the rate of emissions from the source.
 *
 * @usageNotes
 * Emit clicks at a rate of at most one click per second
 * ```typescript
 * import { fromEvent, animationFrames } from 'rxjs';
 * import { coalesce } from 'ngRx/component';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(coalesce(ev => animationFrames));
 * result.subscribe(x => console.log(x));
 * ```
 */
function coalesceWith(durationSelector, scope) {
    const _scope = scope || {};
    return (source) => {
        const o$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const rootSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
            rootSubscription.add(source.subscribe(createInnerObserver(observer, rootSubscription)));
            return rootSubscription;
        });
        return o$;
        function createInnerObserver(outerObserver, rootSubscription) {
            let actionSubscription;
            let latestValue;
            const tryEmitLatestValue = () => {
                _core_utils_coalescing_manager__WEBPACK_IMPORTED_MODULE_1__["coalescingManager"].remove(_scope);
                if (!_core_utils_coalescing_manager__WEBPACK_IMPORTED_MODULE_1__["coalescingManager"].isCoalescing(_scope)) {
                    outerObserver.next(latestValue);
                }
            };
            return {
                complete: () => {
                    if (actionSubscription) {
                        tryEmitLatestValue();
                    }
                    outerObserver.complete();
                },
                error: (error) => outerObserver.error(error),
                next: (value) => {
                    latestValue = value;
                    if (!actionSubscription) {
                        _core_utils_coalescing_manager__WEBPACK_IMPORTED_MODULE_1__["coalescingManager"].add(_scope);
                        actionSubscription = durationSelector.subscribe({
                            next: () => {
                                tryEmitLatestValue();
                                actionSubscription = undefined;
                            },
                            complete: () => {
                                if (actionSubscription) {
                                    tryEmitLatestValue();
                                    actionSubscription = undefined;
                                }
                            }
                        });
                        rootSubscription.add(actionSubscription);
                    }
                }
            };
        }
    };
}


/***/ }),

/***/ "MLhI":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/core/utils/view-engine-checks.experimental.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: isViewEngineIvy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewEngineIvy", function() { return isViewEngineIvy; });
/* harmony import */ var _core_utils_get_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/utils/get-global-this */ "/Nps");

/**
 * envRunsIvy
 *
 * @description
 * Determines the used view engine of an Angular project is Ivy or not.
 * The check is done based on following table:
 * | render       | ViewEngine | ViewEngine | Ivy         | Ivy         |
 * | ------------ | ---------- | ---------- | ----------- | ----------- |
 * | **mode**     | prod       | dev        | prod        | dev         |
 * | **ng**       | present    | present    | `undefined` | present     |
 * | **ng.probe** | present    | present    | `undefined` | `undefined` |
 *
 *  So for Ivy we need to make sure that ng is undefined or,
 *  in case of dev environment, ng.probe is undefined.
 *
 * @return {boolean} - true if the used view engine is Ivy.
 *
 */
function isViewEngineIvy() {
    const ng = Object(_core_utils_get_global_this__WEBPACK_IMPORTED_MODULE_0__["getGlobalThis"])().ng;
    // Is the global ng object is unavailable?
    // ng === undefined in Ivy production mode
    // View Engine has the ng object both in development mode and production mode.
    return (ng === undefined ||
        // in case we are in dev mode in ivy
        // `probe` property is available on ng object we use View Engine.
        ng.probe === undefined);
}


/***/ }),

/***/ "MqT8":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/operators/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: coalesceWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coalesceWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coalesceWith */ "LbHP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return _coalesceWith__WEBPACK_IMPORTED_MODULE_0__["coalesceWith"]; });




/***/ }),

/***/ "NWwh":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/properties-weakmap.ts ***!
  \******************************************************************************************************/
/*! exports provided: createPropertiesWeakMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPropertiesWeakMap", function() { return createPropertiesWeakMap; });
/*
 * createPropertiesWeakMap
 *
 * @param getDefaults: (o: O) => P
 * Example:
 *
 * export interface Properties {
 *   isCoalescing: boolean;
 * }
 *
 * const obj: object = {
 *   foo: 'bar',
 *   isCoalescing: 'weakMap version'
 * };
 *
 * const getDefaults = (ctx: object): Properties => ({isCoalescing: false});
 * const propsMap = createPropertiesWeakMap<object, Properties>(getDefaults);
 *
 * console.log('obj before:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props before:', propsMap.getProps(obj));
 * // {isCoalescing: "weakMap version"}
 *
 * propsMap.setProps(obj, {isCoalescing: true});
 * console.log('obj after:', obj);
 * // {foo: "bar", isCoalescing: "weakMap version"}
 * console.log('props after:', propsMap.getProps(obj));
 * // {isCoalescing: "true"}
 * */
function createPropertiesWeakMap(getDefaults) {
    const propertyMap = new WeakMap();
    return {
        getProps: getProperties,
        setProps: setProperties
    };
    function getProperties(ctx) {
        const defaults = getDefaults(ctx);
        const propertiesPresent = propertyMap.get(ctx);
        let properties;
        if (propertiesPresent !== undefined) {
            properties = propertiesPresent;
        }
        else {
            properties = {};
            Object.entries(defaults).forEach(([prop, value]) => {
                properties[prop] = hasKey(ctx, prop) ? ctx[prop] : value;
            });
            propertyMap.set(ctx, properties);
        }
        return properties;
    }
    function setProperties(ctx, props) {
        const properties = getProperties(ctx);
        Object.entries(props).forEach(([prop, value]) => {
            properties[prop] = value;
        });
        propertyMap.set(ctx, properties);
        return properties;
    }
    function hasKey(ctx, property) {
        return ctx[property] != null;
    }
}


/***/ }),

/***/ "OI4S":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/scheduling/promiseTick.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: promiseTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseTick", function() { return promiseTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core */ "WL1M");


// @NOTICE replace logic with 7v handling of promises in RxJS
const promiseTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
    let cancelled = false;
    Object(_core__WEBPACK_IMPORTED_MODULE_1__["getUnpatchedResolvedPromise"])()
        .then(() => {
        if (!cancelled) {
            subscriber.next(0);
            subscriber.complete();
        }
    })
        .catch((e) => {
        subscriber.error(e);
    });
    return () => {
        cancelled = true;
        subscriber.complete();
    };
});


/***/ }),

/***/ "Owvm":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/util/util.ts ***!
  \****************************************************************************************************/
/*! exports provided: afterCoalesceAndSchedule, afterScheduleCD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterCoalesceAndSchedule", function() { return afterCoalesceAndSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterScheduleCD", function() { return afterScheduleCD; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");


/**
 *
 * convenience method to prevent duplicated code. used in strategies after static coalescing
 *
 * @internal
 */
function afterCoalesceAndSchedule(work, afterCD) {
    work();
    if (afterCD) {
        afterCD();
    }
}
/**
 *
 * convenience method to prevent duplicated code.
 * helper for strategies where we have no direct control over the rendering and thus no information about when
 * rendering was finished. used in native & global strategy
 *
 * @internal
 */
function afterScheduleCD(tick) {
    let activeAbortController;
    return function (afterCD) {
        if (activeAbortController) {
            activeAbortController.abort();
        }
        activeAbortController = new AbortController();
        if (afterCD) {
            tick()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(activeAbortController.signal, 'abort')))
                .subscribe(() => {
                afterCD();
            });
        }
        return activeAbortController;
    };
}


/***/ }),

/***/ "PDhT":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/scheduling/interfaces.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SchedulingName, SchedulingPriority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingName", function() { return SchedulingName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return SchedulingPriority; });
var SchedulingName;
(function (SchedulingName) {
    SchedulingName["animationFrame"] = "animationFrame";
    SchedulingName["Promise"] = "Promise";
    SchedulingName["idleCallback"] = "idleCallback";
    SchedulingName["userBlocking"] = "userBlocking";
    SchedulingName["userVisible"] = "userVisible";
    SchedulingName["background"] = "background";
    SchedulingName["setInterval"] = "setInterval";
})(SchedulingName || (SchedulingName = {}));
var SchedulingPriority;
(function (SchedulingPriority) {
    SchedulingPriority[SchedulingPriority["sync"] = 0] = "sync";
    SchedulingPriority[SchedulingPriority["animationFrame"] = 1] = "animationFrame";
    SchedulingPriority[SchedulingPriority["Promise"] = 2] = "Promise";
    SchedulingPriority[SchedulingPriority["setTimeout"] = 3] = "setTimeout";
    SchedulingPriority[SchedulingPriority["setInterval"] = 4] = "setInterval";
    SchedulingPriority[SchedulingPriority["postMessage"] = 5] = "postMessage";
    SchedulingPriority[SchedulingPriority["idleCallback"] = 6] = "idleCallback";
    SchedulingPriority[SchedulingPriority["userBlocking"] = 7] = "userBlocking";
    SchedulingPriority[SchedulingPriority["userVisible"] = 8] = "userVisible";
    SchedulingPriority[SchedulingPriority["background"] = 9] = "background";
})(SchedulingPriority || (SchedulingPriority = {}));


/***/ }),

/***/ "SHM1":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/viewport-prio/viewport-prio.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ViewportPrioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPrioModule", function() { return ViewportPrioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport-prio.experimental.directive */ "IS9V");



const DECLARATIONS = [_viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["ViewportPrioDirective"]];
class ViewportPrioModule {
}
ViewportPrioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewportPrioModule });
ViewportPrioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewportPrioModule_Factory(t) { return new (t || ViewportPrioModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewportPrioModule, { declarations: [_viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["ViewportPrioDirective"]], exports: [_viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_1__["ViewportPrioDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportPrioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ }),

/***/ "WL1M":
/*!***********************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/index.ts ***!
  \***********************************************************************************/
/*! exports provided: createRenderAware, notificationKindToRxNotificationKind, rxMaterialize, getGlobalThis, createPropertiesWeakMap, getUnpatchedResolvedPromise, getZoneUnPatchedApi, isEnvZonePatched, isApiZonePatched, isNgZone, isNoopNgZone, coalescingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-aware */ "85zy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderAware", function() { return _render_aware__WEBPACK_IMPORTED_MODULE_0__["createRenderAware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationKindToRxNotificationKind", function() { return _render_aware__WEBPACK_IMPORTED_MODULE_0__["notificationKindToRxNotificationKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rxMaterialize", function() { return _render_aware__WEBPACK_IMPORTED_MODULE_0__["rxMaterialize"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "nLkF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPropertiesWeakMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["createPropertiesWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnpatchedResolvedPromise", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getUnpatchedResolvedPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getZoneUnPatchedApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnvZonePatched", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isEnvZonePatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApiZonePatched", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isApiZonePatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isNgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNoopNgZone", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isNoopNgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalescingManager", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["coalescingManager"]; });





/***/ }),

/***/ "WSsY":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: coalesceWith, promiseTick, animationFrameTick, SchedulingName, SchedulingPriority, priorityTickMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators */ "MqT8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return _operators__WEBPACK_IMPORTED_MODULE_0__["coalesceWith"]; });

/* harmony import */ var _scheduling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduling */ "/3d+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseTick", function() { return _scheduling__WEBPACK_IMPORTED_MODULE_1__["promiseTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameTick", function() { return _scheduling__WEBPACK_IMPORTED_MODULE_1__["animationFrameTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingName", function() { return _scheduling__WEBPACK_IMPORTED_MODULE_1__["SchedulingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return _scheduling__WEBPACK_IMPORTED_MODULE_1__["SchedulingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return _scheduling__WEBPACK_IMPORTED_MODULE_1__["priorityTickMap"]; });





/***/ }),

/***/ "X98U":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/index.ts ***!
  \************************************************************************************************/
/*! exports provided: coalesceWith, promiseTick, animationFrameTick, SchedulingName, SchedulingPriority, priorityTickMap, coalesceAndSchedule, staticCoalesce, staticSchedule, getStrategies, getLocalStrategies, getGlobalStrategies, createNativeStrategy, createNoopStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxjs */ "WSsY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceWith", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["coalesceWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseTick", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["promiseTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameTick", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingName", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["SchedulingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulingPriority", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["SchedulingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_0__["priorityTickMap"]; });

/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ "yDGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceAndSchedule", function() { return _static__WEBPACK_IMPORTED_MODULE_1__["coalesceAndSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticCoalesce", function() { return _static__WEBPACK_IMPORTED_MODULE_1__["staticCoalesce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticSchedule", function() { return _static__WEBPACK_IMPORTED_MODULE_1__["staticSchedule"]; });

/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies */ "6gdZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["getStrategies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocalStrategies", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["getLocalStrategies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalStrategies", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["getGlobalStrategies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNativeStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["createNativeStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNoopStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["createNoopStrategy"]; });






/***/ }),

/***/ "Y0bf":
/*!***********************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/push/index.ts ***!
  \***********************************************************************************/
/*! exports provided: PushPipe, PushModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _push_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push.pipe */ "3dr7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushPipe", function() { return _push_pipe__WEBPACK_IMPORTED_MODULE_0__["PushPipe"]; });

/* harmony import */ var _push_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push.module */ "iDgg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushModule", function() { return _push_module__WEBPACK_IMPORTED_MODULE_1__["PushModule"]; });





/***/ }),

/***/ "ZIFg":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/static/static-schedule-and-coalesced.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: coalesceAndSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesceAndSchedule", function() { return coalesceAndSchedule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _static_coalesce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-coalesce */ "36Zt");
/* harmony import */ var _static_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-schedule */ "4unI");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils */ "nLkF");




function coalesceAndSchedule(work, priority, scope = {}, abC = new AbortController()) {
    const durationSelector = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["getUnpatchedResolvedPromise"])());
    const scheduledWork = () => Object(_static_schedule__WEBPACK_IMPORTED_MODULE_2__["staticSchedule"])(work, priority, abC);
    const coalesceAbC = Object(_static_coalesce__WEBPACK_IMPORTED_MODULE_1__["staticCoalesce"])(scheduledWork, durationSelector, scope, abC);
    const abortHandler = function () {
        coalesceAbC.abort();
        abC.signal.removeEventListener('abort', abortHandler, false);
    };
    abC.signal.addEventListener('abort', abortHandler, false);
    return abC;
}


/***/ }),

/***/ "a/Wn":
/*!************************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/timeoutTick.experimental.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: timeoutTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutTick", function() { return timeoutTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");

const timeoutTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
    const id = window.__zone_symbol__setTimeout(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => {
        window.__zone_symbol__clearTimeout(id);
    };
});


/***/ }),

/***/ "bEhS":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/detach-strategy.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: getDetachStrategies, createDetachStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetachStrategies", function() { return getDetachStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDetachStrategy", function() { return createDetachStrategy; });
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static */ "yDGT");
/* harmony import */ var _rxjs_scheduling_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rxjs/scheduling/interfaces */ "PDhT");
/* harmony import */ var _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs/scheduling/priority-tick-map */ "hyNo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rxjs/operators/coalesceWith */ "LbHP");
/* harmony import */ var _rxjs_scheduling_promiseTick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rxjs/scheduling/promiseTick */ "OI4S");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util */ "64HY");







const promiseDurationSelector = Object(_rxjs_scheduling_promiseTick__WEBPACK_IMPORTED_MODULE_5__["promiseTick"])();
/**
 * Detach Strategies
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing         | Scheduling                 |
 * | --------- | --------------| ----------------- | ------------------ | -------------------------- |
 * | `detach`  | ✔             | ⭭ `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 *
 */
function getDetachStrategies(config) {
    return {
        detach: createDetachStrategy(config)
    };
}
/**
 * Detach Strategy
 *
 * This strategy behaves the same as the local strategy.
 * The detach strategy detaches the component from Angulars change detection.
 * With every new value it re-attaches the component/embedded view to the change detection,
 * renders the new value and detaches again.
 *
 * If a component is detached the input bindings will still receive values.
 * Also the internal logic will work as expected including the use of `ViewChild`.
 * Only the template will not be updated.
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing         | Scheduling                 |
 * | --------- | --------------| ----------------- | ------------------ | -------------------------- |
 * | `detach`  | ✔             | ⭭ `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 *
 * @param config - The values this strategy needs to get calculated.
 * @return - The calculated strategy
 *
 */
function createDetachStrategy(config) {
    const component = config.cdRef.context;
    const priority = _rxjs_scheduling_interfaces__WEBPACK_IMPORTED_MODULE_1__["SchedulingPriority"].animationFrame;
    const tick = _rxjs_scheduling_priority_tick_map__WEBPACK_IMPORTED_MODULE_2__["priorityTickMap"][priority];
    const renderMethod = () => {
        config.cdRef.reattach();
        config.cdRef.detectChanges();
        config.cdRef.detach();
    };
    const behavior = (o) => o.pipe(Object(_rxjs_operators_coalesceWith__WEBPACK_IMPORTED_MODULE_4__["coalesceWith"])(promiseDurationSelector, component), 
    // dispose previous render attempts (tick schedules it into the future)
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((v) => tick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(renderMethod));
    const scheduleCD = (afterCD) => Object(_static__WEBPACK_IMPORTED_MODULE_0__["coalesceAndSchedule"])(() => {
        Object(_util__WEBPACK_IMPORTED_MODULE_6__["afterCoalesceAndSchedule"])(renderMethod, afterCD);
    }, priority, component);
    return {
        name: 'detach',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}


/***/ }),

/***/ "cseT":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/postTask.experimental.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PostTaskSchedulerPriority, postTaskScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTaskSchedulerPriority", function() { return PostTaskSchedulerPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskScheduler", function() { return postTaskScheduler; });
var PostTaskSchedulerPriority;
(function (PostTaskSchedulerPriority) {
    PostTaskSchedulerPriority["background"] = "background";
    PostTaskSchedulerPriority["userBlocking"] = "user-blocking";
    PostTaskSchedulerPriority["userVisible"] = "user-visible";
})(PostTaskSchedulerPriority || (PostTaskSchedulerPriority = {}));
const postTaskScheduler = typeof window !== 'undefined'
    ? window.scheduler || {
        postTask(options) {
            const start = Date.now();
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.error('postTask not implemented. Use setTimeout as fallback');
                    resolve();
                }, 1);
            });
        }
    }
    : () => {
    };


/***/ }),

/***/ "eTur":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/render-aware/interfaces.ts ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "h9mN":
/*!****************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/template.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _let__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./let */ "sZTa");
/* harmony import */ var _push__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./push */ "Y0bf");
/* harmony import */ var _experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experimental/unpatch/events */ "D/MS");
/* harmony import */ var _experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experimental/viewport-prio */ "D53v");






class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, imports: [_let__WEBPACK_IMPORTED_MODULE_1__["LetModule"], _push__WEBPACK_IMPORTED_MODULE_2__["PushModule"], _experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"], _experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_4__["ViewportPrioModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, { exports: [_let__WEBPACK_IMPORTED_MODULE_1__["LetModule"], _push__WEBPACK_IMPORTED_MODULE_2__["PushModule"], _experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"], _experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_4__["ViewportPrioModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_let__WEBPACK_IMPORTED_MODULE_1__["LetModule"], _push__WEBPACK_IMPORTED_MODULE_2__["PushModule"], _experimental_unpatch_events__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"], _experimental_viewport_prio__WEBPACK_IMPORTED_MODULE_4__["ViewportPrioModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hA5H":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/unpatch/events/unpatch-event-list.experimental.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: zonePatchedEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zonePatchedEvents", function() { return zonePatchedEvents; });
const zonePatchedEvents = [
    'scroll',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'load',
    'pointerup',
    'change',
    'blur',
    'focus',
    'click',
    'contextmenu',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',
    'input'
];


/***/ }),

/***/ "hgH5":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/unpatched-resolved-promise.ts ***!
  \**************************************************************************************************************/
/*! exports provided: getUnpatchedResolvedPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnpatchedResolvedPromise", function() { return getUnpatchedResolvedPromise; });
/* harmony import */ var _zone_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone-checks */ "qHbm");
/** A shared promise instance to cause a delay of one microtask */

let resolvedPromise = null;
function getUnpatchedResolvedPromise() {
    resolvedPromise = resolvedPromise || Object(_zone_checks__WEBPACK_IMPORTED_MODULE_0__["getZoneUnPatchedApi"])('Promise').resolve();
    return resolvedPromise;
}


/***/ }),

/***/ "hyNo":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/rxjs/scheduling/priority-tick-map.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: priorityTickMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priorityTickMap", function() { return priorityTickMap; });
/* harmony import */ var _experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../experimental/render-strategies/rxjs/scheduling */ "7BlF");
/* harmony import */ var _animationFrameTick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameTick */ "JEeV");
/* harmony import */ var _promiseTick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promiseTick */ "OI4S");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "PDhT");




const priorityTickMap = {
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].animationFrame]: Object(_animationFrameTick__WEBPACK_IMPORTED_MODULE_1__["animationFrameTick"])(),
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].Promise]: Object(_promiseTick__WEBPACK_IMPORTED_MODULE_2__["promiseTick"])(),
    // @deprecated This is still experimental
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].setInterval]: Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["timeoutTick"])(),
    // @deprecated This is still experimental
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].idleCallback]: Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["idleCallbackTick"])(),
    // @deprecated This is still experimental
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].userBlocking]: Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["postTaskTick"])({
        priority: _experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["PostTaskSchedulerPriority"].userBlocking
    }),
    // @deprecated This is still experimental
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].userVisible]: Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["postTaskTick"])({
        priority: _experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["PostTaskSchedulerPriority"].userVisible
    }),
    // @deprecated This is still experimental
    [_interfaces__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].background]: Object(_experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["postTaskTick"])({ priority: _experimental_render_strategies_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_0__["PostTaskSchedulerPriority"].background })
};


/***/ }),

/***/ "iDgg":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/push/push.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PushModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushModule", function() { return PushModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _push_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push.pipe */ "3dr7");



const DECLARATIONS = [_push_pipe__WEBPACK_IMPORTED_MODULE_1__["PushPipe"]];
/**
 * @description
 * This module exports the PushPipe
 *
 * @example
 *
 * ```typescript
 * @NgModule({
 *  imports: [PushModule],
 *  //...
 * })
 * export class AppModule {}
 * ```
 *
 */
class PushModule {
}
PushModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PushModule });
PushModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PushModule_Factory(t) { return new (t || PushModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PushModule, { declarations: [_push_pipe__WEBPACK_IMPORTED_MODULE_1__["PushPipe"]], exports: [_push_pipe__WEBPACK_IMPORTED_MODULE_1__["PushPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [],
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ }),

/***/ "iIck":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/idleCallbackTick.experimental.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: idleCallbackTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idleCallbackTick", function() { return idleCallbackTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _idleCallback_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idleCallback.experimental */ "ABc9");


const idleCallbackTick = () => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
    const id = Object(_idleCallback_experimental__WEBPACK_IMPORTED_MODULE_1__["requestIdleCallback"])(() => {
        subscriber.next(0);
        subscriber.complete();
    });
    return () => Object(_idleCallback_experimental__WEBPACK_IMPORTED_MODULE_1__["cancelIdleCallback"])(id);
});


/***/ }),

/***/ "kHNp":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/coalescing-manager.ts ***!
  \******************************************************************************************************/
/*! exports provided: coalescingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalescingManager", function() { return coalescingManager; });
/* harmony import */ var _properties_weakmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-weakmap */ "NWwh");

const coalescingManager = createCoalesceManager();
const coalescingContextPropertiesMap = Object(_properties_weakmap__WEBPACK_IMPORTED_MODULE_0__["createPropertiesWeakMap"])((ctx) => ({
    numCoalescingSubscribers: 0
}));
/**
 * @describe createCoalesceManager
 *
 * returns a
 * Maintains a weak map of component references ans flags
 * them if the coalescing process is already started for them.
 *
 * Used in render aware internally.
 */
function createCoalesceManager() {
    return {
        remove: removeWork,
        add: addWork,
        isCoalescing
    };
    // Increments the number of subscriptions in a scope e.g. a class instance
    function removeWork(scope) {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers -
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Decrements the number of subscriptions in a scope e.g. a class instance
    function addWork(scope) {
        const numCoalescingSubscribers = coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers +
            1;
        coalescingContextPropertiesMap.setProps(scope, {
            numCoalescingSubscribers
        });
    }
    // Checks if anybody else is already coalescing atm
    function isCoalescing(scope) {
        return (coalescingContextPropertiesMap.getProps(scope).numCoalescingSubscribers >
            0);
    }
}


/***/ }),

/***/ "kSZf":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/render-aware/render-aware_creator.ts ***!
  \***************************************************************************************************************/
/*! exports provided: createRenderAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderAware", function() { return createRenderAware; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils_rx_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rx-materialize */ "ooG0");



/**
 * RenderAware
 *
 * @description
 * This function returns an object that holds all the shared logic for the push pipe and the let directive
 * responsible for change detection
 * If you extend this class you need to implement how the update of the rendered value happens.
 * Also custom behaviour is something you need to implement in the extending class
 */
function createRenderAware(cfg) {
    const strategyName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    let currentStrategy;
    const strategy$ = strategyName$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((stringOrObservable) => typeof stringOrObservable === 'string'
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(stringOrObservable)
        : stringOrObservable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((strategy) => {
        const s = cfg.strategies[strategy];
        if (!!s) {
            return s;
        }
        throw new Error(`Strategy ${strategy} does not exist.`);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((s) => (currentStrategy = s)), 
    // do not repeat the steps before for each subscriber
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])({ bufferSize: 1, refCount: true }));
    const observablesFromTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    const valuesFromTemplate$ = observablesFromTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    let firstTemplateObservableChange = true;
    const renderingEffect$ = valuesFromTemplate$.pipe(
    // handle null | undefined assignment and new Observable reset
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((observable$) => {
        if (observable$ === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }
        if (!firstTemplateObservableChange) {
            cfg.templateObserver.suspense();
            if (observable$ === undefined) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
            }
        }
        firstTemplateObservableChange = false;
        return observable$;
    }), 
    // forward only observable values
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((o$) => o$ !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((o$) => o$
        // Added behavior will get applied to the observable in `renderWithLatestStrategy`
        .pipe(
    // Forward only distinct values
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), 
    // Update completion, error and next
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(cfg.templateObserver), renderWithLatestStrategy(strategy$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publish"])());
    return {
        nextPotentialObservable(value) {
            observablesFromTemplate$.next(value);
        },
        nextStrategy(nextConfig) {
            strategyName$.next(nextConfig);
        },
        rendered$: renderingEffect$,
        activeStrategy$: strategy$,
        subscribe() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]().add(renderingEffect$.connect());
        }
    };
}
function renderWithLatestStrategy(strategyChanges$) {
    const suspenseNotification = {
        kind: 'rxSuspense',
        value: undefined,
        hasValue: false,
        error: undefined,
    };
    return (o$) => {
        return o$.pipe(Object(_utils_rx_materialize__WEBPACK_IMPORTED_MODULE_2__["rxMaterialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(strategyChanges$), 
        // always use latest strategy on value change
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([renderValue, strategy]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(renderValue), rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"]).pipe(strategy.rxScheduleCD)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(suspenseNotification));
    };
}


/***/ }),

/***/ "nLkF":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: getGlobalThis, createPropertiesWeakMap, getUnpatchedResolvedPromise, getZoneUnPatchedApi, isEnvZonePatched, isApiZonePatched, isNgZone, isNoopNgZone, coalescingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-global-this */ "/Nps");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return _get_global_this__WEBPACK_IMPORTED_MODULE_0__["getGlobalThis"]; });

/* harmony import */ var _properties_weakmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-weakmap */ "NWwh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPropertiesWeakMap", function() { return _properties_weakmap__WEBPACK_IMPORTED_MODULE_1__["createPropertiesWeakMap"]; });

/* harmony import */ var _unpatched_resolved_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unpatched-resolved-promise */ "hgH5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnpatchedResolvedPromise", function() { return _unpatched_resolved_promise__WEBPACK_IMPORTED_MODULE_2__["getUnpatchedResolvedPromise"]; });

/* harmony import */ var _zone_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone-checks */ "qHbm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return _zone_checks__WEBPACK_IMPORTED_MODULE_3__["getZoneUnPatchedApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnvZonePatched", function() { return _zone_checks__WEBPACK_IMPORTED_MODULE_3__["isEnvZonePatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApiZonePatched", function() { return _zone_checks__WEBPACK_IMPORTED_MODULE_3__["isApiZonePatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return _zone_checks__WEBPACK_IMPORTED_MODULE_3__["isNgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNoopNgZone", function() { return _zone_checks__WEBPACK_IMPORTED_MODULE_3__["isNoopNgZone"]; });

/* harmony import */ var _coalescing_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coalescing-manager */ "kHNp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalescingManager", function() { return _coalescing_manager__WEBPACK_IMPORTED_MODULE_4__["coalescingManager"]; });








/***/ }),

/***/ "ooG0":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/rx-materialize.ts ***!
  \**************************************************************************************************/
/*! exports provided: rxMaterialize, notificationKindToRxNotificationKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxMaterialize", function() { return rxMaterialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationKindToRxNotificationKind", function() { return notificationKindToRxNotificationKind; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

function rxMaterialize() {
    return o$ => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(({ kind, error }) => {
        if (kind === 'E') {
            console.error(error);
        }
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ value, hasValue, error, kind }) => ({
        value,
        hasValue,
        error,
        kind: notificationKindToRxNotificationKind(kind)
    })));
}
function notificationKindToRxNotificationKind(kind) {
    switch (kind) {
        case 'C':
            return 'rxComplete';
        case 'E':
            return 'rxError';
        case 'N':
        default:
            return 'rxNext';
    }
}


/***/ }),

/***/ "p0bj":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/global.strategy.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: getGlobalStrategies, createGlobalStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalStrategies", function() { return getGlobalStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStrategy", function() { return createGlobalStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rxjs_scheduling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rxjs/scheduling */ "/3d+");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "64HY");




function getGlobalStrategies(config) {
    return {
        global: createGlobalStrategy(config)
    };
}
/**
 *
 * @description
 *
 * Global Strategies
 *
 * This strategy leverages Angular's internal
 *   [`ɵmarkDirty`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/instructions/change_detection.ts#L36)
 *   render method. It acts identical to
 *   [`ChangeDetectorRef#markForCheck`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/view_ref.ts#L128)
 *   but works also zone-less.
 * `markDirty` in comparison to `markForCheck` also calls
 *   [`scheduleTick`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/instructions/shared.ts#L1863)
 *   which is the reason why it also works in zone-less environments.
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing      | Scheduling       |
 * | --------- | --------------| ----------------- | --------------- | ---------------- |
 * | `global`  | ✔             | ⮁ `ɵmarkDirty`   | ✔ `RootContext` |
 *   [`animationFrame`](https://github.com/angular/angular/blob/930eeaf177a4c277f437f42314605ff8dc56fc82/packages/core/src/render3/util/misc_utils.ts#L39)
 *     |
 *
 * @param config { RenderStrategyFactoryConfig } - The values this strategy needs to get calculated.
 * @return { RenderStrategy } - The calculated strategy
 *
 */
function createGlobalStrategy(config) {
    const renderMethod = () => Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmarkDirty"])(config.cdRef.context);
    const cdScheduler = Object(_util__WEBPACK_IMPORTED_MODULE_3__["afterScheduleCD"])(_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_2__["animationFrameTick"]);
    return {
        name: 'global',
        detectChanges: () => renderMethod(),
        rxScheduleCD: (o) => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => renderMethod()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(v => Object(_rxjs_scheduling__WEBPACK_IMPORTED_MODULE_2__["animationFrameTick"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => v)))),
        scheduleCD: (afterCD) => {
            renderMethod();
            return cdScheduler(afterCD);
        }
    };
}


/***/ }),

/***/ "qHbm":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/core/utils/zone-checks.ts ***!
  \***********************************************************************************************/
/*! exports provided: getZoneUnPatchedApi, isEnvZonePatched, isApiZonePatched, isNgZone, isNoopNgZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneUnPatchedApi", function() { return getZoneUnPatchedApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnvZonePatched", function() { return isEnvZonePatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApiZonePatched", function() { return isApiZonePatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNgZone", function() { return isNgZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNoopNgZone", function() { return isNoopNgZone; });
/* harmony import */ var _get_global_this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-global-this */ "/Nps");

/**
 * getZoneUnPatchedApi
 *
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no element is passed the window is used instead
 *
 * @param name {string} - The name of the API to check.
 * @param elem {any} - The elem to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */
function getZoneUnPatchedApi(name, elem) {
    elem = elem || Object(_get_global_this__WEBPACK_IMPORTED_MODULE_0__["getGlobalThis"])();
    return isApiZonePatched(name, elem) ? elem['__zone_symbol__' + name] : elem[name];
}
/**
 * envZonePatched
 *
 * @description
 *
 * This function checks the window object `zone.js` was instantiated.
 * If so, the `window` object maintains a property named `Zone`.
 *
 * Here how Angular checks it: https://github.com/angular/angular/blob/master/packages/core/src/zone/ng_zone.ts#L123
 *
 * @return {boolean} - true if `zone.js` patched global APIs.
 *
 */
function isEnvZonePatched() {
    return Object(_get_global_this__WEBPACK_IMPORTED_MODULE_0__["getGlobalThis"])().Zone !== undefined;
}
/**
 * apiZonePatched
 *
 * @description
 *
 * This function checks if a specific Browser API is patched by `zone.js`.
 *
 * @param name - The name of the API to check.
 * @param elem - The name of the API to check.
 * @return {boolean} - true if `zone.js` patched the API in question.
 *
 */
function isApiZonePatched(name, elem) {
    // if symbol is present, zone patched the API
    return elem['__zone_symbol__' + name] !== undefined;
}
const zoneDetectionCache = new WeakMap();
/**
 * isNgZone
 *
 * @description
 *
 * This function takes an instance of a class which implements the NgZone interface and checks if
 * its `runOutsideAngular()` function calls `apply()` on the function passed as parameter. This
 * means the Angular application that instantiated this service assumes it runs in a ZoneLess
 * environment, and therefore it's change detection will not be triggered by zone related logic.
 *
 * However, keep in mind this does not mean `zone.js` is not present.
 * The environment could still run in ZoneFull mode even if Angular turned it off.
 * Consider the situation of a Angular element configured for ZoneLess
 * environments is used in an Angular application relining on the zone mechanism.
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NgZone`.
 * @return {boolean} - true if instance is of type `NgZone`.
 *
 */
function isNgZone(instance) {
    const cachedValue = zoneDetectionCache.get(instance);
    if (cachedValue !== undefined) {
        return cachedValue;
    }
    let calledApply = false;
    function fn() {
    }
    fn.apply = () => (calledApply = true);
    instance.runOutsideAngular(fn);
    zoneDetectionCache.set(instance, calledApply);
    return calledApply;
}
/**
 * isNoopNgZone
 *
 *@description
 *
 * This function takes any instance of a class and checks
 * if the constructor name is equal to `NoopNgZone`.
 *
 * For more detailed information read the description of [isNgZone](#isngzone).
 *
 * @param instance {Class Instance} - The instance to check for constructor name of `NoopNgZone`.
 * @return {boolean} - true if instance is of type `NoopNgZone`.
 *
 */
function isNoopNgZone(instance) {
    return !isNgZone(instance);
}


/***/ }),

/***/ "rkdd":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/experimental/render-strategies/rxjs/scheduling/postTaskTick.experimental.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: postTaskTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskTick", function() { return postTaskTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _postTask_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postTask.experimental */ "cseT");


const postTaskTick = (options) => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscription) => {
    _postTask_experimental__WEBPACK_IMPORTED_MODULE_1__["postTaskScheduler"]
        .postTask(() => {
    }, options)
        .then(() => {
        subscription.next(0);
        subscription.complete();
    });
    return () => {
    };
});


/***/ }),

/***/ "sWix":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/strategies/strategies-map.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DEFAULT_STRATEGY_NAME, getStrategies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STRATEGY_NAME", function() { return DEFAULT_STRATEGY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategies", function() { return getStrategies; });
/* harmony import */ var _noop_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.strategy */ "GGVh");
/* harmony import */ var _native_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./native.strategy */ "0dKL");
/* harmony import */ var _local_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.strategy */ "8V+o");
/* harmony import */ var _global_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.strategy */ "p0bj");
/* harmony import */ var _detach_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detach-strategy */ "bEhS");





const DEFAULT_STRATEGY_NAME = 'local';
/**
 * @description
 * This method returns the provided strategies as name:strategy pair
 *
 * Built-in Strategies:
 *
 * | Name      | Zone Agnostic | Render Method     | Coalescing         | Scheduling                 |
 * | --------- | --------------| ----------------- | ------------------ | -------------------------- |
 * | `local`   | ✔             | 🠗 `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 * | `global`  | ✔             | ⮁ `ɵmarkDirty`    | ✔ RootContext     | `requestAnimationFrame`   |
 * | `detach`  | ✔             | ⭭ `detectChanges` | ✔ ComponentContext | `requestAnimationFrame`   |
 * | `noop`    | ✔             | - `noop`          | ❌                 | ❌                        |
 * | `native`  | ❌             | ⮁ `markForCheck` | ✔ RootContext     | `requestAnimationFrame`  |
 *
 * @param config
 */
function getStrategies(config) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, Object(_local_strategy__WEBPACK_IMPORTED_MODULE_2__["getLocalStrategies"])(config)), Object(_global_strategy__WEBPACK_IMPORTED_MODULE_3__["getGlobalStrategies"])(config)), Object(_detach_strategy__WEBPACK_IMPORTED_MODULE_4__["getDetachStrategies"])(config)), { noop: Object(_noop_strategy__WEBPACK_IMPORTED_MODULE_0__["createNoopStrategy"])(config), native: Object(_native_strategy__WEBPACK_IMPORTED_MODULE_1__["createNativeStrategy"])(config) });
}


/***/ }),

/***/ "sZTa":
/*!**********************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/let/index.ts ***!
  \**********************************************************************************/
/*! exports provided: LetDirective, LetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _let_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./let.directive */ "+W5W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LetDirective", function() { return _let_directive__WEBPACK_IMPORTED_MODULE_0__["LetDirective"]; });

/* harmony import */ var _let_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./let.module */ "HEZm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LetModule", function() { return _let_module__WEBPACK_IMPORTED_MODULE_1__["LetModule"]; });





/***/ }),

/***/ "yDGT":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/template/src/lib/render-strategies/static/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: coalesceAndSchedule, staticCoalesce, staticSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_schedule_and_coalesced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-schedule-and-coalesced */ "ZIFg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coalesceAndSchedule", function() { return _static_schedule_and_coalesced__WEBPACK_IMPORTED_MODULE_0__["coalesceAndSchedule"]; });

/* harmony import */ var _static_coalesce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-coalesce */ "36Zt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticCoalesce", function() { return _static_coalesce__WEBPACK_IMPORTED_MODULE_1__["staticCoalesce"]; });

/* harmony import */ var _static_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-schedule */ "4unI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticSchedule", function() { return _static_schedule__WEBPACK_IMPORTED_MODULE_2__["staticSchedule"]; });






/***/ })

}]);
//# sourceMappingURL=default~alphas-compare-alphas-compare-module~basic-example-basic-example-module~coalescing-coalescin~e4eb1e7f.js.map