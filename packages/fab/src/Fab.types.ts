import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './Fab.svelte';
import type { ButtonComponentDev as ButtonElementComponentDev } from '@smui/common/elements';

export declare class FabComponentDev<
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
    | 'mini'
    | 'exited'
    | 'extended'
    | 'touch'
    | 'href'
    | 'component'
  > &
    Component['$$prop_def'];
}
