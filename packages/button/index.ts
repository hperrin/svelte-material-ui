import Button from './Button.svelte';
import type { ButtonComponentDev } from './Button.types';
export * from './Button.types';

import GroupComponent from './Group.svelte';
import type { GroupComponentDev } from './Group.types';
export * from './Group.types';
const Group = GroupComponent as typeof GroupComponentDev;
import GroupItem from './GroupItem';
import { Label, Icon } from '@smui/common';

export default Button as typeof ButtonComponentDev;

export { Group, GroupItem, Label, Icon };
