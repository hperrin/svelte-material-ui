import type { SMUIComponent } from '@smui/common';
import { classAdderBuilder } from '@smui/common/internal';
import A from '@smui/common/A.svelte';

export default classAdderBuilder({
  class: 'mdc-tooltip__content-link',
  component: A as typeof SMUIComponent,
});
