<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__media
    {className}
    {aspectRatio === 'square' ? 'mdc-card__media--square' : ''}
    {aspectRatio === '16x9' ? 'mdc-card__media--16-9' : ''}
  "
  {...exclude($$props, ['use', 'class', 'aspectRatio'])}
><slot></slot></div>

<script>
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let aspectRatio = null;
</script>
