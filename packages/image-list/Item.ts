import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import Li from '@smui/common/Li.svelte';

export default classAdderBuilder({
  class: 'mdc-image-list__item',
  component: Li as typeof SMUIComponent,
});
