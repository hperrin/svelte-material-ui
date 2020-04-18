<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-radio
    {className}
    {disabled ? 'mdc-radio--disabled' : ''}
  "
  {...exclude($$props, ['use', 'class', 'disabled', 'group', 'value', 'valueKey', 'input$'])}
>
  <input
    use:useActions={input$use}
    class="mdc-radio__native-control {input$class}"
    type="radio"
    {...inputProps}
    {disabled}
    value={valueKey === uninitializedValue ? value : valueKey}
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
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let group = null;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let radio;
  let formField = getContext('SMUI:form-field');
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');

  $: checked = group === value;

  $: if (setChecked) {
    setChecked(checked);
  }

  $: if (radio && radio.checked !== checked) {
    radio.checked = checked;
  }

  $: if (radio && radio.disabled !== disabled) {
    radio.disabled = disabled;
  }

  $: if (radio && valueKey === uninitializedValue && radio.value !== value) {
    radio.value = value;
  }

  $: if (radio && valueKey !== uninitializedValue && radio.value !== valueKey) {
    radio.value = valueKey;
  }

  onMount(() => {
    radio = new MDCRadio(element);

    if (formField && formField()) {
      formField().input = radio;
    }
  });

  onDestroy(() => {
    radio && radio.destroy();
  });

  function handleChange(e) {
    if (radio.checked) {
      group = value;
    }
  }

  export function getId() {
    return inputProps && inputProps.id;
  }
</script>
