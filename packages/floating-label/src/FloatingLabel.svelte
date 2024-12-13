<svelte:options runes />

{#if wrapped}
  <span
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-floating-label': true,
      'mdc-floating-label--float-above': floatAbove,
      'mdc-floating-label--required': required,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    {...restProps}>{@render children?.()}</span
  >
{:else}
  <label
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-floating-label': true,
      'mdc-floating-label--float-above': floatAbove,
      'mdc-floating-label--required': required,
      ...internalClasses,
    })}
    style={Object.entries(internalStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .concat([style])
      .join(' ')}
    for={forId || (inputProps ? inputProps.id : undefined)}
    {...restProps}>{@render children?.()}</label
  >
{/if}

<script lang="ts">
  import { MDCFloatingLabelFoundation } from '@material/floating-label';
  import type { Snippet } from 'svelte';
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    useActions,
    SvelteEventManager,
  } from '@smui/common/internal';

  import type { SMUIFloatingLabelAccessor } from './FloatingLabel.types.js';

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
     * The ID that this label is for.
     */
    for?: string | undefined;
    /**
     * Whether to float the label.
     */
    floatAbove?: boolean;
    /**
     * Whether to style for a required input.
     */
    required?: boolean;
    /**
     * Whether the input is already wrapped in a label.
     *
     * If not, a label element will be used with the ID value in the `for` prop.
     */
    wrapped?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    for: forId,
    floatAbove = $bindable(false),
    required = $bindable(false),
    wrapped = false,
    children,
    ...restProps
  }: SmuiAttrs<'span', keyof OwnProps> &
    SmuiAttrs<'label', keyof OwnProps> &
    OwnProps = $props();

  let element: HTMLSpanElement | HTMLLabelElement;
  let instance: MDCFloatingLabelFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};

  let previousFloatAbove = floatAbove;
  $effect(() => {
    if (instance && previousFloatAbove !== floatAbove) {
      previousFloatAbove = floatAbove;
      instance.float(floatAbove);
    }
  });

  let previousRequired = required;
  $effect(() => {
    if (instance && previousRequired !== required) {
      previousRequired = required;
      instance.setRequired(required);
    }
  });

  const SMUIFloatingLabelMount = getContext<
    ((accessor: SMUIFloatingLabelAccessor) => void) | undefined
  >('SMUI:floating-label:mount');
  const SMUIFloatingLabelUnmount = getContext<
    ((accessor: SMUIFloatingLabelAccessor) => void) | undefined
  >('SMUI:floating-label:unmount');

  onMount(() => {
    instance = new MDCFloatingLabelFoundation({
      addClass,
      removeClass,
      getWidth: () => {
        const el = getElement();
        const clone = el.cloneNode(true) as typeof el;
        el.parentNode?.appendChild(clone);
        clone.classList.add('smui-floating-label--remove-transition');
        clone.classList.add('smui-floating-label--force-size');
        clone.classList.remove('mdc-floating-label--float-above');
        const scrollWidth = clone.scrollWidth;
        el.parentNode?.removeChild(clone);
        return scrollWidth;
      },
      registerInteractionHandler: (evtType, handler) =>
        eventManager.on(getElement(), evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        eventManager.off(getElement(), evtType, handler),
    });

    const accessor: SMUIFloatingLabelAccessor = {
      get element() {
        return getElement();
      },
      addStyle,
      removeStyle,
    };

    SMUIFloatingLabelMount && SMUIFloatingLabelMount(accessor);

    instance.init();

    return () => {
      SMUIFloatingLabelUnmount && SMUIFloatingLabelUnmount(accessor);

      instance?.destroy();
      eventManager.clear();
    };
  });

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

  function removeStyle(name: string) {
    if (name in internalStyles) {
      delete internalStyles[name];
    }
  }

  export function shake(shouldShake: boolean) {
    instance?.shake(shouldShake);
  }

  export function float(shouldFloat: boolean) {
    floatAbove = shouldFloat;
  }

  export function setRequired(isRequired: boolean) {
    required = isRequired;
  }

  export function getWidth() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.getWidth();
  }

  export function getElement() {
    return element;
  }
</script>
