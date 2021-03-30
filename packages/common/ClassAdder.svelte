<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class="{smuiClass} {className}"
  {...props}
  {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])}
  ><slot /></svelte:component
>

<script context="module">
  export const internals = {
    component: null,
    smuiClass: null,
    contexts: {},
    props: {},
    forwardEvents: [],
  };
</script>

<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder } from './forwardEvents.js';
  import { exclude } from './exclude.js';

  export let use = [];
  let className = '';
  export { className as class };
  export let component = internals.component;
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  let element;
  const smuiClass = internals.class;
  const contexts = internals.contexts;
  const props = internals.props;

  const forwardEvents = forwardEventsBuilder(createEventDispatcher(), [
    ...internals.forwardEvents,
    ...forwardEventsAdditional,
  ]);

  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
