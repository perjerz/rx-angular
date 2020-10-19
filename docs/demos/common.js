(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "DLaK":
/*!**********************************************!*\
  !*** ./src/app/shared/rx-effects.service.ts ***!
  \**********************************************/
/*! exports provided: RxEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxEffects", function() { return RxEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class RxEffects {
    constructor() {
        this.effectObservable = Object(_rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["createSideEffectObservable"])();
        this.subscription = this.effectObservable.subscribe();
    }
    /**
     * @description
     * Manages side-effects of your state. Provide an `Observable<any>` **side-effect** and an optional
     * `sideEffectFunction`.
     * Subscription handling is done automatically.
     *
     * @example
     * // Directly pass an observable side-effect
     * const localStorageEffect$ = changes$.pipe(
     *  tap(changes => storeChanges(changes))
     * );
     * state.hold(localStorageEffect$);
     *
     * // Pass an additional `sideEffectFunction`
     *
     * const localStorageEffectFn = changes => storeChanges(changes);
     * state.hold(changes$, localStorageEffectFn);
     *
     * @param {Observable<S>} obsOrObsWithSideEffect
     * @param {function} [sideEffectFn]
     */
    hold(obsOrObsWithSideEffect, sideEffectFn) {
        if (typeof sideEffectFn === 'function') {
            this.effectObservable.nextEffectObservable(obsOrObsWithSideEffect.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(sideEffectFn)));
            return;
        }
        this.effectObservable.nextEffectObservable(obsOrObsWithSideEffect);
    }
    ngOnDestroy() {
        // tslint:disable-next-line:no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    }
}
RxEffects.ɵfac = function RxEffects_Factory(t) { return new (t || RxEffects)(); };
RxEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RxEffects, factory: RxEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JNVf":
/*!*************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/scheduling-helper.ts ***!
  \*************************************************************************/
/*! exports provided: schedulingHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulingHelper", function() { return schedulingHelper; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "Twlx");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");




const schedulingHelper = () => {
    let active = false;
    const schedulerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["SchedulingPriority"].animationFrame);
    const tickSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    const ticks$ = tickSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(a => ++a, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    const toggle = () => {
        tickSubject$.next(active ? rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"] : schedulerSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toTick"])({ scheduler: s }))));
        active = !active;
    };
    const duration = (d) => {
        tickSubject$.next(active ? rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"] : schedulerSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toTick"])({ scheduler: s, duration: d }))));
        active = !active;
    };
    const scheduler = (schedulerName) => {
        schedulerSubject.next(schedulerName);
    };
    const tick = (numEmissions = 1, tickSpeed) => {
        tickSubject$.next(schedulerSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((s) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toTick"])({
            scheduler: s,
            numEmissions,
            tickSpeed
        }))));
    };
    return {
        scheduler,
        ticks$,
        tick,
        toggle,
        duration
    };
};


/***/ }),

/***/ "QGmT":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/debug-helper/rendering-work/rendering-work.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RenderingWorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingWorkModule", function() { return RenderingWorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rendering-work/rendering-work.component */ "kAS6");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");






class RenderingWorkModule {
}
RenderingWorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RenderingWorkModule });
RenderingWorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RenderingWorkModule_Factory(t) { return new (t || RenderingWorkModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RenderingWorkModule, { declarations: [_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]], exports: [_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderingWorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkComponent"]],
                exports: [_rendering_work_rendering_work_component__WEBPACK_IMPORTED_MODULE_3__["RenderingWorkComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["UnpatchEventsModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QGud":
/*!*******************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/shared/shared.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _counter_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter-display.component */ "dvYp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/utils.module */ "MQax");










const DECLARATIONS = [_counter_display_component__WEBPACK_IMPORTED_MODULE_5__["CounterDisplayComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
            _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
        _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_counter_display_component__WEBPACK_IMPORTED_MODULE_5__["CounterDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
        _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]], exports: [_counter_display_component__WEBPACK_IMPORTED_MODULE_5__["CounterDisplayComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
        _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
                    _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]
                ],
                exports: [
                    DECLARATIONS,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"],
                    _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "SPfS":
/*!************************************************************************************!*\
  !*** ./src/app/shared/ghost-elements/list-item-ghost/list-item-ghost.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListItemGhostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemGhostComponent", function() { return ListItemGhostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");




function ListItemGhostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-skeleton-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", 3);
} }
class ListItemGhostComponent {
    constructor() {
        this.numItems = [0];
    }
    set count(n) {
        this.numItems = Array(n < 1 ? 1 : n).fill(0);
    }
}
ListItemGhostComponent.ɵfac = function ListItemGhostComponent_Factory(t) { return new (t || ListItemGhostComponent)(); };
ListItemGhostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemGhostComponent, selectors: [["rxa-list-item-ghost"]], inputs: { count: "count" }, decls: 1, vars: 1, consts: [["class", "list-item-ghost", 4, "ngFor", "ngForOf"], [1, "list-item-ghost"], [1, "icon-ghost", 3, "appearance"], [1, "text-ghost"], [3, "count"]], template: function ListItemGhostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListItemGhostComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"]], styles: ["\n    .list-item-ghost {\n      position: relative;\n      text-align: left;\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 8px;\n    }\n\n    .list-item-ghost .icon-ghost {\n      margin-right: 15px;\n    }\n\n    .list-item-ghost .icon-ghost .loader.circle {\n      width: 35px;\n      height: 35px;\n      margin: 0;\n    }\n\n    .list-item-ghost .text-ghost {\n      flex-grow: 2;\n      line-height: 10px;\n    }\n\n    .list-item-ghost .text-ghost .loader {\n      height: 8px;\n      margin: 0 0 5px 0;\n    }\n\n    .list-item-ghost .text-ghost .loader:first-child {\n      width: 70%;\n    }\n\n    .list-item-ghost .text-ghost .loader:nth-child(2) {\n      width: 90%;\n    }\n\n    .list-item-ghost .text-ghost .loader:nth-child(3) {\n      width: 50%;\n    }\n  "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemGhostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-list-item-ghost',
                template: `
    <div *ngFor="let n of numItems" class="list-item-ghost">
      <ngx-skeleton-loader class="icon-ghost" [appearance]="'circle'"></ngx-skeleton-loader>
      <div class="text-ghost">
        <ngx-skeleton-loader [count]="3"></ngx-skeleton-loader>
      </div>
    </div>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`
    .list-item-ghost {
      position: relative;
      text-align: left;
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 8px;
    }

    .list-item-ghost .icon-ghost {
      margin-right: 15px;
    }

    .list-item-ghost .icon-ghost .loader.circle {
      width: 35px;
      height: 35px;
      margin: 0;
    }

    .list-item-ghost .text-ghost {
      flex-grow: 2;
      line-height: 10px;
    }

    .list-item-ghost .text-ghost .loader {
      height: 8px;
      margin: 0 0 5px 0;
    }

    .list-item-ghost .text-ghost .loader:first-child {
      width: 70%;
    }

    .list-item-ghost .text-ghost .loader:nth-child(2) {
      width: 90%;
    }

    .list-item-ghost .text-ghost .loader:nth-child(3) {
      width: 50%;
    }
  `]
            }]
    }], null, { count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Yzsv":
/*!************************************************!*\
  !*** ./src/app/shared/utils/to-latest-from.ts ***!
  \************************************************/
/*! exports provided: toLatestFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLatestFrom", function() { return toLatestFrom; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

function toLatestFrom(secondary$, initialValue) {
    return (o$) => {
        const _secondary$ = initialValue !== undefined ? secondary$ : secondary$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(initialValue));
        return o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["withLatestFrom"])(_secondary$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => v[1]));
    };
}


/***/ }),

/***/ "a8G2":
/*!****************************************!*\
  !*** ./src/app/shared/utils/to-int.ts ***!
  \****************************************/
/*! exports provided: toInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

function toInt(base = 10) {
    return (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => parseInt(v, base)));
}


/***/ }),

/***/ "dvYp":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/shared/counter-display.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CounterDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDisplayComponent", function() { return CounterDisplayComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_utils_to_array_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/to-array.pipe */ "86EH");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");






function CounterDisplayComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r1);
} }
class CounterDisplayComponent {
    constructor() {
        this.count$ = rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
    }
}
CounterDisplayComponent.ɵfac = function CounterDisplayComponent_Factory(t) { return new (t || CounterDisplayComponent)(); };
CounterDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CounterDisplayComponent, selectors: [["rxa-counter-display"]], hostAttrs: [1, "count"], inputs: { count$: "count$" }, decls: 3, vars: 5, consts: [["class", "position", 4, "ngFor", "ngForOf"], [1, "position"], [1, "digit", "static"]], template: function CounterDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CounterDisplayComponent_span_0_Template, 3, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "toArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "push");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.count$)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_shared_utils_to_array_pipe__WEBPACK_IMPORTED_MODULE_3__["ToArrayPipe"], _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_4__["PushPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CounterDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rxa-counter-display',
                template: `
    <span class="position" *ngFor="let d of count$ | push | toArray">
        <span class="digit static">{{ d }}</span>
    </span>
  `,
                host: {
                    class: 'count'
                }
            }]
    }], null, { count$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "jRUy":
/*!************************************************!*\
  !*** ./src/app/shared/ghost-elements/index.ts ***!
  \************************************************/
/*! exports provided: FormGhostComponent, ListItemGhostComponent, GhostElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-ghost/form-ghost.component */ "tsx4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGhostComponent", function() { return _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_0__["FormGhostComponent"]; });

/* harmony import */ var _list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item-ghost/list-item-ghost.component */ "SPfS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemGhostComponent", function() { return _list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_1__["ListItemGhostComponent"]; });

/* harmony import */ var _ghost_elements_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ghost-elements.module */ "jd1k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GhostElementsModule", function() { return _ghost_elements_module__WEBPACK_IMPORTED_MODULE_2__["GhostElementsModule"]; });






/***/ }),

/***/ "jd1k":
/*!****************************************************************!*\
  !*** ./src/app/shared/ghost-elements/ghost-elements.module.ts ***!
  \****************************************************************/
/*! exports provided: GhostElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostElementsModule", function() { return GhostElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");
/* harmony import */ var _list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item-ghost/list-item-ghost.component */ "SPfS");
/* harmony import */ var _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-ghost/form-ghost.component */ "tsx4");







const DECLARATIONS = [
    _list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_4__["ListItemGhostComponent"],
    _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_5__["FormGhostComponent"]
];
const IMPORTS = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"],
    _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsModule"],
    _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["PushModule"],
    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"]
];
class GhostElementsModule {
}
GhostElementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GhostElementsModule });
GhostElementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GhostElementsModule_Factory(t) { return new (t || GhostElementsModule)(); }, imports: [[IMPORTS], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["PushModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GhostElementsModule, { declarations: [_list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_4__["ListItemGhostComponent"],
        _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_5__["FormGhostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["PushModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"]], exports: [_list_item_ghost_list_item_ghost_component__WEBPACK_IMPORTED_MODULE_4__["ListItemGhostComponent"],
        _form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_5__["FormGhostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["TemplateModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["PushModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GhostElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [IMPORTS],
                exports: [DECLARATIONS, IMPORTS]
            }]
    }], null, null); })();


/***/ }),

/***/ "kAS6":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/debug-helper/rendering-work/rendering-work/rendering-work.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RenderingWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingWorkComponent", function() { return RenderingWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



function RenderingWorkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class RenderingWorkComponent {
    set factor(factor) {
        this.items = new Array(factor * 100).fill(1).map((v, index) => index);
    }
}
RenderingWorkComponent.ɵfac = function RenderingWorkComponent_Factory(t) { return new (t || RenderingWorkComponent)(); };
RenderingWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderingWorkComponent, selectors: [["rxa-rendering-work"]], inputs: { factor: "factor" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function RenderingWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RenderingWorkComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderingWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-rendering-work',
                template: ` <div *ngFor="let item of items">{{ item }}</div> `,
            }]
    }], null, { factor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tsx4":
/*!**************************************************************************!*\
  !*** ./src/app/shared/ghost-elements/form-ghost/form-ghost.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormGhostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGhostComponent", function() { return FormGhostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");




function FormGhostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormGhostComponent {
    constructor() {
        this.numItems = [0];
    }
    set count(n) {
        this.numItems = Array(n < 1 ? 1 : n).fill(0);
    }
}
FormGhostComponent.ɵfac = function FormGhostComponent_Factory(t) { return new (t || FormGhostComponent)(); };
FormGhostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormGhostComponent, selectors: [["rxa-form-ghost"]], inputs: { count: "count" }, decls: 1, vars: 1, consts: [["class", "form-ghost", 4, "ngFor", "ngForOf"], [1, "form-ghost"], [1, "input-ghost"], [1, "button-ghost"]], template: function FormGhostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormGhostComponent_div_0_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"]], styles: ["\n    .form-ghost {\n      position: relative;\n      text-align: left;\n      width: 100%;\n    }\n\n    .form-ghost .button-ghost {\n      width: 50px;\n      float: right;\n    }\n\n    .form-ghost .input-ghost {\n      float: left;\n      line-height: 10px;\n      width: 100%;\n    }\n\n    .form-ghost .input-ghost .loader {\n      border: 1px solid lightgray;\n    }\n\n    .form-ghost .input-ghost:first-child {\n      width: 48%;\n      padding-right: 5px;\n    }\n\n    .form-ghost .input-ghost:nth-child(2) {\n       width: 48%;\n       float: right;\n    }\n  "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGhostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-form-ghost',
                template: `
    <div *ngFor="let n of numItems" class="form-ghost">
      <ngx-skeleton-loader class="input-ghost"></ngx-skeleton-loader>
      <ngx-skeleton-loader class="input-ghost"></ngx-skeleton-loader>
      <ngx-skeleton-loader class="input-ghost"></ngx-skeleton-loader>
      <ngx-skeleton-loader class="input-ghost"></ngx-skeleton-loader>
      <ngx-skeleton-loader class="button-ghost"></ngx-skeleton-loader>
    </div>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`
    .form-ghost {
      position: relative;
      text-align: left;
      width: 100%;
    }

    .form-ghost .button-ghost {
      width: 50px;
      float: right;
    }

    .form-ghost .input-ghost {
      float: left;
      line-height: 10px;
      width: 100%;
    }

    .form-ghost .input-ghost .loader {
      border: 1px solid lightgray;
    }

    .form-ghost .input-ghost:first-child {
      width: 48%;
      padding-right: 5px;
    }

    .form-ghost .input-ghost:nth-child(2) {
       width: 48%;
       float: right;
    }
  `]
            }]
    }], null, { count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vLMS":
/*!***********************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/shared/model.ts ***!
  \***********************************************************************/
/*! exports provided: INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
const INITIAL_STATE = {
    isTicking: false,
    count: 0,
    countUp: true,
    tickSpeed: 200,
    countDiff: 1,
};


/***/ }),

/***/ "vtTQ":
/*!***********************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/shared/utils.ts ***!
  \***********************************************************************/
/*! exports provided: updateCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCount", function() { return updateCount; });
function updateCount(s) {
    return s.count + ((s.countUp ? 1 : -1) * s.countDiff);
}


/***/ })

}]);
//# sourceMappingURL=common.js.map