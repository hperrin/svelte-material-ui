import type Component from './Textarea.svelte';

export declare class TextareaComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLTextAreaElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
