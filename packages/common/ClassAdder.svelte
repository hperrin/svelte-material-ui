<svelte:component
  this={component}
  use={[forwardEvents, ...use]}
  class="{smuiClass} {className}"
  {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])}
><slot></slot></svelte:component>

<script context="module">
  export const internals = {
    component: null,
    smuiClass: null,
    contexts: {}
  };
</script>

<script>
  import {setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  export let use = [];
  let className = '';
  export {className as class};
  export let component = internals.component;
  let smuiForwardEvents = [];
  export {smuiForwardEvents as forwardEvents};

  const smuiClass = internals.class;
  const contexts = internals.contexts;

  const forwardEvents = forwardEventsBuilder(get_current_component(), smuiForwardEvents);

  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
</script>
