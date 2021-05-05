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
    for={forId || (inputProps ? inputProps.id : null)}
    {...$$restProps}><slot /></label
  >
{/if}

<script>
  import { MDCFloatingLabelFoundation } from '@material/floating-label';
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  let forId = null;
  export { forId as for };
  export let floatAbove = false;
  export let required = false;
  export let wrapped = false;

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = getContext('SMUI:generic:input:props') || {};

  let previousFloatAbove = floatAbove;
  $: if (previousFloatAbove !== floatAbove) {
    previousFloatAbove = floatAbove;
    instance.float(floatAbove);
  }

  let previousRequired = required;
  $: if (previousRequired !== required) {
    previousRequired = required;
    instance.setRequired(required);
  }

  onMount(() => {
    instance = new MDCFloatingLabelFoundation({
      addClass,
      removeClass,
      getWidth: () => {
        const el = getElement();
        const clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        clone.classList.add('smui-floating-label--remove-transition');
        clone.classList.add('smui-floating-label--force-size');
        clone.classList.remove('mdc-floating-label--float-above');
        const scrollWidth = clone.scrollWidth;
        el.parentNode.removeChild(clone);
        return scrollWidth;
      },
      registerInteractionHandler: (evtType, handler) =>
        getElement().addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        getElement().removeEventListener(evtType, handler),
    });

    const accessor = {
      get element() {
        return getElement();
      },
      addStyle,
      removeStyle,
    };

    dispatch(element, 'SMUI:floating-label:mount', accessor);

    instance.init();

    return () => {
      dispatch(element, 'SMUI:floating-label:unmount', accessor);

      instance.destroy();
    };
  });

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

  function removeStyle(name) {
    if (name in internalStyles) {
      delete internalStyles[name];
      internalStyles = internalStyles;
    }
  }

  export function shake(shouldShake) {
    instance.shake(shouldShake);
  }

  export function float(shouldFloat) {
    floatAbove = shouldFloat;
  }

  export function setRequired(isRequired) {
    required = isRequired;
  }

  export function getWidth() {
    return instance.getWidth();
  }

  export function getElement() {
    return element;
  }
</script>
