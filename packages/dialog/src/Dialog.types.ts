import type Component from './Dialog.svelte';

export declare class DialogComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'open'
    | 'selection'
    | 'escapeKeyAction'
    | 'scrimClickAction'
    | 'autoStackButtons'
    | 'fullscreen'
  > &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `container\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `surface\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    Component['$$prop_def'];
}
