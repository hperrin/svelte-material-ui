import { classAdderBuilder } from '@smui/common/internal.js';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-text-field-helper-line',
  component: Div,
  forwardEvents: [
    'SMUI:textfield:helper-text:id',
    'SMUI:textfield:helper-text:mount',
    'SMUI:textfield:helper-text:unmount',
    'SMUI:textfield:character-counter:mount',
    'SMUI:textfield:character-counter:unmount',
  ],
});
