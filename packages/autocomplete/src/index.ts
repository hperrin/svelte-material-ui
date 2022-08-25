import type { ComponentType } from 'svelte';

import Autocomplete from './Autocomplete.svelte';
import type { AutocompleteComponentDev } from './Autocomplete.types.js';
export * from './Autocomplete.types.js';

export default Autocomplete as ComponentType<AutocompleteComponentDev>;
