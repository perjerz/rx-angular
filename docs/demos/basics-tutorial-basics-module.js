(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basics-tutorial-basics-module"],{

/***/ "/5F0":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/2-input-bindings/input-bindings.solution.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InputBindingsSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBindingsSolution", function() { return InputBindingsSolution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function InputBindingsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function InputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function InputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r6);
} }
function InputBindingsSolution_mat_expansion_panel_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r6 == null ? null : list_r6.length)("ngIfElse", _r4);
} }
function InputBindingsSolution_mat_expansion_panel_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputBindingsSolution_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function InputBindingsSolution_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.listExpanded = $event; return ctx_r11.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputBindingsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputBindingsSolution_mat_expansion_panel_2_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputBindingsSolution_mat_expansion_panel_2_ng_container_11_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InputBindingsSolution_mat_expansion_panel_2_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r0.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.storeList$)) == null ? null : tmp_2_0.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r0.storeList$));
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class InputBindingsSolution extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
        this.set(initComponentState);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
InputBindingsSolution.ɵfac = function InputBindingsSolution_Factory(t) { return new (t || InputBindingsSolution)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
InputBindingsSolution.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBindingsSolution, selectors: [["rxa-input-bindings-solution"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function InputBindingsSolution_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input Bindings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputBindingsSolution_mat_expansion_panel_2_Template, 15, 9, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBindingsSolution, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-input-bindings-solution',
                template: `
    <h3>
      Input Bindings
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "/DHb":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/2-input-bindings/input-bindings.start.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InputBindingsStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBindingsStart", function() { return InputBindingsStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function InputBindingsStart_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function InputBindingsStart_ng_container_16_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function InputBindingsStart_ng_container_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputBindingsStart_ng_container_16_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r4);
} }
function InputBindingsStart_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputBindingsStart_ng_container_16_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r4 == null ? null : list_r4.length)("ngIfElse", _r2);
} }
function InputBindingsStart_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// The  initial base-state is normally derived form somewhere else automatically. But could also get specified statically here.
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class InputBindingsStart extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(initComponentState.list));
        this._refreshInterval = initComponentState.refreshInterval;
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
        this.set(initComponentState);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this._refreshInterval = refreshInterval;
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this._refreshInterval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
InputBindingsStart.ɵfac = function InputBindingsStart_Factory(t) { return new (t || InputBindingsStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
InputBindingsStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBindingsStart, selectors: [["rxa-input-bindings-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 14, consts: [[3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function InputBindingsStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input Bindings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function InputBindingsStart_Template_mat_expansion_panel_expandedChange_5_listener($event) { ctx.listExpanded = $event; return ctx.listExpandedChanges.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputBindingsStart_mat_progress_bar_7_Template, 1, 1, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputBindingsStart_Template_button_click_14_listener($event) { return ctx.onRefreshClicks($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Refresh List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InputBindingsStart_ng_container_16_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InputBindingsStart_ng_template_18_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.model$)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.listExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.storeList$)) == null ? null : tmp_3_0.length, " Repositories Updated every: ", ctx._refreshInterval, " ms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, ctx.storeList$));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n        position: relative;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0px;\n        left: 0;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n        padding-top: 10px;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBindingsStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-input-bindings-start',
                template: `
    <h3>
     Input Bindings
    </h3>
    {{model$  | async | json}}
    <mat-expansion-panel
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
            >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ _refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                styles: [
                    `
      .list .mat-expansion-panel-header {
        position: relative;
      }

      .list .mat-expansion-panel-header mat-progress-bar {
        position: absolute;
        top: 0px;
        left: 0;
      }

      .list .mat-expansion-panel-content .mat-expansion-panel-body {
        padding-top: 10px;
      }
    `,
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "/s4+":
/*!***********************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/solution/demo-basics.adapter.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DemoBasicsAdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicsAdapterService", function() { return DemoBasicsAdapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");








class DemoBasicsAdapterService extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService, route) {
        super();
        this.listService = listService;
        this.loadingSignal$ = this.listService.loadingSignal$;
        this.list$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems));
        this.hold(route.params, () => this.refetchList());
    }
    refetchList() {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
DemoBasicsAdapterService.ɵfac = function DemoBasicsAdapterService_Factory(t) { return new (t || DemoBasicsAdapterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
DemoBasicsAdapterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DemoBasicsAdapterService, factory: DemoBasicsAdapterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoBasicsAdapterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "5RQ8":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/3-output-bindings/output-bindings.solution.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OutputBindingsSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBindingsSolution", function() { return OutputBindingsSolution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function OutputBindingsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r6);
} }
function OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r6 == null ? null : list_r6.length)("ngIfElse", _r4);
} }
function OutputBindingsSolution_mat_expansion_panel_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OutputBindingsSolution_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function OutputBindingsSolution_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputBindingsSolution_mat_expansion_panel_2_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OutputBindingsSolution_mat_expansion_panel_2_ng_container_11_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OutputBindingsSolution_mat_expansion_panel_2_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", vm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.storeList$)) == null ? null : tmp_2_0.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r0.storeList$));
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class OutputBindingsSolution extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])('listExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.listExpanded));
        this.set(initComponentState);
        this.connect('listExpanded', this.listExpandedChanges);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
OutputBindingsSolution.ɵfac = function OutputBindingsSolution_Factory(t) { return new (t || OutputBindingsSolution)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
OutputBindingsSolution.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputBindingsSolution, selectors: [["rxa-output-bindings-solution"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function OutputBindingsSolution_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Output Bindings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsSolution_mat_expansion_panel_2_Template, 15, 9, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBindingsSolution, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-output-bindings-solution',
                template: `
    <h3>
      Output Bindings
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpandedChanges.next($event)"
      [expanded]="vm.listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "66mq":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
  \********************************************************************************************************************/
/*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return MAT_PROGRESS_BAR_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return MAT_PROGRESS_BAR_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return MatProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return MatProgressBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatProgressBar.
/** @docs-private */



const _c0 = ["primaryValueBar"];
class MatProgressBarBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', { providedIn: 'root', factory: MAT_PROGRESS_BAR_LOCATION_FACTORY });
/** @docs-private */
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** Counter used to generate unique IDs for progress bars. */
let progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
class MatProgressBar extends _MatProgressBarMixinBase {
    constructor(_elementRef, _ngZone, _animationMode, 
    /**
     * @deprecated `location` parameter to be made required.
     * @breaking-change 8.0.0
     */
    location) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        /** Flag that indicates whether NoopAnimations mode is set to true. */
        this._isNoopAnimation = false;
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */
        this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Reference to animation end subscription to be unsubscribed on destroy. */
        this._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
        /** ID of the progress bar. */
        this.progressbarId = `mat-progress-bar-${progressbarId++}`;
        // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.
        const path = location ? location.getPathname().split('#')[0] : '';
        this._rectangleFillValue = `url('${path}#${this.progressbarId}')`;
        this._isNoopAnimation = _animationMode === 'NoopAnimations';
    }
    /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() { return this._value; }
    set value(v) {
        this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform() {
        const scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            const scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
        return null;
    }
    ngAfterViewInit() {
        // Run outside angular so change detection didn't get triggered on every transition end
        // instead only on the animation that we care about (primary value bar's transitionend)
        this._ngZone.runOutsideAngular((() => {
            const element = this._primaryValueBar.nativeElement;
            this._animationEndSubscription =
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(((e) => e.target === element)))
                    .subscribe(() => {
                    if (this.mode === 'determinate' || this.mode === 'buffer') {
                        this._ngZone.run(() => this.animationEnd.next({ value: this.value }));
                    }
                });
        }));
    }
    ngOnDestroy() {
        this._animationEndSubscription.unsubscribe();
    }
}
MatProgressBar.ɵfac = function MatProgressBar_Factory(t) { return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8)); };
MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatProgressBar, selectors: [["mat-progress-bar"]], viewQuery: function MatProgressBar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
    } }, hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"], hostVars: 4, hostBindings: function MatProgressBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
    } }, inputs: { color: "color", mode: "mode", value: "value", bufferValue: "bufferValue" }, outputs: { animationEnd: "animationEnd" }, exportAs: ["matProgressBar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 4, consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]], template: function MatProgressBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"], encapsulation: 2, changeDetection: 0 });
MatProgressBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_PROGRESS_BAR_LOCATION,] }] }
];
MatProgressBar.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _primaryValueBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['primaryValueBar',] }],
    animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-progress-bar',
                exportAs: 'matProgressBar',
                host: {
                    'role': 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuemax': '100',
                    '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
                    '[attr.mode]': 'mode',
                    'class': 'mat-progress-bar',
                    '[class._mat-animation-noopable]': '_isNoopAnimation'
                },
                inputs: ['color'],
                template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_PROGRESS_BAR_LOCATION]
            }] }]; }, { animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
        }] }); })();
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatProgressBarModule {
}
MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatProgressBarModule });
MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatProgressBarModule_Factory(t) { return new (t || MatProgressBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, { declarations: function () { return [MatProgressBar]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatProgressBar]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ "9pjF":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/5-side-effects/side-effects.solution.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SideEffectsSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsSolution", function() { return SideEffectsSolution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function SideEffectsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function SideEffectsSolution_mat_expansion_panel_2_div_10_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function SideEffectsSolution_mat_expansion_panel_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsSolution_mat_expansion_panel_2_div_10_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vm_r1.list);
} }
function SideEffectsSolution_mat_expansion_panel_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideEffectsSolution_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function SideEffectsSolution_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsSolution_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideEffectsSolution_mat_expansion_panel_2_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.refreshClicks$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideEffectsSolution_mat_expansion_panel_2_div_10_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SideEffectsSolution_mat_expansion_panel_2_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", vm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vm_r1.list.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.list == null ? null : vm_r1.list.length)("ngIfElse", _r4);
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class SideEffectsSolution extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshClicks$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])('listExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.listExpanded));
        this.set(initComponentState);
        this.connect('listExpanded', this.listExpandedChanges);
        this.connect('list', this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems)));
        this.hold(this.refreshClicks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(true)), () => this.listService.refetchList());
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
        }
    }
    ngOnInit() {
        this.refreshClicks$.next();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
SideEffectsSolution.ɵfac = function SideEffectsSolution_Factory(t) { return new (t || SideEffectsSolution)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
SideEffectsSolution.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideEffectsSolution, selectors: [["rxa-side-effects-solution"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["noList", ""], [3, "mode"], [4, "ngFor", "ngForOf"]], template: function SideEffectsSolution_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Side Effects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsSolution_mat_expansion_panel_2_Template, 13, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideEffectsSolution, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-side-effects-solution',
                template: `
    <h3>
      Side Effects
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpandedChanges.next($event)"
      [expanded]="vm.listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ vm.list.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="refreshClicks$.next($event)">
        Refresh List
      </button>

      <div *ngIf="vm.list?.length; else noList">
        <mat-list>
          <mat-list-item *ngFor="let item of vm.list">
            {{ item.name }}
          </mat-list-item>
        </mat-list>
      </div>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AttH":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/6-presenter-pattern/presenter-pattern.container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PresenterPatternContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenterPatternContainerComponent", function() { return PresenterPatternContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenter-pattern.start.component */ "zbFV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class PresenterPatternContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
    }
}
PresenterPatternContainerComponent.ɵfac = function PresenterPatternContainerComponent_Factory(t) { return new (t || PresenterPatternContainerComponent)(); };
PresenterPatternContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresenterPatternContainerComponent, selectors: [["rxa-presenter-pattern-container"]], decls: 9, vars: 6, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval"]], template: function PresenterPatternContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Presenter Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PresenterPatternContainerComponent_Template_input_input_6_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rxa-presenter-pattern-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("RefreshInterval ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.refreshInterval$), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_5__["PresenterPatternStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresenterPatternContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-presenter-pattern-container',
                template: `
    <h1>Presenter Pattern</h1>
    <mat-form-field>
      <label>RefreshInterval {{ refreshInterval$ | async }}</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-presenter-pattern-start [refreshInterval]="refreshInterval$ | async">
    </rxa-presenter-pattern-start>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "FVFW":
/*!******************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/data-access/list-resource/list.server.model.ts ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "Gsjy":
/*!******************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/5-side-effects/side-effects.start.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideEffectsStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsStart", function() { return SideEffectsStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function SideEffectsStart_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function SideEffectsStart_mat_expansion_panel_2_div_10_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function SideEffectsStart_mat_expansion_panel_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsStart_mat_expansion_panel_2_div_10_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vm_r1.list);
} }
function SideEffectsStart_mat_expansion_panel_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideEffectsStart_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function SideEffectsStart_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsStart_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideEffectsStart_mat_expansion_panel_2_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideEffectsStart_mat_expansion_panel_2_div_10_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SideEffectsStart_mat_expansion_panel_2_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", vm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vm_r1.list.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.list == null ? null : vm_r1.list.length)("ngIfElse", _r4);
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class SideEffectsStart extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])('listExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.listExpanded));
        this.set(initComponentState);
        this.connect('listExpanded', this.listExpandedChanges);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
SideEffectsStart.ɵfac = function SideEffectsStart_Factory(t) { return new (t || SideEffectsStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
SideEffectsStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideEffectsStart, selectors: [["rxa-side-effects-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["noList", ""], [3, "mode"], [4, "ngFor", "ngForOf"]], template: function SideEffectsStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Side Effects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideEffectsStart_mat_expansion_panel_2_Template, 13, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideEffectsStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-side-effects-start',
                template: `
    <h3>
      Side Effects
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpandedChanges.next($event)"
      [expanded]="vm.listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ vm.list.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <div *ngIf="vm.list?.length; else noList">
        <mat-list>
          <mat-list-item *ngFor="let item of vm.list">
            {{ item.name }}
          </mat-list-item>
        </mat-list>
      </div>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "L5BR":
/*!******************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/data-access/list-resource/index.ts ***!
  \******************************************************************************/
/*! exports provided: ListService, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.service */ "ZtBw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return _list_service__WEBPACK_IMPORTED_MODULE_0__["ListService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return _list_service__WEBPACK_IMPORTED_MODULE_0__["getData"]; });

/* harmony import */ var _list_server_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.server.model */ "FVFW");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "LHG7":
/*!***************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/solution/demo-basics.container.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DemoBasicsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicsContainerComponent", function() { return DemoBasicsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _demo_basics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-basics.component */ "Yw3Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class DemoBasicsContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
    }
}
DemoBasicsContainerComponent.ɵfac = function DemoBasicsContainerComponent_Factory(t) { return new (t || DemoBasicsContainerComponent)(); };
DemoBasicsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoBasicsContainerComponent, selectors: [["rxa-demo-basics4-container"]], decls: 9, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval"]], template: function DemoBasicsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DemoBasicsContainerComponent_Template_input_input_6_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rxa-demo-basics", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _demo_basics_component__WEBPACK_IMPORTED_MODULE_5__["DemoBasicsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoBasicsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-demo-basics4-container',
                template: `
      <h1>Solution</h1>
      <br/>
      <mat-form-field>
          <label>RefreshInterval</label>
          <input
                  type="number"
                  (input)="refreshIntervalInput$.next($event)"
                  matInput
          />
      </mat-form-field>

      <rxa-demo-basics [refreshInterval]="refreshInterval$ | async"></rxa-demo-basics>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "MQNL":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/4-global-state/global-state.solution.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GlobalStateSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStateSolution", function() { return GlobalStateSolution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function GlobalStateSolution_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function GlobalStateSolution_mat_expansion_panel_2_div_10_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function GlobalStateSolution_mat_expansion_panel_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateSolution_mat_expansion_panel_2_div_10_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vm_r1.list);
} }
function GlobalStateSolution_mat_expansion_panel_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalStateSolution_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function GlobalStateSolution_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateSolution_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalStateSolution_mat_expansion_panel_2_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GlobalStateSolution_mat_expansion_panel_2_div_10_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GlobalStateSolution_mat_expansion_panel_2_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", vm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vm_r1.list.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.list == null ? null : vm_r1.list.length)("ngIfElse", _r4);
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: []
};
class GlobalStateSolution extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])('listExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.listExpanded));
        this.set(initComponentState);
        this.connect('listExpanded', this.listExpandedChanges);
        this.connect('list', this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems)));
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
GlobalStateSolution.ɵfac = function GlobalStateSolution_Factory(t) { return new (t || GlobalStateSolution)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
GlobalStateSolution.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalStateSolution, selectors: [["rxa-global-state-solution"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["noList", ""], [3, "mode"], [4, "ngFor", "ngForOf"]], template: function GlobalStateSolution_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Global State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateSolution_mat_expansion_panel_2_Template, 13, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalStateSolution, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-global-state-solution',
                template: `
    <h3>
      Global State
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpandedChanges.next($event)"
      [expanded]="vm.listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ vm.list.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <div *ngIf="vm.list?.length; else noList">
        <mat-list>
          <mat-list-item *ngFor="let item of vm.list">
            {{ item.name }}
          </mat-list-item>
        </mat-list>
      </div>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "OP8/":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/2-input-bindings/input-bindings-container.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputBindingsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBindingsContainerComponent", function() { return InputBindingsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _input_bindings_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-bindings.start.component */ "/DHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class InputBindingsContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
        this.listExpandedChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
InputBindingsContainerComponent.ɵfac = function InputBindingsContainerComponent_Factory(t) { return new (t || InputBindingsContainerComponent)(); };
InputBindingsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBindingsContainerComponent, selectors: [["rxa-input-bindings-container"]], decls: 8, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval", "listExpandedChange"]], template: function InputBindingsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Input Bindings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputBindingsContainerComponent_Template_input_input_5_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rxa-input-bindings-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listExpandedChange", function InputBindingsContainerComponent_Template_rxa_input_bindings_start_listExpandedChange_6_listener($event) { return ctx.listExpandedChange$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _input_bindings_start_component__WEBPACK_IMPORTED_MODULE_5__["InputBindingsStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBindingsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-input-bindings-container',
                template: `
    <h1>Input Bindings</h1>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-input-bindings-start
      [refreshInterval]="refreshInterval$ | async"
      (listExpandedChange)="listExpandedChange$.next($event)"
    >
    </rxa-input-bindings-start>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "SaWY":
/*!****************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/1-setup/setup.start.component.ts ***!
  \****************************************************************************/
/*! exports provided: SetupStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupStart", function() { return SetupStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Meci");












function SetupStart_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function SetupStart_ng_container_13_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function SetupStart_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetupStart_ng_container_13_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r4);
} }
function SetupStart_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SetupStart_ng_container_13_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r4 == null ? null : list_r4.length)("ngIfElse", _r2);
} }
function SetupStart_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// The  initial base-state is normally derived form somewhere else automatically. But could also get specified statically here.
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class SetupStart {
    constructor(listService) {
        this.listService = listService;
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(initComponentState.list));
        this._refreshInterval = initComponentState.refreshInterval;
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this._refreshInterval = refreshInterval;
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this._refreshInterval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
SetupStart.ɵfac = function SetupStart_Factory(t) { return new (t || SetupStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
SetupStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupStart, selectors: [["rxa-setup-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, decls: 17, vars: 9, consts: [[3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function SetupStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Setup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function SetupStart_Template_mat_expansion_panel_expandedChange_2_listener($event) { ctx.listExpanded = $event; return ctx.listExpandedChanges.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SetupStart_mat_progress_bar_4_Template, 1, 1, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupStart_Template_button_click_11_listener($event) { return ctx.onRefreshClicks($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Refresh List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SetupStart_ng_container_13_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SetupStart_ng_template_15_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.listExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.storeList$)) == null ? null : tmp_2_0.length, " Repositories Updated every: ", ctx._refreshInterval, " ms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.storeList$));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n        position: relative;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0px;\n        left: 0;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n        padding-top: 10px;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-setup-start',
                template: `
    <h3>
      Setup
    </h3>
    <mat-expansion-panel
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded">
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
            >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ _refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                styles: [
                    `
      .list .mat-expansion-panel-header {
        position: relative;
      }

      .list .mat-expansion-panel-header mat-progress-bar {
        position: absolute;
        top: 0px;
        left: 0;
      }

      .list .mat-expansion-panel-content .mat-expansion-panel-body {
        padding-top: 10px;
      }
    `,
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "TBQG":
/*!********************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/1-setup/setup-container.component.ts ***!
  \********************************************************************************/
/*! exports provided: SetupContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupContainerComponent", function() { return SetupContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _setup_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup.start.component */ "SaWY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class SetupContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
        this.listExpandedChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
SetupContainerComponent.ɵfac = function SetupContainerComponent_Factory(t) { return new (t || SetupContainerComponent)(); };
SetupContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupContainerComponent, selectors: [["rxa-setup-container"]], decls: 8, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval", "listExpandedChange"]], template: function SetupContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SetupContainerComponent_Template_input_input_5_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rxa-setup-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listExpandedChange", function SetupContainerComponent_Template_rxa_setup_start_listExpandedChange_6_listener($event) { return ctx.listExpandedChange$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _setup_start_component__WEBPACK_IMPORTED_MODULE_5__["SetupStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-setup-container',
                template: `
    <h1>Setup</h1>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-setup-start
      [refreshInterval]="refreshInterval$ | async"
      (listExpandedChange)="listExpandedChange$.next($event)">
    </rxa-setup-start>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "Yw3Z":
/*!*****************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/solution/demo-basics.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DemoBasicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicsComponent", function() { return DemoBasicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _demo_basics_view_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-basics.view-model.service */ "gG1G");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _demo_basics_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-basics.adapter.service */ "/s4+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function DemoBasicsComponent_mat_expansion_panel_3_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function DemoBasicsComponent_mat_expansion_panel_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bm_r1.list.length, " Repositories Updated every: ", bm_r1.refreshInterval, " ms ");
} }
function DemoBasicsComponent_mat_expansion_panel_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bm_r1.list.length);
} }
function DemoBasicsComponent_mat_expansion_panel_3_div_10_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function DemoBasicsComponent_mat_expansion_panel_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DemoBasicsComponent_mat_expansion_panel_3_div_10_mat_list_item_2_Template, 2, 1, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", bm_r1.list);
} }
function DemoBasicsComponent_mat_expansion_panel_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoBasicsComponent_mat_expansion_panel_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function DemoBasicsComponent_mat_expansion_panel_3_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.vm.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DemoBasicsComponent_mat_expansion_panel_3_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DemoBasicsComponent_mat_expansion_panel_3_span_6_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoBasicsComponent_mat_expansion_panel_3_span_7_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoBasicsComponent_mat_expansion_panel_3_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.vm.refreshClicks.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DemoBasicsComponent_mat_expansion_panel_3_div_10_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DemoBasicsComponent_mat_expansion_panel_3_ng_template_11_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bm_r1 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", bm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bm_r1.isPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !bm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bm_r1.list.length)("ngIfElse", _r6);
} }
class DemoBasicsComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["RxState"] {
    constructor(vm, ca) {
        super();
        this.vm = vm;
        this.ca = ca;
        this.vm.connect('list', this.ca.list$);
        this.vm.connect('isPending', this.ca.loadingSignal$);
        this.hold(this.vm.refreshListSideEffect$, (_) => this.ca.refetchList());
    }
    set refreshInterval(refreshInterval) {
        this.vm.set({ refreshInterval });
    }
}
DemoBasicsComponent.ɵfac = function DemoBasicsComponent_Factory(t) { return new (t || DemoBasicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_basics_view_model_service__WEBPACK_IMPORTED_MODULE_1__["DemoBasicsViewModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_basics_adapter_service__WEBPACK_IMPORTED_MODULE_3__["DemoBasicsAdapterService"])); };
DemoBasicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoBasicsComponent, selectors: [["rxa-demo-basics"]], inputs: { refreshInterval: "refreshInterval" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_demo_basics_view_model_service__WEBPACK_IMPORTED_MODULE_1__["DemoBasicsViewModelService"], _demo_basics_adapter_service__WEBPACK_IMPORTED_MODULE_3__["DemoBasicsAdapterService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [["class", "list", 3, "expanded", "expandedChange", 4, "ngIf"], [1, "list", 3, "expanded", "expandedChange"], [2, "position", "relative"], [3, "mode", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["noList", ""], [3, "mode"], [4, "ngFor", "ngForOf"]], template: function DemoBasicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoBasicsComponent_mat_expansion_panel_3_Template, 13, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.vm.baseModel$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n        position: relative;\n      }\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0px;\n        left: 0;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n        padding-top: 10px;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoBasicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-demo-basics',
                templateUrl: './demo-basics.view.html',
                styles: [
                    `
      .list .mat-expansion-panel-header {
        position: relative;
      }
      .list .mat-expansion-panel-header mat-progress-bar {
        position: absolute;
        top: 0px;
        left: 0;
      }

      .list .mat-expansion-panel-content .mat-expansion-panel-body {
        padding-top: 10px;
      }
    `,
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [_demo_basics_view_model_service__WEBPACK_IMPORTED_MODULE_1__["DemoBasicsViewModelService"], _demo_basics_adapter_service__WEBPACK_IMPORTED_MODULE_3__["DemoBasicsAdapterService"]],
            }]
    }], function () { return [{ type: _demo_basics_view_model_service__WEBPACK_IMPORTED_MODULE_1__["DemoBasicsViewModelService"] }, { type: _demo_basics_adapter_service__WEBPACK_IMPORTED_MODULE_3__["DemoBasicsAdapterService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZtBw":
/*!*************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/data-access/list-resource/list.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ListService, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");






class ListService {
    constructor(http) {
        this.http = http;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            list: [],
            loading: false,
            error: '',
        });
        this.list$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => s.list), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.errorSignal$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => s.error), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((b) => !!b));
        this.successSignal$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ loading, error }) => ({ loading, error })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((o) => o.loading === false && o.error !== ''));
        this.loadingSignal$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ loading }) => loading));
        this.httpGetListItem = (arg) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(getData(arg)).pipe(
        // tslint:disable-next-line:no-bitwise
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(~~(Math.random() * 5000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((list) => ({ list })));
        this.state$.subscribe(console.log);
    }
    refetchList() {
        this.state$.next(Object.assign(Object.assign({}, this.state$.getValue()), { loading: true }));
        this.httpGetListItem({ num: 1 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error: e, loading: false, list: [] })))
            .subscribe((slice) => {
            console.log('list: ', this.state$.getValue());
            return this.state$.next({
                error: '',
                list: [...this.state$.value.list, ...slice.list],
                loading: false,
            });
        });
    }
}
ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListService, factory: ListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
function getData(cfg = { num: 5 }) {
    // tslint:disable-next-line:no-bitwise
    const randId = (s) => s + ~~(Math.random() * 100);
    return new Array(cfg.num).fill(cfg.num).map((_) => ({
        id: randId('id'),
        name: randId('name'),
        created: Date.now() / 1000 + '',
    }));
}


/***/ }),

/***/ "agxc":
/*!************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/3-output-bindings/output-bindings.start.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OutputBindingsStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBindingsStart", function() { return OutputBindingsStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function OutputBindingsStart_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function OutputBindingsStart_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function OutputBindingsStart_mat_expansion_panel_2_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsStart_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r6);
} }
function OutputBindingsStart_mat_expansion_panel_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputBindingsStart_mat_expansion_panel_2_ng_container_11_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r6 == null ? null : list_r6.length)("ngIfElse", _r4);
} }
function OutputBindingsStart_mat_expansion_panel_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OutputBindingsStart_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function OutputBindingsStart_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.listExpanded = $event; return ctx_r11.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsStart_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputBindingsStart_mat_expansion_panel_2_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OutputBindingsStart_mat_expansion_panel_2_ng_container_11_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OutputBindingsStart_mat_expansion_panel_2_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r0.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.storeList$)) == null ? null : tmp_2_0.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r0.storeList$));
} }
// The  initial base-state is normally derived form somewhere else automatically. But could also get specified statically here.
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class OutputBindingsStart extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
        this.set(initComponentState);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
OutputBindingsStart.ɵfac = function OutputBindingsStart_Factory(t) { return new (t || OutputBindingsStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
OutputBindingsStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputBindingsStart, selectors: [["rxa-output-bindings-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function OutputBindingsStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Output Bindings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputBindingsStart_mat_expansion_panel_2_Template, 15, 9, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBindingsStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-output-bindings-start',
                template: `
    <h3>
      Output Bindings
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "dhwd":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/4-global-state/global-state-container.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GlobalStateContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStateContainerComponent", function() { return GlobalStateContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _global_state_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-state.start.component */ "gHpC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class GlobalStateContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
        this.listExpandedChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
GlobalStateContainerComponent.ɵfac = function GlobalStateContainerComponent_Factory(t) { return new (t || GlobalStateContainerComponent)(); };
GlobalStateContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalStateContainerComponent, selectors: [["rxa-output-bindings-container"]], decls: 8, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval", "listExpandedChange"]], template: function GlobalStateContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Global State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GlobalStateContainerComponent_Template_input_input_5_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rxa-global-state-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listExpandedChange", function GlobalStateContainerComponent_Template_rxa_global_state_start_listExpandedChange_6_listener($event) { return ctx.listExpandedChange$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _global_state_start_component__WEBPACK_IMPORTED_MODULE_5__["GlobalStateStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalStateContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-output-bindings-container',
                template: `
    <h1>Global State</h1>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-global-state-start
      [refreshInterval]="refreshInterval$ | async"
      (listExpandedChange)="listExpandedChange$.next($event)"
    >
    </rxa-global-state-start>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "fPMv":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/3-output-bindings/output-bindings-container.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OutputBindingsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBindingsContainerComponent", function() { return OutputBindingsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _output_bindings_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-bindings.start.component */ "agxc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class OutputBindingsContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
        this.listExpandedChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
OutputBindingsContainerComponent.ɵfac = function OutputBindingsContainerComponent_Factory(t) { return new (t || OutputBindingsContainerComponent)(); };
OutputBindingsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputBindingsContainerComponent, selectors: [["rxa-output-bindings-container"]], decls: 8, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval", "listExpandedChange"]], template: function OutputBindingsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Output Bindings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OutputBindingsContainerComponent_Template_input_input_5_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rxa-output-bindings-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listExpandedChange", function OutputBindingsContainerComponent_Template_rxa_output_bindings_start_listExpandedChange_6_listener($event) { return ctx.listExpandedChange$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _output_bindings_start_component__WEBPACK_IMPORTED_MODULE_5__["OutputBindingsStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBindingsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-output-bindings-container',
                template: `
    <h1>Output Bindings</h1>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-output-bindings-start
      [refreshInterval]="refreshInterval$ | async"
      (listExpandedChange)="listExpandedChange$.next($event)"
    >
    </rxa-output-bindings-start>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "gG1G":
/*!**************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/solution/demo-basics.view-model.service.ts ***!
  \**************************************************************************************/
/*! exports provided: DemoBasicsViewModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoBasicsViewModelService", function() { return DemoBasicsViewModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





const initState = {
    refreshInterval: 1000,
    listExpanded: true,
    isPending: true,
    list: [],
};
class DemoBasicsViewModelService extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor() {
        super();
        this.baseModel$ = this.select();
        this.refreshClicks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.refreshListSideEffect$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.refreshClicks, this.select(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((s) => s.refreshInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((refreshInterval) => refreshInterval > 4000)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((ms) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(ms))));
        this.set(initState);
        this.connect('listExpanded', this.listExpandedChanges);
    }
}
DemoBasicsViewModelService.ɵfac = function DemoBasicsViewModelService_Factory(t) { return new (t || DemoBasicsViewModelService)(); };
DemoBasicsViewModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DemoBasicsViewModelService, factory: DemoBasicsViewModelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoBasicsViewModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gHpC":
/*!******************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/4-global-state/global-state.start.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GlobalStateStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStateStart", function() { return GlobalStateStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function GlobalStateStart_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function GlobalStateStart_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function GlobalStateStart_mat_expansion_panel_2_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateStart_mat_expansion_panel_2_ng_container_11_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r6);
} }
function GlobalStateStart_mat_expansion_panel_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlobalStateStart_mat_expansion_panel_2_ng_container_11_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r6 == null ? null : list_r6.length)("ngIfElse", _r4);
} }
function GlobalStateStart_mat_expansion_panel_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlobalStateStart_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function GlobalStateStart_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.listExpanded = $event; return ctx_r11.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateStart_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalStateStart_mat_expansion_panel_2_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GlobalStateStart_mat_expansion_panel_2_ng_container_11_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GlobalStateStart_mat_expansion_panel_2_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r0.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.storeList$)) == null ? null : tmp_2_0.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r0.storeList$));
} }
// The  initial base-state is normally derived form somewhere else automatically. But could also get specified statically here.
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class GlobalStateStart extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
        this.set(initComponentState);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
GlobalStateStart.ɵfac = function GlobalStateStart_Factory(t) { return new (t || GlobalStateStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
GlobalStateStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalStateStart, selectors: [["rxa-global-state-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function GlobalStateStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Output Bindings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStateStart_mat_expansion_panel_2_Template, 15, 9, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalStateStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-global-state-start',
                template: `
    <h3>
      Output Bindings
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_1__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pA6t":
/*!*********************************************************************!*\
  !*** ./src/app/features/tutorials/basics/tutorial-basics.module.ts ***!
  \*********************************************************************/
/*! exports provided: ROUTES, materialModules, TutorialBasicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialModules", function() { return materialModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialBasicsModule", function() { return TutorialBasicsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _1_setup_setup_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./1-setup/setup-container.component */ "TBQG");
/* harmony import */ var _2_input_bindings_input_bindings_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./2-input-bindings/input-bindings-container.component */ "OP8/");
/* harmony import */ var _3_output_bindings_output_bindings_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./3-output-bindings/output-bindings-container.component */ "fPMv");
/* harmony import */ var _6_presenter_pattern_presenter_pattern_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./6-presenter-pattern/presenter-pattern.container.component */ "AttH");
/* harmony import */ var _solution_demo_basics_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./solution/demo-basics.container.component */ "LHG7");
/* harmony import */ var _4_global_state_global_state_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./4-global-state/global-state-container.component */ "dhwd");
/* harmony import */ var _5_side_effects_side_effects_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./5-side-effects/side-effects-container.component */ "uTDU");
/* harmony import */ var _2_input_bindings_input_bindings_solution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./2-input-bindings/input-bindings.solution.component */ "/5F0");
/* harmony import */ var _2_input_bindings_input_bindings_start_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./2-input-bindings/input-bindings.start.component */ "/DHb");
/* harmony import */ var _3_output_bindings_output_bindings_start_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./3-output-bindings/output-bindings.start.component */ "agxc");
/* harmony import */ var _3_output_bindings_output_bindings_solution_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./3-output-bindings/output-bindings.solution.component */ "5RQ8");
/* harmony import */ var _4_global_state_global_state_start_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./4-global-state/global-state.start.component */ "gHpC");
/* harmony import */ var _4_global_state_global_state_solution_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./4-global-state/global-state.solution.component */ "MQNL");
/* harmony import */ var _5_side_effects_side_effects_start_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./5-side-effects/side-effects.start.component */ "Gsjy");
/* harmony import */ var _5_side_effects_side_effects_solution_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./5-side-effects/side-effects.solution.component */ "9pjF");
/* harmony import */ var _6_presenter_pattern_presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./6-presenter-pattern/presenter-pattern.start.component */ "zbFV");
/* harmony import */ var _1_setup_setup_start_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./1-setup/setup.start.component */ "SaWY");
/* harmony import */ var _1_setup_setup_solution_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./1-setup/setup.solution.component */ "t/k2");
/* harmony import */ var _solution_demo_basics_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./solution/demo-basics.component */ "Yw3Z");


































const ROUTES = [
    {
        path: '',
        redirectTo: 'setup'
    },
    {
        path: 'setup',
        component: _1_setup_setup_container_component__WEBPACK_IMPORTED_MODULE_13__["SetupContainerComponent"]
    },
    {
        path: 'input-bindings',
        component: _2_input_bindings_input_bindings_container_component__WEBPACK_IMPORTED_MODULE_14__["InputBindingsContainerComponent"]
    },
    {
        path: 'output-bindings',
        component: _3_output_bindings_output_bindings_container_component__WEBPACK_IMPORTED_MODULE_15__["OutputBindingsContainerComponent"]
    },
    {
        path: 'global-state',
        component: _4_global_state_global_state_container_component__WEBPACK_IMPORTED_MODULE_18__["GlobalStateContainerComponent"]
    },
    {
        path: 'side-effects',
        component: _5_side_effects_side_effects_container_component__WEBPACK_IMPORTED_MODULE_19__["SideEffectsContainerComponent"]
    },
    {
        path: 'presenter-pattern',
        component: _6_presenter_pattern_presenter_pattern_container_component__WEBPACK_IMPORTED_MODULE_16__["PresenterPatternContainerComponent"]
    },
    {
        path: 'solution',
        component: _solution_demo_basics_container_component__WEBPACK_IMPORTED_MODULE_17__["DemoBasicsContainerComponent"]
    }
];
const DECLARATIONS = [
    _1_setup_setup_container_component__WEBPACK_IMPORTED_MODULE_13__["SetupContainerComponent"],
    _1_setup_setup_start_component__WEBPACK_IMPORTED_MODULE_29__["SetupStart"],
    _1_setup_setup_solution_component__WEBPACK_IMPORTED_MODULE_30__["SetupSolution"],
    _2_input_bindings_input_bindings_container_component__WEBPACK_IMPORTED_MODULE_14__["InputBindingsContainerComponent"],
    _2_input_bindings_input_bindings_start_component__WEBPACK_IMPORTED_MODULE_21__["InputBindingsStart"],
    _2_input_bindings_input_bindings_solution_component__WEBPACK_IMPORTED_MODULE_20__["InputBindingsSolution"],
    _3_output_bindings_output_bindings_container_component__WEBPACK_IMPORTED_MODULE_15__["OutputBindingsContainerComponent"],
    _3_output_bindings_output_bindings_start_component__WEBPACK_IMPORTED_MODULE_22__["OutputBindingsStart"],
    _3_output_bindings_output_bindings_solution_component__WEBPACK_IMPORTED_MODULE_23__["OutputBindingsSolution"],
    _4_global_state_global_state_container_component__WEBPACK_IMPORTED_MODULE_18__["GlobalStateContainerComponent"],
    _4_global_state_global_state_start_component__WEBPACK_IMPORTED_MODULE_24__["GlobalStateStart"],
    _4_global_state_global_state_solution_component__WEBPACK_IMPORTED_MODULE_25__["GlobalStateSolution"],
    _5_side_effects_side_effects_container_component__WEBPACK_IMPORTED_MODULE_19__["SideEffectsContainerComponent"],
    _5_side_effects_side_effects_start_component__WEBPACK_IMPORTED_MODULE_26__["SideEffectsStart"],
    _5_side_effects_side_effects_solution_component__WEBPACK_IMPORTED_MODULE_27__["SideEffectsSolution"],
    _6_presenter_pattern_presenter_pattern_container_component__WEBPACK_IMPORTED_MODULE_16__["PresenterPatternContainerComponent"],
    _6_presenter_pattern_presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_28__["PresenterPatternStart"],
    _solution_demo_basics_container_component__WEBPACK_IMPORTED_MODULE_17__["DemoBasicsContainerComponent"],
    _solution_demo_basics_component__WEBPACK_IMPORTED_MODULE_31__["DemoBasicsComponent"]
];
const materialModules = [
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
];
class TutorialBasicsModule {
}
TutorialBasicsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TutorialBasicsModule });
TutorialBasicsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TutorialBasicsModule_Factory(t) { return new (t || TutorialBasicsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], materialModules, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TutorialBasicsModule, { declarations: [_1_setup_setup_container_component__WEBPACK_IMPORTED_MODULE_13__["SetupContainerComponent"],
        _1_setup_setup_start_component__WEBPACK_IMPORTED_MODULE_29__["SetupStart"],
        _1_setup_setup_solution_component__WEBPACK_IMPORTED_MODULE_30__["SetupSolution"],
        _2_input_bindings_input_bindings_container_component__WEBPACK_IMPORTED_MODULE_14__["InputBindingsContainerComponent"],
        _2_input_bindings_input_bindings_start_component__WEBPACK_IMPORTED_MODULE_21__["InputBindingsStart"],
        _2_input_bindings_input_bindings_solution_component__WEBPACK_IMPORTED_MODULE_20__["InputBindingsSolution"],
        _3_output_bindings_output_bindings_container_component__WEBPACK_IMPORTED_MODULE_15__["OutputBindingsContainerComponent"],
        _3_output_bindings_output_bindings_start_component__WEBPACK_IMPORTED_MODULE_22__["OutputBindingsStart"],
        _3_output_bindings_output_bindings_solution_component__WEBPACK_IMPORTED_MODULE_23__["OutputBindingsSolution"],
        _4_global_state_global_state_container_component__WEBPACK_IMPORTED_MODULE_18__["GlobalStateContainerComponent"],
        _4_global_state_global_state_start_component__WEBPACK_IMPORTED_MODULE_24__["GlobalStateStart"],
        _4_global_state_global_state_solution_component__WEBPACK_IMPORTED_MODULE_25__["GlobalStateSolution"],
        _5_side_effects_side_effects_container_component__WEBPACK_IMPORTED_MODULE_19__["SideEffectsContainerComponent"],
        _5_side_effects_side_effects_start_component__WEBPACK_IMPORTED_MODULE_26__["SideEffectsStart"],
        _5_side_effects_side_effects_solution_component__WEBPACK_IMPORTED_MODULE_27__["SideEffectsSolution"],
        _6_presenter_pattern_presenter_pattern_container_component__WEBPACK_IMPORTED_MODULE_16__["PresenterPatternContainerComponent"],
        _6_presenter_pattern_presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_28__["PresenterPatternStart"],
        _solution_demo_basics_container_component__WEBPACK_IMPORTED_MODULE_17__["DemoBasicsContainerComponent"],
        _solution_demo_basics_component__WEBPACK_IMPORTED_MODULE_31__["DemoBasicsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_1_setup_setup_container_component__WEBPACK_IMPORTED_MODULE_13__["SetupContainerComponent"],
        _1_setup_setup_start_component__WEBPACK_IMPORTED_MODULE_29__["SetupStart"],
        _1_setup_setup_solution_component__WEBPACK_IMPORTED_MODULE_30__["SetupSolution"],
        _2_input_bindings_input_bindings_container_component__WEBPACK_IMPORTED_MODULE_14__["InputBindingsContainerComponent"],
        _2_input_bindings_input_bindings_start_component__WEBPACK_IMPORTED_MODULE_21__["InputBindingsStart"],
        _2_input_bindings_input_bindings_solution_component__WEBPACK_IMPORTED_MODULE_20__["InputBindingsSolution"],
        _3_output_bindings_output_bindings_container_component__WEBPACK_IMPORTED_MODULE_15__["OutputBindingsContainerComponent"],
        _3_output_bindings_output_bindings_start_component__WEBPACK_IMPORTED_MODULE_22__["OutputBindingsStart"],
        _3_output_bindings_output_bindings_solution_component__WEBPACK_IMPORTED_MODULE_23__["OutputBindingsSolution"],
        _4_global_state_global_state_container_component__WEBPACK_IMPORTED_MODULE_18__["GlobalStateContainerComponent"],
        _4_global_state_global_state_start_component__WEBPACK_IMPORTED_MODULE_24__["GlobalStateStart"],
        _4_global_state_global_state_solution_component__WEBPACK_IMPORTED_MODULE_25__["GlobalStateSolution"],
        _5_side_effects_side_effects_container_component__WEBPACK_IMPORTED_MODULE_19__["SideEffectsContainerComponent"],
        _5_side_effects_side_effects_start_component__WEBPACK_IMPORTED_MODULE_26__["SideEffectsStart"],
        _5_side_effects_side_effects_solution_component__WEBPACK_IMPORTED_MODULE_27__["SideEffectsSolution"],
        _6_presenter_pattern_presenter_pattern_container_component__WEBPACK_IMPORTED_MODULE_16__["PresenterPatternContainerComponent"],
        _6_presenter_pattern_presenter_pattern_start_component__WEBPACK_IMPORTED_MODULE_28__["PresenterPatternStart"],
        _solution_demo_basics_container_component__WEBPACK_IMPORTED_MODULE_17__["DemoBasicsContainerComponent"],
        _solution_demo_basics_component__WEBPACK_IMPORTED_MODULE_31__["DemoBasicsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialBasicsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], materialModules, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "t/k2":
/*!*******************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/1-setup/setup.solution.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SetupSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSolution", function() { return SetupSolution; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function SetupSolution_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function SetupSolution_ng_container_16_div_1_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function SetupSolution_ng_container_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetupSolution_ng_container_16_div_1_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r4);
} }
function SetupSolution_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SetupSolution_ng_container_16_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r4 == null ? null : list_r4.length)("ngIfElse", _r2);
} }
function SetupSolution_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: [],
};
class SetupSolution extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(initComponentState.list));
        this._refreshInterval = initComponentState.refreshInterval;
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.listExpandedChanges;
        this.set(initComponentState);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this._refreshInterval = refreshInterval;
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this._refreshInterval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
SetupSolution.ɵfac = function SetupSolution_Factory(t) { return new (t || SetupSolution)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
SetupSolution.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupSolution, selectors: [["rxa-setup-solution"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 14, consts: [[3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["noList", ""], [3, "mode"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"]], template: function SetupSolution_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Setup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function SetupSolution_Template_mat_expansion_panel_expandedChange_5_listener($event) { ctx.listExpanded = $event; return ctx.listExpandedChanges.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SetupSolution_mat_progress_bar_7_Template, 1, 1, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupSolution_Template_button_click_14_listener($event) { return ctx.onRefreshClicks($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Refresh List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SetupSolution_ng_container_16_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SetupSolution_ng_template_18_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.model$)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.listExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.storeList$)) == null ? null : tmp_3_0.length, " Repositories Updated every: ", ctx._refreshInterval, " ms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, ctx.storeList$));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n        position: relative;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0px;\n        left: 0;\n      }\n\n      .list[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n        padding-top: 10px;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupSolution, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-setup-solution',
                template: `
    <h3>
      Setup
    </h3>
    {{model$  | async | json}}
    <mat-expansion-panel
      (expandedChange)="listExpanded = $event; listExpandedChanges.next($event)"
      [expanded]="listExpanded">
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ (storeList$ | async)?.length }} Repositories Updated every:
            {{ _refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <ng-container *ngIf="storeList$ | async as list">
        <div *ngIf="list?.length; else noList">
          <mat-list>
            <mat-list-item *ngFor="let item of list">
              {{ item.name }}
            </mat-list-item>
          </mat-list>
        </div>
      </ng-container>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                styles: [
                    `
      .list .mat-expansion-panel-header {
        position: relative;
      }

      .list .mat-expansion-panel-header mat-progress-bar {
        position: absolute;
        top: 0px;
        left: 0;
      }

      .list .mat-expansion-panel-content .mat-expansion-panel-body {
        padding-top: 10px;
      }
    `,
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uTDU":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/5-side-effects/side-effects-container.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SideEffectsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsContainerComponent", function() { return SideEffectsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _side_effects_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-effects.start.component */ "Gsjy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








class SideEffectsContainerComponent {
    constructor() {
        this.refreshIntervalInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.refreshInterval$ = this.refreshIntervalInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value));
    }
}
SideEffectsContainerComponent.ɵfac = function SideEffectsContainerComponent_Factory(t) { return new (t || SideEffectsContainerComponent)(); };
SideEffectsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideEffectsContainerComponent, selectors: [["rxa-side-effects-container"]], decls: 9, vars: 3, consts: [["type", "number", "matInput", "", 3, "input"], [3, "refreshInterval"]], template: function SideEffectsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Side Effects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RefreshInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SideEffectsContainerComponent_Template_input_input_6_listener($event) { return ctx.refreshIntervalInput$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rxa-side-effects-start", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refreshInterval", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.refreshInterval$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _side_effects_start_component__WEBPACK_IMPORTED_MODULE_5__["SideEffectsStart"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideEffectsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-side-effects-container',
                template: `
    <h1>Side Effects</h1>
    <br/>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput/>
    </mat-form-field>

    <rxa-side-effects-start [refreshInterval]="refreshInterval$ | async">
    </rxa-side-effects-start>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "zbFV":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/tutorials/basics/6-presenter-pattern/presenter-pattern.start.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PresenterPatternStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenterPatternStart", function() { return PresenterPatternStart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-access/list-resource */ "L5BR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Meci");













function PresenterPatternStart_mat_expansion_panel_2_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "query");
} }
function PresenterPatternStart_mat_expansion_panel_2_div_10_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function PresenterPatternStart_mat_expansion_panel_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PresenterPatternStart_mat_expansion_panel_2_div_10_mat_list_item_2_Template, 2, 1, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vm_r1.list);
} }
function PresenterPatternStart_mat_expansion_panel_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No list given!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PresenterPatternStart_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandedChange", function PresenterPatternStart_mat_expansion_panel_2_Template_mat_expansion_panel_expandedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.listExpandedChanges.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PresenterPatternStart_mat_expansion_panel_2_mat_progress_bar_2_Template, 1, 1, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresenterPatternStart_mat_expansion_panel_2_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onRefreshClicks($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Refresh List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PresenterPatternStart_mat_expansion_panel_2_div_10_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PresenterPatternStart_mat_expansion_panel_2_ng_template_11_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", vm_r1.listExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vm_r1.list.length, " Repositories Updated every: ", vm_r1.refreshInterval, " ms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.list == null ? null : vm_r1.list.length)("ngIfElse", _r4);
} }
const initComponentState = {
    refreshInterval: 10000,
    listExpanded: false,
    list: []
};
class PresenterPatternStart extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(listService) {
        super();
        this.listService = listService;
        this.model$ = this.select();
        this.intervalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.listExpandedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.storeList$ = this.listService.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.parseListItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(initComponentState.list));
        this.listExpanded = initComponentState.listExpanded;
        this.listExpandedChange = this.$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])('listExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(s => s.listExpanded));
        this.set(initComponentState);
        this.connect('listExpanded', this.listExpandedChanges);
    }
    set refreshInterval(refreshInterval) {
        if (refreshInterval > 4000) {
            this.set({ refreshInterval });
            this.resetRefreshTick();
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    ngOnInit() {
        this.resetRefreshTick();
    }
    resetRefreshTick() {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.get('refreshInterval'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => this.listService.refetchList()))
            .subscribe();
    }
    onRefreshClicks(event) {
        this.listService.refetchList();
    }
    parseListItems(l) {
        return l.map(({ id, name }) => ({ id, name }));
    }
}
PresenterPatternStart.ɵfac = function PresenterPatternStart_Factory(t) { return new (t || PresenterPatternStart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"])); };
PresenterPatternStart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresenterPatternStart, selectors: [["rxa-presenter-pattern-start"]], inputs: { refreshInterval: "refreshInterval" }, outputs: { listExpandedChange: "listExpandedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "expanded", "expandedChange", 4, "ngIf"], [3, "expanded", "expandedChange"], [1, "list"], [3, "mode", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], ["noList", ""], [3, "mode"], [4, "ngFor", "ngForOf"]], template: function PresenterPatternStart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Side Effects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PresenterPatternStart_mat_expansion_panel_2_Template, 13, 6, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.model$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresenterPatternStart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-presenter-pattern-start',
                template: `
    <h3>
      Side Effects
    </h3>
    <mat-expansion-panel
      *ngIf="model$ | async as vm"
      (expandedChange)="listExpandedChanges.next($event)"
      [expanded]="vm.listExpanded"
    >
      <mat-expansion-panel-header class="list">
        <mat-progress-bar *ngIf="false" [mode]="'query'"></mat-progress-bar>
        <mat-panel-title>
          List
        </mat-panel-title>
        <mat-panel-description>
          <span
          >{{ vm.list.length }} Repositories Updated every:
            {{ vm.refreshInterval }} ms
          </span>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <button
        mat-raised-button
        color="primary"
        (click)="onRefreshClicks($event)"
      >
        Refresh List
      </button>

      <div *ngIf="vm.list?.length; else noList">
        <mat-list>
          <mat-list-item *ngFor="let item of vm.list">
            {{ item.name }}
          </mat-list-item>
        </mat-list>
      </div>

      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _data_access_list_resource__WEBPACK_IMPORTED_MODULE_3__["ListService"] }]; }, { refreshInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listExpandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=basics-tutorial-basics-module.js.map