import type { ComponentType } from 'svelte';

import Select from './Select.svelte';
import type { SelectComponentDev } from './Select.types.js';
export * from './Select.types.js';

import OptionComponent from './Option.svelte';
import type { OptionComponentDev } from './Option.types.js';
export * from './Option.types.js';
const Option = OptionComponent as ComponentType<OptionComponentDev>;

export default Select as ComponentType<SelectComponentDev>;

export { Option };
