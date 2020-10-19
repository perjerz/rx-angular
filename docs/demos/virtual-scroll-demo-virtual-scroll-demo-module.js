(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtual-scroll-demo-virtual-scroll-demo-module"],{

/***/ "FjdO":
/*!************************************************************************************************!*\
  !*** ./src/app/features/template/strategies/virtual-scroll-demo/virtual-scroll-demo.module.ts ***!
  \************************************************************************************************/
/*! exports provided: VirtualScrollDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollDemoModule", function() { return VirtualScrollDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _virtual_scroll_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-scroll-demo.component */ "srLG");
/* harmony import */ var _scroll_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-item.component */ "N/Zl");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _virtual_scroll_demo_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./virtual-scroll-demo.routes */ "rWNn");










class VirtualScrollDemoModule {
}
VirtualScrollDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VirtualScrollDemoModule });
VirtualScrollDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VirtualScrollDemoModule_Factory(t) { return new (t || VirtualScrollDemoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_virtual_scroll_demo_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VirtualScrollDemoModule, { declarations: [_virtual_scroll_demo_component__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollDemoComponent"], _scroll_item_component__WEBPACK_IMPORTED_MODULE_3__["ScrollItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_virtual_scroll_demo_component__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollDemoComponent"], _scroll_item_component__WEBPACK_IMPORTED_MODULE_3__["ScrollItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_virtual_scroll_demo_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_5__["PushModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "N/Zl":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/template/strategies/virtual-scroll-demo/scroll-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ScrollItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollItemComponent", function() { return ScrollItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_debug_helper_strategy_control_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/debug-helper/strategy-control-panel */ "kUfC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");







class ScrollItemComponent {
    constructor(cdConfig) {
        this.cdConfig = cdConfig;
        // this can be ANY value from ANY service which causes re-rendering
        this.val$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.strategy$ = this.cdConfig.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => s.strategy));
    }
}
ScrollItemComponent.ɵfac = function ScrollItemComponent_Factory(t) { return new (t || ScrollItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_debug_helper_strategy_control_panel__WEBPACK_IMPORTED_MODULE_2__["CdConfigService"])); };
ScrollItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollItemComponent, selectors: [["rxa-scroll-item"]], decls: 3, vars: 4, consts: [[2, "margin", "0 1rem"]], template: function ScrollItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Val: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.val$, ctx.strategy$), "");
    } }, pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_4__["PushPipe"]], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    align-items: center;\n    height: 50px;\n    outline: 1px solid gray;\n    padding: 1rem;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-scroll-item',
                styles: [`:host {
    display: flex;
    align-items: center;
    height: 50px;
    outline: 1px solid gray;
    padding: 1rem;
  }`],
                template: `
    <span style="margin: 0 1rem;">Val: {{ val$ | push: strategy$ }}</span>
  `,
            }]
    }], function () { return [{ type: _shared_debug_helper_strategy_control_panel__WEBPACK_IMPORTED_MODULE_2__["CdConfigService"] }]; }, null); })();


/***/ }),

/***/ "rWNn":
/*!************************************************************************************************!*\
  !*** ./src/app/features/template/strategies/virtual-scroll-demo/virtual-scroll-demo.routes.ts ***!
  \************************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _virtual_scroll_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-scroll-demo.component */ "srLG");

const ROUTES = [
    {
        path: '',
        component: _virtual_scroll_demo_component__WEBPACK_IMPORTED_MODULE_0__["VirtualScrollDemoComponent"]
    }
];


/***/ }),

/***/ "srLG":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/template/strategies/virtual-scroll-demo/virtual-scroll-demo.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VirtualScrollDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollDemoComponent", function() { return VirtualScrollDemoComponent; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _scroll_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-item.component */ "N/Zl");





function VirtualScrollDemoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rxa-scroll-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Item: ", item_r1, "");
} }
class VirtualScrollDemoComponent {
    constructor() {
        this.items = this.getItems();
    }
    ngAfterViewInit() {
        this.scrollViewPort.checkViewportSize();
    }
    getItems() {
        return Array(200)
            .fill(1)
            .map((v, i) => v + i);
    }
}
VirtualScrollDemoComponent.ɵfac = function VirtualScrollDemoComponent_Factory(t) { return new (t || VirtualScrollDemoComponent)(); };
VirtualScrollDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VirtualScrollDemoComponent, selectors: [["rxa-virtual-scroll-demo"]], viewQuery: function VirtualScrollDemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollViewPort = _t.first);
    } }, decls: 4, vars: 2, consts: [[2, "height", "500px", 3, "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"]], template: function VirtualScrollDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Virtual Scroll Viewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VirtualScrollDemoComponent_div_3_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemSize", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", ctx.items);
    } }, directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _scroll_item_component__WEBPACK_IMPORTED_MODULE_2__["ScrollItemComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rxa-virtual-scroll-demo',
                template: `
    <h1>Virtual Scroll Viewport</h1>
    <cdk-virtual-scroll-viewport [itemSize]="50" style="height: 500px;">
      <div *cdkVirtualFor="let item of items; let index = index">
        <rxa-scroll-item>
          <span>Item: {{ item }}</span>
        </rxa-scroll-item>
      </div>
    </cdk-virtual-scroll-viewport>
  `
            }]
    }], function () { return []; }, { scrollViewPort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=virtual-scroll-demo-virtual-scroll-demo-module.js.map