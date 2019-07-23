<Button
  use={[forwardEvents, ...use]}
  class="mdc-dialog__button {defaultAction ? 'mdc-dialog__button--default' : ''} {className}"
  data-mdc-dialog-action={action}
  {...exclude($$props, ['use', 'class', 'default', 'action'])}
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
  let defaultAction = false;
  export {defaultAction as default};
  export let action = 'close';
</script>