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
      'mdc-text-field--with-leading-icon': isUninitializedValue(withLeadingIcon)
        ? $$slots.leadingIcon
        : withLeadingIcon,
      'mdc-text-field--with-trailing-icon': isUninitializedValue(
        withTrailingIcon
      )
        ? $$slots.trailingIcon
        : withTrailingIcon,
      'mdc-text-field--with-internal-counter':
        textarea && $$slots.internalCounter,
      'mdc-text-field--invalid': invalid,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    for={/* suppress a11y warning, since this is wrapped */ undefined}
    on:SMUITextfieldLeadingIcon:mount={(event) => (leadingIcon = event.detail)}
    on:SMUITextfieldLeadingIcon:unmount={() => (leadingIcon = undefined)}
    on:SMUITextfieldTrailingIcon:mount={(event) =>
      (trailingIcon = event.detail)}
    on:SMUITextfieldTrailingIcon:unmount={() => (trailingIcon = undefined)}
    on:SMUITextfieldCharacterCounter:mount={(event) =>
      (characterCounter = event.detail)}
    on:SMUITextfieldCharacterCounter:unmount={() =>
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
    {#if textarea && typeof value === 'string'}
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
          on:blur={(event) => dispatch(element, 'blur', event)}
          on:focus={(event) => dispatch(element, 'focus', event)}
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
        on:blur={(event) => dispatch(element, 'blur', event)}
        on:focus={(event) => dispatch(element, 'focus', event)}
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
      'mdc-text-field--invalid': invalid,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    on:SMUITextfieldLeadingIcon:mount={(event) => (leadingIcon = event.detail)}
    on:SMUITextfieldLeadingIcon:unmount={() => (leadingIcon = undefined)}
    on:SMUITextfieldTrailingIcon:mount={(event) =>
      (trailingIcon = event.detail)}
    on:SMUITextfieldTrailingIcon:unmount={() => (trailingIcon = undefined)}
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
    on:SMUITextfieldHelperText:id={(event) => (helperId = event.detail)}
    on:SMUITextfieldHelperText:mount={(event) => (helperText = event.detail)}
    on:SMUITextfieldHelperText:unmount={() => {
      helperId = undefined;
      helperText = undefined;
    }}
    on:SMUITextfieldCharacterCounter:mount={(event) =>
      (characterCounter = event.detail)}
    on:SMUITextfieldCharacterCounter:unmount={() =>
      (characterCounter = undefined)}
    {...prefixFilter($$restProps, 'helperLine$')}
    ><slot name="helper" /></HelperLine
  >
{/if}

<script lang="ts">
  import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
  import type { FloatingLabelComponentDev } from '@smui/floating-label';
  import type { LineRippleComponentDev } from '@smui/line-ripple';
  import type { NotchedOutlineComponentDev } from '@smui/notched-outline';
  import type MDCTextFieldIconFoundation from '@material/textfield/icon/foundation';
  import type MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation';
  import type MDCTextFieldCharacterCounterFoundation from '@material/textfield/character-counter/foundation';
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
    ActionArray,
    dispatch,
  } from '@smui/common/internal/index.js';
  import { ContextFragment } from '@smui/common';
  import Ripple from '@smui/ripple';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  import HelperLine from './HelperLine.js';
  import Prefix from './Prefix.js';
  import Suffix from './Suffix.js';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  const { applyPassive } = events;

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let disabled = false;
  export let required = false;
  export let textarea = false;
  export let variant: 'standard' | 'filled' | 'outlined' = textarea
    ? 'outlined'
    : 'standard';
  export let noLabel = false;
  export let label: string | undefined = undefined;
  export let type = 'text';

  // Some trickery to detect uninitialized values but also have the right types.
  export let value: string | number | null | undefined =
    uninitializedValue as unknown as undefined;
  export let files: FileList | null = uninitializedValue as unknown as null;
  const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
  if (isUninitializedValue(value)) {
    value = undefined;
  }
  if (isUninitializedValue(files)) {
    files = null;
  }

  export let invalid: boolean = uninitializedValue as unknown as boolean;
  export let updateInvalid: boolean = isUninitializedValue(invalid);
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  // Done with the trickery.

  export let dirty = false;
  export let prefix: string | undefined = undefined;
  export let suffix: string | undefined = undefined;
  export let validateOnValueChange: UninitializedValue | boolean =
    updateInvalid;
  export let useNativeValidation: UninitializedValue | boolean = updateInvalid;
  export let withLeadingIcon: UninitializedValue | boolean = uninitializedValue;
  export let withTrailingIcon: UninitializedValue | boolean =
    uninitializedValue;

  // Components
  export let input: Input | Textarea | undefined = undefined;
  export let floatingLabel: FloatingLabelComponentDev | undefined = undefined;
  export let lineRipple: LineRippleComponentDev | undefined = undefined;
  export let notchedOutline: NotchedOutlineComponentDev | undefined = undefined;

  let element: HTMLLabelElement | HTMLDivElement;
  let instance: MDCTextFieldFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let helperId: string | undefined = undefined;
  let focused = false;
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let initPromiseResolve: (value: void) => void;
  let initPromise = new Promise<void>(
    (resolve) => (initPromiseResolve = resolve)
  );
  // These are instances, not accessors.
  let leadingIcon: MDCTextFieldIconFoundation | undefined = undefined;
  let trailingIcon: MDCTextFieldIconFoundation | undefined = undefined;
  let helperText: MDCTextFieldHelperTextFoundation | undefined = undefined;
  let characterCounter: MDCTextFieldCharacterCounterFoundation | undefined =
    undefined;

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
      isUninitializedValue(validateOnValueChange)
        ? false
        : validateOnValueChange
    );
  }

  $: if (instance) {
    instance.setUseNativeValidation(
      isUninitializedValue(useNativeValidation) ? true : useNativeValidation
    );
  }

  $: if (instance) {
    instance.setDisabled(disabled);
  }

  // React to changes of value from outside component.
  let previousValue = value;
  $: if (instance && valued && previousValue !== value) {
    previousValue = value;
    // Check the data is flowing down.
    const stringValue = `${value}`;
    if (instance.getValue() !== stringValue) {
      instance.setValue(stringValue);
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
          getElement().addEventListener(evtType, handler as EventListener),
        deregisterTextFieldInteractionHandler: (evtType, handler) =>
          getElement().removeEventListener(evtType, handler as EventListener),
        registerValidationAttributeChangeHandler: (handler) => {
          const getAttributesList = (mutationsList: MutationRecord[]) => {
            return mutationsList
              .map((mutation) => mutation.attributeName)
              .filter((attributeName) => attributeName) as string[];
          };
          const observer = new MutationObserver((mutationsList) => {
            if (useNativeValidation) {
              handler(getAttributesList(mutationsList));
            }
          });
          const config = { attributes: true };
          if (input) {
            observer.observe(input.getElement(), config);
          }
          return observer;
        },
        deregisterValidationAttributeChangeHandler: (observer) => {
          observer.disconnect();
        },

        // getInputAdapterMethods_
        getNativeInput: () => input?.getElement() ?? null,
        setInputAttr: (name, value) => {
          input?.addAttr(name, value);
        },
        removeInputAttr: (name) => {
          input?.removeAttr(name);
        },
        isFocused: () => document.activeElement === input?.getElement(),
        registerInputInteractionHandler: (evtType, handler) => {
          input
            ?.getElement()
            .addEventListener(
              evtType,
              handler as EventListener,
              applyPassive()
            );
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          input
            ?.getElement()
            .removeEventListener(
              evtType,
              handler as EventListener,
              applyPassive()
            );
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
      if (input == null) {
        throw new Error('SMUI Textfield initialized without Input component.');
      }
      instance.init();
    } else {
      tick().then(() => {
        if (input == null) {
          throw new Error(
            'SMUI Textfield initialized without Input component.'
          );
        }
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

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className] ?? null
      : getElement().classList.contains(className);
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addStyle(name: string, value: string) {
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
    input?.focus();
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
