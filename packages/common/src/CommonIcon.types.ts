import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './CommonIcon.svelte';
import type { IComponentDev } from './elements/I.types.js';

export declare class CommonIconComponentDev<
  C extends SvelteComponentDev = IComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'on' | 'component'
  > &
    Component['$$prop_def'];
}
