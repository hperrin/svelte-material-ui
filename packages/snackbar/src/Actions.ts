import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-snackbar__actions',
  tag: 'div',
  props: { 'aria-atomic': 'true' },
  contexts: {
    'SMUI:button:context': 'snackbar:actions',
    'SMUI:icon-button:context': 'snackbar:actions',
    'SMUI:label:context': undefined,
  },
});
