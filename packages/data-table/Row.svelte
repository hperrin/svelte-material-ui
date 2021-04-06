<tr
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__header-row': header,
    'mdc-data-table__row': !header,
    'mdc-data-table__row--selected': !header && selected,
  })}
  {...selected !== undefined
    ? { 'aria-selected': selected ? 'true' : 'false' }
    : {}}
  {...exclude($$props, ['use', 'class'])}><slot /></tr
>

<script>
  import { getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let header = getContext('SMUI:data-table:row:header');
  let selected = undefined;

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

  export function getElement() {
    return element;
  }
</script>
