import type Component from './Radio.svelte';

export declare class RadioComponentDev extends Component {
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
    | 'group'
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
