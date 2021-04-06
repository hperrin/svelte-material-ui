<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    [smuiClass]: true,
    ...smuiClassMap,
  })}
  {...props}
  {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])}
  ><slot /></svelte:component
>

<script context="module">
  export const internals = {
    component: null,
    class: '',
    classMap: {},
    contexts: {},
    props: {},
    forwardEvents: [],
  };
</script>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from './forwardEventsBuilder.js';
  import { classMap } from './classMap.js';
  import { exclude } from './exclude.js';

  export let use = [];
  let className = '';
  export { className as class };
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  let element;
  const smuiClass = internals.class;
  const smuiClassMap = internals.classMap;
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
