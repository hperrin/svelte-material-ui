import type { ComponentType } from 'svelte';

import IconButton from './IconButton.svelte';
import type { IconButtonComponentDev } from './IconButton.types.js';
export * from './IconButton.types.js';

import { Icon } from '@smui/common';

export default IconButton as ComponentType<IconButtonComponentDev>;

export { Icon };
