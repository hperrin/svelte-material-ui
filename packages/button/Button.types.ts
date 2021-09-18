import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './Button.svelte';
import type { ButtonComponentDev as ButtonElementComponentDev } from '@smui/common/elements/index.js';

export declare class ButtonComponentDev<
  C extends SvelteComponentDev = ButtonElementComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    | 'use'
    | 'class'
    | 'style'
    | 'ripple'
    | 'color'
    | 'variant'
    | 'touch'
    | 'href'
    | 'action'
    | 'defaultAction'
    | 'secondary'
    | 'component'
  > &
    Component['$$prop_def'];
}
