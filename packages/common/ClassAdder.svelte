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
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from './forwardEvents.js';
  import { exclude } from './exclude.js';

  export let use = [];
  let className = '';
  export { className as class };
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  let element;
  const smuiClass = internals.class;
  const contexts = internals.contexts;
  const props = internals.props;

  export let component = internals.component;

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
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
