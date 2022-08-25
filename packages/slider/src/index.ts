import type { ComponentType } from 'svelte';

import Slider from './Slider.svelte';
import type { SliderComponentDev } from './Slider.types.js';
export * from './Slider.types.js';

export default Slider as ComponentType<SliderComponentDev>;
