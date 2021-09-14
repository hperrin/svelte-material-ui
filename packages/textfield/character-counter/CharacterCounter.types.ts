import type Component from './CharacterCounter.svelte';

export declare class CharacterCounterComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class'
  > &
    Component['$$prop_def'];
}
