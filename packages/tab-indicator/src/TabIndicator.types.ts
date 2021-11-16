import type Component from './TabIndicator.svelte';

export declare class TabIndicatorComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    'use' | 'class' | 'active' | 'type' | 'transition'
  > &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      > as `content\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      >[k];
    } &
    Component['$$prop_def'];
}
