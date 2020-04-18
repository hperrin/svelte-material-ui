<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-switch
    {className}
    {disabled ? 'mdc-switch--disabled' : ''}
    {nativeChecked ? 'mdc-switch--checked' : ''}
  "
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
        {...inputProps}
        {disabled}
        bind:checked={nativeChecked}
        value={valueKey === uninitializedValue ? value : valueKey}
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
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let switchControl;
  let formField = getContext('SMUI:form-field');
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');
  let nativeChecked = group === uninitializedValue ? (checked === uninitializedValue ? false : checked) : group.indexOf(value) !== -1;

  $: if (setChecked) {
    setChecked(nativeChecked);
  }

  $: if (switchControl) {
    if (group !== uninitializedValue) {
      const isChecked = group.indexOf(value) !== -1;
      if (switchControl.checked !== isChecked) {
        switchControl.checked = isChecked;
      }
    } else if (checked !== uninitializedValue && switchControl.checked !== checked) {
      switchControl.checked = checked;
    }
  }

  $: if (switchControl && switchControl.disabled !== disabled) {
    switchControl.disabled = disabled;
  }

  $: if (switchControl && valueKey === uninitializedValue && switchControl.value !== value) {
    switchControl.value = value;
  }

  $: if (switchControl && valueKey !== uninitializedValue && switchControl.value !== valueKey) {
    switchControl.value = valueKey;
  }

  let previousChecked = checked;
  $: if (checked !== uninitializedValue) {
    if (checked === previousChecked) {
      checked = nativeChecked;
    } else if (nativeChecked !== checked) {
      nativeChecked = checked;
    }
    previousChecked = checked;
  }

  onMount(() => {
    switchControl = new MDCSwitch(element);

    if (formField && formField()) {
      formField().input = switchControl;
    }
  });

  onDestroy(() => {
    switchControl && switchControl.destroy();
  });

  function handleChange(e) {
    if (group !== uninitializedValue) {
      const idx = group.indexOf(value);
      if (switchControl.checked && idx === -1) {
        group.push(value);
        group = group;
      } else if (!switchControl.checked && idx !== -1) {
        group.splice(idx, 1);
        group = group;
      }
    }
  }

  export function getId() {
    return inputProps && inputProps.id;
  }
</script>
