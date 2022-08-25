import type { ComponentType } from 'svelte';

import Banner from './Banner.svelte';
import type { BannerComponentDev } from './Banner.types.js';
export * from './Banner.types.js';

import { Label, Icon } from '@smui/common';

export default Banner as ComponentType<BannerComponentDev>;

export { Label, Icon };
