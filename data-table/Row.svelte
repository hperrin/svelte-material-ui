<tr
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class:mdc-data-table__header-row={header}
  class:mdc-data-table__row={!header}
  class:mdc-data-table__row--selected={!header && selected}
  {...ariaSelectedProp}
  {...exclude($$props, ['use'])}
><slot></slot></tr>

<script>
  import {getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let element;
  let header = getContext('SMUI:data-table:row:header');
  let selected = undefined;

  $: ariaSelectedProp = selected !== undefined ? {'aria-selected': selected ? 'true' : 'false'} : {};

  setContext('SMUI:data-table:row:getIndex', getIndex);

  setContext('SMUI:generic:input:setChecked', setChecked);

  function setChecked(checked) {
    selected = checked;
  }

  function getIndex() {
    let i = 0;

    if (element) {
      let el = element;
      while (el.previousSibling) {
        el = el.previousSibling;
        if (el.nodeType === 1) {
          i++;
        }
      }
    }

    return i;
  }
</script>