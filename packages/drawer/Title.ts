import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import H1 from '@smui/common/H1.svelte';

export default classAdderBuilder({
  class: 'mdc-drawer__title',
  component: H1 as typeof SMUIComponent,
});
