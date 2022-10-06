import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-dialog__actions',
  tag: 'div',
  classMap: {
    'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
  },
  contexts: {
    'SMUI:button:context': 'dialog:action',
  },
});
