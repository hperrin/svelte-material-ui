import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';
import { Graphic } from '@smui/list';

// @ts-ignore
export default classAdderBuilder<keyof SmuiElementMap, Graphic>({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
});
