import type Component from './Text.svelte';

export declare class TextComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    'use' | 'class' | 'tabindex'
  > &
    Component['$$prop_def'];
}

export interface SMUIChipsPrimaryActionAccessor {
  focus(): void;
  addAttr(name: string, value: string): void;
}
