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
    {Object.keys(internalClasses)
    .filter((className) => internalClasses[className])
    .join(' ')}
    {context === 'card:action'
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
  aria-pressed={toggle ? (pressed ? 'true' : 'false') : null}
  aria-label={pressed ? ariaLabelOn : ariaLabelOff}
  data-aria-label-on={ariaLabelOn}
  data-aria-label-off={ariaLabelOff}
  on:click={() => instance && instance.handleClick()}
  on:click={() =>
    context === 'top-app-bar:navigation' &&
    dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}
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
  export let ariaLabelOn = null;
  export let ariaLabelOff = null;
  // Purposely left out of props exclude.
  export let href = null;

  let element;
  let instance;
  let internalClasses = {};
  let internalAttrs = {};
  let context = getContext('SMUI:icon-button:context');

  export let component = href == null ? Button : A;

  setContext('SMUI:icon:context', 'icon-button');

  $: if (!instance) {
    if (pressed) {
      addClass('mdc-icon-button--on');
    } else {
      removeClass('mdc-icon-button--on');
    }
  }

  let oldToggle = null;
  $: if (element && toggle !== oldToggle) {
    if (toggle) {
      instance = new MDCIconButtonToggleFoundation({
        addClass,
        hasClass,
        notifyChange: (evtData) => {
          handleChange(evtData);
          dispatch(element, 'MDCIconButtonToggle:change', evtData);
        },
        removeClass,
        getAttr,
        setAttr: addAttr,
      });
      instance.init();
    } else if (instance) {
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
    if (internalClasses[className]) {
      internalClasses[className] = false;
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

  function removeAttr(name) {
    if (name in internalAttrs) {
      internalAttrs[name] = undefined;
    }
  }

  function handleChange(evtData) {
    console.log('event called: ', evtData);
    pressed = evtData.isOn;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
