import { classAdderBuilder } from '@smui/common/classadder';
import { Div } from '@smui/common/elements';

export default classAdderBuilder({
  class: 'mdc-tooltip--rich-actions',
  component: Div,
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
