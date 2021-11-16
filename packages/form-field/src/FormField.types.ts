import type Component from './FormField.svelte';

export declare class FormFieldComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'align' | 'noWrap' | 'inputId'
  > &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLLabelElement>
      > as `label\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLLabelElement>
      >[k];
    } &
    Component['$$prop_def'];
}
