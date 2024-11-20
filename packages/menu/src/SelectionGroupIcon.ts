import type { SmuiComponent, SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';
import { Graphic } from '@smui/list';

export default classAdderBuilder<keyof SmuiElementMap, SmuiComponent>({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic as unknown as SmuiComponent,
});
