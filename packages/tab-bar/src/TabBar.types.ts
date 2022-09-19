import type { ComponentProps } from 'svelte';
import type { TabScrollerComponentDev } from '@smui/tab-scroller';
import type Component from './TabBar.svelte';

export declare class TabBarComponentDev<
  T extends Object | string | number
> extends Component<T> {
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
  > & {
    [k in keyof TabScrollerComponentDev['$$prop_def'] as `tabScroller\$${k}`]?: TabScrollerComponentDev['$$prop_def'][k];
  } & ComponentProps<Component<T>>;
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$events_def: Component<T>['$$events_def'];
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$slot_def: Component<T>['$$slot_def'];
}
