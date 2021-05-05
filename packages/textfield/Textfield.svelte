{#if valued}
  <label
    bind:this={element}
    use:Ripple={{
      ripple: !textarea && variant === 'filled',
      unbounded: false,
      addClass,
      removeClass,
      addStyle,
      eventTarget: inputElement,
      activeTarget: inputElement,
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
      'mdc-text-field--label-floating':
        focused || (value != null && value !== ''),
      'mdc-text-field--with-leading-icon':
        withLeadingIcon === uninitializedValue
          ? $$slots.leadingIcon
          : withLeadingIcon,
      'mdc-text-field--with-trailing-icon':
        withTrailingIcon === uninitializedValue
          ? $$slots.trailingIcon
          : withTrailingIcon,
      'mdc-text-field--with-internal-counter':
        textarea && $$slots.internalCounter,
      'mdc-text-field--invalid': invalid !== uninitializedValue && invalid,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    for={/* suppress a11y warning, since this is wrapped */ null}
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
    {...exclude($$restProps, [
      'input$',
      'label$',
      'ripple$',
      'outline$',
      'helperLine$',
    ])}
  >
    {#if !textarea && variant !== 'outlined'}
      {#if variant === 'filled'}
        <span class="mdc-text-field__ripple" />
      {/if}
      {#if !noLabel && (label != null || $$slots.label)}
        <FloatingLabel
          bind:this={floatingLabel}
          floatAbove={focused || (value != null && value !== '')}
          {required}
          wrapped
          {...prefixFilter($$restProps, 'label$')}
          >{label == null ? '' : label}<slot name="label" /></FloatingLabel
        >
      {/if}
    {/if}
    {#if textarea || variant === 'outlined'}
      <NotchedOutline
        bind:this={notchedOutline}
        noLabel={noLabel || (label == null && !$$slots.label)}
        {...prefixFilter($$restProps, 'outline$')}
      >
        {#if !noLabel && (label != null || $$slots.label)}
          <FloatingLabel
            bind:this={floatingLabel}
            floatAbove={focused || (value != null && value !== '')}
            {required}
            wrapped
            {...prefixFilter($$restProps, 'label$')}
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
      <span
        class={classMap({
          'mdc-text-field__resizer':
            !('input$resizable' in $$restProps) || $$restProps.input$resizable,
        })}
      >
        <Textarea
          bind:this={input}
          {disabled}
          {required}
          bind:value
          bind:dirty
          bind:invalid
          {updateInvalid}
          on:blur={() => (focused = false)}
          on:focus={() => (focused = true)}
          on:blur
          on:focus
          aria-controls={helperId}
          aria-describedby={helperId}
          {...prefixFilter($$restProps, 'input$')}
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
        on:blur={() => (focused = false)}
        on:focus={() => (focused = true)}
        on:blur
        on:focus
        aria-controls={helperId}
        aria-describedby={helperId}
        {...noLabel && label != null ? { placeholder: label } : {}}
        {...prefixFilter($$restProps, 'input$')}
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
        {...prefixFilter($$restProps, 'ripple$')}
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
      addStyle,
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
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    on:SMUI:textfield:leading-icon:mount={(event) =>
      (leadingIcon = event.detail)}
    on:SMUI:textfield:leading-icon:unmount={() => (leadingIcon = undefined)}
    on:SMUI:textfield:trailing-icon:mount={(event) =>
      (trailingIcon = event.detail)}
    on:SMUI:textfield:trailing-icon:unmount={() => (trailingIcon = undefined)}
    {...exclude($$restProps, [
      'input$',
      'label$',
      'ripple$',
      'outline$',
      'helperLine$',
    ])}
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
    {...prefixFilter($$restProps, 'helperLine$')}
    ><slot name="helper" /></HelperLine
  >
{/if}

<script>
  import { MDCTextFieldFoundation } from '@material/textfield';
  import { events } from '@material/dom';
  import { onMount, onDestroy, getContext, tick } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';
  import ContextFragment from '@smui/common/ContextFragment.svelte';
  import Ripple from '@smui/ripple';
  import FloatingLabel from '@smui/floating-label/FloatingLabel.svelte';
  import LineRipple from '@smui/line-ripple/LineRipple.svelte';
  import NotchedOutline from '@smui/notched-outline/NotchedOutline.svelte';
  import HelperLine from './HelperLine.js';
  import Prefix from './Prefix.js';
  import Suffix from './Suffix.js';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';
  const { applyPassive } = events;

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
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
  export let withLeadingIcon = uninitializedValue;
  export let withTrailingIcon = uninitializedValue;

  // Components
  export let input = undefined;
  export let floatingLabel = undefined;
  export let lineRipple = undefined;
  export let notchedOutline = undefined;

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let helperId;
  let focused = false;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let initPromiseResolve;
  let initPromise = new Promise((resolve) => (initPromiseResolve = resolve));
  // These are instances, not accessors.
  let leadingIcon;
  let trailingIcon;
  let helperText;
  let characterCounter;

  $: valued = value !== uninitializedValue || files !== uninitializedValue;
  $: inputElement = input && input.getElement();

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

  // React to changes of value from outside component.
  let previousValue = value;
  $: if (instance && valued && previousValue !== value) {
    previousValue = value;
    // Check the data is flowing down.
    if (instance.getValue() !== value) {
      instance.setValue(value);
    }
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
          const observer = new MutationObserver((mutationsList) => {
            if (useNativeValidation) {
              handler(getAttributesList(mutationsList));
            }
          });
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
        isFocused: () => document.activeElement === input.getElement(),
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

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function focus() {
    input.focus();
  }

  export function layout() {
    if (instance) {
      const openNotch = instance.shouldFloat;
      instance.notchOutline(openNotch);
    }
  }

  export function getElement() {
    return element;
  }
</script>
