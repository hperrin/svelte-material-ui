<svelte:component
  this={instComponent || component}
  use={[forwardEvents, ...use]}
  class="{smuiClass} {className}"
  {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])}
><slot></slot></svelte:component>

<script context="module">
  export let internals = {
    component: null,
    smuiClass: null
  };
</script>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  export let use = [];
  let className = '';
  export {className as class};
  let instComponent;
  export {instComponent as component};
  let smuiForwardEvents = [];
  export {smuiForwardEvents as forwardEvents};

  const component = internals.component;
  const smuiClass = internals.class;

  const forwardEvents = forwardEventsBuilder(current_component, smuiForwardEvents);
</script>