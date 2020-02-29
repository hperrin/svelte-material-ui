<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-select
    {className}
    {disabled ? 'mdc-select--disabled' : ''}
    {variant === 'outlined' ? 'mdc-select--outlined' : ''}
    {variant === 'standard' ? 'smui-select--standard' : ''}
    {withLeadingIcon ? 'mdc-select--with-leading-icon' : ''}
    {invalid ? 'mdc-select--invalid' : ''}
  "
  on:MDCSelect:change={changeHandler}
  {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'enhanced', 'variant', 'noLabel', 'withLeadingIcon', 'label', 'value', 'selectedIndex', 'selectedText', 'dirty', 'invalid', 'updateInvalid', 'required', 'input$', 'label$', 'ripple$', 'outline$', 'menu$', 'list$'])}
>
  <slot name="icon"></slot>
  <i class="mdc-select__dropdown-icon"></i>
  {#if enhanced}
    <input
      bind:this={inputElement}
      use:useActions={input$use}
      type="hidden"
      {disabled}
      {required}
      id={inputId}
      value={value}
      on:change
      on:input
      {...exclude(prefixFilter($$props, 'input$'), ['use'])}
    />
    <div
      id={inputId+'-smui-selected-text'}
      class="mdc-select__selected-text"
      role="button"
      aria-haspopup="listbox"
      aria-labelledby="{inputId+'-smui-label'} {inputId+'-smui-selected-text'}"
      aria-required="{required ? 'true' : 'false'}"
    >{selectedText}</div>
    <Menu
      class="mdc-select__menu {menu$class}"
      role="listbox"
      anchor={false}
      bind:anchorElement={element}
      {...exclude(prefixFilter($$props, 'menu$'), ['class'])}
    >
      <List {...prefixFilter($$props, 'list$')}><slot></slot></List>
    </Menu>
  {:else}
    <select
      bind:this={inputElement}
      use:useActions={input$use}
      class="mdc-select__native-control {input$class}"
      {disabled}
      {required}
      id={inputId}
      on:change
      on:input
      {...exclude(prefixFilter($$props, 'input$'), ['use', 'class'])}
    ><slot></slot></select>
  {/if}
  {#if variant !== 'outlined'}
    {#if !noLabel && label != null}
      <FloatingLabel
        for={inputId}
        id={inputId+'-smui-label'}
        class="{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}"
        {...exclude(prefixFilter($$props, 'label$'), ['class'])}
      >{label}<slot name="label"></slot></FloatingLabel>
    {/if}
    {#if ripple}
      <LineRipple {...prefixFilter($$props, 'ripple$')} />
    {/if}
  {/if}
  {#if variant === 'outlined'}
    <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>
      {#if !noLabel && label != null}
        <FloatingLabel
          for={inputId}
          class="{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}"
          {...exclude(prefixFilter($$props, 'label$'), ['class'])}
        >{label}<slot name="label"></slot></FloatingLabel>
      {/if}
    </NotchedOutline>
  {/if}
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCSelect} from '@material/select';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';
  import Menu from '@smui/menu/Menu.svelte';
  import List from '@smui/list/List.svelte';
  import FloatingLabel from '@smui/floating-label/FloatingLabel.svelte';
  import LineRipple from '@smui/line-ripple/LineRipple.svelte';
  import NotchedOutline from '@smui/notched-outline/NotchedOutline.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), 'MDCSelect:change');
  const uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let disabled = false;
  export let enhanced = false;
  export let variant = 'standard';
  export let withLeadingIcon = false;
  export let noLabel = false;
  export let label = null;
  export let value = '';
  export let selectedIndex = uninitializedValue;
  // Only needed for enhanced select and only needed on initialization.
  export let selectedText = '';
  export let dirty = false;
  export let invalid = uninitializedValue;
  export let updateInvalid = invalid === uninitializedValue;
  export let required = false;
  export let inputId = 'SMUI-select-'+(counter++);
  export let input$use = [];
  export let input$class = '';
  export let label$class = '';
  export let menu$class = '';

  let element;
  let select;
  let inputElement;
  let menuPromiseResolve;
  let menuPromise = new Promise(resolve => menuPromiseResolve = resolve);
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  setContext('SMUI:menu:instantiate', false);
  setContext('SMUI:menu:getInstance', getMenuInstancePromise);
  setContext('SMUI:list:role', 'listbox');
  setContext('SMUI:select:option:enhanced', enhanced);

  $: if (select && select.value !== value) {
    select.value = value;
  }

  $: if (select && select.selectedIndex !== selectedIndex) {
    if (selectedIndex === uninitializedValue) {
      selectedIndex = select.selectedIndex;
    } else {
      select.selectedIndex = selectedIndex;
    }
  }

  $: if (select && select.disabled !== disabled) {
    select.disabled = disabled;
  }

  $: if (select && select.valid !== !invalid) {
    if (updateInvalid) {
      invalid = !select.valid;
    } else {
      select.valid = !invalid;
    }
  }

  $: if (select && select.required !== required) {
    select.required = required;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(async () => {
    select = new MDCSelect(element);

    menuPromiseResolve(select.menu_);

    if (!ripple && select.ripple) {
      select.ripple.destroy();
    }

    if (updateInvalid) {
      invalid = inputElement.matches(':invalid');
    }
  });

  onDestroy(() => {
    select && select.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function getMenuInstancePromise() {
    return menuPromise;
  }

  function changeHandler(e) {
    value = e.detail.value;
    selectedIndex = e.detail.index;
    dirty = true;
    if (updateInvalid) {
      invalid = inputElement.matches(':invalid');
    }
  }

  export function focus(...args) {
    return inputElement.focus(...args);
  }

  export function layout(...args) {
    return select.layout(...args);
  }
</script>
