import type { SmuiComponentDev } from '@smui/common';
import type Component from './Segment.svelte';

export declare class SegmentComponentDev
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLButtonElement>>,
    'use' | 'class' | 'style' | 'segment' | 'ripple' | 'touch' | 'selected'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}

export interface SMUISegmentedButtonSegmentAccessor {
  segmentId: any;
  selected: boolean;
}
