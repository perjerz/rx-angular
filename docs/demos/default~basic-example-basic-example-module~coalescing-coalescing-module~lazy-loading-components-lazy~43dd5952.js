(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952"],{

/***/ "Bi+O":
/*!*********************************************************************!*\
  !*** ./src/app/shared/debug-helper/renderings/renderings.module.ts ***!
  \*********************************************************************/
/*! exports provided: RenderingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingsModule", function() { return RenderingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _renderings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderings.component */ "lhfq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/template */ "10BB");






const DEPRECATIONS = [_renderings_component__WEBPACK_IMPORTED_MODULE_1__["RenderingsComponent"]];
class RenderingsModule {
}
RenderingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RenderingsModule });
RenderingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RenderingsModule_Factory(t) { return new (t || RenderingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RenderingsModule, { declarations: [_renderings_component__WEBPACK_IMPORTED_MODULE_1__["RenderingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"]], exports: [_renderings_component__WEBPACK_IMPORTED_MODULE_1__["RenderingsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...DEPRECATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_4__["PushModule"]
                ],
                exports: [...DEPRECATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "KD49":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/visualizer/visualizer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return VisualizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "S0Hg");
/* harmony import */ var _dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _renderings_renderings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderings/renderings.component */ "lhfq");








function VisualizerComponent_rxa_renders_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-renders", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", ctx_r0.valuesO$)("radius", ctx_r0.radius);
} }
const _c0 = [[["", "visualizerHeader", ""]], "*"];
const _c1 = ["[visualizerHeader]", "*"];
class VisualizerComponent extends _hooks__WEBPACK_IMPORTED_MODULE_3__["Hooks"] {
    constructor() {
        super();
        this.classNames = 'd-flex flex-column w-100 m-1 p-1 dh-l-view';
        this.radius = 20;
        this.renderingsOn = false;
        this.changeO$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.valuesO$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(() => this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.changeO$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(o$ => !!this.key ? o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])(this.key)) : o$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => console.log('value', v))))));
    }
    set viewType(type) {
        if (type == null) {
            type = 'l-view';
        }
        this.classNames = [...this.classNames.split(' ').filter(c => c.indexOf('dh-') === -1), 'dh-' + type]
            .join(' ');
    }
    set value$(v$) {
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(v$)) {
            this.changeO$.next(v$);
        }
        else {
            if (v$ != null) {
                this.renderingsOn = true;
                this.changeO$.next(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(v$));
            }
            else {
                this.renderingsOn = false;
            }
        }
    }
    ;
}
VisualizerComponent.ɵfac = function VisualizerComponent_Factory(t) { return new (t || VisualizerComponent)(); };
VisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizerComponent, selectors: [["rxa-visualizer"]], hostVars: 4, hostBindings: function VisualizerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size, "px");
    } }, inputs: { size: "size", viewType: "viewType", radius: "radius", renderingsOn: "renderingsOn", value$: "value$", key: "key" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [[1, "d-flex", "w-100"], [2, "margin-right", "1rem", 3, "radius"], [3, "value$", "radius", 4, "ngIf"], [1, "w-100", "h-100", "d-flex", "align-items-center", "justify-content-center", "flex-grow-1"], [3, "value$", "radius"]], template: function VisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-dirty-check", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisualizerComponent_rxa_renders_2_Template, 1, 2, "rxa-renders", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.renderingsOn);
    } }, directives: [_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _renderings_renderings_component__WEBPACK_IMPORTED_MODULE_6__["RenderingsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-visualizer',
                template: `
    <div class="d-flex w-100">
      <rxa-dirty-check style="margin-right: 1rem" [radius]="radius"></rxa-dirty-check>
      <rxa-renders *ngIf="renderingsOn" [value$]="valuesO$" [radius]="radius"></rxa-renders>
    </div>
    <ng-content select="[visualizerHeader]">
    </ng-content>
    <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-grow-1">
      <ng-content>
      </ng-content>
    </div>
  `,
                host: {
                    '[style.width.px]': 'size',
                    '[class]': 'classNames'
                }
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], renderingsOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RB8a":
/*!*********************************************************!*\
  !*** ./src/app/shared/debug-helper/renderings/index.ts ***!
  \*********************************************************/
/*! exports provided: RenderingsModule, RenderingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderings.module */ "Bi+O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingsModule", function() { return _renderings_module__WEBPACK_IMPORTED_MODULE_0__["RenderingsModule"]; });

/* harmony import */ var _renderings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderings.component */ "lhfq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingsComponent", function() { return _renderings_component__WEBPACK_IMPORTED_MODULE_1__["RenderingsComponent"]; });





/***/ }),

/***/ "WoFG":
/*!*********************************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/visualizer.module.ts ***!
  \*********************************************************************/
/*! exports provided: VisualizerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerModule", function() { return VisualizerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "KD49");
/* harmony import */ var _dirty_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dirty-checks */ "ApVg");
/* harmony import */ var _renderings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderings */ "RB8a");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");







class VisualizerModule {
}
VisualizerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisualizerModule });
VisualizerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisualizerModule_Factory(t) { return new (t || VisualizerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
            _renderings__WEBPACK_IMPORTED_MODULE_4__["RenderingsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisualizerModule, { declarations: [_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
        _renderings__WEBPACK_IMPORTED_MODULE_4__["RenderingsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]], exports: [_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
                    _renderings__WEBPACK_IMPORTED_MODULE_4__["RenderingsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]
                ],
                exports: [_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lhfq":
/*!************************************************************************!*\
  !*** ./src/app/shared/debug-helper/renderings/renderings.component.ts ***!
  \************************************************************************/
/*! exports provided: RenderingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingsComponent", function() { return RenderingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "S0Hg");






class RenderingsComponent extends _hooks__WEBPACK_IMPORTED_MODULE_4__["Hooks"] {
    constructor() {
        super();
        this.changeO$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.numRenders$ = this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.changeO$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(a => ++a, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.rippleOn && this.ripple.launch({ centered: true })))));
        this.rippleOn = true;
        this.radius = 20;
        this.color = 'rgba(255,0,0,0.24)';
        this.afterViewInit$.subscribe(() => this.ripple.launch({ centered: true }));
    }
    set value$(v$) {
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(v$)) {
            this.changeO$.next(v$);
        }
        else {
            if (v$ != null) {
                this.changeO$.next(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v$));
            }
        }
    }
    ;
}
RenderingsComponent.ɵfac = function RenderingsComponent_Factory(t) { return new (t || RenderingsComponent)(); };
RenderingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderingsComponent, selectors: [["rxa-renders"]], viewQuery: function RenderingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, inputs: { rippleOn: "rippleOn", radius: "radius", color: "color", value$: "value$" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function RenderingsComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]   .indicator-ripple[_ngcontent-%COMP%] {\n      border: 1px solid #ff00005f;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'rxa-renders',
                template: `

  `,
                styles: [`
    :host .indicator-ripple {
      border: 1px solid #ff00005f;
    }
  `],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }], rippleOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~basic-example-basic-example-module~coalescing-coalescing-module~lazy-loading-components-lazy~43dd5952.js.map