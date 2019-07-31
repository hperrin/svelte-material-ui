{#if valued}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field {className}"
    class:mdc-text-field--disabled={disabled}
    class:mdc-text-field--fullwidth={fullwidth}
    class:mdc-text-field--textarea={textarea}
    class:mdc-text-field--outlined={outlined && !fullwidth}
    class:mdc-text-field--dense={dense}
    class:mdc-text-field--no-label={noLabel || label == null}
    class:mdc-text-field--with-leading-icon={withLeadingIcon}
    class:mdc-text-field--with-trailing-icon={withTrailingIcon}
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'outlined', 'dense', 'noLabel', 'withLeadingIcon', 'withTrailingIcon', 'lineRipple', 'label', 'type', 'value', 'inputProps'])}
  >
    <slot></slot>
    {#if textarea}
      <Textarea
        {disabled}
        bind:value
        {...exclude(inputProps, ['type', 'value'])}
      />
    {:else}
      <Input
        {type}
        {disabled}
        bind:value
        {...placeholderProp}
        {...exclude(inputProps, ['type', 'value'])}
      />
    {/if}
    {#if !textarea && !outlined}
      {#if !noLabel && label != null && !fullwidth}
        <FloatingLabel wrapped>{label}<slot name="label"></slot></FloatingLabel>
      {/if}
      {#if lineRipple}
        <LineRipple />
      {/if}
    {/if}
    {#if textarea || (outlined && !fullwidth)}
      <NotchedOutline noLabel={noLabel || label == null}>
        {#if !noLabel && label != null}
          <FloatingLabel wrapped>{label}<slot name="label"></slot></FloatingLabel>
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
    class:mdc-text-field--outlined={outlined && !fullwidth}
    class:mdc-text-field--dense={dense}
    class:mdc-text-field--no-label={noLabel}
    class:mdc-text-field--with-leading-icon={withLeadingIcon}
    class:mdc-text-field--with-trailing-icon={withTrailingIcon}
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'outlined', 'dense', 'noLabel', 'withLeadingIcon', 'withTrailingIcon', 'lineRipple', 'label', 'type', 'value', 'inputProps'])}
  >
    <slot></slot>
  </div>
{/if}

<script context="module">
  import Input from './Input';
  import Textarea from './Textarea';
  import Icon from './Icon';
  import HelperLine from './HelperLine';
  import HelperText from './HelperText';
  import CharacterCount from './CharacterCount';

  export {Input, Textarea, Icon, HelperLine, HelperText, CharacterCount};
</script>

<script>
  import {MDCTextField} from '@material/textfield';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import FloatingLabel from '../floating-label';
  import LineRipple from '../line-ripple';
  import NotchedOutline from '../notched-outline';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let disabled = false;
  export let fullwidth = false;
  export let textarea = false;
  export let outlined = false;
  export let dense = false;
  export let noLabel = false;
  export let withLeadingIcon = false;
  export let withTrailingIcon = false;
  export let lineRipple = true;
  export let label = null;
  export let type = 'text';
  export let value = uninitializedValue;
  export let inputProps = {
    use: [],
    class: ''
  };

  let element;
  let textField;

  setContext('SMUI:iconContext', 'textfield');

  $: valued = value !== uninitializedValue;

  $: placeholderProp = (fullwidth && label) ? {placeholder: label} : {};

  $: if (textField && textField.disabled !== disabled) {
    textField.disabled = disabled;
  }

  $: if (textField && valued && textField.value !== value) {
    textField.value = value;
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
</script>

<style lang="scss" global>
  @import "@material/textfield/mdc-text-field";
</style>