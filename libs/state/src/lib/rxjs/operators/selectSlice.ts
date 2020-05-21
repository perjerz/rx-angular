import { Observable, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CompareFn, KeyCompareMap } from '../interfaces';
import { distinctUntilSomeChanged } from './distinctUntilSomeChanged';

function safePluck<T extends object>(key: keyof T) {
  return (val: T) => (val !== undefined && val !== null ? val[key] : undefined);
}

/**
 * @description
 *
 * Returns an Observable that emits a distinct subset of the received object.
 * You can provide a custom comparison for each key individually by setting a `KeyCompareMap<T>`.
 * If no comparison is provided for a specified key, an equality check is used by default.
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
 *
 * // Select title and panelOpen.
 * // compare the first letters of the `title` property and use the default comparison for `panelOpen`
 * const customComparison: KeyCompareMap<MyState> = {
 *   title: (oldTitle, newTitle) => oldTitle.substring(0, 3) === newTitle.substring(0, 3),
 *   panelOpen: undefined
 * };
 *
 * const state$: Observable<MyState> = of(
 *  { title: 'myTitle', items: ['foo', 'bar'],  panelOpen: true},
 *  { title: 'myTitle2', items: ['foo', 'bar'],  panelOpen: true},
 *  { title: 'newTitle', items: ['foo', 'bar'],  panelOpen: true},
 *  { title: 'newTitle', items: ['foo', 'bar'],  panelOpen: false}
 * );
 * const viewModel$ = state$.pipe(
 *  selectSlice(customComparison),
 *  tap(console.log)
 * ).subscribe();
 *
 * // displays:
 * // { panelOpen: true, title: 'myTitle' }
 * // { panelOpen: true, title: 'newTitle' }
 * // { panelOpen: false, title: 'newTitle' }
 *
 * @param {KeyCompareMap<T>} keyCompareMap* @docsPage selectSlice
 * @docsCategory operators
 * @docsPage selectSlice
 * @docsCategory operators
 */
export function selectSlice<T extends object, K extends keyof T, R>(
  keyCompareMap: KeyCompareMap<T>
): OperatorFunction<T, R>;

/**
 * @description
 *
 * Returns an Observable that emits only the provided `keys` emitted by the source Observable. Each key will get
 * filtered to only emit _defined_ values as well as checked for distinct emissions.
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
 * const state$: Observable<MyState> = of({
 *   title: 'myTitle',
 *   items: ['foo', 'bar'],
 *   panelOpen: true
 * });
 * const slice$ = state$.pipe(selectSlice(['items', 'panelOpen'])).pipe(tap(console.log)).subscribe();
 *
 * // displays:
 * // { items: ['foo', 'bar'], panelOpen: true }
 *
 * * @example
 * // An example with a custom comparison applied to each key
 * import { of } from 'rxjs';
 * import { selectSlices } from 'rxjs/operators';
 * import { isDeepEqual } from 'custom/is-equal';
 *
 * interface Person {
 *     age: number;
 *     name: string;
 *  }
 *
 *  const customCompare = (oldVal, newVal) => isDeepEqual(oldVal, newVal);
 *
 * const state$: Observable<MyState> = of(
 *  { title: 'myTitle', items: ['foo'],  panelOpen: true},
 *  { title: 'myTitle2', items: ['foo', 'bar'],  panelOpen: true},
 *  { title: 'newTitle', items: ['foo', 'baz'],  panelOpen: true},
 *  { title: 'newTitle', items: ['foo', 'baz'],  panelOpen: true}
 * )
 * .pipe(
 *     selectSlices(['title', 'items'], customCompare),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * //  { title: 'myTitle', items: ['foo'],  panelOpen: true},
 * //  { title: 'myTitle2', items: ['foo', 'bar'],  panelOpen: true},
 * //  { title: 'myTitle2', items: ['foo', 'baz'],  panelOpen: true},
 *
 * @param {(K)[]} keys - the array of keys which should be selected
 * @param {CompareFn<T[K]>} [compare] Optional comparison function called to test if an item is distinct from the
 * @docsPage selectSlice
 * @docsCategory operators
 */
export function selectSlice<T extends object, K extends keyof T, R>(
  keys: K[],
  compare?: CompareFn<T[K]>
): OperatorFunction<T, R>;
/**
 * @internal
 */
export function selectSlice<T extends object, K extends keyof T, R>(
  keysOrMap: K[] | KeyCompareMap<T>,
  compare?: CompareFn<T[K]>
): OperatorFunction<T, Partial<T>> {
  const keys = Array.isArray(keysOrMap)
    ? keysOrMap
    : (Object.keys(keysOrMap) as K[]);
  const distinctOperator = Array.isArray(keysOrMap)
    ? distinctUntilSomeChanged(keysOrMap, compare)
    : distinctUntilSomeChanged(keysOrMap);

  return (o$: Observable<T>): Observable<Partial<T>> =>
    o$.pipe(
      // to avoid emissions of empty objects map to present values and filter out emissions with no values present
      map(state => ({
        definedKeys: keys.filter(
          k => state.hasOwnProperty(k) && state[k] !== undefined
        ),
        state
      })),
      filter(({ definedKeys, state }) => !!definedKeys.length),
      // create view-model
      map(({ definedKeys, state }) =>
        definedKeys
          .filter(k => state.hasOwnProperty(k) && state[k] !== undefined)
          .reduce((vm, key) => {
            vm[key] = state[key];
            return vm;
          }, {} as Partial<T>)
      ),
      // forward distinct values
      distinctOperator
    );
}
