import { classAdderBuilder } from '@smui/common/classadder/index.js';
import { Div } from '@smui/common/elements/index.js';

export default classAdderBuilder({
  class: 'mdc-tooltip--rich-actions',
  component: Div,
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
