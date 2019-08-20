<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-card__media {className}"
  class:mdc-card__media--square={aspectRatio === 'square'}
  class:mdc-card__media--16-9={aspectRatio === '16x9'}
  {...exclude($$props, ['use', 'class', 'aspectRatio'])}
><slot></slot></div>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let aspectRatio = null;
</script>