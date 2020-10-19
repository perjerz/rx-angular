(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-handling-error-handing-module"],{

/***/ "/5j/":
/*!*************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/error-handling/error-handling.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ErrorHandlingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingComponent", function() { return ErrorHandlingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _shared_ghost_elements_form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/ghost-elements/form-ghost/form-ghost.component */ "tsx4");













function ErrorHandlingComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$rxError;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r4, " ");
} }
const _c0 = function (a0) { return { "let-error": a0 }; };
function ErrorHandlingComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorHandlingComponent_div_8_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ErrorHandlingComponent_div_8_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.numbersSubject$.next($event.target == null ? null : $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const e_r4 = ctx.$rxError;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, e_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", r_r3);
} }
function ErrorHandlingComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-form-ghost");
} }
class ErrorHandlingComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.numbersSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.numbers$ = this.setup();
    }
    setup() {
        return this.numbersSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => {
            const n = parseInt(s, 10);
            if (n === -1 || isNaN(n)) {
                throw new Error('useless information');
            }
            return n;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((a, n) => n === 0 ? ++a : n), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    reset() {
        this.numbers$ = this.setup();
        this.cdRef.detectChanges();
    }
}
ErrorHandlingComponent.ɵfac = function ErrorHandlingComponent_Factory(t) { return new (t || ErrorHandlingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ErrorHandlingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandlingComponent, selectors: [["rxa-let-error-handling"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], decls: 18, vars: 2, consts: [[1, "card"], [3, "ngClass", 4, "rxLet", "rxLetRxSuspense"], ["suspenseView", ""], ["mat-button", "", 3, "unpatch", "click"], [3, "ngClass"], ["class", "error-message", 4, "ngIf"], ["type", "text", "matInput", "", 3, "value", "input"], ["mat-raised-button", "", "color", "primary"], [1, "error-message"]], template: function ErrorHandlingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error Handling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "error template & rx-context class names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ErrorHandlingComponent_div_8_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ErrorHandlingComponent_ng_template_9_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlingComponent_Template_button_click_12_listener() { return ctx.numbersSubject$.next("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " init ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlingComponent_Template_button_click_14_listener() { return ctx.numbersSubject$.next("-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " error ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlingComponent_Template_button_click_16_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.numbers$)("rxLetRxSuspense", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__["UnpatchEventsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _shared_ghost_elements_form_ghost_form_ghost_component__WEBPACK_IMPORTED_MODULE_11__["FormGhostComponent"]], styles: ["mat-card-content[_ngcontent-%COMP%] {\n      min-height: 10rem;\n    }\n\n    .card[_ngcontent-%COMP%] {\n      margin: 2rem;\n      width: 20rem;\n    }\n\n    .error-message[_ngcontent-%COMP%] {\n      border: 1px solid red;\n      background-color: rgba(211, 211, 211, 0.7);\n      color: red;\n      position: absolute;\n      top: 100%;\n      left: 50%;\n      text-align: center;\n      z-index: 10;\n      padding: 10px;\n      margin: -25% -25%;\n      display: block;\n      line-height: 45px;\n    }\n\n    .let-error[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .let-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      transform: scale(1) rotate(2deg) !important;\n    }\n\n    .let-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      transform: scale(1) rotate(4deg) !important;\n    }\n\n    .let-error[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n      color: red;\n      border-color: red;\n      transform: scale(1) rotate(-2deg) !important;\n    }\n\n    .let-error[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n      transform: scale(1) rotate(5deg) !important;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-let-error-handling',
                template: `
    <mat-card class="card">

      <mat-card-header>
        <h3>Error Handling <br/>
          <small>error template & rx-context class names</small>
        </h3>
      </mat-card-header>

      <mat-card-content>
        <div
          [ngClass]="{'let-error': e}"
          *rxLet="numbers$;
            let r;
            let e = $rxError;
            rxSuspense: suspenseView
            "
        >
          <div *ngIf="e" class="error-message">
            {{e}}
          </div>
          <mat-form-field>
            <label>Age</label>
            <input
              type="text"
              [value]="r"
              (input)="numbersSubject$.next($event.target?.value)"
              matInput/>
          </mat-form-field>
          <br/>
          <button mat-raised-button color="primary">Send</button>
        </div>

        <ng-template #suspenseView>
          <rxa-form-ghost></rxa-form-ghost>
        </ng-template>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button [unpatch] (click)="numbersSubject$.next('0')">
          init
        </button>
        <button mat-button [unpatch] (click)="numbersSubject$.next('-1')">
          error
        </button>
        <button mat-button [unpatch] (click)="reset()">
          reset
        </button>
      </mat-card-actions>

    </mat-card>
  `,
                styles: [`
    mat-card-content {
      min-height: 10rem;
    }

    .card {
      margin: 2rem;
      width: 20rem;
    }

    .error-message {
      border: 1px solid red;
      background-color: rgba(211, 211, 211, 0.7);
      color: red;
      position: absolute;
      top: 100%;
      left: 50%;
      text-align: center;
      z-index: 10;
      padding: 10px;
      margin: -25% -25%;
      display: block;
      line-height: 45px;
    }

    .let-error {
        position: relative;
    }

    .let-error input {
      transform: scale(1) rotate(2deg) !important;
    }

    .let-error input {
      transform: scale(1) rotate(4deg) !important;
    }

    .let-error mat-form-field {
      color: red;
      border-color: red;
      transform: scale(1) rotate(-2deg) !important;
    }

    .let-error .mat-button-base {
      transform: scale(1) rotate(5deg) !important;
    }

  `],
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "GXpZ":
/*!*********************************************************************************!*\
  !*** ./src/app/features/template/rx-let/error-handling/error-handing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ErrorHandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandingModule", function() { return ErrorHandingModule; });
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
/* harmony import */ var _error_handling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-handling.component */ "/5j/");
/* harmony import */ var _error_handling_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-handling.routes */ "a0YD");
/* harmony import */ var _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/ghost-elements */ "jRUy");
















const DECLARATIONS = [
    _error_handling_component__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlingComponent"]
];
class ErrorHandingModule {
}
ErrorHandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorHandingModule });
ErrorHandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorHandingModule_Factory(t) { return new (t || ErrorHandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_13__["GhostElementsModule"],
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_error_handling_routes__WEBPACK_IMPORTED_MODULE_12__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorHandingModule, { declarations: [_error_handling_component__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_13__["GhostElementsModule"],
        _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandingModule, [{
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
                    _shared_ghost_elements__WEBPACK_IMPORTED_MODULE_13__["GhostElementsModule"],
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_10__["DirtyChecksModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_error_handling_routes__WEBPACK_IMPORTED_MODULE_12__["ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "a0YD":
/*!**********************************************************************************!*\
  !*** ./src/app/features/template/rx-let/error-handling/error-handling.routes.ts ***!
  \**********************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _error_handling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handling.component */ "/5j/");

const ROUTES = [
    {
        path: '',
        component: _error_handling_component__WEBPACK_IMPORTED_MODULE_0__["ErrorHandlingComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=error-handling-error-handing-module.js.map