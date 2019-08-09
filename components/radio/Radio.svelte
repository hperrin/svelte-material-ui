<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-radio {className}"
  class:mdc-radio--disabled={disabled}
  {...exclude($$props, ['use', 'class', 'disabled', 'group', 'value', 'input$'])}
>
  <input
    use:useActions={input$use}
    class="mdc-radio__native-control {input$class}"
    type="radio"
    {...incoming}
    {disabled}
    {value}
    {checked}
    on:change={handleChange}
    on:change on:input
    {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
  />
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div>
  </div>
</div>

<script>
  import {MDCRadio} from '@material/radio';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let group = null;
  export let value = null;
  export let input$use = [];
  export let input$class = '';

  let element;
  let radio;
  let formField = getContext('SMUI:form-field');
  let incoming = getContext('SMUI:form-field:props') || {};
  let setChecked = getContext('SMUI:form-field:setChecked');

  $: checked = group === value;

  if (setChecked) {
    setChecked(group === value);
  }

  $: if (radio && radio.checked !== checked) {
    radio.checked = checked;
  }

  $: if (radio && radio.disabled !== disabled) {
    radio.disabled = disabled;
  }

  $: if (radio && radio.value !== value) {
    radio.value = value;
  }

  onMount(() => {
    radio = new MDCRadio(element);

    if (formField && formField()) {
      formField().input = radio;
    }
  });

  onDestroy(() => {
    radio.destroy();
  });

  function handleChange(e) {
    if (e.target.checked) {
      group = value;
    }
  }

  export function getId() {
    return incoming && incoming.id;
  }
</script>