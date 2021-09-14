import type { TabScrollerComponentDev } from '@smui/tab-scroller';
import type Component from './TabBar.svelte';

export declare class TabBarComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'tabs'
    | 'key'
    | 'focusOnActivate'
    | 'focusOnProgrammatic'
    | 'useAutomaticActivation'
    | 'active'
  > &
    {
      [k in keyof TabScrollerComponentDev['$$prop_def'] as `tabScroller\$${k}`]?: TabScrollerComponentDev['$$prop_def'][k];
    } &
    Component['$$prop_def'];
}
