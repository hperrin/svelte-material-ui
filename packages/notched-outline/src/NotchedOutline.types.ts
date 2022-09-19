import type { ComponentProps } from 'svelte';
import type Component from './NotchedOutline.svelte';

export declare class NotchedOutlineComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'notched' | 'noLabel'
  > &
    ComponentProps<Component>;
}
