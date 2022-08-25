import type { ComponentType } from 'svelte';

import FormField from './FormField.svelte';
import type { FormFieldComponentDev } from './FormField.types.js';
export * from './FormField.types.js';

export default FormField as ComponentType<FormFieldComponentDev>;
