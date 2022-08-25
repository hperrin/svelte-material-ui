import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Dialog.svelte';

export declare class DialogComponentDev
  extends Component
  implements SmuiComponent
{
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
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `container\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `surface\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
