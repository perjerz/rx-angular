(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["render-queue-render-queue-module"],{

/***/ "6YoZ":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/core/static-schedule-and-coalesce-global.ts ***!
  \*******************************************************************************************************/
/*! exports provided: coalesceAndScheduleGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coalesceAndScheduleGlobal", function() { return coalesceAndScheduleGlobal; });
/* harmony import */ var _global_task_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-task-manager */ "EFVl");

function coalesceAndScheduleGlobal(work, priority, scope = {}, abC = new AbortController()) {
    return staticScheduleGlobal(work, scope, priority, abC);
}
function staticScheduleGlobal(task, scope, priority, abC = new AbortController()) {
    const scheduledWork = {
        work: () => {
            if (!abC.signal.aborted) {
                task();
            }
        },
        scope,
        priority
    };
    _global_task_manager__WEBPACK_IMPORTED_MODULE_0__["globalTaskManager"].scheduleTask(scheduledWork);
    const abortHandler = function () {
        _global_task_manager__WEBPACK_IMPORTED_MODULE_0__["globalTaskManager"].deleteTask(scheduledWork);
        abC.signal.removeEventListener('abort', abortHandler, false);
    };
    abC.signal.addEventListener('abort', abortHandler, false);
    return abC;
}


/***/ }),

/***/ "71Ns":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/render-queue/child.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_global_render_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/global-render.strategy */ "hON8");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");








function ChildComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class ChildComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(cdRef) {
        super();
        this.cdRef = cdRef;
        this.numItems = 100;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.doRenderChunked = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.doRenderBlocking = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = Array.from(Array(this.numItems).keys()).map(() => Math.random());
        this.set({ self: this });
    }
    ngOnInit() {
        this.strategies = Object(_core_global_render_strategy__WEBPACK_IMPORTED_MODULE_4__["getGlobalRenderingStrategies"])({ cdRef: this.cdRef });
        this.hold(this.doRenderBlocking.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.updateItems()), this.strategies.blocking.rxScheduleCD), () => {
            //console.log('rendered', this);
        });
        this.hold(this.doRenderChunked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.updateItems()), this.strategies.chunk.rxScheduleCD), () => {
            //console.log('rendered', this);
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroyed.complete();
    }
    renderStatic(strategyName) {
        this.updateItems();
        this.strategies[strategyName].scheduleCD();
    }
    updateItems() {
        this.items = Array.from(Array(this.numItems).keys()).map(() => Math.random());
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["rxa-child"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[1, "renders"], [4, "ngFor", "ngForOf"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-dirty-check", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChildComponent_tr_2_Template, 3, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_5__["DirtyChecksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n        position: relative;\n        width: 150px;\n        height: 150px;\n        border: 1px red solid;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: scroll;\n      }\n      .renders[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-child',
                template: `
    <rxa-dirty-check class="renders"></rxa-dirty-check>
    <table>
      <tr *ngFor="let item of items">
        <td>{{ item }}</td>
      </tr>
    </table>
  `,
                styles: [
                    `
      :host {
        position: relative;
        width: 150px;
        height: 150px;
        border: 1px red solid;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: scroll;
      }
      .renders {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "BTNL":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/render-queue/render-queue.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RenderQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderQueueComponent", function() { return RenderQueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_global_render_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/global-render.strategy */ "hON8");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child.component */ "71Ns");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../libs/template/src/lib/experimental/unpatch/events/unpatch-events.experimental.directive */ "GK3P");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");












function RenderQueueComponent_rxa_child_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-child");
} }
class RenderQueueComponent extends _rx_angular_state__WEBPACK_IMPORTED_MODULE_1__["RxState"] {
    constructor(cdRef) {
        super();
        this.cdRef = cdRef;
        this.toggle = true;
        this.numChildren = 10;
        this.doRender = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = Array.from(Array(this.numChildren).keys());
    }
    ngOnInit() {
        const strategy = Object(_core_global_render_strategy__WEBPACK_IMPORTED_MODULE_4__["getGlobalRenderingStrategies"])({ cdRef: this.cdRef })
            .chunk;
        this.hold(this.doRender.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => (this.items = Array.from(Array(this.numChildren).keys()).map(() => Math.random()))), strategy.rxScheduleCD), () => {
            console.log('rendered', this);
        });
    }
    ngAfterViewInit() { }
    updateChildrenBlocking() {
        this.childComponents.forEach(child => child.doRenderBlocking.next());
    }
    updateChildrenStaticBlocking() {
        this.childComponents.forEach(child => child.renderStatic('blocking'));
    }
    updateChildrenChunked() {
        this.childComponents.forEach(child => child.doRenderChunked.next());
    }
    updateChildrenStaticChunked() {
        this.childComponents.forEach(child => child.renderStatic('chunk'));
    }
    doToggle() {
        this.toggle = !this.toggle;
    }
    renderSelf() {
        this.doRender.next();
    }
    renderMixed() {
        this.renderChild2();
        this.renderChild2();
        this.renderChild2();
        this.renderChild1();
        this.renderChild1();
        this.renderChild1();
    }
    renderChild2() {
        //this.child2.doRender.next();
        //this.child2.doRender.next();
    }
    renderChild1() {
        //this.child1.doRender.next();
        //this.child1.doRender.next();
    }
}
RenderQueueComponent.ɵfac = function RenderQueueComponent_Factory(t) { return new (t || RenderQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RenderQueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenderQueueComponent, selectors: [["rxa-render-queue"]], viewQuery: function RenderQueueComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childComponents = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 1, consts: [["mat-raised-button", "", 3, "unpatch", "click"], [1, "render-queue-wrapper"], [4, "ngFor", "ngForOf"]], template: function RenderQueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chunked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderQueueComponent_Template_button_click_3_listener() { return ctx.updateChildrenChunked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " updateChildrenChunked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Blocking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderQueueComponent_Template_button_click_8_listener() { return ctx.updateChildrenBlocking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " updateChildrenBlocking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rxa-dirty-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RenderQueueComponent_rxa_child_12_Template, 1, 0, "rxa-child", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _libs_template_src_lib_experimental_unpatch_events_unpatch_events_experimental_directive__WEBPACK_IMPORTED_MODULE_7__["UnpatchEventsDirective"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_8__["DirtyChecksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]], styles: [".render-queue-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-gap: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtb3Mvc3JjL2FwcC9mZWF0dXJlcy90ZW1wbGF0ZS9zdHJhdGVnaWVzL3JlbmRlci1xdWV1ZS9yZW5kZXItcXVldWUvcmVuZGVyLXF1ZXVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwcy9kZW1vcy9zcmMvYXBwL2ZlYXR1cmVzL3RlbXBsYXRlL3N0cmF0ZWdpZXMvcmVuZGVyLXF1ZXVlL3JlbmRlci1xdWV1ZS9yZW5kZXItcXVldWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW5kZXItcXVldWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxNTBweCk7XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderQueueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-render-queue',
                templateUrl: './render-queue.component.html',
                styleUrls: ['./render-queue.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { childComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]]
        }] }); })();


/***/ }),

/***/ "DUZ1":
/*!**********************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/render-queue.routes.ts ***!
  \**********************************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _render_queue_render_queue_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-queue/render-queue.component */ "BTNL");

const ROUTES = [
    {
        path: '',
        component: _render_queue_render_queue_component__WEBPACK_IMPORTED_MODULE_0__["RenderQueueComponent"],
    },
];


/***/ }),

/***/ "EFVl":
/*!***************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/core/global-task-manager.ts ***!
  \***************************************************************************************/
/*! exports provided: animFrame, GlobalTaskPriority, globalTaskManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animFrame", function() { return animFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalTaskPriority", function() { return GlobalTaskPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalTaskManager", function() { return globalTaskManager; });
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");


const animFrame = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_0__["getZoneUnPatchedApi"])('requestAnimationFrame');
const cancelAnimFrame = Object(_rx_angular_template__WEBPACK_IMPORTED_MODULE_0__["getZoneUnPatchedApi"])('cancelAnimationFrame');
var GlobalTaskPriority;
(function (GlobalTaskPriority) {
    GlobalTaskPriority[GlobalTaskPriority["chunk"] = 0] = "chunk";
    GlobalTaskPriority[GlobalTaskPriority["blocking"] = 1] = "blocking";
})(GlobalTaskPriority || (GlobalTaskPriority = {}));
// PLAY AROUND WITH THIS IF YOU WANT TO CHANGE FRAME SIZE!
const frameThresh = 16;
const rescheduleMax = 3;
function createGlobalTaskManager() {
    const queue = new Map();
    const tick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const tick$ = tick;
    let isScheduled = false;
    return {
        scheduleTask,
        tick: () => tick$,
        deleteTask
    };
    function deleteTask(taskDefinition) {
        queue.delete(taskDefinition.scope);
    }
    function scheduleTask(taskDefinition) {
        taskDefinition.rescheduled = 0;
        queue.set(taskDefinition.scope, taskDefinition);
        if (!isScheduled) {
            isScheduled = true;
            const finishScheduling = () => (isScheduled = false);
            scheduleAndExhaust$().subscribe({
                next: () => tick.next(),
                error: finishScheduling,
                complete: finishScheduling
            });
        }
    }
    function tasks() {
        return Array.from(queue.entries(), def => def[1]).sort((a, b) => a.priority - b.priority);
    }
    function size() {
        return queue.size;
    }
    function runTask(task) {
        const start = performance.now();
        task();
        const end = performance.now();
        return end - start;
    }
    function scheduleAndExhaust$() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => {
            let frameId;
            function exhaust() {
                if (size() > 0) {
                    let runtime = 0;
                    // fetch tasks as array and sort them by priority
                    const remainingTasks = tasks();
                    // amount of blocking tasks in the current queue
                    let blockingTasksLeft = remainingTasks.filter(def => def.priority === GlobalTaskPriority.blocking).length;
                    // exhaust queue while there are tasks AND (there are blocking tasks left to process OR the runtime exceeds
                    // 16ms)
                    while ((blockingTasksLeft > 0 || runtime <= frameThresh) &&
                        remainingTasks.length > 0) {
                        // TODO: consider using pop over shift! (render inside-out)
                        const taskDefinition = remainingTasks.shift();
                        const chunkTask = taskDefinition.priority === GlobalTaskPriority.chunk;
                        // make sure to run all tasks marked with blocking priority and chunk tasks which got rescheduled at
                        // least 2 times regardless of the runtime!
                        if (!chunkTask ||
                            runtime <= frameThresh ||
                            taskDefinition.rescheduled >= rescheduleMax) {
                            // measure task runtime and add it to the runtime of this frame
                            runtime += runTask(taskDefinition.work);
                            if (!chunkTask) {
                                blockingTasksLeft--;
                            }
                            // delete work from queue
                            deleteTask(taskDefinition);
                            // console.warn(`running ${ chunkTask ? 'chunk' : 'blocking' } task. total runtime:`, runtime);
                        }
                        else {
                            taskDefinition.rescheduled++;
                        }
                    }
                    cancelAnimFrame(frameId);
                    if (size() > 0) {
                        // queue has entries left -> reschedule
                        // console.warn('rescheduling:', size());
                        // cancelAnimationFrame(frameId);
                        frameId = animFrame(exhaust);
                        subscriber.next();
                    }
                    else {
                        // queue is empty -> exhaust completed
                        // console.warn('exhaust completed');
                        subscriber.next();
                        subscriber.complete();
                    }
                }
                else {
                    // queue is empty -> exhaust completed
                    subscriber.next();
                    subscriber.complete();
                }
            }
            // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
            frameId = animFrame(exhaust);
        });
    }
}
const globalTaskManager = createGlobalTaskManager();


/***/ }),

/***/ "JQuE":
/*!********************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/core/globalAnimationFrameTick.ts ***!
  \********************************************************************************************/
/*! exports provided: scheduleOnGlobalTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleOnGlobalTick", function() { return scheduleOnGlobalTick; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _global_task_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-task-manager */ "EFVl");



function scheduleOnGlobalTick(workDefinitionFn) {
    // Local queue of references of the work function needed to dispose their execution
    let scheduledTask;
    const depleteQueue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        subscriber.next();
        return () => {
            if (scheduledTask) {
                _global_task_manager__WEBPACK_IMPORTED_MODULE_2__["globalTaskManager"].deleteTask(scheduledTask);
                scheduledTask = null;
            }
        };
    });
    return (o$) => {
        // To clarify
        // If we could switchMap into the next schedule call
        // switchMap(() => globalWorker.scheduleTask(scheduledTask))
        // pro: do less work in global queue
        // cons: end up in eternal scheduling
        // Is it important to tie the signal of an executed work to the related scheduled work,
        // meaning maintaining the order of emission?
        return depleteQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMapTo"])(o$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(val => {
            const inputTask = workDefinitionFn();
            if (scheduledTask) {
                _global_task_manager__WEBPACK_IMPORTED_MODULE_2__["globalTaskManager"].deleteTask(scheduledTask);
            }
            let workDone = false;
            scheduledTask = {
                priority: inputTask.priority,
                work: () => {
                    inputTask.work();
                    workDone = true;
                },
                scope: inputTask.scope
            };
            _global_task_manager__WEBPACK_IMPORTED_MODULE_2__["globalTaskManager"].scheduleTask(scheduledTask);
            return _global_task_manager__WEBPACK_IMPORTED_MODULE_2__["globalTaskManager"].tick()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => workDone), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
                scheduledTask = null;
                workDone = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => val));
        }));
    };
}


/***/ }),

/***/ "hON8":
/*!******************************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/core/global-render.strategy.ts ***!
  \******************************************************************************************/
/*! exports provided: getGlobalRenderingStrategies, createBlockingStrategy, createChunkStrategy, createDetachChunkStrategy, createDetachBlockingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalRenderingStrategies", function() { return getGlobalRenderingStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlockingStrategy", function() { return createBlockingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChunkStrategy", function() { return createChunkStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDetachChunkStrategy", function() { return createDetachChunkStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDetachBlockingStrategy", function() { return createDetachBlockingStrategy; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _global_task_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-task-manager */ "EFVl");
/* harmony import */ var _globalAnimationFrameTick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalAnimationFrameTick */ "JQuE");
/* harmony import */ var _static_schedule_and_coalesce_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-schedule-and-coalesce-global */ "6YoZ");




/**
 * Experimental Local Strategies
 *
 * - ɵDC - `ɵdetectChanges`
 * - C - `Component`
 * - det - `cdRef.detach`
 * - ret - `cdRef.reattach`
 * - Pr - `Promise`
 * - aF - `requestAnimationFrame`
 *
 * | Name        | ZoneLess | Render Method | ScopedCoalescing | Scheduling | Chunked |
 * |-------------| ---------| --------------| ---------------- | ---------- |-------- |
 * | `local`     | ✔        | ɵDC           | C + Pr           | aF         | ❌      |
 * | `detach`    | ✔ ️     | ret,ɵDC, det  | C + Pr           | aF         | ❌      |
 *
 */
function getGlobalRenderingStrategies(config) {
    return {
        chunk: createChunkStrategy(config),
        blocking: createBlockingStrategy(config),
        detach: createDetachChunkStrategy(config),
        detachChunk: createDetachChunkStrategy(config),
        detachBlocking: createDetachBlockingStrategy(config)
    };
}
function afterCoalesceAndSchedule(work, afterCD) {
    work();
    if (afterCD) {
        afterCD();
    }
}
function createBlockingStrategy(config) {
    const component = config.cdRef;
    const taskPriority = _global_task_manager__WEBPACK_IMPORTED_MODULE_1__["GlobalTaskPriority"].blocking;
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(Object(_globalAnimationFrameTick__WEBPACK_IMPORTED_MODULE_2__["scheduleOnGlobalTick"])(() => ({
        priority: taskPriority,
        work: renderMethod,
        scope: component
    })));
    const scheduleCD = (afterCD) => Object(_static_schedule_and_coalesce_global__WEBPACK_IMPORTED_MODULE_3__["coalesceAndScheduleGlobal"])(() => {
        afterCoalesceAndSchedule(renderMethod, afterCD);
    }, taskPriority, component);
    return {
        name: 'blocking',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}
function createChunkStrategy(config) {
    const taskPriority = _global_task_manager__WEBPACK_IMPORTED_MODULE_1__["GlobalTaskPriority"].chunk;
    const component = config.cdRef;
    const renderMethod = () => {
        config.cdRef.detectChanges();
    };
    const behavior = o => o.pipe(Object(_globalAnimationFrameTick__WEBPACK_IMPORTED_MODULE_2__["scheduleOnGlobalTick"])(() => ({
        priority: taskPriority,
        work: renderMethod,
        scope: component
    })));
    const scheduleCD = (afterCD) => Object(_static_schedule_and_coalesce_global__WEBPACK_IMPORTED_MODULE_3__["coalesceAndScheduleGlobal"])(() => {
        afterCoalesceAndSchedule(renderMethod, afterCD);
    }, taskPriority, component);
    return {
        name: 'chunk',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}
function createDetachChunkStrategy(config) {
    const component = config.cdRef;
    const taskPriority = _global_task_manager__WEBPACK_IMPORTED_MODULE_1__["GlobalTaskPriority"].chunk;
    const renderMethod = () => {
        config.cdRef.reattach();
        config.cdRef.detectChanges();
        config.cdRef.detach();
    };
    const behavior = o => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => config.cdRef.detach()), Object(_globalAnimationFrameTick__WEBPACK_IMPORTED_MODULE_2__["scheduleOnGlobalTick"])(() => ({
        priority: taskPriority,
        work: renderMethod,
        scope: component
    })));
    const scheduleCD = (afterCD) => {
        config.cdRef.detach();
        return Object(_static_schedule_and_coalesce_global__WEBPACK_IMPORTED_MODULE_3__["coalesceAndScheduleGlobal"])(() => {
            afterCoalesceAndSchedule(renderMethod, afterCD);
        }, taskPriority, component);
    };
    return {
        name: 'detachChunk',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}
function createDetachBlockingStrategy(config) {
    const component = config.cdRef;
    const taskPriority = _global_task_manager__WEBPACK_IMPORTED_MODULE_1__["GlobalTaskPriority"].blocking;
    const renderMethod = () => {
        config.cdRef.reattach();
        config.cdRef.detectChanges();
        config.cdRef.detach();
    };
    const behavior = o => o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => config.cdRef.detach()), Object(_globalAnimationFrameTick__WEBPACK_IMPORTED_MODULE_2__["scheduleOnGlobalTick"])(() => ({
        priority: taskPriority,
        work: renderMethod,
        scope: component
    })));
    const scheduleCD = (afterCD) => {
        config.cdRef.detach();
        return Object(_static_schedule_and_coalesce_global__WEBPACK_IMPORTED_MODULE_3__["coalesceAndScheduleGlobal"])(() => {
            afterCoalesceAndSchedule(renderMethod, afterCD);
        }, taskPriority, component);
    };
    return {
        name: 'detachBlocking',
        detectChanges: renderMethod,
        rxScheduleCD: behavior,
        scheduleCD
    };
}


/***/ }),

/***/ "i0od":
/*!**********************************************************************************!*\
  !*** ./src/app/features/template/strategies/render-queue/render-queue.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RenderQueueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderQueueModule", function() { return RenderQueueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/template */ "10BB");
/* harmony import */ var _render_queue_render_queue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-queue/render-queue.component */ "BTNL");
/* harmony import */ var _render_queue_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render-queue/child.component */ "71Ns");
/* harmony import */ var _render_queue_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render-queue.routes */ "DUZ1");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/debug-helper/dirty-checks */ "ApVg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");











class RenderQueueModule {
}
RenderQueueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RenderQueueModule });
RenderQueueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RenderQueueModule_Factory(t) { return new (t || RenderQueueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_render_queue_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RenderQueueModule, { declarations: [_render_queue_render_queue_component__WEBPACK_IMPORTED_MODULE_4__["RenderQueueComponent"], _render_queue_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderQueueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_render_queue_render_queue_component__WEBPACK_IMPORTED_MODULE_4__["RenderQueueComponent"], _render_queue_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rx_angular_template__WEBPACK_IMPORTED_MODULE_3__["UnpatchEventsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_render_queue_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=render-queue-render-queue-module.js.map