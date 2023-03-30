import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-dialog__header',
  tag: 'div',
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});
