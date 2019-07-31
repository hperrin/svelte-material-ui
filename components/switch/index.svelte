<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-switch {className}"
  class:mdc-switch--disabled={disabled}
  class:mdc-switch--checked={nativeChecked}
  {...exclude($$props, ['use', 'class', 'disabled', 'group', 'checked', 'value', 'input$'])}
>
  <div class="mdc-switch__track"></div>
  <div class="mdc-switch__thumb-underlay">
    <div class="mdc-switch__thumb">
      <input
        use:useActions={input$use}
        class="mdc-switch__native-control {input$class}"
        type="checkbox"
        role="switch"
        {...incoming}
        {disabled}
        bind:checked={nativeChecked}
        {value}
        on:change={handleChange}
        on:change on:input
        {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
      />
    </div>
  </div>
</div>

<script>
  import {MDCSwitch} from '@material/switch';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {prefixFilter} from '../prefixFilter';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let input$use = [];
  export let input$class = '';

  let element;
  let switchControl;
  let formField = getContext('SMUI:formField');
  let incoming = getContext('SMUI:formField:props') || {};
  let setChecked = getContext('SMUI:formField:setChecked');
  let nativeChecked = group === uninitializedValue ? (checked === uninitializedValue ? false : checked) : group.indexOf(value) !== -1;

  if (setChecked) {
    setChecked(nativeChecked);
  }

  $: if (switchControl) {
    if (group !== uninitializedValue) {
      const isChecked = group.indexOf(value) !== -1;
      if (switchControl.checked !== isChecked) {
        switchControl.checked = isChecked;
      }
    } else if (switchControl.checked !== checked) {
      switchControl.checked = checked;
    }
  }

  $: if (switchControl && switchControl.disabled !== disabled) {
    switchControl.disabled = disabled;
  }

  $: if (switchControl && switchControl.value !== value) {
    switchControl.value = value;
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
    switchControl = new MDCSwitch(element);

    if (formField && formField()) {
      formField().input = switchControl;
    }
  });

  onDestroy(() => {
    switchControl.destroy();
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

<style lang="scss" global>
  @import "@material/switch/mdc-switch";
</style>