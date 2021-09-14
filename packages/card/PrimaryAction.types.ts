import type Component from './PrimaryAction.svelte';

export declare class PrimaryActionComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'style' | 'ripple' | 'color' | 'padded' | 'tabindex'
  > &
    Component['$$prop_def'];
}
