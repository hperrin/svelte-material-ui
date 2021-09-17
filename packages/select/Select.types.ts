import type { FloatingLabelComponentDev } from '@smui/floating-label';
import type { NotchedOutlineComponentDev } from '@smui/notched-outline';
import type { LineRippleComponentDev } from '@smui/line-ripple';
import type { MenuComponentDev } from '@smui/menu';
import type { ListComponentDev } from '@smui/list';
import type Component from './Select.svelte';
import type { HelperTextComponentDev } from './helper-text/HelperText.types.js';

export declare class SelectComponentDev extends Component {
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
    | 'ripple'
    | 'disabled'
    | 'variant'
    | 'noLabel'
    | 'label'
    | 'value'
    | 'key'
    | 'dirty'
    | 'invalid'
    | 'updateInvalid'
    | 'required'
    | 'inputId'
    | 'hiddenInput'
    | 'withLeadingIcon'
  > &
    {
      [k in keyof HelperTextComponentDev['$$prop_def'] as `helperText\$${k}`]?: HelperTextComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLInputElement>
      > as `input\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLInputElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `anchor\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    {
      [k in keyof FloatingLabelComponentDev['$$prop_def'] as `label\$${k}`]?: FloatingLabelComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof NotchedOutlineComponentDev['$$prop_def'] as `outline\$${k}`]?: NotchedOutlineComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      > as `selectedTextContainer\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      > as `selectedText\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      > as `dropdownIcon\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLSpanElement>
      >[k];
    } &
    {
      [k in keyof LineRippleComponentDev['$$prop_def'] as `ripple\$${k}`]?: LineRippleComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof MenuComponentDev['$$prop_def'] as `menu\$${k}`]?: MenuComponentDev['$$prop_def'][k];
    } &
    {
      [k in keyof ListComponentDev['$$prop_def'] as `list\$${k}`]?: ListComponentDev['$$prop_def'][k];
    } & {
      input$disabled?: never;
      input$required?: never;
      input$value?: never;
    } & Component['$$prop_def'];
}
