import type { ComponentType } from 'svelte';

import Badge from './Badge.svelte';
import type { BadgeComponentDev } from './Badge.types.js';
export * from './Badge.types.js';

export default Badge as ComponentType<BadgeComponentDev>;
