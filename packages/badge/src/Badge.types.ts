import type Component from './Badge.svelte';

export declare class BadgeComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    'use' | 'class' | 'square' | 'color' | 'position' | 'align'
  > &
    Component['$$prop_def'];
}
