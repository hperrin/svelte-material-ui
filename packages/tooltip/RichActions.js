import { classAdderBuilder } from '@smui/common/internal.js';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-tooltip--rich-actions',
  component: Div,
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
