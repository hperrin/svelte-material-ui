import type { SMUIComponent } from '@smui/common';
import type Component from './Scrim.svelte';
import type { DivComponentDev as DivElementComponentDev } from '@smui/common/elements/index.js';

export declare class ScrimComponentDev<
  C extends SMUIComponent = DivElementComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'fixed' | 'component'
  > &
    Component['$$prop_def'];
}
