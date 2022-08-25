import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Textarea.svelte';

export declare class TextareaComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLTextAreaElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'value'
    | 'dirty'
    | 'invalid'
    | 'updateInvalid'
    | 'resizable'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
