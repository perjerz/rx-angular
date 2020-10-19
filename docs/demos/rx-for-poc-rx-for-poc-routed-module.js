(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-for-poc-rx-for-poc-routed-module"],{

/***/ "/HWY":
/*!********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/rx-for-poc.routes.ts ***!
  \********************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.component */ "PBN0");

const ROUTES = [
    {
        path: '',
        component: _parent_component__WEBPACK_IMPORTED_MODULE_0__["RxForContainerComponent"]
    }
];


/***/ }),

/***/ "2NQe":
/*!**************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value/value.module.ts ***!
  \**************************************************************************/
/*! exports provided: ValueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueModule", function() { return ValueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _dirty_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dirty-checks */ "ApVg");
/* harmony import */ var _value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value.component */ "c9zg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils.module */ "MQax");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");









const DEPRECATIONS = [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]];
class ValueModule {
}
ValueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ValueModule });
ValueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ValueModule_Factory(t) { return new (t || ValueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValueModule, { declarations: [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]], exports: [_value_component__WEBPACK_IMPORTED_MODULE_2__["ValueComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...DEPRECATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
                    _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _dirty_checks__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksModule"]
                ],
                exports: [...DEPRECATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "5WxO":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/rx-for-poc.routed.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: RxForPocRoutedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForPocRoutedModule", function() { return RxForPocRoutedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_for_poc_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-for-poc.routes */ "/HWY");
/* harmony import */ var _rx_for_poc_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-for-poc.module */ "zXbO");






class RxForPocRoutedModule {
}
RxForPocRoutedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxForPocRoutedModule });
RxForPocRoutedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxForPocRoutedModule_Factory(t) { return new (t || RxForPocRoutedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_for_poc_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
            _rx_for_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxForPocModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxForPocRoutedModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _rx_for_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxForPocModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForPocRoutedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_rx_for_poc_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
                    _rx_for_poc_module__WEBPACK_IMPORTED_MODULE_3__["RxForPocModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5ZLb":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/poc5-locv.directive.ts ***!
  \**********************************************************************************************/
/*! exports provided: Poc5Locv5ViewContext, Poc5Locv5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc5Locv5ViewContext", function() { return Poc5Locv5ViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc5Locv5", function() { return Poc5Locv5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc5Locv5ViewContext {
    constructor($implicit, pocLet, index, count) {
        this.$implicit = $implicit;
        this.pocLet = pocLet;
        this.index = index;
        this.count = count;
        this.localVariableProjections = {};
    }
    get first() {
        return this.index === 0;
    }
    get last() {
        return this.index === this.count - 1;
    }
    get even() {
        return this.index % 2 === 0;
    }
    get odd() {
        return !this.even;
    }
    get customVariable() {
        return Object.entries(this.localVariableProjections)
            .reduce((acc, [name, fn]) => {
            return Object.assign(Object.assign({}, acc), { [name]: fn(this) });
        }, {});
    }
}
class Poc5Locv5 {
    constructor(cdRef, nextTemplateRef, viewContainerRef, iterableDiffers) {
        this.cdRef = cdRef;
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.iterableDiffers = iterableDiffers;
        this.differ = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
    }
    set poc5LocVLocalVariableProjections(o) {
        this._localVariableProjections = o;
    }
    set poc5LocVIterableTrackBy(fn) {
        this._trackByFn = fn;
    }
    set poc5LocV(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.subscription = this.values$.pipe(
        // the actual values arrive here
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => {
            // set helper variable for applyChanges method
            this.values = value;
            // set new differ if there is none yet
            if (!this.differ && value) {
                this.differ = this.iterableDiffers.find(value).create(this._trackByFn);
            }
        }), 
        // if there is no differ, we don't need to apply changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !!this.differ), 
        // apply differ -> return changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this.differ.diff(value)), 
        // filter out no changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(changes => !!changes))
            .subscribe(changes => {
            this.applyChanges(changes);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    applyChanges(changes) {
        // behavior like *ngFor
        const insertTuples = [];
        // TODO: dig into `IterableDiffer`
        changes.forEachOperation((changeRecord, previousIndex, currentIndex) => {
            if (changeRecord.previousIndex == null) {
                // this is basically the first run
                // create the embedded view for each value with default values
                const view = this.viewContainerRef.createEmbeddedView(this.nextTemplateRef, new Poc5Locv5ViewContext(null, this.values, -1, -1), currentIndex === null ? undefined : currentIndex);
                insertTuples.push({
                    view,
                    record: changeRecord
                });
            }
            else if (currentIndex == null) {
                this.viewContainerRef.remove(previousIndex === null ? undefined : previousIndex);
            }
            else if (previousIndex !== null) {
                const view = this.viewContainerRef.get(previousIndex);
                this.viewContainerRef.move(view, currentIndex);
                insertTuples.push({
                    view,
                    record: changeRecord
                });
            }
        });
        for (let i = 0; i < insertTuples.length; i++) {
            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
        }
        for (let i = 0, ilen = this.viewContainerRef.length; i < ilen; i++) {
            const viewRef = this.viewContainerRef.get(i);
            viewRef.context.localVariableProjections = this._localVariableProjections;
            viewRef.context.index = i;
            viewRef.context.count = ilen;
            viewRef.context.pocLet = this.values;
        }
        changes.forEachIdentityChange((record) => {
            const viewRef = this.viewContainerRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
            viewRef.detectChanges();
        });
    }
    _perViewChange(view, record) {
        view.context.$implicit = record.item;
        view.detectChanges();
    }
}
Poc5Locv5.ɵfac = function Poc5Locv5_Factory(t) { return new (t || Poc5Locv5)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"])); };
Poc5Locv5.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc5Locv5, selectors: [["", "poc5LocV", ""]], inputs: { poc5LocVLocalVariableProjections: "poc5LocVLocalVariableProjections", poc5LocVIterableTrackBy: "poc5LocVIterableTrackBy", poc5LocV: "poc5LocV" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc5Locv5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc5LocV]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }]; }, { poc5LocVLocalVariableProjections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc5LocVIterableTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc5LocV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6EsC":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/rx-for-value.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RxForValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForValueComponent", function() { return RxForValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");











const _c0 = function (a0, a1) { return { red: a0, green: a1 }; };
function RxForValueComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !v_r1, v_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r1 ? "check" : "highlight_off", "");
} }
class RxForValueComponent {
    constructor(state) {
        this.state = state;
        this.value$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => Object(_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(s.item.value, 0.5)));
    }
    set value(o) {
        this.state.connect('item', Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(o) ? o : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(o));
    }
}
RxForValueComponent.ɵfac = function RxForValueComponent_Factory(t) { return new (t || RxForValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"])); };
RxForValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxForValueComponent, selectors: [["rxa-rx-for-value"]], hostAttrs: [1, "d-flex", "justify-content-center", "align-items-center", "flex-column", "w-100", "m-1", "p-1", "dh-embedded-view"], inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], decls: 2, vars: 1, consts: [["class", "item", 3, "ngClass", 4, "rxLet"], [1, "item", 3, "ngClass"]], template: function RxForValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RxForValueComponent_mat_icon_0_Template, 2, 5, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.value$);
    } }, directives: [_libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_6__["DirtyChecksComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".item.red[_ngcontent-%COMP%] {\n      color: red;\n    }\n    .item.green[_ngcontent-%COMP%] {\n      color: green;\n    }\n    .value.number[_ngcontent-%COMP%] {\n    }\n    .value.string[_ngcontent-%COMP%] {\n    }\n    .value.object[_ngcontent-%COMP%] {\n    }\n    .value.array[_ngcontent-%COMP%] {\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-rx-for-value',
                template: `
    <mat-icon class="item" [ngClass]="{red:!v, green:v}" *rxLet="value$; let v">
      {{v ? 'check' : 'highlight_off'}}</mat-icon>
    <rxa-dirty-check></rxa-dirty-check>
  `,
                styles: [`
    .item.red {
      color: red;
    }
    .item.green {
      color: green;
    }
    .value.number {
    }
    .value.string {
    }
    .value.object {
    }
    .value.array {
    }
  `],
                host: {
                    class: 'd-flex justify-content-center align-items-center flex-column w-100 m-1 p-1 dh-embedded-view'
                },
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "86EH":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/to-array.pipe.ts ***!
  \***********************************************/
/*! exports provided: ToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class ToArrayPipe {
    transform(value) {
        if (typeof value === 'number') {
            return new Array(value).fill(0).map((_, idx) => idx);
        }
        return value != null ? value.toString().split('') : [];
    }
}
ToArrayPipe.ɵfac = function ToArrayPipe_Factory(t) { return new (t || ToArrayPipe)(); };
ToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toArray", type: ToArrayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toArray'
            }]
    }], null, null); })();


/***/ }),

/***/ "9NtR":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/poc6-locv.directive.ts ***!
  \**********************************************************************************************/
/*! exports provided: Poc6Locv6ViewContext, Poc6Locv6Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc6Locv6ViewContext", function() { return Poc6Locv6ViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc6Locv6Directive", function() { return Poc6Locv6Directive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc6Locv6ViewContext {
    constructor($implicit, pocLet, index, count) {
        this.$implicit = $implicit;
        this.pocLet = pocLet;
        this.index = index;
        this.count = count;
        this.localVariableProjections = {};
    }
    get first() {
        return this.index === 0;
    }
    get last() {
        return this.index === this.count - 1;
    }
    get even() {
        return this.index % 2 === 0;
    }
    get odd() {
        return !this.even;
    }
    get customVariable() {
        return Object.entries(this.localVariableProjections)
            .reduce((acc, [name, fn]) => {
            return Object.assign(Object.assign({}, acc), { [name]: fn(this) });
        }, {});
    }
}
class Poc6Locv6Directive {
    constructor(cdRef, nextTemplateRef, viewContainerRef, iterableDiffers) {
        this.cdRef = cdRef;
        this.nextTemplateRef = nextTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.iterableDiffers = iterableDiffers;
        this.differ = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    set poc6LocVLocalVariableProjections(o) {
        this._localVariableProjections = o;
    }
    set poc6LocVIterableTrackBy(fn) {
        this._trackByFn = fn;
    }
    set poc6LocV(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.subscription = this.values$.pipe(
        // the actual values arrive here
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => {
            // set helper variable for applyChanges method
            this.values = value;
            // set new differ if there is none yet
            if (!this.differ && value) {
                this.differ = this.iterableDiffers.find(value).create(this._trackByFn);
            }
        }), 
        // if there is no differ, we don't need to apply changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !!this.differ), 
        // apply differ -> return changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this.differ.diff(value)), 
        // filter out no changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(changes => !!changes))
            .subscribe(changes => {
            this.applyChanges(changes);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    applyChanges(changes) {
        // behavior like *ngFor
        const insertTuples = [];
        // TODO: dig into `IterableDiffer`
        changes.forEachOperation((changeRecord, previousIndex, currentIndex) => {
            if (changeRecord.previousIndex == null) {
                // this is basically the first run
                // create the embedded view for each value with default values
                const view = this.viewContainerRef.createEmbeddedView(this.nextTemplateRef, new Poc6Locv6ViewContext(null, this.values, -1, -1), currentIndex === null ? undefined : currentIndex);
                insertTuples.push({
                    view,
                    record: changeRecord
                });
            }
            else if (currentIndex == null) {
                this.viewContainerRef.remove(previousIndex === null ? undefined : previousIndex);
            }
            else if (previousIndex !== null) {
                const view = this.viewContainerRef.get(previousIndex);
                this.viewContainerRef.move(view, currentIndex);
                insertTuples.push({
                    view,
                    record: changeRecord
                });
            }
        });
        for (let i = 0; i < insertTuples.length; i++) {
            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
        }
        for (let i = 0, ilen = this.viewContainerRef.length; i < ilen; i++) {
            const viewRef = this.viewContainerRef.get(i);
            viewRef.context.localVariableProjections = this._localVariableProjections;
            viewRef.context.index = i;
            viewRef.context.count = ilen;
            viewRef.context.pocLet = this.values;
        }
        changes.forEachIdentityChange((record) => {
            const viewRef = this.viewContainerRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
            viewRef.detectChanges();
        });
    }
    _perViewChange(view, record) {
        view.context.$implicit = record.item;
        view.detectChanges();
    }
}
Poc6Locv6Directive.ɵfac = function Poc6Locv6Directive_Factory(t) { return new (t || Poc6Locv6Directive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"])); };
Poc6Locv6Directive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc6Locv6Directive, selectors: [["", "poc6LocV", ""]], inputs: { poc6LocVLocalVariableProjections: "poc6LocVLocalVariableProjections", poc6LocVIterableTrackBy: "poc6LocVIterableTrackBy", poc6LocV: "poc6LocV" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc6Locv6Directive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc6LocV]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }]; }, { poc6LocVLocalVariableProjections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc6LocVIterableTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc6LocV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "E1cq":
/*!*********************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/utils.ts ***!
  \*********************************************************************/
/*! exports provided: rand, randArray, immutableIncArr, mutableIncArr, immutableArr, mutableArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randArray", function() { return randArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immutableIncArr", function() { return immutableIncArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutableIncArr", function() { return mutableIncArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immutableArr", function() { return immutableArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutableArr", function() { return mutableArr; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

const children1 = 10;
const children2 = 3;
const rand = (n = 2) => {
    // tslint:disable-next-line:no-bitwise
    return ~~(Math.random() * n);
};
const randArray = (n = 6) => {
    return Array(n).fill(0).map((_, idx) => ({ id: idx % n, value: rand() }));
};
const immutableIncArr = (n = children1) => (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["scan"])((a, i, idx) => {
    const arr = randArray(children2);
    const value = rand(100);
    if (i === 1) {
        a[idx % n] = { id: idx % n, value, arr };
    }
    else if (i === 0) {
        const id = rand(1);
        a[id] = { id, value, arr };
    }
    else {
        a.splice(idx % n, 1);
    }
    return a;
}, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["share"])());
const mutableIncArr = (n = children1) => {
    return (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["scan"])((a, i, idx) => {
        const arr = randArray(children2);
        a[idx % n].value = rand();
        a[idx % n].arr = arr;
        return a;
    }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["share"])());
};
const immutableArr = (n = children1) => (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => Array(n).fill(0).map((_, idx) => ({ id: idx % n, value: rand(), arr: randArray(children2) }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["share"])());
const mutableArr = (n = children1) => {
    const arr = Array(n);
    return (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(v => arr.forEach((i, idx) => {
        i.value = rand();
        i.arr = randArray(children2);
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["share"])());
};


/***/ }),

/***/ "E3aN":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/poc2-for.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: Poc2ForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc2ForDirective", function() { return Poc2ForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc2ForDirective {
    constructor(cdRef, templateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.embeddedViews = new Map();
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.poc2ForDistinctBy = (a, b) => a === b;
        this.updateItem = (item) => {
            const key = item[this.poc2ForTrackBy];
            let existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            if (!existingItem) {
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, { $implicit: item });
                existingItem = { view, item };
                this.embeddedViews.set(key, existingItem);
            }
            else {
                existingItem.view.context.$implicit = item;
            }
            existingItem.view.detectChanges();
        };
    }
    set poc2For(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.subscription = this.values$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(arr => arr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(i => i[this.poc2ForTrackBy]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(o$ => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(this.poc2ForDistinctBy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.updateItem))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])())
            .subscribe();
    }
    ngOnDestroy() {
        this.viewContainerRef.clear();
        this.subscription.unsubscribe();
    }
}
Poc2ForDirective.ɵfac = function Poc2ForDirective_Factory(t) { return new (t || Poc2ForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc2ForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc2ForDirective, selectors: [["", "poc2For", ""]], inputs: { poc2For: "poc2For", poc2ForTrackBy: "poc2ForTrackBy", poc2ForDistinctBy: "poc2ForDistinctBy" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc2ForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc2For]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc2For: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc2ForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc2ForDistinctBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "H/Xh":
/*!********************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/model.ts ***!
  \********************************************************************************/
/*! exports provided: RxForViewContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForViewContext", function() { return RxForViewContext; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");


class RxForViewContext {
    constructor(_$implicit, rxFor, distinctBy = (a, b) => a === b) {
        this._$implicit = _$implicit;
        this.rxFor = rxFor;
        this.distinctBy = distinctBy;
        this._record = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this._record$ = this._record.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(this.distinctBy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        this._index = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](-1);
        this.select = (props) => {
            return this._record$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])(...props));
        };
        // tslint:disable-next-line:no-unused-expression
        this._record.next(_$implicit);
    }
    set index(index) {
        this._index.next(index);
    }
    set $implicit(record) {
        this._implicit = record;
        this._record.next(record);
    }
    get $implicit() {
        return this._implicit;
    }
    get record$() {
        return this._record$;
    }
}


/***/ }),

/***/ "Ih2C":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/poc1-for.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: Poc1ForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc1ForDirective", function() { return Poc1ForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc1ForDirective {
    constructor(cdRef, templateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.embeddedViews = new Map();
        this.values$ = this.observables$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.updateItem = (item, idx) => {
            const key = item[this.poc1ForTrackBy];
            let existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            if (!existingItem) {
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, { $implicit: item }, idx);
                existingItem = { view, item };
                this.embeddedViews.set(key, existingItem);
            }
            else {
                existingItem.view.context.$implicit = item;
            }
            existingItem.view.detectChanges();
        };
    }
    set poc1For(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.subscription = this.values$
            .subscribe(arr => arr.forEach(this.updateItem));
    }
    ngOnDestroy() {
        this.viewContainerRef.clear();
        this.subscription.unsubscribe();
    }
}
Poc1ForDirective.ɵfac = function Poc1ForDirective_Factory(t) { return new (t || Poc1ForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc1ForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc1ForDirective, selectors: [["", "poc1For", ""]], inputs: { poc1For: "poc1For", poc1ForTrackBy: "poc1ForTrackBy" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc1ForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc1For]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc1For: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc1ForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MQax":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/utils.module.ts ***!
  \**********************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _to_array_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-array.pipe */ "86EH");




class UtilsModule {
}
UtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilsModule });
UtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilsModule_Factory(t) { return new (t || UtilsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilsModule, { declarations: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_to_array_pipe__WEBPACK_IMPORTED_MODULE_2__["ToArrayPipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PBN0":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/parent.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RxForContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForContainerComponent", function() { return RxForContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "E1cq");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_for_value_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rx-for-value.component */ "6EsC");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _rx_for_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rx-for.directive */ "fNOO");















function RxForContainerComponent_div_22_rxa_visualizer_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-rx-for-value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r7);
} }
function RxForContainerComponent_div_22_rxa_visualizer_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RxForContainerComponent_div_22_rxa_visualizer_10_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", value_r5.arr)("ngForTrackBy", ctx_r4.trackById);
} }
function RxForContainerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Native Angular, *ngFor trackBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeOneClick$.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_22_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeAllClick$.next(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Change all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_22_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleIntervalClick$.next(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " toggel interval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RxForContainerComponent_div_22_rxa_visualizer_10_Template, 2, 2, "rxa-visualizer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx_r2.array$))("ngForTrackBy", ctx_r2.trackById);
} }
function RxForContainerComponent_div_23_rxa_visualizer_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-rx-for-value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const v$_r17 = ctx.record$;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v$_r17);
} }
const _c0 = function () { return ["arr"]; };
function RxForContainerComponent_div_23_rxa_visualizer_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RxForContainerComponent_div_23_rxa_visualizer_10_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const select_r15 = ctx.select;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxFor", select_r15(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)))("rxForTrackBy", ctx_r12.tK)("rxForDistinctBy", ctx_r12.dK);
} }
function RxForContainerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RxAngular, *rxFor trackBy, distinctBy, select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeOneClick$.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " unpatched update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeAllClick$.next(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " unpatched Change all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxForContainerComponent_div_23_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toggleIntervalClick$.next(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " unpatched toggel interval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RxForContainerComponent_div_23_rxa_visualizer_10_Template, 2, 4, "rxa-visualizer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxFor", ctx_r3.array$);
} }
class RxForContainerComponent {
    constructor() {
        this.tK = 'id';
        this.displayStates = {
            native: 0,
            nativeReactive: 1,
            rxAngularReactive: 2,
            all: 3
        };
        this.changeOneClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeAllClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toggleIntervalClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.array$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.changeOneClick$.pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["immutableIncArr"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.toggleIntervalClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(a => !a, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(b => b ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100) : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])), this.changeAllClick$).pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["immutableArr"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.load$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.trackById = (i) => i.id;
        this.dK = (a, b) => a.value === b.value;
    }
}
RxForContainerComponent.ɵfac = function RxForContainerComponent_Factory(t) { return new (t || RxForContainerComponent)(); };
RxForContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxForContainerComponent, selectors: [["rxa-cd-embedded-view-parent06"]], decls: 24, vars: 6, consts: [["visualizerHeader", ""], ["name", "visibleExamples", "aria-label", "Visible Examples", 3, "value"], ["group", "matButtonToggleGroup"], [3, "value"], ["matInput", "", 3, "input"], ["load", ""], [1, "row", "w-100"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], ["mat-raised-button", "", 3, "click"], ["viewType", "embedded-view", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["viewType", "embedded-view"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-raised-button", "", 3, "unpatch", "click"], ["viewType", "embedded-view", 4, "rxFor"], [4, "rxFor", "rxForTrackBy", "rxForDistinctBy"]], template: function RxForContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " rxFor POC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nested Structures And Local Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle-group", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "RxAngular *rxFor trackBy, distinctBy, select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Work Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RxForContainerComponent_Template_input_input_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.load$.next(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RxForContainerComponent_div_22_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RxForContainerComponent_div_23_Template, 11, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.native);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.rxAngularReactive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value === ctx.displayStates.native || _r0.value === ctx.displayStates.all);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value === ctx.displayStates.rxAngularReactive || _r0.value === ctx.displayStates.all);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["VisualizerComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _rx_for_value_component__WEBPACK_IMPORTED_MODULE_11__["RxForValueComponent"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_12__["UnpatchEventsDirective"], _rx_for_directive__WEBPACK_IMPORTED_MODULE_13__["RxForDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n\n  "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-cd-embedded-view-parent06',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <h2>
          rxFor POC
          <small>Nested Structures And Local Variables</small>
        </h2>
        <div>
          <mat-button-toggle-group name="visibleExamples"
                                   aria-label="Visible Examples"
                                   [value]="displayStates.all"
                                   #group="matButtonToggleGroup">
            <mat-button-toggle [value]="displayStates.native">Native</mat-button-toggle>
            <mat-button-toggle [value]="displayStates.rxAngularReactive">RxAngular *rxFor trackBy, distinctBy, select
            </mat-button-toggle>
            <mat-button-toggle [value]="displayStates.all">All</mat-button-toggle>
          </mat-button-toggle-group>
          <br/>
          <mat-form-field>
            <label>Work Load</label>
            <input matInput #load (input)="load$.next(load.value)">
          </mat-form-field>

        </div>
      </ng-container>

      <div class="row w-100">
        <!--  -->
        <div class="col-sm-6" *ngIf="group.value === displayStates.native || group.value === displayStates.all">
          <h2>Native Angular, *ngFor trackBy</h2>
          <p>
            <button mat-raised-button (click)="changeOneClick$.next(1)">
              update
            </button>
            <button mat-raised-button (click)="changeAllClick$.next(10)">
              Change all
            </button>
            <button mat-raised-button (click)="toggleIntervalClick$.next(10)">
              toggel interval
            </button>
          </p>
          <rxa-visualizer viewType="embedded-view" *ngFor="let value of array$ | async;trackBy: trackById">

              <ng-container *ngFor="let i of value.arr; trackBy: trackById">
                <rxa-rx-for-value [value]="i"></rxa-rx-for-value>
              </ng-container>
          </rxa-visualizer>
        </div>
        <div class="col-sm-6"
             *ngIf="group.value === displayStates.rxAngularReactive || group.value === displayStates.all">
          <h2>RxAngular, *rxFor trackBy, distinctBy, select</h2>
          <p>
            <button mat-raised-button [unpatch] (click)="changeOneClick$.next(1)">
              unpatched update
            </button>
            <button mat-raised-button [unpatch] (click)="changeAllClick$.next(10)">
              unpatched Change all
            </button>
            <button mat-raised-button [unpatch] (click)="toggleIntervalClick$.next(10)">
              unpatched toggel interval
            </button>
          </p>
          <rxa-visualizer viewType="embedded-view" *rxFor="array$; let i; let r$ = record$; let select = select">
            <ng-container *rxFor="select(['arr']); trackBy: tK; distinctBy:dK; let v$ = record$;">
              <rxa-rx-for-value [value]="v$"></rxa-rx-for-value>
            </ng-container>
          </rxa-visualizer>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`

  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "V688":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/poc6-locv2.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: Poc6Locv2ViewContext, Poc6Locv2Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc6Locv2ViewContext", function() { return Poc6Locv2ViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poc6Locv2Directive", function() { return Poc6Locv2Directive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class Poc6Locv2ViewContext {
    constructor($value$) {
        this.$value$ = $value$;
        this.$select = (props) => {
            return this.$value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])(...props));
        };
        this.$prop_arr$ = $value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('arr'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
}
class Poc6Locv2Directive {
    constructor(cdRef, templateRef, viewContainerRef) {
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.embeddedViews = new Map();
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.poc6LocV2TrackBy = 'id';
        this.poc6LocV2DistinctBy = (a, b) => a.value === b.value;
        this.updateItem = (key, $value$) => {
            let existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            if (!existingItem) {
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, new Poc6Locv2ViewContext($value$));
                existingItem = { view, item: $value$ };
                this.embeddedViews.set(key, existingItem);
                existingItem.view.detectChanges();
            }
        };
    }
    set poc6LocV2(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    ngOnInit() {
        this.subscription = this.values$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(arr => arr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(i => i[this.poc6LocV2TrackBy]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(o$ => {
            const distincted$ = o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(this.poc6LocV2DistinctBy));
            this.updateItem(o$.key, distincted$);
            return distincted$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])())
            .subscribe();
    }
    ngOnDestroy() {
        this.viewContainerRef.clear();
        this.subscription.unsubscribe();
    }
}
Poc6Locv2Directive.ɵfac = function Poc6Locv2Directive_Factory(t) { return new (t || Poc6Locv2Directive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
Poc6Locv2Directive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Poc6Locv2Directive, selectors: [["", "poc6LocV2", ""]], inputs: { poc6LocV2: "poc6LocV2", poc6LocV2TrackBy: "poc6LocV2TrackBy", poc6LocV2DistinctBy: "poc6LocV2DistinctBy" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Poc6Locv2Directive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[poc6LocV2]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { poc6LocV2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc6LocV2TrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poc6LocV2DistinctBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "c9zg":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/debug-helper/value-provider/value/value.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "Twlx");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
// tslint:disable:no-unused-expression










const _c0 = function (a0, a1) { return { red: a0, green: a1 }; };
function ValueComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !v_r1, v_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r1 ? "check" : "highlight_off");
} }
class ValueComponent {
    constructor(state) {
        this.state = state;
        this.value$ = this.state.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(s.item.value, 0.5)));
    }
    set value(o) {
        this.state.connect('item', Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(o) ? o : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(o));
    }
}
ValueComponent.ɵfac = function ValueComponent_Factory(t) { return new (t || ValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"])); };
ValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueComponent, selectors: [["rxa-value"]], inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], decls: 1, vars: 1, consts: [["class", "item", 3, "ngClass", 4, "rxLet"], [1, "item", 3, "ngClass"]], template: function ValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValueComponent_mat_icon_0_Template, 2, 5, "mat-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.value$);
    } }, directives: [_libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".item.red[_ngcontent-%COMP%] {\n      color: red;\n    }\n    .item.green[_ngcontent-%COMP%] {\n      color: green;\n    }\n    .value.number[_ngcontent-%COMP%] {\n    }\n    .value.string[_ngcontent-%COMP%] {\n    }\n    .value.object[_ngcontent-%COMP%] {\n    }\n    .value.array[_ngcontent-%COMP%] {\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'rxa-value',
                template: `
    <mat-icon class="item" [ngClass]="{red:!v, green:v}" *rxLet="value$; let v">{{v ? 'check' : 'highlight_off'}}</mat-icon>`,
                styles: [`
    .item.red {
      color: red;
    }
    .item.green {
      color: green;
    }
    .value.number {
    }
    .value.string {
    }
    .value.object {
    }
    .value.array {
    }
  `],
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fNOO":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/rx-for.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: RxForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForDirective", function() { return RxForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "H/Xh");
/* harmony import */ var _shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/rx-effects.service */ "DLaK");







class RxForDirective {
    constructor(rxEffects, cdRef, templateRef, viewContainerRef, iterableDiffers) {
        this.rxEffects = rxEffects;
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.iterableDiffers = iterableDiffers;
        this.evMap = new Map();
        this.differ = null;
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.values$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.records$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => this.values$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(arr => arr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(r => r[this._rxTrackBy]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((records, o$) => (Object.assign(Object.assign({}, records), { [o$.key]: o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(this.rxForDistinctBy)) })), {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ refCount: true, bufferSize: 1 })));
        this._rxTrackBy = 'id';
        this.rxForDistinctBy = (a, b) => a.value === b.value;
    }
    set rxFor(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set rxForTrackBy(key) {
        if (key) {
            this._rxTrackBy = key;
        }
        else {
            this._rxTrackBy = 'id';
        }
    }
    initDiffer(iterable = []) {
        console.log('initDiffer');
        this.differ = this.iterableDiffers.find(iterable).create((index, item) => item[this._rxTrackBy]);
        this.rxEffects.hold(this.values$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(iterable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(i => ({ diff: this.differ.diff(i), iterable: i })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(r => r.diff != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1)), (r) => this.applyChanges(r.diff, r.iterable));
    }
    ngOnInit() {
        this.rxEffects.hold(this.values$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)), (value) => this.initDiffer(value));
    }
    ngOnDestroy() {
        this.viewContainerRef.clear();
    }
    applyChanges(changes, iterable) {
        console.log('changes', changes);
        changes.forEachOperation((r, previousIndex, currentIndex) => {
            const idx = currentIndex == null ? undefined : currentIndex;
            const recordId = r.item[this._rxTrackBy];
            const name = 'rxNext';
            const evName = name + recordId;
            // enter
            if (r.previousIndex == null) {
                const evc = new _model__WEBPACK_IMPORTED_MODULE_3__["RxForViewContext"](r.item, iterable, this.rxForDistinctBy);
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, evc, idx);
                this.evMap.set(evName, view);
                view.detectChanges();
            }
            else if (currentIndex == null) {
                this.viewContainerRef.remove(previousIndex === null ? undefined : previousIndex);
            }
            else if (previousIndex !== null) {
                const view = this.viewContainerRef.get(previousIndex);
                this.viewContainerRef.move(view, idx);
                view.context.$implicit = r.item;
            }
        });
        changes.forEachIdentityChange((record) => {
            const viewRef = this.viewContainerRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
        });
        /*
        // behavior like *ngFor
        const tuplesToDetectChanges: RecordViewTuple<T, U>[] = [];
        // TODO: dig into `IterableDiffer`
        changes.forEachOperation(
          (
            changeRecord: IterableChangeRecord<T>,
            previousIndex: number | null,
            currentIndex: number | null
          ) => {
            const id = changeRecord.item[this._rxTrackBy];
            // Insert
            if (changeRecord.previousIndex == null) {
              const evName = 'rxNext' + id;
              // this is basically the first run
              // create the embedded view for each value with default values
              this.templateManager.displayView('rxNext', id);
              tuplesToDetectChanges.push({
                view: this.templateManager.getEmbeddedView(evName),
                record: changeRecord
              });
    
            } else if (currentIndex == null) {
    
              this.viewContainerRef.remove(
                previousIndex === null ? undefined : previousIndex);
    
            } else if (previousIndex !== null) {
    
              const view = <EmbeddedViewRef<RxForViewContext<T, U>>>this.viewContainerRef.get(previousIndex);
              this.viewContainerRef.move(view, currentIndex);
              tuplesToDetectChanges.push({
                view,
                record: changeRecord
              });
            }
          });
    
        for (let i = 0; i < tuplesToDetectChanges.length; i++) {
          this._perViewChange(tuplesToDetectChanges[i].view, tuplesToDetectChanges[i].record);
        }
    
        for (let index = 0, count = this.viewContainerRef.length; index < count; index++) {
          this.templateManager.updateViewContext({
            index, count,
            rxFor: iterable,
            record$: this.records$.pipe(map(records => records[this._rxTrackBy]))
          });
    
        }
    
        changes.forEachIdentityChange((record: IterableChangeRecord<T>) => {
          const viewRef =
            <EmbeddedViewRef<RxForViewContext<T, U>>>this.viewContainerRef.get(record.currentIndex);
          viewRef.context.$implicit = record.item;
          viewRef.detectChanges();
        });
    
        */
    }
    _perViewChange(view, record) {
        view.context.$implicit = record.item;
        view.detectChanges();
    }
}
RxForDirective.ɵfac = function RxForDirective_Factory(t) { return new (t || RxForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__["RxEffects"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"])); };
RxForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxForDirective, selectors: [["", "rxFor", ""]], inputs: { rxFor: "rxFor", rxForDistinctBy: "rxForDistinctBy", rxForTrackBy: "rxForTrackBy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__["RxEffects"]])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[rxFor]',
                providers: [_shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__["RxEffects"]]
            }]
    }], function () { return [{ type: _shared_rx_effects_service__WEBPACK_IMPORTED_MODULE_4__["RxEffects"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }]; }, { rxFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForDistinctBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nqxQ":
/*!***************************************************!*\
  !*** ./src/app/shared/debug-helper/work/index.ts ***!
  \***************************************************/
/*! exports provided: ValueModule, ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_provider_value_value_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value-provider/value/value.module */ "2NQe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueModule", function() { return _value_provider_value_value_module__WEBPACK_IMPORTED_MODULE_0__["ValueModule"]; });

/* harmony import */ var _value_provider_value_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-provider/value/value.component */ "c9zg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return _value_provider_value_value_component__WEBPACK_IMPORTED_MODULE_1__["ValueComponent"]; });





/***/ }),

/***/ "zXbO":
/*!********************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/rx-for-poc/rx-for-poc.module.ts ***!
  \********************************************************************************************/
/*! exports provided: RxForPocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForPocModule", function() { return RxForPocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/work */ "nqxQ");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parent.component */ "PBN0");
/* harmony import */ var _rx_for_value_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rx-for-value.component */ "6EsC");
/* harmony import */ var _rx_for_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rx-for.directive */ "fNOO");
/* harmony import */ var _poc6_locv2_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./poc6-locv2.directive */ "V688");
/* harmony import */ var _poc6_locv_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poc6-locv.directive */ "9NtR");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jdnZ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _poc1_for_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./poc1-for.directive */ "Ih2C");
/* harmony import */ var _poc2_for_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./poc2-for.directive */ "E3aN");
/* harmony import */ var _poc5_locv_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./poc5-locv.directive */ "5ZLb");
/* harmony import */ var _view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../view-vs-embedded-view/view-vs-embedded-view.module */ "pcLL");





















const DECLARATIONS = [
    _parent_component__WEBPACK_IMPORTED_MODULE_7__["RxForContainerComponent"],
    _poc1_for_directive__WEBPACK_IMPORTED_MODULE_16__["Poc1ForDirective"],
    _poc2_for_directive__WEBPACK_IMPORTED_MODULE_17__["Poc2ForDirective"],
    _poc5_locv_directive__WEBPACK_IMPORTED_MODULE_18__["Poc5Locv5"],
    _poc6_locv2_directive__WEBPACK_IMPORTED_MODULE_10__["Poc6Locv2Directive"],
    _poc6_locv_directive__WEBPACK_IMPORTED_MODULE_11__["Poc6Locv6Directive"],
    _rx_for_directive__WEBPACK_IMPORTED_MODULE_9__["RxForDirective"],
    _rx_for_value_component__WEBPACK_IMPORTED_MODULE_8__["RxForValueComponent"]
];
class RxForPocModule {
}
RxForPocModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxForPocModule });
RxForPocModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxForPocModule_Factory(t) { return new (t || RxForPocModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_6__["ValueModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_19__["ViewVsEmbeddedViewModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxForPocModule, { declarations: [_parent_component__WEBPACK_IMPORTED_MODULE_7__["RxForContainerComponent"],
        _poc1_for_directive__WEBPACK_IMPORTED_MODULE_16__["Poc1ForDirective"],
        _poc2_for_directive__WEBPACK_IMPORTED_MODULE_17__["Poc2ForDirective"],
        _poc5_locv_directive__WEBPACK_IMPORTED_MODULE_18__["Poc5Locv5"],
        _poc6_locv2_directive__WEBPACK_IMPORTED_MODULE_10__["Poc6Locv2Directive"],
        _poc6_locv_directive__WEBPACK_IMPORTED_MODULE_11__["Poc6Locv6Directive"],
        _rx_for_directive__WEBPACK_IMPORTED_MODULE_9__["RxForDirective"],
        _rx_for_value_component__WEBPACK_IMPORTED_MODULE_8__["RxForValueComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_6__["ValueModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_19__["ViewVsEmbeddedViewModule"]], exports: [_parent_component__WEBPACK_IMPORTED_MODULE_7__["RxForContainerComponent"],
        _poc1_for_directive__WEBPACK_IMPORTED_MODULE_16__["Poc1ForDirective"],
        _poc2_for_directive__WEBPACK_IMPORTED_MODULE_17__["Poc2ForDirective"],
        _poc5_locv_directive__WEBPACK_IMPORTED_MODULE_18__["Poc5Locv5"],
        _poc6_locv2_directive__WEBPACK_IMPORTED_MODULE_10__["Poc6Locv2Directive"],
        _poc6_locv_directive__WEBPACK_IMPORTED_MODULE_11__["Poc6Locv6Directive"],
        _rx_for_directive__WEBPACK_IMPORTED_MODULE_9__["RxForDirective"],
        _rx_for_value_component__WEBPACK_IMPORTED_MODULE_8__["RxForValueComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForPocModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_2__["VisualizerModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_6__["ValueModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_19__["ViewVsEmbeddedViewModule"],
                ],
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rx-for-poc-rx-for-poc-routed-module.js.map