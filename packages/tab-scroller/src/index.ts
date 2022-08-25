import type { ComponentType } from 'svelte';

import TabScroller from './TabScroller.svelte';
import type { TabScrollerComponentDev } from './TabScroller.types.js';
export * from './TabScroller.types.js';

export default TabScroller as ComponentType<TabScrollerComponentDev>;
