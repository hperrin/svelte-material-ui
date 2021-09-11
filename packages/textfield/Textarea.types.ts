import type Component from './Textarea.svelte';

type ElementAttributes = svelte.JSX.HTMLProps<HTMLTextAreaElement>;

export declare class TextareaComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: {
    [k in keyof ElementAttributes]?: ElementAttributes[k];
  } &
    Component['$$prop_def'];
}
