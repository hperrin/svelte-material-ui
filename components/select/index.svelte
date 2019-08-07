<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-select {className}"
  class:mdc-select--disabled={disabled}
  class:mdc-select--outlined={variant === 'outlined'}
  class:mdc-select--with-leading-icon={withLeadingIcon}
  on:MDCSelect:change={handleChange}
  {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'enhanced', 'variant', 'noLabel', 'withLeadingIcon', 'label', 'value', 'selectedIndex', 'selectedText', 'dirty', 'invalid', 'required', 'input$', 'label$', 'ripple$', 'outline$', 'menu$', 'list$'])}
>
  <slot name="icon"></slot>
  <i class="mdc-select__dropdown-icon"></i>
  {#if enhanced}
    <input
      use:useActions={input$use}
      type="hidden"
      {disabled}
      {required}
      id={inputId}
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
  import Option from './Option';
  import Icon from './Icon';
  import HelperText from './HelperText';

  export {Option, Icon, HelperText};

  let counter = 0;
</script>

<script>
  import {MDCSelect} from '@material/select';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import Menu from '../menu';
  import List from '../list';
  import FloatingLabel from '../floating-label';
  import LineRipple from '../line-ripple';
  import NotchedOutline from '../notched-outline';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {prefixFilter} from '../prefixFilter';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, 'MDCSelect:change');

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let disabled = false;
  export let enhanced = false;
  export let variant = 'filled';
  export let withLeadingIcon = false;
  export let noLabel = false;
  export let label = null;
  export let value = '';
  export let selectedIndex = null;
  // Only needed for enhanced select and only needed on initialization.
  export const selectedText = '';
  export let dirty = false;
  export let invalid = false;
  export let required = false;
  export let inputId = 'SMUI-select-'+(counter++);
  export let input$use = [];
  export let input$class = '';
  export let label$class = '';
  export let menu$class = '';

  let element;
  let select;
  let menuPromiseResolve;
  let menuPromise = new Promise(resolve => menuPromiseResolve = resolve);

  setContext('SMUI:menu:instantiate', false);
  setContext('SMUI:menu:getInstance', getMenuInstancePromise);
  setContext('SMUI:list:role', 'listbox');
  setContext('SMUI:select:option:enhanced', enhanced);

  $: if (select && select.value !== value) {
    select.value = value;
  }

  $: if (select && select.selectedIndex !== selectedIndex) {
    select.selectedIndex = selectedIndex;
  }

  $: if (select && select.disabled !== disabled) {
    select.disabled = disabled;
  }

  $: if (select && select.valid === invalid) {
    invalid = !select.valid;
  }

  $: if (select && select.required !== required) {
    select.required = required;
  }

  onMount(async () => {
    select = new MDCSelect(element);

    menuPromiseResolve(select.menu_);

    if (!ripple && select.ripple) {
      select.ripple.destroy();
    }
  });

  onDestroy(() => {
    select.destroy();
  });

  function getMenuInstancePromise() {
    return menuPromise;
  }

  function handleChange(e) {
    value = e.detail.value;
    selectedIndex = e.detail.index;
  }

  export function layout(...args) {
    return select.layout(...args);
  }
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/select/mdc-select";

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
</style>