import Banner from './Banner.svelte';
import type { BannerComponentDev } from './Banner.types';
export * from './Banner.types';

import { Label, Icon } from '@smui/common';

export default Banner as typeof BannerComponentDev;

export { Label, Icon };
