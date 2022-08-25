import type { ComponentType } from 'svelte';

import Kitchen from './Kitchen.svelte';
import type { KitchenComponentDev } from './Kitchen.types.js';
export * from './Kitchen.types.js';

export default Kitchen as ComponentType<KitchenComponentDev>;
