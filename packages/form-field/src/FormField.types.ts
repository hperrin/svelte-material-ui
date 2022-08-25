import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './FormField.svelte';

export declare class FormFieldComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'align' | 'noWrap' | 'inputId'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLLabelElement>
    > as `label\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLLabelElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
