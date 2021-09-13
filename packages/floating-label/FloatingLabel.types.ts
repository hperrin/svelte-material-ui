import type Component from './FloatingLabel.svelte';

export declare class FloatingLabelComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Partial<
    svelte.JSX.HTMLAttributes<HTMLSpanElement & HTMLLabelElement>
  > &
    Component['$$prop_def'];
}

export interface SMUIFloatingLabelAccessor {
  readonly element: HTMLSpanElement | HTMLLabelElement;
  addStyle(name: string, value: string): void;
  removeStyle(name: string): void;
}
