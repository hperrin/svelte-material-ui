<Button
  use={[forwardEvents, ...use]}
  class="mdc-card__action mdc-card__action--button {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></Button>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import Button from '../button';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
</script>