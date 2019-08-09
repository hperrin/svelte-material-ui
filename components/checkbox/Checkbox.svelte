<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-checkbox {className}"
  class:mdc-checkbox--disabled={disabled}
  {...exclude($$props, ['use', 'class', 'disabled', 'indeterminate', 'group', 'checked', 'value', 'input$'])}
>
  <input
    use:useActions={input$use}
    class="mdc-checkbox__native-control {input$class}"
    type="checkbox"
    {...incoming}
    {disabled}
    bind:checked={nativeChecked}
    {value}
    on:change={handleChange}
    on:change on:input
    {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
  />
  <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
      <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
    </svg>
    <div class="mdc-checkbox__mixedmark"></div>
  </div>
</div>

<script>
  import {MDCCheckbox} from '@material/checkbox';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let indeterminate = false;
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let input$use = [];
  export let input$class = '';

  let element;
  let checkbox;
  let formField = getContext('SMUI:form-field');
  let incoming = getContext('SMUI:form-field:props') || {};
  let setChecked = getContext('SMUI:form-field:setChecked');
  let nativeChecked = group === uninitializedValue ? (checked === uninitializedValue ? false : checked) : group.indexOf(value) !== -1;

  if (setChecked) {
    setChecked(nativeChecked);
  }

  $: if (checkbox && checkbox.indeterminate !== indeterminate) {
    checkbox.indeterminate = indeterminate;
  }

  $: if (checkbox) {
    if (group !== uninitializedValue) {
      const isChecked = group.indexOf(value) !== -1;
      if (checkbox.checked !== isChecked) {
        checkbox.checked = isChecked;
      }
    } else if (checkbox.checked !== checked) {
      checkbox.checked = checked;
    }
  }

  $: if (checkbox && checkbox.disabled !== disabled) {
    checkbox.disabled = disabled;
  }

  $: if (checkbox && checkbox.value !== value) {
    checkbox.value = value;
  }

  let oldChecked = checked;
  $: if (checked !== uninitializedValue) {
    if (checked === oldChecked) {
      checked = nativeChecked;
    } else if (nativeChecked !== checked) {
      nativeChecked = checked;
    }
    oldChecked = checked;
  }

  onMount(() => {
    checkbox = new MDCCheckbox(element);

    if (formField && formField()) {
      formField().input = checkbox;
    }
  });

  onDestroy(() => {
    checkbox.destroy();
  });

  function handleChange(e) {
    if (group !== uninitializedValue) {
      const idx = group.indexOf(value);
      if (e.target.checked && idx === -1) {
        group.push(value);
        group = group;
      } else if (!e.target.checked && idx !== -1) {
        group.splice(idx, 1);
        group = group;
      }
    }
  }

  export function getId() {
    return incoming && incoming.id;
  }
</script>