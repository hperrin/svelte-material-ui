import type { ComponentType } from 'svelte';

import Checkbox from './Checkbox.svelte';
import type { CheckboxComponentDev } from './Checkbox.types.js';
export * from './Checkbox.types.js';

export default Checkbox as ComponentType<CheckboxComponentDev>;
