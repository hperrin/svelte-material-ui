import type Component from './Checkbox.svelte';

export declare class CheckboxComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'disabled'
    | 'touch'
    | 'indeterminate'
    | 'group'
    | 'checked'
    | 'value'
    | 'valueKey'
  > &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLInputElement>
      > as `input\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLInputElement>
      >[k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$value?: never;
      input$checked?: never;
      input$group?: never;
    } & Component['$$prop_def'];
}
