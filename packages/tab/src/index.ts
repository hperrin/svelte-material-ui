import type { ComponentType } from 'svelte';

import Tab from './Tab.svelte';
import type { TabComponentDev } from './Tab.types.js';
export * from './Tab.types.js';

import { Label, Icon } from '@smui/common';

export default Tab as ComponentType<TabComponentDev>;

export { Label, Icon };
