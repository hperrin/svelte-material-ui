import type { ComponentType } from 'svelte';

import Button from './Button.svelte';
export * from './Button.types.js';

import GroupComponent from './Group.svelte';
import type { GroupComponentDev } from './Group.types.js';
export * from './Group.types.js';
const Group = GroupComponent as ComponentType<GroupComponentDev>;
import GroupItem from './GroupItem.js';
import { Label, Icon } from '@smui/common';

export default Button;

export { Group, GroupItem, Label, Icon };
