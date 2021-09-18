import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './Separator.svelte';
import type { LiComponentDev as LiElementComponentDev } from '@smui/common/elements/index.js';

export declare class SeparatorComponentDev<
  C extends SvelteComponentDev = LiElementComponentDev
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
    | 'padded'
    | 'inset'
    | 'insetLeading'
    | 'insetTrailing'
    | 'insetPadding'
    | 'component'
  > &
    Component['$$prop_def'];
}
