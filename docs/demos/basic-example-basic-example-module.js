(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-example-basic-example-module"],{

/***/ "441b":
/*!***************************************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/basic-example/basic-example.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BasicExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleModule", function() { return BasicExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _basic_example_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example.routes */ "msTT");
/* harmony import */ var _basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-example.component */ "mJbO");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer.module */ "WoFG");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/renderings */ "RB8a");













const DECLARATIONS = [_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleComponent"]];
class BasicExampleModule {
}
BasicExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicExampleModule });
BasicExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicExampleModule_Factory(t) { return new (t || BasicExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_6__["DirtyChecksModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_basic_example_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
            _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
            _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_10__["RenderingsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicExampleModule, { declarations: [_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_6__["DirtyChecksModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
        _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
        _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_10__["RenderingsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"]], exports: [_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["UnpatchEventsModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_6__["DirtyChecksModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_basic_example_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["LetModule"],
                    _shared_debug_helper_visualizer_visualizer_module__WEBPACK_IMPORTED_MODULE_8__["VisualizerModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
                    _shared_debug_helper_renderings__WEBPACK_IMPORTED_MODULE_10__["RenderingsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["ViewportPrioModule"]
                ],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "mJbO":
/*!******************************************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/basic-example/basic-example.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _libs_template_src_lib_experimental_viewport_prio_viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/viewport-prio/viewport-prio.experimental.directive */ "IS9V");
/* harmony import */ var _shared_debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/renderings/renderings.component */ "lhfq");











function BasicExampleComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-renders", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value$", count_r3);
} }
class BasicExampleComponent {
    constructor() {
        this.runningToggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.running$ = this.runningToggle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(b => !b, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(b => b ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(200) : rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"]));
    }
}
BasicExampleComponent.ɵfac = function BasicExampleComponent_Factory(t) { return new (t || BasicExampleComponent)(); };
BasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicExampleComponent, selectors: [["rxa-let1-container"]], decls: 17, vars: 2, consts: [["visualizerHeader", ""], [3, "changes$"], ["valP", "rxaValueProvider"], ["mat-raised-button", "", 3, "unpatch", "click"], [1, "row", "w-100"], [1, "view-port", "col-sm-12"], ["viewPort", ""], [1, "view-port-inner"], ["class", "target", "viewport-prio", "", 4, "rxLet"], ["viewport-prio", "", 1, "target"], [3, "value$"]], template: function BasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rxa-value-provider", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stop rendering if directive is out of the viewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicExampleComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " count up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicExampleComponent_Template_button_click_8_listener() { return ctx.runningToggle$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " auto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Port");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BasicExampleComponent_div_16_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx.running$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", _r0.incremental$);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_4__["ValueProviderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsDirective"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_7__["LetDirective"], _libs_template_src_lib_experimental_viewport_prio_viewport_prio_experimental_directive__WEBPACK_IMPORTED_MODULE_8__["ViewportPrioDirective"], _shared_debug_helper_renderings_renderings_component__WEBPACK_IMPORTED_MODULE_9__["RenderingsComponent"]], styles: [".view-port[_ngcontent-%COMP%] {\n        height: 250px;\n        overflow-y: scroll;\n        border: 1px solid red;\n      }\n\n      .view-port-inner[_ngcontent-%COMP%] {\n        height: 1000px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .target[_ngcontent-%COMP%] {\n        height: 100px;\n        width: 100px;\n        border: 1px solid red;\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        justify-content: center;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-let1-container',
                template: `
    <rxa-visualizer>
      <ng-container visualizerHeader>
        <rxa-value-provider [changes$]="running$" #valP="rxaValueProvider">
          <h1>Stop rendering if directive is out of the viewport</h1>
          <button mat-raised-button [unpatch] (click)="valP.next()">
            count up
          </button>
          <button
            mat-raised-button
            [unpatch]
            (click)="runningToggle$.next();">
            auto
          </button>
        </rxa-value-provider>
      </ng-container>

      <div class="row w-100">
        <h3>View Port</h3>
        <div #viewPort class="view-port col-sm-12">
          <div class="view-port-inner">
            <div
              class="target"
              viewport-prio
              *rxLet="valP.incremental$; let count"
            >
              <rxa-renders [value$]="count"></rxa-renders>
            </div>
          </div>
        </div>
      </div>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [
                    `
      .view-port {
        height: 250px;
        overflow-y: scroll;
        border: 1px solid red;
      }

      .view-port-inner {
        height: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .target {
        height: 100px;
        width: 100px;
        border: 1px solid red;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "msTT":
/*!***************************************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/basic-example/basic-example.routes.ts ***!
  \***************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-example.component */ "mJbO");

const ROUTES = [
    {
        path: '',
        component: _basic_example_component__WEBPACK_IMPORTED_MODULE_0__["BasicExampleComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=basic-example-basic-example-module.js.map