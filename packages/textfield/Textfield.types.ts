import type Textfield from './Textfield.svelte';
import type { InputComponentDev } from './Input.types';
import type { TextareaComponentDev } from './Textarea.types';

type ElementAttributes = svelte.JSX.HTMLProps<HTMLLabelElement> &
  svelte.JSX.HTMLProps<HTMLDivElement>;

// TODO: type all component like this, plus all the whatever$ props.

export declare class TextfieldComponentDev extends Textfield {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: {
    [k in keyof ElementAttributes]?: ElementAttributes[k];
  } &
    {
      [k in keyof InputComponentDev['$$prop_def'] as `input\$${k}`]?: InputComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof TextareaComponentDev['$$prop_def'] as `input\$${k}`]?: TextareaComponentDev['$$prop_def'][k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$required?: never;
      input$value?: never;
      input$files?: never;
      input$dirty?: never;
      input$invalid?: never;
      input$updateInvalid?: never;
      'input$aria-controls'?: never;
      'input$aria-describedby'?: never;
    } & Textfield['$$prop_def'];
}
