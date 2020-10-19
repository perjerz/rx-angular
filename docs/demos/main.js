(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+D5W":
/*!*****************************************************************!*\
  !*** ./src/app/features/template/strategies/strategies.menu.ts ***!
  \*****************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'Renderer',
        link: 'renderer'
    },
    {
        label: 'Virtual Scroll Demo',
        link: 'virtual-scroll-demo'
    }
];


/***/ }),

/***/ "+kri":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rxjs/operators/select.ts ***!
  \*******************************************************************************************/
/*! exports provided: select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils */ "wwob");
/* harmony import */ var _stateful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateful */ "wf/3");



/**
 * @internal
 */
function select(...opOrMapFn) {
    return (state$) => {
        if (!opOrMapFn || opOrMapFn.length === 0) {
            return state$.pipe(Object(_stateful__WEBPACK_IMPORTED_MODULE_2__["stateful"])());
        }
        else if (Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["isStringArrayGuard"])(opOrMapFn)) {
            return state$.pipe(Object(_stateful__WEBPACK_IMPORTED_MODULE_2__["stateful"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(...opOrMapFn)));
        }
        else if (Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["isOperateFnArrayGuard"])(opOrMapFn)) {
            return state$.pipe(Object(_stateful__WEBPACK_IMPORTED_MODULE_2__["stateful"])(Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["pipeFromArray"])(opOrMapFn)));
        }
        else {
            throw new Error('wrong params passed to select');
        }
    };
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/rx-angular/rx-angular/apps/demos/src/main.ts */"zUnb");


/***/ }),

/***/ "0HvM":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["rxa-home"]], decls: 33, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to RxAngular Demos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Explore various sections that will guide you through features of RxAngular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83C\uDFC1 Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Demos presenting fundamental rules and functionalities existing in Angular that are good to know before you start your journey with RxAngular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83E\uDDF0 Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Playground for different functionalities of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "@rx-angular/template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " package. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDCCB Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tutorials for features existing in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "@rx-angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " packages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83E\uDDEE Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "@rx-angular/state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " integrated with different libraries and patterns. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\uD83D\uDD2C Experiments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Experiments with features, that are still under development. \u26A0\uFE0FWarning! \u26A0\uFE0FUnstable or broken features may lay ahead! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["code[_ngcontent-%COMP%] {\n      background: black;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-home',
                template: `
    <h1>Welcome to RxAngular Demos!</h1>
    <h3>Explore various sections that will guide you through features of RxAngular.</h3>

    <ul>
      <li><h4>🏁 Fundamentals</h4></li>
      Demos presenting fundamental rules and functionalities existing in Angular that are good to know before you start your journey with RxAngular.

      <li><h4>🧰 Template</h4></li>
      Playground for different functionalities of the <code>@rx-angular/template</code> package.

      <li><h4>📋 Tutorials</h4></li>
      Tutorials for features existing in the <code>@rx-angular</code> packages.

      <li><h4>🧮 Integrations</h4></li>
      <code>@rx-angular/state</code> integrated with different libraries and patterns.

      <li><h4>🔬 Experiments</h4></li>
      Experiments with features, that are still under development. ⚠️Warning! ⚠️Unstable or broken features may lay ahead!
    </ul>
  `,
                styles: [`
    code {
      background: black;
    }
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "2JdT":
/*!******************************************************************!*\
  !*** ./src/app/features/integrations/integrations-shell.menu.ts ***!
  \******************************************************************/
/*! exports provided: INTEGRATIONS_MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTEGRATIONS_MENU_ITEMS", function() { return INTEGRATIONS_MENU_ITEMS; });
/* harmony import */ var _dynamic_counter_dynamic_counter_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-counter/dynamic-counter.menu */ "9JQR");

const INTEGRATIONS_MENU_ITEMS = [
    {
        label: 'Dynamic Counter',
        link: 'dynamic-counter',
        children: _dynamic_counter_dynamic_counter_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEMS"]
    }
];


/***/ }),

/***/ "2ZK8":
/*!************************************************************!*\
  !*** ./src/app/features/experiments/differ/differ.menu.ts ***!
  \************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'NgIterableDiffer',
        link: 'ng-iterable-differ'
    },
    {
        label: 'RxIterableDiffer',
        link: 'rx-iterable-differ'
    },
    {
        label: 'rxFor Differ',
        link: 'rx-for-differ'
    }
];


/***/ }),

/***/ "3M2+":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/array/toDictionary.ts ***!
  \***************************************************************************************************************/
/*! exports provided: toDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDictionary", function() { return toDictionary; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Converts an array of objects to a dictionary {[key: string]: T}.
 * Accepts array T[] and key of type string, number or symbol as inputs.
 *
 *
 * @example
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}, {id: 3, type: 'parrot'}];
 *
 * const creaturesDictionary = toDictionary(creatures, 'id');
 *
 * // creaturesDictionary will be:
 * // {
 * //  1: {id: 1, type: 'cat'},
 * //  2: {id: 2, type: 'dog'},
 * //  3: {id: 3, type: 'parrot'}
 * // };
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *
 *    readonly convertToDictionary$ = new Subject();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        'creaturesDictionary',
 *        this.convertToDictionary$,
 *        ({ creatures }) => {
 *            return toDictionary(creatures, 'id');
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    convertToDictionary(): void {
 *        this.state.set({ creaturesDictionary: toDictionary(this.state.get().creatures, 'id'});
 *    }
 * }
 *
 * @see {@link OnlyKeysOfSpecificType}
 * @param {OnlyKeysOfSpecificType<T, S>} key
 * @returns { [key: string]: T[] }
 * @docsPage toDictionary
 * @docsCategory transformation-helpers
 */
function toDictionary(source, key) {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(source)) {
        return source;
    }
    const sourceEmpty = !source.length;
    if (!Array.isArray(source) || sourceEmpty || !Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(source[0][key])) {
        if (!sourceEmpty) {
            console.warn('ToDictionary: unexpected input params.');
        }
        return {};
    }
    return source.reduce((acc, entity) => (Object.assign(Object.assign({}, acc), { [entity[key]]: entity })), {});
}


/***/ }),

/***/ "4qyh":
/*!*******************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/cdk/index.ts ***!
  \*******************************************************************************/
/*! exports provided: createAccumulationObservable, createSideEffectObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accumulation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accumulation-observable */ "zpjV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAccumulationObservable", function() { return _accumulation_observable__WEBPACK_IMPORTED_MODULE_0__["createAccumulationObservable"]; });

/* harmony import */ var _side_effect_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-effect-observable */ "RCr5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSideEffectObservable", function() { return _side_effect_observable__WEBPACK_IMPORTED_MODULE_1__["createSideEffectObservable"]; });





/***/ }),

/***/ "9Bzv":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/dictionaryToArray.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: dictionaryToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryToArray", function() { return dictionaryToArray; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Converts a dictionary of type {[key: string]: T} to array T[].
 *
 * @example
 *
 * const creaturesDictionary = {
 *   '1': {id: 1, type: 'cat'},
 *   '2': {id: 2, type: 'dog'},
 *   '3': {id: 3, type: 'parrot'}
 * };
 *
 * const creaturesArray = dictionaryToArray(creaturesDictionary);
 *
 * // creaturesArray will be:
 * // [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}, {id: 3, type: 'parrot'}];
 *
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *    readonly removeName$ = new Subject();
 *
 *    constructor(
 *      private state: RxState<ComponentState>,
 *      private api: ApiService
 *    ) {
 *      // Reactive implementation
 *      state.connect(
 *        'creatures',
 *        this.api.creaturesDictionary$,
 *        (_, creatures) => {
 *            return dictionaryToArray(creatures);
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    removeName(): void {
 *      this.api.creaturesDictionary$.pipe(
 *        // subscription handling logic
 *      ).subscribe(
 *        dictionary => this.set({creatures: dictionaryToArray(dictionary)})
 *      );
 *    }
 * }
 *
 * @returns T[];
 *
 * @docsPage dictionaryToArray
 * @docsCategory transformation-helpers
 */
function dictionaryToArray(dictionary) {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(dictionary)) {
        return dictionary;
    }
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(dictionary)) {
        console.warn(`DictionaryToArray: unexpected input.`);
        return [];
    }
    return Object.values(dictionary);
}


/***/ }),

/***/ "9JQR":
/*!*******************************************************************************!*\
  !*** ./src/app/features/integrations/dynamic-counter/dynamic-counter.menu.ts ***!
  \*******************************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'RxState and reactive forms',
        link: 'rx-state-and-reactive-forms'
    },
    {
        label: 'RxState as presenter',
        link: 'rx-state-as-presenter'
    },
    {
        label: 'RxState in the view',
        link: 'rx-state-in-the-view'
    },
    {
        label: 'RxState and subjects',
        link: 'rx-state-and-subjects'
    },
    {
        label: 'Starter',
        link: 'starter'
    }
];


/***/ }),

/***/ "9OPf":
/*!************************************!*\
  !*** ./src/app/app-shell/index.ts ***!
  \************************************/
/*! exports provided: AppShellModule, AppShellSidenavContent, AppShellHeaderContent, AppShellSidenavTitle, AppShellComponent, AppShellSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-shell.module */ "TbU2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return _app_shell_module__WEBPACK_IMPORTED_MODULE_0__["AppShellModule"]; });

/* harmony import */ var _app_shell_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-shell.models */ "suy2");
/* empty/unused harmony star reexport *//* harmony import */ var _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-shell-content.directives */ "Y3Rr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellSidenavContent", function() { return _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_2__["AppShellSidenavContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellHeaderContent", function() { return _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_2__["AppShellHeaderContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellSidenavTitle", function() { return _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_2__["AppShellSidenavTitle"]; });

/* harmony import */ var _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-shell-component/app-shell.component */ "Jyxe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellComponent", function() { return _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_3__["AppShellComponent"]; });

/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "IvGS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppShellSideNavComponent", function() { return _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["AppShellSideNavComponent"]; });








/***/ }),

/***/ "9Ogh":
/*!*********************************************************!*\
  !*** ./src/app/features/template/rx-let/rx-let.menu.ts ***!
  \*********************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'Error Handling',
        link: 'error-handling'
    },
    {
        label: 'Http Errors',
        link: 'http-errors'
    },
    {
        label: '*ngif hack',
        link: 'ng-if-hack'
    },
    {
        label: 'Template Bindings',
        link: 'template-bindings'
    },
    {
        label: 'Preloading Techniques',
        link: 'preloading-techniques'
    },
    {
        label: 'Lazy Components',
        link: 'lazy-components'
    }
];


/***/ }),

/***/ "ANtW":
/*!****************************************!*\
  !*** ./src/app/app-component/index.ts ***!
  \****************************************/
/*! exports provided: AppComponent, AppComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "JbkT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-component.module */ "GRa4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponentModule", function() { return _app_component_module__WEBPACK_IMPORTED_MODULE_1__["AppComponentModule"]; });





/***/ }),

/***/ "ApVg":
/*!***********************************************************!*\
  !*** ./src/app/shared/debug-helper/dirty-checks/index.ts ***!
  \***********************************************************/
/*! exports provided: DirtyChecksModule, DirtyChecksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dirty_checks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirty-checks.module */ "H2zJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyChecksModule", function() { return _dirty_checks_module__WEBPACK_IMPORTED_MODULE_0__["DirtyChecksModule"]; });

/* harmony import */ var _dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirty-checks.component */ "TzzS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyChecksComponent", function() { return _dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksComponent"]; });





/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    zoneless: false,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cst3":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/array/update.ts ***!
  \*********************************************************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _internals_valuesComparer_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_internals/valuesComparer.util */ "lBx5");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "XH7V");


/**
 * @description
 * Updates one or multiple items in an array T[].
 * For comparison you can provide key, array of keys or a custom comparison function that should return true if items match.
 * If no comparison is provided, an equality check is used by default.
 * Returns a shallow copy of the array T[] and updated items, does not mutate the original array.
 *
 * @example
 * // Update with comparison function
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}];
 *
 * const newCat = {id: 1, type: 'lion'};
 *
 * const updatedCreatures = update(creatures, newCat, (a, b) => a.id === b.id);
 *
 * // updatedCreatures will be:
 * // [{id: 1, type: 'lion'}, {id: 2, type: 'dog'}];
 *
 * @example
 * // Update with key
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}];
 *
 * const newCat = {id: 1, type: 'lion'};
 *
 * const updatedCreatures = update(creatures, newCat, 'id');
 *
 * // updatedCreatures will be:
 * // [{id: 1, type: 'lion'}, {id: 2, type: 'dog'}];
 *
 * @example
 * // Update with array of keys
 *
 * const creatures = [{id: 1, type: 'cat', name: 'Bella'}, {id: 2, type: 'dog', name: 'Sparky'}];
 *
 * const newCat = {id: 1, type: 'lion', name: 'Bella'};
 *
 * const updatedCreatures = update(creatures, newCat, ['id', 'name']);
 *
 * // updatedCreatures will be:
 * // [{id: 1, type: 'lion', name: 'Bella'}, {id: 2, type: 'dog', name: 'Sparky'}];
 *
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *
 *    readonly updateCreature$ = new Subject<Creature>();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        'creatures',
 *        this.updateCreature$,
 *        ({ creatures }, creatureToUpdate) => {
 *            return update(creatures, creatureToUpdate, (a, b) => a.id === b.id);
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    updateCreature(creatureToUpdate: Creature): void {
 *        this.state.set({ creatures: update(this.state.get().creatures, creatureToUpdate, (a, b) => a.id === b.id)});
 *    }
 * }
 *
 * @returns T[]
 *
 * @docsPage update
 * @docsCategory transformation-helpers
 */
function update(source, updates, compare) {
    const updatesAsArray = updates
        ? Array.isArray(updates)
            ? updates
            : [updates]
        : [];
    const sourceDefined = Object(_core__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(source);
    const sourceIsArray = Array.isArray(source);
    const invalidInput = !sourceIsArray && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(updates);
    if (sourceDefined && !sourceIsArray) {
        console.warn(`Update: Original value (${source}) is not an array.`);
    }
    if (invalidInput) {
        return source;
    }
    if (!sourceDefined || !source.length || !sourceIsArray) {
        return [...updatesAsArray];
    }
    return source.map((existingItem) => {
        const match = updatesAsArray.find((item) => Object(_internals_valuesComparer_util__WEBPACK_IMPORTED_MODULE_0__["valuesComparer"])(item, existingItem, compare));
        if (match) {
            return Object.assign(Object.assign({}, existingItem), match);
        }
        return existingItem;
    });
}


/***/ }),

/***/ "D3ey":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/patch.ts ***!
  \*********************************************************************************************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Merges an object of type T with updates of type Partial<T>.
 * Returns a new object where updates override original values while not mutating the original one.

 * @example
 * interface Creature {
 *  id: number,
 *  type: string,
 *  name: string
 * }
 *
 * const cat = {id: 1, type: 'cat'};
 *
 * const catWithname = patch(cat, {name: 'Fluffy'});
 *
 * // catWithname will be:
 * // {id: 1, type: 'cat', name: 'Fluffy'};
 *
 * @example
 * // Usage with RxState
 *
 * export class ProfileComponent {
 *
 *    readonly changeName$ = new Subject<string>();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        this.changeName$,
 *        (state, name) => {
 *            return patch(state, { name });
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    changeName(name: string): void {
 *        this.state.set(patch(this.get(), { name }));
 *    }
 * }
 *
 * @returns T
 *
 * @docsPage patch
 * @docsCategory transformation-helpers
 */
function patch(object, upd) {
    const update = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(upd) ? upd : {};
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(object) && Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(upd)) {
        console.warn(`Patch: original value ${object} is not an object.`);
        return Object.assign({}, update);
    }
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(object) && !Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(upd)) {
        console.warn(`Patch: original value ${object} and updates ${upd} are not objects.`);
        return object;
    }
    return Object.assign(Object.assign({}, object), update);
}


/***/ }),

/***/ "GRa4":
/*!*******************************************************!*\
  !*** ./src/app/app-component/app-component.module.ts ***!
  \*******************************************************/
/*! exports provided: AppComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentModule", function() { return AppComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "JbkT");
/* harmony import */ var _app_shell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-shell */ "9OPf");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "A7yd");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "tW7N");
/* harmony import */ var _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/debug-helper/dirty-checks */ "ApVg");




// import { DirtyChecksModule } from '../debug-helper/dirty-checks/dirty-checks.module';










class AppComponentModule {
}
AppComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppComponentModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppComponentModule_Factory(t) { return new (t || AppComponentModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _app_shell__WEBPACK_IMPORTED_MODULE_3__["AppShellModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"]),
            _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_11__["DirtyChecksModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppComponentModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _app_shell__WEBPACK_IMPORTED_MODULE_3__["AppShellModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_11__["DirtyChecksModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _app_shell__WEBPACK_IMPORTED_MODULE_3__["AppShellModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"]),
                    _shared_debug_helper_dirty_checks__WEBPACK_IMPORTED_MODULE_11__["DirtyChecksModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ga/7":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/core/utils/safe-pluck.ts ***!
  \*******************************************************************************************/
/*! exports provided: safePluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safePluck", function() { return safePluck; });
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards */ "KvDW");

function safePluck(stateObject, keys) {
    // needed to match null and undefined conventions of RxAngular core components
    // safePluck(null) -> return null
    // safePluck(undefined) -> return undefined
    // safePluck(obj, ['wrongKey']) -> return undefined
    // safePluck(obj, ['correctKey']) -> return value of key
    // safePluck(obj, '') -> return undefined
    // safePluck(obj, null) -> return undefined
    if (!Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(stateObject)) {
        return stateObject;
    }
    if (!Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(keys)) {
        return undefined;
    }
    // sanitize keys -> keep only valid keys (string, number, symbol)
    const keysArr = (Array.isArray(keys) ? keys : [keys]).filter(k => Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(k));
    if (keysArr.length === 0 ||
        !Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(stateObject) ||
        Object.keys(stateObject).length === 0) {
        return undefined;
    }
    let prop = stateObject[keysArr.shift()];
    keysArr.forEach(key => {
        if (Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(prop) && Object(_guards__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(key)) {
            prop = prop[key];
        }
    });
    return prop;
}


/***/ }),

/***/ "H2zJ":
/*!*************************************************************************!*\
  !*** ./src/app/shared/debug-helper/dirty-checks/dirty-checks.module.ts ***!
  \*************************************************************************/
/*! exports provided: DirtyChecksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyChecksModule", function() { return DirtyChecksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirty-checks.component */ "TzzS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "mFH5");





const DEPRECATIONS = [_dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksComponent"]];
class DirtyChecksModule {
}
DirtyChecksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirtyChecksModule });
DirtyChecksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirtyChecksModule_Factory(t) { return new (t || DirtyChecksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirtyChecksModule, { declarations: [_dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"]], exports: [_dirty_checks_component__WEBPACK_IMPORTED_MODULE_1__["DirtyChecksComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirtyChecksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...DEPRECATIONS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"]
                ],
                exports: [...DEPRECATIONS]
            }]
    }], null, null); })();


/***/ }),

/***/ "IvGS":
/*!**********************************************************!*\
  !*** ./src/app/app-shell/side-nav/side-nav.component.ts ***!
  \**********************************************************/
/*! exports provided: AppShellSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellSideNavComponent", function() { return AppShellSideNavComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "seVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "QcI7");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "ae7G");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _side_nav_item_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-nav-item.directive */ "mXi9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");














function AppShellSideNavComponent_cdk_nested_tree_node_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", navItem_r2.icon.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", navItem_r2.icon.matIcon, " ");
} }
function AppShellSideNavComponent_cdk_nested_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-nested-tree-node", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppShellSideNavComponent_cdk_nested_tree_node_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const navItem_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.navItemSelected.next(navItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppShellSideNavComponent_cdk_nested_tree_node_1_mat_icon_2_Template, 2, 2, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r2 = ctx.$implicit;
    const level_r3 = ctx.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", navItem_r2.link)("rxaAppShellSideNavItemLevel", level_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", navItem_r2.label, " ");
} }
function AppShellSideNavComponent_cdk_nested_tree_node_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", navItem_r8.icon.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", navItem_r8.icon.matIcon, " ");
} }
function AppShellSideNavComponent_cdk_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppShellSideNavComponent_cdk_nested_tree_node_2_mat_icon_2_Template, 2, 2, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r8 = ctx.$implicit;
    const level_r9 = ctx.level;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rxaAppShellSideNavItemLevel", level_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", navItem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](navItem_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r1.treeControl.isExpanded(navItem_r8));
} }
class AppShellSideNavComponent {
    constructor(state) {
        this.state = state;
        this.navItemDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"]((node) => node.children);
        this.navItemSelected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.viewState$ = this.state.select();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
    }
    set navItems(navItems) {
        this.navItemDataSource._data.next(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(navItems) || []);
    }
    trackNavItem(i, navItem) {
        return navItem.link;
    }
}
AppShellSideNavComponent.ɵfac = function AppShellSideNavComponent_Factory(t) { return new (t || AppShellSideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"])); };
AppShellSideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppShellSideNavComponent, selectors: [["rxa-side-nav"]], inputs: { navItems: "navItems" }, outputs: { navItemSelected: "navItemSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], decls: 3, vars: 3, consts: [[1, "ot-app-shell-tree", 3, "dataSource", "treeControl"], ["class", "app-shell-tree-node app-shell-leaf-node", 4, "cdkTreeNodeDef"], ["class", "app-shell-tree-node app-shell-expandable-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "app-shell-tree-node", "app-shell-leaf-node"], ["mat-flat-button", "", "routerLinkActive", "active", "rxaAppShellSideNavItem", "", 1, "w-100", "text-left", 3, "routerLink", "rxaAppShellSideNavItemLevel", "click"], ["class", "mr-1", 3, "svgIcon", 4, "ngIf"], [1, "mr-1", 3, "svgIcon"], [1, "app-shell-tree-node", "app-shell-expandable-node"], ["mat-flat-button", "", "rxaAppShellSideNavItem", "", "cdkTreeNodeToggle", "", 1, "w-100", "text-left", 3, "rxaAppShellSideNavItemLevel"], [3, "hidden"], ["cdkTreeNodeOutlet", ""]], template: function AppShellSideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppShellSideNavComponent_cdk_nested_tree_node_1_Template, 4, 4, "cdk-nested-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppShellSideNavComponent_cdk_nested_tree_node_2_Template, 7, 4, "cdk-nested-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.navItemDataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _side_nav_item_directive__WEBPACK_IMPORTED_MODULE_8__["AppShellSideNavItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"]], styles: [".app-shell-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.app-shell-sidenav-item[_ngcontent-%COMP%] {\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.app-shell-sidenav-item-level-1[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n\n.app-shell-sidenav-item-level-2[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtb3Mvc3JjL2FwcC9hcHAtc2hlbGwvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvZGVtb3Mvc3JjL2FwcC9hcHAtc2hlbGwvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNoZWxsLXRyZWUtbm9kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXBwLXNoZWxsLXNpZGVuYXYtaXRlbSB7XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYXBwLXNoZWxsLXNpZGVuYXYtaXRlbS1sZXZlbC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4uYXBwLXNoZWxsLXNpZGVuYXYtaXRlbS1sZXZlbC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppShellSideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rxa-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]],
            }]
    }], function () { return [{ type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }]; }, { navItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], navItemSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "JbkT":
/*!************************************************!*\
  !*** ./src/app/app-component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_presenter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-presenter.service */ "TNXa");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.menu */ "L9k1");
/* harmony import */ var _app_shell_app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-shell/app-shell-component/app-shell.component */ "Jyxe");
/* harmony import */ var _app_shell_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-shell/side-nav/side-nav.component */ "IvGS");
/* harmony import */ var _app_shell_app_shell_content_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-shell/app-shell-content.directives */ "Y3Rr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/debug-helper/dirty-checks/dirty-checks.component */ "TzzS");










class AppComponent {
    constructor(vm) {
        this.vm = vm;
        this.menuItems = _app_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_presenter_service__WEBPACK_IMPORTED_MODULE_1__["AppPresenter"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["rxa-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_app_presenter_service__WEBPACK_IMPORTED_MODULE_1__["AppPresenter"]])], decls: 8, vars: 2, consts: [[3, "navItems"], ["rxaAppShellSidenavTitle", ""], ["routerLink", "/", 2, "color", "inherit", "text-decoration", "none"], ["rxaAppShellHeaderContent", ""], ["radius", "40", 3, "color"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rxa-app-shell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rxa-side-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RxAngular Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rxa-dirty-check", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#3700ff1f");
    } }, directives: [_app_shell_app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_3__["AppShellComponent"], _app_shell_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["AppShellSideNavComponent"], _app_shell_app_shell_content_directives__WEBPACK_IMPORTED_MODULE_5__["AppShellSidenavTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _app_shell_app_shell_content_directives__WEBPACK_IMPORTED_MODULE_5__["AppShellHeaderContent"], _shared_debug_helper_dirty_checks_dirty_checks_component__WEBPACK_IMPORTED_MODULE_7__["DirtyChecksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtb3Mvc3JjL2FwcC9hcHAtY29tcG9uZW50L2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBRUYiLCJmaWxlIjoiYXBwcy9kZW1vcy9zcmMvYXBwL2FwcC1jb21wb25lbnQvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rxa-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [_app_presenter_service__WEBPACK_IMPORTED_MODULE_1__["AppPresenter"]],
            }]
    }], function () { return [{ type: _app_presenter_service__WEBPACK_IMPORTED_MODULE_1__["AppPresenter"] }]; }, null); })();


/***/ }),

/***/ "Jyxe":
/*!**********************************************************************!*\
  !*** ./src/app/app-shell/app-shell-component/app-shell.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellComponent", function() { return AppShellComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_viewport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/viewport.service */ "mftH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "A7yd");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");

















function AppShellComponent_mat_sidenav_container_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppShellComponent_mat_sidenav_container_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppShellComponent_mat_sidenav_container_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppShellComponent_mat_sidenav_container_0_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onBackButtonClick.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "keyboard_backspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppShellComponent_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-sidenav-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppShellComponent_mat_sidenav_container_0_button_8_Template, 3, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppShellComponent_mat_sidenav_container_0_button_9_Template, 3, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", state_r1.isHandset ? "over" : "side")("opened", state_r1.isHandset === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", state_r1.isHandset ? "dialog" : "navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", state_r1.isHandset && !state_r1.showBackButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", state_r1.showBackButton);
} }
const _c0 = [[["", "rxaAppShellSidenavTitle", ""]], [["rxa-side-nav"]], [["", "rxaAppShellHeaderContent", ""]], "*"];
const _c1 = ["[rxaAppShellSidenavTitle]", "rxa-side-nav", "[rxaAppShellHeaderContent]", "*"];
class AppShellComponent {
    constructor(viewport, state, router) {
        this.viewport = viewport;
        this.state = state;
        this.router = router;
        this.viewState$ = this.state.select();
        this.onBackButtonClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.connectViewport();
        this.connectBackButtonState();
        this.handleBackButtonClick();
    }
    ngAfterViewInit() {
        this.handleScrollPositionAfterNavigationEnd();
    }
    handleBackButtonClick() {
        this.state.hold(this.onBackButtonClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.state.select('backButtonNavigation'))), ([event, backButtonNavigation]) => {
            if (backButtonNavigation) {
                this.router.navigate(backButtonNavigation);
            }
            else {
                history.back();
            }
        });
    }
    handleScrollPositionAfterNavigationEnd() {
        // this effect makes sure the scrollable body gets reset to top: 0 after a route got changed
        this.state.hold(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.bodyScrollElement.scrollTo({ top: 0 }))));
    }
    connectBackButtonState() {
        this.state.connect(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])), () => {
            var _a, _b;
            let root = this.router.routerState.snapshot.root;
            while (root.children && root.children.length) {
                root = root.children[0];
            }
            return {
                showBackButton: ((_a = root.data) === null || _a === void 0 ? void 0 : _a.showBackButton) || false,
                backButtonNavigation: ((_b = root.data) === null || _b === void 0 ? void 0 : _b.backButtonNavigation) || null,
            };
        });
    }
    connectViewport() {
        this.state.connect('isHandset', this.viewport.isHandset$);
    }
}
AppShellComponent.ɵfac = function AppShellComponent_Factory(t) { return new (t || AppShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_viewport_service__WEBPACK_IMPORTED_MODULE_6__["ViewportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppShellComponent, selectors: [["rxa-app-shell"]], viewQuery: function AppShellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bodyScrollElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]])], ngContentSelectors: _c1, decls: 2, vars: 3, consts: [["class", "app-shell-container", 4, "ngIf"], [1, "app-shell-container"], ["fixedInViewport", "", 1, "app-shell-sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], [1, "app-shell-content"], ["color", "primary", 1, "app-shell-header"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["cdkScrollable", "", 1, "container-fluid", "app-shell-content-container"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["aria-label", "navigate back"]], template: function AppShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppShellComponent_mat_sidenav_container_0_Template, 13, 5, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.viewState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkScrollable"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".app-shell-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.app-shell-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.app-shell-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.app-shell-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.app-shell-content-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtb3Mvc3JjL2FwcC9hcHAtc2hlbGwvYXBwLXNoZWxsLWNvbXBvbmVudC9hcHAtc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy9kZW1vcy9zcmMvYXBwL2FwcC1zaGVsbC9hcHAtc2hlbGwtY29tcG9uZW50L2FwcC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2hlbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLXNoZWxsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXBwLXNoZWxsLXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5hcHAtc2hlbGwtaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYXBwLXNoZWxsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rxa-app-shell',
                templateUrl: './app-shell.component.html',
                styleUrls: ['./app-shell.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"]],
            }]
    }], function () { return [{ type: _shared_viewport_service__WEBPACK_IMPORTED_MODULE_6__["ViewportService"] }, { type: _rx_angular_state__WEBPACK_IMPORTED_MODULE_3__["RxState"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { bodyScrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"]]
        }] }); })();


/***/ }),

/***/ "Kuqp":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/setProp.ts ***!
  \***********************************************************************************************************/
/*! exports provided: setProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProp", function() { return setProp; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Accepts an object of type T, key of type K extends keyof T, and value of type T[K].
 * Sets the property and returns a newly updated shallow copy of an object while not mutating the original one.
 *
 * @example
 *
 * const cat = {id: 1, type: 'cat', name: 'Fluffy'};
 *
 * const renamedCat = setProp(cat, 'name', 'Bella');
 *
 * // renamedCat will be:
 * // {id: 1, type: 'cat', name: 'Bella'};
 *
 * @example
 * // Usage with RxState
 *
 * export class ProfileComponent {
 *
 *    readonly changeName$ = new Subject<string>();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        this.changeName$,
 *        (state, name) => {
 *            return setProp(state, 'name', name);
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    changeName(name: string): void {
 *        this.state.set(setProp(this.get(), 'name', name));
 *    }
 * }
 *
 * @returns T
 *
 * @docsPage setProp
 * @docsCategory transformation-helpers
 */
function setProp(object, key, value) {
    const objectIsObject = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(object);
    const keyIsValid = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(key);
    const initialObject = objectIsObject ? object : {};
    if (!objectIsObject) {
        console.warn(`SetProp: original value (${object}) is not an object.`);
    }
    if (!keyIsValid) {
        console.warn(`SetProp: key argument (${key}) is invalid.`);
    }
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(object) && !keyIsValid) {
        return object;
    }
    if (keyIsValid) {
        return Object.assign(Object.assign({}, initialObject), { [key]: value });
    }
    return Object.assign({}, initialObject);
}


/***/ }),

/***/ "KvDW":
/*!***************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/core/utils/guards.ts ***!
  \***************************************************************************************/
/*! exports provided: isPromiseGuard, isOperateFnArrayGuard, isStringArrayGuard, isIterableGuard, isKeyOf, isObjectGuard, isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseGuard", function() { return isPromiseGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperateFnArrayGuard", function() { return isOperateFnArrayGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStringArrayGuard", function() { return isStringArrayGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterableGuard", function() { return isIterableGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyOf", function() { return isKeyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectGuard", function() { return isObjectGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
function isPromiseGuard(value) {
    return (!!value &&
        typeof value.subscribe !== 'function' &&
        typeof value.then === 'function');
}
function isOperateFnArrayGuard(op) {
    if (!Array.isArray(op)) {
        return false;
    }
    return op.length > 0 && op.every((i) => typeof i === 'function');
}
function isStringArrayGuard(op) {
    if (!Array.isArray(op)) {
        return false;
    }
    return op.length > 0 && op.every((i) => typeof i === 'string');
}
function isIterableGuard(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}
function isKeyOf(k) {
    return (!!k &&
        (typeof k === 'string' || typeof k === 'symbol' || typeof k === 'number'));
}
function isObjectGuard(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
function isDefined(val) {
    return val !== null && val !== undefined;
}


/***/ }),

/***/ "L9k1":
/*!*******************************************!*\
  !*** ./src/app/app-component/app.menu.ts ***!
  \*******************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony import */ var _features_fundamentals_fundamentals_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/fundamentals/fundamentals.menu */ "TRfu");
/* harmony import */ var _features_template_template_shell_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/template/template-shell.menu */ "qPt8");
/* harmony import */ var _features_tutorials_tutorials_shell_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/tutorials/tutorials-shell.menu */ "laiH");
/* harmony import */ var _features_integrations_integrations_shell_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/integrations/integrations-shell.menu */ "2JdT");
/* harmony import */ var _features_experiments_experiments_shell_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/experiments/experiments-shell.menu */ "eyhw");
/* harmony import */ var _features_performance_performance_shell_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/performance/performance-shell.menu */ "ihGQ");






const MENU_ITEMS = [
    {
        label: '🏁 Fundamentals',
        link: 'fundamentals',
        children: _features_fundamentals_fundamentals_menu__WEBPACK_IMPORTED_MODULE_0__["FUNDAMENTALS_MENU"]
    },
    {
        label: '🧰 Template',
        link: 'template',
        children: _features_template_template_shell_menu__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_MENU"]
    },
    {
        label: '📋 Tutorials',
        link: 'tutorials',
        children: _features_tutorials_tutorials_shell_menu__WEBPACK_IMPORTED_MODULE_2__["TUTORIALS_MENU"]
    },
    {
        label: '🧮 Integrations',
        link: 'integrations',
        children: _features_integrations_integrations_shell_menu__WEBPACK_IMPORTED_MODULE_3__["INTEGRATIONS_MENU_ITEMS"]
    },
    {
        label: '🔬 Experiments',
        link: 'experiments',
        children: _features_experiments_experiments_shell_menu__WEBPACK_IMPORTED_MODULE_4__["EXPERIMENTS_MENU"]
    },
    {
        label: '🏎️ Performance',
        link: 'performance',
        children: _features_performance_performance_shell_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"]
    }
];


/***/ }),

/***/ "Lhsp":
/*!*******************************************************************!*\
  !*** ./src/app/features/tutorials/basics/tutorial-basics.menu.ts ***!
  \*******************************************************************/
/*! exports provided: TUTORIAL_BASICS_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUTORIAL_BASICS_MENU", function() { return TUTORIAL_BASICS_MENU; });
const TUTORIAL_BASICS_MENU = [
    {
        label: 'Setup',
        link: 'setup'
    },
    {
        label: 'Input Bindings',
        link: 'input-bindings'
    },
    {
        label: 'Output Bindings',
        link: 'output-bindings'
    },
    {
        label: 'Global State',
        link: 'global-state'
    },
    {
        label: 'Side Effects',
        link: 'side-effects'
    },
    {
        label: 'Presenter Pattern',
        link: 'presenter-pattern'
    },
    {
        label: 'Demo Basics Completed',
        link: 'solution'
    }
];


/***/ }),

/***/ "PsR+":
/*!****************************************************************************!*\
  !*** ./src/app/features/performance/rx-let-vs-push/rx-let-vs-push.menu.ts ***!
  \****************************************************************************/
/*! exports provided: RXLET_VS_PUSH_MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RXLET_VS_PUSH_MENU_ITEMS", function() { return RXLET_VS_PUSH_MENU_ITEMS; });
const RXLET_VS_PUSH_MENU_ITEMS = [
    {
        link: 'rx-let-vs-push',
        label: 'RxLet vs Push',
        children: [
            {
                link: 'list-toggle',
                label: 'List toggle',
            },
        ],
    },
];


/***/ }),

/***/ "Qb08":
/*!******************************************************************************************!*\
  !*** ./src/app/features/experiments/structural-directives/structural-directives.menu.ts ***!
  \******************************************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        link: 'view-vs-embedded-view',
        label: 'View vs EmbeddedView'
    },
    {
        link: 'rx-if-poc',
        label: 'RxIf Poc'
    },
    {
        link: 'rx-swicht-poc',
        label: 'RxSwitch POC'
    },
    {
        link: 'rx-for-poc',
        label: 'RxFor POC'
    }
];


/***/ }),

/***/ "RCr5":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/cdk/side-effect-observable.ts ***!
  \************************************************************************************************/
/*! exports provided: createSideEffectObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSideEffectObservable", function() { return createSideEffectObservable; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");


function createSideEffectObservable(stateObservables = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]()) {
    const effects$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(stateObservables.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"])));
    function nextEffectObservable(effect$) {
        stateObservables.next(effect$);
    }
    function subscribe() {
        return effects$.subscribe();
    }
    return {
        effects$,
        nextEffectObservable,
        subscribe
    };
}


/***/ }),

/***/ "S0Hg":
/*!**********************************************!*\
  !*** ./src/app/shared/debug-helper/hooks.ts ***!
  \**********************************************/
/*! exports provided: Hooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hooks", function() { return Hooks; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");



class Hooks {
    constructor() {
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.onChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    ngOnChanges(changes) {
        this.onChanges$.next();
    }
    ngAfterViewInit() {
        this.afterViewInit$.next();
        this.afterViewInit$.complete();
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onChanges$.complete();
        this.afterViewInit$.complete();
        this.onDestroy$.complete();
    }
}
Hooks.ɵfac = function Hooks_Factory(t) { return new (t || Hooks)(); };
Hooks.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Hooks, factory: Hooks.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Hooks, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "TNXa":
/*!********************************************************!*\
  !*** ./src/app/app-component/app-presenter.service.ts ***!
  \********************************************************/
/*! exports provided: AppPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPresenter", function() { return AppPresenter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "HOZh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





class AppPresenter {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
AppPresenter.ɵfac = function AppPresenter_Factory(t) { return new (t || AppPresenter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
AppPresenter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppPresenter, factory: AppPresenter.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppPresenter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "TRfu":
/*!************************************************************!*\
  !*** ./src/app/features/fundamentals/fundamentals.menu.ts ***!
  \************************************************************/
/*! exports provided: FUNDAMENTALS_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNDAMENTALS_MENU", function() { return FUNDAMENTALS_MENU; });
/* harmony import */ var _render_callback_render_callback_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-callback/render-callback.menu */ "nvWR");

const FUNDAMENTALS_MENU = [
    {
        link: 'nested-vs-injected',
        label: 'Nested vs Projected'
    },
    {
        link: 'passing-values',
        label: 'Passing Values'
    },
    {
        link: 'zone-patched-apis',
        label: 'Zone Patched APIs'
    },
    {
        label: 'Scheduling',
        link: 'scheduling'
    },
    {
        label: 'Coalescing',
        link: 'coalescing'
    },
    ..._render_callback_render_callback_menu__WEBPACK_IMPORTED_MODULE_0__["RENDERCALLBACK_MENU"]
];


/***/ }),

/***/ "TbU2":
/*!***********************************************!*\
  !*** ./src/app/app-shell/app-shell.module.ts ***!
  \***********************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "seVz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "lQ7A");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "A7yd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-shell-content.directives */ "Y3Rr");
/* harmony import */ var _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-shell-component/app-shell.component */ "Jyxe");
/* harmony import */ var _side_nav_side_nav_item_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./side-nav/side-nav-item.directive */ "mXi9");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "IvGS");















const exportedDeclarations = [
    _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellHeaderContent"],
    _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavContent"],
    _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_11__["AppShellComponent"],
    _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavTitle"],
    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["AppShellSideNavComponent"],
];
class AppShellModule {
}
AppShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppShellModule });
AppShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppShellModule_Factory(t) { return new (t || AppShellModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppShellModule, { declarations: [_app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellHeaderContent"],
        _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavContent"],
        _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_11__["AppShellComponent"],
        _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavTitle"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["AppShellSideNavComponent"], _side_nav_side_nav_item_directive__WEBPACK_IMPORTED_MODULE_12__["AppShellSideNavItemDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"]], exports: [_app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellHeaderContent"],
        _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavContent"],
        _app_shell_component_app_shell_component__WEBPACK_IMPORTED_MODULE_11__["AppShellComponent"],
        _app_shell_content_directives__WEBPACK_IMPORTED_MODULE_10__["AppShellSidenavTitle"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_13__["AppShellSideNavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [...exportedDeclarations, _side_nav_side_nav_item_directive__WEBPACK_IMPORTED_MODULE_12__["AppShellSideNavItemDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"],
                ],
                exports: exportedDeclarations,
            }]
    }], null, null); })();


/***/ }),

/***/ "TzzS":
/*!****************************************************************************!*\
  !*** ./src/app/shared/debug-helper/dirty-checks/dirty-checks.component.ts ***!
  \****************************************************************************/
/*! exports provided: DirtyChecksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyChecksComponent", function() { return DirtyChecksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "S0Hg");




class DirtyChecksComponent extends _hooks__WEBPACK_IMPORTED_MODULE_2__["Hooks"] {
    constructor(elementRef, renderer) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dirtyChecks = 0;
        this.rippleOn = true;
        this.radius = 20;
        this.color = 'rgba(253,255,0,0.24)';
        this.rippleEffect = { centered: true };
        this.afterViewInit$.subscribe(() => {
            this.ripple.launch(this.rippleEffect);
            this.displayElem = this.elementRef.nativeElement.children[0].children[0];
            this.numDirtyChecks();
        });
    }
    numDirtyChecks() {
        // tslint:disable-next-line:no-unused-expression
        this.rippleOn && this.ripple && this.ripple.launch(this.rippleEffect);
        // tslint:disable-next-line:no-unused-expression
        this.displayElem && this.renderer.setProperty(this.displayElem, 'innerHTML', ++this.dirtyChecks + '');
    }
}
DirtyChecksComponent.ɵfac = function DirtyChecksComponent_Factory(t) { return new (t || DirtyChecksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DirtyChecksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirtyChecksComponent, selectors: [["rxa-dirty-check"]], viewQuery: function DirtyChecksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, inputs: { rippleOn: "rippleOn", radius: "radius", color: "color", rippleEffect: "rippleEffect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function DirtyChecksComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]   .indicator-ripple[_ngcontent-%COMP%] {\n      border: 1px solid #ffff005f;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirtyChecksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'rxa-dirty-check',
                template: `

  `,
                styles: [`
    :host .indicator-ripple {
      border: 1px solid #ffff005f;
    }`]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }], rippleOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rippleEffect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VS0U":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/deleteProp.ts ***!
  \**************************************************************************************************************/
/*! exports provided: deleteProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProp", function() { return deleteProp; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Accepts an object of type T and key of type K extends keyof T.
 * Removes property from an object and returns a shallow copy of the updated object without specified property.
 * If property not found returns copy of the original object.
 * Not mutating original object.
 *
 * @example
 *
 * const cat = {id: 1, type: 'cat', name: 'Fluffy'};
 *
 * const anonymusCat = deleteProp(cat, 'name');
 *
 * // anonymusCat will be:
 * // {id: 1, type: 'cat'};
 *
 * @example
 * // Usage with RxState
 *
 * export class ProfileComponent {
 *
 *    readonly removeName$ = new Subject();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        this.removeName$,
 *        (state) => {
 *            return deleteProp(state, 'name');
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    removeName(): void {
 *        this.state.set(remove(this.get(), 'name'));
 *    }
 * }
 *
 * @returns Omit<T, K>
 *
 * @docsPage deleteProp
 * @docsCategory transformation-helpers
 */
function deleteProp(object, key) {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(object) || !Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(object)) {
        console.warn(`DeleteProp: original value ${object} is not an object.`);
        return object;
    }
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(key)) {
        console.warn(`DeleteProp: provided key is not a string, number or symbol.`);
        return Object.assign({}, object);
    }
    const copy = Object.assign({}, object);
    delete copy[key];
    return copy;
}


/***/ }),

/***/ "Woiy":
/*!*****************************************************!*\
  !*** ./src/app/features/template/push/push.menu.ts ***!
  \*****************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'Push Basic Example',
        link: 'basic-example'
    }
];


/***/ }),

/***/ "XH7V":
/*!********************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/core/index.ts ***!
  \********************************************************************************/
/*! exports provided: pipeFromArray, isIterableGuard, isOperateFnArrayGuard, isPromiseGuard, isStringArrayGuard, isKeyOf, isObjectGuard, isDefined, safePluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "wwob");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["pipeFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterableGuard", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isIterableGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOperateFnArrayGuard", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isOperateFnArrayGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiseGuard", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isPromiseGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStringArrayGuard", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isStringArrayGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isKeyOf", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectGuard", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safePluck", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["safePluck"]; });




/***/ }),

/***/ "XKiv":
/*!******************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rxjs/operators/index.ts ***!
  \******************************************************************************************/
/*! exports provided: stateful, select, distinctUntilSomeChanged, selectSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateful */ "wf/3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateful", function() { return _stateful__WEBPACK_IMPORTED_MODULE_0__["stateful"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "+kri");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony import */ var _distinctUntilSomeChanged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distinctUntilSomeChanged */ "tard");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilSomeChanged", function() { return _distinctUntilSomeChanged__WEBPACK_IMPORTED_MODULE_2__["distinctUntilSomeChanged"]; });

/* harmony import */ var _selectSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectSlice */ "sjst");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSlice", function() { return _selectSlice__WEBPACK_IMPORTED_MODULE_3__["selectSlice"]; });







/***/ }),

/***/ "Y3Rr":
/*!***********************************************************!*\
  !*** ./src/app/app-shell/app-shell-content.directives.ts ***!
  \***********************************************************/
/*! exports provided: AppShellSidenavContent, AppShellHeaderContent, AppShellSidenavTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellSidenavContent", function() { return AppShellSidenavContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellHeaderContent", function() { return AppShellHeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellSidenavTitle", function() { return AppShellSidenavTitle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class AppShellSidenavContent {
}
AppShellSidenavContent.ɵfac = function AppShellSidenavContent_Factory(t) { return new (t || AppShellSidenavContent)(); };
AppShellSidenavContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppShellSidenavContent, selectors: [["", "rxaAppShellSidenavContent", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellSidenavContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[rxaAppShellSidenavContent]',
            }]
    }], null, null); })();
class AppShellHeaderContent {
}
AppShellHeaderContent.ɵfac = function AppShellHeaderContent_Factory(t) { return new (t || AppShellHeaderContent)(); };
AppShellHeaderContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppShellHeaderContent, selectors: [["", "rxaAppShellHeaderContent", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellHeaderContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[rxaAppShellHeaderContent]',
            }]
    }], null, null); })();
class AppShellSidenavTitle {
}
AppShellSidenavTitle.ɵfac = function AppShellSidenavTitle_Factory(t) { return new (t || AppShellSidenavTitle)(); };
AppShellSidenavTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppShellSidenavTitle, selectors: [["", "rxaAppShellSidenavTitle", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellSidenavTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[rxaAppShellSidenavTitle]',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-component */ "ANtW");
/* harmony import */ var _shared_environment_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/environment.token */ "iSv4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/home/home.component */ "0HvM");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _shared_environment_token__WEBPACK_IMPORTED_MODULE_4__["ENVIRONMENT_SETTINGS"],
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_features_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponentModule"]
                ],
                providers: [
                    {
                        provide: _shared_environment_token__WEBPACK_IMPORTED_MODULE_4__["ENVIRONMENT_SETTINGS"],
                        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]
                    }
                ],
                declarations: [_features_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ae7G":
/*!*********************************************!*\
  !*** ./src/app/app-shell/side-nav/utils.ts ***!
  \*********************************************/
/*! exports provided: generateRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRoutes", function() { return generateRoutes; });
function generateRoutes(navigationItems, link = '') {
    return navigationItems.reduce((items, item) => {
        item.link = link ? link + '/' + item.link : item.link;
        if (item.children && item.children.length) {
            item.children = generateRoutes(item.children, item.link);
        }
        return items.concat([item]);
    }, []);
}


/***/ }),

/***/ "c8b2":
/*!**************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rx-state.service.ts ***!
  \**************************************************************************************/
/*! exports provided: RxState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxState", function() { return RxState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "XH7V");
/* harmony import */ var _cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cdk */ "4qyh");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rxjs/operators */ "XKiv");







/**
 * @description
 * RxState is a light-weight reactive state management service for managing local state in angular.
 *
 * @example
 * Component({
 *   selector: 'app-stateful',
 *   template: `<div>{{ state$ | async | json }}</div>`,
 *   providers: [RxState]
 * })
 * export class StatefulComponent {
 *   readonly state$ = this.state.select();
 *
 *   constructor(private state: RxState<{ foo: string }>) {}
 * }
 *
 * @docsCategory RxState
 * @docsPage RxState
 */
class RxState {
    /**
     * @internal
     */
    constructor() {
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.accumulator = Object(_cdk__WEBPACK_IMPORTED_MODULE_4__["createAccumulationObservable"])();
        this.effectObservable = Object(_cdk__WEBPACK_IMPORTED_MODULE_4__["createSideEffectObservable"])();
        /**
         * @description
         * The unmodified state exposed as `Observable<T>`. It is not shared, distinct or gets replayed.
         * Use the `$` property if you want to read the state without having applied {@link stateful} to it.
         */
        this.$ = this.accumulator.signal$;
        this.subscription.add(this.subscribe());
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @description
     *
     * Allows to customize state accumulation function.
     * This can be helpful to implement deep updates and tackle other immutability problems in a custom way.
     * @example
     *
     * ```typescript
     * const myAccumulator = (state: MyState, slice: Partial<MyState>) => deepCopy(state, slice);
     *
     * this.state.setAccumulator(myAccumulator);
     * ```
     */
    setAccumulator(accumulatorFn) {
        this.accumulator.nextAccumulator(accumulatorFn);
    }
    /** @internal **/
    get(...keys) {
        const hasStateAnyKeys = Object.keys(this.accumulator.state).length > 0;
        if (hasStateAnyKeys && !!keys && keys.length > 0) {
            return Object(_core__WEBPACK_IMPORTED_MODULE_3__["safePluck"])(this.accumulator.state, keys);
        }
        else {
            return this.accumulator.state;
        }
    }
    /**
     * @internal
     */
    set(keyOrStateOrProjectState, stateOrSliceProjectFn) {
        if (typeof keyOrStateOrProjectState === 'object' &&
            stateOrSliceProjectFn === undefined) {
            this.accumulator.nextSlice(keyOrStateOrProjectState);
            return;
        }
        if (typeof keyOrStateOrProjectState === 'function' &&
            stateOrSliceProjectFn === undefined) {
            this.accumulator.nextSlice(keyOrStateOrProjectState(this.accumulator.state));
            return;
        }
        if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isKeyOf"])(keyOrStateOrProjectState) &&
            typeof stateOrSliceProjectFn === 'function') {
            const state = {};
            state[keyOrStateOrProjectState] = stateOrSliceProjectFn(this.accumulator.state);
            this.accumulator.nextSlice(state);
            return;
        }
        throw new Error('wrong params passed to set');
    }
    /**
     * @internal
     */
    connect(keyOrInputOrSlice$, projectOrSlices$, projectValueFn) {
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(keyOrInputOrSlice$) &&
            projectOrSlices$ === undefined &&
            projectValueFn === undefined) {
            this.accumulator.nextSliceObservable(keyOrInputOrSlice$);
            return;
        }
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(keyOrInputOrSlice$) &&
            typeof projectOrSlices$ === 'function' &&
            !Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(projectOrSlices$) &&
            projectValueFn === undefined) {
            const project = projectOrSlices$;
            const slice$ = keyOrInputOrSlice$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((v) => project(this.get(), v)));
            this.accumulator.nextSliceObservable(slice$);
            return;
        }
        if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isKeyOf"])(keyOrInputOrSlice$) &&
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(projectOrSlices$) &&
            projectValueFn === undefined) {
            const key = keyOrInputOrSlice$;
            const slice$ = projectOrSlices$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => (Object.assign({}, { [key]: value }))));
            this.accumulator.nextSliceObservable(slice$);
            return;
        }
        if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isKeyOf"])(keyOrInputOrSlice$) &&
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(projectOrSlices$) &&
            typeof projectValueFn === 'function') {
            const key = keyOrInputOrSlice$;
            const slice$ = projectOrSlices$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => (Object.assign({}, { [key]: projectValueFn(this.get(), value) }))));
            this.accumulator.nextSliceObservable(slice$);
            return;
        }
        throw new Error('wrong params passed to connect');
    }
    /**
     * @internal
     */
    select(...opOrMapFn) {
        if (!opOrMapFn || opOrMapFn.length === 0) {
            return this.accumulator.state$.pipe(Object(_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["stateful"])());
        }
        else if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isStringArrayGuard"])(opOrMapFn)) {
            return this.accumulator.state$.pipe(Object(_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["stateful"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])(...opOrMapFn)));
        }
        else if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isOperateFnArrayGuard"])(opOrMapFn)) {
            return this.accumulator.state$.pipe(Object(_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["stateful"])(Object(_core__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(opOrMapFn)));
        }
        throw new Error('wrong params passed to select');
    }
    /**
     * @description
     * Manages side-effects of your state. Provide an `Observable<any>` **side-effect** and an optional
     * `sideEffectFunction`.
     * Subscription handling is done automatically.
     *
     * @example
     * // Directly pass an observable side-effect
     * const localStorageEffect$ = changes$.pipe(
     *  tap(changes => storeChanges(changes))
     * );
     * state.hold(localStorageEffect$);
     *
     * // Pass an additional `sideEffectFunction`
     *
     * const localStorageEffectFn = changes => storeChanges(changes);
     * state.hold(changes$, localStorageEffectFn);
     *
     * @param {Observable<S>} obsOrObsWithSideEffect
     * @param {function} [sideEffectFn]
     */
    hold(obsOrObsWithSideEffect, sideEffectFn) {
        if (typeof sideEffectFn === 'function') {
            this.effectObservable.nextEffectObservable(obsOrObsWithSideEffect.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(sideEffectFn)));
            return;
        }
        this.effectObservable.nextEffectObservable(obsOrObsWithSideEffect);
    }
    /**
     * @internal
     */
    subscribe() {
        const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        subscription.add(this.accumulator.subscribe());
        subscription.add(this.effectObservable.subscribe());
        return subscription;
    }
}
RxState.ɵfac = function RxState_Factory(t) { return new (t || RxState)(); };
RxState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RxState, factory: RxState.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RxState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dX53":
/*!***********************************************************!*\
  !*** ./src/app/features/template/unpatch/unpatch.menu.ts ***!
  \***********************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'comparison',
        link: 'comparison'
    },
    {
        label: 'router',
        link: 'routing'
    }
];


/***/ }),

/***/ "dpFa":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/array/remove.ts ***!
  \*********************************************************************************************************/
/*! exports provided: remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");
/* harmony import */ var _internals_valuesComparer_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_internals/valuesComparer.util */ "lBx5");


/**
 * @description
 * Removes one or multiple items from an array T[].
 * For comparison you can provide a key, an array of keys or a custom comparison function that should return true if items match.
 * If no comparison data is provided, an equality check is used by default.
 * Returns a shallow copy of the updated array T[], and does not mutate the original one.
 *
 * @example
 * // Removing value without comparison data
 *
 * const items = [1,2,3,4,5];
 *
 * const updatedItems = remove(items, [1,2,3]);
 *
 * // updatedItems will be: [4,5];
 *
 * @example
 * // Removing values with comparison function
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const nonExistingCreatures = [{id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const realCreatures = remove(creatures, nonExistingCreatures, (a, b) => a.id === b.id);
 *
 * // realCreatures will be: [{id: 1, type: 'cat'}];
 *
 * @example
 * // Removing values with key
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const nonExistingCreatures = [{id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const realCreatures = remove(creatures, nonExistingCreatures, 'id');
 *
 * // realCreatures will be: [{id: 1, type: 'cat'}];
 *
 * @example
 * // Removing values with array of keys
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const nonExistingCreatures = [{id: 2, type: 'unicorn'}, {id: 3, type: 'kobold'}];
 *
 * const realCreatures = remove(creatures, nonExistingCreatures, ['id', 'type']);
 *
 * // realCreatures will be: [{id: 1, type: 'cat'}];
 *
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *
 *    readonly removeCreature$ = new Subject<Creature>();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        'creatures',
 *        this.removeCreature$,
 *        ({ creatures }, creatureToRemove) => {
 *            return remove(creatures, creatureToRemove, (a, b) => a.id === b.id);
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    removeCreature(creatureToRemove: Creature): void {
 *        this.state.set({ creatures: remove(this.state.get().creatures, creatureToRemove, (a, b) => a.id === b.id)});
 *    }
 * }
 *
 * @returns T[]
 *
 * @docsPage remove
 * @docsCategory transformation-helpers
 */
function remove(source, scrap, compare) {
    const scrapAsArray = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(scrap)
        ? Array.isArray(scrap)
            ? scrap
            : [scrap]
        : [];
    const invalidInput = !Array.isArray(source);
    if (invalidInput) {
        console.warn(`Remove: original value (${source}) is not an array`);
        return source;
    }
    return source.filter((existingItem) => {
        return !scrapAsArray.some((item) => Object(_internals_valuesComparer_util__WEBPACK_IMPORTED_MODULE_1__["valuesComparer"])(item, existingItem, compare));
    });
}


/***/ }),

/***/ "ecfW":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: deleteProp, dictionaryToArray, patch, setProp, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteProp */ "VS0U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProp", function() { return _deleteProp__WEBPACK_IMPORTED_MODULE_0__["deleteProp"]; });

/* harmony import */ var _dictionaryToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionaryToArray */ "9Bzv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryToArray", function() { return _dictionaryToArray__WEBPACK_IMPORTED_MODULE_1__["dictionaryToArray"]; });

/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patch */ "D3ey");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _patch__WEBPACK_IMPORTED_MODULE_2__["patch"]; });

/* harmony import */ var _setProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setProp */ "Kuqp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProp", function() { return _setProp__WEBPACK_IMPORTED_MODULE_3__["setProp"]; });

/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle */ "mNnS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_4__["toggle"]; });








/***/ }),

/***/ "eyhw":
/*!****************************************************************!*\
  !*** ./src/app/features/experiments/experiments-shell.menu.ts ***!
  \****************************************************************/
/*! exports provided: EXPERIMENTS_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIMENTS_MENU", function() { return EXPERIMENTS_MENU; });
/* harmony import */ var _state_rx_state_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/rx-state.menu */ "kEB/");
/* harmony import */ var _structural_directives_structural_directives_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structural-directives/structural-directives.menu */ "Qb08");
/* harmony import */ var _differ_differ_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differ/differ.menu */ "2ZK8");



const EXPERIMENTS_MENU = [
    {
        label: 'Differ',
        link: 'differ',
        children: _differ_differ_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"]
    },
    {
        link: 'structural-directives',
        label: 'Structural Directives',
        children: _structural_directives_structural_directives_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"]
    },
    ..._state_rx_state_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEMS"]
];


/***/ }),

/***/ "iSv4":
/*!*********************************************!*\
  !*** ./src/app/shared/environment.token.ts ***!
  \*********************************************/
/*! exports provided: ENVIRONMENT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT_SETTINGS", function() { return ENVIRONMENT_SETTINGS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");

const ENVIRONMENT_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ENVIRONMENT_SETTINGS');


/***/ }),

/***/ "iWfl":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/core/utils/pipe-from-array.ts ***!
  \************************************************************************************************/
/*! exports provided: pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");

function pipeFromArray(fns) {
    if (!fns) {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}


/***/ }),

/***/ "ihGQ":
/*!****************************************************************!*\
  !*** ./src/app/features/performance/performance-shell.menu.ts ***!
  \****************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony import */ var _rx_let_vs_push_rx_let_vs_push_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-let-vs-push/rx-let-vs-push.menu */ "PsR+");
/* harmony import */ var _alphas_compare_alphas_compare_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphas-compare/alphas-compare.menu */ "svjv");


const MENU_ITEMS = [
    ..._rx_let_vs_push_rx_let_vs_push_menu__WEBPACK_IMPORTED_MODULE_0__["RXLET_VS_PUSH_MENU_ITEMS"],
    ..._alphas_compare_alphas_compare_menu__WEBPACK_IMPORTED_MODULE_1__["ALPHAS_COMPARE_MENU_ITEMS"],
    {
        label: 'Nested Component Structure',
        link: 'nested-component-structure'
    },
    {
        label: 'Sibling Component Structure',
        link: 'sibling-component-structure'
    }
];


/***/ }),

/***/ "jjKb":
/*!***********************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/index.ts ***!
  \***********************************************************************/
/*! exports provided: createSideEffectObservable, createAccumulationObservable, RxState, select, stateful, distinctUntilSomeChanged, selectSlice, insert, remove, toDictionary, update, setProp, patch, deleteProp, dictionaryToArray, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "pZ4E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSideEffectObservable", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createSideEffectObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAccumulationObservable", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["createAccumulationObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxState", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["RxState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateful", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["stateful"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilSomeChanged", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["distinctUntilSomeChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSlice", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["selectSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["insert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDictionary", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toDictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["update"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProp", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["setProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["patch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProp", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["deleteProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryToArray", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["dictionaryToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_0__["toggle"]; });




/***/ }),

/***/ "kEB/":
/*!*************************************************************!*\
  !*** ./src/app/features/experiments/state/rx-state.menu.ts ***!
  \*************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        link: 'rx-base-state',
        label: 'State Problems',
        children: [
            {
                link: 'subscription',
                label: 'Subscription',
            },
            {
                link: 'composition',
                label: 'Composition',
            },
            {
                link: 'selections',
                label: 'Selections',
            },
            {
                link: 'connect',
                label: 'Connecting',
            },
            {
                link: 'selectslice',
                label: 'SelectSlice',
            },
        ],
    },
];


/***/ }),

/***/ "lBx5":
/*!***************************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/_internals/valuesComparer.util.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: valuesComparer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuesComparer", function() { return valuesComparer; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

function valuesComparer(original, incoming, compare) {
    const defaultCompare = (a, b) => a === b;
    if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(compare)) {
        return original[compare] === incoming[compare];
    }
    if (Array.isArray(compare)) {
        const sanitizedKeys = compare.filter((k) => Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(k));
        return !!sanitizedKeys.length
            ? sanitizedKeys.every((k) => original[k] === incoming[k])
            : defaultCompare(original, incoming);
    }
    return (compare || defaultCompare)(original, incoming);
}


/***/ }),

/***/ "laiH":
/*!************************************************************!*\
  !*** ./src/app/features/tutorials/tutorials-shell.menu.ts ***!
  \************************************************************/
/*! exports provided: TUTORIALS_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUTORIALS_MENU", function() { return TUTORIALS_MENU; });
/* harmony import */ var _basics_tutorial_basics_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basics/tutorial-basics.menu */ "Lhsp");

const TUTORIALS_MENU = [
    {
        label: 'Basics',
        link: 'basics',
        children: _basics_tutorial_basics_menu__WEBPACK_IMPORTED_MODULE_0__["TUTORIAL_BASICS_MENU"],
    }
];


/***/ }),

/***/ "mNnS":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/object/toggle.ts ***!
  \**********************************************************************************************************/
/*! exports provided: toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Toggles a boolean property in the object.
 * Accepts object of type T and key value of which is boolean.
 * Toggles the property and returns a shallow copy of an object, while not mutating the original one.
 *
 * @example
 *
 * const state = {items: [1,2,3], loading: true};
 *
 * const updatedState = toggle(state, 'loading');
 *
 * // updatedState will be:
 * // {items: [1,2,3], loading: false};
 *
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *    readonly loadingChange$ = new Subject();
 *
 *    constructor(
 *      private state: RxState<ComponentState>
 *    ) {
 *      // Reactive implementation
 *      state.connect(
 *        this.api.loadingChange$,
 *        (state, _) => {
 *            return toggle(state, 'isLoading');
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    toggleLoading(): void {
 *      this.set(toggle(state, 'isLoading'));
 *    }
 * }
 *
 * @returns T
 *
 * @docsPage toggle
 * @docsCategory transformation-helpers
 */
function toggle(object, key) {
    const objectIsObject = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectGuard"])(object);
    const keyIsValid = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isKeyOf"])(key);
    const initialObject = objectIsObject ? object : {};
    if (!objectIsObject) {
        console.warn(`Toggle: original value (${object}) is not an object.`);
    }
    if (!keyIsValid) {
        console.warn(`Toggle: key argument (${key}) is invalid.`);
    }
    if (keyIsValid && typeof initialObject[key] !== 'boolean') {
        console.warn(`Toggle: value of the key (${key}) is not a boolean.`);
    }
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(object) && !keyIsValid) {
        return object;
    }
    if (keyIsValid &&
        (typeof initialObject[key] === 'boolean' ||
            !initialObject.hasOwnProperty(key))) {
        return Object.assign(Object.assign({}, initialObject), { [key]: !initialObject[key] });
    }
    return Object.assign({}, initialObject);
}


/***/ }),

/***/ "mXi9":
/*!***************************************************************!*\
  !*** ./src/app/app-shell/side-nav/side-nav-item.directive.ts ***!
  \***************************************************************/
/*! exports provided: AppShellSideNavItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellSideNavItemDirective", function() { return AppShellSideNavItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class AppShellSideNavItemDirective {
    constructor() {
        this.level = 0;
    }
    get level1() { return this.level === 1; }
    ;
    get level2() { return this.level === 2; }
    ;
    get level3() { return this.level === 3; }
    ;
}
AppShellSideNavItemDirective.ɵfac = function AppShellSideNavItemDirective_Factory(t) { return new (t || AppShellSideNavItemDirective)(); };
AppShellSideNavItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppShellSideNavItemDirective, selectors: [["", "rxaAppShellSideNavItem", ""]], hostAttrs: [1, "app-shell-sidenav-item"], hostVars: 6, hostBindings: function AppShellSideNavItemDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-shell-sidenav-item-level-1", ctx.level1)("app-shell-sidenav-item-level-2", ctx.level2)("app-shell-sidenav-item-level-3", ctx.level3);
    } }, inputs: { level: ["rxaAppShellSideNavItemLevel", "level"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppShellSideNavItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[rxaAppShellSideNavItem]',
                // tslint:disable-next-line:no-host-metadata-property
                host: {
                    class: 'app-shell-sidenav-item',
                },
            }]
    }], function () { return []; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rxaAppShellSideNavItemLevel']
        }], level1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.app-shell-sidenav-item-level-1']
        }], level2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.app-shell-sidenav-item-level-2']
        }], level3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.app-shell-sidenav-item-level-3']
        }] }); })();


/***/ }),

/***/ "mftH":
/*!********************************************!*\
  !*** ./src/app/shared/viewport.service.ts ***!
  \********************************************/
/*! exports provided: Viewport, ViewportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "HOZh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/state */ "jjKb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");






var Viewport;
(function (Viewport) {
    Viewport["mobile"] = "mobile";
    Viewport["tablet"] = "tablet";
    Viewport["desktop"] = "desktop";
})(Viewport || (Viewport = {}));
class ViewportService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.state = new _rx_angular_state__WEBPACK_IMPORTED_MODULE_2__["RxState"]();
        this.viewport$ = this.state.select('viewport');
        this.isMobile$ = this.state.select('isMobile');
        this.isTablet$ = this.state.select('isTablet');
        this.isDesktop$ = this.state.select('isDesktop');
        this.isHandset$ = this.state.select('isHandset');
        const viewport$ = this.breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                return Viewport.mobile;
            }
            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small]) {
                return Viewport.tablet;
            }
            return Viewport.desktop;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.state.connect(viewport$, (oldState, viewportChange) => ({
            viewport: viewportChange,
            isHandset: viewportChange === 'mobile' || viewportChange === 'tablet',
            isMobile: viewportChange === 'mobile',
            isTablet: viewportChange === 'tablet',
            isDesktop: viewportChange === 'desktop',
        }));
    }
    ngOnDestroy() {
        this.state.ngOnDestroy();
    }
}
ViewportService.ɵfac = function ViewportService_Factory(t) { return new (t || ViewportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
ViewportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewportService, factory: ViewportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "nvWR":
/*!*******************************************************************************!*\
  !*** ./src/app/features/fundamentals/render-callback/render-callback.menu.ts ***!
  \*******************************************************************************/
/*! exports provided: RENDERCALLBACK_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDERCALLBACK_MENU", function() { return RENDERCALLBACK_MENU; });
const RENDERCALLBACK_MENU = [
    {
        link: 'render-callback',
        label: 'Render Callback',
        children: [
            // 01. One single-shot observable bound by one push as template expression
            {
                link: 'render-callback-01',
                label: 'Render Callback 01',
            },
            {
                link: 'render-callback-02',
                label: 'Render Callback 02',
            },
            {
                link: 'render-callback-03',
                label: 'Render Callback 03',
            },
            {
                link: 'render-callback-04',
                label: 'Render Callback 04',
            }
        ],
    },
];


/***/ }),

/***/ "pZ4E":
/*!***************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/index.ts ***!
  \***************************************************************************/
/*! exports provided: createSideEffectObservable, createAccumulationObservable, RxState, select, stateful, distinctUntilSomeChanged, selectSlice, insert, remove, toDictionary, update, setProp, patch, deleteProp, dictionaryToArray, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cdk */ "4qyh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSideEffectObservable", function() { return _cdk__WEBPACK_IMPORTED_MODULE_0__["createSideEffectObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAccumulationObservable", function() { return _cdk__WEBPACK_IMPORTED_MODULE_0__["createAccumulationObservable"]; });

/* harmony import */ var _rx_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-state.service */ "c8b2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxState", function() { return _rx_state_service__WEBPACK_IMPORTED_MODULE_1__["RxState"]; });

/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rxjs/operators */ "XKiv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateful", function() { return _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["stateful"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilSomeChanged", function() { return _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilSomeChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSlice", function() { return _rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["selectSlice"]; });

/* harmony import */ var _transformation_helpers_array_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformation-helpers/array/index */ "z8YZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return _transformation_helpers_array_index__WEBPACK_IMPORTED_MODULE_3__["insert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _transformation_helpers_array_index__WEBPACK_IMPORTED_MODULE_3__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDictionary", function() { return _transformation_helpers_array_index__WEBPACK_IMPORTED_MODULE_3__["toDictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _transformation_helpers_array_index__WEBPACK_IMPORTED_MODULE_3__["update"]; });

/* harmony import */ var _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformation-helpers/object/index */ "ecfW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProp", function() { return _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__["setProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__["patch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProp", function() { return _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__["deleteProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryToArray", function() { return _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__["dictionaryToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return _transformation_helpers_object_index__WEBPACK_IMPORTED_MODULE_4__["toggle"]; });








/***/ }),

/***/ "qPt8":
/*!**********************************************************!*\
  !*** ./src/app/features/template/template-shell.menu.ts ***!
  \**********************************************************/
/*! exports provided: TEMPLATE_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_MENU", function() { return TEMPLATE_MENU; });
/* harmony import */ var _push_push_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push/push.menu */ "Woiy");
/* harmony import */ var _rx_let_rx_let_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-let/rx-let.menu */ "9Ogh");
/* harmony import */ var _strategies_strategies_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/strategies.menu */ "+D5W");
/* harmony import */ var _unpatch_unpatch_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpatch/unpatch.menu */ "dX53");
/* harmony import */ var _viewport_prio_viewport_prio_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewport-prio/viewport-prio.menu */ "x9Ih");





const TEMPLATE_MENU = [
    {
        label: 'Strategies',
        link: 'strategies',
        children: _strategies_strategies_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"],
    },
    {
        label: 'Push',
        link: 'push',
        children: _push_push_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEMS"],
    },
    {
        label: '*rxLet',
        link: 'rx-let',
        children: _rx_let_rx_let_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"],
    },
    {
        label: 'Unpatch',
        link: 'unpatch',
        children: _unpatch_unpatch_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"],
    },
    {
        label: 'ViewPort Prio',
        link: 'view-port-prio',
        children: _viewport_prio_viewport_prio_menu__WEBPACK_IMPORTED_MODULE_4__["MENU_ITEMS"],
    }
];


/***/ }),

/***/ "qXHn":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/array/insert.ts ***!
  \*********************************************************************************************************/
/*! exports provided: insert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "XH7V");

/**
 * @description
 * Inserts one or multiple items to an array T[].
 * Returns a shallow copy of the updated array T[], and does not mutate the original one.
 *
 * @example
 * // Inserting single value
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}];
 *
 * const updatedCreatures = insert(creatures, {id: 3, type: 'parrot'});
 *
 * // updatedCreatures will be:
 * //  [{id: 1, type: 'cat'}, {id: 2, type: 'dog}, {id: 3, type: 'parrot}];
 *
 * @example
 * // Inserting multiple values
 *
 * const creatures = [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}];
 *
 * const updatedCreatures = insert(creatures, [{id: 3, type: 'parrot'}, {id: 4, type: 'hamster'}]);
 *
 * // updatedCreatures will be:
 * // [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}, {id: 3, type: 'parrot'}, {id: 4, type: 'hamster'}];
 *
 * @example
 * // Usage with RxState
 *
 * export class ListComponent {
 *
 *    readonly insertCreature$ = new Subject<void>();
 *
 *    constructor(private state: RxState<ComponentState>) {
 *      // Reactive implementation
 *      state.connect(
 *        'creatures',
 *        this.insertCreature$,
 *        ({ creatures }) => {
 *            const creatureToAdd = {id: generateId(), name: 'newCreature', type: 'dinosaur' };
 *            return insert(creatures, creatureToAdd);
 *        }
 *      );
 *    }
 *
 *    // Imperative implementation
 *    insertCeature(): void {
 *        const creatureToAdd = {id: generateId(), name: 'newCreature', type: 'dinosaur' };
 *        this.state.set({ creatures: insert(this.state.get().creatures, creatureToAdd)});
 *    }
 * }
 *
 *
 * @returns T[]
 *
 * @docsPage insert
 * @docsCategory transformation-helpers
 */
function insert(source, updates) {
    const updatesDefined = Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(updates);
    const sourceIsArray = Array.isArray(source);
    const invalidInput = !sourceIsArray && !updatesDefined;
    if (!sourceIsArray && Object(_core__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(source)) {
        console.warn(`Insert: Original value (${source}) is not an array.`);
    }
    if (invalidInput) {
        return source;
    }
    return [
        ...(sourceIsArray ? source : []),
        ...(updatesDefined ? (Array.isArray(updates) ? updates : [updates]) : [])
    ];
}


/***/ }),

/***/ "sjst":
/*!************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rxjs/operators/selectSlice.ts ***!
  \************************************************************************************************/
/*! exports provided: selectSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSlice", function() { return selectSlice; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _distinctUntilSomeChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distinctUntilSomeChanged */ "tard");


/**
 * @description
 *
 * Returns an Observable that emits only the provided `keys` emitted by the source Observable. Each key will get
 * filtered to only emit _defined_ values as well as checked for distinct emissions.
 * Comparison will be done for each set key in the `keys` array.
 *
 * `selectSlice` will only emit _valid_ selections. A selection is _valid_ if every
 * selected key exists and is defined in the source Observable. This ensures that the `selectSlice`
 * operator will always return a complete slice with all values defined.
 *
 * You can fine grain your distinct checks by providing a `KeyCompareMap` with those keys you want to compute
 * explicitly different
 *
 * @example
 *
 * // An example with a custom comparison applied to each key
 * import { of } from 'rxjs';
 * import { selectSlice } from 'rx-angular/state';
 *
 *
 * const state$: Observable<MyState> = of(
 *  { title: 'myTitle', panelOpen: true},
 *  { title: 'myTitle2', panelOpen: true},
 *  { title: 'newTitle', panelOpen: true},
 *  { title: 'newTitle', panelOpen: false}
 * )
 * .pipe(
 *     selectSlice(['title', 'panelOpen']),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * //  { title: 'myTitle', panelOpen: true },
 * //  { title: 'myTitle2', panelOpen: true },
 * //  { title: 'newTitle', panelOpen: true },
 * //  { title: 'newTitle', panelOpen: false }
 *
 * @example
 *
 * import { of, Observable } from 'rxjs';
 * import { tap } from 'rxjs/operators';
 * import { selectSlice } from 'rx-angular/state';
 *
 * interface MyState {
 *    title: string;
 *    items: string[];
 *    panelOpen: boolean;
 * }
 * // Select items and title.
 * // apply custom compare logic for the items array
 * const customComparison: KeyCompareMap<MyState> = {
 *   items: (oldItems, newItems) => compareItems(oldItems, newItems)
 * };
 * const state$: Observable<MyState> = of(
 * { title: 'myTitle', items: ['foo', 'bar'], panelOpen: true },
 * { title: 'myTitle', items: ['foo', 'bar'], panelOpen: false },
 * { title: 'nextTitle', items: ['foo', 'baR'], panelOpen: true },
 * { title: 'nextTitle', items: ['fooRz', 'boo'], panelOpen: false },
 * );
 * const slice$ = state$.pipe(selectSlice(['title', 'items'], customComparison), tap(console.log)).subscribe();
 *
 * // displays:
 * // { title: 'myTitle', items: ['foo', 'bar'] }
 * // { title: 'nextTitle', items: ['foo', 'baR'] }
 * // { title: 'nextTitle', items: ['fooRz', 'boo'] }
 *
 * @param {(K)[]} keys - the array of keys which should be selected
 * @param {KeyCompareMap<{ [P in K]: T[P] }>} [keyCompareMap] Optional KeyCompareMap to provide custom compare logic
 * for some the keys
 * @docsPage selectSlice
 * @docsCategory operators
 */
function selectSlice(keys, keyCompareMap) {
    return (o$) => o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((state) => state !== undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((state) => {
        // forward null
        if (state === null) {
            return null;
        }
        // an array of all keys which exist and are _defined_ in the state object
        const definedKeys = keys
            // filter out undefined properties e. g. {}, { str: undefined }
            .filter((k) => state.hasOwnProperty(k) && state[k] !== undefined);
        // we want to ensure to only emit _valid_ selections
        // a selection is _valid_ if every selected key exists and has a value:
        // {} => selectSlice(['foo']) => no emission
        // {str: 'test'} => selectSlice([]) => no emission
        // {str: 'test'} => selectSlice(['notPresent']) => no emission
        // {str: 'test'} => state.select(selectSlice([])) => no emission
        // {str: 'test'} => state.select(selectSlice(['notPresent'])) => no emission
        // {str: undefined} => state.select(selectSlice(['str'])) => no emission
        // {str: 'test', foo: undefined } => state.select(selectSlice(['foo'])) => no emission
        if (definedKeys.length < keys.length) {
            return undefined;
        }
        // create the selected slice
        return definedKeys
            .reduce((vm, key) => {
            vm[key] = state[key];
            return vm;
        }, {});
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((v) => v !== undefined), Object(_distinctUntilSomeChanged__WEBPACK_IMPORTED_MODULE_1__["distinctUntilSomeChanged"])(keys, keyCompareMap));
}


/***/ }),

/***/ "suy2":
/*!***********************************************!*\
  !*** ./src/app/app-shell/app-shell.models.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "svjv":
/*!****************************************************************************!*\
  !*** ./src/app/features/performance/alphas-compare/alphas-compare.menu.ts ***!
  \****************************************************************************/
/*! exports provided: ALPHAS_COMPARE_MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHAS_COMPARE_MENU_ITEMS", function() { return ALPHAS_COMPARE_MENU_ITEMS; });
const ALPHAS_COMPARE_MENU_ITEMS = [
    {
        link: 'alphas-compare',
        label: 'Alpha 0 vs Alpha 1',
        children: [
            {
                link: 'list-toggle',
                label: 'List toggle',
            },
        ],
    },
];


/***/ }),

/***/ "tW7N":
/*!*********************************************!*\
  !*** ./src/app/app-component/app.routes.ts ***!
  \*********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/home/home.component */ "0HvM");

const ROUTES = [
    {
        path: '',
        component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'fundamentals',
        loadChildren: () => __webpack_require__.e(/*! import() | features-fundamentals-fundamentals-module */ "features-fundamentals-fundamentals-module").then(__webpack_require__.bind(null, /*! ../features/fundamentals/fundamentals.module */ "dDYt")).then((m) => m.FundamentalsModule)
    },
    {
        path: 'template',
        loadChildren: () => __webpack_require__.e(/*! import() | features-template-template-shell-module */ "features-template-template-shell-module").then(__webpack_require__.bind(null, /*! ../features/template/template-shell.module */ "8aaI")).then((m) => m.TemplateShellModule)
    },
    {
        path: 'tutorials',
        loadChildren: () => __webpack_require__.e(/*! import() | features-tutorials-tutorials-shell-module */ "features-tutorials-tutorials-shell-module").then(__webpack_require__.bind(null, /*! ../features/tutorials/tutorials-shell.module */ "mk2T")).then((m) => m.TutorialsShellModule)
    },
    {
        path: 'integrations',
        loadChildren: () => __webpack_require__.e(/*! import() | features-integrations-integrations-shell-module */ "features-integrations-integrations-shell-module").then(__webpack_require__.bind(null, /*! ../features/integrations/integrations-shell.module */ "vma7")).then((m) => m.IntegrationsShellModule)
    },
    {
        path: 'experiments',
        loadChildren: () => __webpack_require__.e(/*! import() | features-experiments-experiments-shell-module */ "features-experiments-experiments-shell-module").then(__webpack_require__.bind(null, /*! ../features/experiments/experiments-shell.module */ "ZoVp")).then((m) => m.ExperimentsShellModule)
    },
    {
        path: 'performance',
        loadChildren: () => __webpack_require__.e(/*! import() | features-performance-performance-shell-module */ "features-performance-performance-shell-module").then(__webpack_require__.bind(null, /*! ../features/performance/performance-shell.module */ "1nMJ")).then((m) => m.PerformanceShellModule)
    }
];


/***/ }),

/***/ "tard":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rxjs/operators/distinctUntilSomeChanged.ts ***!
  \*************************************************************************************************************/
/*! exports provided: distinctUntilSomeChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilSomeChanged", function() { return distinctUntilSomeChanged; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_utils_safe_pluck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/safe-pluck */ "Ga/7");


/**
 * @internal
 */
function defaultCompare(oldVal, newVal) {
    return oldVal === newVal;
}
/**
 * @description
 *
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from
 * the previous item. Comparison will be done for each set key in the `keys` array.
 *
 * You can fine grain your distinct checks by providing a `KeyCompareMap` with those keys you want to compute
 * explicitly different
 *
 * The name `distinctUntilSomeChanged` was picked since it internally iterates over the `keys` and utilizes the
 * [some](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method in order to
 * compute if values are distinct or not.
 *
 * @example
 *
 * import { of } from 'rxjs';
 * import { distinctUntilSomeChanged } from 'rx-angular/state';
 *
 * interface Person {
 *    age: number;
 *    name: string;
 * }
 *
 * of(
 *   { age: 4, name: 'Hans'},
 *   { age: 7, name: 'Sophie'},
 *   { age: 5, name: 'Han Solo'},
 *   { age: 5, name: 'HanSophie'},
 * ).pipe(
 *   distinctUntilSomeChanged(['age', 'name']),
 * )
 * .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Hans'}
 * // { age: 7, name: 'Sophie'}
 * // { age: 5, name: 'Han Solo'}
 * // { age: 5, name: 'HanSophie'}
 *
 * @example
 * // An example with `KeyCompareMap`
 * import { of } from 'rxjs';
 * import { distinctUntilSomeChanged } from 'rxjs/operators';
 *
 * interface Person {
 *     age: number;
 *     name: string;
 *  }
 * const customComparison: KeyCompareMap<Person> = {
 *   name: (oldName, newName) => oldName.substring(0, 2) === newName.substring(0, 2)
 * };
 *
 * of(
 *     { age: 4, name: 'Hans'},
 *     { age: 7, name: 'Sophie'},
 *     { age: 5, name: 'Han Solo'},
 *     { age: 5, name: 'HanSophie'},
 *   ).pipe(
 *     distinctUntilSomeChanged(['age', 'name'], customComparison),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Hans' }
 * // { age: 7, name: 'Sophie' }
 * // { age: 5, name: 'Han Solo' }
 *
 * @param {K[]} keys String key for object property lookup on each item.
 * @param {KeyCompareMap<T>} [compare] Optional KeyCompareMap to explicitly define comparisons for some of the keys
 * @docsPage distinctUntilSomeChanged
 * @docsCategory operators
 */
function distinctUntilSomeChanged(keys, keyCompareMap) {
    // default compare function applying === to every key
    let distinctCompare = (oldState, newState) => keys.some((key) => !defaultCompare(Object(_core_utils_safe_pluck__WEBPACK_IMPORTED_MODULE_1__["safePluck"])(oldState, [key]), Object(_core_utils_safe_pluck__WEBPACK_IMPORTED_MODULE_1__["safePluck"])(newState, [key])));
    // generate compare function respecting every case of provided keyCompareMap
    if (keyCompareMap !== undefined) {
        const compare = (key) => {
            return keyCompareMap.hasOwnProperty(key) &&
                keyCompareMap[key] !== undefined
                ? keyCompareMap[key]
                : defaultCompare;
        };
        distinctCompare = (oldState, newState) => {
            return keys.some((key) => !compare(key)(Object(_core_utils_safe_pluck__WEBPACK_IMPORTED_MODULE_1__["safePluck"])(oldState, [key]), Object(_core_utils_safe_pluck__WEBPACK_IMPORTED_MODULE_1__["safePluck"])(newState, [key])));
        };
    }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])((oldV, newV) => !distinctCompare(oldV, newV));
}


/***/ }),

/***/ "wf/3":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/rxjs/operators/stateful.ts ***!
  \*********************************************************************************************/
/*! exports provided: stateful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateful", function() { return stateful; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils */ "wwob");


/**
 * @description
 *
 * As it acts like the Observables `pipe` method, it accepts one or many RxJS operators as params.
 *
 * @example
 * import { Observable } from 'rxjs';
 * import { map } from 'rxjs/operators';
 * import { stateful } from 'rx-angular/state';
 *
 * const state$: Observable<{ name: string; items: string[] }>;
 * const derivation$ = state$.pipe(
 *   stateful(
 *     map(state => state.list.length),
 *     filter(length => length > 3)
 *   )
 * );
 *
 * @param {OperatorFunction<T, A>} op - one or multiple passed operator comma separated
 *
 * @docsPage stateful
 * @docsCategory operators
 */
function stateful(...optionalDerive) {
    return (s) => {
        return s.pipe(
        // distinct same base-state objects (e.g. a default emission of default switch cases, incorrect mutable handling
        // of data) @TODO evaluate benefits vs. overhead
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
        // CUSTOM LOGIC HERE
        (o) => {
            if (Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["isOperateFnArrayGuard"])(optionalDerive)) {
                return o.pipe(Object(_core_utils__WEBPACK_IMPORTED_MODULE_1__["pipeFromArray"])(optionalDerive));
            }
            return o;
        }, 
        // initial emissions, undefined is no base-state, pollution with skip(1)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((v) => v !== undefined), 
        // distinct same derivation value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
        // reuse custom operations result for multiple subscribers and reemit the last calculated value.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])({ bufferSize: 1, refCount: true }));
    };
}


/***/ }),

/***/ "wwob":
/*!**************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/core/utils/index.ts ***!
  \**************************************************************************************/
/*! exports provided: pipeFromArray, isIterableGuard, isOperateFnArrayGuard, isPromiseGuard, isStringArrayGuard, isKeyOf, isObjectGuard, isDefined, safePluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pipe_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe-from-array */ "iWfl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return _pipe_from_array__WEBPACK_IMPORTED_MODULE_0__["pipeFromArray"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ "KvDW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterableGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isIterableGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOperateFnArrayGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isOperateFnArrayGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiseGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isPromiseGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStringArrayGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isStringArrayGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isKeyOf", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isKeyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isObjectGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony import */ var _safe_pluck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-pluck */ "Ga/7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safePluck", function() { return _safe_pluck__WEBPACK_IMPORTED_MODULE_2__["safePluck"]; });






/***/ }),

/***/ "x9Ih":
/*!***********************************************************************!*\
  !*** ./src/app/features/template/viewport-prio/viewport-prio.menu.ts ***!
  \***********************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        label: 'Basic Example',
        link: 'basic-example'
    }
];


/***/ }),

/***/ "z8YZ":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/transformation-helpers/array/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: insert, remove, toDictionary, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert */ "qXHn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return _insert__WEBPACK_IMPORTED_MODULE_0__["insert"]; });

/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "dpFa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _remove__WEBPACK_IMPORTED_MODULE_1__["remove"]; });

/* harmony import */ var _toDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDictionary */ "3M2+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDictionary", function() { return _toDictionary__WEBPACK_IMPORTED_MODULE_2__["toDictionary"]; });

/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "Cst3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update__WEBPACK_IMPORTED_MODULE_3__["update"]; });







/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const compilerOptions = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].zoneless ? { ngZone: "noop" } : undefined;
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], compilerOptions)
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpjV":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/rx-angular/rx-angular/libs/state/src/lib/cdk/accumulation-observable.ts ***!
  \*************************************************************************************************/
/*! exports provided: createAccumulationObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccumulationObservable", function() { return createAccumulationObservable; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");


const defaultAccumulator = (st, sl) => {
    return Object.assign(Object.assign({}, st), sl);
};
function createAccumulationObservable(stateObservables = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](), stateSlices = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](), accumulatorObservable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](defaultAccumulator)) {
    const signal$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(stateObservables.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"])), stateSlices.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(accumulatorObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])((state, [slice, stateAccumulator]) => stateAccumulator(state, slice), {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((newState) => (compositionObservable.state = newState), (error) => console.error(error)), 
    // @Notice We catch the error here as it get lost in between `publish` and `publishReplay`. We return empty to
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((e) => rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publish"])());
    const state$ = signal$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["publishReplay"])(1));
    const compositionObservable = {
        state: {},
        signal$,
        state$,
        nextSlice,
        nextSliceObservable,
        nextAccumulator,
        subscribe
    };
    // ======
    return compositionObservable;
    // ======
    function nextAccumulator(accumulatorFn) {
        accumulatorObservable.next(accumulatorFn);
    }
    function nextSlice(stateSlice) {
        stateSlices.next(stateSlice);
    }
    function nextSliceObservable(stateObservable) {
        stateObservables.next(stateObservable);
    }
    function subscribe() {
        const sub = compositionObservable.signal$.connect();
        sub.add(compositionObservable.state$.connect());
        sub.add(() => {
            accumulatorObservable.complete();
            stateObservables.complete();
            stateSlices.complete();
        });
        return sub;
    }
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map