import type { MenuComponentDev } from '@smui/menu';
import type { TextfieldComponentDev } from '@smui/textfield';
import type { ListComponentDev } from '@smui/list';
import type Component from './Autocomplete.svelte';

export declare class AutocompleteComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    | 'use'
    | 'class'
    | 'options'
    | 'value'
    | 'getOptionDisabled'
    | 'getOptionLabel'
    | 'text'
    | 'label'
    | 'disabled'
    | 'toggle'
    | 'combobox'
    | 'clearOnBlur'
    | 'selectOnExactMatch'
    | 'showMenuWithNoInput'
    | 'noMatchesActionDisabled'
    | 'search'
  > & {
    [k in keyof MenuComponentDev['$$prop_def'] as `menu\$${k}`]?: MenuComponentDev['$$prop_def'][k];
  } & {
    [k in keyof TextfieldComponentDev['$$prop_def'] as `textfield\$${k}`]?: TextfieldComponentDev['$$prop_def'][k];
  } & {
    [k in keyof ListComponentDev['$$prop_def'] as `list\$${k}`]?: ListComponentDev['$$prop_def'][k];
  } & {
    textfield$label?: never;
    textfield$value?: never;
  } & Component['$$prop_def'];
}
