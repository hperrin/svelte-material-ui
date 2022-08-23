import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<string>({
  class: 'mdc-dialog__header',
  tag: 'div',
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});
