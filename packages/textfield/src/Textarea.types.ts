import type { SmuiComponentDev } from '@smui/common';
import type Component from './Textarea.svelte';

export declare class TextareaComponentDev
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
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
