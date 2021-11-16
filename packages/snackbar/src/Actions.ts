import { classAdderBuilder } from '@smui/common/classadder';
import { Div } from '@smui/common/elements';

export default classAdderBuilder({
  class: 'mdc-snackbar__actions',
  props: { 'aria-atomic': 'true' },
  contexts: {
    'SMUI:button:context': 'snackbar:actions',
    'SMUI:icon-button:context': 'snackbar:actions',
    'SMUI:label:context': undefined,
  },
  component: Div,
});
