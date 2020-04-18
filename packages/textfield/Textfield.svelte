{#if valued}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-text-field
      {className}
      {disabled ? 'mdc-text-field--disabled' : ''}
      {fullwidth ? 'mdc-text-field--fullwidth' : ''}
      {textarea ? 'mdc-text-field--textarea' : ''}
      {(variant === 'outlined' && !fullwidth) ? 'mdc-text-field--outlined' : ''}
      {(variant === 'standard' && !fullwidth && !textarea) ? 'smui-text-field--standard' : ''}
      {dense ? 'mdc-text-field--dense' : ''}
      {noLabel || label == null ? 'mdc-text-field--no-label' : ''}
      {withLeadingIcon ? 'mdc-text-field--with-leading-icon' : ''}
      {withTrailingIcon ? 'mdc-text-field--with-trailing-icon' : ''}
      {invalid ? 'mdc-text-field--invalid' : ''}
    "
    {...props}
  >
    <slot></slot>
    {#if textarea}
      <Textarea
        {disabled}
        bind:value
        bind:dirty
        bind:invalid
        {updateInvalid}
        on:change
        on:input
        {...prefixFilter($$props, 'input$')}
      />
    {:else}
      <Input
        {type}
        {disabled}
        bind:value
        bind:files
        bind:dirty
        bind:invalid
        {updateInvalid}
        on:change
        on:input
        {...((fullwidth && label) ? {placeholder: label} : {})}
        {...prefixFilter($$props, 'input$')}
      />
    {/if}
    {#if !textarea && variant !== 'outlined'}
      {#if !noLabel && label != null && !fullwidth}
        <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>{label}<slot name="label"></slot></FloatingLabel>
      {/if}
      {#if ripple}
        <LineRipple {...prefixFilter($$props, 'ripple$')} />
      {/if}
    {/if}
    {#if textarea || (variant === 'outlined' && !fullwidth)}
      <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>
        {#if !noLabel && label != null}
          <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>{label}<slot name="label"></slot></FloatingLabel>
        {/if}
      </NotchedOutline>
    {/if}
  </label>
{:else}
  <div
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-text-field
      {className}
      {disabled ? 'mdc-text-field--disabled' : ''}
      {fullwidth ? 'mdc-text-field--fullwidth' : ''}
      {textarea ? 'mdc-text-field--textarea' : ''}
      {(variant === 'outlined' && !fullwidth) ? 'mdc-text-field--outlined' : ''}
      {(variant === 'standard' && !fullwidth && !textarea) ? 'smui-text-field--standard' : ''}
      {dense ? 'mdc-text-field--dense' : ''}
      {noLabel ? 'mdc-text-field--no-label' : ''}
      {withLeadingIcon ? 'mdc-text-field--with-leading-icon' : ''}
      {withTrailingIcon ? 'mdc-text-field--with-trailing-icon' : ''}
      {invalid ? 'mdc-text-field--invalid' : ''}
    "
    {...props}
  >
    <slot></slot>
  </div>
{/if}

<script>
  import {MDCTextField} from '@material/textfield';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';
  import FloatingLabel from '@smui/floating-label/FloatingLabel.svelte';
  import LineRipple from '@smui/line-ripple/LineRipple.svelte';
  import NotchedOutline from '@smui/notched-outline/NotchedOutline.svelte';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let disabled = false;
  export let fullwidth = false;
  export let textarea = false;
  export let variant = 'standard';
  export let dense = false;
  export let withLeadingIcon = false;
  export let withTrailingIcon = false;
  export let noLabel = false;
  export let label = null;
  export let type = 'text';
  export let value = uninitializedValue;
  export let files = uninitializedValue;
  export let dirty = false;
  export let invalid = uninitializedValue;
  export let updateInvalid = invalid === uninitializedValue;
  export let useNativeValidation = updateInvalid;

  $: props = exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'variant', 'dense', 'withLeadingIcon', 'withTrailingIcon', 'noLabel', 'label', 'type', 'value', 'dirty', 'invalid', 'updateInvalid', 'useNativeValidation', 'input$', 'label$', 'ripple$', 'outline$']);

  let element;
  let textField;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  $: valued = value !== uninitializedValue || files !== uninitializedValue;

  $: if (textField && value !== uninitializedValue && textField.value !== value) {
    textField.value = value;
  }

  $: if (textField && textField.disabled !== disabled) {
    textField.disabled = disabled;
  }

  $: if (textField && textField.valid !== !invalid) {
    if (updateInvalid) {
      invalid = !textField.valid;
    } else {
      textField.valid = !invalid;
    }
  }

  $: if (textField && textField.useNativeValidation !== useNativeValidation) {
    textField.useNativeValidation = useNativeValidation;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    textField = new MDCTextField(element);

    if (!ripple) {
      textField.ripple && textField.ripple.destroy();
    }
  });

  onDestroy(() => {
    textField && textField.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  export function focus(...args) {
    return textField.focus(...args);
  }

  export function layout(...args) {
    return textField.layout(...args);
  }
</script>
