import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, SmuiElementComponentDev } from '@smui/common';
import type { TabIndicatorComponentDev } from '@smui/tab-indicator';
import type Component from './Tab.svelte';

export declare class TabComponentDev<
  T extends string = 'button',
  C extends ComponentType<SmuiComponent> = ComponentType<
    SmuiElementComponentDev<T>
  >
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<
      svelte.JSX.HTMLAttributes<ReturnType<InstanceType<C>['getElement']>>
    >,
    | 'use'
    | 'class'
    | 'style'
    | 'tab'
    | 'ripple'
    | 'stacked'
    | 'minWidth'
    | 'indicatorSpanOnlyContent'
    | 'href'
    | 'component'
    | 'tag'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLSpanElement>
    > as `content\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLSpanElement>
    >[k];
  } & {
    [k in keyof TabIndicatorComponentDev['$$prop_def'] as `tabIndicator\$${k}`]?: TabIndicatorComponentDev['$$prop_def'][k];
  } & ComponentProps<Component>;
}

import type { MDCTabDimensions } from '@material/tab';

export interface SMUITabAccessor {
  tabId: any;
  readonly element: HTMLElement;
  readonly active: boolean;
  forceAccessible(accessible: boolean): void;
  computeIndicatorClientRect(): DOMRect;
  computeDimensions(): MDCTabDimensions;
  focus(): void;
  activate(
    previousIndicatorClientRect: DOMRect | undefined,
    skipFocus: boolean
  ): void;
  deactivate(): void;
}
