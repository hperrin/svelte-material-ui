import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import H6 from '@smui/common/H6.svelte';

export default classAdderBuilder({
  class: 'smui-paper__subtitle',
  component: H6 as typeof SMUIComponent,
});
