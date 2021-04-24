<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: true,
        color,
        disabled: !!$$restProps.disabled,
        addClass,
        removeClass,
        addStyle,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-icon-button': true,
    'mdc-icon-button--on': pressed !== uninitializedValue && pressed,
    'mdc-card__action': context === 'card:action',
    'mdc-card__action--icon': context === 'card:action',
    'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',
    'mdc-top-app-bar__action-item': context === 'top-app-bar:action',
    'mdc-snackbar__dismiss': context === 'snackbar:actions',
    'mdc-data-table__pagination-button': context === 'data-table:pagination',
    'mdc-data-table__sort-icon-button':
      context === 'data-table:sortable-header-cell',
    'mdc-dialog__close': context === 'dialog:header' && action === 'close',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  aria-pressed={pressed !== uninitializedValue
    ? pressed
      ? 'true'
      : 'false'
    : null}
  aria-label={pressed ? ariaLabelOn : ariaLabelOff}
  data-aria-label-on={ariaLabelOn}
  data-aria-label-off={ariaLabelOff}
  aria-describedby={ariaDescribedby}
  on:click={() => instance && instance.handleClick()}
  on:click={() =>
    context === 'top-app-bar:navigation' &&
    dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}
  {href}
  {...actionProp}
  {...internalAttrs}
  {...$$restProps}><slot /></svelte:component
>

<script>
  import { MDCIconButtonToggleFoundation } from '@material/icon-button';
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color = null;
  export let toggle = false;
  export let pressed = uninitializedValue;
  export let ariaLabelOn = null;
  export let ariaLabelOff = null;
  export let href = null;
  export let action = null;

  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext('SMUI:icon-button:context');
  let ariaDescribedby = getContext('SMUI:icon-button:aria-describedby');

  export let component = href == null ? Button : A;

  $: actionProp = (() => {
    if (context === 'data-table:pagination') {
      switch (action) {
        case 'first-page':
          return { 'data-first-page': 'true' };
        case 'prev-page':
          return { 'data-prev-page': 'true' };
        case 'next-page':
          return { 'data-next-page': 'true' };
        case 'last-page':
          return { 'data-last-page': 'true' };
        default:
          return { 'data-action': 'true' };
      }
    } else if (context === 'dialog:header') {
      return { 'data-mdc-dialog-action': action };
    } else {
      return { action };
    }
  })();

  setContext('SMUI:icon:context', 'icon-button');

  let oldToggle = null;
  $: if (element && getElement() && toggle !== oldToggle) {
    if (toggle && !instance) {
      instance = new MDCIconButtonToggleFoundation({
        addClass,
        hasClass,
        notifyChange: (evtData) => {
          handleChange(evtData);
          dispatch(getElement(), 'MDCIconButtonToggle:change', evtData);
        },
        removeClass,
        getAttr,
        setAttr: addAttr,
      });
      instance.init();
    } else if (!toggle && instance) {
      instance.destroy();
      instance = null;
      internalClasses = {};
      internalAttrs = {};
    }
    oldToggle = toggle;
  }

  $: if (instance && instance.isOn() !== pressed) {
    instance.toggle(pressed);
  }

  onDestroy(() => {
    instance && instance.destroy();
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

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function handleChange(evtData) {
    pressed = evtData.isOn;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
