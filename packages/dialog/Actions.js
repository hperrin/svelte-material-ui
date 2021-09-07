import { classAdderBuilder } from '@smui/common/internal.js';
import Div from '@smui/common/Div.svelte';

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
