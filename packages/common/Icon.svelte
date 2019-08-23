<i
  use:useActions={use}
  use:forwardEvents
  class={className}
  class:mdc-button__icon={context === 'button'}
  class:mdc-fab__icon={context === 'fab'}
  class:mdc-icon-button__icon={context === 'icon-button'}
  class:mdc-icon-button__icon--on={context === 'icon-button' && on}
  class:mdc-chip__icon={context === 'chip'}
  class:mdc-chip__icon--leading={context === 'chip' && leading}
  class:mdc-chip__icon--leading-hidden={context === 'chip' && leadingHidden}
  class:mdc-chip__icon--trailing={context === 'chip' && trailing}
  class:mdc-tab__icon={context === 'tab'}
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'on', 'leading', 'leadingHidden', 'trailing'])}
><slot></slot></i>

<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let on = false;
  export let leading = false;
  export let leadingHidden = false;
  export let trailing = false;

  const context = getContext('SMUI:icon:context');
</script>