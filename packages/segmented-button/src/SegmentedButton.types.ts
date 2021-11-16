import type Component from './SegmentedButton.svelte';

export declare class SegmentedButtonComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'segments' | 'key' | 'singleSelect' | 'selected'
  > &
    Component['$$prop_def'];
}
