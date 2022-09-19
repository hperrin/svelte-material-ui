import type { ComponentProps } from 'svelte';
import type Component from './Media.svelte';

export declare class MediaComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'aspectRatio'
  > &
    ComponentProps<Component>;
}
