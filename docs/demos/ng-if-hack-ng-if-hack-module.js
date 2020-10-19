(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ng-if-hack-ng-if-hack-module"],{

/***/ "cCWh":
/*!*********************************************************!*\
  !*** ./src/app/shared/debug-helper/visualizer/index.ts ***!
  \*********************************************************/
/*! exports provided: VisualizerModule, VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer.module */ "WoFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerModule", function() { return _visualizer_module__WEBPACK_IMPORTED_MODULE_0__["VisualizerModule"]; });

/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "KD49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"]; });





/***/ }),

/***/ "kBJz":
/*!*****************************************************************************!*\
  !*** ./src/app/features/template/rx-let/ng-if-hack/ng-if-hack.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NgIfHackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfHackComponent", function() { return NgIfHackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");








function NgIfHackComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-skeleton-loader", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", 3)("appearance", "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", 3)("appearance", "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", 3);
} }
function NgIfHackComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgIfHackComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgIfHackComponent {
}
NgIfHackComponent.ɵfac = function NgIfHackComponent_Factory(t) { return new (t || NgIfHackComponent)(); };
NgIfHackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgIfHackComponent, selectors: [["rxa-ngif-hack"]], decls: 13, vars: 6, consts: [["visualizerHeader", ""], [3, "buttons"], ["valP", "rxaValueProvider"], ["suspenseView", ""], ["errorView", ""], ["completeView", ""], [3, "count", "appearance"], [3, "count"], ["color", "warn"], ["color", "primary"]], template: function NgIfHackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rxa-value-provider", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgIfHackComponent_ng_template_7_Template, 4, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgIfHackComponent_ng_template_9_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgIfHackComponent_ng_template_11_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, _r0.boolean$)), " ");
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_1__["VisualizerComponent"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_2__["ValueProviderComponent"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"], _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_6__["PushPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIfHackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-ngif-hack',
                template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <rxa-value-provider [buttons]="true" #valP="rxaValueProvider"></rxa-value-provider>
      </div>

      {{ valP.boolean$ | push | json }}
      <!--
       <ng-container *ngIf="valP.boolean$ | push as value">
         next: {{ value | json }}<br/>
       </ng-container>

             <ng-container *rxLet="valP.boolean$; let value;
                 let e = rxError;
                 let c = rxComplete;
                 rxSuspense: suspenseView;
                 rxError: errorView;
                 rxComplete: completeView
               ">
               next: {{ value | json }}<br/>
             </ng-container>
       -->
      <ng-template #suspenseView>
        <ngx-skeleton-loader
          [count]="3"
          [appearance]="'circle'"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader [count]="3"></ngx-skeleton-loader>
        <ngx-skeleton-loader
          [count]="3"
          [appearance]="'circle'"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader [count]="3"></ngx-skeleton-loader>
      </ng-template>

      <ng-template #errorView>
        <mat-icon color="warn">delete</mat-icon>
      </ng-template>

      <ng-template #completeView>
        <mat-icon color="primary">check</mat-icon>
      </ng-template>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "uQMO":
/*!**************************************************************************!*\
  !*** ./src/app/features/template/rx-let/ng-if-hack/ng-if-hack.module.ts ***!
  \**************************************************************************/
/*! exports provided: NgIfHackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfHackModule", function() { return NgIfHackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _ng_if_hack_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-if-hack.routes */ "v11q");
/* harmony import */ var _ng_if_hack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-if-hack.component */ "kBJz");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");













const DECLARATIONS = [
    _ng_if_hack_component__WEBPACK_IMPORTED_MODULE_5__["NgIfHackComponent"]
];
class NgIfHackModule {
}
NgIfHackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgIfHackModule });
NgIfHackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgIfHackModule_Factory(t) { return new (t || NgIfHackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ng_if_hack_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["PushModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgIfHackModule, { declarations: [_ng_if_hack_component__WEBPACK_IMPORTED_MODULE_5__["NgIfHackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["PushModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIfHackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ng_if_hack_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["PushModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v11q":
/*!**************************************************************************!*\
  !*** ./src/app/features/template/rx-let/ng-if-hack/ng-if-hack.routes.ts ***!
  \**************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _ng_if_hack_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-if-hack.component */ "kBJz");

const ROUTES = [
    {
        path: '',
        component: _ng_if_hack_component__WEBPACK_IMPORTED_MODULE_0__["NgIfHackComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=ng-if-hack-ng-if-hack-module.js.map