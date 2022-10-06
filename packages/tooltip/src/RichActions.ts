import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-tooltip--rich-actions',
  tag: 'div',
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
