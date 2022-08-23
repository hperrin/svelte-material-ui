import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<string>({
  class: 'mdc-tooltip--rich-actions',
  tag: 'div',
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
