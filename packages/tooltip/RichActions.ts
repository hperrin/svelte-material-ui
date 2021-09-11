import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-tooltip--rich-actions',
  component: Div as typeof SMUIComponent,
  contexts: {
    'SMUI:button:context': 'tooltip:rich-actions',
  },
});
