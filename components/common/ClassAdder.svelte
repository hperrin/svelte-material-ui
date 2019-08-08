<svelte:component
  this={component}
  use={[forwardEvents, ...use]}
  class="{addClass} {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></svelte:component>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';
  import Div from './Div.svelte';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let component = Div;
  export let use = [];
  let className = '';
  export {className as class};
  export let addClass = 'setme';
</script>