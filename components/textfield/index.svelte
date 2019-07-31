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
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'outlined', 'dense', 'noLabel', 'withLeadingIcon', 'withTrailingIcon', 'lineRipple', 'label', 'type', 'value', 'input$', 'label$', 'ripple$', 'outline$'])}
  >
    <slot></slot>
    {#if textarea}
      <Textarea
        {disabled}
        bind:value
        bind:dirty
        bind:invalid
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
        on:change
        on:input
        {...placeholderProp}
        {...prefixFilter($$props, 'input$')}
      />
    {/if}
    {#if !textarea && !outlined}
      {#if !noLabel && label != null && !fullwidth}
        <FloatingLabel wrapped {...prefixFilter($$props, 'label$')}>{label}<slot name="label"></slot></FloatingLabel>
      {/if}
      {#if lineRipple}
        <LineRipple {...prefixFilter($$props, 'ripple$')} />
      {/if}
    {/if}
    {#if textarea || (outlined && !fullwidth)}
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
    class:mdc-text-field--outlined={outlined && !fullwidth}
    class:mdc-text-field--dense={dense}
    class:mdc-text-field--no-label={noLabel}
    class:mdc-text-field--with-leading-icon={withLeadingIcon}
    class:mdc-text-field--with-trailing-icon={withTrailingIcon}
    {...exclude($$props, ['use', 'class', 'ripple', 'disabled', 'fullwidth', 'textarea', 'outlined', 'dense', 'noLabel', 'withLeadingIcon', 'withTrailingIcon', 'lineRipple', 'label', 'type', 'value', 'input$', 'label$', 'ripple$', 'outline$'])}
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
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import FloatingLabel from '../floating-label';
  import LineRipple from '../line-ripple';
  import NotchedOutline from '../notched-outline';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {prefixFilter} from '../prefixFilter';
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
  export let dirty = false;
  export let invalid = false;

  let element;
  let textField;

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