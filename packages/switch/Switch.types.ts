import type Component from './Switch.svelte';

export declare class SwitchComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLButtonElement>>,
    | 'use'
    | 'class'
    | 'disabled'
    | 'color'
    | 'group'
    | 'checked'
    | 'value'
    | 'processing'
    | 'icons'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `icons\$${k}`]?: Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>[k];
  } & Component['$$prop_def'];
}
