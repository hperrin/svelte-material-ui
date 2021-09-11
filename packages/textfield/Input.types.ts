import type Component from './Input.svelte';

type ElementAttributes = svelte.JSX.HTMLProps<HTMLInputElement>;

export declare class InputComponentDev extends Component {
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
