import type { FloatingLabelComponentDev } from '@smui/floating-label';
import type { NotchedOutlineComponentDev } from '@smui/notched-outline';
import type { LineRippleComponentDev } from '@smui/line-ripple';
import type Component from './Textfield.svelte';
import type { InputComponentDev } from './Input.types';
import type { TextareaComponentDev } from './Textarea.types';

export declare class TextfieldComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLLabelElement>>,
    keyof Component['$$prop_def']
  > &
    {
      [k in keyof FloatingLabelComponentDev['$$prop_def'] as `label\$${k}`]?: FloatingLabelComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof NotchedOutlineComponentDev['$$prop_def'] as `outline\$${k}`]?: NotchedOutlineComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof LineRippleComponentDev['$$prop_def'] as `ripple\$${k}`]?: LineRippleComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `helperLine\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
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
    } & Component['$$prop_def'];
}
