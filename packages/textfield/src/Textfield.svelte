<svelte:options runes />

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
    class={classMap({
      [className]: true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--filled': variant === 'filled',
      'mdc-text-field--outlined': variant === 'outlined',
      'smui-text-field--standard': variant === 'standard' && !textarea,
      'mdc-text-field--no-label': noLabel || label == null,
      'mdc-text-field--label-floating':
        focused || (value != null && value !== ''),
      'mdc-text-field--with-leading-icon': isUninitializedValue(withLeadingIcon)
        ? leadingIcon
        : withLeadingIcon,
      'mdc-text-field--with-trailing-icon': isUninitializedValue(
        withTrailingIcon,
      )
        ? trailingIcon
        : withTrailingIcon,
      'mdc-text-field--with-internal-counter': textarea && internalCounter,
      'mdc-text-field--invalid': invalid,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    for={/* suppress a11y warning, since this is wrapped */ undefined}
    {...exclude(restProps, [
      'input$',
      'label$',
      'ripple$',
      'outline$',
      'helperLine$',
    ])}
  >
    {#if !textarea && variant !== 'outlined'}
      {#if variant === 'filled'}
        <span class="mdc-text-field__ripple"></span>
      {/if}
      {#if !noLabel && label != null}
        <FloatingLabel
          bind:this={floatingLabel}
          floatAbove={focused ||
            (value != null &&
              value !== '' &&
              (typeof value !== 'number' || !isNaN(value)))}
          {required}
          wrapped
          {...prefixFilter(restProps, 'label$')}
          >{#if label == null}{:else if typeof label === 'string'}{label}{:else}{@render label()}{/if}</FloatingLabel
        >
      {/if}
    {/if}
    {#if textarea || variant === 'outlined'}
      <NotchedOutline
        bind:this={notchedOutline}
        noLabel={noLabel || label == null}
        {...prefixFilter(restProps, 'outline$')}
      >
        {#if !noLabel && label != null}
          <FloatingLabel
            bind:this={floatingLabel}
            floatAbove={focused ||
              (value != null &&
                value !== '' &&
                (typeof value !== 'number' || !isNaN(value)))}
            {required}
            wrapped
            {...prefixFilter(restProps, 'label$')}
            >{#if label == null}{:else if typeof label === 'string'}{label}{:else}{@render label()}{/if}</FloatingLabel
          >
        {/if}
      </NotchedOutline>
    {/if}
    <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
      {@render leadingIcon?.()}
    </ContextFragment>
    {@render children?.()}
    {#if textarea && typeof value === 'string'}
      <span
        class={classMap({
          'mdc-text-field__resizer':
            !('input$resizable' in restProps) || restProps.input$resizable,
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
          {initialInvalid}
          aria-controls={helperId}
          aria-describedby={helperId}
          {...prefixFilter(restProps, 'input$')}
          onblur={(e) => {
            focused = false;
            // Set initial invalid, because now the user has interacted with the
            // input.
            initialInvalid = true;
            dispatch(getElement(), 'blur', e);
            restProps.input$onblur?.(e);
          }}
          onfocus={(e) => {
            focused = true;
            dispatch(getElement(), 'focus', e);
            restProps.input$onfocus?.(e);
          }}
        />
        {@render internalCounter?.()}
      </span>
    {:else}
      {#if prefix != null}
        {#if typeof prefix === 'string'}
          <Prefix>{prefix}</Prefix>
        {:else}
          {@render prefix?.()}
        {/if}
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
        {initialInvalid}
        aria-controls={helperId}
        aria-describedby={helperId}
        {...noLabel && label != null && typeof label === 'string'
          ? { placeholder: label }
          : {}}
        {...prefixFilter(restProps, 'input$')}
        onblur={(e) => {
          focused = false;
          // Set initial invalid, because now the user has interacted with the
          // input.
          initialInvalid = true;
          dispatch(getElement(), 'blur', e);
          restProps.input$onblur?.(e);
        }}
        onfocus={(e) => {
          focused = true;
          dispatch(getElement(), 'focus', e);
          restProps.input$onfocus?.(e);
        }}
      />
      {#if suffix != null}
        {#if typeof suffix === 'string'}
          <Suffix>{suffix}</Suffix>
        {:else}
          {@render suffix?.()}
        {/if}
      {/if}
    {/if}
    <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
      {@render trailingIcon?.()}
    </ContextFragment>
    {#if !textarea && variant !== 'outlined' && ripple}
      <LineRipple
        bind:this={lineRipple}
        {...prefixFilter(restProps, 'ripple$')}
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
    class={classMap({
      [className]: true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--filled': variant === 'filled',
      'mdc-text-field--outlined': variant === 'outlined',
      'smui-text-field--standard': variant === 'standard' && !textarea,
      'mdc-text-field--no-label': noLabel || label == null,
      'mdc-text-field--with-leading-icon': leadingIcon,
      'mdc-text-field--with-trailing-icon': trailingIcon,
      'mdc-text-field--invalid': invalid,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    {...exclude(restProps, [
      'input$',
      'label$',
      'ripple$',
      'outline$',
      'helperLine$',
    ])}
  >
    {#if typeof label !== 'string'}
      {@render label?.()}
    {/if}
    <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
      {@render leadingIcon?.()}
    </ContextFragment>
    {@render children?.()}
    <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
      {@render trailingIcon?.()}
    </ContextFragment>
    {@render line?.()}
  </div>
{/if}
{#if helper}
  <HelperLine {...prefixFilter(restProps, 'helperLine$')}
    >{@render helper?.()}</HelperLine
  >
{/if}

<script lang="ts">
  import type {
    MDCTextFieldIconFoundation,
    MDCTextFieldHelperTextFoundation,
    MDCTextFieldCharacterCounterFoundation,
  } from '@material/textfield';
  import { MDCTextFieldFoundation } from '@material/textfield';
  import { events } from '@material/dom';
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext, tick } from 'svelte';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';
  import { ContextFragment } from '@smui/common';
  import Ripple from '@smui/ripple';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  import HelperLine from './HelperLine.svelte';
  import Prefix from './Prefix.svelte';
  import Suffix from './Suffix.svelte';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  const { applyPassive } = events;

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * A list of CSS styles.
     */
    style?: string;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * Whether the input is required.
     */
    required?: boolean;
    /**
     * Whether the input is a textarea.
     */
    textarea?: boolean;
    /**
     * The styling variant of the input.
     */
    variant?: 'standard' | 'filled' | 'outlined';
    /**
     * Do not use a label.
     */
    noLabel?: boolean;
    /**
     * The label or a spot for the label.
     */
    label?: string | Snippet;
    /**
     * The input type.
     */
    type?: string;
    /**
     * The value of the input.
     */
    value?: string | number | null | undefined;
    /**
     * The selected files of the input if it is "file" type.
     */
    files?: FileList | null;
    /**
     * Whether the input is invalid.
     */
    invalid?: boolean;
    /**
     * Set to false to prevent updating the value passed to invalid.
     *
     * Defaults to true if and only if the invalid prop was not explicitly set.
     */
    updateInvalid?: boolean;
    /**
     * Set to true to update the invalid state immediately on instantiation.
     */
    initialInvalid?: boolean;
    /**
     * Whether the input has been changed.
     */
    dirty?: boolean;
    /**
     * The prefix on the input or a spot for the prefix.
     */
    prefix?: string | Snippet;
    /**
     * The suffix on the input or a spot for the suffix.
     */
    suffix?: string | Snippet;
    /**
     * Whether to validate the input when its value is changed.
     */
    validateOnValueChange?: boolean;
    /**
     * Whether to use the browser's native validation.
     */
    useNativeValidation?: boolean;
    /**
     * Whether a leading icon will be included after instantiation.
     */
    withLeadingIcon?: boolean;
    /**
     * Whether a trailing icon will be included after instantiation.
     */
    withTrailingIcon?: boolean;
    /**
     * The input component if setting up manually.
     */
    input?: Input | Textarea | undefined;
    /**
     * The floating label component if setting up manually.
     */
    floatingLabel?: FloatingLabel | undefined;
    /**
     * The line ripple component if setting up manually.
     */
    lineRipple?: LineRipple | undefined;
    /**
     * The notched outline component if setting up manually.
     */
    notchedOutline?: NotchedOutline | undefined;

    children?: Snippet;
    /**
     * A spot for the leading icon.
     */
    leadingIcon?: Snippet;
    /**
     * A spot for the trailing icon.
     */
    trailingIcon?: Snippet;
    /**
     * A spot for the internal character counter component.
     */
    internalCounter?: Snippet;
    /**
     * A spot for the line ripple.
     *
     * This used to be the "ripple" slot.
     */
    line?: Snippet;
    /**
     * A spot for the helper line.
     */
    helper?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    disabled = false,
    required = false,
    textarea = false,
    variant = textarea ? 'outlined' : 'standard',
    noLabel = false,
    label,
    type = 'text',
    value = $bindable(),
    files = $bindable(uninitializedValue as unknown as null),
    invalid = $bindable(uninitializedValue as unknown as boolean),
    updateInvalid = isUninitializedValue(invalid),
    initialInvalid: propInitialInvalid = false,
    dirty = $bindable(false),
    prefix,
    suffix,
    validateOnValueChange = updateInvalid,
    useNativeValidation = updateInvalid,
    withLeadingIcon = uninitializedValue as unknown as boolean,
    withTrailingIcon = uninitializedValue as unknown as boolean,
    input,
    floatingLabel,
    lineRipple,
    notchedOutline,
    children,
    leadingIcon,
    trailingIcon,
    internalCounter,
    line,
    helper,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'label', keyof OwnProps> &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof FloatingLabel
      > as `label\$${k}`]?: ComponentProps<typeof FloatingLabel>[k];
    } & {
      [k in keyof ComponentProps<
        typeof NotchedOutline
      > as `outline\$${k}`]?: ComponentProps<typeof NotchedOutline>[k];
    } & {
      [k in keyof ComponentProps<
        typeof LineRipple
      > as `ripple\$${k}`]?: ComponentProps<typeof LineRipple>[k];
    } & {
      [k in keyof SmuiElementPropMap['div'] as `helperLine\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof ComponentProps<
        typeof Input
      > as `input\$${k}`]?: ComponentProps<typeof Input>[k];
    } & {
      [k in keyof ComponentProps<
        typeof Textarea
      > as `input\$${k}`]?: ComponentProps<typeof Textarea>[k];
    } & {
      input$type?: never;
      input$disabled?: never;
      input$required?: never;
      input$value?: never;
      input$files?: never;
      input$dirty?: never;
      input$invalid?: never;
      input$updateInvalid?: never;
      'input$aria-controls'?: never;
      'input$aria-describedby'?: never;
    } = $props();

  // Some trickery to detect uninitialized values but also have the right types.
  const valued =
    value !== undefined ||
    (value === undefined && restProps.input$emptyValueUndefined) ||
    !isUninitializedValue(files);
  if (isUninitializedValue(files)) {
    files = null;
  }
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  // Done with the trickery.

  let element: HTMLLabelElement | HTMLDivElement;
  let instance: MDCTextFieldFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let helperId: string | undefined = $state(undefined);
  let focused = $state(false);
  let initialInvalid = $state(propInitialInvalid);
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let initPromiseResolve: (value: void) => void;
  let initPromise = new Promise<void>(
    (resolve) => (initPromiseResolve = resolve),
  );
  // These are instances, not accessors.
  let leadingIconInstance: MDCTextFieldIconFoundation | undefined = undefined;
  let trailingIconInstance: MDCTextFieldIconFoundation | undefined = undefined;
  let helperTextInstance: MDCTextFieldHelperTextFoundation | undefined =
    undefined;
  let characterCounterInstance:
    | MDCTextFieldCharacterCounterFoundation
    | undefined = undefined;

  const inputElement = $derived(input && input.getElement());

  $effect(() => {
    if (
      (dirty || initialInvalid || !updateInvalid) &&
      instance &&
      instance.isValid() !== !invalid
    ) {
      if (updateInvalid) {
        invalid = !instance.isValid();
      } else {
        instance.setValid(!invalid);
      }
    }
  });

  $effect(() => {
    if (
      instance &&
      instance.getValidateOnValueChange() !== validateOnValueChange
    ) {
      instance.setValidateOnValueChange(
        isUninitializedValue(validateOnValueChange)
          ? false
          : validateOnValueChange,
      );
    }
  });

  $effect(() => {
    if (instance) {
      instance.setUseNativeValidation(
        isUninitializedValue(useNativeValidation) ? true : useNativeValidation,
      );
    }
  });

  $effect(() => {
    if (instance) {
      instance.setDisabled(disabled);
    }
  });

  // React to changes of value from outside component.
  let previousValue = value;
  $effect(() => {
    if (instance && valued && previousValue !== value) {
      previousValue = value;
      // Check the data is flowing down.
      const stringValue = `${value == null ? '' : value}`;
      if (instance.getValue() !== stringValue) {
        instance.setValue(stringValue);
      }
    }
  });

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  setContext(
    'SMUI:textfield:leading-icon:mount',
    (accessor: MDCTextFieldIconFoundation) => {
      leadingIconInstance = accessor;
    },
  );
  setContext('SMUI:textfield:leading-icon:unmount', () => {
    leadingIconInstance = undefined;
  });
  setContext(
    'SMUI:textfield:trailing-icon:mount',
    (accessor: MDCTextFieldIconFoundation) => {
      trailingIconInstance = accessor;
    },
  );
  setContext('SMUI:textfield:trailing-icon:unmount', () => {
    trailingIconInstance = undefined;
  });
  setContext('SMUI:textfield:helper-text:id', (id: string) => {
    helperId = id;
  });
  setContext(
    'SMUI:textfield:helper-text:mount',
    (accessor: MDCTextFieldHelperTextFoundation) => {
      helperTextInstance = accessor;
    },
  );
  setContext('SMUI:textfield:helper-text:unmount', () => {
    helperId = undefined;
    helperTextInstance = undefined;
  });
  setContext(
    'SMUI:textfield:character-counter:mount',
    (accessor: MDCTextFieldCharacterCounterFoundation) => {
      characterCounterInstance = accessor;
    },
  );
  setContext('SMUI:textfield:character-counter:unmount', () => {
    characterCounterInstance = undefined;
  });

  onMount(() => {
    instance = new MDCTextFieldFoundation(
      {
        // getRootAdapterMethods_
        addClass,
        removeClass,
        hasClass,
        registerTextFieldInteractionHandler: (evtType, handler) =>
          eventManager.on(getElement(), evtType, handler),
        deregisterTextFieldInteractionHandler: (evtType, handler) =>
          eventManager.off(getElement(), evtType, handler),
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
          const el = input?.getElement();
          if (el) {
            const opts = applyPassive();
            eventManager.on(
              el,
              evtType,
              handler,
              typeof opts === 'boolean' ? { capture: opts } : opts,
            );
          }
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          const el = input?.getElement();
          if (el) {
            eventManager.off(el, evtType, handler);
          }
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
          return helperTextInstance;
        },
        get characterCounter() {
          return characterCounterInstance;
        },
        get leadingIcon() {
          return leadingIconInstance;
        },
        get trailingIcon() {
          return trailingIconInstance;
        },
      },
    );

    if (valued) {
      if (input == null) {
        throw new Error(
          'SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.',
        );
      }
      instance?.init();
    } else {
      tick().then(() => {
        if (input == null) {
          throw new Error(
            'SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.',
          );
        }
        instance?.init();
      });
    }

    initPromiseResolve();

    return () => {
      instance?.destroy();
      eventManager.clear();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function hasClass(className: string) {
    return className in internalClasses
      ? (internalClasses[className] ?? null)
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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function focus() {
    input?.focus();
  }

  export function blur() {
    input?.blur();
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
