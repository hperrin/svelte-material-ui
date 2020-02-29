<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-checkbox
    {className}
    {disabled ? 'mdc-checkbox--disabled' : ''}
    {(context === 'data-table' && dataTableHeader) ? 'mdc-data-table__header-row-checkbox' : ''}
    {(context === 'data-table' && !dataTableHeader) ? 'mdc-data-table__row-checkbox' : ''}
  "
  {...exclude($$props, ['use', 'class', 'disabled', 'indeterminate', 'group', 'checked', 'value', 'valueKey', 'input$'])}
>
  <input
    use:useActions={input$use}
    class="mdc-checkbox__native-control {input$class}"
    type="checkbox"
    {...inputProps}
    {disabled}
    bind:checked={nativeChecked}
    value={valueKey === uninitializedValue ? value : valueKey}
    on:change={handleChange}
    on:input={handleChange}
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
  export let indeterminate = uninitializedValue;
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let valueKey = uninitializedValue;
  export let input$use = [];
  export let input$class = '';

  let element;
  let checkbox;
  let formField = getContext('SMUI:form-field');
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let setChecked = getContext('SMUI:generic:input:setChecked');
  let addChangeHandler = getContext('SMUI:generic:input:addChangeHandler');
  let nativeChecked = group === uninitializedValue ? (checked === uninitializedValue ? false : checked) : group.indexOf(value) !== -1;
  let context = getContext('SMUI:checkbox:context');
  let dataTableHeader = getContext('SMUI:data-table:row:header');
  let getDataTableRowIndex = getContext('SMUI:data-table:row:getIndex');
  let instantiate = getContext('SMUI:checkbox:instantiate');
  let getInstance = getContext('SMUI:checkbox:getInstance');

  $: if (setChecked) {
    setChecked(nativeChecked);
  }

  $: if (checkbox && indeterminate !== uninitializedValue && checkbox.indeterminate !== indeterminate) {
    checkbox.indeterminate = indeterminate;
  }

  $: if (checkbox) {
    if (group !== uninitializedValue) {
      const isChecked = group.indexOf(value) !== -1;
      if (checkbox.checked !== isChecked) {
        checkbox.checked = isChecked;
      }
    } else if (checked !== uninitializedValue && checkbox.checked !== checked) {
      checkbox.checked = checked;
    }
  }

  $: if (checkbox && checkbox.disabled !== disabled) {
    checkbox.disabled = disabled;
  }

  $: if (checkbox && valueKey === uninitializedValue && checkbox.value !== value) {
    checkbox.value = value;
  }

  $: if (checkbox && valueKey !== uninitializedValue && checkbox.value !== valueKey) {
    checkbox.value = valueKey;
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

  if (addChangeHandler) {
    addChangeHandler(handleChange);
  }

  onMount(async () => {
    if (instantiate !== false) {
      checkbox = new MDCCheckbox(element);
    } else {
      if (context === 'data-table') {
        if (dataTableHeader) {
          checkbox = await getInstance(true);
        } else {
          checkbox = (await getInstance(false))[getDataTableRowIndex()];
        }
      } else {
        checkbox = await getInstance();
      }
    }

    if (formField && formField()) {
      formField().input = checkbox;
    }
  });

  onDestroy(() => {
    if (instantiate !== false) {
      checkbox && checkbox.destroy();
    }
  });

  function handleChange() {
    if (group !== uninitializedValue) {
      const idx = group.indexOf(value);
      if (checkbox.checked && idx === -1) {
        group.push(value);
        group = group;
      } else if (!checkbox.checked && idx !== -1) {
        group.splice(idx, 1);
        group = group;
      }
    }
  }

  export function getId() {
    return inputProps && inputProps.id;
  }
</script>
