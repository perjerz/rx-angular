(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ng-iterable-differ-ng-iterable-differ-module"],{

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

/***/ "DTFk":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/ng-iterable-differ/ng-iterable-differ.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgIterableDifferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIterableDifferModule", function() { return NgIterableDifferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _ng_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-iterable-differ.routes */ "fm4a");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _ng_iterable_differ_ng_iterable_differ_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-iterable-differ/ng-iterable-differ.component */ "tdja");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/work */ "nqxQ");













const DECLARATIONS = [_ng_iterable_differ_ng_iterable_differ_component__WEBPACK_IMPORTED_MODULE_8__["NgIterableDifferComponent"]];
class NgIterableDifferModule {
}
NgIterableDifferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgIterableDifferModule });
NgIterableDifferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgIterableDifferModule_Factory(t) { return new (t || NgIterableDifferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ng_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
            _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgIterableDifferModule, { declarations: [_ng_iterable_differ_ng_iterable_differ_component__WEBPACK_IMPORTED_MODULE_8__["NgIterableDifferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
        _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIterableDifferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ng_iterable_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
                    _shared_debug_helper_work__WEBPACK_IMPORTED_MODULE_10__["ValueModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HJEO":
/*!********************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/log-iterable.ts ***!
  \********************************************************************/
/*! exports provided: logIterable, logRxIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIterable", function() { return logIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logRxIterable", function() { return logRxIterable; });
function logIterable(newData) {
    console.log('#################################');
    if (newData === null) {
        console.log('null change');
    }
    else {
        console.log('enter');
        newData.forEachAddedItem(console.log);
        console.log('move');
        newData.forEachMovedItem(console.log);
        console.log('remove');
        newData.forEachRemovedItem(console.log);
        console.log('identityChange');
        newData.forEachIdentityChange(console.log);
    }
}
function logRxIterable(indexDifferResult) {
    console.log('##diffByIndex');
    console.log('enter', indexDifferResult.enter);
    console.log('update', indexDifferResult.update);
    console.log('exit', indexDifferResult.exit);
}
;


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

/***/ "Rsc9":
/*!****************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/from-for.ts ***!
  \****************************************************************/
/*! exports provided: fromFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromFor", function() { return fromFor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");

function fromFor(fn) {
    return (o$) => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((s) => {
        const subscription = o$.subscribe(n => {
            const a = [];
            // tslint:disable-next-line:no-unused-expression
            if (n != null) {
                n[fn](v => a.push(v.item));
                s.next(a);
            }
            else {
                s.next([]);
            }
        });
        return subscription.unsubscribe;
    });
}


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

/***/ "fm4a":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/ng-iterable-differ/ng-iterable-differ.routes.ts ***!
  \*********************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _ng_iterable_differ_ng_iterable_differ_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-iterable-differ/ng-iterable-differ.component */ "tdja");

const ROUTES = [
    {
        path: '',
        component: _ng_iterable_differ_ng_iterable_differ_component__WEBPACK_IMPORTED_MODULE_0__["NgIterableDifferComponent"]
    }
];


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

/***/ "tdja":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/ng-iterable-differ/ng-iterable-differ/ng-iterable-differ.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NgIterableDifferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIterableDifferComponent", function() { return NgIterableDifferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/debug-helper/hooks */ "S0Hg");
/* harmony import */ var _shared_from_for__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/from-for */ "Rsc9");
/* harmony import */ var _shared_log_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/log-iterable */ "HJEO");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/debug-helper/value-provider/array-provider/array-provider.component */ "IyUv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");














const _c0 = ["arrayP"];
function NgIterableDifferComponent_div_11_Template(rf, ctx) { if (rf & 1) {
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
function NgIterableDifferComponent_div_16_Template(rf, ctx) { if (rf & 1) {
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
function NgIterableDifferComponent_div_21_Template(rf, ctx) { if (rf & 1) {
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
function NgIterableDifferComponent_div_26_Template(rf, ctx) { if (rf & 1) {
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
function NgIterableDifferComponent_div_31_Template(rf, ctx) { if (rf & 1) {
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
class NgIterableDifferComponent extends _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_5__["Hooks"] {
    constructor(cdRef, state, iterableDiffers) {
        super();
        this.cdRef = cdRef;
        this.state = state;
        this.iterableDiffers = iterableDiffers;
        this.trackByIdFn = (a) => a.id;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.setupNgDiffer();
    }
    setupNgDiffer() {
        this.ngDiffer = this.iterableDiffers.find([]).create((idx, item) => this.trackByIdFn(item));
        this.ngDifferResult$ = this.arrayP.array$.pipe(
        // @ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(newData => this.ngDiffer.diff(newData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.enter$ = this.ngDifferResult$.pipe(Object(_shared_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachAddedItem'));
        this.move$ = this.ngDifferResult$.pipe(Object(_shared_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachMovedItem'));
        this.identityChange$ = this.ngDifferResult$.pipe(Object(_shared_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachIdentityChange'));
        this.exit$ = this.ngDifferResult$.pipe(Object(_shared_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachRemovedItem'));
        this.state.hold(this.ngDifferResult$, _shared_log_iterable__WEBPACK_IMPORTED_MODULE_7__["logIterable"]);
        this.cdRef.detectChanges();
    }
}
NgIterableDifferComponent.ɵfac = function NgIterableDifferComponent_Factory(t) { return new (t || NgIterableDifferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"])); };
NgIterableDifferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgIterableDifferComponent, selectors: [["rxa-differ-ng-iterable-differ"]], viewQuery: function NgIterableDifferComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.arrayP = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__["ArrayProviderService"], _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 18, consts: [["visualizerHeader", "", 1, "row"], [1, "col-sm-12"], [3, "buttons", "unpatched"], ["arrayP", "rxaArrayProvider"], [1, "w-100", "row"], [1, "col-sm-2"], [4, "ngFor", "ngForOf"]], template: function NgIterableDifferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Iterable Differ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-array-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgIterableDifferComponent_div_11_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgIterableDifferComponent_div_16_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NgIterableDifferComponent_div_21_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Identity Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NgIterableDifferComponent_div_26_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NgIterableDifferComponent_div_31_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", true)("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
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
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_8__["VisualizerComponent"], _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_9__["ArrayProviderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIterableDifferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-differ-ng-iterable-differ',
                template: `
    <rxa-visualizer>
      <div visualizerHeader class="row">
        <div class="col-sm-12">
          <h2>Angular Iterable Differ</h2>
          <rxa-array-provider [buttons]="true" [unpatched]="[]" #arrayP="rxaArrayProvider"></rxa-array-provider>
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
                providers: [_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_2__["ArrayProviderService"], _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }]; }, { arrayP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['arrayP']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=ng-iterable-differ-ng-iterable-differ-module.js.map