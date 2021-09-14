import type Component from './Input.svelte';

export declare class InputComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLInputElement>>,
    | 'use'
    | 'class'
    | 'type'
    | 'placeholder'
    | 'value'
    | 'files'
    | 'dirty'
    | 'invalid'
    | 'updateInvalid'
    | 'emptyValueNull'
    | 'emptyValueUndefined'
  > &
    Component['$$prop_def'];
}
