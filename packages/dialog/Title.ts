import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import H2 from '@smui/common/H2.svelte';

export default classAdderBuilder({
  class: 'mdc-dialog__title',
  component: H2 as typeof SMUIComponent,
});
