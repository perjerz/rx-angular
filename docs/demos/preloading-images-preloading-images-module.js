(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preloading-images-preloading-images-module"],{

/***/ "2FGN":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/preloading-images/preloading-images.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PreloadingImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingImagesComponent", function() { return PreloadingImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _shared_debug_helper_value_provider_scheduling_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/scheduling-helper */ "JNVf");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer/visualizer/visualizer.component */ "KD49");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "llid");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");











function PreloadingImagesComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const url_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", url_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreloadingImagesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.placeholder, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PreloadingImagesComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.p = _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__["SchedulingPriority"];
        this.sh = Object(_shared_debug_helper_value_provider_scheduling_helper__WEBPACK_IMPORTED_MODULE_2__["schedulingHelper"])();
        this.placeholder = this.domSanitizer.bypassSecurityTrustUrl(_shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_3__["placeholderImg"]);
    }
    reset() {
        this.sh = Object(_shared_debug_helper_value_provider_scheduling_helper__WEBPACK_IMPORTED_MODULE_2__["schedulingHelper"])();
    }
}
PreloadingImagesComponent.ɵfac = function PreloadingImagesComponent_Factory(t) { return new (t || PreloadingImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
PreloadingImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloadingImagesComponent, selectors: [["rxa-ngif-hack"]], decls: 9, vars: 4, consts: [["visualizerHeader", ""], ["mat-raised-button", "", 3, "click"], [3, "changes$", "buttons", "resetState"], ["valP", "rxaValueProvider"], [3, "src", 4, "rxLet", "rxLetRxSuspense"], ["sV", ""], [3, "src"]], template: function PreloadingImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreloadingImagesComponent_Template_button_click_2_listener() { return ctx.sh.tick(1, [500, 0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delayed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "rxa-value-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resetState", function PreloadingImagesComponent_Template_rxa_value_provider_resetState_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreloadingImagesComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreloadingImagesComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changes$", ctx.sh.ticks$)("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", _r0.imgUrl$)("rxLetRxSuspense", _r2);
    } }, directives: [_shared_debug_helper_visualizer_visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_5__["VisualizerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_7__["ValueProviderComponent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_8__["LetDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadingImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-ngif-hack',
                template: `
    <rxa-visualizer>
      <div visualizerHeader>
        <button mat-raised-button (click)="sh.tick(1, [500, 0])">
          Delayed
        </button>
        <rxa-value-provider
          [changes$]="sh.ticks$"
          [buttons]="true"
          (resetState)="reset()"
          #valP="rxaValueProvider"
        ></rxa-value-provider>
      </div>
      <img [src]="url" *rxLet="valP.imgUrl$; let url; rxSuspense:sV;"/>
      <ng-template #sV><img [src]="placeholder"/></ng-template>
    </rxa-visualizer>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "ZUFi":
/*!****************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/preloading-images/preloading-images.routes.ts ***!
  \****************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _preloading_images_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloading-images.component */ "2FGN");

const ROUTES = [
    {
        path: '',
        component: _preloading_images_component__WEBPACK_IMPORTED_MODULE_0__["PreloadingImagesComponent"]
    }
];


/***/ }),

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

/***/ "k/Vi":
/*!****************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/preloading-images/preloading-images.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PreloadingImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingImagesModule", function() { return PreloadingImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _preloading_images_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloading-images.routes */ "ZUFi");
/* harmony import */ var _preloading_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloading-images.component */ "2FGN");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-skeleton-loader */ "0ONR");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider */ "uNb+");
/* harmony import */ var _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/visualizer */ "cCWh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "PBFl");














const DECLARATIONS = [
    _preloading_images_component__WEBPACK_IMPORTED_MODULE_5__["PreloadingImagesComponent"]
];
class PreloadingImagesModule {
}
PreloadingImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PreloadingImagesModule });
PreloadingImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PreloadingImagesModule_Factory(t) { return new (t || PreloadingImagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_preloading_images_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
            _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreloadingImagesModule, { declarations: [_preloading_images_component__WEBPACK_IMPORTED_MODULE_5__["PreloadingImagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
        _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadingImagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_preloading_images_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_3__["DirtyChecksModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["LetModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_6__["UnpatchEventsModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _shared_debug_helper_value_provider__WEBPACK_IMPORTED_MODULE_9__["ValueProvidersModule"],
                    _shared_debug_helper_visualizer__WEBPACK_IMPORTED_MODULE_10__["VisualizerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=preloading-images-preloading-images-module.js.map