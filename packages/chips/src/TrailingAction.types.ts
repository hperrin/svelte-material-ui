import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './TrailingAction.svelte';

export declare class TrailingActionComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLButtonElement>>,
    'use' | 'class' | 'style' | 'ripple' | 'touch' | 'nonNavigable'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLSpanElement>
    > as `icon\$${k}`]?: Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}

export interface SMUIChipsTrailingActionAccessor {
  isNavigable(): boolean;
  focus(): void;
  removeFocus(): void;
}
