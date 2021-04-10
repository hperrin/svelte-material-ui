{#if valued}
  <label
    bind:this={element}
    use:Ripple={{
      ripple,
      unbounded: false,
      addClass,
      removeClass,
      active: input && matches(input.getElement(), ':active'),
      registerInteractionHandler: (evtType, handler) =>
        input.getElement &&
        input.getElement().addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        input.getElement &&
        input
          .getElement()
          .removeEventListener(evtType, handler, applyPassive()),
      initPromise,
    }}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--filled': variant === 'filled',
      'mdc-text-field--outlined': variant === 'outlined',
      'smui-text-field--standard': variant === 'standard' && !textarea,
      'mdc-text-field--no-label': noLabel || (label == null && !$$slots.label),
      'mdc-text-field--label-floating': value != null && value !== '',
      'mdc-text-field--with-leading-icon': $$slots.leadingIcon,
      'mdc-text-field--with-trailing-icon': $$slots.trailingIcon,
      'mdc-text-field--with-internal-counter':
        textarea && $$slots.internalCounter,
      'mdc-text-field--invalid': invalid !== uninitializedValue && invalid,
      ...internalClasses,
    })}
    on:SMUI:textfield:leading-icon:mount={(event) =>
      (leadingIcon = event.detail)}
    on:SMUI:textfield:leading-icon:unmount={() => (leadingIcon = undefined)}
    on:SMUI:textfield:trailing-icon:mount={(event) =>
      (trailingIcon = event.detail)}
    on:SMUI:textfield:trailing-icon:unmount={() => (trailingIcon = undefined)}
    on:SMUI:textfield:character-counter:mount={(event) =>
      (characterCounter = event.detail)}
    on:SMUI:textfield:character-counter:unmount={() =>
      (characterCounter = undefined)}
    {...props}
  >
    {#if !textarea && variant !== 'outlined'}
      <span class="mdc-text-field__ripple" />
      {#if !noLabel && (label != null || $$slots.label)}
        <FloatingLabel
          bind:this={floatingLabel}
          floatAbove={value != null && value !== ''}
          {required}
          wrapped
          {...prefixFilter($$props, 'label$')}
          >{label == null ? '' : label}<slot name="label" /></FloatingLabel
        >
      {/if}
    {/if}
    {#if textarea || variant === 'outlined'}
      <NotchedOutline
        bind:this={notchedOutline}
        noLabel={noLabel || label == null}
        {...prefixFilter($$props, 'outline$')}
      >
        {#if !noLabel && (label != null || $$slots.label)}
          <FloatingLabel
            bind:this={floatingLabel}
            floatAbove={value != null && value !== ''}
            {required}
            wrapped
            {...prefixFilter($$props, 'label$')}
            >{label == null ? '' : label}<slot name="label" /></FloatingLabel
          >
        {/if}
      </NotchedOutline>
    {/if}
    <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
      <slot name="leadingIcon" />
    </ContextFragment>
    <slot />
    {#if textarea}
      <span class="mdc-text-field__resizer">
        <Textarea
          bind:this={input}
          {disabled}
          {required}
          bind:value
          bind:dirty
          bind:invalid
          {updateInvalid}
          on:change
          on:input
          on:blur
          on:focus
          aria-controls={helperId ? get(helperId) : null}
          aria-describedby={helperId ? get(helperId) : null}
          {...prefixFilter($$props, 'input$')}
        />
        <slot name="internalCounter" />
      </span>
    {:else}
      <slot name="prefix" />
      {#if prefix != null}
        <Prefix>{prefix}</Prefix>
      {/if}
      <Input
        bind:this={input}
        {type}
        {disabled}
        {required}
        bind:value
        bind:files
        bind:dirty
        bind:invalid
        {updateInvalid}
        on:change
        on:input
        on:blur
        on:focus
        aria-controls={helperId ? get(helperId) : null}
        aria-describedby={helperId ? get(helperId) : null}
        {...noLabel && label != null ? { placeholder: label } : {}}
        {...prefixFilter($$props, 'input$')}
      />
      {#if suffix != null}
        <Suffix>{suffix}</Suffix>
      {/if}
      <slot name="suffix" />
    {/if}
    <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
      <slot name="trailingIcon" />
    </ContextFragment>
    {#if !textarea && variant !== 'outlined' && ripple}
      <LineRipple
        bind:this={lineRipple}
        {...prefixFilter($$props, 'ripple$')}
      />
    {/if}
  </label>
{:else}
  <div
    bind:this={element}
    use:Ripple={{
      ripple,
      unbounded: false,
      addClass,
      removeClass,
    }}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--filled': variant === 'filled',
      'mdc-text-field--outlined': variant === 'outlined',
      'smui-text-field--standard': variant === 'standard' && !textarea,
      'mdc-text-field--no-label': noLabel || !$$slots.label,
      'mdc-text-field--with-leading-icon': $$slots.leadingIcon,
      'mdc-text-field--with-trailing-icon': $$slots.trailingIcon,
      'mdc-text-field--invalid': invalid !== uninitializedValue && invalid,
      ...internalClasses,
    })}
    on:SMUI:textfield:leading-icon:mount={(event) =>
      (leadingIcon = event.detail)}
    on:SMUI:textfield:leading-icon:unmount={() => (leadingIcon = undefined)}
    on:SMUI:textfield:trailing-icon:mount={(event) =>
      (trailingIcon = event.detail)}
    on:SMUI:textfield:trailing-icon:unmount={() => (trailingIcon = undefined)}
    {...props}
  >
    <slot name="label" />
    <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
      <slot name="leadingIcon" />
    </ContextFragment>
    <slot />
    <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
      <slot name="trailingIcon" />
    </ContextFragment>
    <slot name="ripple" />
  </div>
{/if}
{#if $$slots.helper}
  <HelperLine
    on:SMUI:textfield:helper-text:id={(event) => (helperId = event.detail)}
    on:SMUI:textfield:helper-text:mount={(event) => (helperText = event.detail)}
    on:SMUI:textfield:helper-text:unmount={() => {
      helperId = undefined;
      helperText = undefined;
    }}
    on:SMUI:textfield:character-counter:mount={(event) =>
      (characterCounter = event.detail)}
    on:SMUI:textfield:character-counter:unmount={() =>
      (characterCounter = undefined)}
    {...prefixFilter($$props, 'helperLine$')}><slot name="helper" /></HelperLine
  >
{/if}

<script>
  import { MDCTextFieldFoundation } from '@material/textfield';
  import { applyPassive } from '@material/dom/events';
  import { matches } from '@material/dom/ponyfill';
  import { onMount, onDestroy, getContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { get } from 'svelte/store';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';
  import ContextFragment from '@smui/common/ContextFragment.svelte';
  import Ripple from '@smui/ripple/bare.js';
  import FloatingLabel from '@smui/floating-label/FloatingLabel.svelte';
  import LineRipple from '@smui/line-ripple/LineRipple.svelte';
  import NotchedOutline from '@smui/notched-outline/NotchedOutline.svelte';
  import HelperLine from './HelperLine.js';
  import Prefix from './Prefix.js';
  import Suffix from './Suffix.js';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let disabled = false;
  export let required = false;
  export let textarea = false;
  export let variant = textarea ? 'outlined' : 'standard';
  export let noLabel = false;
  export let label = null;
  export let type = 'text';
  export let value = uninitializedValue;
  export let files = uninitializedValue;
  export let dirty = false;
  export let invalid = uninitializedValue;
  export let prefix = null;
  export let suffix = null;
  export let updateInvalid = invalid === uninitializedValue;
  export let validateOnValueChange = updateInvalid;
  export let useNativeValidation = updateInvalid;

  // Components
  export let input = undefined;
  export let floatingLabel = undefined;
  export let lineRipple = undefined;
  export let notchedOutline = undefined;

  $: props = exclude($$props, [
    'use',
    'class',
    'ripple',
    'disabled',
    'required',
    'textarea',
    'variant',
    'noLabel',
    'label',
    'type',
    'value',
    'dirty',
    'invalid',
    'prefix',
    'suffix',
    'updateInvalid',
    'validateOnValueChange',
    'useNativeValidation',
    // Components
    'input',
    'floatingLabel',
    'lineRipple',
    'notchedOutline',
    // Prefixes
    'input$',
    'label$',
    'ripple$',
    'outline$',
    'helperLine$',
  ]);

  let element;
  let instance;
  let internalClasses = {};
  let helperId;
  // These are instances, not accessors.
  let leadingIcon;
  let trailingIcon;
  let helperText;
  let characterCounter;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let initPromiseResolve;
  let initPromise = new Promise((resolve) => (initPromiseResolve = resolve));

  $: valued = value !== uninitializedValue || files !== uninitializedValue;

  $: if (instance && instance.isValid() !== !invalid) {
    if (updateInvalid) {
      invalid = !instance.isValid();
    } else {
      instance.setValid(!invalid);
    }
  }

  $: if (
    instance &&
    instance.getValidateOnValueChange() !== validateOnValueChange
  ) {
    instance.setValidateOnValueChange(
      validateOnValueChange === uninitializedValue
        ? false
        : validateOnValueChange
    );
  }

  $: if (instance) {
    instance.setUseNativeValidation(useNativeValidation);
  }

  $: if (instance) {
    instance.setDisabled(disabled);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    instance = new MDCTextFieldFoundation(
      {
        // getRootAdapterMethods_
        addClass,
        removeClass,
        hasClass,
        registerTextFieldInteractionHandler: (evtType, handler) =>
          getElement().addEventListener(evtType, handler),
        deregisterTextFieldInteractionHandler: (evtType, handler) =>
          getElement().removeEventListener(evtType, handler),
        registerValidationAttributeChangeHandler: (handler) => {
          const getAttributesList = (mutationsList) => {
            return mutationsList
              .map((mutation) => mutation.attributeName)
              .filter((attributeName) => attributeName);
          };
          const observer = new MutationObserver((mutationsList) =>
            handler(getAttributesList(mutationsList))
          );
          const config = { attributes: true };
          observer.observe(input.getElement(), config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: (observer) => {
          observer.disconnect();
        },

        // getInputAdapterMethods_
        getNativeInput: () => input.getElement(),
        setInputAttr: (name, value) => {
          input.addAttr(name, value);
        },
        removeInputAttr: (name) => {
          input.removeAttr(name);
        },
        isFocused: () => {
          if (!input) debugger;
          return document.activeElement === input.getElement();
        },
        registerInputInteractionHandler: (evtType, handler) => {
          input.getElement().addEventListener(evtType, handler, applyPassive());
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          input
            .getElement()
            .removeEventListener(evtType, handler, applyPassive());
        },

        // getLabelAdapterMethods_
        floatLabel: (shouldFloat) =>
          floatingLabel && floatingLabel.float(shouldFloat),
        getLabelWidth: () => (floatingLabel ? floatingLabel.getWidth() : 0),
        hasLabel: () => !!floatingLabel,
        shakeLabel: (shouldShake) =>
          floatingLabel && floatingLabel.shake(shouldShake),
        setLabelRequired: (isRequired) =>
          floatingLabel && floatingLabel.setRequired(isRequired),

        // getLineRippleAdapterMethods_
        activateLineRipple: () => lineRipple && lineRipple.activate(),

        deactivateLineRipple: () => lineRipple && lineRipple.deactivate(),

        setLineRippleTransformOrigin: (normalizedX) =>
          lineRipple && lineRipple.setRippleCenter(normalizedX),

        // getOutlineAdapterMethods_
        closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
        hasOutline: () => !!notchedOutline,
        notchOutline: (labelWidth) =>
          notchedOutline && notchedOutline.notch(labelWidth),
      },
      {
        get helperText() {
          return helperText;
        },
        get characterCounter() {
          return characterCounter;
        },
        get leadingIcon() {
          return leadingIcon;
        },
        get trailingIcon() {
          return trailingIcon;
        },
      }
    );

    if (valued) {
      instance.init();
    } else {
      tick().then(() => {
        instance.init();
      });
    }

    initPromiseResolve();

    return () => {
      instance.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  export function focus() {
    input.focus();
  }

  export function layout() {
    instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
