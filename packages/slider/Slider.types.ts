import type Component from './Slider.svelte';

export declare class SliderComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    keyof Component['$$prop_def']
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
      input$step?: never;
      input$min?: never;
      input$max?: never;
      input$value?: never;
      input$checked?: never;
      input$group?: never;
    } & Component['$$prop_def'];
}
