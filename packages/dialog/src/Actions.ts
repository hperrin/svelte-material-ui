import { classAdderBuilder } from '@smui/common/classadder';
import { Div } from '@smui/common/elements';

export default classAdderBuilder({
  class: 'mdc-dialog__actions',
  component: Div,
  classMap: {
    'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
  },
  contexts: {
    'SMUI:button:context': 'dialog:action',
  },
});
