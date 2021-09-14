import type Component from './Cell.svelte';

export declare class CellComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'align' | 'order' | 'span' | 'spanDevices'
  > &
    Component['$$prop_def'];
}
