import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './FloatingLabel.svelte';

export declare class FloatingLabelComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Partial<
    svelte.JSX.HTMLAttributes<HTMLSpanElement & HTMLLabelElement>
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}

export interface SMUIFloatingLabelAccessor {
  readonly element: HTMLSpanElement | HTMLLabelElement;
  addStyle(name: string, value: string): void;
  removeStyle(name: string): void;
}
