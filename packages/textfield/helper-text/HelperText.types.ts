import type Component from './HelperText.svelte';

export declare class HelperTextComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'id' | 'persistent' | 'validationMsg'
  > &
    Component['$$prop_def'];
}
