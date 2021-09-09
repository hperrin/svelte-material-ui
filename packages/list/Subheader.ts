import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import H3 from '@smui/common/H3.svelte';

export default classAdderBuilder({
  class: 'mdc-deprecated-list-group__subheader',
  component: H3 as typeof SMUIComponent,
});
