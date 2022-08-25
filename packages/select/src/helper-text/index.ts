import type { ComponentType } from 'svelte';

import HelperText from './HelperText.svelte';
import type { HelperTextComponentDev } from './HelperText.types.js';
export * from './HelperText.types.js';

export default HelperText as ComponentType<HelperTextComponentDev>;
