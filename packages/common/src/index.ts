import type { ComponentType } from 'svelte';

import LabelComponent from './CommonLabel.svelte';
import type { CommonLabelComponentDev } from './CommonLabel.types.js';
export * from './CommonLabel.types.js';
const Label = LabelComponent as ComponentType<CommonLabelComponentDev>;

import IconComponent from './CommonIcon.svelte';
import type { CommonIconComponentDev } from './CommonIcon.types.js';
export * from './CommonIcon.types.js';
const Icon = IconComponent as ComponentType<CommonIconComponentDev>;

import SmuiElementComponent from './SmuiElement.svelte';
import type { SmuiElementComponentDev } from './SmuiElement.types.js';
export * from './SmuiElement.types.js';
const SmuiElement =
  SmuiElementComponent as ComponentType<SmuiElementComponentDev>;

import ContextFragment from './ContextFragment.svelte';

export { Label, Icon, SmuiElement, ContextFragment };
export * from './smui.types.js';
