import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import Span from '@smui/common/Span.svelte';

export default classAdderBuilder({
  class: 'mdc-deprecated-list-item__text',
  component: Span as typeof SMUIComponent,
});
