import Select from './Select.svelte';
import type { SelectComponentDev } from './Select.types';
export * from './Select.types';

import OptionComponent from './Option.svelte';
import type { OptionComponentDev } from './Option.types';
export * from './Option.types';
const Option = OptionComponent as typeof OptionComponentDev;

export default Select as typeof SelectComponentDev;

export { Option };
