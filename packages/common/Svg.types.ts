import type { SMUIComponent } from './smui.d';
import type Component from './Svg.svelte';

export declare class SvgComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<SVGSVGElement>>, 'use'> &
    Component['$$prop_def'];
}
