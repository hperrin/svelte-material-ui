/// <reference types="./ambient-chips" />

import Chip from './Chip.svelte';
export * from './Chip.types.js';

import ChipSet from './ChipSet.svelte';
import Text from './Text.svelte';
export * from './Text.types.js';
import LeadingIcon from './LeadingIcon.svelte';
import TrailingIcon from './TrailingIcon.svelte';
import TrailingAction from './TrailingAction.svelte';
export * from './TrailingAction.types.js';

export default Chip;

export {
  ChipSet,
  ChipSet as Set,
  Text,
  LeadingIcon,
  TrailingIcon,
  TrailingAction,
};
