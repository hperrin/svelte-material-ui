import type { SvelteComponent } from 'svelte';
import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';
import { Graphic } from '@smui/list';

export default classAdderBuilder<keyof SmuiElementMap, typeof SvelteComponent>({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
});
