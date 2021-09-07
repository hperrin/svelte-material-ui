import { classAdderBuilder } from '@smui/common/internal.js';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-dialog__header',
  component: Div,
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});
