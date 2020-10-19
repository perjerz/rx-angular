(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rx-for-differ-rx-for-differ-module"],{

/***/ "24/t":
/*!***********************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-for-differ/rx-for-differ.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RxForDifferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForDifferModule", function() { return RxForDifferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _rx_for_differ_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rx-for-differ.routes */ "Q5jL");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _rx_for_differ_rx_for_differ_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rx-for-differ/rx-for-differ.component */ "LOl/");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared */ "lb96");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");













const DECLARATIONS = [_rx_for_differ_rx_for_differ_component__WEBPACK_IMPORTED_MODULE_8__["RxForDifferComponent"]];
class RxForDifferModule {
}
RxForDifferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RxForDifferModule });
RxForDifferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RxForDifferModule_Factory(t) { return new (t || RxForDifferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_for_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
            _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RxForDifferModule, { declarations: [_rx_for_differ_rx_for_differ_component__WEBPACK_IMPORTED_MODULE_8__["RxForDifferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
        _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForDifferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_rx_for_differ_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_7__["VisualizerModule"],
                    _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_10__["ValueProvidersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "LOl/":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-for-differ/rx-for-differ/rx-for-differ.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RxForDifferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForDifferComponent", function() { return RxForDifferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/debug-helper/value-provider/array-provider/array-provider.component */ "IyUv");
/* harmony import */ var _shared_rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/rx-for-differ.directive */ "+LQi");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








function RxForDifferComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rxa-dirty-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("            ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, i_r2), "\n        ");
} }
const _c0 = function () { return []; };
class RxForDifferComponent {
    constructor() {
        this.trackByKey = 'id';
        this.distinctByKey = 'value';
        this.trackByFn = (a) => a.id;
        this.distinctByFn = (a) => a.value;
    }
}
RxForDifferComponent.ɵfac = function RxForDifferComponent_Factory(t) { return new (t || RxForDifferComponent)(); };
RxForDifferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RxForDifferComponent, selectors: [["rxa-rx-for-differ"]], decls: 9, vars: 6, consts: [["visualizerHeader", ""], [1, "col-sm-12"], [3, "unpatched", "buttons"], ["arrayP", "rxaArrayProvider"], [4, "rxForDiffer", "rxForDifferTrackBy", "rxForDifferDistinctBy"]], template: function RxForDifferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "rxFor with Differ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rxa-array-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RxForDifferComponent_ng_container_8_Template, 7, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxForDiffer", _r0.array$)("rxForDifferTrackBy", ctx.trackByKey)("rxForDifferDistinctBy", ctx.distinctByKey);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_2__["VisualizerComponent"], _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_3__["ArrayProviderComponent"], _shared_rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_4__["RxForDifferDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForDifferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-rx-for-differ',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <div class="col-sm-12"><h2>rxFor with Differ</h2></div>
        <rxa-array-provider [unpatched]="[]" [buttons]="true" #arrayP="rxaArrayProvider"></rxa-array-provider>
      </ng-container>
      <div>
        <ng-container *rxForDiffer="arrayP.array$;
                      trackBy: trackByKey
                      distinctBy:distinctByKey
                      let i;
        ">
          <rxa-dirty-check>{{i | json}}</rxa-dirty-check>
          <pre>
            {{i | json}}
        </pre>
        </ng-container>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeDetection,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q5jL":
/*!***********************************************************************************!*\
  !*** ./src/app/features/experiments/differ/rx-for-differ/rx-for-differ.routes.ts ***!
  \***********************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _rx_for_differ_rx_for_differ_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-for-differ/rx-for-differ.component */ "LOl/");

const ROUTES = [
    {
        path: '',
        component: _rx_for_differ_rx_for_differ_component__WEBPACK_IMPORTED_MODULE_0__["RxForDifferComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=rx-for-differ-rx-for-differ-module.js.map