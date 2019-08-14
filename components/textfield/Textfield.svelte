{#if valued}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field {className}"
    class:mdc-text-field--disabled={disabled}
    class:mdc-text-field--fullwidth={fullwidth}
    class:mdc-text-field--textarea={textarea}
    class:mdc-text-field--outlined={variant === 'outlined' && !fullwidth}
    class:smui-text-field--standard={variant === 'standard' && !fullwidth}
    class:mdc-text-field--dense={dense}
    class:mdc-text-field--no-label={noLabel || label == null}
    class:mdc-text-field--with-leading-icon={withLeadingIcon}
    class:mdc-text-field--with-trailing-icon={withTrailingIcon}
    class:mdc-text-field--invalid={invalid}
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'variant', 'dense', 'withLeadingIcon', 'withTrailingIcon', 'noLabel', 'label', 'type', 'value', 'dirty', 'invalid', 'updateInvalid', 'useNativeValidation', 'input$', 'label$', 'ripple$', 'outline$'])}
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
        bind:dirty
        bind:invalid
        {updateInvalid}
        on:change
        on:input
        {...placeholderProp}
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
    class="mdc-text-field {className}"
    class:mdc-text-field--disabled={disabled}
    class:mdc-text-field--fullwidth={fullwidth}
    class:mdc-text-field--textarea={textarea}
    class:mdc-text-field--outlined={variant === 'outlined' && !fullwidth}
    class:smui-text-field--standard={variant === 'standard' && !fullwidth}
    class:mdc-text-field--dense={dense}
    class:mdc-text-field--no-label={noLabel}
    class:mdc-text-field--with-leading-icon={withLeadingIcon}
    class:mdc-text-field--with-trailing-icon={withTrailingIcon}
    class:mdc-text-field--invalid={invalid}
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'variant', 'dense', 'withLeadingIcon', 'withTrailingIcon', 'noLabel', 'label', 'type', 'value', 'dirty', 'invalid', 'updateInvalid', 'useNativeValidation', 'input$', 'label$', 'ripple$', 'outline$'])}
  >
    <slot></slot>
  </div>
{/if}

<script>
  import {MDCTextField} from '@material/textfield';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';
  import FloatingLabel from '../floating-label/FloatingLabel.svelte';
  import LineRipple from '../line-ripple/LineRipple.svelte';
  import NotchedOutline from '../notched-outline/NotchedOutline.svelte';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  const forwardEvents = forwardEventsBuilder(current_component);
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
  export let dirty = false;
  export let invalid = uninitializedValue;
  export let updateInvalid = invalid === uninitializedValue;
  export let useNativeValidation = updateInvalid;

  let element;
  let textField;

  $: valued = value !== uninitializedValue;

  $: placeholderProp = (fullwidth && label) ? {placeholder: label} : {};

  $: if (textField && valued && textField.value !== value) {
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

  onMount(() => {
    textField = new MDCTextField(element);

    if (!ripple) {
      textField.ripple.destroy();
    }
  });

  onDestroy(() => {
    textField.destroy();
  });

  export function focus(...args) {
    return textField.focus(...args);
  }

  export function layout(...args) {
    return textField.layout(...args);
  }
</script>