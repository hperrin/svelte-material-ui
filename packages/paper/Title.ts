import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import H5 from '@smui/common/H5.svelte';

export default classAdderBuilder({
  class: 'smui-paper__title',
  component: H5 as typeof SMUIComponent,
});
