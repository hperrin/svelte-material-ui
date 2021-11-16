import Select from './Select.svelte';
import type { SelectComponentDev } from './Select.types.js';
export * from './Select.types.js';

import OptionComponent from './Option.svelte';
import type { OptionComponentDev } from './Option.types.js';
export * from './Option.types.js';
const Option = OptionComponent as typeof OptionComponentDev;

export default Select as typeof SelectComponentDev;

export { Option };
