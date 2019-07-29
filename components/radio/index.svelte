<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-radio {className}"
  class:mdc-radio--disabled={disabled}
  {...exclude($$props, ['use', 'class', 'disabled', 'group', 'value', 'inputProps'])}
>
  <input
    use:useActions={inputProps.use}
    class="mdc-radio__native-control {inputProps.class}"
    type="radio"
    {...incoming}
    {disabled}
    {value}
    {checked}
    on:change={handleChange}
    on:change on:input
    {...exclude(inputProps, ['use', 'class'])}
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
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let group = null;
  export let value = null;
  export let inputProps = {
    use: [],
    class: ''
  };

  let element;
  let radio;
  let formField = getContext('SMUI:formField');
  let incoming = getContext('SMUI:formField:props') || {};
  let setChecked = getContext('SMUI:formField:setChecked');

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

<style lang="scss" global>
  @import "@material/radio/mdc-radio";
</style>