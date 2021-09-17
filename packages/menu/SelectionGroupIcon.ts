import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal/index.js';
import { Graphic } from '@smui/list';

export default classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic as typeof SMUIComponent,
}) as typeof Graphic;
