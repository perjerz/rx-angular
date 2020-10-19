(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["http-errors-http-error-module"],{

/***/ "2hE/":
/*!*******************************************************************************!*\
  !*** ./src/app/features/template/rx-let/http-errors/http-errors.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HttpErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorsComponent", function() { return HttpErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");











function HttpErrorsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const e_r2 = ctx.$rxError;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" R: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, r_r1), " E: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, e_r2), " ");
} }
class HttpErrorsComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.httpResponse$ = this.setup();
    }
    setup() {
        return this.error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(parseError(e))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    reset() {
        this.httpResponse$ = this.setup();
        this.cdRef.detectChanges();
    }
    offlineError() {
        this.error$.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({ status: 0 }));
    }
    authError() {
        this.error$.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({ status: 401 }));
    }
    accessError() {
        this.error$.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({ status: 403 }));
    }
    serverError() {
        this.error$.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({ status: 501 }));
    }
}
HttpErrorsComponent.ɵfac = function HttpErrorsComponent_Factory(t) { return new (t || HttpErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HttpErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpErrorsComponent, selectors: [["rxa-http-errors"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]])], decls: 17, vars: 1, consts: [[1, "card"], [4, "rxLet"], ["mat-button", "", 3, "unpatch", "click"]], template: function HttpErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTTP Errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HttpErrorsComponent_div_5_Template, 6, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HttpErrorsComponent_Template_button_click_7_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HttpErrorsComponent_Template_button_click_9_listener() { return ctx.offlineError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " offline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HttpErrorsComponent_Template_button_click_11_listener() { return ctx.authError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " auth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HttpErrorsComponent_Template_button_click_13_listener() { return ctx.accessError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HttpErrorsComponent_Template_button_click_15_listener() { return ctx.serverError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.httpResponse$);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["LetDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_8__["UnpatchEventsDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], styles: ["mat-card-content[_ngcontent-%COMP%] {\n        min-height: 10rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      mat-icon[_ngcontent-%COMP%] {\n        font-size: 5rem;\n        height: initial;\n        width: initial;\n      }\n\n      .card[_ngcontent-%COMP%] {\n        margin: 2rem;\n        text-align: center;\n        width: 20rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-http-errors',
                template: `
    <mat-card class="card">
      <mat-card-header>
        <h1>HTTP Errors</h1>
      </mat-card-header>

      <mat-card-content>
        <div *rxLet="httpResponse$;
            let r;
            let e = $rxError;
            ">
          <h2>Default Template</h2>
          R: {{ r | json }}
          E: {{ e | json }}
        </div>

      </mat-card-content>

      <mat-card-actions>
        <button mat-button [unpatch] (click)="reset()">
          reset
        </button>
        <button mat-button [unpatch] (click)="offlineError()">
          offline
        </button>
        <button mat-button [unpatch] (click)="authError()">
          auth
        </button>
        <button mat-button [unpatch] (click)="accessError()">
          access
        </button>
        <button mat-button [unpatch] (click)="serverError()">
          server
        </button>
      </mat-card-actions>
    </mat-card>



  `,
                styles: [
                    `
      mat-card-content {
        min-height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      mat-icon {
        font-size: 5rem;
        height: initial;
        width: initial;
      }

      .card {
        margin: 2rem;
        text-align: center;
        width: 20rem;
      }
    `
                ],
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
function parseError(e) {
    if (e.status === 0) {
        return 'Offline Error!';
    }
    if (e.status === 401) {
        return 'Auth Error!';
    }
    if (e.status === 403) {
        return 'Access Error!';
    }
    if (e.status === 501) {
        return 'Server Error!';
    }
    return 'Unknown Error';
}


/***/ }),

/***/ "Osln":
/*!***************************************************************************!*\
  !*** ./src/app/features/template/rx-let/http-errors/http-error.routes.ts ***!
  \***************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _http_errors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-errors.component */ "2hE/");

const ROUTES = [
    {
        path: '',
        component: _http_errors_component__WEBPACK_IMPORTED_MODULE_0__["HttpErrorsComponent"]
    }
];


/***/ }),

/***/ "hALZ":
/*!***************************************************************************!*\
  !*** ./src/app/features/template/rx-let/http-errors/http-error.module.ts ***!
  \***************************************************************************/
/*! exports provided: HttpErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorModule", function() { return HttpErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/ghost-elements */ "jRUy");
/* harmony import */ var _http_error_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-error.routes */ "Osln");
/* harmony import */ var _http_errors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http-errors.component */ "2hE/");
















const DECLARATIONS = [
    _http_errors_component__WEBPACK_IMPORTED_MODULE_13__["HttpErrorsComponent"]
];
class HttpErrorModule {
}
HttpErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpErrorModule });
HttpErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpErrorModule_Factory(t) { return new (t || HttpErrorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_11__["GhostElementsModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_http_error_routes__WEBPACK_IMPORTED_MODULE_12__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpErrorModule, { declarations: [_http_errors_component__WEBPACK_IMPORTED_MODULE_13__["HttpErrorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_11__["GhostElementsModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                    _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_11__["GhostElementsModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_http_error_routes__WEBPACK_IMPORTED_MODULE_12__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=http-errors-http-error-module.js.map