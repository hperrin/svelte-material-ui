import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './SelectionGroup.svelte';

export declare class SelectionGroupComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLLIElement>>, 'use'> & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLUListElement>
    > as `list\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLUListElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
