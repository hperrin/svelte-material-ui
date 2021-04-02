import { classAdderBuilder } from '@smui/common/internal.js';
import Div from '@smui/common/Div.svelte';

export default classAdderBuilder({
  class: 'mdc-top-app-bar__row',
  component: Div,
  forwardEvents: ['SMUI:top-app-bar:icon-button:nav'],
});
