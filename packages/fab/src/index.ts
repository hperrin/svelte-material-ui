import type { ComponentType } from 'svelte';

import Fab from './Fab.svelte';
import type { FabComponentDev } from './Fab.types.js';
export * from './Fab.types.js';

import { Label, Icon } from '@smui/common';

export default Fab as ComponentType<FabComponentDev>;

export { Label, Icon };
