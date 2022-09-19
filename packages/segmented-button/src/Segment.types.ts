import type { ComponentProps } from 'svelte';
import type Component from './Segment.svelte';

export declare class SegmentComponentDev extends Component {
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
    ComponentProps<Component>;
}

export interface SMUISegmentedButtonSegmentAccessor {
  segmentId: any;
  selected: boolean;
}
