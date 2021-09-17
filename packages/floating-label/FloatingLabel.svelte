{#if wrapped}
  <span
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
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
    {...$$restProps}><slot /></span
  >
{:else}
  <label
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
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
    {...$$restProps}><slot /></label
  >
{/if}

<script lang="ts">
  import { MDCFloatingLabelFoundation } from '@material/floating-label';
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';

  import type { SMUIFloatingLabelAccessor } from './FloatingLabel.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let forId: string | undefined = undefined;
  export { forId as for };
  export let floatAbove = false;
  export let required = false;
  export let wrapped = false;

  let element: HTMLSpanElement | HTMLLabelElement;
  let instance: MDCFloatingLabelFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};

  let previousFloatAbove = floatAbove;
  $: if (instance && previousFloatAbove !== floatAbove) {
    previousFloatAbove = floatAbove;
    instance.float(floatAbove);
  }

  let previousRequired = required;
  $: if (instance && previousRequired !== required) {
    previousRequired = required;
    instance.setRequired(required);
  }

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
        getElement().addEventListener(evtType, handler as EventListener),
      deregisterInteractionHandler: (evtType, handler) =>
        getElement().removeEventListener(evtType, handler as EventListener),
    });

    const accessor: SMUIFloatingLabelAccessor = {
      get element() {
        return getElement();
      },
      addStyle,
      removeStyle,
    };

    dispatch(element, 'SMUIFloatingLabel:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUIFloatingLabel:unmount', accessor);

      instance.destroy();
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
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function removeStyle(name: string) {
    if (name in internalStyles) {
      delete internalStyles[name];
      internalStyles = internalStyles;
    }
  }

  export function shake(shouldShake: boolean) {
    instance.shake(shouldShake);
  }

  export function float(shouldFloat: boolean) {
    floatAbove = shouldFloat;
  }

  export function setRequired(isRequired: boolean) {
    required = isRequired;
  }

  export function getWidth() {
    return instance.getWidth();
  }

  export function getElement() {
    return element;
  }
</script>
