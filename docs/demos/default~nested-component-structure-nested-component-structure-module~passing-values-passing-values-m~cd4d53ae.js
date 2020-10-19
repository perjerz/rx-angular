(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~cd4d53ae"],{

/***/ "2uA3":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-push.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RecursivePushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursivePushComponent", function() { return RecursivePushComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");







function RecursivePushComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r0.value$));
} }
function RecursivePushComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-recursive-push", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "push");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r2.total)("level", ctx_r2.level - 1)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r2.value$));
} }
class RecursivePushComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
    set value(v) {
        this.value$.next(v);
    }
    ;
}
RecursivePushComponent.ɵfac = function RecursivePushComponent_Factory(t) { return new (t || RecursivePushComponent)(); };
RecursivePushComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursivePushComponent, selectors: [["rxa-recursive-push"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$"], [3, "total", "level", "value"]], template: function RecursivePushComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursivePushComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursivePushComponent_ng_template_1_Template, 5, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__["RenderingsComponent"], RecursivePushComponent], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_5__["PushPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursivePushComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-push',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-renders [value$]="value$ | push"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-recursive-push [total]="total" [level]="level-1" [value]="value$ | push"></rxa-recursive-push>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3J8n":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-component-let.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecursiveComponentLetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveComponentLetComponent", function() { return RecursiveComponentLetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _features_experiments_structural_directives_view_vs_embedded_view_poc1_let_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../features/experiments/structural-directives/view-vs-embedded-view/poc1-let.directive */ "Lp5t");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");








function RecursiveComponentLetComponent_ng_container_0_rxa_renders_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-renders", 4);
} if (rf & 2) {
    const v_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", v_r4);
} }
function RecursiveComponentLetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecursiveComponentLetComponent_ng_container_0_rxa_renders_4_Template, 1, 1, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc1Let", ctx_r0.value$);
} }
function RecursiveComponentLetComponent_ng_template_1_rxa_recursive_component_let_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-recursive-component-let", 6);
} if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r5.total)("level", ctx_r5.level - 1)("value", v_r6);
} }
function RecursiveComponentLetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecursiveComponentLetComponent_ng_template_1_rxa_recursive_component_let_3_Template, 1, 3, "rxa-recursive-component-let", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx_r2.value$);
} }
class RecursiveComponentLetComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
    set value(v) {
        this.value$.next(v);
    }
    ;
}
RecursiveComponentLetComponent.ɵfac = function RecursiveComponentLetComponent_Factory(t) { return new (t || RecursiveComponentLetComponent)(); };
RecursiveComponentLetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursiveComponentLetComponent, selectors: [["rxa-recursive-component-let"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$", 4, "poc1Let"], [3, "value$"], [3, "total", "level", "value", 4, "rxLet"], [3, "total", "level", "value"]], template: function RecursiveComponentLetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursiveComponentLetComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursiveComponentLetComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _features_experiments_structural_directives_view_vs_embedded_view_poc1_let_directive__WEBPACK_IMPORTED_MODULE_4__["Poc1LetDirective"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_5__["RenderingsComponent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["LetDirective"], RecursiveComponentLetComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveComponentLetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-component-let',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total-level}}</p>
        <rxa-renders *poc1Let="value$; let v" [value$]="v"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total-level}}</p>
        <rxa-recursive-component-let [total]="total" *rxLet="value$; let v" [level]="level-1" [value]="v"></rxa-recursive-component-let>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9Nz7":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-async.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RecursiveAsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveAsyncComponent", function() { return RecursiveAsyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");






function RecursiveAsyncComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r0.value$));
} }
function RecursiveAsyncComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-recursive-async", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r2.total)("level", ctx_r2.level - 1)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r2.value$));
} }
class RecursiveAsyncComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
    set value(v) {
        this.value$.next(v);
    }
    ;
}
RecursiveAsyncComponent.ɵfac = function RecursiveAsyncComponent_Factory(t) { return new (t || RecursiveAsyncComponent)(); };
RecursiveAsyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursiveAsyncComponent, selectors: [["rxa-recursive-async"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$"], [3, "total", "level", "value"]], template: function RecursiveAsyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursiveAsyncComponent_ng_container_0_Template, 6, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursiveAsyncComponent_ng_template_1_Template, 5, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__["RenderingsComponent"], RecursiveAsyncComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveAsyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-async',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-renders [value$]="value$ | async"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-recursive-async [total]="total" [level]="level-1" [value]="value$ | async"></rxa-recursive-async>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "eYvl":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-observable.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RecursiveObservableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveObservableComponent", function() { return RecursiveObservableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");






function RecursiveObservableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", ctx_r0.value$);
} }
function RecursiveObservableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-recursive-observable", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r2.total)("level", ctx_r2.level - 1)("value$", ctx_r2.value$);
} }
class RecursiveObservableComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
}
RecursiveObservableComponent.ɵfac = function RecursiveObservableComponent_Factory(t) { return new (t || RecursiveObservableComponent)(); };
RecursiveObservableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursiveObservableComponent, selectors: [["rxa-recursive-observable"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value$: "value$" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$"], [3, "total", "level", "value$"]], template: function RecursiveObservableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursiveObservableComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursiveObservableComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_4__["RenderingsComponent"], RecursiveObservableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveObservableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-observable',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-renders [value$]="value$"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-recursive-observable [total]="total" [level]="level-1" [value$]="value$"></rxa-recursive-observable>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "eaH9":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-embedded-view-let.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RecursiveEmbeddedViewLetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveEmbeddedViewLetComponent", function() { return RecursiveEmbeddedViewLetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _features_experiments_structural_directives_view_vs_embedded_view_poc1_let_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../features/experiments/structural-directives/view-vs-embedded-view/poc1-let.directive */ "Lp5t");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");







function RecursiveEmbeddedViewLetComponent_ng_container_0_rxa_renders_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-renders", 4);
} if (rf & 2) {
    const v_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", v_r4);
} }
function RecursiveEmbeddedViewLetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecursiveEmbeddedViewLetComponent_ng_container_0_rxa_renders_4_Template, 1, 1, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc1Let", ctx_r0.value$);
} }
function RecursiveEmbeddedViewLetComponent_ng_template_1_rxa_recursive_embedded_view_let_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-recursive-embedded-view-let", 6);
} if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r5.total)("level", ctx_r5.level - 1)("value", v_r6);
} }
function RecursiveEmbeddedViewLetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecursiveEmbeddedViewLetComponent_ng_template_1_rxa_recursive_embedded_view_let_3_Template, 1, 3, "rxa-recursive-embedded-view-let", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poc1Let", ctx_r2.value$);
} }
class RecursiveEmbeddedViewLetComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
    set value(v) {
        this.value$.next(v);
    }
    ;
}
RecursiveEmbeddedViewLetComponent.ɵfac = function RecursiveEmbeddedViewLetComponent_Factory(t) { return new (t || RecursiveEmbeddedViewLetComponent)(); };
RecursiveEmbeddedViewLetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursiveEmbeddedViewLetComponent, selectors: [["rxa-recursive-embedded-view-let"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$", 4, "poc1Let"], [3, "value$"], [3, "total", "level", "value", 4, "poc1Let"], [3, "total", "level", "value"]], template: function RecursiveEmbeddedViewLetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursiveEmbeddedViewLetComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursiveEmbeddedViewLetComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _features_experiments_structural_directives_view_vs_embedded_view_poc1_let_directive__WEBPACK_IMPORTED_MODULE_4__["Poc1LetDirective"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_5__["RenderingsComponent"], RecursiveEmbeddedViewLetComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveEmbeddedViewLetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-embedded-view-let',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-renders *poc1Let="value$; let v" [value$]="v"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-recursive-embedded-view-let [total]="total" *poc1Let="value$; let v" [level]="level-1"
                                         [value]="v"></rxa-recursive-embedded-view-let>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "g+Pc":
/*!**************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive.module.ts ***!
  \**************************************************************************/
/*! exports provided: RecursiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveModule", function() { return RecursiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../debug-helper/visualizer */ "cCWh");
/* harmony import */ var _recursive_observable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recursive-observable.component */ "eYvl");
/* harmony import */ var _recursive_static_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recursive-static.component */ "hXri");
/* harmony import */ var _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../debug-helper/value-provider */ "uNb+");
/* harmony import */ var _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../debug-helper/renderings */ "RB8a");
/* harmony import */ var _recursive_async_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recursive-async.component */ "9Nz7");
/* harmony import */ var _recursive_push_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recursive-push.component */ "2uA3");
/* harmony import */ var _recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recursive-embedded-view-let.component */ "eaH9");
/* harmony import */ var _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../features/experiments/structural-directives/view-vs-embedded-view/view-vs-embedded-view.module */ "pcLL");
/* harmony import */ var _recursive_component_let_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recursive-component-let.component */ "3J8n");
















const DECLARATIONS = [
    _recursive_static_component__WEBPACK_IMPORTED_MODULE_7__["RecursiveStaticComponent"],
    _recursive_observable_component__WEBPACK_IMPORTED_MODULE_6__["RecursiveObservableComponent"],
    _recursive_async_component__WEBPACK_IMPORTED_MODULE_10__["RecursiveAsyncComponent"],
    _recursive_push_component__WEBPACK_IMPORTED_MODULE_11__["RecursivePushComponent"],
    _recursive_component_let_component__WEBPACK_IMPORTED_MODULE_14__["RecursiveComponentLetComponent"],
    _recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_12__["RecursiveEmbeddedViewLetComponent"]
];
class RecursiveModule {
}
RecursiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecursiveModule });
RecursiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecursiveModule_Factory(t) { return new (t || RecursiveModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
            _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
            _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_8__["ValueProvidersModule"],
            _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_9__["RenderingsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_13__["ViewVsEmbeddedViewModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecursiveModule, { declarations: [_recursive_static_component__WEBPACK_IMPORTED_MODULE_7__["RecursiveStaticComponent"],
        _recursive_observable_component__WEBPACK_IMPORTED_MODULE_6__["RecursiveObservableComponent"],
        _recursive_async_component__WEBPACK_IMPORTED_MODULE_10__["RecursiveAsyncComponent"],
        _recursive_push_component__WEBPACK_IMPORTED_MODULE_11__["RecursivePushComponent"],
        _recursive_component_let_component__WEBPACK_IMPORTED_MODULE_14__["RecursiveComponentLetComponent"],
        _recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_12__["RecursiveEmbeddedViewLetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
        _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
        _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_8__["ValueProvidersModule"],
        _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_9__["RenderingsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_13__["ViewVsEmbeddedViewModule"]], exports: [_recursive_static_component__WEBPACK_IMPORTED_MODULE_7__["RecursiveStaticComponent"],
        _recursive_observable_component__WEBPACK_IMPORTED_MODULE_6__["RecursiveObservableComponent"],
        _recursive_async_component__WEBPACK_IMPORTED_MODULE_10__["RecursiveAsyncComponent"],
        _recursive_push_component__WEBPACK_IMPORTED_MODULE_11__["RecursivePushComponent"],
        _recursive_component_let_component__WEBPACK_IMPORTED_MODULE_14__["RecursiveComponentLetComponent"],
        _recursive_embedded_view_let_component__WEBPACK_IMPORTED_MODULE_12__["RecursiveEmbeddedViewLetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: DECLARATIONS,
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_4__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["PushModule"],
                    _debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_5__["VisualizerModule"],
                    _debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_8__["ValueProvidersModule"],
                    _debug_helper_renderings__WEBPACK_IMPORTED_MODULE_9__["RenderingsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _features_experiments_structural_directives_view_vs_embedded_view_view_vs_embedded_view_module__WEBPACK_IMPORTED_MODULE_13__["ViewVsEmbeddedViewModule"],
                ],
                exports: DECLARATIONS
            }]
    }], null, null); })();


/***/ }),

/***/ "hXri":
/*!************************************************************************************!*\
  !*** ./src/app/shared/template-structures/recursive/recursive-static.component.ts ***!
  \************************************************************************************/
/*! exports provided: RecursiveStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveStaticComponent", function() { return RecursiveStaticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../debug-helper/renderings/renderings.component */ "lhfq");





function RecursiveStaticComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rxa-renders", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r0.total - ctx_r0.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", ctx_r0.value);
} }
function RecursiveStaticComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rxa-recursive-static", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx_r2.total - ctx_r2.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r2.total)("level", ctx_r2.level - 1)("value", ctx_r2.value);
} }
class RecursiveStaticComponent {
    constructor() {
        this.total = 0;
        this.level = 0;
    }
    set depth(d) {
        this.total = d;
        this.level = this.total - 1;
    }
}
RecursiveStaticComponent.ɵfac = function RecursiveStaticComponent_Factory(t) { return new (t || RecursiveStaticComponent)(); };
RecursiveStaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecursiveStaticComponent, selectors: [["rxa-recursive-static"]], hostAttrs: [1, "d-flex", "w-100"], inputs: { depth: "depth", total: "total", level: "level", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["branch", ""], ["visualizerHeader", ""], [3, "value$"], [3, "total", "level", "value"]], template: function RecursiveStaticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecursiveStaticComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecursiveStaticComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_3__["RenderingsComponent"], RecursiveStaticComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecursiveStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-recursive-static',
                template: `
    <ng-container *ngIf="level === 0; else: branch">
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-renders [value$]="value"></rxa-renders>
      </rxa-visualizer>
    </ng-container>
    <ng-template #branch>
      <rxa-visualizer>
        <p visualizerHeader>Level {{total - level}}</p>
        <rxa-recursive-static [total]="total" [level]="level-1" [value]="value"></rxa-recursive-static>
      </rxa-visualizer>
    </ng-template>
  `,
                host: {
                    class: 'd-flex w-100'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~nested-component-structure-nested-component-structure-module~passing-values-passing-values-m~cd4d53ae.js.map