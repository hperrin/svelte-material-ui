import SegmentedButton from './SegmentedButton.svelte';
import type { SegmentedButtonComponentDev } from './SegmentedButton.types';
export * from './SegmentedButton.types';

import SegmentComponent from './Segment.svelte';
import type { SegmentComponentDev } from './Segment.types';
export * from './Segment.types';
const Segment = SegmentComponent as typeof SegmentComponentDev;
import { Label, Icon } from '@smui/common';

export default SegmentedButton as typeof SegmentedButtonComponentDev;

export { Segment, Label, Icon };
