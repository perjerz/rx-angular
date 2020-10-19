(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["let-template-binding-let-template-binding-module"],{

/***/ "63T/":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/util/tryCatch.js ***!
  \****************************************************************************************************/
/*! exports provided: tryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony import */ var _errorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorObject */ "n+1C");

let tryCatchTarget;
function tryCatcher() {
    _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"].e = undefined;
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"].e = e;
        return _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"];
    }
    finally {
        tryCatchTarget = undefined;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "HsO4":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/fromPromise.js ***!
  \*************************************************************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToPromise */ "8V6W");
/* harmony import */ var _scheduled_schedulePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/schedulePromise */ "PmMP");



function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(input));
    }
    else {
        return Object(_scheduled_schedulePromise__WEBPACK_IMPORTED_MODULE_2__["schedulePromise"])(input, scheduler);
    }
}
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "IeEz":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/let-template-binding.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: LetTemplateBindingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetTemplateBindingModule", function() { return LetTemplateBindingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _let_template_binding_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./let-template-binding.routes */ "hBar");
/* harmony import */ var _let_template_binding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./let-template-binding.component */ "VIu/");
/* harmony import */ var _examples_let_template_binding_http_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/let-template-binding-http-example.component */ "sONs");
/* harmony import */ var _examples_let_template_binding_subject_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/let-template-binding-subject-example.component */ "SINa");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _to_string_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-string.pipe */ "yYYG");
















const DECLARATIONS = [
    _to_string_pipe__WEBPACK_IMPORTED_MODULE_13__["ToStringPipe"],
    _let_template_binding_component__WEBPACK_IMPORTED_MODULE_4__["LetTemplateBindingComponent"],
    _examples_let_template_binding_http_example_component__WEBPACK_IMPORTED_MODULE_5__["LetTemplateBindingHttpExampleComponent"],
    _examples_let_template_binding_subject_example_component__WEBPACK_IMPORTED_MODULE_6__["LetTemplateBindingSubjectExampleComponent"],
];
class LetTemplateBindingModule {
}
LetTemplateBindingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LetTemplateBindingModule });
LetTemplateBindingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LetTemplateBindingModule_Factory(t) { return new (t || LetTemplateBindingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_let_template_binding_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["UnpatchEventsModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["PushModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["LetModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LetTemplateBindingModule, { declarations: [_to_string_pipe__WEBPACK_IMPORTED_MODULE_13__["ToStringPipe"],
        _let_template_binding_component__WEBPACK_IMPORTED_MODULE_4__["LetTemplateBindingComponent"],
        _examples_let_template_binding_http_example_component__WEBPACK_IMPORTED_MODULE_5__["LetTemplateBindingHttpExampleComponent"],
        _examples_let_template_binding_subject_example_component__WEBPACK_IMPORTED_MODULE_6__["LetTemplateBindingSubjectExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["UnpatchEventsModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["PushModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["LetModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetTemplateBindingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_let_template_binding_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]),
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["UnpatchEventsModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["PushModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_11__["LetModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "SINa":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/examples/let-template-binding-subject-example.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: LetTemplateBindingSubjectExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetTemplateBindingSubjectExampleComponent", function() { return LetTemplateBindingSubjectExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _to_string_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../to-string.pipe */ "yYYG");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "2kYt");














function LetTemplateBindingSubjectExampleComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " value emitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, count_r7));
} }
function LetTemplateBindingSubjectExampleComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Completed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingSubjectExampleComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingSubjectExampleComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80)("color", "primary")("mode", "indeterminate");
} }
class LetTemplateBindingSubjectExampleComponent {
    constructor() {
        this.errorStub = new Error('Template observable error!');
        this.visibleStrategy = 'local';
        this.reset();
    }
    random() {
        return Math.random();
    }
    reset() {
        this.signals$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.signalsCount$ = this.signals$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((acc) => acc + 1, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0));
    }
}
LetTemplateBindingSubjectExampleComponent.ɵfac = function LetTemplateBindingSubjectExampleComponent_Factory(t) { return new (t || LetTemplateBindingSubjectExampleComponent)(); };
LetTemplateBindingSubjectExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetTemplateBindingSubjectExampleComponent, selectors: [["rxa-let-template-binding-subject-example"]], decls: 26, vars: 13, consts: [[1, "card"], ["mat-button", "", 1, "btn-reset", 3, "click"], [4, "rxLet", "rxLetStrategy", "rxLetRxComplete", "rxLetRxError", "rxLetRxSuspense"], ["mat-button", "", 3, "unpatch", "click"], ["mat-button", "", 3, "matBadge", "matBadgeHidden", "unpatch", "click"], ["complete", ""], ["error", ""], ["suspense", ""], [1, "notification-icon", "complete-icon"], [1, "notification-icon", "error-icon"], [3, "diameter", "color", "mode"]], template: function LetTemplateBindingSubjectExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingSubjectExampleComponent_Template_button_click_4_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RESET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LetTemplateBindingSubjectExampleComponent_div_9_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingSubjectExampleComponent_Template_button_click_11_listener() { return ctx.signals$.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " COMPLETE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingSubjectExampleComponent_Template_button_click_13_listener() { return ctx.signals$.next(ctx.random()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "toString");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingSubjectExampleComponent_Template_button_click_18_listener() { return ctx.signals$.error(ctx.errorStub); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ERROR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LetTemplateBindingSubjectExampleComponent_ng_template_20_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LetTemplateBindingSubjectExampleComponent_ng_template_22_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LetTemplateBindingSubjectExampleComponent_ng_template_24_Template, 1, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.signals$)("rxLetStrategy", ctx.visibleStrategy)("rxLetRxComplete", _r1)("rxLetRxError", _r3)("rxLetRxSuspense", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, ctx.signalsCount$)))("matBadgeHidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, ctx.signalsCount$) === 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["LetDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__["UnpatchEventsDirective"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinner"]], pipes: [_to_string_pipe__WEBPACK_IMPORTED_MODULE_10__["ToStringPipe"], _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__["PushPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n        margin: 0;\n      }\n\n      mat-card-content[_ngcontent-%COMP%] {\n        min-height: 10rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .notification-icon[_ngcontent-%COMP%] {\n        font-size: 5rem;\n        height: initial;\n        width: initial;\n      }\n\n      .btn-reset[_ngcontent-%COMP%] {\n        margin-left: 2rem;\n      }\n\n      .card[_ngcontent-%COMP%] {\n        margin: 2rem;\n        text-align: center;\n        width: 20rem;\n      }\n\n      .complete-icon[_ngcontent-%COMP%] {\n        color: forestgreen;\n      }\n\n      .error-icon[_ngcontent-%COMP%] {\n        color: darkred;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetTemplateBindingSubjectExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-let-template-binding-subject-example',
                template: `
    <mat-card class="card">
      <mat-card-header>
        <h1>Subject</h1>
        <button class="btn-reset" mat-button (click)="reset()">
          <mat-icon>refresh</mat-icon>RESET
        </button>
      </mat-card-header>

      <mat-card-content>
        <div
          *rxLet="
            signals$;
            let count;
            strategy: visibleStrategy;
            rxComplete: complete;
            rxError: error;
            rxSuspense: suspense
          "
        >
          value emitted
          <h2>{{ count | json }}</h2>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <button mat-button [unpatch] (click)="signals$.complete()">
          COMPLETE
        </button>
        <button
          mat-button
          [matBadge]="signalsCount$ | push | toString"
          [matBadgeHidden]="(signalsCount$ | push) === 0"
          [unpatch]
          (click)="signals$.next(random())"
        >
          NEXT
        </button>
        <button mat-button [unpatch] (click)="signals$.error(errorStub)">
          ERROR
        </button>
      </mat-card-actions>
    </mat-card>

    <ng-template #complete>
      <div>
        <mat-icon class="notification-icon complete-icon">thumb_up</mat-icon>
        <h2>Completed!</h2>
      </div>
    </ng-template>
    <ng-template #error>
      <div>
        <mat-icon class="notification-icon error-icon">thumb_down</mat-icon>
        <h2>Something went wrong...</h2>
      </div>
    </ng-template>
    <ng-template #suspense>
      <mat-progress-spinner
        [diameter]="80"
        [color]="'primary'"
        [mode]="'indeterminate'"
      ></mat-progress-spinner>
    </ng-template>
  `,
                styles: [
                    `
      h1 {
        margin: 0;
      }

      mat-card-content {
        min-height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .notification-icon {
        font-size: 5rem;
        height: initial;
        width: initial;
      }

      .btn-reset {
        margin-left: 2rem;
      }

      .card {
        margin: 2rem;
        text-align: center;
        width: 20rem;
      }

      .complete-icon {
        color: forestgreen;
      }

      .error-icon {
        color: darkred;
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TF3f":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/util/root.js ***!
  \************************************************************************************************/
/*! exports provided: root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _root; });
const __window = typeof window !== 'undefined' && window;
const __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
const __global = typeof global !== 'undefined' && global;
const _root = __window || __global || __self;
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();

//# sourceMappingURL=root.js.map

/***/ }),

/***/ "VIu/":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/let-template-binding.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LetTemplateBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetTemplateBindingComponent", function() { return LetTemplateBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _examples_let_template_binding_subject_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/let-template-binding-subject-example.component */ "SINa");
/* harmony import */ var _examples_let_template_binding_http_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/let-template-binding-http-example.component */ "sONs");




class LetTemplateBindingComponent {
}
LetTemplateBindingComponent.ɵfac = function LetTemplateBindingComponent_Factory(t) { return new (t || LetTemplateBindingComponent)(); };
LetTemplateBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetTemplateBindingComponent, selectors: [["rxa-let-template-binding"]], decls: 2, vars: 0, template: function LetTemplateBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-let-template-binding-subject-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-let-template-binding-http-example");
    } }, directives: [_examples_let_template_binding_subject_example_component__WEBPACK_IMPORTED_MODULE_1__["LetTemplateBindingSubjectExampleComponent"], _examples_let_template_binding_http_example_component__WEBPACK_IMPORTED_MODULE_2__["LetTemplateBindingHttpExampleComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetTemplateBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-let-template-binding',
                template: `
    <rxa-let-template-binding-subject-example></rxa-let-template-binding-subject-example>
    <rxa-let-template-binding-http-example></rxa-let-template-binding-http-example>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "YTyk":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal-compatibility/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: config, InnerSubscriber, OuterSubscriber, Scheduler, AnonymousSubject, SubjectSubscription, Subscriber, fromPromise, fromIterable, ajax, webSocket, ajaxGet, ajaxPost, ajaxDelete, ajaxPut, ajaxPatch, ajaxGetJSON, AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError, WebSocketSubject, CombineLatestOperator, dispatch, SubscribeOnObservable, Timestamp, TimeInterval, GroupedObservable, defaultThrottleConfig, rxSubscriber, iterator, observable, ArgumentOutOfRangeError, EmptyError, Immediate, ObjectUnsubscribedError, TimeoutError, UnsubscriptionError, applyMixins, errorObject, hostReportError, identity, isArray, isArrayLike, isDate, isFunction, isIterable, isNumeric, isObject, isObservable, isPromise, isScheduler, noop, not, pipe, root, subscribeTo, subscribeToArray, subscribeToIterable, subscribeToObservable, subscribeToPromise, subscribeToResult, toSubscriber, tryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/config */ "HgnN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony import */ var _internal_InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/InnerSubscriber */ "r9RI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return _internal_InnerSubscriber__WEBPACK_IMPORTED_MODULE_1__["InnerSubscriber"]; });

/* harmony import */ var _internal_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/OuterSubscriber */ "pBDD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return _internal_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/Scheduler */ "7Alh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_3__["Scheduler"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/Subject */ "ZTXN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["AnonymousSubject"]; });

/* harmony import */ var _internal_SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/SubjectSubscription */ "yTkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return _internal_SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/Subscriber */ "5uGe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_6__["Subscriber"]; });

/* harmony import */ var _internal_observable_fromPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/observable/fromPromise */ "HsO4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _internal_observable_fromPromise__WEBPACK_IMPORTED_MODULE_7__["fromPromise"]; });

/* harmony import */ var _internal_observable_fromIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/observable/fromIterable */ "nZ34");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return _internal_observable_fromIterable__WEBPACK_IMPORTED_MODULE_8__["fromIterable"]; });

/* harmony import */ var _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/observable/dom/ajax */ "z6MO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return _internal_observable_dom_ajax__WEBPACK_IMPORTED_MODULE_9__["ajax"]; });

/* harmony import */ var _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/observable/dom/webSocket */ "yBos");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webSocket", function() { return _internal_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_10__["webSocket"]; });

/* harmony import */ var _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/observable/dom/AjaxObservable */ "sTOR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxGet", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxPost", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxDelete", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxPut", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxPatch", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxPatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["ajaxGetJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxObservable", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxSubscriber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxResponse", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxError", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function() { return _internal_observable_dom_AjaxObservable__WEBPACK_IMPORTED_MODULE_11__["AjaxTimeoutError"]; });

/* harmony import */ var _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/observable/dom/WebSocketSubject */ "fdH0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function() { return _internal_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_12__["WebSocketSubject"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/observable/combineLatest */ "HM3f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_13__["CombineLatestOperator"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../internal/observable/range */ "pgG0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_14__["dispatch"]; });

/* harmony import */ var _internal_observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../internal/observable/SubscribeOnObservable */ "vcZZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function() { return _internal_observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_15__["SubscribeOnObservable"]; });

/* harmony import */ var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../internal/operators/timestamp */ "it7j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_16__["Timestamp"]; });

/* harmony import */ var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../internal/operators/timeInterval */ "hFTr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeInterval", function() { return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_17__["TimeInterval"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../internal/operators/groupBy */ "xtkq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_18__["GroupedObservable"]; });

/* harmony import */ var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../internal/operators/throttle */ "IeS+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function() { return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_19__["defaultThrottleConfig"]; });

/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "25CY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_20__["rxSubscriber"]; });

/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../internal/symbol/iterator */ "sWLk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_21__["iterator"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../internal/symbol/observable */ "qEfY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_22__["observable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../internal/util/ArgumentOutOfRangeError */ "PNff");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../internal/util/EmptyError */ "VxHp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__["EmptyError"]; });

/* harmony import */ var _internal_util_Immediate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../internal/util/Immediate */ "L7US");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return _internal_util_Immediate__WEBPACK_IMPORTED_MODULE_25__["Immediate"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../internal/util/ObjectUnsubscribedError */ "MiDb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../internal/util/TimeoutError */ "cmhy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_27__["TimeoutError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../internal/util/UnsubscriptionError */ "uTrF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_28__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_applyMixins__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../internal/util/applyMixins */ "vSOf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return _internal_util_applyMixins__WEBPACK_IMPORTED_MODULE_29__["applyMixins"]; });

/* harmony import */ var _internal_util_errorObject__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../internal/util/errorObject */ "n+1C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorObject", function() { return _internal_util_errorObject__WEBPACK_IMPORTED_MODULE_30__["errorObject"]; });

/* harmony import */ var _internal_util_hostReportError__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../internal/util/hostReportError */ "i9P/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return _internal_util_hostReportError__WEBPACK_IMPORTED_MODULE_31__["hostReportError"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../internal/util/identity */ "5E2i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_32__["identity"]; });

/* harmony import */ var _internal_util_isArray__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../internal/util/isArray */ "FU6l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _internal_util_isArray__WEBPACK_IMPORTED_MODULE_33__["isArray"]; });

/* harmony import */ var _internal_util_isArrayLike__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../internal/util/isArrayLike */ "eY+9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return _internal_util_isArrayLike__WEBPACK_IMPORTED_MODULE_34__["isArrayLike"]; });

/* harmony import */ var _internal_util_isDate__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../internal/util/isDate */ "iRe+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _internal_util_isDate__WEBPACK_IMPORTED_MODULE_35__["isDate"]; });

/* harmony import */ var _internal_util_isFunction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../internal/util/isFunction */ "IJgj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _internal_util_isFunction__WEBPACK_IMPORTED_MODULE_36__["isFunction"]; });

/* harmony import */ var _internal_util_isIterable__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../internal/util/isIterable */ "On4S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _internal_util_isIterable__WEBPACK_IMPORTED_MODULE_37__["isIterable"]; });

/* harmony import */ var _internal_util_isNumeric__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../internal/util/isNumeric */ "KRZI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return _internal_util_isNumeric__WEBPACK_IMPORTED_MODULE_38__["isNumeric"]; });

/* harmony import */ var _internal_util_isObject__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../internal/util/isObject */ "X0qr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _internal_util_isObject__WEBPACK_IMPORTED_MODULE_39__["isObject"]; });

/* harmony import */ var _internal_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../internal/util/isInteropObservable */ "hZDH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_40__["isInteropObservable"]; });

/* harmony import */ var _internal_util_isPromise__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../internal/util/isPromise */ "/vgl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _internal_util_isPromise__WEBPACK_IMPORTED_MODULE_41__["isPromise"]; });

/* harmony import */ var _internal_util_isScheduler__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../internal/util/isScheduler */ "gBlb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return _internal_util_isScheduler__WEBPACK_IMPORTED_MODULE_42__["isScheduler"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../internal/util/noop */ "kgbq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_43__["noop"]; });

/* harmony import */ var _internal_util_not__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../internal/util/not */ "Xm0Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _internal_util_not__WEBPACK_IMPORTED_MODULE_44__["not"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../internal/util/pipe */ "Ti3e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_45__["pipe"]; });

/* harmony import */ var _internal_util_root__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../internal/util/root */ "TF3f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _internal_util_root__WEBPACK_IMPORTED_MODULE_46__["root"]; });

/* harmony import */ var _internal_util_subscribeTo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../internal/util/subscribeTo */ "1MAX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return _internal_util_subscribeTo__WEBPACK_IMPORTED_MODULE_47__["subscribeTo"]; });

/* harmony import */ var _internal_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../internal/util/subscribeToArray */ "dUuy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return _internal_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_48__["subscribeToArray"]; });

/* harmony import */ var _internal_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../internal/util/subscribeToIterable */ "qhtU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return _internal_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_49__["subscribeToIterable"]; });

/* harmony import */ var _internal_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../internal/util/subscribeToObservable */ "wIzt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return _internal_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_50__["subscribeToObservable"]; });

/* harmony import */ var _internal_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../internal/util/subscribeToPromise */ "8V6W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return _internal_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_51__["subscribeToPromise"]; });

/* harmony import */ var _internal_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../internal/util/subscribeToResult */ "mW0F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return _internal_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_52__["subscribeToResult"]; });

/* harmony import */ var _internal_util_toSubscriber__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../internal/util/toSubscriber */ "qNSz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return _internal_util_toSubscriber__WEBPACK_IMPORTED_MODULE_53__["toSubscriber"]; });

/* harmony import */ var _internal_util_tryCatch__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../internal/util/tryCatch */ "63T/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return _internal_util_tryCatch__WEBPACK_IMPORTED_MODULE_54__["tryCatch"]; });
























































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "fdH0":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/dom/WebSocketSubject.js ***!
  \**********************************************************************************************************************/
/*! exports provided: WebSocketSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketSubject", function() { return WebSocketSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Subject */ "ZTXN");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Subscriber */ "5uGe");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Observable */ "IdLP");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Subscription */ "bwdy");
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ReplaySubject */ "QQZH");





const DEFAULT_WEBSOCKET_CONFIG = {
    url: '',
    deserializer: (e) => JSON.parse(e.data),
    serializer: (value) => JSON.stringify(value),
};
const WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
class WebSocketSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["AnonymousSubject"] {
    constructor(urlConfigOrSource, destination) {
        super();
        if (urlConfigOrSource instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            this.destination = destination;
            this.source = urlConfigOrSource;
        }
        else {
            const config = this._config = Object.assign({}, DEFAULT_WEBSOCKET_CONFIG);
            this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            if (typeof urlConfigOrSource === 'string') {
                config.url = urlConfigOrSource;
            }
            else {
                for (let key in urlConfigOrSource) {
                    if (urlConfigOrSource.hasOwnProperty(key)) {
                        config[key] = urlConfigOrSource[key];
                    }
                }
            }
            if (!config.WebSocketCtor && WebSocket) {
                config.WebSocketCtor = WebSocket;
            }
            else if (!config.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }
    }
    lift(operator) {
        const sock = new WebSocketSubject(this._config, this.destination);
        sock.operator = operator;
        sock.source = this;
        return sock;
    }
    _resetState() {
        this._socket = null;
        if (!this.source) {
            this.destination = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }
        this._output = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    multiplex(subMsg, unsubMsg, messageFilter) {
        const self = this;
        return new _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            try {
                self.next(subMsg());
            }
            catch (err) {
                observer.error(err);
            }
            const subscription = self.subscribe(x => {
                try {
                    if (messageFilter(x)) {
                        observer.next(x);
                    }
                }
                catch (err) {
                    observer.error(err);
                }
            }, err => observer.error(err), () => observer.complete());
            return () => {
                try {
                    self.next(unsubMsg());
                }
                catch (err) {
                    observer.error(err);
                }
                subscription.unsubscribe();
            };
        });
    }
    _connectSocket() {
        const { WebSocketCtor, protocol, url, binaryType } = this._config;
        const observer = this._output;
        let socket = null;
        try {
            socket = protocol ?
                new WebSocketCtor(url, protocol) :
                new WebSocketCtor(url);
            this._socket = socket;
            if (binaryType) {
                this._socket.binaryType = binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](() => {
            this._socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = (e) => {
            const { _socket } = this;
            if (!_socket) {
                socket.close();
                this._resetState();
                return;
            }
            const { openObserver } = this._config;
            if (openObserver) {
                openObserver.next(e);
            }
            const queue = this.destination;
            this.destination = _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"].create((x) => {
                if (socket.readyState === 1) {
                    try {
                        const { serializer } = this._config;
                        socket.send(serializer(x));
                    }
                    catch (e) {
                        this.destination.error(e);
                    }
                }
            }, (e) => {
                const { closingObserver } = this._config;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                }
                this._resetState();
            }, () => {
                const { closingObserver } = this._config;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                this._resetState();
            });
            if (queue && queue instanceof _ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]) {
                subscription.add(queue.subscribe(this.destination));
            }
        };
        socket.onerror = (e) => {
            this._resetState();
            observer.error(e);
        };
        socket.onclose = (e) => {
            this._resetState();
            const { closeObserver } = this._config;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = (e) => {
            try {
                const { deserializer } = this._config;
                observer.next(deserializer(e));
            }
            catch (err) {
                observer.error(err);
            }
        };
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this._socket) {
            this._connectSocket();
        }
        this._output.subscribe(subscriber);
        subscriber.add(() => {
            const { _socket } = this;
            if (this._output.observers.length === 0) {
                if (_socket && _socket.readyState === 1) {
                    _socket.close();
                }
                this._resetState();
            }
        });
        return subscriber;
    }
    unsubscribe() {
        const { _socket } = this;
        if (_socket && _socket.readyState === 1) {
            _socket.close();
        }
        this._resetState();
        super.unsubscribe();
    }
}
//# sourceMappingURL=WebSocketSubject.js.map

/***/ }),

/***/ "hBar":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/let-template-binding.routes.ts ***!
  \**********************************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _let_template_binding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./let-template-binding.component */ "VIu/");

const ROUTES = [
    {
        path: '',
        component: _let_template_binding_component__WEBPACK_IMPORTED_MODULE_0__["LetTemplateBindingComponent"]
    }
];


/***/ }),

/***/ "n+1C":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/util/errorObject.js ***!
  \*******************************************************************************************************/
/*! exports provided: errorObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorObject", function() { return errorObject; });
const errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "nZ34":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/fromIterable.js ***!
  \**************************************************************************************************************/
/*! exports provided: fromIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return fromIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToIterable */ "qhtU");
/* harmony import */ var _scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleIterable */ "+ynE");



function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_1__["subscribeToIterable"])(input));
    }
    else {
        return Object(_scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_2__["scheduleIterable"])(input, scheduler);
    }
}
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "sONs":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/examples/let-template-binding-http-example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LetTemplateBindingHttpExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetTemplateBindingHttpExampleComponent", function() { return LetTemplateBindingHttpExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal-compatibility */ "YTyk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/let/let.directive */ "+W5W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/push/push.pipe */ "3dr7");













function LetTemplateBindingHttpExampleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " random Star Wars character fetched! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r10);
} }
function LetTemplateBindingHttpExampleComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingHttpExampleComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startFetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " START ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingHttpExampleComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingHttpExampleComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.completeFetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " COMPLETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingHttpExampleComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetTemplateBindingHttpExampleComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.errorFetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ERROR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingHttpExampleComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Completed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingHttpExampleComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetTemplateBindingHttpExampleComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80)("color", "primary")("mode", "indeterminate");
} }
class LetTemplateBindingHttpExampleComponent {
    constructor() {
        this.visibleStrategy = 'local';
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.heroes$ = this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.error$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([_, error]) => {
                if (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
                }
                else {
                    return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_2__["fromPromise"])(fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 50) + 1}`).then((a) => a.json()));
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((hero) => hero.name || hero.detail || 'Not found'));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.complete$));
    }
    startFetch() {
        this.start$.next();
        this.start$.complete();
    }
    completeFetch() {
        this.complete$.next();
        this.complete$.complete();
    }
    errorFetch() {
        this.error$.next(new Error('Fetch Error!'));
        this.error$.complete();
    }
}
LetTemplateBindingHttpExampleComponent.ɵfac = function LetTemplateBindingHttpExampleComponent_Factory(t) { return new (t || LetTemplateBindingHttpExampleComponent)(); };
LetTemplateBindingHttpExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetTemplateBindingHttpExampleComponent, selectors: [["rxa-let-template-binding-http-example"]], decls: 19, vars: 14, consts: [[1, "card"], [4, "rxLet", "rxLetStrategy", "rxLetRxComplete", "rxLetRxError", "rxLetRxSuspense"], ["mat-button", "", 3, "unpatch", "click", 4, "ngIf"], ["complete", ""], ["error", ""], ["suspense", ""], ["mat-button", "", 3, "unpatch", "click"], [1, "complete-icon"], [1, "error-icon"], [3, "diameter", "color", "mode"]], template: function LetTemplateBindingHttpExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTTP Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LetTemplateBindingHttpExampleComponent_div_5_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LetTemplateBindingHttpExampleComponent_button_7_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LetTemplateBindingHttpExampleComponent_button_9_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LetTemplateBindingHttpExampleComponent_button_11_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "push");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LetTemplateBindingHttpExampleComponent_ng_template_13_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LetTemplateBindingHttpExampleComponent_ng_template_15_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LetTemplateBindingHttpExampleComponent_ng_template_17_Template, 1, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", ctx.heroes$)("rxLetStrategy", ctx.visibleStrategy)("rxLetRxComplete", _r4)("rxLetRxError", _r6)("rxLetRxSuspense", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.heroes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.heroes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, ctx.heroes$));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_5__["LetDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_8__["UnpatchEventsDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"]], pipes: [_libs_template_src_lib_push_push_pipe__WEBPACK_IMPORTED_MODULE_11__["PushPipe"]], styles: ["mat-card-content[_ngcontent-%COMP%] {\n        min-height: 10rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      mat-icon[_ngcontent-%COMP%] {\n        font-size: 5rem;\n        height: initial;\n        width: initial;\n      }\n\n      .card[_ngcontent-%COMP%] {\n        margin: 2rem;\n        text-align: center;\n        width: 20rem;\n      }\n\n      .complete-icon[_ngcontent-%COMP%] {\n        color: forestgreen;\n      }\n\n      .error-icon[_ngcontent-%COMP%] {\n        color: darkred;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetTemplateBindingHttpExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-let-template-binding-http-example',
                template: `
    <mat-card class="card">
      <mat-card-header>
        <h1>HTTP Request</h1>
      </mat-card-header>

      <mat-card-content>
        <div
          *rxLet="
            heroes$;
            let hero;
            strategy: visibleStrategy;
            rxComplete: complete;
            rxError: error;
            rxSuspense: suspense
          "
        >
          random Star Wars character fetched!
          <h2>{{ hero }}</h2>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <button
          mat-button
          [unpatch]
          *ngIf="!(heroes$ | push)"
          (click)="startFetch()"
        >
          START
        </button>
        <button
          mat-button
          [unpatch]
          *ngIf="heroes$ | push"
          (click)="completeFetch()"
        >
          COMPLETE
        </button>
        <button
          mat-button
          [unpatch]
          *ngIf="heroes$ | push"
          (click)="errorFetch()"
        >
          ERROR
        </button>
      </mat-card-actions>
    </mat-card>

    <ng-template #complete>
      <div>
        <mat-icon class="complete-icon">thumb_up</mat-icon>
        <h2>Completed!</h2>
      </div>
    </ng-template>
    <ng-template #error>
      <div>
        <mat-icon class="error-icon">thumb_down</mat-icon>
        <h2>Something went wrong...</h2>
      </div>
    </ng-template>
    <ng-template #suspense>
      <mat-progress-spinner
        [diameter]="80"
        [color]="'primary'"
        [mode]="'indeterminate'"
      ></mat-progress-spinner>
    </ng-template>
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

      .complete-icon {
        color: forestgreen;
      }

      .error-icon {
        color: darkred;
      }
    `,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "sTOR":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js ***!
  \********************************************************************************************************************/
/*! exports provided: ajaxGet, ajaxPost, ajaxDelete, ajaxPut, ajaxPatch, ajaxGetJSON, AjaxObservable, AjaxSubscriber, AjaxResponse, AjaxError, AjaxTimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxGet", function() { return ajaxGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPost", function() { return ajaxPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxDelete", function() { return ajaxDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPut", function() { return ajaxPut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPatch", function() { return ajaxPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxGetJSON", function() { return ajaxGetJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxObservable", function() { return AjaxObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxSubscriber", function() { return AjaxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxResponse", function() { return AjaxResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxError", function() { return AjaxError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxTimeoutError", function() { return AjaxTimeoutError; });
/* harmony import */ var _util_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/root */ "TF3f");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Observable */ "IdLP");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Subscriber */ "5uGe");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../operators/map */ "YtkY");




function getCORSRequest() {
    if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
    }
    else if (!!_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest) {
        return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XMLHttpRequest();
    }
    else {
        let progId;
        try {
            const progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (let i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers = null) {
    return new AjaxObservable({ method: 'GET', url, headers });
}
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url, body, headers });
}
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url, headers });
}
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url, body, headers });
}
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url, body, headers });
}
const mapResponse = Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])((x, index) => x.response);
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url,
        responseType: 'json',
        headers
    }));
}
class AjaxObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(urlOrRequest) {
        super();
        const request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
            },
            crossDomain: true,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (const prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    _subscribe(subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    }
}
AjaxObservable.create = (() => {
    const create = (urlOrRequest) => {
        return new AjaxObservable(urlOrRequest);
    };
    create.get = ajaxGet;
    create.post = ajaxPost;
    create.delete = ajaxDelete;
    create.put = ajaxPut;
    create.patch = ajaxPatch;
    create.getJSON = ajaxGetJSON;
    return create;
})();
class AjaxSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, request) {
        super(destination);
        this.request = request;
        this.done = false;
        const headers = request.headers = request.headers || {};
        if (!request.crossDomain && !this.getHeader(headers, 'X-Requested-With')) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        let contentTypeHeader = this.getHeader(headers, 'Content-Type');
        if (!contentTypeHeader && !(_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && request.body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        request.body = this.serializeBody(request.body, this.getHeader(request.headers, 'Content-Type'));
        this.send();
    }
    next(e) {
        this.done = true;
        const { xhr, request, destination } = this;
        let result;
        try {
            result = new AjaxResponse(e, xhr, request);
        }
        catch (err) {
            return destination.error(err);
        }
        destination.next(result);
    }
    send() {
        const { request, request: { user, method, url, async, password, headers, body } } = this;
        try {
            const xhr = this.xhr = request.createXHR();
            this.setupEvents(xhr, request);
            if (user) {
                xhr.open(method, url, async, user, password);
            }
            else {
                xhr.open(method, url, async);
            }
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            this.setHeaders(xhr, headers);
            if (body) {
                xhr.send(body);
            }
            else {
                xhr.send();
            }
        }
        catch (err) {
            this.error(err);
        }
    }
    serializeBody(body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData && body instanceof _util_root__WEBPACK_IMPORTED_MODULE_0__["root"].FormData) {
            return body;
        }
        if (contentType) {
            const splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    }
    setHeaders(xhr, headers) {
        for (let key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    }
    getHeader(headers, headerName) {
        for (let key in headers) {
            if (key.toLowerCase() === headerName.toLowerCase()) {
                return headers[key];
            }
        }
        return undefined;
    }
    setupEvents(xhr, request) {
        const progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            const { subscriber, progressSubscriber, request } = xhrTimeout;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            let error;
            try {
                error = new AjaxTimeoutError(this, request);
            }
            catch (err) {
                error = err;
            }
            subscriber.error(error);
        }
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                let xhrProgress;
                xhrProgress = function (e) {
                    const { progressSubscriber } = xhrProgress;
                    progressSubscriber.next(e);
                };
                if (_util_root__WEBPACK_IMPORTED_MODULE_0__["root"].XDomainRequest) {
                    xhr.onprogress = xhrProgress;
                }
                else {
                    xhr.upload.onprogress = xhrProgress;
                }
                xhrProgress.progressSubscriber = progressSubscriber;
            }
            let xhrError;
            xhrError = function (e) {
                const { progressSubscriber, subscriber, request } = xhrError;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                let error;
                try {
                    error = new AjaxError('ajax error', this, request);
                }
                catch (err) {
                    error = err;
                }
                subscriber.error(error);
            };
            xhr.onerror = xhrError;
            xhrError.request = request;
            xhrError.subscriber = this;
            xhrError.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            return;
        }
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
        function xhrLoad(e) {
            const { subscriber, progressSubscriber, request } = xhrLoad;
            if (this.readyState === 4) {
                let status = this.status === 1223 ? 204 : this.status;
                let response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                if (status === 0) {
                    status = response ? 200 : 0;
                }
                if (status < 400) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    let error;
                    try {
                        error = new AjaxError('ajax error ' + status, this, request);
                    }
                    catch (err) {
                        error = err;
                    }
                    subscriber.error(error);
                }
            }
        }
        xhr.onload = xhrLoad;
        xhrLoad.subscriber = this;
        xhrLoad.progressSubscriber = progressSubscriber;
        xhrLoad.request = request;
    }
    unsubscribe() {
        const { done, xhr } = this;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        super.unsubscribe();
    }
}
class AjaxResponse {
    constructor(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
}
const AjaxErrorImpl = (() => {
    function AjaxErrorImpl(message, xhr, request) {
        Error.call(this);
        this.message = message;
        this.name = 'AjaxError';
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
        return this;
    }
    AjaxErrorImpl.prototype = Object.create(Error.prototype);
    return AjaxErrorImpl;
})();
const AjaxError = AjaxErrorImpl;
function parseJson(xhr) {
    if ('response' in xhr) {
        return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
    }
    else {
        return JSON.parse(xhr.responseText || 'null');
    }
}
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            return parseJson(xhr);
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
function AjaxTimeoutErrorImpl(xhr, request) {
    AjaxError.call(this, 'ajax timeout', xhr, request);
    this.name = 'AjaxTimeoutError';
    return this;
}
const AjaxTimeoutError = AjaxTimeoutErrorImpl;
//# sourceMappingURL=AjaxObservable.js.map

/***/ }),

/***/ "vSOf":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/util/applyMixins.js ***!
  \*******************************************************************************************************/
/*! exports provided: applyMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return applyMixins; });
function applyMixins(derivedCtor, baseCtors) {
    for (let i = 0, len = baseCtors.length; i < len; i++) {
        const baseCtor = baseCtors[i];
        const propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (let j = 0, len2 = propertyKeys.length; j < len2; j++) {
            const name = propertyKeys[j];
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map

/***/ }),

/***/ "yBos":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/dom/webSocket.js ***!
  \***************************************************************************************************************/
/*! exports provided: webSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSocket", function() { return webSocket; });
/* harmony import */ var _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebSocketSubject */ "fdH0");

function webSocket(urlConfigOrSource) {
    return new _WebSocketSubject__WEBPACK_IMPORTED_MODULE_0__["WebSocketSubject"](urlConfigOrSource);
}
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "yYYG":
/*!*********************************************************************************!*\
  !*** ./src/app/features/template/rx-let/let-template-binding/to-string.pipe.ts ***!
  \*********************************************************************************/
/*! exports provided: ToStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToStringPipe", function() { return ToStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class ToStringPipe {
    transform(value) {
        return value + '';
    }
}
ToStringPipe.ɵfac = function ToStringPipe_Factory(t) { return new (t || ToStringPipe)(); };
ToStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toString", type: ToStringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toString',
            }]
    }], null, null); })();


/***/ }),

/***/ "z6MO":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js ***!
  \**********************************************************************************************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
/* harmony import */ var _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxObservable */ "sTOR");

const ajax = (() => _AjaxObservable__WEBPACK_IMPORTED_MODULE_0__["AjaxObservable"].create)();
//# sourceMappingURL=ajax.js.map

/***/ })

}]);
//# sourceMappingURL=let-template-binding-let-template-binding-module.js.map