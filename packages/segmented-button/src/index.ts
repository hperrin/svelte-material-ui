import SegmentedButton from './SegmentedButton.svelte';
import type { SegmentedButtonComponentDev } from './SegmentedButton.types.js';
export * from './SegmentedButton.types.js';

import SegmentComponent from './Segment.svelte';
import type { SegmentComponentDev } from './Segment.types.js';
export * from './Segment.types.js';
const Segment = SegmentComponent as typeof SegmentComponentDev;
import { Label, Icon } from '@smui/common';

export default SegmentedButton as typeof SegmentedButtonComponentDev;

export { Segment, Label, Icon };
