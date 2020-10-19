(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~rx-for-differ-rx-for-differ-module~rx-iterable-differ-rx-iterable-differ-module"],{

/***/ "+LQi":
/*!*******************************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/rx-for-differ.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: RxForDifferDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForDifferDirective", function() { return RxForDifferDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/hooks */ "S0Hg");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _rx_differ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rx-differ */ "OefJ");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "wzmI");









class RxForDifferDirective extends _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_3__["Hooks"] {
    constructor(state, cdRef, templateRef, viewContainerRef) {
        super();
        this.state = state;
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.embeddedViews = new Map();
        this.array$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.onEnter = (item) => {
            console.log('onEnter', item);
            const key = this.state.get('trackBy')(item);
            console.log('key', key, this.state.get('trackBy'));
            let existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            if (!existingItem) {
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, { $implicit: item });
                existingItem = { view, item };
                this.embeddedViews.set(key, existingItem);
                existingItem.view.detectChanges();
            }
        };
        this.onUpdate = (item) => {
            const key = this.state.get('trackBy')(item);
            const existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            console.log('onUpdate', existingItem, key);
            if (existingItem) {
                existingItem.view.context.$implicit = item;
                existingItem.view.detectChanges();
            }
        };
        this.onExit = (item) => {
            console.log('onExit', item);
        };
        this.state.set({ distinctBy: i => i, trackBy: i => i });
        this.state.hold(this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.setupDiffer();
            this.state.hold(this.rxDiffer.enter$, i => this.onEnter(i));
            this.state.hold(this.rxDiffer.update$, i => this.onUpdate(i));
            this.state.hold(this.rxDiffer.exit$, i => this.onExit(i));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.array$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(v => this.rxDiffer.next(v))));
        this.state.hold(this.onDestroy$, () => this.tearDownDirective());
    }
    set rxForDiffer(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set rxForDifferTrackBy(trackByFnOrKey) {
        console.log('rxForDifferTrackBy', trackByFnOrKey);
        const trackBy = typeof trackByFnOrKey !== 'function' ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["constantPluck"])(trackByFnOrKey) : trackByFnOrKey;
        this.state.set({ trackBy });
    }
    rxForDifferDistinctBy(distinctByFnOrKey) {
        console.log('rxForDifferDistinctBy', distinctByFnOrKey);
        const distinctBy = typeof distinctByFnOrKey !== 'function' ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["constantPluck"])(distinctByFnOrKey) : distinctByFnOrKey;
        this.state.set({ distinctBy });
    }
    setupDiffer() {
        this.rxDiffer = Object(_rx_differ__WEBPACK_IMPORTED_MODULE_5__["rxIterableDifferFactory"])({
            trackBy: this.state.get('trackBy')
        });
        this.rxDiffer.connect();
    }
    tearDownDirective() {
        this.viewContainerRef.clear();
        this.subscription.unsubscribe();
    }
}
RxForDifferDirective.ɵfac = function RxForDifferDirective_Factory(t) { return new (t || RxForDifferDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RxForDifferDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxForDifferDirective, selectors: [["", "rxForDiffer", ""]], inputs: { rxForDiffer: "rxForDiffer", rxForDifferTrackBy: "rxForDifferTrackBy", rxForDifferDistinctBy: "rxForDifferDistinctBy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForDifferDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[rxForDiffer]',
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { rxForDiffer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForDifferTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForDifferDistinctBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3/5o":
/*!********************************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/rx-for-differ2.directive.ts ***!
  \********************************************************************************/
/*! exports provided: RxForDiffer2Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForDiffer2Directive", function() { return RxForDiffer2Directive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/hooks */ "S0Hg");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "wzmI");
/* harmony import */ var _from_for__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./from-for */ "Rsc9");









class RxForDiffer2Directive extends _shared_debug_helper_hooks__WEBPACK_IMPORTED_MODULE_3__["Hooks"] {
    constructor(state, iterableDiffers, cdRef, templateRef, viewContainerRef) {
        super();
        this.state = state;
        this.iterableDiffers = iterableDiffers;
        this.cdRef = cdRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.observables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.embeddedViews = new Map();
        this.array$ = this.observables$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this.onEnter = (item) => {
            const key = this.state.get('trackBy')(item);
            console.log('key', key, item);
            let existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            if (!existingItem) {
                const view = this.viewContainerRef
                    .createEmbeddedView(this.templateRef, { $implicit: item });
                existingItem = { view, item };
                this.embeddedViews.set(key, existingItem);
                existingItem.view.detectChanges();
            }
        };
        this.onUpdate = (item) => {
            const key = this.state.get('trackBy')(item);
            const existingItem = this.embeddedViews.has(key) ? this.embeddedViews.get(key) : undefined;
            console.log('onUpdate', existingItem, key);
            if (existingItem) {
                existingItem.view.context.$implicit = item;
                existingItem.view.detectChanges();
            }
        };
        this.onExit = (item) => {
            console.log('onExit', item);
        };
        this.state.set({ distinctBy: i => i, trackBy: i => i });
        this.state.hold(this.afterViewInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.setupNgDiffer();
            this.state.hold(this.enter$, i => this.onEnter(i));
            this.state.hold(this.identityChange$, i => this.onUpdate(i));
            this.state.hold(this.exit$, i => this.onExit(i));
        })));
        this.state.hold(this.onDestroy$, () => this.tearDownDirective());
    }
    set rxForDiffer2(potentialObservable) {
        this.observables$.next(potentialObservable);
    }
    set rxForDiffer2TrackBy(trackByFnOrKey) {
        const trackBy = typeof trackByFnOrKey !== 'function' ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["constantPluck"])(trackByFnOrKey) : trackByFnOrKey;
        this.state.set({ trackBy });
    }
    rxForDiffer2DistinctBy(distinctByFnOrKey) {
        const distinctBy = typeof distinctByFnOrKey !== 'function' ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["constantPluck"])(distinctByFnOrKey) : distinctByFnOrKey;
        this.state.set({ distinctBy });
    }
    /*
      private setupDiffer() {
        this.rxDiffer = rxIterableDifferFactory<U & object>({
          trackBy: this.state.get('trackBy')
        });
        this.rxDiffer.connect();
      }
    */
    setupNgDiffer() {
        this.differ = this.iterableDiffers.find([]).create((idx, item) => this.state.get('trackBy')(item));
        const differResult$ = this.array$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(newData => this.differ.diff(newData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.enter$ = differResult$.pipe(Object(_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachAddedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(a => a));
        this.move$ = differResult$.pipe(Object(_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachMovedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(a => a));
        this.identityChange$ = differResult$.pipe(Object(_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachIdentityChange'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(a => a));
        this.exit$ = differResult$.pipe(Object(_from_for__WEBPACK_IMPORTED_MODULE_6__["fromFor"])('forEachRemovedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(a => a));
        this.cdRef.detectChanges();
    }
    tearDownDirective() {
        this.viewContainerRef.clear();
        this.subscription.unsubscribe();
    }
}
RxForDiffer2Directive.ɵfac = function RxForDiffer2Directive_Factory(t) { return new (t || RxForDiffer2Directive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RxForDiffer2Directive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RxForDiffer2Directive, selectors: [["", "rxForDiffer2", ""]], inputs: { rxForDiffer2: "rxForDiffer2", rxForDiffer2TrackBy: "rxForDiffer2TrackBy", rxForDiffer2DistinctBy: "rxForDiffer2DistinctBy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxForDiffer2Directive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[rxForDiffer2]',
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"]]
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_4__["RxState"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { rxForDiffer2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForDiffer2TrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rxForDiffer2DistinctBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OefJ":
/*!*****************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/rx-differ.ts ***!
  \*****************************************************************/
/*! exports provided: diffByIndex, diffByKey, functionalDiffer, rxIterableDifferFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffByIndex", function() { return diffByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffByKey", function() { return diffByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionalDiffer", function() { return functionalDiffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxIterableDifferFactory", function() { return rxIterableDifferFactory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "wzmI");



// Identify items over their index in the array
function diffByIndex(oldData, newData) {
    const oldLength = oldData.length, dataLength = newData.length, enter = [], update = [], exit = [];
    // `i` is defined at the top of the function as it is shared with all `for` loops
    let i = 0;
    // The counter variable is left out as we use the shared `i` as counter
    for (; i < dataLength; ++i) {
        // As we track by index, if a value is provided for that index it belongs to the update set
        if (oldData[i]) {
            update[i] = newData[i];
        }
        // If no value is present at the current index it belongs to the enter set.
        else {
            enter[i] = newData[i];
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    // As `i` was used in the `for` loop for the newData,
    // the only situation where we can enter this loop is if the old data set is bigger than the new one.
    for (; i < oldLength; ++i) {
        // This check is needed to only non-null values belong to the exit set
        if (oldData[i]) {
            exit[i] = oldData[i];
        }
    }
    return { enter, update, exit };
}
// Identify items over a provided key in the array
function diffByKey(oldData, newData, key = (item, idx) => idx, distinct = (item, idx) => item) {
    let i, keyValue;
    const dataByKeyValue = new Map, oldDataLength = oldData.length, newDataLength = newData.length, keyValues = new Array(oldDataLength), enter = [], update = [], exit = [];
    // Iterate over the old data and compute the key for each node.
    for (i = 0; i < oldDataLength; ++i) {
        const d = oldData[i];
        if (d) {
            // Make sure the result is a string by coercing it with `+ ''` at the end
            keyValues[i] = keyValue = key(d, i) + '';
            // If multiple nodes have the same key, the duplicates are added to exit set.
            if (dataByKeyValue.has(keyValue)) {
                exit[i] = d;
            }
            // datum has a unique key result
            else {
                dataByKeyValue.set(keyValue, d);
            }
        }
    }
    // Iterate over the old data and compute the key for each datum.
    for (i = 0; i < newDataLength; ++i) {
        const d = newData[i];
        // Make sure the result is a string by coercing it with `+ ''` at the end
        keyValue = key(d, i) + '';
        // If there a datum associated with this key, join and add it to update.
        const old = dataByKeyValue.get(keyValue);
        if (old) {
            // only update items that are distinct
            if (distinct) {
                if (distinct(old) !== distinct(d)) {
                    update[i] = d;
                }
            }
            else {
                update[i] = d;
            }
            // we need to delete this here as we dont want to have them included in the next loop
            dataByKeyValue.delete(keyValue);
        }
        // If there is not (or the key is a duplicate), add it to enter.
        // @TODO Why key can be a duplicate??
        else {
            enter[i] = d;
        }
    }
    // Iterate over the old data and add any remaining nodes that were not bound to data to the exit set.
    for (i = 0; i < oldDataLength; ++i) {
        const d = oldData[i];
        // @TODO Why check for reference equality??
        if ((d) && (dataByKeyValue.get(keyValues[i]) === d)) {
            exit[i] = d;
        }
    }
    return { enter, update, exit };
}
function functionalDiffer(oldData, newData, key, distinct) {
    const diffFn = key ? (o, n) => diffByKey(o, n, key) : (o, n) => diffByIndex(o, n);
    return diffFn(oldData, newData);
}
function rxIterableDifferFactory(config) {
    const trackBy = (typeof config.trackBy !== 'function') ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["constantPluck"])(config.trackBy) : config.trackBy;
    const distinctBy = (typeof config.distinctBy !== 'function') ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["constantPluck"])(config.distinctBy) : config.distinctBy;
    const array$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    const differResult$ = array$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([oldData, newData]) => {
        return functionalDiffer(oldData, newData, trackBy);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publishReplay"])(1));
    return {
        connect,
        next,
        enter$: differResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(r => r.enter)),
        update$: differResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(r => r.update)),
        exit$: differResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(r => r.exit))
    };
    // ===
    function connect() {
        return differResult$.connect();
    }
    function next(v) {
        array$.next(v);
    }
}


/***/ }),

/***/ "Rsc9":
/*!****************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/from-for.ts ***!
  \****************************************************************/
/*! exports provided: fromFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromFor", function() { return fromFor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");

function fromFor(fn) {
    return (o$) => new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((s) => {
        const subscription = o$.subscribe(n => {
            const a = [];
            // tslint:disable-next-line:no-unused-expression
            if (n != null) {
                n[fn](v => a.push(v.item));
                s.next(a);
            }
            else {
                s.next([]);
            }
        });
        return subscription.unsubscribe;
    });
}


/***/ }),

/***/ "lb96":
/*!*************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/index.ts ***!
  \*************************************************************/
/*! exports provided: diffByIndex, diffByKey, functionalDiffer, rxIterableDifferFactory, RxForDifferDirective, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rx_differ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-differ */ "OefJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffByIndex", function() { return _rx_differ__WEBPACK_IMPORTED_MODULE_0__["diffByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffByKey", function() { return _rx_differ__WEBPACK_IMPORTED_MODULE_0__["diffByKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionalDiffer", function() { return _rx_differ__WEBPACK_IMPORTED_MODULE_0__["functionalDiffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rxIterableDifferFactory", function() { return _rx_differ__WEBPACK_IMPORTED_MODULE_0__["rxIterableDifferFactory"]; });

/* harmony import */ var _rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-for-differ.directive */ "+LQi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxForDifferDirective", function() { return _rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__["RxForDifferDirective"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.module */ "oVma");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });






/***/ }),

/***/ "oVma":
/*!*********************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/shared.module.ts ***!
  \*********************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-for-differ.directive */ "+LQi");
/* harmony import */ var _rx_for_differ2_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-for-differ2.directive */ "3/5o");




const DECLARATIONS = [_rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__["RxForDifferDirective"], _rx_for_differ2_directive__WEBPACK_IMPORTED_MODULE_2__["RxForDiffer2Directive"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__["RxForDifferDirective"], _rx_for_differ2_directive__WEBPACK_IMPORTED_MODULE_2__["RxForDiffer2Directive"]], exports: [_rx_for_differ_directive__WEBPACK_IMPORTED_MODULE_1__["RxForDifferDirective"], _rx_for_differ2_directive__WEBPACK_IMPORTED_MODULE_2__["RxForDiffer2Directive"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DECLARATIONS],
                imports: [],
                exports: [DECLARATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "wzmI":
/*!*************************************************************!*\
  !*** ./src/app/features/experiments/differ/shared/utils.ts ***!
  \*************************************************************/
/*! exports provided: distinctArray, constant, constantPluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctArray", function() { return distinctArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantPluck", function() { return constantPluck; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");

function distinctArray(trackBy, distinctBy) {
    return (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(arr => arr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["groupBy"])(i => trackBy(i)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(o => distinctBy ? o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])((a, b) => distinctBy(a) === distinctBy(b))) : o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])());
}
function constant(x) {
    return function () {
        return x;
    };
}
function constantPluck(x) {
    return function (i) {
        return i[x];
    };
}


/***/ })

}]);
//# sourceMappingURL=default~rx-for-differ-rx-for-differ-module~rx-iterable-differ-rx-iterable-differ-module.js.map