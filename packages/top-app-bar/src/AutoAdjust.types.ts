import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './AutoAdjust.svelte';
import type { MainComponentDev as MainElementComponentDev } from '@smui/common/elements';

export declare class AutoAdjustComponentDev<
  C extends SvelteComponentDev = MainElementComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'topAppBar' | 'component'
  > &
    Component['$$prop_def'];
}
