<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple: ripple && !toggle,
        unbounded: true,
        color,
        disabled: !!$$props.disabled,
        addClass,
        removeClass,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  forwardEvents={forwardedEvents}
  class="
    mdc-icon-button
    {className}
    {Object.keys(
    internalClasses
  ).join(' ')}
    {pressed ? 'mdc-icon-button--on' : ''}
    {context ===
  'card:action'
    ? 'mdc-card__action'
    : ''}
    {context === 'card:action'
    ? 'mdc-card__action--icon'
    : ''}
    {context === 'top-app-bar:navigation'
    ? 'mdc-top-app-bar__navigation-icon'
    : ''}
    {context === 'top-app-bar:action'
    ? 'mdc-top-app-bar__action-item'
    : ''}
    {context === 'snackbar' ? 'mdc-snackbar__dismiss' : ''}
  "
  aria-hidden="true"
  on:click={() => instance && instance.handleClick()}
  on:click={() =>
    context === 'top-app-bar:navigation' &&
    dispatch(element, 'MDCTopAppBar:nav')}
  {...ariaAttributes}
  {...internalAttrs}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'toggle',
    'pressed',
    'ariaLabelOn',
    'ariaLabelOff',
  ])}><slot /></svelte:component
>

<script>
  import { MDCIconButtonToggleFoundation } from '@material/icon-button';
  import { onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardedEvents = ['MDCIconButtonToggle:change'];
  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardedEvents
  );

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = null;
  export let toggle = false;
  export let pressed = false;
  // If toggle is true and these are null, the aria-pressed attribute it set.
  export let ariaLabelOn = null;
  export let ariaLabelOff = null;
  // Purposely left out of props exclude.
  export let href = null;

  export let component = href == null ? Button : A;

  let element;
  let instance;
  let internalClasses = {};
  let internalAttrs = {};
  let context = getContext('SMUI:icon-button:context');

  $: ariaAttributes = toggle
    ? ariaLabelOff == null || ariaLabelOn == null
      ? { 'aria-pressed': pressed ? 'true' : 'false' }
      : {
          'aria-label': pressed ? ariaLabelOn : ariaLabelOff,
          'data-aria-label-on': ariaLabelOn,
          'data-aria-label-off': ariaLabelOff,
        }
    : {};

  setContext('SMUI:icon:context', 'icon-button');

  let oldToggle = null;
  $: if (element && toggle !== oldToggle) {
    if (toggle) {
      instance = new MDCIconButtonToggleFoundation({
        addClass,
        hasClass: (className) => getElement().classList.contains(className),
        notifyChange: (evtData) => {
          handleChange(evtData);
          dispatch(element, 'MDCIconButtonToggle:change', evtData);
        },
        removeClass,
        getAttr: (attrName) => getElement().getAttribute(attrName),
        setAttr: addAttr,
      });
      instance.init();
    } else if (oldToggle) {
      instance && instance.destroy();
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

  function addClass(className) {
    internalClasses[className] = true;
  }

  function removeClass(className) {
    delete internalClasses[className];
  }

  function addAttr(name, value) {
    internalAttrs[name] = value;
  }

  function handleChange(evtData) {
    pressed = evtData.isOn;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
